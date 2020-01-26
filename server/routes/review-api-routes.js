const db = require ("../models")

module.exports = function(app) {

  app.get("/api/review", function(req,res){
    // Find all Users and return them to the user with res.json
    db.Review.findAll({})
    .then(function(userDB){
      res.json(userDB)
    })
  })
  
  app.post("/api/review-create", function(req,res){
  // Create a User with the data available in req.body
    console.log(req.body)
     db.Review.create(req.body)
     .then(function(userDB) {
       res.json(userDB)
     })
  })
  
  }