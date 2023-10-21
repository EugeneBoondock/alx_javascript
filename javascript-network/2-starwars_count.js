const request = require('request');

if (process.argv.length !== 3) {
  console.error('Usage: node 2-starwars_count.js <API_URL>');
  process.exit(1);
}

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  const data = JSON.parse(body);
  const films = data.results;

  let count = 0;
  for (let i = 0; i < films.length; i++) {
    const characters = films[i].characters;
    if (characters.includes('https://swapi-api.alx-tools.com/api/people/18/')) {
      count++;
    }
  }

  console.log(count);
});
