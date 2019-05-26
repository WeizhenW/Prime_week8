const express = require('express');
const app = express();
//bring in body-parser => to get the req body content
const bodyParser = require('body-parser');

const port = 5000;
const quotesData = require('./modules/data');

//the path always starts from the current folder
//take the url encoded body of the request
//create req.body
//must be before the POST route
app.use(bodyParser.urlencoded({extended: true}));

//create a GET route
app.get('/quotes', (req, res) => {
    res.send(quotesData);
});

//create .use to retrieve a static page
app.use(express.static('server/public')); 
//always start from the root of the project

//create a POST route
app.post('/new', (req, res) => {
    quotesData.push(req.body);// thanks to the body-parser, the req.body is retrieved
    res.sendStatus(201); //201 status showing successfully create something
})

//listen to the port
app.listen(port, () => {
    console.log('server started');
});