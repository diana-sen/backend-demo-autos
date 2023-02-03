

const router = require("express").Router();

const { getAutos,postAutos,updateAutos,deleteAutos } = require('../controllers/autoController.js')

router.get('/', getAutos) // GET method route
router.post('/', postAutos) // POST method route
router.put('/:id', updateAutos) // PUT method route
router.delete('/:id', deleteAutos) // DELETE method route

module.exports = router