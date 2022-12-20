#case1

SELECT email AS Email
FROM (
    SELECT email, count(*) AS count
    FROM Person
    GROUP BY email
    ORDER BY email DESC
) AS t1
WHERE count >= 2;


#case 2

SELECT email AS Email
FROM Person
GROUP BY email
HAVING count(*) >= 2;

#속도는 case1이 더 빠름
