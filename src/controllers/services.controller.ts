import { Request, Response } from "express";
import { service } from "../database/models/service";

export const getAllServices = async (req: Request, res: Response) => {
    try {
      const allServices = await service.find();
  
      return res.json({
        success: true,
        message: "Services retrieved succesfully",
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

export const createService = async (req: Request, res: Response) => {
    try {
      const {serviceName, description}=req.body
  
      if (!serviceName) {
        throw new Error ("Service name is required")
      }
  
      const newService = await service.create(
        {
          serviceName:serviceName,
          description:description
        }
      ).save();
  
      return res.json(
        {
          success: true,
          message: 'service created successfully',
          data: newService
        }
      )
    } catch (error) {
      res.status(500).json(
        {
          success: false,
          message: "Error creating service"
        }
      )
    }
  }