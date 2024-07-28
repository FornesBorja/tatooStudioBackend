import express from "express";
import { AppDataSource } from "./database/database";
import { createService, deleteServiceById, getAllServices, updateServiceById } from "./controllers/services.controller";
import { login, register } from "./controllers/auth.controller";
import { auth } from "./middleware/auth";
import { isSuperAdmin } from "./middleware/isSuperAdmin";
import { changeRoleUser, deleteUser, filterUserByEmail, getAllUsers, getUserProfile, updateUserById } from "./controllers/users.controller";
import { createAppointment, findAppointmendById, showAppointments, updateAppointment} from "./controllers/appointment.controller";
import cors from 'cors';

const app = express();

app.use(cors({
  origin: 'https://tattoo-studio-fornesb.zeabur.app', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
app.options('*', cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

//To check the status of the server
app.get('/healthy', (req, res) => {
  res.status(200).json(
    {
      success: true,
      message: 'Server is healthy!'
    }
  )
})

//Auth
app.post("/api/auth/register", register)
app.post("/api/auth/login", login)

//Users
app.get("/api/users", auth, isSuperAdmin, getAllUsers)
app.get("/api/users/profile", auth, getUserProfile)
app.put("/api/users/profile",auth, updateUserById)

app.delete("/api/users/:id", auth, isSuperAdmin, deleteUser)
app.put("/api/users/:id/role", auth, isSuperAdmin, changeRoleUser)
app.get("/api/users", auth, isSuperAdmin, filterUserByEmail)



//Appointments
app.post('/api/appointments',auth, createAppointment)
app.put('/api/appointments', auth, updateAppointment)        
app.get('/api/appointments', auth, showAppointments)        
app.get('/api/appointments/:id', auth, findAppointmendById)

//Services
app.get("/api/services", getAllServices)

app.post("/api/services",auth, isSuperAdmin, createService)
app.put("/api/services/:id",auth, isSuperAdmin, updateServiceById)
app.delete("/api/services/:id",auth, isSuperAdmin, deleteServiceById)

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      
    });
  })
  .catch((error) => {
    console.log(error);
  });