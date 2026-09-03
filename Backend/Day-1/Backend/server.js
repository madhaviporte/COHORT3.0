const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json())

app.get('/',(req,res) =>{
    res.json({message:'Server is runing'})
})

app.post('/login',(req,res)=>{
    const{email,password} = req.body;
    if(email==='test@gmail.com' && password==='test@123'){
        return res.json({message:'user login succssesfully'})
    }

    res.status(401).json({message: 'Invalid email or password'})
})

app.listen(3000, () =>{
    console.log('server is runing on port 3000');
})