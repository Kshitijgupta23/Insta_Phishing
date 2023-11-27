const express = require('express');
const app = express();

app.use(express.json());
const PORT = 5005

require("./db/conn");
const User = require("./model/userSchema");

app.post("/", async (req,res) =>{

    const {username, password} = req.body;
    if(!username || !password){
        return res.status(422).json({error:"Please fill all the details"});
    }

    const user = new User({username,password});
    await user.save();
    res.status(201).json({message:"User logged in successfully"});
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})