const req = require("request");
let char = [];
const id = 18;
const url = `https://swapi-api.alx-tools.com/api/films`;
req.get(url, (error, response, body) => {
  const movies = JSON.parse(body);
  const moviesres = movies.results;
  moviesres.forEach((element) => {
    // ch.push(element.characters)
    element.characters.forEach((el) => {
      if (el.includes(id)) {
        char.push(el);
      }
    });
  });
  console.log(char.length);
});