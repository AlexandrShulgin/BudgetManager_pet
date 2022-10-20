const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
})

const Wallet = sequelize.define('wallet', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
    name: {type: DataTypes.STRING,},
    income: {type: DataTypes.FLOAT, defaultValue: 0,},
    expense: {type: DataTypes.FLOAT, defaultValue: 0,},
    amount: {type: DataTypes.FLOAT, defaultValue: 0,},
})

User.hasMany(Wallet);
Wallet.belongsTo(User);

module.exports = {
    User,
    Wallet,
}