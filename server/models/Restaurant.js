
module.export = function(sequelize, DataTypes){
  let Restaurant = sequelize.define("Restaurant", {
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len:[4,30]
      }
    },
    description:{
      type:DataTypes,
      allowNull: false, 
    },
    rating:{
      type: DataTypes.NUMBER,
      allowNull:true
    },
    image:{
      type: DataTypes.STRING,
      allowNull:false
    },
    location:{
      type: DataTypes.STRING,
      allowNull:false
    },
    phoneNumber:{
      type: DataTypes.NUMBER,
      allowNull:false
    }
  })
}