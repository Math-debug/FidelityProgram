const Sequelize = require('sequelize');
const config = require('../../config/config.json');
const sequelize = new Sequelize(config.dbname,config.user,config.passwd,{
    dialect:'mysql',
    host: config.host
});
sequelize.authenticate().then(function(){
    console.log("Conexao com o banco efetuada");
  }).catch(function(error){
    console.log("error: "+error);
});
module.exports = sequelize;