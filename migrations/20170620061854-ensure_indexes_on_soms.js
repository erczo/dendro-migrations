'use strict'

module.exports = {
  up: function (db) {
    const soms = db.collection('soms')

    return Promise.all([
      soms.ensureIndex({
        name: 1
      }, {
        unique: true
      })
    ])
  },

  down: function (db) {
    const soms = db.collection('soms')

    return Promise.all([
      soms.dropIndex('name_1')
    ])
  }
}
