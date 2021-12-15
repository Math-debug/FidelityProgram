const express = require('express');
const app = express();
const router = require('./controllers/router');
const log = require('./controllers/middlewares/logger');
const token = require('./controllers/middlewares/token');
const verifyToken = require('./controllers/middlewares/verifyToken')
const bodyParser = require("body-parser");
const cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views/pages'));
app.use('/log/painel',log);
app.use('/log/cadastro',token);
app.use('/aniversario',verifyToken)
app.use('/fidelidade',verifyToken)
app.use('/log/consulta',verifyToken)
app.use('/log/lista-consulta',verifyToken)
app.use('/',router);
app.listen(process.env.PORT || 3000, () => console.log("servidor Executando"));
