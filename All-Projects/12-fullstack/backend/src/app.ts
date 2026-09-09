// src/app.ts
import express, { Application } from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import { errorHandler } from './middlewares/errorHandler.middleware.js';

const app: Application = express();

// Middlewares globales
app.use(cors());
app.use(express.json());

// Montaje de rutas
app.use('/api', routes);

// Middleware de manejo de errores (siempre al final de las rutas)
app.use(errorHandler);

export default app;
  