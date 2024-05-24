const express = require("express")
const db = require("./models")

const app = express()

const testRouter  = require("./routes/Test")
app.use("/test", testRouter)

db.sequelize.sync().then(() => {
    app.listen(8001,()=> {
        console.log(`Server is running at port 8001 `)
    });
})

