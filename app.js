require("dotenv/config");
require("colors")
const path = require("path")
const express = require("express")
const mainRoutes = require("./routes/mainRoutes")

const app = express()
const PORT = process.env.PORT ?? 3000

app.use("/", mainRoutes)
app.use(express.static("public"))
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")


app.listen(PORT, () => {
    console.log(`Weather App Running At http://127.0.0.1:${PORT}`.bold.blue)
})