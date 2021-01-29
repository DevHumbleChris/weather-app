 const route = require("express").Router()
 const mainControllers = require("../controllers/mainControllers")

 route.get("/", mainControllers.index)

 module.exports = route