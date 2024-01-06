CREATE TABLE employee(
id INT PRIMARY KEY,
name VARCHAR(40),
mang_id INT
);

INSERT INTO employee(id,name,mang_id)
VALUES
(101,"Adam", 103),
(102,"Gel", 104),
(103,"Crist", NULL),
(104,"Messi", 103);

select * from employee;

-- SELECT *
-- FROM employee as a
-- JOIN employee as b
-- ON a.id = b.mang_id;
SELECT a.name as manager, b.name
FROM employee as a
JOIN employee as b
ON a.id = b.mang_id;

-- UNION
SELECT name FROM employee
UNION  // only gives distinct value
SELECT name FROM employee;

SELECT name FROM employee
UNION ALL //  gives duplicate value as well
SELECT name FROM employee;