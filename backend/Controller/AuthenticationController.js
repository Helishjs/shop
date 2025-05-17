const { generaterToken, generaterRefreshToken } = require("../Middleware/Authorization");
const User = require("../config/Users");
const bycript = require("bcrypt");
const ErrorException = require("../utils/ErrorException");
const ErrorCode = require("../utils/ErrorCode");
const Login = async(req,res) =>{
        const {username,password} = req.body;
        const user =await User.findOne({username: username});
        if(!user){
            throw new ErrorException(ErrorCode.USER_NOT_FOUND);
        }
        const checkpassword = await bycript.compare(password,user.password);
        if(!checkpassword){
            throw new ErrorException(ErrorCode.PASSWORD_INCORRECT);
        }
        const token =await generaterToken(user);
        const refreshtoken = generaterRefreshToken(user);

        return res.status(200).json({message: true, data: {token,refreshtoken}});

}


module.exports = {
    Login
}