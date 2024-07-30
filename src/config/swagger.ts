import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        title: 'Your API',
        description: 'API documentation for your project',
        version: '1.0.0',
    },
    host: 'localhost:3001',
    servers: [
        {
            "url": "http://localhost:3001",
            "variables": {}
        },
    ],
    basePath: '/',
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            name: 'User',
            description: 'User management endpoints',
        },
        {
            name: 'Auth',
            description: 'Authentication endpoints',
        },
        // Add more tags as needed
    ],
    securityDefinitions: {
        bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
        },
    },
};

const outputFile = './src/swagger-output.json';
const endpointsFiles = [
    '../modules/user/routes/*.ts',
];

swaggerAutogen(outputFile, endpointsFiles, doc);