import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', async (req: Request, res: Response) => {
  res.send({ message: 'Hello' });
});

app.listen(7001, () => {
  console.log('Server running on localhost: 7001');
});
