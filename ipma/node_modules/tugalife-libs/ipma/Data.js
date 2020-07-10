/* Version 1.0.0 */

const districts = require('./data/districts.json')
const districtsPerZone = require('./data/districtsPerZone.json')

const locations = require('./data/locations.json')
const locationsMap = require('./data/locationsMap.json')
const locationsPerDistrict = require('./data/locationsPerDistrict.json')
const locationsIdPerDistrict = require('./data/locationsIdPerDistrict.json')

const weatherTypes = require('./data/weatherTypes.json')
const windSpeed = require('./data/windSpeed.json')



const getDistricts = () => districts
const getDistrictsPerZone = () => districtsPerZone

const getLocations = () => locations
const getLocationsMap = () => locationsMap
const getLocationsPerDistrict = () => locationsPerDistrict
const getLocationsIdPerDistrict = () => locationsIdPerDistrict

const getWeatherTypes = () => weatherTypes
const getWindSpeed = () => windSpeed



module.exports =  {
    getDistricts,
    getDistrictsPerZone,

    getLocations,
    getLocationsMap,
    getLocationsPerDistrict,
    getLocationsIdPerDistrict,

    getWeatherTypes,
    getWindSpeed
}
