#두번째로 큰 값 구하는 문제
#Oracle에서는 ROWNUM 이란 것이 있어서 좀 더 쉬울지도 모르지만 SQL에서는 사용할 수 없어서 아래와 같은 방법을 찾아냄

SELECT (
    SELECT DISTINCT salary
    FROM Employee
    ORDER BY salary DESC
    LIMIT 1 OFFSET 1
) AS SecondHighestSalary;
