class Solution {
    public String solution(String str1, String str2) {
        StringBuilder answer = new StringBuilder();
        
        String[] s1 = str1.split("");
        String[] s2 = str2.split("");
        
        for (int i = 0; i < s1.length; i++) {
            answer.append(s1[i]);
            answer.append(s2[i]);
        }
        
        return answer.toString();
    }
}