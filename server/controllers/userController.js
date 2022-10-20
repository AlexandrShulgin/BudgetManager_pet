const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Wallet} = require('../models/models')
class UserController {
    async registration(req, res, next) {
        const {email, password} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Incorrect email or password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('User with this email is exist'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, password: hashPassword})
        const token = jwt.sign({id: user.id, email,}, 
            process.env.SECRET_KEY,
            {expiresIn: '24h'}
        )
        return res.json({token})

    }

    async login(req, res) {

    }

    async check(req, res, next) {
        const{id} = req.query
        if (!id) {
            next(ApiError.badRequest('Не задан id'))
        }
        res.json(id);
    }
}

module.exports = new UserController()