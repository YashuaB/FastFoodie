const db = require ("../models")




module.exports = function(app) {

  export function getApi(zip,term) {
    return app.get(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${zip}`, function(req,res){
      // Find all Users and return them to the user with res.json
      db.Restaurant.findAll({})
      .then(function(userDB){
        res.json(userDB)
      })
    })
  
   }  
 
  
  // app.post("/api/restaurant-create", function(req,res){
  // // Create a User with the data available in req.body
  //   console.log(req.body)
  //    db.User.create(req.body)
  //    .then(function(userDB) {
  //      res.json(userDB)
  //    })
  // })
  
  }