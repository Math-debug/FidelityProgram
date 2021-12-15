const Sequelize = require('sequelize');
const db = require('./db');

const Clientes = db.define('clientes',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    apelido:{
        type: Sequelize.STRING,
        allowNull: false
    },
    aniversario: {
        type: Sequelize.DATE,
        allowNull: false
    },
    celular:{
        type: Sequelize.BIGINT,
        allowNull: false
    },
    rua:{
        type: Sequelize.STRING,
        allowNull: false
    },
    bairro:{
        type: Sequelize.STRING,
        allowNull: false
    },
    numero:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    time:{
        type: Sequelize.STRING,
        allowNull: false
    },
    profissao:{
        type: Sequelize.STRING,
        allowNull: false
    },
    civil:{
        type: Sequelize.STRING,
        allowNull: false
    },
    token:{
        type: Sequelize.STRING,
        allowNull: false
    },
    ETIQUETA: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Clientes;