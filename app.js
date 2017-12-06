const express = require('express');
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('views','./views')
app.set('view engine','ejs')

const User = require('./routers/user');

app.use('/users',User)

app.listen(3000,()=>{
  console.log('masuk 3000');
})
