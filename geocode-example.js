var NodeGeocoder = require('node-geocoder');

var options = {
 provider: 'google',

 // Optional depending on the providers
 httpAdapter: 'https', // Default
 apiKey: 'API_KEY', // for Mapquest, OpenCage, Google Premier
 formatter: null         // 'gpx', 'string', ...
};

var geocoder = NodeGeocoder(options);

// Using callback
//geocoder.geocode('12311 SAN JOSE BLVD, JACKSONVILLE,FL,322230000', function(err, res) {
 //console.log(res);
//});

// Or using Promise
geocoder.geocode('12311 SAN JOSE BLVD, JACKSONVILLE,FL,322230000')
 .then(function(res) {
   console.log(res[0].latitude, res[0].longitude);
 })
 .catch(function(err) {
   console.log(err);
 });