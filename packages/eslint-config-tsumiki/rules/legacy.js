module.exports = {
  'rules': {
    // ネストの深さが4ブロック以上は警告
    // http://eslint.org/docs/rules/max-depth
    'max-depth': [1, 4],

    // http://eslint.org/docs/rules/max-len
    'max-len': [1, 100, 4],

    // http://eslint.org/docs/rules/max-params
    'max-params': [2, 4],

    // http://eslint.org/docs/rules/max-statements
    'max-statements': [0, 10],

    // http://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 0,

    // http://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 0
  }
};
