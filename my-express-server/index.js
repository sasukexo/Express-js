//jshint esversion:6

import express from "express";

const port=3000;
const app = express();

app.get('/', function(req, res) {
    res.send('<h1>Hello!</h1>');
    
    
});
app.get('/about', function(req, res) {
    res.send('<h1>Hello! I am Aswin </h1>');
    
    
});
app.get('/contact', function(req, res) {
    res.send('<h1>Contact me through mail @ aswinash1002@gmail.com</h1>');
    
    
});


app.listen(port, function(){
    console.log('Server started on port 3000');
});