const { appendFile } = require("fs");

const router = require("express").Router();


// GET method route
router.get('/',(req, res) => {
    res.status(200).json({message: 'Autos'})
})

// POST method route
router.post('/',(req, res) => {
    res.status(201).json({message: 'Created Auto'})
})

// PUT method route
router.put('/:id',(req, res) => {
    res.status(200).json({message:`Auto ${req.params.id} updated`})
})

// DELETE method route
router.delete('/:id',(req, res) => {
    res.status(200).json({message:`Auto ${req.params.id} deleted`})
})


module.exports = router