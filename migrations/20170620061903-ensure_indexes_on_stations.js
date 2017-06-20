'use strict'

module.exports = {
  up: function (db) {
    const stations = db.collection('stations')

    return Promise.all([
      stations.ensureIndex({
        'hashes.key': 1,
        'hashes.str': 1
      }),

      stations.ensureIndex({
        slug: 1
      }, {
        sparse: true,
        unique: true
      }),

      stations.ensureIndex({
        station_type: 1,
        enabled: 1,
        name: 1
      })
    ])
  },

  down: function (db) {
    const stations = db.collection('stations')

    return Promise.all([
      stations.dropIndex('hashes.key_1_hashes.str_1'),
      stations.dropIndex('slug_1'),
      stations.dropIndex('station_type_1_enabled_1_name_1')
    ])
  }
}
