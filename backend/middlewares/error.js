const ErrorHandler = require("../helpers/error");

module.exports = (err, req, res, next) =>{
    res.status(err.statusCode).json({
        success: false,
        error: err
    });
}