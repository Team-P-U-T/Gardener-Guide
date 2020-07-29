DROP TABLE IF EXISTS greenhouse;

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
  notes TEXT
)

CREATE TABLE notes(
  id SERIAL PRIMARY KEY,
  notes TEXT,
  plant_key INT NOT NULL,
  FOREIGN KEY (plant_key) REFERENCES greenhouse (id)
)

SELECT * FROM notes JOIN greenhouse ON notes.plant_key = greenhouse.id;