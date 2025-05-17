const bycript = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.JWT_SECRET_KEY;
const refreshKey = process.env.JWT_REFRESH_SECRET_KEY;

const authentication = (req,res,next) =>{
    const header = req.headers["authorization"];
    const token = header && header.split(" ")[1];

    if(!token){
        return res.status(400).json({message: false ,data: "can not found token!"});
    }
    try{
        const verifyed = jwt.verify(token,secretKey);
        const {exp} = verifyed;
        if(exp <= Date.now()/1000){
            const refreshtoken = req.headers["refresh-token"];
            const refresh = jwt.verify(refreshtoken,refreshKey);

            const newtoken = generaterToken({userId: refresh.id});
            return req.status(200).json({message: true, data: newtoken});
        }
        req.user = verifyed;
        next();
    }catch(err){
        return res.status(400).json({message: false ,data: "can not verify token!"});
    }
}

const passwordEncoder = async(password) =>{
        const salt = await bycript.genSalt(10);
        const hashedpassword =await bycript.hash(password,salt);
        return hashedpassword;
}
const generaterToken = async(user) =>{
    if (!user || !user._id || !user.username || !user.email || !user.phone) {
        throw new Error("Invalid user data");
    }    
        await user.populate("role","name");
    try{
        const payload = {
            Id: user._id,
            userName: user.username,
            Email: user.email,
            Phone: user.phone,
            Role: user.role.name
        }
    
        const token = jwt.sign(payload,secretKey,{
            algorithm: "HS256",
            expiresIn: "1h",
        });
        return token;
    }catch(err){
        return {message: false,
                data: "can not create generaterToken"
        }
    }
}

const generaterRefreshToken = (user) =>{
    if (!user || !user._id || !user.username || !user.email || !user.phone) {
        throw new Error("Invalid user data");
    }
    
        try{
            const refreshToken = jwt.sign({userId:user._id},refreshKey,{
                algorithm: 'HS256',
                expiresIn: "24h",
            })
            return refreshToken;
        }catch(err){
            return {message: false,
                data: "can not create generaterRefreshToken"
        }
        }
}
module.exports = {authentication,passwordEncoder,generaterToken,generaterRefreshToken};