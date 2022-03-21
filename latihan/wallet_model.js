const {DataTypes} = require('sequelize');
const Connection = require('../config/connection');
const CustomerModel = require('./customer_model');

const WalletModel = Connection.define(
   'wallet',
   {
      id : {
         type : DataTypes.INTEGER,
         primaryKey : true,
         autoIncrement : true,
         allowNull : false,
         unique : true
      },
      customer_id : {
         type : DataTypes.INTEGER,
         allowNull : false,
      },
      total : {
         type : DataTypes.INTEGER
      }
   },
   {
      freezeTableName : true,
      timestamps : false,
   }
);

CustomerModel.hasOne(WalletModel,{foreignKey : 'customer_id'});
WalletModel.belongsTo(CustomerModel, {foreignKey : 'id'})

module.exports = WalletModel;