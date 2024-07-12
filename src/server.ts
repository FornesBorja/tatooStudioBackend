import express from "express";
import { AppDataSource } from "./database/database";
import { getAllServices } from "./controllers/services.controller";
import { login, register } from "./controllers/auth.controller";
import { auth } from "./middleware/auth";
import { isSuperAdmin } from "./middleware/isSuperAdmin";
import { getAllUsers, getUserProfile, updateUserById } from "./controllers/users.controller";
import { createAppointment } from "./controllers/appointment.controller";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;

//Auth
app.post("/api/auth/register", register)
app.post("/api/auth/login", login)

//Users
app.get("/api/users", auth,isSuperAdmin, getAllUsers)
app.get("/api/users/profile", auth, getUserProfile)
app.put("/api/users/profile",auth, updateUserById)

//Appointments
app.post('/api/appointments',auth, createAppointment)

//Services
app.get("/api/services", getAllServices)

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      
    });
  })
  .catch((error) => {
    console.log(error);
  });