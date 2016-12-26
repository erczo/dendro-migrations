'use strict'

module.exports = {

  up: function (db) {
    return db.collection('persons').createIndexes([{
      key: {
        email: 1
      },
      sparse: true,
      unique: true
    }])
  },

  down: function (db) {
    return db.collection('persons').dropIndexes()
  }
}
