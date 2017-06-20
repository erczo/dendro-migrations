'use strict'

module.exports = {
  up: function (db) {
    const persons = db.collection('persons')

    return Promise.all([
      persons.ensureIndex({
        email: 1
      }, {
        sparse: true,
        unique: true
      })
    ])
  },

  down: function (db) {
    const persons = db.collection('persons')

    return Promise.all([
      persons.dropIndex('email_1')
    ])
  }
}
