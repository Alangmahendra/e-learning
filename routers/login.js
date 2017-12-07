'use strict'

const express = require('express');
const router  = express.Router();
const app     = express(); 
const authenHelper = require('../helpers/authenHelper')
const Model = require('../models');
const User  = Model.User; 
const compare_password = require('../helpers/comparePassword')


router.get('/login', authenHelper, (req,res) => {
    res.redirect('/user'); 
})

router.get('/user', (req,res) => {
    res.render('user'); 
})




//check validity
router.post('/submit', (req,res) => {
    // console.log(req.body.email);
    // console.log(req.body.password);

    Model.User.findOne({ 
        where: { email : req.body.email }
    }) 
    .then( user => { 
        // console.log("ini dalam model login");
        // console.log("=======>", req.body.password);
        // console.log("=======>", user.password)
        // console.log(user);

        compare_password(req.body.password, user.password, (result => {
            if(result) {
                console.log(result);
                console.log("OK PASSWORD BENAR");
                req.session.isLogin = false;
                res.redirect('/user')
            }   else {
                console.log("PASS SALAH")
                res.redirect('/login', {err : err} )
            }
        }))
    })
    .catch(err => {
        console.log(err)
    })
   
    // res.redirect('/login');

})



router.get('/signup', (req,res) => {
    res.render('signup'); 
})


//New User
router.post('/register', (req,res) => {
    // console.log(req.body.email);
    // console.log(req.body.password);

    Model.User.findOne({ 
        where: {
             username : req.body.username,
             email : req.body.email }
        
    }) 
    .then( user => { 
        if(user.username === req.body.username) {
            res.send("This username has registered!")
        }   else if ( user.email === req.body.email ) {
            res.send('This email has registerd!') 
        }   else {
            res.redirect('/login' );
        }

    })
})

module.exports = router;