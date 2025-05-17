const mongoose = require("mongoose");
const {createAdmin} = require("../Authentication/SecurityCongfig");
const ConnectDb = async() =>{
    try{
        await mongoose.connect(process.env.hostdb);
        console.log("Connected Successfully");
        await createAdmin();
    }catch(err){
        console.log("Err Connected!",err);
        process.exit(1)
    }
}
module.exports = ConnectDb;