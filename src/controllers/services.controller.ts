import { Request, Response } from "express";
import { services } from "../database/models/service";

export const getAllServices = async (req: Request, res: Response) => {
    try {
      const allServices = await services.find();
  
      return res.json({
        success: true,
        message: "Authors retrieve succesfully",
        data: allServices,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Cant retrieve services",
        error: error,
      });
    }
  };