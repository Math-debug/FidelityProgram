const { json } = require('express');
const db = require('./db/db');

class Rules{
    constructor(json){
        this.json = json;
    }
async getClientes(){
                const Clientes = require('./db/clientes');
                await db.sync();
                const readClientes = await Clientes.findAll();
                return readClientes;
    };
async CreateClientes(){
            const Clientes = require('./db/clientes');
            await db.sync();
            let json = this.json;
            const createClientes = Clientes.create({
                nome:json.nome.toUpperCase(),
                apelido:json.apelido.toUpperCase(),
                aniversario:json.aniversario,
                celular:json.celular,
                rua:json.rua,
                bairro:json.bairro,
                numero:json.numero,
                time:json.time.toUpperCase(),
                civil:json.civil,
                token:json.token,
                profissao:json.profissao.toUpperCase(),
                ETIQUETA: 0
            }).catch(function (err) {
               return err;
              });
        let res = "Cliente Inserido";
        return res;
    }
async getUsuarios(){
    const usuarios = require('./db/usuarios');
    await db.sync();
    let json = this.json;
    var status = 401;
    const readUsuarios = await usuarios.findAll({
        where:{
            email:this.json.email,
            senha:this.json.senha
        }
    });
    if(readUsuarios[0]){
    if(readUsuarios[0].email == json.email && readUsuarios[0].senha == json.senha){
        status = 'OK';
    }
}
    return status;
}
async getClientesToken(){
    const Clientes = require('./db/clientes');
    await db.sync();
    let json = this.json;
    const Search = await Clientes.findAll({
        where:{
            token : json.token
        }
    });
    var data;
    for(let i of Search){
        data = i.dataValues;
        const formater = Intl.DateTimeFormat("pt-BR",{
            dataStyle: "long"
        })
        data.updatedAt = formater.format(data.updatedAt)
    }
    return data;
}
async getAniversariantes(){
    var Search = await db.query("SELECT * FROM clientes WHERE MONTH(CURDATE()) = MONTH(aniversario)", {type: db.QueryTypes.SELECT})
    return Search;
}
async getFidelidade(){
    var Search = await db.query("SELECT * FROM clientes WHERE ETIQUETA = 8", {type: db.QueryTypes.SELECT})
    return Search;
}
async getListaCliente(){
    let json = this.json;
    let parametro = json.parametro.replace(';','').replace('--','').replace('*','')
    let input = json.input.replace(';','').replace('--','').replace('*','').toUpperCase()
    if(parametro == 'todos'){
        const Clientes = require('./db/clientes');
        const Search = await Clientes.findAll();
        return Search;
    }else{
    const Search = await db.query(`SELECT * FROM clientes WHERE ${parametro} like '%${input}%'`, {type: db.QueryTypes.SELECT})
    return Search;
    }
}
async buscaClientId(){
    let json = this.json;
    const Clientes = require('./db/clientes');
    const Search = await Clientes.findAll({
        where:{
            id:json.id
        }
    });
    var data;
    for(let i of Search){
        data = i.dataValues;
        const formater = Intl.DateTimeFormat("pt-BR",{
            dataStyle: "long"
        })
        data.aniversario = formater.format(data.aniversario)
    }
    return data
}
async putClienteEtiqueta(){
    let json = this.json;
    var id = parseInt(json.id)
    const Clientes = require('./db/clientes');
    const Search = await Clientes.findAll({
        where:{
            id: id
        }
    })
    for(let i of Search){
    if(i.dataValues.ETIQUETA != 8){
    const send = await db.query(`UPDATE clientes SET ETIQUETA = ETIQUETA+1,updatedAt=(SELECT CURRENT_TIMESTAMP() from DUAL) WHERE id = ${id}`)
    }
    else{
        const send = await db.query(`UPDATE clientes SET ETIQUETA = 0,updatedAt=(SELECT CURRENT_TIMESTAMP() from DUAL) WHERE id = ${id}`)
    }
   let etiqueta = i.dataValues.ETIQUETA == 8 ? 0: parseInt(i.dataValues.ETIQUETA) +1;
   return etiqueta;
    }
}
async removeClienteEtiqueta(){
    let json = this.json;
    var id = parseInt(json.id)
    const Clientes = require('./db/clientes');
    const Search = await Clientes.findAll({
        where:{
            id: id
        }
    })
    for(let i of Search){
    if(i.dataValues.ETIQUETA == 0){
    }
    else{
        const send = await db.query(`UPDATE clientes SET ETIQUETA = ETIQUETA-1 WHERE id = ${id}`)
    }
   let etiqueta = i.dataValues.ETIQUETA == 0 ? 0 : parseInt(i.dataValues.ETIQUETA) -1;
   return etiqueta;
    }
}
}
module.exports = Rules;
