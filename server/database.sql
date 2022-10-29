CREATE DATABASE pernexchange;

CREATE TABLE exchange(
  exchange_id SERIAL PRIMARY KEY,
  valute_from VARCHAR(3),
  valute_to VARCHAR(3),
  exchange_rate NUMBER(10)
);