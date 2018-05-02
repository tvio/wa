const request = require('request');

var getWeather = (lat,lng,callback) => {
  request({
    url: `https://api.darksky.net/forecast/ff1cc886ec6efd5994be946e83d3eadc/${lat},${lng}?lang=cs&units=si`,
    json: true
    },
    (err,res,body)=>{
         if (!err && res.statusCode === 200){
             //console.log(body);
             callback(undefined, {
                 temperature:body.currently.temperature,
                 apparentTemperature: body.currently.apparentTemperature,
                 summary: body.currently.summary,
                 preciptype: body.currently.precipType,
                 precipProbability: body.currently.precipProbability,
                 precipIntensity: body.currently.precipIntensity,
                 windSpeed: body.currently.windSpeed,
                 pressure: body.currently.pressure,
                 uvIndex: body.currently.uvIndex,
                 humidity: body.currently.humidity,
             }
                 );
         } else {
             callback('Nelza načíst počasí');
         }
         }
            
     );
};  
  
module.exports.getWeather = getWeather;  
//console.log(argv);
//DARK SKY API KEY
//ff1cc886ec6efd5994be946e83d3eadc 
//https://api.darksky.net/forecast/ff1cc886ec6efd5994be946e83d3eadc/50.0373925,14.3090663
//params
//https://api.darksky.net/forecast/ff1cc886ec6efd5994be946e83d3eadc/50.0373925,14.3090663?units=si&lang=cs