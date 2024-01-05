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

//select command

<!-- SELECT * FROM students;
SELECT name, city FROM students;
SELECT DISTINCT city FROM students; -->

SELECT _ FROM students WHERE marks >= 70 AND city = "Pokhara";
SELECT name FROM students WHERE marks >= 90;
SELECT name,city FROM students WHERE city = "Pokhara"; _/

#Operator
#Arithmetic operator(+,-,\*,/,%)

<!-- SELECT * FROM students WHERE marks+10 >90;
SELECT * FROM students WHERE marks-10 <70;
SELECT * FROM students WHERE marks*0.5 >40;
SELECT * FROM students WHERE marks/10 >20;
SELECT * FROM students WHERE marks%10 >5; -->

#Logical Operator(AND,OR,BETWEEN,IN,NOT..)

<!-- #AND
SELECT * FROM students WHERE marks >= 60 AND city = "KTM";
#OR
SELECT * FROM students WHERE marks >= 80 OR city = "Banglore";
#BETWEEN
SELECT * FROM students WHERE marks BETWEEN 70 AND 90;
#IN
SELECT * FROM students WHERE city IN ("KTM", "BBSR");
SELECT * FROM students WHERE grade IN ("A", "B");
#NOT
SELECT * FROM students WHERE city NOT IN ("KTM", "BBSR");
SELECT * FROM students WHERE grade NOT IN ("A", "B");
#LIMIT
SELECT * FROM students  LIMIT 5;
SELECT * FROM students WHERE city IN ("KTM", "BBSR")  LIMIT 1;
#ORDER -> by default it is in ascending order
SELECT * FROM students ORDER BY name;
SELECT * FROM students ORDER BY rollNo DESC;
SELECT * FROM students ORDER BY city DESC;  -->

Aggregate Function

<!-- # max
SELECT MAX(marks) FROM students;
#MIN
SELECT MIN(marks) FROM students;
# count
SELECT COUNT(marks) FROM students;
#sum
SELECT SUM(rollNo) FROM students;
#avg
SELECT AVG(marks) FROM students; -->

GROUP BY

(101,"Olivia","Netbanking","Portland"),
(102,"Ethan","Credit Card","Miami"),
(103,"Maya","Credit Card","Seatle"),
(104,"Liam","Netbanking","Denver"),
(105,"Sophia","Credit Card","News"),
(106,"Calleb","Debit Card","Minnepeas"),
(107,"AVA","Debit Card","Phonex"),
(108,"Lucas","Netbanking","Boston"),
(109,"Isa","Netbanking","Nashville"),
(110,"Jackson","Credit Card","Boston");
