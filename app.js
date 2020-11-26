const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Hello World so now")
})

app.listen(80)