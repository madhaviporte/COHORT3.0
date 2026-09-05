const express = require("express");

const app = express();

//middleware for accepting json data
app.use(express.json())
let port = 3000;

let users = []

//Create
app.post('/create',(req,res)=>{
    let body = req.body;

    users.push(body);

    res.send("user saved successfully");
})

//get-Read
app.get('/', (req,res) => {
res.send(users);
})

app.delete('/delete/:id',(req,res) =>{
 let {id} = req.params;

let userData = users.filter((val) => val.id !==id);
users = userData;
res.send("User deleted successfully")
})

app.listen(port, () =>{
    console.log(`Server is ruunning on port ${port}`);
})