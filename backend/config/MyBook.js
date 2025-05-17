const mongoose = require("mongoose");

const SchemaMyBook = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"roles"
    },
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
},{timestamps: true});

const MyBook = mongoose.model("mybooks",SchemaMyBook);

module.exports = MyBook;
