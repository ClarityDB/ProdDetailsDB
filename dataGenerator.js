const Product = require('./DataBase/prodListModel.js');
const Style = require('./DataBase/stylesModel.js');
var faker = require('faker');

const quantity = 4;

const seedProduct = (quantity) => {
  try {

    const productsList = []

    for (let i = 0; i < quantity; i++) {
      const numOfDesWords = Math.floor(Math.random() * (60 - 15) + 15);
      const numOfFeatures = Math.floor(Math.random() * 5);
      const featuresArray = [];
      for (var f = 0; f < numOfFeatures; f++) {
        featuresArray.push({
          feature: faker.hacker.noun(),
          value: faker.lorem.word(),
        })
      }

      productsList.push(
        new Product(
          {
            id: i,
            name: faker.commerce.productName,
            slogan: faker.lorem.sentence,
            description: faker.random.words(numOfDesWords),
            category: faker.commerce.department(),
            default_price: `${faker.random.number()}`,
            features: featuresArray,
          }
        )

      )

    }
    console.log(productsList)

  } catch (err) {
    console.log(err)
  }
}

const seedStyle = (quantity) => {
  try {

    const styleResults = []

    for (let i = 0; i < quantity; i++) {
      
      styleResults.push(
        new Style({
          product_id: 1,
          results: [],
        })
      )
      
      const numOfStyles = Math.floor(Math.random() * (7)) + 1;
      for (var s = 1; s < numOfStyles; s++) {
        
        const ogPrice = faker.commerce.price()
        const discount = (Math.random() < .7) ? 0 : Math.floor(Math.random() * (ogPrice));
        const numOfPhotos = Math.floor(Math.random() * 10);
        let photoArray = [];
        
        for (var f = 0; f < numOfPhotos; f++) {
          let URL = faker.image.imageUrl();
          photoArray.push({
            thumbnail_url: URL,
            url: URL,
          })
        }


        styleResults[i].results.push(
          {
            style_id: s,
            name: faker.hacker.phrase(),
            original_price: `${ogPrice}`,
            sale_price: `${discount}`,
            'default?': (s === 0) ? 1 : 0,
            photos: photoArray,
            skus: {},
          }
        )

      }

    }
    console.log(styleResults, styleResults[0].results)

  } catch (err) {
    console.log(err)
  }
}


seedStyle(quantity)
