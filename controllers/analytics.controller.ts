import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../utils/ErrorHandler";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import { generateLast12MonthsData } from "../utils/analytics.generator";
import userModel from "../models/user_model";
import CourseModel from "../models/course_model";
import OrderModel from "../models/order_model";

// get users analytics -- only admin

export const getUsersAnalytics = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => { 
        try{
         
        const users = await generateLast12MonthsData(userModel);    

        res.status(200).json({
            success: true,
            users
        });
        }


        catch(error:any) {
            return next(new ErrorHandler(error.message, 400));
      
          }
 });


 // get courses analytics -- only admin

export const getCoursesAnalytics = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => { 
        try{
         
        const courses = await generateLast12MonthsData(CourseModel);    

        res.status(200).json({
            success: true,
            courses
        });
        }


        catch(error:any) {
            return next(new ErrorHandler(error.message, 400));
      
          }
 });

  // get orderss analytics -- only admin

export const getOrdersAnalytics = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => { 
        try{
         
        const orders = await generateLast12MonthsData(OrderModel);    

        res.status(200).json({
            success: true,
            orders
        });
        }


        catch(error:any) {
            return next(new ErrorHandler(error.message, 400));
      
          }
 });