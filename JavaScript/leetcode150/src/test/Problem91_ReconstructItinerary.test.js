const findItinerary = require('../main/Problem91_ReconstructItinerary');

test('should return itinerary', () => {
  const tickets = [
    ['JFK', 'SFO'],
    ['JFK', 'ATL'],
    ['SFO', 'ATL'],
    ['ATL', 'JFK'],
    ['ATL', 'SFO'],
  ];
  const output = ['JFK', 'ATL', 'JFK', 'SFO', 'ATL', 'SFO'];

  expect(findItinerary(tickets)).toStrictEqual(output);
});
