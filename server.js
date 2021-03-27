const express = require("express");


//create an Express Application Object 

const app = express();

//REQUIRED APP ROUTES   (request,response)
app.get("/products",(req,res)=>{



})

app.post("/products",(req,res)=>{
    
})

app.put("/products",(req,res)=>{

})

app.delete("/products",(req,res)=>{

})

//create webserver that will listen to a specific port

const PORT = 3000;

app.listen(PORT, ()=>{

    console.log(`The server is up and running on PORT ${PORT} properly`)

});


