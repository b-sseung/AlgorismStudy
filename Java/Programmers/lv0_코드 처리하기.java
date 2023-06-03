class Solution {
    public String solution(String code) {
        StringBuilder answer = new StringBuilder();
        char[] codes = code.toCharArray();
        boolean mode = false; //false: 0, true: 1
        
        for (int i = 0; i < codes.length; i++) {
            if (codes[i] == '1') {
                mode = !mode;
            } else {
                if (mode) {
                    if (i % 2 == 1) answer.append(codes[i]);
                } else {
                    if (i % 2 == 0) answer.append(codes[i]);
                }
            }
        }
        
        return answer.length() != 0 ? answer.toString() : "EMPTY";
    }
}