class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode result = new ListNode();
        
        ArrayList<Integer> n1 = createInt(l1);
        ArrayList<Integer> n2 = createInt(l2);

        ArrayList<Integer> vList = new ArrayList<>();
        int up = 0;
        for (int i = 0; i < Math.max(n1.size(), n2.size()); i++) {
            int v1 = i >= n1.size() ? 0 : n1.get(i);
            int v2 = i >= n2.size() ? 0 : n2.get(i);
            
            int v = up + v1 + v2;
            vList.add(v % 10);

            if (v >= 10) up = 1; else up = 0;            
        }
        
        if (up == 1) vList.add(1);
        
        for (int i = vList.size()-1; i >= 0; i--) {
            if (i == vList.size()-1) {
                result = new ListNode(vList.get(i));
            } else {
                result = new ListNode(vList.get(i), result);
            }
        }
        
        return result;
    }
    
    public ArrayList<Integer> createInt(ListNode n) {
        ArrayList<Integer> result = new ArrayList<>();
        while (n != null) {
            int v = n.val;
            result.add(v);
            n = n.next;
        }        
        return result;
    }
}
