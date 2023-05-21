const maxArea = require('../main/Problem12_ContainerWithMostWater');

test('should return max area', () => {
    const height = [1,8,6,2,5,4,8,3,7];
    expect(maxArea(height)).toBe(49);
})