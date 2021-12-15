const router = require('express').Router();
const Rules = require('../model/rules');

//######## REQUISICOES PARA A WEB API ##############

router.get('/clientes', async function (req, res) {
  let obj = new Rules();
  let send = await obj.getClientes();
  res.send(send);
})
router.get('/aniversario',async function(req,res){
  try{
    let obj = new Rules();
    let send = await obj.getAniversariantes();
    res.send(send)
  }catch(e){
    console.log(e)
  }

})
router.get('/fidelidade',async function(req,res){
  try{
    let obj = new Rules();
    let send = await obj.getFidelidade();
    res.send(send)
  }catch(e){
    console.log(e)
  }

})
router.post('/log/lista-consulta', async function(req,res){
  try{
    let obj = new Rules(req.body);
    let send = await obj.getListaCliente();
    res.send(send)
  }catch(e){
    console.log(e)
  }
})

//######## REQUISICOES PARA VIEWS ##############

router.post('/log/cadastro', async function(req,res){
  try{
  let obj = new Rules(req.body);
  let send = await obj.CreateClientes();
  if(send == 'Cliente Inserido'){
  res.render('pages/qrcode',{
    token: req.body.token
  })}else{
    res.send(send);
  }
  }catch(e){
    console.log(e)
  }
})

router.get('/login', async function (req, res) {
res.render('pages/login',{
  msg:""
})
})
router.get('/', async function (req, res) {
  res.render('pages/login',{
    msg:""
  })
  })
router.post('/log/painel', async function (req, res) {
res.render('pages/painel',{
  token:req.body.token
})
})
router.get('/cadastro',function(req,res){
res.render('pages/cadastro');
})
router.get('/log/card/:token',async function(req,res){
  try{
  let token = req.params.token
  let obj = new Rules({token: token});
  let send = await obj.getClientesToken();
  res.render('pages/card',send)
  }catch(e){
    console.log(e)
  }
})
router.get('/log/consulta',function(req,res){
  res.render('pages/consulta');
  })
router.get('/log/consulta/:id',async function(req,res){
    try{
    let id = req.params.id
    let json = {id}
    let obj = new Rules(json);
    let send = await obj.buscaClientId();
    res.render('pages/clientId',send);
    }catch(e){
      console.log(e)
    }
    })
router.put('/log/consulta/:id',async function(req,res){
  try{
  let id = req.params.id
  let json = {id}
  let obj = new Rules(json);
  let send = await obj.putClienteEtiqueta();
  let etiqueta = {id: send}
  res.send(etiqueta)
  }catch(e){
    console.log(e)
  }
  })
  router.put('/log/consulta/rm/:id',async function(req,res){
    try{
    let id = req.params.id
    let json = {id}
    let obj = new Rules(json);
    let send = await obj.removeClienteEtiqueta();
    let etiqueta = {id: send}
    res.send(etiqueta)
    }catch(e){
      console.log(e)
    }
    })
module.exports = router;