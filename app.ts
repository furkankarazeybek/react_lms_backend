require('dotenv').config();
import express from "express";
export const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import {ErrorMiddleware} from "./middleware/error";
import userRouter from "./routes/user.route";
import courseRouter from "./routes/course.route";
import orderRouter from "./routes/order.route";
import notificationRoute from "./routes/notification.route";
import analyticsRouter from "./routes/analytics.route";
import layoutRouter from "./routes/layout.route";





process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

//body parser
app.use(express.json({limit: "50mb"}));

//cookie parser 
app.use(cookieParser());

//cors 
app.use(cors({
    origin: process.env.ORIGIN
}));

// routes

app.use("/api/v1",userRouter,courseRouter,orderRouter,notificationRoute,analyticsRouter,layoutRouter);

//testing api
app.get("/test", (req: Request,res: Response,next: NextFunction) => {
    res.status(200).json({
        success:true,
        message: "API working"
    })
})

// unknown route
app.all("*", (req:Request,res:Response,next:NextFunction) => {
    const err = new Error(`Royte ${req.originalUrl} not found`) as any;
    err.statusCode = 404;
    next(err);
})


app.use(ErrorMiddleware)

