<p align='center'>
  <img width='400' height='200' src='./public/img/logo.png'>
</p>

## Authors    
Meghan Domeck - [GitHub](https://github.com/mdomeck) || [LinkedIn](https://www.linkedin.com/in/meghan-domeck/)   
Hexx King - [GitHub](https://github.com/HexxKing) || [LinkedIn](https://www.linkedin.com/in/hexx-king/)   
David Dicken - [GitHub](https://github.com/daviddicken) || [LinkedIn](https://www.linkedin.com/in/david-dicken/)    
Tia Low - [Github](https://github.com/TiaLow) || [LinkedIn](https://www.linkedin.com/in/tia-low/)   

## Version 
1.0.2 

## Overview
- A gardener's guide and helpful tool for gardeners and plant enthusiasts of any level
- Unique user experience with login abilities
- Search for a plant to find growing details such as *when to plant, spacing, harvesting, etc*
- Save plants to your own "greenhouse" collection in order to be able to access them later
- For each plant saved in your greenhouse collection, you can add, update, and delete notes
- Utilizes RESTful API for plant resource
- Utilizes RESTful API for weather temperature

## Feature Details

<img alt="Login page" width="400" height="600" src='./public/img/login.png'><br>

**Login:** user enters their email. If they have already visited the page, they will be remembered and will see the home search page next (as well as find their greenhouse collection and notes from previous logins). If they have not visited before, they'll be prompted to enter the information below.   

<img alt="New user page" width="400" height="600" src='./public/img/new-user.png'><br>

**New user:** user is prompted to enter their name and zip code. Zip code is used to gather weather temperature information for their location and their profile will be remembered for next time.   

<img alt="Search page" width="400" height="600" src='./public/img/search.png'><br>

**Homepage / search:** user can search for the desired plant. If the plant is already in the database, the results page will be returned as below. If not, user will have the opportunity to complete the fields to add the plant manually to their greenhouse collection.   

<img alt="Result page" width="400" height="600" src='./public/img/result.png'><br>

**Results:** the results of the plant search will be returned with several different pieces of information. User has the opportunity to 'Add to Greenhouse' which will save the plant to the specific user's login profile and allow them to enter notes about it later, if desired. User can also return to homepage for another search.

<img alt="Create a plant page" width="400" height="600" src='./public/img/create.png'><br>

**Create a plant:** if the searched plant does not already exist in the database, the user has the option to manually complete the fields to save to their greenhouse collection.   


<img alt="Greenhouse collection page" width="400" height="600" src='./public/img/greenhouse.png'><br>

**Greenhouse:** this is the user's personalized collection of plants. On this page the user can see the temperature at their location. From here the user has the option to remove the plant from their greenhouse, or click the plant name to take them to the following details page.   

<img alt="Notes page" width="400" height="600" src='./public/img/notes.png'><br>

**Plant details and notes:** user can again see the description and image of the plant, with the option to expand to see the other plant details. User can also add their own notes about their experience with the plant, as they see fit. Once a note is added, it is saved to the user's specific profile for them to always be able to access. They can delete notes, add notes, and edit existing ones.  




## Getting Started
- .env file using envSamples as a template
- **npm install** the following:
  - dotenv
  - ejs
  - express
  - method-override
  - superagent
- create database named plants using postgres
- connect the schema file with the database

## Architecture
- HTML, CSS, JavaScript, jQuery, SQL, ejs
- Express server

**Resources**:
- https://www.w3schools.com/howto/howto_css_image_overlay.asp
- https://www.freelogodesign.org/
- https://github.com/damwhit/harvest_helper
- http://api.weatherbit.io/v2.0/forecast/daily
- https://unsplash.com/  
- https://viliusle.github.io/miniPaint/