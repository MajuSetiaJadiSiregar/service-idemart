const {Sequelize} = require('sequelize');

const Connection = new Sequelize('idemart', 'root', '', {
   host: 'localhost',
   dialect: 'mysql'
});

module.exports = Connection;

// const authAdmin = async (req, res, next) =>{
//    try {
      
//        const user = await Users.findOne({
//            _id: req.user.id
//        })
//        if(user.role === 0)
//            return res.status(400).json({msg: "Admin resources access denied"})

//        next()
       
//    } catch (err) {
//        return res.status(500).json({msg: err.message})
//    }
// }