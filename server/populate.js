const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Product = require('./db/model');
 
mongoose.connect('mongodb://0.0.0.0:27017/Ecomm')
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

const seedDB = async () => {
  const productsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'products.json'), 'utf-8'));
  await Product.deleteMany({});
  await Product.insertMany(productsData);
  console.log('Database seeded successfully');
};

seedDB().then(() => {
  mongoose.connection.close();
});
