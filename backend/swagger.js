const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')


const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'Backend',
      version: '1.0.0',
    },
    servers:[
        {
            url: 'http://localhost:5000',
            description: 'server api port 5000'
        }
    ]
  };
  
  const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['./routes/*.js'],
  };
  
  const swaggerSpec = swaggerJSDoc(options);

  module.exports = {swaggerUi,swaggerSpec}