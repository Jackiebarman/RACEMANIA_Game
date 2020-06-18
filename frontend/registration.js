var mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var http = require('http');

const PORT=3000;
const app =express();

app.use(bodyParser.json());
app.use(cors());

var obj;
app.post('/register',function(req,res){
    this.obj=req.body;
    console.log(this.obj);
    console.log(this.obj.email);
    console.log("data sent successfully");
    var con = mysql.createConnection({
        
        host: "localhost",
        user: "root",
        password: "bhajan2000",
        database:'Angular_project'
    });
    let t1="create table if not exists registration(firstname varchar(30),lastname varchar(30),username varchar(30) PRIMARY KEY,email varchar(50),phone bigint,address varchar(30),password varchar(20))";
    let names={firstname:this.obj.firstname,lastname:this.obj.lastname,username:this.obj.username,email:this.obj.email,phone:this.obj.phone,address:this.obj.address,password:this.obj.password};
    let ins="insert into registration SET ?";
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        // con.query("use angular");
        con.query(t1);
        
        con.query(ins,names,function(err,result){
            if(err) res.status(404).send({"error":"user already exist"})
            else res.status(200).send(this.obj);
        });
        
    });
});
app.post('/login',function(req,res){
    this.obj=req.body;
    console.log(this.obj);
    console.log(this.obj.username);
    console.log("data sent successfully");
    var con = mysql.createConnection({
        
        host: "localhost",
        user: "root",
        password: "bhajan2000",
        database:'Angular_project'
    });
     var username = this.obj.username;
     
     var password = this.obj.password;
    var t2="select exists(select * from registration where registration.username=? AND registration.password=?) as EXIST";
    
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
       
        con.query(t2,[username,password],function(err,result){
            if(!result) {res.status(404).send("error in mysql");console.log(err);}
            else{
                res.status(200).send(result[0]);
                console.log(result[0].EXIST);
                console.log('success',req.body.username);
               
            } 
    
        });
        
    });
});
    app.listen(PORT,function(){
        console.log("server running on localhost:"+PORT);
    });
