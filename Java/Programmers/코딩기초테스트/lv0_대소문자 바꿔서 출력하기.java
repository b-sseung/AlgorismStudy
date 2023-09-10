import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        
        char[] words = a.toCharArray();
        
        for (char word : words) {
            System.out.print((Character.isUpperCase(word)) ? Character.toLowerCase(word) : Character.toUpperCase(word));
        }
    }
}


import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();

        String[] words = a.split("");

        for (int i = 0; i < words.length; i++) {
            char word = words[i].charAt(0);
            System.out.print(('a' <= word && word <= 'z') ? words[i].toUpperCase() : words[i].toLowerCase());
        }
    }
}