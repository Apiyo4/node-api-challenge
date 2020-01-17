const express = require('express');
const projectDB = require('../data/helpers/projectModel');

const router = express.Router();

router.get('/', (req, res)=>{
    projectDB.get()
    .then(projects=>{
        console.log(projects);
        res.status(200).json(projects);
    })
    .catch(error=>{
        res.status(500).json({error: "The projects couldn't be retrieved"})
    })
    
})

module.exports= router;