const fakeDB = [
    {
        title: "Samsung S21",
        description: "Samsung's latest smart phone",
        price: 1000,
        imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbzsj3VzeaKURJvJv0n63pxKbUiSXXJv_E3i3bMWUODps2LkGAzRoj5-NXTSR-pgXORNrqXPg&usqp=CAc"
    },
    {
        title: "Samsung A52 G",
        description: "Feast your eyes on vibrant details with the FHD+ Super AMOLED display, reaching 800 nits¹ for clarity even in bright daylight. Eye Comfort Shield² lowers blue light, and Super Smooth keeps the view smooth, whether you're gaming or scrolling. All on the expansive 6.5-inch Infinity-O Display.",
        price: 450,
        imgPath: "https://images.samsung.com/is/image/samsung/p6pim/ca/galaxy-a52/feature/ca-feature-galaxy-a52-5g-a526-403831489?$FB_TYPE_A_JPG$"
    },
    {
        title: "Samsung A71",
        description: `The Galaxy A71 6.7" Infinity-O Display with Super AMOLED Plus colour technology delivers real-to-life colour in everything you watch and do—from gaming and posting, to streaming and multi-tasking. Start enjoying more of what you love, without the screen getting in your way.`,
        price: 524,
        imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbzsj3VzeaKURJvJv0n63pxKbUiSXXJv_E3i3bMWUODps2LkGAzRoj5-NXTSR-pgXORNrqXPg&usqp=CAc"
    },
    {
        title: "Samsung A21",
        description: `The Samsung Galaxy A21 provides you with the smartphone essentials you need, in a new affordable Galaxy device. Take beautifully crisp photos and videos with our powerful quad lens camera. Enjoy cinematic clarity on our 6.5" edge-to-edge display.1 Keep going with a long-lasting battery2 that keeps going with you throughout the day.`,
        price: 300,
        imgPath: "https://images.samsung.com/is/image/samsung/ca-feature-galaxy-a21-278967928?$FB_TYPE_A_PNG$"
    },
    {
        title: "Samsung A11",
        description: `The Samsung Galaxy A11 provides you with the smartphone essentials you need, in a new affordable Galaxy device. Take crisp, clear photos and videos with our powerful triple lens camera. Enjoy cinematic clarity on our 6.4" edge-to-edge display.1 Keep going with a long-lasting battery2 that keeps going with you throughout the day.`,
        price: 150,
        imgPath: "https://images.samsung.com/is/image/samsung/ca-feature-galaxy-a11-278885159?$FB_TYPE_A_PNG$"
    }


]

//import Express and asign it to a variable
const express = require("express");


//create an Express Application  OBject (THIS IS THE BOSS! CEO!!! )
const app = express();


app.get("/products", (req, res) => {

    res.json({
        message: "A list of all products",
        data : fakeDB,
        total : fakeDB.length,
    })

})

app.get("/products/1", (req, res) => {

})

app.post("/products", (req, res) => {

})

app.put("/products/1", (req, res) => {

})

app.delete("/products/1", (req, res) => {

})


//CREATE A WEBSERVER THAT LISTENS ON A SPECIFIC PORT

const PORT = 3000;

app.listen(PORT, () => {

    console.log(`The server is up and running on PORT ${PORT}`);
});



const express = require("express");


//create an Express Application Object 

const app = express();

//REQUIRED APP ROUTES   (request,response)
app.get("/products", (req, res) => {



})

app.post("/products/1", (req, res) => {

})

app.put("/products/1", (req, res) => {

})

app.delete("/products/1", (req, res) => {

})

//create webserver that will listen to a specific port

const PORT = 3000;

app.listen(PORT, () => {

    console.log(`The server is up and running on PORT ${PORT} properly`)

});


