#!/usr/bin/node

function studentHogwarts() {
  // Private variables
  var privateScore = 0;
  var name = null;

  // Private method to change the score
  var changeScoreBy = function (points) {
    privateScore += points;
  };

  // Public methods
  return {
    setName: function (newName) {
      name = newName;
    },
    rewardStudent: function () {
      changeScoreBy(1);
    },
    penalizeStudent: function () {
      changeScoreBy(-1);
    },
    getScore: function () {
      return `${name}: ${privateScore}`;
    },
  };
}

var harry = studentHogwarts();
harry.setName('Harry');

var draco = studentHogwarts();
draco.setName('Draco');

// Reward Harry four times
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();

// Penalize Draco three times
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();

console.log(harry.getScore());
console.log(draco.getScore());
