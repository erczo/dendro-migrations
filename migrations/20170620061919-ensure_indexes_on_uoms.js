'use strict'

module.exports = {
  up: function (db) {
    const uoms = db.collection('uoms')

    return Promise.all([
      uoms.ensureIndex({
        som_id: 1
      }),

      uoms.ensureIndex({
        unit_tags: 1
      })
    ])
  },

  down: function (db) {
    const uoms = db.collection('uoms')

    return Promise.all([
      uoms.dropIndex('som_id_1'),
      uoms.dropIndex('unit_tags_1')
    ])
  }
}
