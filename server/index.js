const express = require('express');

const mongoose = require('mongoose');

const app = express();

const PORT = 3000;


app.get('/', (req, res)=> {
    res.send("Hello world")

});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)

});