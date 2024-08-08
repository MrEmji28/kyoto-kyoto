import express, { type NextFunction, type Request, type Response } from 'express';
import { config } from './secret';
import { authRoutes } from './routes/authRoutes'
import { userRoutes } from './routes/userRoutes';
import cors from 'cors';
import bodyParser from 'body-parser';



const app = express();

//api routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);



//middlewares
app.use(cors()); //Enable CORS
app.use(bodyParser.json()); //Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));//Parse URL encodede bodies


//default route

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

//Global error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!')
})

//server 
app.listen(config.PORT, () => {
    console.log(`Server is running on http://localhost:${config.PORT}`);
});




