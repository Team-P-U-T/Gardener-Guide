<<<<<<< HEAD
DROP TABLE IF EXISTS user_table, greenhouse, notes;

CREATE TABLE user_table(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) ,
  zipcode INT
);

=======
DROP TABLE IF EXISTS greenhouse, notes;
>>>>>>> 7df0a967a9964d378de6501cfc14a0611105fec5

CREATE TABLE greenhouse(
  id SERIAL PRIMARY KEY,
  name VARCHAR (255),
  description TEXT,
  optimal_sun VARCHAR (255),
  optimal_soil VARCHAR (255),
  planting_considerations TEXT,
  when_to_plant TEXT,
  growing_from_seed TEXT,
  transplanting TEXT,
  spacing TEXT,
  watering TEXT,
  feeding TEXT,
  other_care TEXT,
  diseases TEXT,
  pests TEXT,
  harvesting TEXT,
  storage_use TEXT,
  image_url TEXT,
  notes TEXT,
  user_key INT NOT NULL,
  FOREIGN KEY (user_key) REFERENCES user_table (id)
);

CREATE TABLE notes(
  id SERIAL PRIMARY KEY,
  user_notes TEXT,
  plant_key INT NOT NULL,
  FOREIGN KEY (plant_key) REFERENCES greenhouse (id)
);

SELECT * FROM greenhouse JOIN user_table ON greenhouse.user_key = user_table.id;
SELECT * FROM notes JOIN greenhouse ON notes.plant_key = greenhouse.id;