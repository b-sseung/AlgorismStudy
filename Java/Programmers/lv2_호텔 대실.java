import java.util.*;
class Solution {
    public int solution(String[][] book_time) {
        int answer = 0;
        Arrays.sort(book_time, new Comparator<String[]>() {
            @Override
            public int compare(String[] t1, String[] t2) {
                return t1[0].compareTo(t2[0]);
            }
        });
        
        ArrayList<int[]> rooms = new ArrayList<>();
        
        for (String[] time : book_time) {
            String[] in = time[0].split(":");
            String[] out = time[1].split(":");
            
            int inTime = Integer.parseInt(in[0]) * 60 + Integer.parseInt(in[1]);
            int outTime = Integer.parseInt(out[0]) * 60 + Integer.parseInt(out[1]) + 10;
            
            boolean value = false;
            for (int[] room : rooms) {
                if (room[1] <= inTime) {
                    int index = rooms.indexOf(room);
                    rooms.set(index, new int[]{inTime, outTime});
                    value = true;
                    break;
                }
            }
            
            if (!value) {
                rooms.add(new int[]{inTime, outTime});
            }
            
            answer = Math.max(answer, rooms.size());
        }
        return answer;
    }
}
