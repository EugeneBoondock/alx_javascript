#!/usr/bin/node

const request = require("request");

const id = process.argv[2];
const url = "https://swapi-api.alx-tools.com/api/films/${id}";

request.get(url, { encoding: "utf-8" })
 .on("response", (response) => {
  if (response.statusCode === 200) {
    let data = "";
    response.on("data", (chunk) => {
      data += chunk;
    });

    response.on("end", () => {
      const film = JSON.parse(data);
      console.log(film.title);
    });
  }
});
