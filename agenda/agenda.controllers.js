
async function get(req, res) {
    
    res.json({
        list: []
    })
}

async function create(req, res) {

    // create
    const newlyCreated = {}
    res.json(newlyCreated)
}

async function update(req, res) {
    const { id } = req.params
    // do update
    const updated = { id }
    res.json(updated)
}

async function replace(req, res) {
    const { id } = req.params
    // do update
    const updated = { id }
    res.json(updated)
}

async function remove(req, res) {
    const { id } = req.params
    res.status(200).end();
}

exports.get = get
exports.create = create
exports.update = update
exports.replace = replace
exports.remove = remove
