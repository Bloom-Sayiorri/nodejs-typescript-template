import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!! + Typescript');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
