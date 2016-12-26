'use strict'

module.exports = {

  up: function (db) {
    return db.collection('stations').createIndexes([{
      key: {
        name: 1,
        station_type: 1
      },
      unique: true
    }])
  },

  down: function (db) {
    return db.collection('stations').dropIndexes()
  }
}
