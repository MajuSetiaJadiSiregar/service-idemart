const {DataTypes} = require('sequelize');
const Connection = require('../config/connection');

const CategoryModel = Connection.define(
   'category',
   {
      id : {
         type : DataTypes.INTEGER,
         primaryKey : true,
         autoIncrement : true,
         allowNull : false,
      },
      category : {
         type : DataTypes.STRING
      }
   },
   {
      freezeTableName : true,
      timestamps : false,
   }
);

module.exports = CategoryModel;