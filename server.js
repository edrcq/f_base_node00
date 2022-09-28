const express = require('express')
const config = require('./config')
const router = require('./router')
const registerRoutes = require('./routes')

const app = express()

app.use((req, res, next) => {
    console.log('MW APP', req.headers)
    next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/v0', router)
registerRoutes(app)

app.listen(config.port, (err) => {
    if (!err) {
        console.log(`Listening on http://127.0.0.1:${config.port}`)
    }
})

// module.exports.app = app
exports.app = app
