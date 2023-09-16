#!/usr/bin/node

//Get request for earth2
const request = require('request');
const url = process.argv[2];

request.get(url, { encoding: 'utf-8' })
  .on('response', response => {
    console.log('code:', response.statusCode);
  })
  .on('error', err => {
    console.error('Error:', err);
  });

  module.exports = request;
