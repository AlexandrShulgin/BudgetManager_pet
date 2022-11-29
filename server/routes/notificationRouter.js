const Router = require('express')
const router = new Router()
const notificationController = require('../controllers/notificationController')


router.post('/create', notificationController.create)
router.post('/destroy/:id', notificationController.destroy)
router.get('/getall/:userId', notificationController.getAll)

module.exports = router