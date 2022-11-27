const {Wallet} = require('../models/models')
const ApiError = require('../error/ApiError')
const { where } = require('sequelize')


class WalletController {
   async create(req, res, next) {
       try {
           const {name, userId, income, expense, amount} = req.body
           const wallet = await Wallet.create({name, income, expense, amount, userId})
           return res.json(wallet)
       
       } catch (e) {
           next(ApiError.badRequest(e.message))
       }
    }

    async update(req, res, next) {
        try {
            const id = req.params.id
            const {name, userId, income, expense, amount} = req.body
            const wallet = await Wallet.update({name: name, income: income, expense: expense, amount: amount, userId: userId}, {where: {id: id}})
            return res.json(wallet)
        
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

   async destroy(req, res, next) {
        try {
            const id = req.params.id
            const wallet = await Wallet.destroy({where: {id: id}})
            return res.json(wallet)
    
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

   async getAll(req, res) {
       let wallets;
       const userId = req.params.userId
       wallets = await Wallet.findAll({where: {userId: userId}})
       return res.json(wallets)
   }
}

module.exports = new WalletController()
