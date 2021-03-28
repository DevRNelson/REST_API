const fakeDB = [
    {
        id: 1,
        title: "Samsung S21",
        description: "Samsung's latest smart phone",
        price: 1000,
        imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbzsj3VzeaKURJvJv0n63pxKbUiSXXJv_E3i3bMWUODps2LkGAzRoj5-NXTSR-pgXORNrqXPg&usqp=CAc"
    },
    {
        id: 2,
        title: "Samsung A52 G",
        description: "Feast your eyes on vibrant details with the FHD+ Super AMOLED display, reaching 800 nits¹ for clarity even in bright daylight. Eye Comfort Shield² lowers blue light, and Super Smooth keeps the view smooth, whether you're gaming or scrolling. All on the expansive 6.5-inch Infinity-O Display.",
        price: 450,
        imgPath: "https://images.samsung.com/is/image/samsung/p6pim/ca/galaxy-a52/feature/ca-feature-galaxy-a52-5g-a526-403831489?$FB_TYPE_A_JPG$"
    },
    {
        id: 3,
        title: "Samsung A71",
        description: `The Galaxy A71 6.7" Infinity-O Display with Super AMOLED Plus colour technology delivers real-to-life colour in everything you watch and do—from gaming and posting, to streaming and multi-tasking. Start enjoying more of what you love, without the screen getting in your way.`,
        price: 524,
        imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbzsj3VzeaKURJvJv0n63pxKbUiSXXJv_E3i3bMWUODps2LkGAzRoj5-NXTSR-pgXORNrqXPg&usqp=CAc"
    },
    {
        id: 4,
        title: "Samsung A21",
        description: `The Samsung Galaxy A21 provides you with the smartphone essentials you need, in a new affordable Galaxy device. Take beautifully crisp photos and videos with our powerful quad lens camera. Enjoy cinematic clarity on our 6.5" edge-to-edge display.1 Keep going with a long-lasting battery2 that keeps going with you throughout the day.`,
        price: 300,
        imgPath: "https://images.samsung.com/is/image/samsung/ca-feature-galaxy-a21-278967928?$FB_TYPE_A_PNG$"
    },
    {
        id: 5,
        title: "Samsung A11",
        description: `The Samsung Galaxy A11 provides you with the smartphone essentials you need, in a new affordable Galaxy device. Take crisp, clear photos and videos with our powerful triple lens camera. Enjoy cinematic clarity on our 6.4" edge-to-edge display.1 Keep going with a long-lasting battery2 that keeps going with you throughout the day.`,
        price: 150,
        imgPath: "https://images.samsung.com/is/image/samsung/ca-feature-galaxy-a11-278885159?$FB_TYPE_A_PNG$"
    }


]

const express = require("express");


//create an Express Application Object 

const app = express();

app.use(express.json());

//REQUIRED APP ROUTES   (request,response)


app.get("/products",(req,res)=>{
    
    res.json({
        message: "A list of all products",
        data : fakeDB,
        total: fakeDB.length
        
    });
    
})

//localhost:3000/products/boowho
//id creates a dynamic route meaning 
//you don't need to assign code to
//each page manually.
//multiple paramters and filters can be used is just like ID but for Categories
app.get("/products/:id", (req,res)=>{
     
    
    let foundProduct=null;
  
    const productID = parseInt(req.params.id);

    for(let i=0; i<fakeDB.length; i++)
    {

        if(productID == fakeDB[i].id)
        {
            console.log()
                                   
            foundProduct = fakeDB[i]; ///WHat does this line do?
            
            break;
        }

    }

    if(foundProduct === null)
    {
        res.status(404).json({
            message: `No product was found with the ID ${productID}`
        })
    }

    else
    {
        //success attempt
        res.json({
            message:   `Product with ID ${foundProduct.id}`,
            data : foundProduct
        });
    }

 
})

app.post("/products",(req,res)=>{

    fakeDB.push(req.body);
    res.json({
        message :"The product was successfully added to the Database",
        data:req.body
    })


})

app.put("/products/1",(req,res)=>{
    
})

app.delete("/products/1",(req,res)=>{
    
})


//CREATE A WEBSERVER THAT LISTENS ON A SPECIFIC PORT


//create webserver that will listen to a specific port

const PORT = 3000;

app.listen(PORT, () => {

    console.log(`The server is up and running on PORT ${PORT} properly`)

});

