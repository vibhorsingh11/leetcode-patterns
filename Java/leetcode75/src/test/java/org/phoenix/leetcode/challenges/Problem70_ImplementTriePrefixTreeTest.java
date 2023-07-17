package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertTrue;

class Problem70_ImplementTriePrefixTreeTest {

    private final Problem70_ImplementTriePrefixTree test = new Problem70_ImplementTriePrefixTree();


    @Test
    void search() {
        test.insert("apples");
        assertTrue(test.search("apples"));
        assertTrue(test.startsWith("app"));
    }

    @Test
    void startsWith() {
    }
}