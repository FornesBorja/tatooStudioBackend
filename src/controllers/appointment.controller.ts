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

export const updateAppointment = async (req: Request, res: Response) => {
  try {
      const clientId = req.tokenData.id;
      const appointmentID = req.body.id;
      const body = req.body;

      const Appointment = await appointment.findOne(
          {
              where: {
                id: parseInt(appointmentID),
                clientId
              }
          }
      )

      if (!Appointment) {
        throw new Error("Appointment does not exist!");
      }

      const updateAppointment = await appointment.update(
          {
              id: parseInt(appointmentID),
              clientId
          },
          body
      )

    return res.status(200).json(
          {
              success: true,
              message: "Appointment updatetented successfully!",
              data: updateAppointment
          }
      )

  } catch (error) {
      res.status(500).json(
          {
              success: false,
              message: "Error updating your appoinment",
              error: error
          }
      )

  }
}

export const showAppointments = async (req: Request, res: Response) => {
  try {
      const userId = req.tokenData.id;

      const Appointment = await appointment.find(
          {
              select: {
                  id: true,
                  appointmentDate: true,
                  client: {
                      id: true,
                      firstName:true,
                      email: true
                  },
                  artist: {
                    id: true,
                    firstName:true,
                    email: true
                },
                  service: {
                      serviceName: true
                  },
              },
              where:
              {
                clientId:userId
              },

              relations: { client: {}, artist:{}, service: {} }
          }
      );

    return res.status(200).json(
          {
              success: true,
              message: "User appointments retrived successfully!",
              data: Appointment
          }
      )

  } catch (error) {
      res.status(500).json(
          {
              susscess: false,
              message: "User appointments cannot be retrived!",
              error: error
          }
      )
  }
}

export const findAppointmendById = async (req: Request, res: Response) => {
  try {
      const appointmentId = parseInt(req.params.id);
      const clientId = req.tokenData.id;

      if (isNaN(appointmentId)) {
        throw new Error ("Invalid appointment ID")

      }

      const Appointment = await appointment.findOne(
          {
            select: {
              id: true,
              appointmentDate: true,
              client: {
                  id: true,
                  firstName:true,
                  email: true
              },
              artist: {
                id: true,
                firstName:true,
                email: true
            },
              service: {
                  serviceName: true
              },
          },
              where: {
                  client: { id: clientId },
                  id: appointmentId
              },
              relations: { client: {}, artist:{}, service: {} }
          }
      )

      if (!Appointment) {
          throw new Error ("Appointment not found or you cant search an appointment which is not yours");
      }

      return res.json(
          {
              success: true,
              message: "Appointment retrived successfully!",
              data: Appointment
          }
      )

  } catch (error) {
      res.status(500).json(
          {
              success: false,
              message: "Error finding appointment",
              error: error
          }
      )

  }
}
