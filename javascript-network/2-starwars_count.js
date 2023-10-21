const req = require("request");
let char = [];
const id = 18;
const url = `https://swapi-api.alx-tools.com/api/films`;
req.get(url, (error, response, body) => {
  if (error) {
    console.error("Error:", error);
    process.exit(1);
  }
  try {
    const movies = JSON.parse(body);
    const moviesres = movies.results;
    moviesres.forEach((element) => {
      element.characters.forEach((el) => {
        if (el.includes(id)) {
          char.push(el);
        }
      });
    });
    console.log(char.length);
  } catch (parseError) {
    console.error("Error parsing JSON:", parseError);
    process.exit(1);
  }
});
