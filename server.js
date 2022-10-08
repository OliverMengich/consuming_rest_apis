const express = require('express');
const app = express();
const {promisify} = require('util');
const data = require('./index');

app.set('view engine','ejs');
app.set('views','views');
app.get('/',(req,res)=>{
    res.render('index',{
        path: '/',
        header: 'Homepage',
        joke: data.a
    })
});
app.listen(3000,(res)=>{
    console.log('App listening at port 3000')
});