
DROP DATABASE checkout;
CREATE DATABASE checkout;

use checkout;

-- create tables and
CREATE TABLE Summary (
  cookie varchar(250) NOT NULL UNIQUE,
  username VARCHAR(25) NOT NULL,
  email VARCHAR(50) NOT NULL,
  passwords VARCHAR(25) NOT NULL,
  line1 VARCHAR(50) NOT NULL,
  line2 VARCHAR(50) NOT NULL,
  city VARCHAR(25) NOT NULL,
  street VARCHAR(50) NOT NULL,
  zipcode INT(10) NOT NULL,
  cards BIGINT(20) NOT NULL,
  expiration_date DATE NOT NULL,
  cvv INT(5) NOT NULL,
  billing_zip INT(10) NOT NULL,
  primary key(cookie)
)

-- CREATE TABLE users (
--   id string INT NOT NULL AUTO_INCREMENT,
--   session_id string NOT NULL UNIQUE,
--   username VARCHAR(25) NOT NULL,
--   email VARCHAR(50) NOT NULL,
--   password VARCHAR(25) NOT NULL
-- )

-- CREATE TABLE addresses (
--   line1 VARCHAR(50) NOT NULL,
--   line2 VARCHAR(50) NOT NULL,
--   city VARCHAR(25) NOT NULL,
--   street VARCHAR(50) NOT NULL,
--   zipcode INT(15) NOT NULL
-- )

-- CREATE TABLE cards (
--   card INT(20) NOT NULL,
--   expiration_date DATE NOT NULL,
--   cvv VARCHAR(10) NOT NULL,
--   billing_zip VARCHAR(15) NOT NULL
-- )
