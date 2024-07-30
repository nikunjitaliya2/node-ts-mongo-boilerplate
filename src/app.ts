import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import userRoutes from './modules/user/routes/user.routes';
import path from "path";
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger-output.json';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use('*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, '../public', 'default.html'));
});

export default app;