class Solution {
    public int[] solution(String[] wallpaper) {
        int minRow = Integer.MAX_VALUE, minCol = Integer.MAX_VALUE, maxRow = 0, maxCol = 0;
        
        for (int idx = 0; idx < wallpaper.length; idx++) {
            int first = wallpaper[idx].indexOf("#");
            int last = wallpaper[idx].lastIndexOf("#");
            
            if (first != -1 && last != -1) {
                minRow = Math.min(minRow, idx);
                minCol = Math.min(minCol, first);
                maxRow = Math.max(maxRow, idx);
                maxCol = Math.max(maxCol, last);
            }
        }
        
        return new int[]{minRow, minCol, maxRow+1, maxCol+1};
    }
}
