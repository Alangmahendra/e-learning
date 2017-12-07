const Model = require('../models');
const express = require('express');
const router = express.Router()

router.get('/',(req,res)=>{
  Model.Subject.findAll().then(rows=>{
    res.render('subject',{rows:rows})
  })
})

router.get('/add',(req,res)=>{
  res.render('addSubjects')
})

router.post('/add',(req,res)=>{
  let obj = {
    subject_name:req.body.subject_name
  }
  Model.Subject.create(obj).then(()=>{
    res.redirect('/subjects')
  })
})

router.get('/delete/:id',(req,res)=>{
  let subjectId = req.params.id
  Model.Subject.destroy({where:{id:subjectId}}).then(()=>{
    res.redirect('/subjects')
  })
})

router.get('/edit/:id',(req,res)=>{
  let subjectId = req.params.id
  Model.Subject.findById(subjectId).then(rows=>{
    res.render('editsubject',{rows:rows})
  })
})

router.post('/edit/:id',(req,res)=>{
  let subjectId = req.params.id
  let obj = {
    id:req.params.id,
    subject_name:req.body.subject_name
  }
  Model.Subject.update(obj,{where:{id:subjectId}}).then(()=>{
    res.redirect('/subjects')
  })
})

module.exports = router;
