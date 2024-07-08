import express from "express";
import { AppDataSource } from "./database/database";
import { getAllServices } from "./controllers/services.controller";
import { register } from "./controllers/auth.controller";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;

//Auth
app.post("/api/auth/register", register)


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