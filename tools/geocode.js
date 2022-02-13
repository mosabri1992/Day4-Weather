const request = require('request')
const geocode = (address, callback) => {


    const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoibW9tbzIwMjAzMyIsImEiOiJja3prN2Yxd2cyMHY0Mm9vMGQ2c2FzanNzIn0.Ti4F4WMSdlUl8v3dx2XCiA'

    request({ url: geoUrl, json: true }, (error, response) => {
        if (error) {
            callback('Error', undefined)
        } else if (response.body.message) {
            callback(response.body.message, undefined)
        } else if (response.body.features.length == 0) {
            callback('Wrong Country', undefined)
        } else {
            callback(undefined, {
                long: response.body.features[0].center[0],
                lat: response.body.features[0].center[1],
                place: response.body.features[0].place_name
            })

        }
    })
}

module.exports = geocode