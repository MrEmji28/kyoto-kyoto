import dotenv from 'dotenv';


dotenv.config({ path: '.env' });

interface Config {
    JWT_SECRET: string | undefined;
    PORT: string | number;
}

export const config: Config = { 
    JWT_SECRET: process.env.JWT_SECRET, 
    PORT: process.env.PORT || 3001 
};