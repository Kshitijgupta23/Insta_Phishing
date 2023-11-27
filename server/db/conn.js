const mongoose = require('mongoose');
const DB = 'mongodb+srv://kshitijgupta2301:newproject@cluster0.wiqialt.mongodb.net/insta?retryWrites=true&w=majority'

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection successful");
}).catch((err) => console.error("Connection failed",err));