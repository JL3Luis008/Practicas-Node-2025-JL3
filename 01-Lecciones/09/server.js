const express = require('express');
const connectDB = require('./src/config/database');
const TaskRoutes = require('./src/routes/taskRoutes');

const app = express();
const PORT = 3000;

connectDB(app);

app.use(express.json());

app.get('/',(req, res)=>{
res.send('Welcome to task API');
});

app.use('/api', TaskRoutes);

app.listen(PORT, ()=> {
    console.log(`Server running on http://localhost:${PORT}`);
});