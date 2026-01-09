exports.getAllProducts = async (req, res) => {
  res.json([
    {
      id: 'p-001',
      name: 'iPhone 15',
      price: 35000,
      stock: 10
    }
  ]);
};

exports.getProductById = async (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'iPhone 15',
    price: 35000,
    stock: 10
  });
};
