const express = require('express');
const router = express.Router()
const Model = require('../models');

  router.get('/',(req,res)=>{
    Model.User.findAll().then(UserData=>{
      // res.send(UserData)
      res.render('userTabel',{rows:UserData})
    })
  })

  router.get('/list/:id',(req,res)=>{
    let id = req.params.id
    Model.User.findById(id,{include:[Model.Subject]}).then(rows=>{
      res.render('userPage',{rows:rows})
    })
  })


  router.get('/:id/addsubject',(req,res)=>{
    let id = req.params.id
    Model.User.findById(id).then(dataUserId=>{
      // res.send(dataUserId)
      Model.Subject.findAll().then(sub=>{
        // res.send(sub)
        res.render('addSubToUser',{rows:dataUserId,sub:sub})
      })
    })
  })


  router.post('/:id/addsubject',(req,res)=>{
    console.log('----------------',req.body);
    let obj ={
      UserId :req.params.id,
      SubjectId:req.body.SubjectId
    }
    Model.UserSubject.create(obj).then(()=>{
      res.redirect('/users')
    })
  })

  router.get('/:id/test',(req,res)=>{
    let id = req.params.id
    Model.Subject.findById(id).then(rowSubs=>{
      Model.Question.findAll({where:{SubjectId:id}}).then(rowQuest=>{
        res.render('testQuestion',{rowSubs:rowSubs,rowQuest:rowQuest})
      })
    })
  })

  router.get('/subjectdelete/:id',(req,res)=>{
    let id = req.params.id
    Model.UserSubject.destroy({where:{id:id}}).then(()=>{
      res.redirect('/users')
    })
  })





module.exports = router;
