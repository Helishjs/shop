const { default: mongoose } = require("mongoose");
const MyBook = require("../config/MyBook");
const ErrorCode = require("../utils/ErrorCode");
const ErrorException = require("../utils/ErrorException");

const AddMyBook = async(req,res) =>{
    try{
        const {userId,bookId} = req.body;
        const valid = await MyBook.findOne({ userId: userId, bookId: bookId });
        if(valid){
            throw new ErrorException(ErrorCode.BOOK_EXISTED)
        }
        if(!userId || !bookId){
            throw new ErrorException(ErrorCode.MISSING_REQUIRED_FIELDS);
        }if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(bookId)) {
            throw new ErrorException(ErrorCode.ID_NOT_FOUND);
        }
        const newMyBook = new MyBook({
            userId: userId,
            bookId: bookId
        });
        const savedMyBook = await newMyBook.save();
        return res.status(201).json({ message: true, data: savedMyBook });

    } catch (err) {
        return res.status(500).json({ message: false, data: "Lỗi khi thêm sách vào danh sách của người dùng" });
    }
}

const DeleteMyBook = async(req,res) =>{
    try{
        const {userId,bookId} = req.body;
        if(!userId || !bookId){
            throw new ErrorException(ErrorCode.MISSING_REQUIRED_FIELDS);
        }if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(bookId)) {
            throw new ErrorException(ErrorCode.ID_NOT_FOUND);
        }
        const result = await MyBook.findOneAndDelete({ userId: userId, bookId: bookId });
        if(!result){
            throw new ErrorException(ErrorCode.ID_NOT_FOUND);
        }
        return res.status(200).json({message:true, data: "Cuốn sách của người dùng đã được xóa"});
    }
    catch (err) {
        return res.status(500).json({ message: false, data: "Lỗi khi thêm sách vào danh sách của người dùng",error: err });
    }
}
module.exports = {AddMyBook,DeleteMyBook};