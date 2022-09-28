const { config } = require('dotenv')
config()

// process.env.XXX

module.exports = {
    logLevel: process.env.NODE_ENV === 'production' ? 'warn' : 'trace',
    port: process.env.PORT || 8080,
}
