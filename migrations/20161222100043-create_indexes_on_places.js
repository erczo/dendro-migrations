'use strict'

module.exports = {

  up: function (db) {
    return db.collection('places').createIndexes([{
      key: {
        name: 1
      },
      unique: true
    }])
  },

  down: function (db) {
    return db.collection('places').dropIndexes()
  }
}
