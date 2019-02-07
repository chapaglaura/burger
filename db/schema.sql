

CREATE DATABASE items_db;

USE items_db;

CREATE TABLE burgers(
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(255),
    devoured BOOL,
    PRIMARY KEY(id)
);