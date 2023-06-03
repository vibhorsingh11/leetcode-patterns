package org.phoenix.leetcode.challenges;

public class Problem26_DecodeString {
    int index = 0;

    public String decodeString(String s) {
        StringBuilder str = new StringBuilder();
        String count = "";
        for (int i = index; i < s.length(); i++) {
            //adding the current char to string builder as only char is found
            if (s.charAt(i) != '[' && s.charAt(i) != ']' && !Character.isDigit(s.charAt(i))) {
                str.append(s.charAt(i));
                //Now, calculating the count of next chars
            } else if (Character.isDigit(s.charAt(i))) {
                count += s.charAt(i);
            } else if (s.charAt(i) == '[') {
                // moving the pointer to next element
                index = i + 1;
                String nextChar = decodeString(s);
                //traversing the next chars till the count
                for (int j = Integer.parseInt(count); j > 0; j--) {
                    str.append(nextChar);
                }
                count = "";
                i = index;
            } else if (s.charAt(i) == ']') {
                index = i;
                return str.toString();
            }
        }
        return str.toString();
    }
}

//    "3[a]2[bc]";
