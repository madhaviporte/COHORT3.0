const  multer = require('multer');

const storage = multer.diskStorage({
    destination:(req, file,cb) =>{
        cb(null, 'upload/')
    },
    filename: ()=>{
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({storage:true})