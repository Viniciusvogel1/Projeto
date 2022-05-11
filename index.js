const express = require('express')
const app = express()
const handlebars=require('express-handlebars')
const { application_name } = require('pg/lib/defaults')
const Cliente=require('./models/clientes')


app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.engine('handlebars',handlebars.engine({defaultLayout:'main',runtimeOptions:{
    allowProtoPropertiesByDefault:true,
    allowProtoMethodsByDefault:true,}
}))
app.set('view engine','handlebars')
app.set('views','./views')

app.get('/',function(req,res){
res.send("INICIO")

})

app.get('/cadastro',function(req,res){
res.render('cad-cliente',{layout:false})


})

app.get('/login',function(req,res){
res.render('login',{layout:false})
    
            })

        app.get('/menu',function(req,res){
        res.render('menu',{layout:false})
            
            })

        app.get('/produtos',function(req,res){
        res.render('produtos',{layout:false})
                
             })

        app.get('/cad-produtos',function(req,res){
        res.render('cad-produtos',{layout:false})
                        
        })

app.post('/add-clientes',function(req,res){
    Cliente.create({
    nome_cliente:req.body.nome,
    cpf:req.body.cpf,
    cnpj:req.body.cnpj,
    rua:req.body.rua,
    bairro:req.body.bairro,
    cidade:req.body.cidade,
    estado:req.body.estado,
    numero:req.body.numero
    }).then(function(){
    res.send("Cliente Cadastrado")
    }).catch(function(erro){
    res.send("Não cadastrou" + erro)
    })

})


app.get('/clientes',function(req,res){
   Cliente.findAll({order:[['id','ASC']]}).then(function(clientes){
   res.render('clientes',{layout:false,clientes:clientes})
})
})

app.get('/deletar/:id_cliente',function(req,res){
    Cliente.destroy({
        where:{'id_cliente':req.params.id_cliente}
        }).then(function(){
    res.send("Cliente Excluido")
        }).catch(function(erro){
    res.send('Cliente não excluido'+erro)
})
})


app.get('/alterar/:nome_cliente',function(req,res){
    res.render('alterar-cliente',{layout:false,nome_cliente:req.params.nome_cliente})

})

app.listen(8080)