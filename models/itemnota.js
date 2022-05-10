const { type } = require('express/lib/response')                   //conexão com o banco de dados
const {sequelize,Sequelize } = require('./conexao');
const db=require('./conexao')


const Cliente = sequelize.define('produtos', {
  id_produto:{
    type: Sequelize.STRING
  },
  quantidade:{
    type: Sequelize.STRING
  },
  valor_unit:{
    type: Sequelize.STRING
  },
  valor_total:{
    type: Sequelize.STRING
  }
  
  
})

//Cliente.sync({force:true})

module.exports=Cliente
