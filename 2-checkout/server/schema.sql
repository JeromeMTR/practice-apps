CREATE DATABASE checkout;

use checkout;

-- create tables and
CREATE TABLE account (
  username VARCHAR(225) NOT NULL,
  email VARCHAR(225),
  pass VARCHAR(225)
)

CREATE TABLE addresses (
  line1 VARCHAR(50),
  line2 VARCHAR(50),
  city VARCHAR(50),
  street VARCHAR(50),
  zipcode int(10),
)

CREATE TABLE  (
  cardNumber VARCHAR(225),
  expirationDate VARCHAR(225),
  cvv VARCHAR(225)
  zipcode VARCHAR(225)
)