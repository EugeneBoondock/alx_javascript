const request = require('request');

const url = 'https://jsonplaceholder.typicode.com/todos';

request(url, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  const completedTasks = {};
  body.forEach((task) => {
    if (task.completed) {
      if (completedTasks[task.userId]) {
        completedTasks[task.userId] += 1;
      } else {
        completedTasks[task.userId] = 1;
      }
    }
  });
  console.log(completedTasks);
});
