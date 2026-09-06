const mongoose = require('mongoose');

const connectDb = async () =>{
try {
   await mongoose.connect("");
console.log("mongoDB connected");
} catch (error) {
    console.log('error while connecting db', error);
    
}
}

module.exports = connectDb;