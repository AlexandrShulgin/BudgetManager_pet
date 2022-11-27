const Router = require('express')
const router = new Router()
const statController = require('../controllers/statController')


router.post('/', statController.create)
router.get('/', statController.getAll)

module.exports = router