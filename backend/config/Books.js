const mongoose = require("mongoose");

const SchemaBook = new mongoose.Schema({
    title:{required: true, type: String},
    name:{required: true, type: String},
    imageUrl: {type: String},
    author: {required: true,type: String},
    content: {required: true, type: String},
    genre: {required: true,type: String},
    hidden:{type: Boolean,default: false},
},{timestamps: true});

const Book = mongoose.model("books", SchemaBook);
module.exports = Book;