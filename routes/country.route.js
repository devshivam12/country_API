const express = require("express")
const router = express.Router()

const {
    getCountry,
    getCountryById,
    createCountry,
    updateCountry,
    deleteCountry
} = require('../countroller/country.countroller.js');

const { create } = require("domain");

router.get('/', getCountry)
router.get('/:id', getCountryById)
router.post('/', createCountry)
router.put('/:id', updateCountry)
router.delete('/:id', deleteCountry)

module.exports = router