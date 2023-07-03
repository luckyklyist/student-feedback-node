import { Express } from "express";
import swaggerJSDoc, { Options } from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions: Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Studnet feedback API',
            version: '1.0.0',
            description: 'Documentation for the student feedback api'
        },
    },
    apis: ['../routes/*.ts']
}

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default (app: Express): void => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};