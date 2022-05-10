const { type } = require('express/lib/response')                   //conexão com o banco de dados
const {sequelize,Sequelize } = require('./conexao');
const db=require('./conexao')


const Cliente = sequelize.define('produtos', {
  id_nota:{
    type: Sequelize.STRING
  },
  data_emissao:{
    type: Sequelize.STRING
  },
  id_cliente:{
    type: Sequelize.STRING
  }
  
  
})

//Cliente.sync({force:true})

module.exports=Cliente

