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

const History = sequelize.define('history', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
    name: {type: DataTypes.STRING,},
    description: {type: DataTypes.STRING,},
    category: {type: DataTypes.STRING},
    date: {type: DataTypes.STRING,},
    type: {type: DataTypes.STRING},
    amount: {type: DataTypes.FLOAT},
})

const Notification = sequelize.define('notification', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
    name: {type: DataTypes.STRING,},
    date: {type: DataTypes.STRING,},
    amount: {type: DataTypes.FLOAT},
})

const Stat = sequelize.define('stat', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
    date: {type: DataTypes.STRING,},
    income: {type: DataTypes.FLOAT, defaultValue: 0,},
    expense: {type: DataTypes.FLOAT, defaultValue: 0,},
    diff: {type: DataTypes.FLOAT, defaultValue: 0,},
})

User.hasMany(Wallet);
Wallet.belongsTo(User);

User.hasMany(Notification);
Notification.belongsTo(User);

Wallet.hasMany(History);
History.belongsTo(Wallet);

Wallet.hasMany(Stat);
Stat.belongsTo(Wallet);



module.exports = {
    User,
    Wallet,
    History,
    Notification,
    Stat
}