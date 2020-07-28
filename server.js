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
app.use(express.urlencoded({extended:true}));
// app.use(methodOverride('_method'));

// paths

app.post('/pages', renderResults);
app.get('/', renderHome);
app.use('*', (request, response) => response.status(404).send('Page not Found'));



// --------- Functions -------
function renderResults(request, response)
{
  console.log('Made it to renderResults');
  console.log('.body', request.body.search);
  let searchName = request.body.search;
  searchName = searchName.charAt(0).toUpperCase() + searchName.slice(1);
  const url = 'http://harvesthelper.herokuapp.com/api/v1/plants'

  let queryParams = {
    api_key: process.env.PLANTS_API_KEY
  }

  superagent.get(url)
    .query(queryParams)
    .then(results =>
    {
      results.body.forEach(item =>
      {
        if(item.name === searchName)
        {
          console.log('inside if', item)
          response.render()
          return new Plant(item);
        }
      });
    });
}


function renderHome(request, response)
{
  console.log('you are home');

  response.render('index');
}

function Plant(obj)
{
  this.name = obj.name;
//   description
//   optimal_sun
//   optimal_soil
//   planting_considerations
//   when_to_plant
//   growing_from_seed
//   transplanting
//   spacing
//   watering
//   feeding
//   other_care
//   diseases
//   pests
//   harvesting
//   storage_use
//   image_url
}

client.connect()
  .then(() => {
    app.listen(PORT,() => console.log(`listening on ${PORT}`));
  }).catch(err => console.log('error connecting', err));
