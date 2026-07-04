require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http'); 
const { Server } = require('socket.io');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./config/swagger'); 
const authRoutes = require('./routes/authRoutes');
const medicationRoutes = require('./routes/medicationRoutes');
const logRoutes = require('./routes/logRoutes');
const loggerMiddleware = require('./middleware/loggerMiddleware');


const app = express();
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);


const io = new Server(server, {
  cors: {
    origin: "*",

    methods: ["GET", "POST"]
  }


});

app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api/auth', authRoutes);
app.use('/api/medications', medicationRoutes);
app.use('/api', logRoutes);

io.on('connection', (socket) => {
  console.log(`User connected via socket: ${socket.id}`);

  socket.on('join_private_room', (roomName) => {
    socket.join(roomName);
    console.log(`Socket ${socket.id} joined private room: ${roomName}`);
  });

 
  socket.on('send_private_message', (data) => {
    console.log("Private message sent to room:", data.room);
   
    socket.to(data.room).emit('receive_private_message', data);
  });

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});


server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API Documentation available at http://localhost:${PORT}/api-docs`);
});