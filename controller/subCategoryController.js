const SubCategoryModel = require('../model/subCategoryModel');

const SubCategoryController = {

   readSubCategory : async (req, res) => {
      try {
         const listCategory = await SubCategoryModel.findAll();
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
module.exports = SubCategoryController;