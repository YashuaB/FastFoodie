
module.exports = function(sequelize, DataTypes){
  let Restaurant = sequelize.define("Restaurant", {
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len:[4,30]
      }
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false 
    },
    rating:{
      type: DataTypes.NUMBER,
      allowNull:true
    },
    image:{
      type: DataTypes.STRING,
      allowNull:false
    },
    address:{
      type: DataTypes.STRING,
      allowNull:false
    },
    zipcode:{
      type: DataTypes.NUMBER,
      allowNull:true
    }
  })
  return Restaurant
}