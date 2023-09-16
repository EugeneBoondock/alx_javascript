const request = require('request');
const fs = require('fs');

// Check if the command line arguments are provided
if (process.argv.length !== 4) {
  console.error('Usage: node fetch_and_store.js <URL> <outputFilePath>');
  process.exit(1);
}

// Extract the URL and output file path from the command line arguments
const url = process.argv[2];
const outputFilePath = process.argv[3];

// Make an HTTP request to the provided URL
request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  // Check if the request was successful (status code 200)
  if (response.statusCode !== 200) {
    console.error(`Request failed with status code ${response.statusCode}`);
    process.exit(1);
  }

  // Write the response body to the specified file with UTF-8 encoding
  fs.writeFile(outputFilePath, body, 'utf-8', (writeError) => {
    if (writeError) {
      console.error('Error writing to file:', writeError);
      process.exit(1);
    }

    console.log('Content has been saved to the file:', outputFilePath);
  });
});
