class Solution {
    public int solution(int a, int b) {
        int aLength = (int) Math.log10(a) + 1;
        int bLength = (int) Math.log10(b) + 1;
        
        return Math.max(a * (int) Math.pow(10, bLength) + b, b * (int) Math.pow(10, aLength) + a);
    }
}