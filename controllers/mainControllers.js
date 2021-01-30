const axios = require("axios")
const URL = process.env.URL


module.exports = { 
    index: async (req, res) => {
        let location = ["Nairobi", "Mombasa", "Kisumu", "Kampala", "Dodoma", "Kigali"]
        let randomPickLocation = location[Math.floor(Math.random() * 5)]

        response = await axios.get(`${URL}${randomPickLocation}`)
        responseData = response.data
        res.render("index", {
            results: responseData
        })
    },
    indexPost: async (req, res) => {
        let queryString = req.body.location

        response = await axios.get(`${URL}${queryString}`)
        responseData = response.data

        res.render("index", {
            results: responseData
        })
    }
}