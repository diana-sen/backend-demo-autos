const asyncHandler = require('express-async-handler')
const Auto = require('../models/autoModel')

// GET method route
const getAutos = asyncHandler(async (req, res) => {
    const autos = await Auto.find()
    res.status(200).json(autos)
})

// POST method route
const postAutos = asyncHandler(async (req, res) => {
    if(!req.body.brand){
        res.status(400)
        throw new Error('Please provide brand information')
    }
    if(!req.body.model){
        res.status(400)
        throw new Error('Please provide model information')
    }
    if(!req.body.year){
        res.status(400)
        throw new Error('Please provide year information')
    }
    if(!req.body.color){
        res.status(400)
        throw new Error('Please provide color information')
    }
    
    const autos = await Auto.create({
        brand: req.body.brand,
        model: req.body.model,
        year: req.body.year,
        color: req.body.color
    })
    res.status(201).json(autos)
})

// PUT method route
const updateAutos = asyncHandler (async(req, res) => {
    res.status(200).json({message:`Auto ${req.params.id} updated`})
})

// DELETE method route
const deleteAutos = asyncHandler(async (req, res) => {
    res.status(200).json({message:`Auto ${req.params.id} deleted`})
})

module.exports = {
    getAutos,
    postAutos,
    updateAutos,
    deleteAutos
}