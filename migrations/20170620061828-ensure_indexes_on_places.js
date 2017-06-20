'use strict'

module.exports = {
  up: function (db) {
    const places = db.collection('places')

    return Promise.all([
      places.ensureIndex({
        name: 1
      }, {
        unique: true
      })
    ])
  },

  down: function (db) {
    const places = db.collection('places')

    return Promise.all([
      places.dropIndex('name_1')
    ])
  }
}
