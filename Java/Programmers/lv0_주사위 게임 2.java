class Solution {
    public int solution(int a, int b, int c) {
        if (a == b && a == c) {
            int three = pow(a, 3) + pow(b, 3) + pow(c, 3);
            int two = pow(a, 2) + pow(b, 2) + pow(c, 2);
            int one = a + b + c;
            
            return one * two * three;
        } else if (a != b && a != c && b != c) {
            return a + b + c;
        } else {
            int two = pow(a, 2) + pow(b, 2) + pow(c, 2);
            int one = a + b + c;

            return one * two;
        }  
    }
    
    public int pow(int num, int p) {
        return (int) Math.pow(num, p);
    }
}



class Solution {
    public int solution(int a, int b, int c) {
        int answer = 1;
        int count = 0;
        
        if (a == b && a == c) {
            count = 3;
        } else if (a != b && a != c && b != c) {
            count = 1;
        } else {
            count = 2;
        }
        
        for (int i = 1; i <= count; i++) {
            answer *= pow(a, i) + pow(b, i) + pow(c, i);    
        }
        
        return answer;
    }
    
    public int pow(int num, int p) {
        return (int) Math.pow(num, p);
    }
}