#!/usr/bin/node

/* function takes firstName and LastName 
and prints out fullName */
function welcome(firstName, lastName) {
  const fullName = firstName + ' ' + lastName;

  function displayFullName() {
    alert('Welcome ' + fullName + '!');
  }

  displayFullName();
}
