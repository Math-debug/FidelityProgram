const Rules = require('../../model/rules');
const jwt = require('jsonwebtoken');
const config = require('../../config/config.json')

var MyLogger = async function (req, res, next) {
    let obj = new Rules(req.body);
    let send = await obj.getUsuarios();
    if(send === 'OK'){
    const token = jwt.sign('BarberSystem',config.SECRET);
    req.body.token = token;
    next();
    }else{
      res.render('pages/login.ejs',{
        msg:"Senha ou Login Invalidos"
      });
    }
  }
module.exports = MyLogger;
