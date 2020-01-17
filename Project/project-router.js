const express = require('express');
const ProjectDB = require('../data/helpers/projectModel');

const router = express.Router();

router.get('/:id', (req, res)=>{
    const {id}= req.params;
    ProjectDB.get(id)
    .then(project=>{
        res.status(200).json(project);
    })
    .catch(error=>{
        res.status(500).json({error: "The project couldn't be retrieved"})
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
router.put('/:id', (req,res)=>{
    const body = req.body;
    const {id} = req.params;
    ProjectDB.update(id, body)
    .then(project=>{
        res.status(200).json(project);
    })
    .catch(error=>{
        res.status(500).json({ error: "The project information could not be modified." }) 
    })
})
router.delete('/:id', (req,res)=>{
    const {id} = req.params;
    ProjectDB.remove(id)
    .then(project=>{
        res.status(200).json(`${project} project was deleted`);
    })
    .catch(error=>{
        res.status(400).json({ error: "The project could not be removed" })
    })
})
router.get('/:id/actions', (req,res)=>{
        const {id} = req.params;
    ProjectDB.getProjectActions(id)
    .then(actions=>{
        res.status(200).json(actions)
    })
    .catch(error=>{
        res.status(500).json({ error: "The actions information could not be retrieved." })
    })
})
module.exports= router;