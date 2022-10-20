const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const walletRouter = require('./walletRouter')


router.use('/user', userRouter)
router.use('/wallet', walletRouter)

module.exports = router