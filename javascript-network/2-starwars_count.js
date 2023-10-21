const request = require('request');

const url = 'https://swapi-api.alx-tools.com/api/films/';
const characterId = 18;

request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        const films = JSON.parse(body).results;
        let count = 0;
        films.forEach(film => {
            if (film.characters.includes(characterId)) {
                count++;
            }
        });
        console.log(count);
    }
});
