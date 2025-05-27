import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import playerRoutes from './routes/player';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/players', playerRoutes);

app.get('/init', (_, res) => {
  res.send('Together on Tuesdays API 🚀');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
