const express = require('express');
const mongoose = require('mongoose');
const myRoutes = require('./routes');
const app = express();
app.use(express.json());
app.use((req, res, next) => {
  req.user = { id: '666ee123c4b2a123456789ab' }; 
  next();
});
const localMongoURI = 'mongodb://localhost:27017/wellbits_testing';
mongoose.connect(localMongoURI)
  .then(() => console.log('Connected to Database Successfully'))
  .catch((err) => console.log('Database note: Running in offline testing mode'));

app.use('/api', myRoutes);
app.get('/', (req, res) => {
  res.send('Your WellBits Subsystem Server is Awake and Running');
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
