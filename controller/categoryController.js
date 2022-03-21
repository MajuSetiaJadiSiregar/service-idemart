const CategoryModel = require('../model/categoryModel');

const CategoryController = {

   readCategory : async (req, res) => {
      try {
         const listCategory = await CategoryModel.findAll();
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
module.exports = CategoryController;