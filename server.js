const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const app = express()
const path = require('path')
require("dotenv").config()

const PORT = process.env.PORT || 8080

// const db = require("./models")

app.use(express.urlencoded({extended:true }))
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// require("./routes/user-api-routes")(app)



// db.sequelize.sync({ force: false }).then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT)
//   })
// })

if (process.env.NODE_ENV === 'production'){
  app.use(express.static( 'client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT)
})