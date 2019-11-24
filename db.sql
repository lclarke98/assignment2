CREATE DATABASE if not exists assignment2;

CREATE TABLE if not exists assignment2.register(
  reg_name VARCHAR(64) NOT NULL PRIMARY KEY,
  reg_number VARCHAR(64) NOT NULL
);