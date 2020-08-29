const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const PhotoSchema = new Schema({
  thumbnail_url: String,
  url: String,
})

// const skusSchema = new Schema({ any: mongoose.Mixed });

const FeatureSchema = new Schema({
  feature: String,
  value: String,
});

const StyleSchema = new Schema({
  style_id: Number,
  name: String,
  original_price: String,
  sale_price: String,
  'default?': Number,
  photos: [PhotoSchema],
  skus: {},

})

const ProductSchema = new Schema({
  id: Number, 
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String,
  features: [FeatureSchema],
});

const FullStyleSchema = new Schema({
  id: Number,
  styles: [StyleSchema],
})

const Product = mongoose.model('Product', ProductSchema)
const Style = mongoose.model('Style', FullStyleSchema)
module.export = { Product, Style };