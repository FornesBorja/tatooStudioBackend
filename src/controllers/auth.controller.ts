import { Request, Response } from "express";
import { user } from "../database/models/user";
import bcrypt from "bcrypt";

export const register = async (req: Request, res: Response) => {
  try {
    const firstName=req.body.firstName;
    const email = req.body.email;
    const password = req.body.password;
    const roleId = req.body.roleId;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        mesaage: "email and password is required",
      });
    }

    if (password.length < 8 || password.length > 12) {
      return res.status(400).json({
        success: false,
        mesaage: "password is not valid, 8 to 12 characters must be needed",
      });
    }
    const passwordHash = bcrypt.hashSync(password, 10);

    const newUser =await user.create({
        firstName,
        email,
        passwordHash,
        roleId
    }).save();

    return res.status(201).json({
      success: true,
      message: "user registered succesfully",
      data: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "user can't be registered",
      error: error,
    });
  }
};