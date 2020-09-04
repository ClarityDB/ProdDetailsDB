const { spawn } = require('child_process');

const seedProd = spawn('mongoimport', ['--jsonArray', '--db=products', '--collection=products', '--file=productListData1000000.json']);

seedProd.stdout.on('data', (data) => {
  console.log(`Prod stdout: ${data}`);
});

seedProd.stderr.on('data', (data) => {
  console.log(`Prod stderr: ${data}`);
});

seedProd.on('error', (error) => {
  console.log(`Prod stdout: ${error.message}`);
});

seedProd.on('close', (code) => {
  console.log(`Prod child process exited with code: ${code}`);
});

const seedStyles = spawn('mongoimport', ['--jsonArray', '--db=products', '--collection=styles', '--file=stylesData1000000.json']);

seedStyles.stdout.on('data', (data) => {
  console.log(`Styles stdout: ${data}`);
});

seedStyles.stderr.on('data', (data) => {
  console.log(`Styles stderr: ${data}`);
});

seedStyles.on('error', (error) => {
  console.log(`Styles stdout: ${error.message}`);
});

seedStyles.on('close', (code) => {
  console.log(`Styles child process exited with code: ${code}`);
});
