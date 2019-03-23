
USE q8x7rbdt2fa9hup2;

CREATE TABLE `burgers` (
  `id` bigint(60) NOT NULL AUTO_INCREMENT,
  `burger_name` varchar(100) NOT NULL,
  `devoured` boolean,
  date TIMESTAMP not null DEFAULT current_timestamp,
  PRIMARY KEY (`id`)
);
