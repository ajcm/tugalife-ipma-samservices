const axios = require('axios')

const LOCATION_FORECAST_URL = '/api/weather/forecast/'
const LOCATION_FORECAST24_URL = '/api/weather/forecast24/'
const DISTRICTS_FORECAST_URL = '/api/weather/districtsForecast/'


function getForecast(backend,locationId) {

  let promise = new Promise(function(resolve, reject) {
    axios.get(backend + LOCATION_FORECAST_URL + locationId)
        .then(response =>resolve(response) )
        .catch(error => reject(error))
  })

  return promise
}


function getForecastNextDays(backend,locationId) {

  let promise = new Promise(function(resolve, reject) {
    axios.get(backend + LOCATION_FORECAST24_URL + locationId)
        .then(response =>resolve(response) )
        .catch(error => reject(error))
  })

  return promise
}


function getDistrictsForecast(backend,locationId) {

  let promise = new Promise(function(resolve, reject) {
    axios.get(backend + DISTRICTS_FORECAST_URL + locationId)
        .then(response =>resolve(response) )
        .catch(error => reject(error))
  })

  return promise
}



//exports
module.exports = {getForecast,getForecastNextDays,getDistrictsForecast}
