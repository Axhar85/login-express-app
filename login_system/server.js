const express = require("express");
const path = require('path');
const app = express();

const port = process.env.PORT||3000;

// inestalize engine
app.set('view engine', 'ejs');

// load static assets (for CSS)
app.use('/static',express.static((path.join(__dirname,'public'))))
// pic
app.use('/assets',express.static(path.join(__dirname,'public/assets')))

//home route
app.get('/', (req, res) => {
    res.render('base', {title:"Login System"});
})

//starting server
app.listen(port, () =>{
    console.log("Listening to the server on http://localhost:3000");
})