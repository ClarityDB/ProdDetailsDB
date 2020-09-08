const fs = require('fs');
const faker = require('faker');

const qty = 10000000;

// caching random responses for later use
const randNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const attributes = {
  names: [],
  slogans: [],
  descriptions: [],
  category: [],
  defPrice: [],
  maxValue: 5000,
};

for (let i = 0; i < attributes.maxValue; i++) {
  const numOfDesWords = randNum(15, 60);
  attributes.names.push(faker.commerce.productName());
  attributes.slogans.push(faker.lorem.sentence());
  attributes.descriptions.push(faker.random.words(numOfDesWords));
  attributes.category.push(faker.commerce.department());
  attributes.defPrice.push(faker.random.number());
}

const genProduct = (quantity) => {
  const outProd = fs.createWriteStream('./DataBase/productListData.json', { flags: 'a' });
  try {
    // const productsList = [];
    let numOfFeatures;
    let featuresArray;
    for (let i = 0; i < quantity; i++) {
      numOfFeatures = randNum(0, 5);
      featuresArray = [];
      for (let f = 0; f < numOfFeatures; f++) {
        featuresArray.push({
          feature: faker.hacker.noun(),
          value: faker.lorem.word(),
        });
      }

      let curProd = {
        id: i,
        name: attributes.names[randNum(0, attributes.maxValue)],
        slogan: attributes.slogans[randNum(0, attributes.maxValue)],
        description: attributes.descriptions[randNum(0, attributes.maxValue)],
        category: attributes.category[randNum(0, attributes.maxValue)],
        default_price: `${attributes.defPrice[randNum(0, attributes.maxValue)]}`,
        features: featuresArray,
      };

      // productsList.push(curProd);
      // write in JSON file
      if (i === 0) {
        outProd.write(`[\n${JSON.stringify(curProd)}`);
      } else if (i < qty - 1) {
        outProd.write(`,\n${JSON.stringify(curProd)}`);
      } else {
        outProd.write(`,\n${JSON.stringify(curProd)}\n]`);
      }
      if (i % 100000 === 0 || i === quantity - 1) {
        console.log('prod', i);
      }
    }
  } catch (err) {
    console.log(err);
  }
  outProd.end();
};

const start = Date.now();
genProduct(qty);
const prodEnd = Date.now();

console.log('prod time: ', prodEnd - start);
