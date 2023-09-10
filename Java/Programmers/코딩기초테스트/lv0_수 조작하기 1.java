class Solution {
    public int solution(int n, String control) {
        int answer = n;
        char[] ctrArr = control.toCharArray();
        
        for (char c : ctrArr) {
            if (c == 'w') answer++;
            else if (c == 's') answer--;
            else if (c == 'd') answer += 10;
            else answer -= 10;
        }
        
        return answer;
    }
}