const request = require('request')
const forecast = require('./tools/forecast')
const geocode = require('./tools/geocode')


// console.log(process.argv)

geocode(process.argv[2], (error, data) => {
    if (error) {
        console.log('Error', error)
    } else {
        console.log('Data : ', data)
        forecast(data.long, data.lat, (error, data) => {
            if (error) {
                console.log('Error', error)
            } else {
                console.log('Data : ', data)
            }
        })
    }
})