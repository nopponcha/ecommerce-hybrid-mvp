
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/user.routes');

const app = express();
app.use(cors());
app.use(express.json());

// health check
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'user-service',
    timestamp: new Date().toISOString()
  });
});

app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`User service running on port ${PORT}`);
});