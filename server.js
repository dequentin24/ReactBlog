const express = require('express')
const app = express()
const cors = require("cors")
app.use(
  cors({
    origin:"*"
  })

)
app.get("/data",(req,res)=>{ 
res.json(
  {
    
    
        "blogs":[ 
       {
    
        "title": "My First Blog",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod quis viverra nibh cras pulvinar mattis. Magna eget est lorem ipsum dolor.",
        "author":"tammy",
        "id":10
         
    
       },
       {
            "title": "Opening Party!",
            "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "author":"Jane",
            "id":12
    
       }
    ]
    
    }
  




)
})

app.listen(1000, ()=>{
    console.log("connected")
})

