
const Roles = require("../config/Roles");
const User = require("../config/Users");
const { passwordEncoder } = require("../Middleware/Authorization");

const createAdmin = async () => {
    try {
        const checkadmin = await User.find({ username: "admin" });
        if (checkadmin.length > 0) {
            console.log("Admin already exists");
            return;
        }
        const Userrole = await Roles.findOne({name: "admin"})
        const password = await passwordEncoder("admin");
        const admin = new User({
            username: "admin",
            password: password,
            email: "caothaituan2005@gmail.com",
            phone: "0339062388",
            role: Userrole._id
        });

        await admin.save();
        console.log("Admin created successfully!");
    } catch (error) {
        console.error("Error creating admin:", error);
    }
};



module.exports = {createAdmin};
