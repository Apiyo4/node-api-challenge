const express = require('express');
const ActionDB= require('../data/helpers/actionModel');

const router = express.Router();

router.get('/:id', (req, res)=>{
    const {id}= req.params;
    ActionDB.get(id)
    .then(action=>{
        res.status(200).json(action);
    })
    .catch(error=>{
        res.status(500).json({error: "The action couldn't be retrieved"})
    })
    
})
router.post('/', validateProjectId, (req,res)=>{
    const body= req.body;
    ActionDB.insert(body)
    .then(action=>{
        res.status(201).json(action)
    })
    .catch(error=>{
        res.status(500).json({error: "There was an error while saving the action to the database" })
    })
})
router.put('/:id', (req,res)=>{
    const body = req.body;
    const {id} = req.params;
    ActionDB.update(id, body)
    .then(action=>{
        res.status(200).json(action);
    })
    .catch(error=>{
        res.status(500).json({ error: "The action information could not be modified." }) 
    })
})
router.delete('/:id', (req,res)=>{
    const {id} = req.params;
    ActionDB.remove(id)
    .then(action=>{
        res.status(200).json(`${action} action was deleted`);
    })
    .catch(error=>{
        res.status(400).json({ error: "The action could not be removed" })
    })
})
function validateProjectId(req,res, next){
   console.log(req.body)
    const id = req.body.project_id;
    if(id){
        console.log(`This is the post id ${id}`)
        next();
    }else{
        res.status(400).json({ message: "invalid post id" })
    }
}
module.exports= router;
