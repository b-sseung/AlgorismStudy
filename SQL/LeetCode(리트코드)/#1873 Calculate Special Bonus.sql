//직원 아이디가 홀수이고, 이름이 M으로 시작하지 않으면 보너스는 급여, 그렇지 않으면 0으로 된 컬럼 bonus를 만드는 문제

SELECT 
    employee_id,
    CASE
        WHEN MOD(employee_id, 2) = 1 AND name NOT LIKE('M%') THEN salary
        ELSE 0
    END as bonus
FROM Employees
ORDER BY employee_id ASC; 
