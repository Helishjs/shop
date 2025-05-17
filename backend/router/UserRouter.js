const express = require("express");
const { GetAllUsers, CreateUser, UpdateUser, DeleteUser, GetUserById } = require("../Controller/UserController");
const { authentication } = require("../Middleware/Authorization");
const router = express.Router(); 

router.get("/",authentication,GetAllUsers);
router.get("/:id",GetUserById);
router.post("/",CreateUser);
router.put("/:id",UpdateUser);
router.delete("/:id",DeleteUser);
module.exports = router;