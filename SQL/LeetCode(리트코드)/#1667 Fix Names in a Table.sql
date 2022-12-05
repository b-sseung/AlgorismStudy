#name을 첫글자만 대문자, 나머지는 소문자로 변경 후 출력하는 문제

SELECT user_id, CONCAT(UPPER(LEFT(name, 1)), LOWER(SUBSTRING(name, 2))) as name
FROM Users
ORDER BY user_id asc;
