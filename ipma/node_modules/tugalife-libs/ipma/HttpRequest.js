const axios = require('axios')


const LOCATION_FORECAST_URL = 'http://api.ipma.pt/public-data/forecast/aggregate/'
const DISTRICT_FORECAST_URL = 'https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/hp-daily-forecast-day0.json'

function getDistrictsForecast() {

  let promise = new Promise(function(resolve, reject) {
    axios.get(DISTRICT_FORECAST_URL)
        .then(response =>resolve(response) )
        .catch(error => reject(error))
  })

  return promise
}



function getForecast(locationId) {
  let promise = new Promise(function(resolve, reject) {
    axios.get(LOCATION_FORECAST_URL +locationId+ '.json')
        .then(response =>resolve(response) )
        .catch(error => reject(error))
  })
  return promise
}



//exports
module.exports = {getDistrictsForecast,getForecast}
