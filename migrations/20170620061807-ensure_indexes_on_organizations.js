'use strict'

module.exports = {
  up: function (db) {
    const organizations = db.collection('organizations')

    return Promise.all([
      organizations.ensureIndex({
        name: 1
      }, {
        unique: true
      })
    ])
  },

  down: function (db) {
    const organizations = db.collection('organizations')

    return Promise.all([
      organizations.dropIndex('name_1')
    ])
  }
}
