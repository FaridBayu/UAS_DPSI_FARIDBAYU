// app.js
const express = require('express');
const dotenv = require("dotenv");
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authroutes');
const wisataRoutes = require('./routes/wisataroutes');
const app = express();

app.use(express.json());
app.use(cors({
  origin: '*', // Updated origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(bodyParser.json());
dotenv.config();
// routes code here
app.use('/api/auth', authRoutes);
app.use('/api/wisata', wisataRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
