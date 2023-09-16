const request = require('request');

const apiUrl = process.argv[2];

if (!apiUrl) {
  console.error('Usage: node 4-completed_tasks.js <API_URL>');
  process.exit(1);
}

const completedTasksByUser = {};

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error(`Request failed with status code ${response.statusCode}`);
    process.exit(1);
  }

  const tasks = JSON.parse(body);

  tasks.forEach((task) => {
    if (task.completed) {
      if (completedTasksByUser[task.userId]) {
        completedTasksByUser[task.userId]++;
      } else {
        completedTasksByUser[task.userId] = 1;
      }
    }
  });

  console.log(completedTasksByUser);
});
