'use strict'

module.exports = {

  up: function (db) {
    return db.collection('organizations').createIndexes([{
      key: {
        name: 1
      },
      unique: true
    }])
  },

  down: function (db) {
    return db.collection('organizations').dropIndexes()
  }
}
