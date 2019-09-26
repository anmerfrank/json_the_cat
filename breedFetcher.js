

const request = require('request');

const input = process.argv.slice(2);
const webSearch = `https://api.thecatapi.com/v1/breeds/search?q=${input[0]}`;




request(webSearch, (error, response, body) => {

  if (error) () => {
    throw error('Your request has returned an error.')
  }

  const data = JSON.parse(body);


  if (typeof data[0] === 'undefined') {
    console.log('That breed does not exist!');

  } else {

  console.log(data[0].description);
  }
});

