-- UPDATE
SET SQL_SAFE_UPDATES = 0;

UPDATE students
SET grade = 'O'
WHERE grade = 'A+';

-- DELETE
UPDATE students
SET marks = 13
WHERE rollNo = 6;

DELETE FROM students
WHERE marks < 33;

-- Foriegn Key
CREATE TABLE depart(
id int PRIMARY KEY,
name VARCHAR(30)
);
INSERT INTO depart
(id,name)
VALUES
(101,"OOPs"),
(102,"Java"),
(103,"DSA");

UPDATE depart
SET id = "105"
WHERE id = "103";

select * from DEPART;

CREATE TABLE teacher(
id int PRIMARY KEY,
name VARCHAR(30),
depart_id INT,
FOREIGN KEY(depart_id) REFERENCES depart(id)
ON DELETE CASCADE
ON UPDATE CASCADE
);

INSERT INTO teacher
(id,name, depart_id)
VALUES
(1,"Aman",103),
(2,"Ram",102),
(3,"Karan",103),
(4,"Arjun",101);

select * from teacher;

CREATE TABLE chomu(
rollNo int PRIMARY KEY,
name VARCHAR(30)
);
INSERT INTO chomu
(rollNo,name)
VALUES
(1, "ram"),
(2, "shyam");

SELECT * FROM chomu;

-- Add Column
ALTER TABLE chomu
ADD COLUMN age INT NOT NULL DEFAULT 19;

-- Drop Column
ALTER TABLE chomu
DROP COLUMN age;

-- Rename table
ALTER TABLE chomu
RENAME TO chodu;
show tables; -- it will show chodu not chomuALTER TABLE chomu

ALTER TABLE chodu
RENAME TO chomu;
show tables; -- it will again show  chomu

-- CHANGE column(rename)
ALTER TABLE chomu
CHANGE COLUMN name cr_name VARCHAR(50);

-- MODIFY COLUMN(modify datatype/ constraints)
ALTER TABLE chomu
MODIFY  age VARCHAR(2);

//TO DELETE TABLE data
TRUNCATE TABLE STUDENTS;

-- Practice Qs
-- Change the name of column name to full_name
    ALTER TABLE students
    CHANGE COLUMN name  full_name  VARCHAR(40);

-- b. Delete all the students who scored < 80
 DELETE FROM students
    WHERE marks < 80; 
    
-- c. Delete the column for grade
   ALTER TABLE students
   DROP COLUMN grade;