let url = require('url');
let querystring = require('querystring');

let rawUrl = 'https://stackabuse.com/?page=2&limit=3';
let parsedUrl = url.parse(rawUrl);
let parsedQs = querystring.parse(parsedUrl.query);

console.log('Mengolah data query string');
console.log('page', parsedQs.page);
console.log('limit', parsedQs.limit);
