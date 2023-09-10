import java.util.*;

class Solution {
    public int[] solution(int n) {
        ArrayList<Integer> data = new ArrayList<>();
        data.add(n);
        
        while (n > 1) {
             if (n % 2 == 0) {
                 n /= 2;
             } else {
                 n = 3 * n + 1;
             }
            
            data.add(n);
        }
        
        return data.stream().mapToInt(Integer::intValue).toArray();
    }
}