const { type } = require('express/lib/response')                   //conexão com o banco de dados
const {sequelize,Sequelize } = require('./conexao');
const db=require('./conexao')


const Cliente = sequelize.define('produtos', {
  cnpj_empresa:{
    type: Sequelize.STRING
  },
  nome_empresa:{
    type: Sequelize.STRING
  }
  
  
})

//Cliente.sync({force:true})

module.exports=Cliente

 