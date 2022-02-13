const request = require('request')
const forecast = (long, lat, callback) => {

    const weatherUrl = 'http://api.weatherstack.com/current?access_key=9468cdf5bc04b32f603dc62a2a1ffd8f&query=' + long + ',' + lat
    request({ url: weatherUrl, json: true }, (error, response) => {

        if (error) {
            callback('Canot connect to the server ', undefined)
        } else if (response.body.error) {
            callback(response.body.error.type, undefined)
        } else {
            callback(undefined, 'In ' + response.body.location.name + ' temp now equals ' + response.body.current.temperature)
        }
    })
}

module.exports = forecast