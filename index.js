const express = require("express")
const app = express()

app.get('/', (req, res) => {
    res.send("Hello ACCKWU! 으헤헤헤헤")
})

app.listen(5001)