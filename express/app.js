const express = require("express");
const app = express();

const  port = 1100;
const  url="https://www.hdfcbank.com/";
const request = require('request');

app.get('/', function(req, res) {
    res.removeHeader("x-frame-options");
    request(url, function(error, response, body)
    {
        res.send(response);
    });
});
app.listen(port,()=>
{
    console.log("I Am running Fine")
})