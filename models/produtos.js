const { type } = require('express/lib/response')                   //conexão com o banco de dados
const {sequelize,Sequelize } = require('./conexao');
const db=require('./conexao')


const Cliente = sequelize.define('produtos', {
  nome_produto:{
    type: Sequelize.STRING
  },
  valor:{
    type: Sequelize.STRING
  },
  estoque:{
    type: Sequelize.STRING
  }
  
})

//Cliente.sync({force:true})

module.exports=Cliente
