const { Router } = require('express')
const agendaRouter = require('./agenda/agenda.router')

const router = Router()

router.use('/agenda', agendaRouter) // /v0/agenda/42

router.use((req, res, next) => {
    console.log('Router MW', req.url)
    next();
})

router.get('/', (req, res) => {
    console.log(req.ip, req.method)

    const result = {
        ip: req.ip
    }

    res.json(result)
})

router.post('/', (req, res) => {
    console.log(req.body)

    res.json({
        body: req.body
    })
})

router.get('/filters', (req, res) => {
    console.log(req.query)

    res.json({
        query: req.query
    })
})

router.get('/error', (req, res) => {
    res.status(400).json({
        error_code: 'EMPTY_FIELD',
    });
})

module.exports = router;
