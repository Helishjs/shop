const { default: mongoose } = require("mongoose");
const Book = require("../config/Books");
const ErrorCode = require("../utils/ErrorCode");
const ErrorException = require("../utils/ErrorException");

const CreateBook = async (req, res) => {
    try {
        const Books = req.body;
        if (Array.isArray(Books)) {
            const ListBook = await Book.insertMany(Books, { runValidators: true });
            return res.status(201).json({ message: true, data: ListBook });
        } else {
            const newBook = new Book(Books);
            const savedBook = await newBook.save();
            return res.status(201).json({ message: true, data: savedBook });
        }
    } catch (err) {
        console.error('Error creating book:', err);
        return res.status(500).json({ message: false, data: err.message });
    }
};


const GetAllBook = async(req,res) =>{
    try{
        const listbook = await Book.find();
        return res.status(200).json({message: true, data: listbook});
    }catch(err){
        return res.status(500).json({message: false, data: err});
    }
}

const GetBookById = async(req,res) =>{
    try{
        const {id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw new ErrorException(ErrorCode.ID_NOT_FOUND);
        }

        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: false, data: "Không tìm thấy sách" });
        }
        return res.status(200).json({message: true, data: book}); 
    }catch(err){
        return res.status(500).json({message: false, data: "Lỗi khi tìm kiếm sách"});
    }
}

const UpdateBook = async(req,res) =>{
    try{
        const {id} = req.params;
        const update = req.body;
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw new ErrorException(ErrorCode.ID_NOT_FOUND);
        }
        const book = await Book.findByIdAndUpdate(id,
            update,
            {new: true, runValidators:true}
        )
        return res.status(200).json({message: true, data: book}); 
    }catch(err){
        return res.status(500).json({message: false, data: err});
    }
}

const DeleteBook = async(req,res) =>{
    try{
        const {id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw new ErrorException(ErrorCode.ID_NOT_FOUND);
        }
        await Book.findByIdAndDelete(id);
        return res.status(200).json({message: true, data: "Xóa thành công"});
    }catch(err){
        return res.status(500).json({message: false, data: err});
    }
}
module.exports = {CreateBook,GetAllBook,GetBookById,UpdateBook,DeleteBook};