
// for go to root directory

$ su

// to see all images

$docker images

// run container of mysql 

$ docker run --name mysql-container -d -p 3306:3306 -v mysqldata:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=test mysql:latest

// go to exec shell inside mysql container

$ docker exec -it mysql-container /bin/bash

*// read db // open mysql shell

$ mysql -u root -ptest

// create database

mysql> create database ecom;

*// read db // use ecom

mysql> use ecom

// create table

mysql> CREATE TABLE products(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(32) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price INT NOT NULL
    );

*// read db // see the table

mysql> show tables;

*// read db // see description products table

mysql> desc products;

*// read db // see filled row

mysql> select * from products;



