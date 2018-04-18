'use strict';
const craPreset = require('babel-preset-react-app');
if (process.env.LEGACY_BUILD === 'true') {
  const envPreset = craPreset.presets.find(
    preset => Array.isArray(preset) && preset[0].includes('babel-preset-env')
  );
  if (envPreset) {
    // Use the default CJS transform
    delete envPreset[1].modules;
  }
}
module.exports = {
  presets: [craPreset]
};
