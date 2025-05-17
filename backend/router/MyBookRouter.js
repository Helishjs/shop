const express  = require("express");
const { AddMyBook, DeleteMyBook } = require("../Controller/MyBookController");
const { authentication } = require("../Middleware/Authorization");
const router = express.Router();

router.post("/",AddMyBook);
router.delete("/",authentication,DeleteMyBook);
module.exports = router;