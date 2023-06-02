package org.phoenix.leetcode.challenges;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

class Problem25_AsteroidCollisionTest {

    private final Problem25_AsteroidCollision test = new Problem25_AsteroidCollision();

    @Test
    void asteroidCollision() {
        int[] asteroids = new int[]{5, 10, -5};
        int[] expected = new int[]{5, 10};
        assertArrayEquals(expected, test.asteroidCollision(asteroids));
    }
}