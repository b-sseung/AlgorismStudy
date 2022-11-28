# 서브쿼리를 활용하는 문제..?

SELECT name AS Customers FROM Customers WHERE id NOT IN (SELECT customerId FROM Orders);
