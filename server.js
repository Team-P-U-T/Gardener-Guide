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

app.get('/results', renderResults);
app.get('/', renderHome);
app.use('*', (request, response) => response.status(404).send('Page not Found'));

// --------- Functions -------
function renderResults(request, response)
{
  
}

function renderHome(request, response)
{
  console.log('you are home');
  console.log('response', response);
  response.render('index');
}

// function Plant()
// {
//   name.this
//   description.this
//   optimal_sun.this
//   optimal_soil.this
//   planting_considerations.this
//   when_to_plant.this
//   growing_from_seed.this
//   transplanting.this
//   spacing.this
//   watering.this
//   feeding
//   other_care
//   diseases
//   pests
//   harvesting
//   storage_use
//   image_url
// }

client.connect()
  .then(() => {
    app.listen(PORT,() => console.log(`listening on ${PORT}`));
  }).catch(err => console.log('error connecting', err));
