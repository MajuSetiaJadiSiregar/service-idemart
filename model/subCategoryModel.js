const {DataTypes} = require('sequelize');
const Connection = require('../config/connection');

const SubCategoryModel = Connection.define(
   'sub_category',
   {
      id : {
         type : DataTypes.INTEGER,
         primaryKey : true,
         autoIncrement : true,
         allowNull : false,
      },
      sub_category : {
         type : DataTypes.STRING
      }
   },
   {
      freezeTableName : true,
      timestamps : false,
   }
);

module.exports = SubCategoryModel;