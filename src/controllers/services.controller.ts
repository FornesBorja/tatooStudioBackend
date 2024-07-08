import { Request, Response } from "express";
import { services } from "../database/models/services";

export const getAllServices = async (req: Request, res: Response) => {
    try {
      //1.Tratar la info de la BD
      const allServices = await services.find();
  
      //2. Responder la info de la BD
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