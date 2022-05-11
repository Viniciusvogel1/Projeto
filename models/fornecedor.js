const { type } = require('express/lib/response')                   //conexão com o banco de dados
const {sequelize,Sequelize } = require('./conexao');
const db=require('./conexao')


const Cliente = sequelize.define('produtos', {
  id_produto:{
    type: Sequelize.STRING
  },
  nome_fornecedor:{
    type: Sequelize.STRING
  },
  cnpj_fornecedor:{
    type: Sequelize.STRING
  }
  
})

//Cliente.sync({force:true})

module.exports=Cliente

