// import java.util.Scanner;
// import java.io.*;

// public class Solution {
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         String a = sc.next();
//         System.out.println(a);
//     }
// }

//BufferedWriter을 활용하는 편이 시간복잡도 면에서 유리

import java.util.Scanner;
import java.io.*;

public class Solution {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        bw.write(a);
        bw.flush();
        bw.close();
    }
}