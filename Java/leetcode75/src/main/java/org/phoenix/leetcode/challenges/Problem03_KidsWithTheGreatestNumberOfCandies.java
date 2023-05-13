package org.phoenix.leetcode.challenges;

import java.util.ArrayList;
import java.util.List;

public class Problem03_KidsWithTheGreatestNumberOfCandies {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        int max = 0;
        List<Boolean> resList = new ArrayList<>();
        for (int j : candies) {
            if (max < j) max = j;
        }
        for (int candy : candies) {
            if (candy + extraCandies >= max) {
                resList.add(true);
            } else {
                resList.add(false);
            }
        }
        return resList;
    }
}
