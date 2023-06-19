package org.phoenix.leetcode.challenges;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.Stack;

public class Problem43_KeysAndRooms {
    public boolean canVisitAllRooms(List<List<Integer>> rooms) {
        // Set that will keep track of the
        // rooms that we have visited
        Set<Integer> visited = new HashSet<>();
        // Make 0th room as visited
        visited.add(0);
        // This stack will keep track of the keys
        // that we have not used
        Stack<Integer> room = new Stack<>();
        // Add 0th room to the stack
        room.add(0);
        // Loop until the stack is empty
        while (!room.isEmpty()) {
            // Get the keys in the current room
            List<Integer> keys = rooms.get(room.pop());
            // Loop for all the keys
            for (int key : keys) {
                if (!visited.contains(key)) {
                    visited.add(key);
                    room.add(key);
                }
            }
        }
        // Since the set contains the rooms which are
        // visited and if all the rooms are visited
        // then the size of set should be equal to the
        //  size of the rooms
        return visited.size() == rooms.size();
    }
}
