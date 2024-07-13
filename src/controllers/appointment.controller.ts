import { Request, Response } from "express";
import { appointment } from "../database/models/appointment";

export const createAppointment = async(req: Request, res: Response) => {
    try {
      const clientId = req.tokenData.id;

      const date = req.body.date;
      const hour = req.body.hour;
      const artistId = req.body.artistId;
      const serviceId = req.body.serviceId;

      const [day, month, year] = date.split('/'||'-').map(Number);
      const [hours, minute] = hour.split(':').map(Number);

      if (!date || !hour || !artistId|| !serviceId) {
        throw new Error ("Date, hour, artist and service are needed")
      }
      
      const formatDate=new Date(year, month - 1, day,hours,minute)

      const newAppointment = await appointment.create(
        {
          clientId,
          appointmentDate: formatDate,
          artistId,
          serviceId,
        }
      ).save()

      return res.json(
        {
          success: true,
          message: "New appointment created",
          data: newAppointment
        }
      )
    } catch (error:any) {
      res.status(500).json(
        {
          success: false,
          message: "Appointment cant be created",
          error:error.message
        }
      )
    }
  }

