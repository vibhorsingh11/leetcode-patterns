package org.phoenix.leetcode.challenges;

public class Problem06_ReverseWordsInAString {
        public String reverseWords(String s) {
            if (s == null) {
                return null;
            }
            int j;
            StringBuilder str = new StringBuilder();
            for(int i=s.length() - 1; i>= 0;i--) {
                if(s.charAt(i) != ' '){
                    j = i;
                    i = s.lastIndexOf(' ', i);
                    str.append(s, i+1, j+1).append(" ");
                }
            }

            return str.toString().trim();
        }
}
