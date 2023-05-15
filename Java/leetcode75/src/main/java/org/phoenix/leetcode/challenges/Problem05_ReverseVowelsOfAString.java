package org.phoenix.leetcode.challenges;

public class Problem05_ReverseVowelsOfAString {
    public String reverseVowels(String s) {
        int i = 0;
        int j = s.length() - 1;
        char[] charArr = s.toCharArray();
        while(i < j){
            while (i < s.length () && !isVowel(charArr[i])) {
                i++;
            }
            while (j >= 0 && !isVowel(charArr[j])) {
                j--;
            }
            if(i < j){
                char temp = charArr[i];
                charArr[i] = charArr[j];
                charArr[j] = temp;
                i++;
                j--;
            }
        }
        return new String(charArr);
    }

    private boolean isVowel(char c) {
        return c == 'a' || c == 'i' || c == 'e' || c == 'o' || c == 'u'
                || c == 'A' || c == 'I' || c == 'E' || c == 'O' || c == 'U';
    }
}
