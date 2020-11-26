const express = require("express")
const app = express()

const PORT = 80;
const HOST = '0.0.0.0';

app.get("/", (req, res) => {
    res.send("Hello World so now")
})

app.listen(PORT, HOST)