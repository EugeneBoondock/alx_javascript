#!/usr/bin/node

const request = require('request');

const id = process.argv[2];
const url = 'https://swapi-api.alx-tools.com/api/films/${id}';

request.get(url, { encoding: 'utf-8' })
  .on('response', response => {
      response.on('end', () => {
        const film = JSON.parse(data);
        console.log(film.title);
    })});
