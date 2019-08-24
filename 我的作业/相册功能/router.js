
var fs = require('fs')
var queryString = require('querystring');
var formidable = require('formidable')
var timeStamp = require('time-stamp')
var path = require('path')
var config = require('./config')
exports.index = function (req, res) {
    fs.readdir('./upload',function(err,arr){
        if(err){
            throw err
        }
       
      res.render('index',{arr:arr})
      console.log(arr)
    })
   
}

exports.defPic = function (req, res) {
    var obj;
    var path = queryString.unescape(req.path)
   // console.log(path)
    fs.readdir('./upload' + path, function (err, arr) {
        if (err) {
            throw err
        }
      //  console.log(arr)
        obj = {
            path: path,
            arr: arr
        }
        res.render('defPic', obj)
    })


}
exports.uppic = function (req, res) {
    fs.readdir('./upload',function(err,arr){
        if(err){
            throw err
        }
      res.render('uppic',{arr:arr})
        console.log(arr)
    })
    
}
exports.mkPic = function (req, res) {
    res.render('mkPic')
}
exports.getPicName = function (req, res) {
    fs.readdir('./upload', function (err, data) {
        if (err) {
            throw err
        }
       // console.log(data)
        res.send(data)
    })
}
exports.createPicName = function (req, res) {
    //console.log(req.body)
    fs.exists('./upload/' + req.body.picName, function (isMake) {
        if (isMake) {
            console.log('当前相册名称已存在')
            res.render('message', config.tips.err)
        } else {
            console.log('创建成功')
            fs.mkdir('./upload/' + req.body.picName, function (err) {
                if (err) {
                    throw err
                }
                console.log('目录已经创建成功')
                res.render('message', config.tips.success)
            })
        }
    })
}
//uploadpic
exports.uploadpic = function (req, res) {
    var form = new formidable.IncomingForm();
    form.uploadDir = './usedDir'
    form.keepExtensions = true
    form.parse(req, function (err, fields, files) {
       // console.log(fields)
        //console.log(files)
        //console.log(files.upPic.path)
        var time = timeStamp('YYYYMMDD')
        var ren = parseInt(Math.random() * 12345 + 678910)
        var ext = path.extname(files.upPic.path)
       // console.log(time + ren + ext)
        var oldName = path.join(__dirname, files.upPic.path)
        var newName = path.join(__dirname, 'upload', fields.picName, time + ren + ext)
        fs.rename(oldName, newName, function (err) {
            if (err) {
                res.render('message', config.tips.err)
            }
            console.log('图片上传成功')
            console.log(config.tips);
            res.render('message', config.tips.success)
        })
    })
}
