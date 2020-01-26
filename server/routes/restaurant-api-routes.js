const db = require ("../models")

module.exports = function(app) {

  app.get("/api/restaurant", function(req,res){
    // Find all Users and return them to the user with res.json
    db.Restaurant.findAll({})
    .then(function(userDB){
      res.json(userDB)
    })
  })
  
  // app.post("/api/restaurant-create", function(req,res){
  // // Create a User with the data available in req.body
  //   console.log(req.body)
  //    db.User.create(req.body)
  //    .then(function(userDB) {
  //      res.json(userDB)
  //    })
  // })
  
  }