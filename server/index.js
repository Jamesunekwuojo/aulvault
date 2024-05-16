const express = require('express');

const mongoose = require('mongoose');

const app = express();

const PORT = 3000;
// connect to my mongoDb

const url = 'mongodb://127.0.0.1:27017/aulvaultDB'

// connect to mongoDB using mongoose ODM

mongoose.connect(url,)
.then(() =>{
    console.log("Connection Successfully Established with mongoDB");

    //Defining ab asic mongoose schema

    const Schema = mongoose.Schema;
    const userSchema = new Schema({
        name: String,
        coursecode: String,

    });

    // converting schema to model

    const UserModel = mongoose.model('User', userSchema);


    app.get('/', async(req, res)=> {
        // to fetch data from MongoDB using mongoose
        const documents = await UserModel.find({}); 
        res.json("Hello world")
    
    });


})

.catch((error) =>{
    console.log('Error connecting to MongoDB:', error);
})



app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)

});