const { mongoose } = require("mongoose");

const connectDb = async () =>{
try {
    await mongoose.connect("mongodb+srv://madhaviporte2004:varma2004@cohort-cluster.sqxhujk.mongodb.net/");

    console.log('mongodb connect');
    

} catch (error) {
    console.log("error in db", error);
    
}
}

module.exports = connectDb;