/*e-mail이 같은 행 중 id가 가장 작은 것만 남겨놓기*/

DELETE p1 
FROM Person AS p1, Person AS p2 
WHERE p1.email = p2.email 
	AND p1.id > p2.id;
