#!/usr/bin/node

const request = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films/';

const id = 18;

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Request failed with status code:', response.statusCode);
  } else {
    try {
      const filmData = JSON.parse(body);
      const moviesWithCharacter = filmData.results.filter((movie) =>
        movie.characters.includes(`https://swapi-api.alx-tools.com/api/films/${id}/`)
      );
      console.log(moviesWithCharacter.length);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
    }
  }
});
