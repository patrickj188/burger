CREATE DATABASE `burgers_db`;
USE burgers_db;

CREATE TABLE `burgers` (
  `id` bigint(60) NOT NULL AUTO_INCREMENT,
  `burger_name` varchar(100) NOT NULL,
  `devoured` boolean,
  date TIMESTAMP not null DEFAULT current_timestamp,
  PRIMARY KEY (`id`)
);
