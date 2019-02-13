DROP DATABASE IF EXISTS yelp;

CREATE DATABASE yelp;

USE yelp;

CREATE TABLE restaurants (
  id INT AUTO_INCREMENT PRIMARY KEY,
  capacity INT NOT NULL
);

CREATE TABLE availabilities (
  id INT AUTO_INCREMENT PRIMARY KEY,
  open_time INT NOT NULL,
  close_time INT NOT NULL,
  day_of_week VARCHAR(10) NOT NULL,
  rest_id INT NOT NULL,
  FOREIGN KEY (rest_id) REFERENCES restaurants (id)
);
