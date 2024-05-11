import express from 'express'
import * as dotenv from 'dotenv'
/** Interfaces & Types */
import type { Express } from 'express'

dotenv.config();

/** Variables */
const app: Express = express();
const port: string | undefined = process.env.EXPRESS_PORT;

app.listen(port, () => console.log(`Asi fue en el ${port}`))