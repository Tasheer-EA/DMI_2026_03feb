require('dotenv').config();

module.exports = {
  port: process.env.PORT || 5500,
  browser: process.env.BROWSER || 'default',
  open: process.env.OPEN === 'true',
  watch: true,
  highlight: true,
  ignore: [
    "node_modules/**",
    ".git/**",
    "**/*.scss",
    "**/*.ts"
  ]
};