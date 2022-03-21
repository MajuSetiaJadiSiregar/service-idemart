const {DataTypes} = require('sequelize');
const Connection = require('../config/connection');

const UserModel = Connection.define(
   'user',
   {
      id : {
         type : DataTypes.INTEGER,
         primaryKey : true,
         autoIncrement : true,
         allowNull : false,
      },
      firstname : {
         type : DataTypes.STRING(225),
         allowNull : true
      },
      lastname : {
         type : DataTypes.STRING(225),
         allowNull : true
      }, 
      phone : {
         type : DataTypes.STRING(225),
         allowNull : true
      }, 
      email : {
         type : DataTypes.STRING(225),
         allowNull : true,
      }, 
      username : {
         type : DataTypes.STRING(225),
         allowNull : true
      }, 
      password : {
         type : DataTypes.STRING(225),
         allowNull : true
      }, 
      profesion : {
         type : DataTypes.STRING(225),
         allowNull : true
      }, 
      role : {
         type : DataTypes.INTEGER(4),
         allowNull : true,
         defaultValue : 1
      }, 
      profile_picuter : {
         type : DataTypes.STRING(225),
         allowNull : true
      }
   },
   {
      freezeTableName : true,
      timestamps : true,
   }
);

module.exports = UserModel;