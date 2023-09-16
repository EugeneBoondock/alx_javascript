const axios = require('axios');

// Define the API URL
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// Function to count completed tasks by user ID
async function countCompletedTasks() {
  try {
    // Send a GET request to the API
    const response = await axios.get(apiUrl);

    // Check if the request was successful (status code 200)
    if (response.status === 200) {
      // Parse the JSON response
      const tasks = response.data;

      // Create an object to store the count of completed tasks for each user
      const completedTaskCount = {};

      // Iterate through the tasks
      tasks.forEach((task) => {
        if (task.completed) {
          const userId = task.userId;
          // Increment the count of completed tasks for the user
          completedTaskCount[userId] = (completedTaskCount[userId] || 0) + 1;
        }
      });

      // Print users with completed tasks
      for (const userId in completedTaskCount) {
        console.log(`User ID ${userId}: ${completedTaskCount[userId]} completed tasks`);
      }
    } else {
      // Print an error message if the request was not successful
      console.error(`Error: Unable to fetch data from the API. Status code ${response.status}`);
    }
  } catch (error) {
    // Handle any errors that occur during the request
    console.error('An error occurred:', error.message);
  }
}

// Call the function to count completed tasks
countCompletedTasks();
