const { type } = require('express/lib/response')                   //conexão com o banco de dados
const {sequelize,Sequelize } = require('./conexao');
const db=require('./conexao')


const Cliente = sequelize.define('clientes', {
  nome_cliente:{
    type: Sequelize.STRING
  },
  cpf:{
    type: Sequelize.STRING
  },
  cnpj:{
    type: Sequelize.STRING
  },
  rua:{
    type: Sequelize.STRING
  },
  bairro:{
    type: Sequelize.STRING
  },
  cidade:{
    type: Sequelize.STRING
  },
  estado:{
    type: Sequelize.STRING
  },
  numero:{
    type: Sequelize.STRING
  }
})

//Cliente.sync({force:true})

module.exports=Cliente