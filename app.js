const request = require('request');

request({
    url: 'https://maps.google.com/maps/api/geocode/json?address=Prague,Czech%20Republic&key=AIzaSyBsz7ns_gXieBPQhuGw0XqV758PXzjUngc',
    json: true
},(err,res, body)=>{
    console.log(`Address:${body.results[0].formatted_address}`);
    console.log(`Souřadnice šířka: ${body.results[0].geometry.location.lat}`);
 console.log(`Souřadnice délka: ${body.results[0].geometry.location.lng}`);
});

//https://maps.google.com/maps/api/geocode/json?address=Prague,Czech%20Republic&key=AIzaSyBsz7ns_gXieBPQhuGw0XqV758PXzjUngc