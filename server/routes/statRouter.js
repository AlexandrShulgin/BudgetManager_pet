const Router = require('express')
const router = new Router()
const statController = require('../controllers/statController')


router.post('/create', statController.create)
router.get('/getall/:walletId', statController.getAll)

module.exports = router