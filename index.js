// ---------- Require packages ----------//
const express = require('express')
const app = express()
const port = 4000


// ---------- Require controllers ---------- //
const homeCtrl = require("./controllers/homeController")


// ---------- Require Routes ----------//
const homeRouter = require("./routes/home")













// ---------- Routes - github testing ---------- //
app.use('/home', homeRouter);


app.get("/", (req, res) => {
    console.log(req)
    return res.json({Status: "running"})
})

app.get("/home-list", homeCtrl.list)








// ---------- Listner ---------- // 
app.listen(port, () => {console.log(`SERVER started at port ${port}`)})