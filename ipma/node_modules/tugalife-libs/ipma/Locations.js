/* Version 1.0 */

const data = require('./Data')


module.exports = {
  getService() {
  return {

       getLocations (){

        return data.getLocations()
      },

       getLocation(id){
        return  data.getLocationsMap() ?  data.getLocationsMap()[id] : null
      },

      //all districts
       getDistricts () {
        return data.getDistricts()
      },

      getDistrictsZone1 () {
        return  data.getDistrictsPerZone() ? data.getDistrictsPerZone() ['zone1'] : null
      },

      getDistrictsZone2 () {
        return  data.getDistrictsPerZone() ? data.getDistrictsPerZone() ['zone2'] : null
      },
      getDistrictsZone3 () {
        return  data.getDistrictsPerZone() ? data.getDistrictsPerZone() ['zone3'] : null
      },

       getLocationsPerDistrict(id){
        return data.getLocationsPerDistrict() ?  data.getLocationsPerDistrict()[id] : null
      }}
  }
}
