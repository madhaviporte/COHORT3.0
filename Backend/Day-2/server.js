// let http = require('http');
// let server = http.createServer((req,res) =>{
//     if(req.url === '/user'){
//         res.end('me users me hun');
//     }
//     if(req.url === '/product'){
//         res.end('me product me hun');
//     }
//     if(req.url === '/carts'){
//         res.end('me  me hun');
//     }
// })
// server.listen(3000, () => {
//     console.log("server is running on port 3000");
// })

let express = require('express');

const app = express();

app.get('/' ,(req,res) =>{
    res.send('ohk got it')
})
let port = 3000
app.listen(3000, ()=>{
    console.log(`server is running on ${port}`);    
})