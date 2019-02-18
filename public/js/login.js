//引入连接池对象
const pool=require('../Pool.js')
 const express=require('express');
 const mysql=require('mysql');

//路由器是express下的一个功能
//创建一个空的路由器
var app=express();
var router=express.Router();//往这个空的路由器添加模块下的所有路由
var obj;
//添加路由
 router.post('/login',(req,res)=>{
        var obj=req.body;
      var $uname=obj.uname;
	  var $upwd=obj.upwd;
	  if(!$uname){
	  res.send({code:401,msg:'uname qreuired'});
	  return;
	  }
	 if(!$upwd){
		res.send({code:402,msg:'uname qreuired'})
			return;
	}

pool.query('SELECT * from xz_user where uname=? AND upwd=?',[$uname,$upwd],(err,result)=>{
        if(result.length>0){
		res.send({code:200,msg:"login success"})
		} 
		else {
		  res.send({code:301,msg:'login error'})
		}
 });