
const Country = require('../module/country.model.js')

const getCountry = async (req, res) => {
    try {
        const countries = await Country.find({})
        res.status(200).json(countries)
    } catch (error) {
        res.status(500).json({ message: message.error })
    }
}

const getCountryById = async (req, res) => {
    try {
        const { id } = req.params;
        const country = await Country.findById(id);
        res.status(200).json(country)
    } catch (error) {
        res.status(500).json({ message: message.error })
    }
}

const createCountry = async (req, res) => {
    try {
        const country = await Country.create(req.body)
        res.status(200).json(country)
    } catch (error) {
        res.status(500).json({ message: message.error })
    }
}

const updateCountry = async (req, res) => {
    try {
        const { id } = req.params;
        const country = await Country.findByIdAndUpdate(id, req.body);

        if (!country) {
            return res.status(404).json({ message: "Country not found" })
        }

        const updatedCountry = await Country.findById(id)
        res.status(200).json(updatedCountry)

    } catch (error) {
        res.status(500).json({ message: message.error })
    }
}

const deleteCountry = async (req, res) => {
    try {
        const { id } = req.params;

        const country = await Country.findByIdAndDelete(id);

        if (!country) {
            return res.status(404).json({ message: "Product not found" })
        }

        res.status(200).json({ message: "Product delete succesfully" })
    } catch (error) {
        res.status(500).json({ message: message.error })
    }
}

module.exports = {
    getCountry,
    getCountryById,
    createCountry,
    updateCountry,
    deleteCountry
}