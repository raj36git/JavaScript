CREATE DATABASE joins;
USE joins;

CREATE TABLE student(
id INT PRIMARY KEY,
name VARCHAR(40)
);
INSERT INTO student(id, name)
VALUES
(1,"Ram"),
(2,"Shyam"),
(3,"Hari");

CREATE TABLE courses(
id INT PRIMARY KEY,
course VARCHAR(40)
);
INSERT INTO courses(id, course)
VALUES
(1,"Science"),
(2,"Math"),
(5,"Bio"),
(4,"Bio"),
(6,"Bio");

select * from student;
select * from courses;

-- 1.Inner Join
SELECT *
FROM student
INNER JOIN courses
ON student.id = courses.id;

-- LEFT JOIN
SELECT *
FROM student
LEFT JOIN courses
ON student.id = courses.id;

-- RIGHT JOIN
SELECT *
FROM student
RIGHT JOIN courses
ON student.id = courses.id;

-- FULL JOIN
SELECT *
FROM student
LEFT JOIN courses
ON student.id = courses.id
UNION
SELECT *
FROM student
RIGHT JOIN courses
ON student.id = courses.id;

-- LEFT  EXCULSIVE JOIN
SELECT *
FROM student
LEFT JOIN courses
ON student.id = courses.id
WHERE courses.id IS NULL;

-- RIGHT  EXCULSIVE JOIN
SELECT *
FROM student
RIGHT JOIN courses
ON student.id = courses.id
WHERE student.id IS NULL;

-- SELF JOIN
SELECT *
FROM student as s
JOIN student as c
ON s.id = c.id;