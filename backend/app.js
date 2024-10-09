import 'dotenv/config';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import { sequelize } from './src/database/models'; // Ajusta la ruta a donde tienes tus modelos
import userRoutes from './src/routes/User.routes';
import serviceRoutes from './src/routes/service.routes';
import appointmentRoutes from './src/routes/appointment.routes';
import availabilityRoutes from './src/routes/availability.routes';
import serviceImageRoutes from './src/routes/serviceImage.routes';

const app = express();
const port = 3000;

app.use('/img', express.static(path.join(__dirname, 'public/img')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/availabilities', availabilityRoutes);
app.use('/api/service-images', serviceImageRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  sequelize.sync();
});