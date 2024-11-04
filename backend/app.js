require('dotenv/config'); 
const express = require('express'); 
const path = require('path'); 
const bodyParser = require('body-parser'); 
const cors = require('cors'); 
const { sequelize } = require('./src/database/models/index'); 
const userRoutes = require('./src/routes/User.routes'); 
const serviceRoutes = require('./src/routes/service.routes'); 
const appointmentRoutes = require('./src/routes/appointment.routes'); 
const availabilityRoutes = require('./src/routes/availability.routes'); 
const serviceImageRoutes = require('./src/routes/serviceImage.routes'); 

const app = express(); 
const port = 3000; 

// Middleware
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