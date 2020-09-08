use products
show collections
var numbOfQueries = 500
var randProdStat = new Array(numbOfQueries);
var randStyleStat = new Array(numbOfQueries);
var randIndexes = new Array(numbOfQueries);
for (var i = 0; i < randIndexes.length; i++) {
  randIndexes[i] = Math.floor(Math.random() * 10000000);
}
var startProd = new Date();
randIndexes.forEach((el, idx) => {
  randProdStat[idx] = db.products.find({ id: el }).explain("executionStats").executionStats.executionTimeMillis;
})
var endProd = new Date();
// print("index", randIndexes);
print(`time to complete ${numbOfQueries} Prod queries:`, endProd - startProd, `Ave time: (end - start) / ${numbOfQueries}`, (endProd - startProd) / numbOfQueries);

var startStat = new Date();
randIndexes.forEach((el, idx) => {
  randStyleStat[idx] = db.styles.find({ product_id: el }).explain("executionStats").executionStats.executionTimeMillis;
})
var endStat = new Date();
// print("index", randIndexes);
print(`time to complete ${numbOfQueries} Styles queries:`, endStat - startStat, `Ave time: (end - start) / ${numbOfQueries}`, (endStat - startStat) / numbOfQueries);

var prodBar = randProdStat.reduce((acc, cur) => acc + cur) / numbOfQueries;
var styleBar = randStyleStat.reduce((acc, cur) => acc + cur) / numbOfQueries;
print("prodBar", prodBar, "StyleBar", styleBar);