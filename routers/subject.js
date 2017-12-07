'use strict'
const express = require('express');
const router  = express.Router();
const Model   = require('../models');



router.get('/', (req,res) => {
    res.render('subject')
});

router.get('/add', (req,res) => {
    Model.subject.findAll()
        .then( subject => {
            
        })
})

module.exports = router;
