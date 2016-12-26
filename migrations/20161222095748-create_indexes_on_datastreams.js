'use strict'

module.exports = {

  up: function (db) {
    return db.collection('datastreams').createIndexes([{
      key: {
        name: 1
      },
      unique: true
    }])
  },

  down: function (db) {
    return db.collection('datastreams').dropIndexes()
  }
}
