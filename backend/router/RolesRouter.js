const express = require("express");
const { GetRole, UpdateRole, DeleteRole, CreateRoles } = require("../Controller/RolesController");
const { authentication } = require("../Middleware/Authorization");
const router = express.Router();

router.get("/role",authentication,GetRole);
router.post("/role",authentication,CreateRoles);
router.put("/role/:id",authentication,UpdateRole);
router.delete("/role/:id",authentication,DeleteRole);

module.exports = router;