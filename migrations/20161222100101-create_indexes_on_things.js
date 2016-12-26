'use strict'

module.exports = {

  up: function (db) {
    return db.collection('things').createIndexes([{
      key: {
        name: 1
      },
      unique: false
    }])
  },

  down: function (db) {
    return db.collection('things').dropIndexes()
  }
}
