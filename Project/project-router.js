const express = require('express');
const ProjectDB = require('../data/helpers/projectModel');

const router = express.Router();

router.get('/:id', (req, res)=>{
    const {id}= req.params;
    ProjectDB.get(id)
    .then(projects=>{
        res.status(200).json(projects);
    })
    .catch(error=>{
        res.status(500).json({error: "The projects couldn't be retrieved"})
    })
    
})
router.post('/', (req,res)=>{
    const body= req.body;
    ProjectDB.insert(body)
    .then(project=>{
        res.status(201).json(project)
    })
    .catch()
    

})

module.exports= router;