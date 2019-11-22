CREATE DATABASE if not exists assignment2;

CREATE TABLE if not exists assignment2.numberRegister(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  numberReg_name VARCHAR(64),
  numberReg_number VARCHAR(64)
);