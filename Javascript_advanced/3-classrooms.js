#!/usr/bin/node

function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
    return function() {
      return seat++;
    };
  }

  const students = [];

  for (let i = 0; i < numbersOfStudents; i++) {
    students.push(studentSeat(i + 1)); // Pass the seat number to studentSeat
  }

  return students;
}
const classRoom = createClassRoom(10);
