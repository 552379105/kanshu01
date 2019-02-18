
DROP DATABASE IF EXISTS xz;
CREATE DATABASE ks CHARSET=UTF8;
USE ks;
CREATE TABLE ks_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),
  user_name VARCHAR(32),      #用户名，如王小明
  gender INT                  #性别  0-女  1-男
);
INSERT INTO ks_user VALUES
(NULL, 'dingding', '123456', 'ding@qq.com', '13501234567', '丁伟', '1'),
(NULL, 'dangdang', '123456', 'dang@qq.com', '13501234568', '林当', '1'),
(NULL, 'doudou', '123456', 'dou@qq.com', '13501234569', '窦志强', '1'),
(NULL, 'yaya', '123456', 'ya@qq.com', '13501234560', '秦小雅', '0');