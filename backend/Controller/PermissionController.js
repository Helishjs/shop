const { default: mongoose } = require("mongoose");
const Permission = require("../config/Permision");

const CreatePermission = async(req,res)=>{
        try{
            const {name,description} = req.body;
            const permission = new Permission({
                name: name,
                description: description,
            })
            await permission.save();
            res.status(201).json({message: true, data: permission});
        }catch(err){
            res.status(500).json({message:false, data: err})
        }
}
const DeletePemission = async(req,res)=>{
        try{
            const {id} = req.params;
            await Permission.findByIdAndDelete(id);
            res.status(200).json({message: true, data: "delete permission successfully"})
        }catch(err){
            res.status(500).json({message:false,data: err})
        }
}
const UpdatePermission = async(req,res)=>{
        try{
            const id = req.params;
            if(!mongoose.Types.ObjectId.isValid(id)){
                return res.status(400).json({message:false,data: "id invalid"})
            }
            const data = req.body;
            const update = await Permission.findByIdAndUpdate(id,data,{new:true});
            return res.status(200).json({message:true, data: update});
        }catch(err){
            return res.status(500).json({message: false,data: err})
        }
}
const GetPermission = async(req,res)=>{
        try{
            const permissions = await Permission.find();
            res.status(200).json({message: true, data:permissions})
        }catch(err){
            res.status(500).json({message:false,data: err})
        }
}
module.exports = {
    CreatePermission,UpdatePermission,DeletePemission,GetPermission
}