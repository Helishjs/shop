const express = require("express");
const {CreateBook, GetAllBook, GetBookById, UpdateBook, DeleteBook} = require("../Controller/BookController");
const { authentication } = require("../Middleware/Authorization");
const router = express.Router();

router.post("/",authentication,CreateBook);
router.get("/",GetAllBook);
router.get("/:id",GetBookById);
router.put("/:id",authentication,UpdateBook);
router.delete("/:id",authentication,DeleteBook);

module.exports = router;