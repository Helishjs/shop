const express = require("express");
const router = express.Router();
const {Login, GenerateToken} = require("../Controller/AuthenticationController");
const { authenticationToken } = require("../Middleware/Authorization");
router.post("/login",Login);
// router.post("/token",GenerateToken.index);
module.exports = router;