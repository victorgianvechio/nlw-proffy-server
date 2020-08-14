import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(routes);

app.listen(3333);

app.listen(() => {
  console.log('Server is running on port 3333');
});