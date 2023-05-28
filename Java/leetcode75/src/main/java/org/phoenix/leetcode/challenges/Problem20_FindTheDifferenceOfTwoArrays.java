package org.phoenix.leetcode.challenges;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Problem20_FindTheDifferenceOfTwoArrays {
    public List<List<Integer>> findDifference(int[] nums1, int[] nums2) {
        Set<Integer> set1 = new HashSet<>();
        Set<Integer> set2 = new HashSet<>();
        List<List<Integer>> diffList = new ArrayList<>();
        diffList.add(new ArrayList<>());
        diffList.add(new ArrayList<>());

        for (int num : nums1) {
            set1.add(num);
        }
        for (int num : nums2) {
            set2.add(num);
        }

        for (int num : set1) {
            if (!set2.contains(num)) {
                diffList.get(0).add(num);
            }
        }
        for (int num : set2) {
            if (!set1.contains(num)) {
                diffList.get(1).add(num);
            }
        }
        return diffList;
    }
}
