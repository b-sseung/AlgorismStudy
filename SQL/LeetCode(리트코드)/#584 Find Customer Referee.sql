# IN이나 NOT IN에서 NULL을 비교할 경우 무조건 FALSE가 나오므로 사용할 수 없음.
# 그래서 따로 IS NULL이나 IS NOT NULL로 비교해야 함.
# 이 문제의 경우에는 NULL이거나 2가 아닌 이름을 가져오는 문제라고도 볼 수 있음.

SELECT name FROM Customer WHERE referee_id IS NULL or referee_id <> 2;
