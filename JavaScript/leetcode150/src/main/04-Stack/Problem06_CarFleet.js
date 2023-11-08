/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  let time = 0,
    prevTime = 0,
    carFleet = 0;
  let cars = [];
  // create a array of combination of initial position and speed of each car
  for (let i = 0; i < position.length; i++) {
    cars.push([position[i], speed[i]]);
  }
  //sorting cars with decreasing postions
  //[ [ 10, 2 ], [ 8, 4 ], [ 5, 1 ], [ 3, 3 ], [ 0, 1 ] ]
  cars.sort((a, b) => b[0] - a[0]);

  //loop over cars to check for car fleet
  for (let i = 0; i < cars.length; i++) {
    const [position, speed] = cars[i];
    // For each car, we calculate the time it takes to reach the target by using the
    // formula    `time = (target - position) / speed`. If this time is greater than the previous time, it means that
    // this car cannot catch up to the car fleet ahead of it. In this case, we increment the count of car fleets and
    // update the previous time to the current time.
    time = (target - position) / speed;

    if (time > prevTime) {
      carFleet++;
      prevTime = time;
    }
  }
  return carFleet;
};

module.exports = carFleet;
