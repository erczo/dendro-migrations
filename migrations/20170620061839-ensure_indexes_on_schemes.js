'use strict'

module.exports = {
  up: function (db) {
    const schemes = db.collection('schemes')

    return Promise.all([
      schemes.ensureIndex({
        name: 1
      }, {
        unique: true
      })
    ])
  },

  down: function (db) {
    const schemes = db.collection('schemes')

    return Promise.all([
      schemes.dropIndex('name_1')
    ])
  }
}
