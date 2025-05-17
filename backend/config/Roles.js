const { default: mongoose,} = require("mongoose");

const Role = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    permission:[
        {type:mongoose.Schema.Types.ObjectId, ref: 'permission'}
    ]
})

const Roles = mongoose.model("roles",Role);
module.exports = Roles;
