const express = require('express');
//create an instance of the router piece of the express (Router is the property of the express obj)
const router = express.Router();
const helloList = ['hello'];

//create get route for /hello page
router.get('/', (req, res) => {
    //send a response
    res.send('hello router');
})
//create post route for /hello page
router.post('/', (req, res) => {
    //push new item to the array each time the route is hit
    helloList.push(req.body.greeting);
    //send status back for the route
    res.sendStatus(201);
});
//create a get route
router.get('/all', (req, res) => {
    //send the helloList 
    res.send(helloList);
});
module.exports = router;