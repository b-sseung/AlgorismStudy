import java.util.*;

class Solution {
    public int[] solution(int[] arr, int[][] queries) {
        ArrayList<Integer> answer = new ArrayList<>();
        
        for (int index = 0; index < queries.length; index++) {
            int s = queries[index][0];
            int e = queries[index][1];
            int k = queries[index][2];
            
            int min = 1000001;
            
            for (int i = s; i <= e; i++) {
                if (arr[i] > k) min = Math.min(min, arr[i]);
            }
            
            answer.add(min == 1000001 ? -1 : min);
        }
        
        return answer.stream().mapToInt(Integer::intValue).toArray();
    }
}