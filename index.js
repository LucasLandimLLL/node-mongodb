const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}))

const routes = require('./route')
app.use('/', routes)

app.get('/', function(req, res){
    res.send('rota principal')
})

app.listen(3000, function (){
    console.log('serverup port 3000')
})