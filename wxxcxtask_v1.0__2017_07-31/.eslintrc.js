module.exports = {

  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  "globals": {
    "wx": true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
//   'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
  // required to lint *.wpy files
  plugins: [
    'html'
  ],
  settings: {
    'html/html-extensions': ['.html', '.wpy']
  },
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'space-before-function-paren': 0
  }
//   },
//   "extends": [
//     "standard",
//     "plugin:vue/base"
//   ],

//   "eslint.validate": [
//     "javascript",
//     "javascriptreact",
//     {
//       "language": "vue",
//       "autoFix": true
//     }
//   ],
//   "eslint.autoFixOnSave": true


}
