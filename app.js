'use strict'

const express    = require('express');
const router     = express.Router();
// const ejsLint    = require('ejs-lint');
const app        = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended : false} ));
app.use(express.static('views'))
// app.use(expressValidator());
app.use(session( {secret: 'hacktiv8'} ));

const route_login = require('./routers/login');

// app.get('/login', (req,res) => {
//     res.render('login')
// })

app.use('/', route_login);

app.listen(3001, () => {
    console.log("listen to port 3001. Activate E-Learning App")
})