console.log("hello world")

const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 5500 || process.env.PORT; 
app.use(express.urlencoded({extended:false}));
require('./database/cons')
const course_Data = require('./database/course');
app.use(cors());
app.get('/welcome-admin',async(req,res)=>{
         res.render("welcome-admin")  
         const response = await course_Data.find();
         console.log(response);
         res.json(response); 
});

app.listen( ()=> {
    console.log("Connected to the port "+ PORT +" 👋");
});
  
  