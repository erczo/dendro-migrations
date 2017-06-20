'use strict'

module.exports = {
  up: function (db) {
    const vocabularies = db.collection('vocabularies')

    return Promise.all([
      vocabularies.ensureIndex({
        scheme_id: 1,
        label: 1
      }, {
        unique: true
      })
    ])
  },

  down: function (db) {
    const vocabularies = db.collection('vocabularies')

    return Promise.all([
      vocabularies.dropIndex('scheme_id_1_label_1')
    ])
  }
}
