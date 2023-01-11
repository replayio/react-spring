const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')
const cypressReplay = require("@replayio/cypress")

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config)
  cypressReplay.default(on, config);
  
  return config
}
