const path = require('path')

module.exports = {
  port: 8080,
  cssPreprocessOptions: {
    less: {
      modifyVars: {
        'white': '#000',
        hack: `true; @import "${path.resolve(__dirname, 'src/assets/css/myTheme.less')}";`
      }
    }
  }
}