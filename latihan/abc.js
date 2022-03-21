const WalletModel = require('../latihan/wallet_model');
const CustomerModel  = require('../latihan/customer_model');

const abcController = {

   readCategory : async (req, res) => {
      try {
         const listCategory = await WalletModel.findAll({
            include : [{
               model : CustomerModel
            }],
            attributes : ['id', 'total']
         });
         res.status(200).json({
            status : true,
            category : listCategory
         });
      } catch (error) {
         return res.status(500).json({
            status : false,
            message : error.message
         });
      }
   }
};
module.exports = abcController;