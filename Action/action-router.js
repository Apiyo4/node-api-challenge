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
router.post('/', (req,res)=>{
    const body= req.body;
    ActionDB.insert(body)
    .then(action=>{
        res.status(201).json(action)
    })
    .catch(error=>{
        res.status(500).json({error: "There was an error while saving the action to the database" })
    })
})

module.exports= router;
