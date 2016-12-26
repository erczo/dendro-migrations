'use strict'

module.exports = {

  up: function (db) {
    return db.collection('vocabularies').createIndexes([{
      key: {
        scheme_id: 1,
        label: 1
      },
      unique: true
    }])
  },

  down: function (db) {
    return db.collection('vocabularies').dropIndexes()
  }
}
