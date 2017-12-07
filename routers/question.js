const Model = require('../models');
const express = require('express');
const router = express.Router()

router.get('/',(req,res)=>{
  Model.Question.findAll({order:[['SubjectId']]}).then(rows=>{
    res.render('question',{rows:rows})
  })
})

router.get('/add',(req,res)=>{
  res.render('addquestion')
})

router.post('/add',(req,res)=>{
  let obj = {
    question:req.body.question,
    answer:req.body.answer,
    SubjectId:req.body.SubjectId
  }
  Model.Question.create(obj).then(()=>{
    res.redirect('/questions')
  })
})

router.get('/delete/:id',(req,res)=>{
  let questionId = req.params.id
  Model.Question.destroy({where:{id:questionId}}).then(()=>{
    res.redirect('/questions')
  })
})

router.get('/edit/:id',(req,res)=>{
  let questionId = req.params.id
  Model.Question.findById(questionId).then(rows=>{
    res.render('editquestion',{rows:rows})
  })
})

router.post('/edit/:id',(req,res)=>{
  let questionId = req.params.id
  let obj = {
    id:req.params.id,
    question:req.body.question,
    answer:req.body.answer,
    SubjectId:req.body.SubjectId
  }
  Model.Question.update(obj,{where:{id:questionId}}).then(()=>{
    res.redirect('/Questions')
  })
})

module.exports = router;
