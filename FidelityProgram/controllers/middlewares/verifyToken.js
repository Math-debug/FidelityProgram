const jwt = require('jsonwebtoken');
const config = require('../../config/config.json')
var VerifyToken = async function (req, res, next) {
    const token = req.headers['x-access-token']
    jwt.verify(token,config.SECRET,(err,decoded)=>{
        if(err) {
            res.redirect('/')
        }
        else{
            next();
        }
    })
}

module.exports = VerifyToken;