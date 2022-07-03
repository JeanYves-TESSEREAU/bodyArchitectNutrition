import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
dotenv.config();

import alimentRoutes from './routes/alimentRoutes.js';
import recipeRoutes from './routes/recipeRoutes.js';

const app = express();
connectDB();

app.use(express.json({ limit: '50mb', extended: false }));
app.use('/aliments', alimentRoutes);
app.use('/recipes', recipeRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port${PORT}`));
