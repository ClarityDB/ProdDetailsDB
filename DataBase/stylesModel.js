const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/products', { useNewUrlParser: true, useUnifiedTopology: true });

const PhotoSchema = new Schema({
  thumbnail_url: String,
  url: String,
})

const StyleSchema = new Schema({
  style_id: Number,
  name: String,
  original_price: String,
  sale_price: String,
  'default?': Number,
  photos: [PhotoSchema],
  skus: {},

})


const FullStyleSchema = new Schema({
  product_id: Number,
  results: [StyleSchema],
})

const Style = mongoose.model('Style', FullStyleSchema)

module.exports = Style;

// const testStyle = new Style(
//   {
//     product_id: 1,
//     results: [
//       {
//         style_id: 1,
//         name: "idk",
//         original_price: "100",
//         sale_price: "0",
//         'default?': 1,
//         photos: [
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=8aae34cf35df31a592f0bef16e6342ef',
//             url: "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515",
//           }, {
//             thumbnail_url: 'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=8aae34cf35df31a592f0bef16e6342ef',
//             url: "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515",
//           }
//         ],
//         skus: {
//           "XS": 12,
//           "S": 42,
//           "M": 112,
//           "L": 212,
//           "XL": 22,
//         },

//       },
//       {
//         style_id: 2,
//         name: "idkandmore",
//         original_price: "100",
//         sale_price: "0",
//         'default?': 0,
//         photos: [
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=8aae34cf35df31a592f0bef16e6342ef',
//             url: "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515",
//           }
//         ],
//         skus: {
//           "XS": 15,
//           "S": 13,
//           "M": 12,
//           "L": 11,
//           "XL": 120,
//         },

//       },
//       {
//         style_id: 3,
//         name: "idkadult",
//         original_price: "200",
//         sale_price: "150",
//         'default?': 0,
//         photos: [
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=8aae34cf35df31a592f0bef16e6342ef',
//             url: "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515",
//           }
//         ],
//         skus: {
//           "XS": 20,
//           "S": 30,
//           "M": 40,
//           "L": 50,
//           "XL": 60,
//         },

//       },
//       {
//         style_id: 4,
//         name: "moreadult",
//         original_price: "201",
//         sale_price: "199",
//         'default?': 0,
//         photos: [
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=8aae34cf35df31a592f0bef16e6342ef',
//             url: "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515",
//           }
//         ],
//         skus: {
//           "XS": 15,
//           "S": 41,
//           "M": 31,
//           "L": 21,
//           "XL": 11,
//         },

//       }
//     ],
//   }
// )

// testStyle.save().then(() => console.log('fired'));
