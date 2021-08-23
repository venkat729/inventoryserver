const express = require('express');
const app = express();
const port = 3333;
import mysql from './database';
import apiResponse from './apiResponse';

app.get('/',(req,res) => {
    res.send('Hello......');
})

app.post('/add_material',(req,res) => {
    const body = req.body;
    console.log(body);
    // res.send();
})

app.get('/materials',(req,res) => {
    mysql.query("SELECT * FROM inventory", function(err, result, fields) {
        if(err) {
            res.send(apiResponse("Error occurred while fetching materials",false));
        }
        res.send(apiResponse(result,true));
    })
})

app.listen(port,() => {
    console.log(`Server running on port ${port}.........`);
})