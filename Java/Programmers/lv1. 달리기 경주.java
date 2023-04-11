import java.util.*;
class Solution {
    public String[] solution(String[] players, String[] callings) {
        HashMap<String, Integer> ranks = new HashMap<>();
        
        for (int index = 0; index < players.length; index++) {
            ranks.put(players[index], index);
        }
        
        for (String name : callings) {
            int index = ranks.get(name);
            players[index] = players[index-1];
            players[index-1] = name;
            
            ranks.put(name, index-1);
            ranks.put(players[index], index);
        }
        
        return players;
    }
}
