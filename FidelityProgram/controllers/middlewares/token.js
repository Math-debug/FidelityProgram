const jwt = require('jsonwebtoken');
const config = require('../../config/config.json')
var Token = async function (req, res, next) {
    let id = req.body.nome + req.body.celular;
    if(id){
    const token = jwt.sign(id,config.SECRET);
    req.body.token = token;
    next();
    }
    else{
        res.redirect('/');
    }
}

module.exports = Token;