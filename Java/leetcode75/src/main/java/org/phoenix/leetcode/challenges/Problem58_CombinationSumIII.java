package org.phoenix.leetcode.challenges;

import java.util.ArrayList;
import java.util.List;

public class Problem58_CombinationSumIII {
    public List<List<Integer>> combinationSum3(int k, int n) {
        List<List<Integer>> outputList = new ArrayList<>();
        helper(outputList, new ArrayList<>(), 1, k, n);
        return outputList;
    }

    private void helper(List<List<Integer>> outputList, List<Integer> list, int start, int k, int n) {
        if (list.size() == k && n == 0) {
            List<Integer> temp = new ArrayList<>(list);
            outputList.add(temp);
            return;
        }
        for (int i = start; i <= 9; i++) {
            list.add(i);
            helper(outputList, list, i + 1, k, n - i);
            list.remove(list.size() - 1);
        }
    }
}


