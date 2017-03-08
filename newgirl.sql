CREATE DATABASE newgirl;

USE newgirl;

CREATE TABLE characters (
	id INTEGER (11) NOT NULL AUTO_INCREMENT,
	name VARCHAR (50) NOT NULL,
	coolness_points INTEGER (11) NOT NULL,
	attitude VARCHAR (50) NOT NULL,
    primary key (id)
);

SELECT * FROM characters;

INSERT INTO characters (name, coolness_points, attitude)
VALUES ("Winston", 80, "prankster"),
("Ferguson", 100, "nonchalant"),
("Jess", 30, "sunshine"),
("Schmidt", 60, "Jewish OCD"),
("Cece", 50, "Princess"),
("Nick", 70, "Complicated")
;  

UPDATE characters
SET attitude = "prankster cop"
WHERE id = 1;
