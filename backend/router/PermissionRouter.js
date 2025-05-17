const express  = require("express");
const { GetPermission, CreatePermission, DeletePemission, UpdatePermission } = require("../Controller/PermissionController");
const {authentication} = require("../Middleware/Authorization");
const router = express.Router();

router.get("/permission",authentication,GetPermission);
router.post("/permission",authentication,CreatePermission);
router.delete("/permission/:id",authentication,DeletePemission);
router.put("/permission/:id",authentication,UpdatePermission);

module.exports = router;