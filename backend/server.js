import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import projectRoutes from './routes/projectRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/projects', projectRoutes);

app.listen(5000, () => {
    console.log(`Server running on port 5000`);

})