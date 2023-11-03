class ErrorHandler extends Error {
    statusCode : number;
    
    constructor(message:any, statusCode:Number) {
        super(message);
        this.statusCode = statusCode;

        Error.captureStackTrace(this, this.constructor);


    }
}

module.exports = ErrorHandler;