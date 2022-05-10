const { type } = require('express/lib/response')                   //conexão com o banco de dados
const {sequelize,Sequelize } = require('./conexao');
const db=require('./conexao')


const Cliente = sequelize.define('produtos', {
  id_login:{
    type: Sequelize.STRING
  },
  nome:{
    type: Sequelize.STRING
  },
  senha:{
    type: Sequelize.STRING
  }
})

//Cliente.sync({force:true})

module.exports=Cliente
