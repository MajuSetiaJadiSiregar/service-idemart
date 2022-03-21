const UserModel = require('../model/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const UserController = {

   register : async (req, res) => {
      try {
         const {firstname, lastname, username, password} = req.body;
         
         const dataUsername = await UserModel.findOne({
            attributes : ['username'],
            where : {username : username}
         });

         if(password.length < 6) return res.status(400).json({status : false, message : "Password Harus lebih dari 5"});

         if(dataUsername != null) return res.status(400).json({status : false, message : "Usernama sudah Ada, Silahkan Login"});

         const passwordHash = await bcrypt.hash(password, 10);
         
         await UserModel.create({
            firstname : firstname, 
            lastname : lastname, 
            username : username, 
            password : passwordHash
         });
         return res.status(200).json({
            status : true,
            message : "Register Success"
         });

      } catch (error) {
         return res.status(500).json({
            status : false,
            message : error.message
         });
      }
   },

   login : async (req, res) => {
      try {
         const {username, password} = req.body;
         const dataUser = await UserModel.findOne({where : {username : username}});

         if(dataUser == null) return res.status(400).json({status:false, message:"Anda belum terdaftar, Silahkan Register"});
        
         const isMatchPassword = await bcrypt.compare(password, dataUser.dataValues.password)
         
         if(!isMatchPassword) return res.status(400).json({status:false, message:"Password anda salah"});
         
         const token = jwt.sign({id : dataUser.dataValues.id}, "RAHASIA", {expiresIn : '1d'});

         return res.status(200).json({
            status: true,
            message: "Login Success",
            token : token,
            user : dataUser
         });

      } catch (error) {
         return res.status(500).json({
            status : false,
            message : error.message
         });
      }
   }
};
module.exports = UserController;