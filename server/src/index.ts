import express, { type Request, type Response } from 'express';
import { config } from './secret';
import { authRoutes } from './routes/authRoutes'
import { userRoutes } from './routes/userRoutes';



const app = express();

//api routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);



//middlewares


//default route

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

//server

app.listen(config.PORT, () => {
    console.log(`Server is running on http://localhost:${config.PORT}`);
});



