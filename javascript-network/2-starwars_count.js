const request = require('request');

// Check if the command line argument is provided
if (process.argv.length !== 3) {
  console.error('Usage: node starwars_count.js <API_URL>');
  process.exit(1);
}

// Extract the API URL from the command line arguments
const apiUrl = process.argv[2];

// Make an HTTP request to the API URL
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  // Parse the JSON response
  try {
    const data = JSON.parse(body).results;

    // Filter the films where character ID 18 (Wedge Antilles) is present
    const filmsWithWedgeAntilles = data.filter((film) =>
      film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')
    );

    // Print the number of films with Wedge Antilles
    console.log(filmsWithWedgeAntilles.length);
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
    process.exit(1);
  }
});
