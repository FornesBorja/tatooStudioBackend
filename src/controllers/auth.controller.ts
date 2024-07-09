import { Request, Response } from "express";
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt";
import { user } from "../database/models/user";

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
      message: "User registered succesfully",
      data: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "User can't be registered",
      error: error,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    // 1. recuperar info
    const { email, password } = req.body

    // 2. validar info
    if (!email || !password) {
      return res.status(400).json(
        {
          success: false,
          message: "Email and password are needed"
        }
      )
    }

    // 3. Comprobar si el usuario existe 
    const newUser = await user.findOne(
      {
        where: { email: email }
      }
    )

    if (!newUser) {
      return res.status(400).json(
        {
          success: false,
          message: "Email or password not valid"
        }
      )
    }

    // 4. Comprobar la contraseña 
    const isPasswordValid = bcrypt.compareSync(password, newUser.passwordHash)
    
    if(!isPasswordValid) {
      return res.status(400).json(
        {
          success: false,
          message: "Email or password not valid"
        }
      )
    }

    // 5. creacionn del token
    const token = jwt.sign(
      {
        id: newUser.id,
        role: newUser.role,
        email: newUser.email
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "2h"
      }
    )

    res.status(200).json(
      {
        success: true,
        message: "User logged",
        token: token
      }
    )
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User cant be logged",
      error: error
    })
  }
}