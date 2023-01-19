const express = require('express');
const router = express.Router();
const FirstApi = require('../models/api');


// All
router.get('/', async (req, res) => {
    try {
        const kartikApi = await FirstApi.find()
        res.json(kartikApi)
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
});

// Create
router.post('/', async (req, res) => {
    const kartikApi = new FirstApi({
        apiName: req.body.apiName,
        apiData: req.body.apiData
      })
      try {
        const newApi = await kartikApi.save()
        res.status(201).json(newApi)
      } catch (err) {
        res.status(400).json({ message: err.message })
      }
});
// Read
router.get('/:id',getApi, (req, res) => {
    res.send(res.apis.apiName);
});
// Update
router.patch('/:id', (req, res) => {
    res.send("Update")
});
// Delete
router.delete('/:id', (req, res) => {
    res.send("Delete")
});

async function getApi(req, res, next){
    let apis;
    try{
        apis = await FirstApi.findById(req.params.id);
        if(apis == null){
            return res.status(404).json({message: '404 Not Found the api...'})
        }
    }
    catch(err) {
        return res.status(500).json({message: err.message})
    }

    res.apis = apis;
    next();
}

module.exports = router;