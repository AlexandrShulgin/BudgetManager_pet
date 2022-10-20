 const {Wallet} = require('../models/models')
 const ApiError = require('../error/ApiError')
 

 class WalletController {
    async create(req, res, next) {
        try {
            const {name, userId} = req.body
            const wallet = await Wallet.create({name, userId})
            return res.json(wallet)
        
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
        
    }

    async getAll(req, res) {
        let wallets;
        wallets = await Wallet.findAll()
        return res.json(wallets)
    }

    async getOne(req, res) {
        const {id} = req.params
        const wallet = await Wallet.findOne({where: {id}})
        return res.json(wallet)
    }
}

module.exports = new WalletController()