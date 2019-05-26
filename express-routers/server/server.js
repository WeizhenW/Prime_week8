//require express
const express = require('express');
//create new instance of express
const app = express();
//require body-parser
const bodyParser = require('body-parser');
const helloRouter = require('./routers/hello.router');
//port variable
const port = 5000;

//using bodyParser
//app.use is catch all will be applied to all the code => () is middleware => not going to
//be used => not always trigger 
//bodyParser to build the req.body => otherwise request from client side will not become req.body
app.use(bodyParser.urlencoded({extended: true}));
//get static file in the server/public folder
//if there's a file in server/public with the name that was requested => send it back
//special: / =>index.html
app.use(express.static('server/public'));
//applied for every request, should after bodyParser and before the routes
app.use('/hello', helloRouter);



//listen to port
app.listen(port, () => {
    console.log(`in ${port}`);
})