const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const app = express()

const PORT = process.env.PORT || 8080

const db = require("./models")

app.use(express.urlencoded({extended:true }))
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

require("./routes/user-api-routes")(app)

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT)
  })
})