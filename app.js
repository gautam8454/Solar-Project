
// All Modules export here
const express = require('express');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session')
const flash = require('connect-flash');
const bcrypt = require('bcrypt');
const bodyparser = require("body-parser");
const exphbs = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000;
// const port = 3000;
// const port = 80;


// Set up the mongoose templates
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Static (public) Folder here
app.use('/static', express.static('static'))

// Body-parser to use Express
app.use(express.urlencoded())


// All schema in mongoose templates
const quote = require("./static/js/models/quoteschema")
const login = require("./static/js/models/loginschema");

// All routes import here
const route = require('./static/js/routes/route')

// Set connect-flash here
app.use(flash());

// All routes use here
app.use('/', route)

// Hosting the website here
app.listen(port, () => {
    console.log(`website starting Succesfully at http://localhost:${port}`)
})


