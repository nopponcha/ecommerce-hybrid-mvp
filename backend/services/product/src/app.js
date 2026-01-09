
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}


require('dotenv').config();
const express = require('express');
const cors = require('cors');

const productRoutes = require('./routes/product.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'product-service',
    timestamp: new Date().toISOString()
  });
});

app.use('/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Product service running on port ${PORT}`);
});
