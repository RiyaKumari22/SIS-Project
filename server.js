const express=require('express')
const path=require('path')
const app=express();
const port= 8080
// const staticPath=path.join(__dirname,'../public')

app.set("view engine","ejs")
app.use(express.static(__dirname + '/public'));
// app.st(express.static(staticPath))
app.get('/',(req,res)=>{
    res.render('index',{"title":"HOME"})
   


})
app.get('/contact',(req,res)=>{
    res.render('contact',{"name":"CONTACT US","title":"Contact Us"})
})
app.get('/about',(req,res)=>{
    res.render('about',{'name':'ABOUT US',"title":"About Us"})
})
app.get('/gallery',(req,res)=>{
    res.render('gallery',{'name':'OUR GALLERY',"title":"Our Gallery"})
})
app.get('/activity',(req,res)=>{
    res.render('activity',{'name':'ACTIVITIES',"title":"Activities"})
})
app.get('/bootcamp',(req,res)=>{
    res.render('bootcamp',{'name':'BOOTCAMPS',"title":"Bootcamps"})
})
app.get('/infrastructure',(req,res)=>{
    res.render('infrastructure',{'name':'INFRASTRUCTURE',"title":"Infrastructure"})
})
app.get('/placement',(req,res)=>{
    res.render('placement',{'name':'PLACED STUDENTS',"title":"Placed Students"})
})
app.get('/director',(req,res)=>{
    res.render('director',{'title':'Board of Directors'})
})
app.get('/committee',(req,res)=>{
    res.render('committee',{'title':'Group Management Committee'})
})
app.get('/training',(req,res)=>{
    res.render('training',{'title':'Training and Development'})
})
app.get('/security',(req,res)=>{
    res.render('security',{'title':'Security Solutions India'})
})
app.get('/facility',(req,res)=>{
    res.render('facility',{'title':'Facility Management Solutions'})
})
app.get('/cash',(req,res)=>{
    res.render('cash',{'title':'Cash Logistics Solutions'})
})
app.get('/international',(req,res)=>{
    res.render('international',{'title':'Security Solutions International'})
})
app.get('/founder',(req,res)=>{
    res.render('founder',{'title':'Founder & Group Chairman'})
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