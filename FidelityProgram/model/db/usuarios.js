const Sequelize = require('sequelize');
const db = require('./db');

const usuarios = db.define('usuarios',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
   senha:{
    type: Sequelize.STRING,
    allowNull: false
   }
})

module.exports = usuarios;