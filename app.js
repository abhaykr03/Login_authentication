const express = require('express');
const app = express();  //to use all kinds of utility methods from the express module

//use()  sets up a middleware so that the incoming req has to pass through it. This is the backend part
app.use((req, res, next) =>{
    res.status(200).json({
        message : "Passing a message which is in the form of an object inside the json. which is stringified automatically"
    });   //sending a json res
});

module.exports = app;