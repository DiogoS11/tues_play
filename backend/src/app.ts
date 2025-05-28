import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import playerRoutes from './routes/player';
import matchRoutes from './routes/match';
import playerInMatchRoutes from './routes/player_match';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/players', playerRoutes);
app.use('/api/matches', matchRoutes);
app.use('/api/player_match', playerInMatchRoutes);

app.get('/init', (_, res) => {
  res.send('Together on Tuesdays API 🚀');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
