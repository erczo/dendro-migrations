'use strict'

module.exports = {

  up: function (db) {
    return db.collection('schemes').createIndexes([{
      key: {
        name: 1
      },
      unique: true
    }])
  },

  down: function (db) {
    return db.collection('schemes').dropIndexes()
  }
}
