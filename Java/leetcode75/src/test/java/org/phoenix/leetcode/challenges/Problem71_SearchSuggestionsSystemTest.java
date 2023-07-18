package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Problem71_SearchSuggestionsSystemTest {

    private final Problem71_SearchSuggestionsSystem test = new Problem71_SearchSuggestionsSystem();

    @Test
    void suggestedProducts() {
        String[] products = new String[]{"mobile", "mouse", "moneypot", "monitor", "mousepad"};
        String searchWord = "mouse";

        List<List<String>> expect = Arrays.asList(List.of("mobile", "moneypot", "monitor"), List.of("mobile", "moneypot", "monitor"),
                List.of("mouse", "mousepad"), List.of("mouse", "mousepad"), List.of("mouse", "mousepad"));

        assertEquals(expect, test.suggestedProducts(products, searchWord));
    }
}