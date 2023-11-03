"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserRoleService = exports.getAllOrdersService = exports.newOrder = void 0;
const catchAsyncErrors_1 = require("../middleware/catchAsyncErrors");
const order_model_1 = __importDefault(require("../models/order_model"));
const user_model_1 = __importDefault(require("../models/user_model"));
// Yeni bir sipariş oluştur
exports.newOrder = (0, catchAsyncErrors_1.CatchAsyncError)((data, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield order_model_1.default.create(data);
    console.log(res);
    res.status(201).json({
        success: true,
        order
    });
}));
// Get All Orders
const getAllOrdersService = (res) => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield order_model_1.default.find().sort({ createAt: -1 });
    res.status(201).json({
        success: true,
        orders,
    });
});
exports.getAllOrdersService = getAllOrdersService;
//update user role
const updateUserRoleService = (res, id, role) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.default.findByIdAndUpdate(id, { role }, { new: true });
    res.status(201).json({
        success: true,
        user,
    });
});
exports.updateUserRoleService = updateUserRoleService;
