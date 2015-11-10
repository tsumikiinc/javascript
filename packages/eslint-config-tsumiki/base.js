module.exports = {
  extends: [
    'eslint-config-tsumiki/rules/best-practices',
    'eslint-config-tsumiki/rules/errors',
    'eslint-config-tsumiki/rules/legacy',
    'eslint-config-tsumiki/rules/node',
    'eslint-config-tsumiki/rules/strict',
    'eslint-config-tsumiki/rules/stylistic',
    'eslint-config-tsumiki/rules/variables'
  ],
  env: {
    browser: true,
    node: true,
    commonjs: true,
    mocha: true,
    jest: true,
    jquery: true
  },
  ecmaFeatures: {},
  globals: {},
  rules: {}
};
