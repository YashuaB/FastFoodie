
module.exports = function(sequelize, DataTypes){
 let User = sequelize.define("User", {
    username: {
     type: DataTypes.STRING,
     allowNull: true,
     validate:{
       len:[6,25]
     } 
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len:[6],
        isEmail:true
      }
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len:[4,20]
      }
    }// favorites and review will be associated with user
  })

  return User
}