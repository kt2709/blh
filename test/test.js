var geocoderProvider = 'google';
var httpAdapter = 'https';
var extra = {
    apiKey: 'AIzaSyAfIYdXbpT4vW042wuvwO_5u69r0nJiiYI', 
    formatter: null
};
 
var geocoder = require('node-geocoder')(geocoderProvider, httpAdapter, extra);

geocoder.geocode('46898 fernald cmn fremont', function(err, res) {
    console.log(res);
});