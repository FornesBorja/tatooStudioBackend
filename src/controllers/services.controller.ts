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

export const updateServiceById = async (req: Request, res: Response) => {
  try {
      const serviceIdToUpdate = req.params.id
      const body = req.body

      const serviceUpdated = await service.update(
        {
          id: parseInt(serviceIdToUpdate)
        },
        body
      )

      return res.status(200).json(
        {
          success: true,
          message: "Service updated",
          data: serviceUpdated
        }
      )      
  } catch (error:any) {
    return res.status(500).json(
      {
        success: false,
        message: "Service cant be updated",
        error: error.message
      }
    )
  }
}

export const deleteServiceById = async (req: Request, res: Response) => {
  try {
    const serviceIdToDelete = Number(req.params.id)
  
    const serviceDeleted = await service.delete(serviceIdToDelete)

    if(!serviceDeleted.affected) {
      return res.status(404).json(
        {
          success: false,
          message: "Service doesnt exist"
        }
      )
    } 

    res.status(200).json(
      {
        success: true,
        message: "Service deleted successfully",
        data: serviceDeleted
      }
    )
  } catch (error) {
    res.status(500).json(
      {
        success: false,
        message: "Error deleting service",
        error: error
      }
    )
  }
}