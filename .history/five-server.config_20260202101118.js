module.exports = {
  // Default configuration
  default: {
    port: 3000,
    open: true,
    watch: true
  },
  
  // Development configuration
  dev: {
    port: 3000,
    browser: "chrome",
    https: false
  },
  
  // Staging configuration
  staging: {
    port: 8000,
    browser: "firefox",
    https: true
  },
  
  // Production-like configuration
  prod: {
    port: 8080,
    open: false,
    watch: false
  }
};