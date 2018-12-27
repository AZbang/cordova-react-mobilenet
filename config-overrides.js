const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
  injectBabelPlugin(['@babel/plugin-proposal-decorators', { 'decoratorsBeforeExport': true }], config);
  injectBabelPlugin(['transform-class-properties'], config);
  return config;
}
