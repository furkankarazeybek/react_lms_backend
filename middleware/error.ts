import { NextFunction, Request } from 'express';
import ErrorHandler from '../utils/ErrorHandler';

export const ErrorMiddleware = (err:any,req:Request,res:Response,next:NextFunction) => {
    err.statusCode = err.statusCode || 500 ; 
    err.message = err.message || 'Internal server error';

    //wrong mongodb id error
    if(err.name === 'CastError') {
        const message = `Resource ot found. Invalid: ${err.path}`;
        err = new ErrorHandler(message,400);
    }

    //duplicate key error
    if(err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
        err = new ErrorHandler(message,400);

    }

    // wrong jwt error
   

    res.status(err.statusCode).json({
        success:false,
        message: err.message
    });

};