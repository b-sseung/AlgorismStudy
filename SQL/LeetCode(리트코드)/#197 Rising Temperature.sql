#code1
SELECT w1.id
FROM Weather w1, Weather w2
WHERE w1.temperature > w2.temperature 
    AND w1.recordDate = Date_ADD(w2.recordDate, INTERVAL 1 DAY)

#code2
SELECT w1.id
FROM Weather w1, Weather w2
WHERE w1.temperature > w2.temperature 
    AND DateDiff(w1.recordDate, w2.recordDate) = 1; 
    
#code1이 code2보다 
