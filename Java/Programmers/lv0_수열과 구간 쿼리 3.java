class Solution {
    public int[] solution(int[] arr, int[][] queries) {
        for (int index = 0; index < queries.length; index++) {
            int i = queries[index][0];
            int j = queries[index][1];
            
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }        
        
        return arr;
    }
}