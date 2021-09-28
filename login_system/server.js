const express = require("express");
const path = require('path');
const bodyparser = require('body-parser')
const app = express();
const session =  require('express-session');
const { v4: uuidv4} = require("uuid");
const router = require('./router')


const port = process.env.PORT||3000;

// for middleware
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

// inestalize engine
app.set('view engine', 'ejs');

// load static assets (for CSS)
app.use('/static',express.static((path.join(__dirname,'public'))))
// pic
app.use('/assets',express.static(path.join(__dirname,'public/assets')))

//express-session
app.use(session({
    secret:uuidv4(),
    resave: false,
    saveUninitialized: true
}));

//router
app.use('/route', router);

//home route
app.get('/', (req, res) => {
    res.render('base', {title:"Login System"});
})

//starting server
app.listen(port, () =>{
    console.log("Listening to the server on http://localhost:3000");
})