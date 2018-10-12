const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());


 const server = app.listen(8081,  () => {
    var host = server.address().address
    var port = server.address().port 
    console.log("Example app listening at http://%s:%s", host, port)
 })



