package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertTrue;

class Problem43_KeysAndRoomsTest {

    private final Problem43_KeysAndRooms test = new Problem43_KeysAndRooms();

    @Test
    void canVisitAllRooms() {
        List<List<Integer>> rooms = Arrays.asList(List.of(1), List.of(2), List.of(3), List.of());
        assertTrue(test.canVisitAllRooms(rooms));
    }
}