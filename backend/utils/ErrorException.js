
class ErrorException extends Error {
    constructor({ code, message, status }) {
        super(message);
        this.statusCode = status || 500;
        this.code = code;
    }
}


module.exports = ErrorException;