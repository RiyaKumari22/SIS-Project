const express=require('express')
const path=require('path')
const app=express();
const port= 8080
// const staticPath=path.join(__dirname,'../public')

app.set("view engine","ejs")
app.use(express.static(__dirname + '/public'));
// app.st(express.static(staticPath))
app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/contact',(req,res)=>{
    res.render('contact')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
// app.get('/header',(req,res)=>{
//     res.render('header')
// })
// app.get('/footer',(req,res)=>{
//     res.render('footer')
// })
app.get('/',(req,res)=>{
    res.send("this is ")
})
app.listen(port,()=>{
    console.log(`listening on the port ${port}`);
})