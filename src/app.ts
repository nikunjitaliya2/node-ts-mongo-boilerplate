import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import userRoutes from './modules/user/routes/user.routes';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/api/users', userRoutes);

export default app;