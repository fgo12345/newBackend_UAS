const swaggerJsDoc = require('swagger-jsdoc');
const path = require('path');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Medical Tracker API',
      version: '1.0.0',
      description: 'API documentation for the backend system',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },

      {
        url: 'https://uasbackend-production-3bed.up.railway.app', 
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  
  apis: ['./routes/authRoutes.js',
    './routes/logRoutes.js',
    './routes/medicationRoutes.js'], 
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;