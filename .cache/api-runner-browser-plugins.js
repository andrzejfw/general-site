module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-layout/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-web-font-loader/gatsby-browser.js'),
      options: {"plugins":[],"custom":{"families":["UnileverShilling, UnileverShillingMedium"],"urls":["/static/fonts/fonts.css"]}},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
