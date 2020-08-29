import Product from "./DataBase/prodListModel.js";
var faker = require('faker');

export const seedProduct = async () => {
  try {

    const quantity = 10
    const productsList = []
    const numOfDesWords = Math.floor(Math.random() * (60 - 15) + 15);
    
    for (let i = 0; i < quantity; i++) {
      productsList.push(
        new Product(
          {
            id: i,
            name: faker.commerce.productName,
            slogan: faker.lorem.sentence,
            description: faker.random.words(numOfDesWords),
            category: faker.commerce.department(),
            default_price: `${faker.random.number()}`,
            // 0-5 features
          }
        )
      )
      
    }
    console.log(productsList)

  } catch (err) {
    console.log(err)
  }
}

seedProduct()
