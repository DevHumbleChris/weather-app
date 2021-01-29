module.exports = { 
    index: (req, res) => {
        res.render("index", {
            message: "Welcome To Weather App."
        })
    }
}