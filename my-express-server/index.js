//jshint esversion:6

import express from "express";

const port=3000;
const app = express();

app.get('/', function(req, res) {
    res.send('<h1>Hello!</h1>');
    
    
});
app.listen(port, function(){
    console.log('Server started on port 3000');
});