const { Router } = require('express')
const { get, create, update, replace, remove } = require('./agenda.controllers')

const router = Router()

router.get('/', get)
router.post('/', create)
router.patch('/:id', update) // body : { title: newTitle }
router.put('/:id', replace) // body : { title, invitees, xxx, ppp } 
router.delete('/:id', remove)

module.exports = router;
