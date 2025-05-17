const ErrorHandler = (err,req,res,next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Có lỗi ở server";
    
    console.log(`[Error]: ${message}`);
    return res.status(statusCode).json({
        message: false,
        data: message,
    });
}
module.exports = ErrorHandler;