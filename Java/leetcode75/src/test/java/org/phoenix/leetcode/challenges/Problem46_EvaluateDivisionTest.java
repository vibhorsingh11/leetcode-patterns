package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

class Problem46_EvaluateDivisionTest {

    private final Problem46_EvaluateDivision test = new Problem46_EvaluateDivision();

    @Test
    void calcEquation() {
        List<List<String>> equations = Arrays.asList(List.of("a", "b"), List.of("b", "c"));
        double[] values = new double[]{2.0, 3.0};

        List<List<String>> queries = Arrays.asList(List.of("a", "c"), List.of("b", "a"), List.of("a", "e"), List.of("a", "a"),
                List.of("x", "x"));

        double[] result = new double[]{6.0, 0.5, -1.0, 1.0, -1.0};
        assertArrayEquals(result, test.calcEquation(equations, values, queries));
    }
}