const route = require("express").Router()
const bodyParser = require("body-parser")
 
const urlEncoded = bodyParser.urlencoded({
    extended: true
})
const mainControllers = require("../controllers/mainControllers")

route.get("/", mainControllers.index)
route.post("/", urlEncoded, mainControllers.indexPost)

module.exports = route