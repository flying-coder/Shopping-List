CREATE DATABASE shoppinglistdatabase;

CREATE TABLE shoppinglist(
  sl_id SERIAL PRIMARY KEY,
  item VARCHAR(140)
);