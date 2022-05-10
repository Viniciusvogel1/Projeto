/*
//const pg=require('pg')
const {Pool}=require('pg')   //utilizando pool de conexao

//const client=new pg.Client({
    const pool =new Pool({   //criando a conexao atraaves do pool
    user:'postgres',
    host:'localhost',
    database:'aulaNode',
    paassword:'postgres',
    port:5432

})

module.exports=pool
*/

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('projeto', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    port: '5432'
  });

  module.exports={
    Sequelize:Sequelize,
    sequelize:sequelize

  }