const {Sequelize} = require('sequelize');

module.exports = new Sequelize('postgres://shhh:qAmfYi8FfDYcCdrqihfUAsLTw9T27gz8@dpg-ce5nbtda4991uet16l90-a.frankfurt-postgres.render.com/bm',

    {
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
            ssl: {
                require: 'false'
            }
        },
    }

    /*process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.DB_HOSTNAME,
        port: process.env.DB_PORT,
    }*/
)