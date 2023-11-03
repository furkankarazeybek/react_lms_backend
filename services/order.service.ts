import { NextFunction, Response } from "express";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import OrderModel from "../models/order_model";
import userModel from "../models/user_model";

// Yeni bir sipariş oluştur
export const newOrder = CatchAsyncError(async (data: any, res: Response,next: NextFunction ) => {
    const order = await OrderModel.create(data);

    console.log(res)

    res.status(201).json({
        success: true,
        order
    });
});

// Get All Orders
export const getAllOrdersService = async (res: Response) => {
    const orders = await OrderModel.find().sort({ createAt: -1 });
  
    res.status(201).json({
      success: true,
      orders,
    });
  };


//update user role
export const updateUserRoleService = async (res: Response, id: string, role:string) => { 
    const user = await userModel.findByIdAndUpdate(id, { role }, { new: true});

    res.status(201).json({
      success: true,
      user,
    });
}
  
