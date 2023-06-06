import java.util.*;

class Solution {
    ArrayList<Integer> answer = new ArrayList<>();
    
    public int[] solution(int l, int r) {
        int length = (int) Math.log10(r) + 1;
        String[] arr = new String[length];
        Arrays.fill(arr, "0");
        func(l, r, arr, length-1);

        Collections.sort(answer);
        
        return answer.size() == 0 ? new int[]{-1} : answer.stream().mapToInt(Integer::intValue).toArray();
    }
    
    public void func(int l, int r, String[] arr, int index) {
        if (index == -1) {
            int result = Integer.parseInt(String.join("", arr)) * 5;
            if (l <= result && result <= r) answer.add(result);
            return;
        }

        String[] data = {"0", "1"};
        
        String[] tmpArr = Arrays.copyOf(arr, arr.length);
        for (int j = 0; j < 2; j++) {
            tmpArr[index] = data[j];
            func(l, r, tmpArr, index-1);
        }
    }
}


import java.util.*;
class Solution {
    
    public int[] solution(int l, int r) {
        ArrayList<Integer> answer = new ArrayList<>();
        
        for (int i = l; i <= r; i++) {
            if (i % 5 == 0) {
                String number = Integer.toString(i);
                
                number = number.replaceAll("5", "");
                number = number.replaceAll("0", "");
                
                if (number.equals("")) answer.add(i);
            }
        }
        
        return answer.size() == 0 ? new int[]{-1} : answer.stream().mapToInt(Integer::intValue).toArray();
    }
}