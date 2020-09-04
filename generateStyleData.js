/* eslint-disable no-plusplus */
const fs = require('fs');
const faker = require('faker');

const qty = 1000000;

const randNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const genStyle = (quantity) => {
  const outStyle = fs.createWriteStream('./DataBase/stylesData1000000.json', { flags: 'a' });
  try {
    let batchStyleResults = [];

    for (let i = 0; i < quantity; i++) {
      const curStyle = {
        product_id: i,
        results: [],
      };
      const numOfStyles = Math.floor(Math.random() * (7)) + 2;
      for (let s = 1; s < numOfStyles; s++) {
        const ogPrice = `${faker.random.number()}`;
        const discount = (Math.random() < 0.7) ? 0 : randNum(1, ogPrice * 0.9);
        const numOfPhotos = randNum(1, 7);
        const photoArray = [];
        for (let f = 0; f < numOfPhotos; f++) {
          const urlLoc = faker.image.imageUrl();
          photoArray.push({
            thumbnail_url: urlLoc,
            url: urlLoc,
          });
        }

        const skuData = (Math.random() > 0.25) ? {
          XS: randNum(0, 20),
          S: randNum(0, 20),
          M: randNum(0, 20),
          L: randNum(0, 20),
          XL: randNum(0, 20),
          XXL: randNum(0, 20),
        } : {
          6: randNum(0, 20),
          6.5: randNum(0, 20),
          7: randNum(0, 20),
          7.5: randNum(0, 20),
          8: randNum(0, 20),
          8.5: randNum(0, 20),
          9: randNum(0, 20),
          9.5: randNum(0, 20),
          10: randNum(0, 20),
        };

        curStyle.results.push(
          {
            style_id: s,
            name: faker.random.words(randNum(1, 4)),
            original_price: `${ogPrice}`,
            sale_price: `${discount}`,
            'default?': (s === 1) ? 1 : 0,
            photos: photoArray,
            skus: skuData,
          },
        );
      }

      batchStyleResults.push(JSON.stringify(curStyle));
      // write in JSON file
      if (i === 0) {
        outStyle.write(`[\n${batchStyleResults.join(',\n')},\n`);
        batchStyleResults = [];
      } else if (i === qty - 1) {
        outStyle.write(`${batchStyleResults.join(',\n')}\n]`);
        batchStyleResults = [];
      } else if (i % 50000 === 0) {
        outStyle.write(`${batchStyleResults.join(',\n')},\n`);
        console.log('style: ', i);
        batchStyleResults = [];
      }
    }
  } catch (err) {
    console.log(err);
  }
  outStyle.end();
};

const start = Date.now();
genStyle(qty);
const styleEnd = Date.now();
console.log('style time: ', styleEnd - start);
