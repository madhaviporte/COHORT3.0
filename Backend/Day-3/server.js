const express = require("express");

const app = express();

let port = 3000;

let users = [{
    name: "pol",
    age:89,
    }
]

app.get('/', (req,res) => {
res.send(users);
})

app.listen(port, () =>{
    console.log(`Server is ruunning on port ${port}`);
    
})