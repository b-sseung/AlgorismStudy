import java.util.*;
class Solution {
    public int solution(int k, int[] tangerine) {
        HashMap<Integer, Integer> counts = new HashMap<>();
        int answer = 0;
        
        for (int num : tangerine) {
            counts.put(num, counts.getOrDefault(num, 0) + 1);
        }
        
        List<Integer> keySet = new ArrayList<>(counts.keySet());
        keySet.sort((n1, n2) -> counts.get(n2) - counts.get(n1));

        for (int num : keySet) {
            if (k <= 0) break;
            
            answer++;
            k -= counts.get(num);
        }
        
        return answer;
    }
}
