// eslint.config.js
const antfu = require('@antfu/eslint-config').default

module.exports = antfu({
  rules: {
    'no-console': 'off',
    'eslint-comments/no-unlimited-disable': 'off',
  },
})
