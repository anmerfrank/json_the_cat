const request = require('request');



const fetchBreedDescription = function(breedName, callback) {
  
  request((`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`), (error, response, body) => {
    const data = JSON.parse(body);
  
    if (typeof data[0] === 'undefined') {
      callback(error);
  
    } else
  
      callback(data[0].description, error);
  });
};



module.exports = { fetchBreedDescription };