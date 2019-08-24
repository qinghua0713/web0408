var experss = require('express');
var app = new experss()
var bodyParser = require('body-parser')
var formidable = require('formidable');
app.use(bodyParser.urlencoded({extended:false}))

var router = require('./router');



var path = require('path');

app.set('view engine','ejs');

app.get('/',router.index)

app.get('/mkPic',router.mkPic)

app.get('/uppic',router.uppic)

app.use(experss.static(path.join(__dirname,'upload')))

app.use('/static',experss.static(path.join(__dirname,'static')))

app.use('/defPic',router.defPic)

app.get('/getPicName',router.getPicName)

app.post('/createPicName',router.createPicName)
//uploadpic
app.post('/uploadpic',router.uploadpic)


app.listen(8000,function(){
    console.log('服务器已启动.....')
})