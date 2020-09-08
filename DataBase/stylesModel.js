const mongoose = require('mongoose');

const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/products', { useNewUrlParser: true, useUnifiedTopology: true });

const PhotoSchema = new Schema({
  thumbnail_url: String,
  url: String,
});

const StyleSchema = new Schema({
  style_id: Number,
  name: String,
  original_price: String,
  sale_price: String,
  'default?': Number,
  photos: [PhotoSchema],
  skus: {},

});

const FullStyleSchema = new Schema({
  product_id: Number,
  results: [StyleSchema],
});

FullStyleSchema.index({ product_id: 1 });

const Style = mongoose.model('Style', FullStyleSchema);

module.exports = Style;
