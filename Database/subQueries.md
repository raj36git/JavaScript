CREATE DATABASE college;
USE college;

CREATE TABLE students(
rollNo int PRIMARY KEY,
name VARCHAR(30),
marks int NOT NULL,
grade VARCHAR(2),
city VARCHAR(20)
);

INSERT INTO students
(rollNo,name,marks,grade,city)
VALUES
(1, "ram", 97, 'A+', "BBSR"),
(2, "shyam", 96, 'A+', "Banglore"),
(3, "sita", 79, 'B+', "KTM"),
(4, "krish", 78, 'B+', "Pokhara"),
(5, "laxman", 86, 'A', "Banglore"),
(6, "gopal", 63, 'B', "Pokhara"),
(7, "krishna", 90, 'A+', "KTM");

SELECT * FROM students;
-- Get names of all students who scored more than class average.
-- Step 1. Find the avg of class
-- Step 2. Find the names of students with marks > avg

SELECT avg(marks) FROM students;
SELECT name, marks FROM students
WHERE marks > 84.14;

SELECT name, marks FROM students
WHERE marks > (SELECT avg(marks) FROM students);

-- Find the names of all students with even roll numbers.
-- Step 1. Find the even roll numbers
-- Step 2. Find the names of students with even roll no

SELECT rollNo FROM students
WHERE rollNo % 2 = 0;

SELECT  name, rollNo FROM students
WHERE rollNo IN (SELECT rollNo FROM students
				WHERE rollNo % 2 = 0);
                
               #FROM sub_queries 
  --  Find the max marks from the students of Pokhara
-- Step 1. Find the students of KTM
-- Step 2. Find their max marks using the sublist in step 1        

SELECT *  FROM students
WHERE city = "Pokhara";

SELECT max(marks)  FROM students
WHERE city = "Pokhara";

SELECT max(marks) FROM (SELECT *  FROM students
WHERE city = "Pokhara") as temp;

-- create view
CREATE VIEW  view1 AS
SELECT rollNo, name, marks FROM students;



SELECT * FROM view1
WHERE marks > 80;

     
                
                
                
                
                
                