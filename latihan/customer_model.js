const {DataTypes} = require('sequelize');
const Connection = require('../config/connection');

const CustomerModel = Connection.define(
   'customer',
   {
      id : {
         type : DataTypes.INTEGER,
         primaryKey : true,
         autoIncrement : true,
         allowNull : false,
         unique : true
      },
      
      nama : {
         type : DataTypes.STRING
      }
   },
   {
      freezeTableName : true,
      timestamps : false,
   }
);

module.exports = CustomerModel;