/* eslint-disable */

var express = require("express");
var app = express();
const path = require("path");
const PORT = 3001;
const Product = require("./DataBase/prodListModel.js");
const Style = require("./DataBase/stylesModel.js");

app.use(express.static(path.join(__dirname, "./client/public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/products/list', (req, res) => {
//   Product
//     .find({})
//     .exec()
//     .then((data) => {
//       data.forEach(obj => {
//         delete obj.features
//       })
//       res.status(200).send(data)
//     })
//     .catch((err) => console.log("err"))
// });

app.get('/products/:product_id', (req, res) => {
  let curID = req.params.product_id;
  Product
    .find({id: curID})
    .exec()
    .then((data) => {
      res.status(200).send(data[0])
    })
});

app.get('/products/:product_id/styles', (req, res) => {
  let curID = req.params.product_id;
  Style
    .find({product_id:curID})
    .exec()
    .then((data) => {
      let styleData = {
        product_id: data[0].product_id,
        results: data[0].results,
      }
      res.status(200).send(
        styleData
      );
    })
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});