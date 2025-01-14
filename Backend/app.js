const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
// const helmet = require('helmet');
const DBconnect = require('./config/data');
const userRoutes = require('./router/user.router');
const captainRoutes=require('./router/captain.router')
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(helmet());



app.get('/', (req, res) => {
  res.send('Hello, world!');
});
app.use('/users', userRoutes);
app.use('/captains',captainRoutes)



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  DBconnect();
});


