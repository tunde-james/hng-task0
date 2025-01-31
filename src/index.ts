import express, { Request, Response } from 'express';
import cors from 'cors';

import myUserRoute from './routes/my-user-route';

const PORT = process.env.PORT || 7000;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/my/user', myUserRoute);

app.listen(PORT, () => {
  console.log('Server running on localhost: 7000');
});
