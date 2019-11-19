const db = require ("../models")

module.exports = function(app) {

app.get("/api/user-login", function(req,res){
  // Find all Users and return them to the user with res.json
  db.User.findAll({})
  .then(function(userDB){
    res.json(userDB)
  })
})

app.post("/api/user-login", function(req,res){
// Create a User with the data available in req.body
  console.log(req.body)
   db.User.create(req.body)
   .then(function(userDB) {
     res.json(userDB)
   })
})

}