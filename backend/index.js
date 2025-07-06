import express from 'express';
import cors from 'cors';
import users from './user.js'; // Importing the users data

const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:3001', // 👈 your frontend origin
}));


app.get('/', (req, res) => {
    res.send('server is running');
    });

app.get('/api/user', (req, res) => {
    res.send(users);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});