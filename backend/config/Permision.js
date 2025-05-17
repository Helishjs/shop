const mongoose = require("mongoose");

const PermistionSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    description: {
        type: String
    }
})
const Permission = mongoose.model("permission",PermistionSchema);
module.exports = Permission;