const ErrorCode = {
    // Validation Errors
    VALIDATION_ERROR: {
        code: "1001",
        message: "Chưa điền đủ thông tin",
        status: 400
    },
    INVALID_EMAIL: {
        code: "1004",
        message: "Địa chỉ email không hợp lệ",
        status: 400
    },
    INVALID_PASSWORD: {
        code: "1005",
        message: "Mật khẩu không hợp lệ (ít nhất 8 ký tự)",
        status: 400
    },
    INVALID_USERNAME: {
        code: "1006",
        message: "Tên người dùng không hợp lệ (tối thiểu 3 ký tự)",
        status: 400
    },
    BOOK_EXISTED:{
        code: "130",
        message: "Cuốn sách đã tồn tại",
        status: 400
    },

    // Authentication Errors
    USER_EXISTED: {
        code: "1002",
        message: "Người dùng đã tồn tại",
        status: 400
    },
    USER_NOT_FOUND: {
        code: "1007",
        message: "Người dùng không tồn tại",
        status: 404
    },
    PASSWORD_INCORRECT: {
        code: "1008",
        message: "Mật khẩu không chính xác",
        status: 401
    },
    UNAUTHORIZED: {
        code: "1009",
        message: "Không có quyền truy cập",
        status: 403
    },
    INVALID_ROLE:{
        code:"1016",
        message: "Role người dùng không tồn tại",
        stauts: 404
    },

    // Database Errors
    DATABASE_ERROR: {
        code: "1010",
        message: "Lỗi cơ sở dữ liệu",
        status: 500
    },
    DUPLICATE_KEY: {
        code: "1011",
        message: "Giá trị đã tồn tại trong cơ sở dữ liệu",
        status: 400
    },
    ID_NOT_FOUND:{
        code:"1017",
        message: "id Không tồn tại trong dữ liệu",
        status: 400
    },

    // Server Errors
    INTERNAL_SERVER_ERROR: {
        code: "1012",
        message: "Lỗi hệ thống, vui lòng thử lại sau",
        status: 500
    },
    SERVICE_UNAVAILABLE: {
        code: "1013",
        message: "Dịch vụ hiện không khả dụng",
        status: 503
    },

    // Input Errors
    INVALID_PHONE_NUMBER: {
        code: "1014",
        message: "Số điện thoại không hợp lệ",
        status: 400
    },
    MISSING_REQUIRED_FIELDS: {
        code: "1015",
        message: "Thiếu thông tin bắt buộc",
        status: 400
    }
};

module.exports = ErrorCode;
