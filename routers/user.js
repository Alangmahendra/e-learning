'use strict'
const express = require('express');
const router  = express.Router();
const Model   = require('../models');



router.get('/', (req,res) => {
    res.render('user')
});

router.get('/math', (req,res) => {
    Model.Subject.findAll()
        .then( matematika => {
            res.render('math', {
                keyMatematika : matematika
            })
        })
});




module.exports = router;
