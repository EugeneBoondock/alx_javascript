#!/usr/bin/node

//Get request for earth2
const request = require('request');
const url = 'https://earth2.io'; 

request.get(url, { encoding: 'utf-8' })
  .on('response', response => {
    console.log('code:', response.statusCode);
  })
  .on('error', err => {
    console.error('Error:', err);
  });
