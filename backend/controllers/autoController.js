// GET method route
const getAutos = (req, res) => {
    res.status(200).json({message: 'Autos'})
}

// POST method route
const postAutos = (req, res) => {
    res.status(201).json({message: 'Created Auto'})
}

// PUT method route
const updateAutos = (req, res) => {
    res.status(200).json({message:`Auto ${req.params.id} updated`})
}

// DELETE method route
const deleteAutos = (req, res) => {
    res.status(200).json({message:`Auto ${req.params.id} deleted`})
}

module.exports = {
    getAutos,
    postAutos,
    updateAutos,
    deleteAutos
}