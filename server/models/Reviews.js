
module.exports = function(sequelize, DataTypes){
  let Review = sequelize.define("Review", {
    text: {
      type: DataTypes.STRING,
      allowNull: true, 
      
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })

  return Review
}