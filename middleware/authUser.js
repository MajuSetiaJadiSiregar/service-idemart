const jwt = require('jsonwebtoken');

const midllewareUsers = {
   authenticationUser : (req, res, next) => {
      try {
         let token = req.header("Authorization");
         if(!token) return res.status(400).json({status : false, message : "Not Authorization"});
         jwt.verify(token, "RAHASIA", (err, user) => {
            if(err) return res.status(400).json({status : false, message : "Not Authorization"});
            req.user = user;
            next();
         });
         
      } catch (error) {
         console.log(error.message);
      }      
   } 
};
module.exports = midllewareUsers;