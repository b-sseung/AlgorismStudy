#1
SELECT name AS Employee
FROM Employee AS t1
WHERE salary >= (SELECT salary 
                FROM Employee AS t2 
                WHERE t2.id = t1.managerId); 

#2
SELECT t1.name AS Employee
FROM Employee AS t1
INNER JOIN Employee AS t2
WHERE t1.managerId = t2.id and t1.salary >= t2.salary;
