
module.exports = function registerRoutes(app) {
    app.get('/', (req, res) => {
        console.log(req.ip, req.method)
    
        const result = {
            ip: req.ip
        }
    
        res.json(result)
    })
    
    app.get('/filters', (req, res) => {
        console.log(req.query)
    
        res.json({
            query: req.query
        })
    })
    
    app.get('/error', (req, res) => {
        res.status(400).json({
            error_code: 'EMPTY_FIELD',
        });
    })
}
