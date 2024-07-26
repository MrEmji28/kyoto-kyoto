import express, { type Request, type Response } from 'express';
import { config } from './secret';


const app = express();

//config 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
// app.use('/api', require('./routes/api'));

//default route

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

//server

app.listen(config.PORT, () => {
    console.log(`Server is running on http://localhost:${config.PORT}`);
});



