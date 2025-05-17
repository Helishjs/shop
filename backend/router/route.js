const UserRouter = require("./UserRouter");
const AuthenticationRouter = require("./AuthenticationRouter");
const RolesRouter = require("./RolesRouter");
const PermissionRouter = require("./PermissionRouter");
const ErrorHandler = require("../utils/ErrorHandler");
const BookRouter = require("./BookRouter");
const MyBookRouter = require("./MyBookRouter");
function route(app){
    app.use("/user",UserRouter);
    app.use("/auth",AuthenticationRouter);
    app.use("/auth",RolesRouter);
    app.use("/auth",PermissionRouter);
    app.use("/book",BookRouter);
    app.use("/mybook",MyBookRouter);
    app.use(ErrorHandler);
}
module.exports = route;