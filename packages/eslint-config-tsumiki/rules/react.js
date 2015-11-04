module.exports = {
  'parser': 'babel-eslint',
  'plugins': [
    'react'
  ],
  'ecmaFeatures': {
    'jsx': true
  },
  'rules': {
    'react/display-name': 0,
    'react/forbid-prop-types': 1,
    'react/jsx-boolean-value': 2,
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-curly-spacing': 2,
    'react/jsx-indent-props': [2, 2],
    'react/jsx-max-props-per-line': 0,
    'react/jsx-no-duplicate-props': 0,
    'react/jsx-no-literals': 0,
    'react/jsx-no-undef': 2,
    'react/jsx-quotes': [2, 'double', 'avoid-escape'],
    'react/jsx-sort-prop-types': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-danger': 0,
    'react/no-did-mount-set-state': [2, 'allow-in-func'],
    'react/no-did-update-set-state': 2,
    'react/no-multi-comp': 2,
    'react/no-unknown-property': 2,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,
    'react/require-extension': 0,
    'react/self-closing-comp': 2,
    'react/sort-comp': [1, {
      'order': [
        'lifecycle',
        '/^on.+$/',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'everything-else',
        '/^render.+$/',
        'render'
      ]
    }],
    'react/wrap-multilines': 2
  }
};
