const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const project_router = require('./Project/project-router'); 

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use('/api/projects', project_router);

app.get('/', (req, res)=>{
    res.json(`Welcome to the api`);
})
module.exports = app;