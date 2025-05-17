const { default: mongoose } = require("mongoose");
const Roles = require("../config/Roles");
const Permission = require("../config/Permision");
const ErrorException = require("../utils/ErrorException");
const ErrorCode = require("../utils/ErrorCode");

const CreateRoles = async (req,res) => {
    try{
        const {name,...permissionNames} = req.body;
        const permissions = await Permission.find({name: { $in: permissionNames.permission}});
        const role = new Roles({
            name: name,
            permission: permissions
        })
        await role.save()
        return res.status(201).json({message:true, data:role});
    }catch(err){
        return res.status(500).json({message:false,data: "can not create role"});
    }
};

const DeleteRole= async(req,res) =>{
        try{
            const {id} = req.params;
            await Roles.findByIdAndDelete(id);
            res.status(200).json({message: true, data: "delete role successfully"})
        }catch(err){
            res.status(500).json({message:false,data: err})
        }
}
const UpdateRole= async(req,res) =>{
        try{
            const id = req.params;
            if(!mongoose.Types.ObjectId.isValid(id)){
                throw new ErrorException(ErrorCode.ID_NOT_FOUND)
            }
            const data = req.body;
            const update = await Roles.findByIdAndUpdate(id,data,{new:true});
            return res.status(200).json({message:true, data: update});
        }catch(err){
            return res.status(500).json({message: false,data: err})
        }
}
const GetRole= async(req,res) =>{
        try{
            const Role = await Roles.find().populate("permission","name description");
            res.status(200).json({message: true, data:Role})
        }catch(err){
            res.status(500).json({message:false,data: err})
        }
}
module.exports = {
    UpdateRole,
    GetRole,
    DeleteRole,
    CreateRoles
}