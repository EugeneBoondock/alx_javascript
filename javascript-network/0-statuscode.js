#!/usr/bin/node
//A GET request
const request = require('request');
const url = ''

request.get(url, {encoding: 'utf-8'}) 
    .on('error', err => {
        console.log('code: ' + err)
    })
