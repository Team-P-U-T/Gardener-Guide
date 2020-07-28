'use strict';

const express = require('express');
const pg = require('pg');
const superagent = require('superagent');
const { response } = require('express');
require('dotenv').config();
require('ejs');
// Do we need methodOverride

const app = express();
const PORT = process.env.PORT || 3001;
const client = new pg.Client(process.env.DATABASE_URL);
client.on('client error', error => {
  console.log('client error: ', error);
});

app.set('view engine', 'ejs');

// middleware

app.use(express.static('./public')); //if not finding pages move views into public folder
app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride('_method'));

// paths

app.post('/pages', renderResults);
app.get('/', renderHome);
app.post('/addplant', addToGreenhouse);

app.use('*', (request, response) => response.status(404).send('Page not Found'));



// --------- Functions -------

function renderHome(request, response)
{
  console.log('you are home');

  response.render('index');
}


function renderResults(request, response)
{

  console.log('Made it to renderResults');

  let searchName = request.body.search;
  searchName = searchName.charAt(0).toUpperCase() + searchName.slice(1);

  const url = 'http://harvesthelper.herokuapp.com/api/v1/plants'

  let queryParams = {
    api_key: process.env.PLANTS_API_KEY
  }

  superagent.get(url)
    .query(queryParams)

    .then(results => {
      results.body.forEach(item => {
        if (item.name === searchName) {
          let imageHash = 'https://res-5.cloudinary.com/do6bw42am/image/upload/c_scale,f_auto,h_300/v1/';

          let alreadyExists = false;
          let sql = 'SELECT name FROM greenhouse WHERE name=$1;';
          let safeValue = [searchName];

          client.query(sql, safeValue)
            .then (results => {
              if(results.rowCount > 0){
                alreadyExists = true;
                response.render('pages/results.ejs', { target: item, targetImg: imageHash, alreadyExists: alreadyExists});
              } else{
                alreadyExists = false;
                response.render('pages/results.ejs', { target: item, targetImg: imageHash, alreadyExists: alreadyExists});
              }
            })
        }
      });
    }).catch((error) => {
      console.log('ERROR', error);
      response.render('pages/error');
    })
}


function addToGreenhouse(request, response){

  let {name, description, image_url, optimal_sun, optimal_soil, planting_considerations, when_to_plant, growing_from_seed, transplanting, spacing, watering, feeding, other_care, diseases, pests, harvesting, storage_use} = request.body;

  let sql = 'INSERT INTO greenhouse (name, description, image_url, optimal_sun, optimal_soil, planting_considerations, when_to_plant, growing_from_seed, transplanting, spacing, watering, feeding, other_care, diseases, pests, harvesting, storage_use) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) RETURNING id;';

  let safeValues = [name, description, image_url, optimal_sun, optimal_soil, planting_considerations, when_to_plant, growing_from_seed, transplanting, spacing, watering, feeding, other_care, diseases, pests, harvesting, storage_use];

  client.query(sql, safeValues)
    .then(results => {
      //defining id so that we can use it to uniquely identify users in stretch goals
      // let id = results.rows[0].id;

      let imageHash = 'https://res-5.cloudinary.com/do6bw42am/image/upload/c_scale,f_auto,h_300/v1/';

      let alreadyExists = true;

      response.render('pages/results.ejs', { target: request.body, targetImg: imageHash, alreadyExists: alreadyExists})



      //when clicked, refresh page which will do the logic to check if its in db and render button accordingly







    })





}




client.connect()
  .then(() => {
    app.listen(PORT, () => console.log(`listening on ${PORT}`));
  }).catch(err => console.log('error connecting', err));
