class Solution {
    public int solution(int a, int b) {
        int ab = Integer.parseInt("" + a + b);
        int ab2 = 2 * a * b;
        return Math.max(ab, ab2);
    }
}


class Solution {
    public int solution(int a, int b) {
        int ab = a * (int) Math.pow(10, (int) Math.log10(b) + 1) + b;
        int ab2 = 2 * a * b;
        return Math.max(ab, ab2);
    }
}