const express = require("express");
const router = express.Router();
const {AiController} = require("../Controller/AiController");
router.post("/api/chatai",AiController);

module.exports = router;