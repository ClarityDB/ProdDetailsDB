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

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;

// const testProd = new Product(
//   {
//     id: 2,
//     name: "lynn",
//     slogan: "I dont know but ",
//     description: "Awesome stuff I dont know but I love it! It is just amazing!!!!!!!!!!",
//     category: "good",
//     default_price: "10",
//     features: [
//       {
//         feature: "heart",
//         value: "goldenjfdkl",
//       },
//       {
//         feature: "fights like",
//         value: "wonder woman",
//       },
//       {
//         feature: "better than",
//         value: "everyone",
//       }
//     ]
//   }
// )

// testProd.save().then((data) => console.log(data));
