const express=require('express')
const path=require('path')
const app=express();
const port= 8080
// const staticPath=path.join(__dirname,'../public')

app.set("view engine","ejs")
app.use(express.static(__dirname + '/public'));
// app.st(express.static(staticPath))
app.get('/',(req,res)=>{
    res.render('index',{"name":"HOME"})
   


})
app.get('/contact',(req,res)=>{
    res.render('contact',{"name":"CONTACT US"})
})
app.get('/about',(req,res)=>{
    res.render('about',{'name':'ABOUT US'})
})
app.get('/gallery',(req,res)=>{
    res.render('gallery',{'name':'OUR GALLERY'})
})
app.get('/activity',(req,res)=>{
    res.render('activity',{'name':'ACTIVITIES'})
})
app.get('/bootcamp',(req,res)=>{
    res.render('bootcamp',{'name':'BOOTCAMPS'})
})
app.get('/infrastructure',(req,res)=>{
    res.render('infrastructure',{'name':'INFRASTRUCTURE'})
})
app.get('/placement',(req,res)=>{
    res.render('placement',{'name':'PLACED STUDENTS'})
})
app.get('/director',(req,res)=>{
    res.render('director',{'name':'Board of Directors'})
})
app.get('/committee',(req,res)=>{
    res.render('committee',{'name':'Group Management Committee'})
})
app.get('/training',(req,res)=>{
    res.render('training',{'name':'Training and Development'})
})
app.get('/security',(req,res)=>{
    res.render('security',{'name':'Security Solutions'})
})
app.get('/facility',(req,res)=>{
    res.render('facility',{'name':'Facility Management Solutions'})
})
app.get('/cash',(req,res)=>{
    res.render('cash',{'name':'Cash Logistics Solutions'})
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