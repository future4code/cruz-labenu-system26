CREATE TABLE class(
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nome VARCHAR(50),
data_inicio DATE NOT NULL,
data_final DATE NOT NULL,
modulo INT NOT NULL 
);

INSERT INTO class (nome, data_inicio, data_final, modulo)
VALUE
("Cruz", "2021-01-05", "2021-08-08", 1),
("Eiei", "2021-01-05", "2021-08-30", 1);

SELECT * FROM class;

CREATE TABLE student(
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
class_id INT NOT NULL,
nome VARCHAR(50),
email VARCHAR(50) NOT NULL UNIQUE,
data_nasc DATE NOT NULL,
FOREIGN KEY(class_id) REFERENCES class(id)
);

INSERT INTO student (class_id, nome, email, data_nasc)
VALUE
(1, "Maria Eduarda Auler", "madu.auler@gmail.com", "1995-03-21"),
(1, "Milena Cacau", "micacau@gmail.com", "1998-06-09");

SELECT * FROM student;

CREATE TABLE teacher(
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
class_id INT NOT NULL,
nome VARCHAR(50),
email VARCHAR(50) NOT NULL UNIQUE,
data_nasc DATE NOT NULL,
FOREIGN KEY(class_id) REFERENCES class(id)
);

INSERT INTO teacher (class_id, nome, email, data_nasc)
VALUE
(1, "Amanda", "amandinha@gmail.com", "02-02-02"),
(2, "Yuzo", "yuzo@gmail.com", "03-03-03");

SELECT * FROM teacher;
