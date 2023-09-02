const exist = require('../main/Problem76_WordSearch');

test('should return true if word exist', () => {
  const board = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    word = 'ABCCED';

  expect(exist(board, word)).toBeTruthy();
});
