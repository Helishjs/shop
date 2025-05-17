const mongoose = require("mongoose");

const users = new mongoose.Schema({
    username:{
        required:true,
        type: String,
        minlength: 4,
        maxlength: 20,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 8,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, 'Vui lòng nhập địa chỉ email hợp lệ']
    },
    phone:{
        type: String,
        required: true,
        minlength: 9,
        maxlength: 12,
        unique: true

    },
    role:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"roles"
    }
},
{
    timestamps: true
})
const User = mongoose.model("users",users);

module.exports = User;