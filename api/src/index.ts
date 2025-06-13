import express, { Request, Response } from 'express';
import process from 'node:process';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World! + Typescript');
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
