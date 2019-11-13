const db = require ("../models/User")

module.exports = function(app) {

app.get("/api/user", function(req,res){

  db.User.findAll({}).then(function(userDB){

    res.json(userDB)
  })
})

}