const express = require("express");


//create an Express Application Object 

const app = express();

//variable ^

//create webserver that will listen to a specific port

const PORT = 3000;

app.listen(PORT, ()=>{

    console.log(`The server is up and running on PORT ${PORT} properly`)

});


