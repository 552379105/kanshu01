const express=require('express');
const mysql=require('mysql');
const productRouter=require('./routes/login.js')
const userRouter=require('./routes/user.js')
const bodyParser=require('body-parser')
//创建web服务器
var app=express();
app.listen(3000);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended:false //不适用扩展的模块，而是使用nodejs提供的querystring模块解析为对象
}));
app.use('/login',userRouter);
app.use('/product',productRouter);





