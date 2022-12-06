#sell_date 기준 그룹별 product 이름들과 이름 갯수 리턴 문제

SELECT 
  sell_date, 
  COUNT(DISTINCT product) AS num_sold, 
  GROUP_CONCAT(DISTINCT product) as products 
FROM Activities 
GROUP BY sell_date;
