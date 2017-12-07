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
    let subject_id = req.params.id
    let obj ={
      UserId :req.params.id,
      SubjectId:req.body.SubjectId
    }
    Model.UserSubject.findOne({
      where: {SubjectId: subject_id}
    })
    .then(rowsId=>{
      Model.UserSubject.create(obj).then(()=>{
        res.redirect(`/users/list/${rowsId.UserId}`)
      })
    })
  })

  router.get('/:id/test',(req,res)=>{
    let id = req.params.id
    Model.Subject.findById(id).then(rowSubs=>{
      Model.Question.findAll({where:{SubjectId:id},order:['id']}).then(rowQuest=>{
        res.render('testQuestion',{rowSubs:rowSubs,rowQuest:rowQuest})
      })
    })
  })

  router.post('/:id/test',(req,res)=>{
    
  })

  router.get('/subjectdelete/:id',(req,res)=>{
    let subject_id = req.params.id
    Model.UserSubject.findOne({
      where: {SubjectId: subject_id}
    })
    .then(rowsId=>{
      Model.UserSubject.destroy({where:{SubjectId:subject_id}}).then(()=>{
        res.redirect(`/users/list/${rowsId.UserId}`)
      })
    })
  })





module.exports = router;
