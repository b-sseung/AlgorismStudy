import java.util.*;
class Solution {
    public int solution(int[] ingredient) {
        int answer = 0;
        int[] hamburger = {1, 2, 3, 1};
        ArrayList<Integer> list = new ArrayList<>();
        
        for (int i = 0; i < ingredient.length; i++) {
            list.add(ingredient[i]);
            
            if (ingredient[i] == 1 && list.size() >= 4) {
                int size = list.size();
                for (int j = 4; j >= 0; j--) {
                    if (j == 0) {
                        for (int k = 0; k < 4; k++) {
                            list.remove(list.size()-1);
                        }
                        answer++;
                        continue;
                    }
                    if (list.get(size - j) != hamburger[4-j]) break;
                }
            }
            
        }
        return answer;
    }
}
