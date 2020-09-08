const mongoose = require('mongoose');

const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/products', { useNewUrlParser: true, useUnifiedTopology: true });

const FeatureSchema = new Schema({
  feature: String,
  value: String,
});

const ProductSchema = new Schema({
  id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String,
  features: [FeatureSchema],
});

ProductSchema.index({ id: 1 });

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
