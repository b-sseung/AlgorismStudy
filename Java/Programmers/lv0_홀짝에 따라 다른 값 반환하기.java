class Solution {
    public int solution(int n) {
        int answer = 0;
        
        int num = n % 2;
        
        for (int i = num; i <= n; i += 2) {
            if (num == 0) {
                answer += (int) Math.pow(i, 2);
            } else {
                answer += i;
            }
        }
        
        return answer;
    }
}