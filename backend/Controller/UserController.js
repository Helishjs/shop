const { default: mongoose } = require("mongoose");
const { passwordEncoder } = require("../Middleware/Authorization");
const User = require("../config/Users");
const Roles = require("../config/Roles");
const ErrorException = require("../utils/ErrorException");
const ErrorCode = require("../utils/ErrorCode");
const GetAllUsers = async(req,res)=>{
        try{
            const Users = await User.find().populate({
                path: "role",
                populate: {path: "permission"}
            });
            return res.status(200).json({message: true, data: Users});
        }catch(err){
            console.error("Error in GetAllUsers:", err)
            return res.status(500).json({message: false, data :"Get all users failed"});
        }
}


const CreateUser = async (req, res) => {
    try {
        const { username, password, email, phone, role } = req.body;

        if (!username || !password || !email || !phone) {
            return res.status(400).json({ error: "Thiếu trường bắt buộc" });
        }

        const UsernameExists = await User.findOne({ username });
        if (UsernameExists) {
            return res.status(400).json({ error: "Username đã tồn tại" });
        }

        const Userrole = await Roles.findOne({ name: role || "user" });
        if (!Userrole) {
            return res.status(400).json({ error: "Vai trò không hợp lệ" });
        }

        const encode = await passwordEncoder(password);
        const newUser = new User({
            username,
            password: encode,
            email,
            phone,
            role: Userrole._id,
        });

        await newUser.save();

        const populater = await newUser.populate({
            path: "role",
            populate: { path: "permission" },
        });

        return res.status(201).json({ message: true, data: populater });

    } catch (err) {
        console.error("Lỗi tạo user:", err);

        const listerr = {};
        if (err.errors) {
            for (let field in err.errors) {
                listerr[field] = err.errors[field].message;
            }
        }

        return res.status(500).json({
            message: false,
            error: err.message || "Lỗi không xác định",
            details: listerr
        });
    }
};



const UpdateUser = async(req,res)=> {
        const {id} = req.params;
        const data = req.body;
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw new ErrorException(ErrorCode.ID_NOT_FOUND);
        }
        try{
            const updateUser = await User.findByIdAndUpdate(
                id,
                data,
                {new:true,runValidators:true}
            )
            return res.status(200).json({message: true, data: updateUser});
        }catch(err){
            return res.status(500).json({message: false, data :"update users failed"});
        }
}


const DeleteUser = async(req,res)=>{
        const {id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw new ErrorException(ErrorCode.ID_NOT_FOUND);
        }
        try{
            await User.findByIdAndDelete(id);
            return res.status(200).json({message: true, data: "User has been deleted"});
        }catch (err){
            return res.status(500).json({message: false, data :"delete users failed"});
        }
}

const GetUserById = async(req,re) =>{
        const {id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw new ErrorException(ErrorCode.ID_NOT_FOUND);
        }
        try{
            const user = await User.findById(id).populate({
                path: "role",
                populate: {path: "permission"}
            });
            return res.status(200).json({message: true, data: user});
        }catch(err){
            return res.status(500).json({message: false, data :{message:"Get users by id failed",error: err}});
        }
}

const GetUserByUsername = async(req,res) =>{
        const {username} = req.body;
        try{
            const Users = await User.findOne({username}).populate({
                path: "role",
                populate: {path: "permission"}
            });;
            return res.status(200).json({message: true, data: Users});
        }catch(err){
            return res.status(500).json({message: false, data :{message:"Get users failed",error: err}});
        }
}
module.exports ={
    GetAllUsers,
    CreateUser,
    UpdateUser,
    GetUserById,
    GetUserByUsername,DeleteUser
}