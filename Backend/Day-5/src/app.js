//connection ko chhodhekr jitna kuchh bhi hota hai vo ham app.js me rkhte haii

const express = require('express');
const connectDb = require('./config/db');
const NotesModel = require('./models/note.model');
const app = express();



connectDb();

app.use(express.json()); //app se hame body expecpt krna hai ish or app ke pas ye power nahi hoti hai ish liye middleware use hota hai 



app.get('/', (req,res)=>{
    res.send('done')
})

app.post('/create',async (req,res)=>{
let {title,description} = req.body

const newNote =await NotesModel.create({
    title,
    description,
})

res.send({
    success:true,
    message:"Note created successfully",
    data:newNote,
})

})

module.exports = app;