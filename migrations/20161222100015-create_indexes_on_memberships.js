'use strict'

module.exports = {

  up: function (db) {
    return db.collection('memberships').createIndexes([{
      key: {
        organization_id: 1,
        person_id: 1
      },
      unique: true
    }, {
      key: {
        person_id: 1
      },
      unique: false
    }])
  },

  down: function (db) {
    return db.collection('memberships').dropIndexes()
  }
}
