import express from 'express';
import { AppDataSource } from './database/database';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;
AppDataSource.initialize() .then(() =>
    { console.log('Database connected'); })
    .catch(error => { console.log(error) })