//jshint esversion:6

const express =require('express');
const port=3000;
const app=express();

app.get('/', function(req, res) {
    response.send('<h1>Hello, world!</h1>');
    
    
});
app.listen(port, function(){
    console.log('Server started on port 3000');
});