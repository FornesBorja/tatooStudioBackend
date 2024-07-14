import { Request, Response } from "express";
import { user} from "../database/models/user";
import { error } from "console";


export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await user.find({
      select: {
        id: true,
        email: true,
      },
    });
    return res.json({
      success: true,
      message: "All users retrived successfully!",
      data: users,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error showing all users",
      error: error,
    });
  }
};

export const getUserProfile = async(req: Request, res: Response) => {
  try {
    const userId = req.tokenData.id;

    const thisUser = await user.findOne({
      select: {
        id:true,
        firstName: true,
        lastName: true,
        email:true,
        role:{
          name:true
        }
      },
      where: {
        id: userId
      }
      , relations: { role: {}}
    });
    

    res.json(
      {
        success: true,
        message: "User profile retrieved",
        data: thisUser
      }
    )
  } catch (error) {
    res.status(500).json(
      {
        success: false,
        message: "Profile cant be retrieved"
      }
    )
  }
}

export const updateUserById = async (req: Request, res: Response) => {
  try {
      const userId = req.tokenData.id;
      const body = req.body

      const userUpdated = await user.update(
        {
          id: userId
        },
        body
      )

      res.status(200).json(
        {
          success: true,
          message: "User updated",
          data: userUpdated
        }
      )      
  } catch (error) {
    res.status(500).json(
      {
        success: false,
        message: "User cant be updated",
        error: error
      }
    )
  }
}

//Extra endpoints
export const filterUserByEmail = async (req: Request, res: Response) => {
  try {
    const emailQuery = String(req.query.email);
 

    const userByEmail = await user.findOne(
      {
        select:{
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          role:{
            name:true,
          }
        },
        where:{
          email:emailQuery
        },
        relations: { role: {}}
      }
    )

    return res.json(
      {
        success: true,
        message: "User retrieved correctly",
        data: userByEmail
      }
    )

  } catch (error:any) {
    res.status(500).json(
      {
        success: false, 
        message: "Cant retrieve user",
        error: error.message
      }
    )
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userIdToDelete = Number(req.params.id)
  
    const userDeleted = await user.delete(userIdToDelete)

    if(!userDeleted.affected) {
      throw new Error("User doesn't exist");
      
    } 

    return res.status(200).json(
      {
        success: true,
        message: "User deleted successfully",
        data: userDeleted
      }
    )
  } catch (error) {
    res.status(500).json(
      {
        success: false,
        message: "Error deleting user",
        error: error
      }
    )
  }
}