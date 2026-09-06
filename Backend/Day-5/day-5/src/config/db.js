const { mongoose } = require("mongoose");

const connectDb = async () =>{
try {
    await mongoose.connect("");

    console.log('mongodb connect');
    

} catch (error) {
    console.log("error in db", error);
    
}
}

module.exports = connectDb;