import express from 'express'
import * as dotenv from 'dotenv'
/** Interfaces & Types */
import type { Express } from 'express'
/** Modules */
import appDataSource from './config/database';

dotenv.config();

/** Variables */
const app: Express = express();
const port: string | undefined = process.env.EXPRESS_PORT;

app.listen(port, async () => {
    console.log(`[SERVER]: Application running on port ${port}`)
    /** Config Database */
    await appDataSource.initialize();
});