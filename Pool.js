const mysql=require('mysql');

var pool=mysql.createPool({
		host:'127.0.0.1',
		port:3306,
		user:'root',
		password:'',
		database:'xz',
		connectionLimit:20//设置连接池中的数量
		});
//导出连接池
module.exports=pool;
