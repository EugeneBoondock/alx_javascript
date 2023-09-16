const request = require('request');

// Define the API URL
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// Make an HTTP request to the API URL
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  // Check if the request was successful (status code 200)
  if (response.statusCode !== 200) {
    console.error(`Request failed with status code ${response.statusCode}`);
    process.exit(1);
  }

  try {
    // Parse the JSON response
    const todos = JSON.parse(body);

    // Initialize a map to store the count of completed tasks for each user
    const userTasksCount = new Map();

    // Iterate through the todos to count completed tasks for each user
    todos.forEach((todo) => {
      if (todo.completed) {
        const userId = todo.userId;
        if (userTasksCount.has(userId)) {
          userTasksCount.set(userId, userTasksCount.get(userId) + 1);
        } else {
          userTasksCount.set(userId, 1);
        }
      }
    });

    // Print the users with completed tasks
    userTasksCount.forEach((count, userId) => {
      console.log(`User ID ${userId}: ${count} completed tasks`);
    });
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
    process.exit(1);
  }
});
