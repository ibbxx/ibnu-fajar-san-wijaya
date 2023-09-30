// soal1.js

const modul = require('./modul');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('(persegi / persegi panjang): ', (shape) => {
  if (shape === 'persegi') {
    rl.question('Masukkan panjang sisi: ', (side) => {
      const squareArea = modul.calculateSquareArea(parseFloat(side));
      const squarePerimeter = modul.calculateSquarePerimeter(parseFloat(side));

      console.log(`Luas persegi dengan sisi ${side} adalah ${squareArea}`);
      console.log(`Keliling persegi dengan sisi ${side} adalah ${squarePerimeter}`);
      rl.close();
    });
  } else if (shape === 'persegi panjang') {
    rl.question('Masukkan panjang persegi panjang: ', (length) => {
      rl.question('Masukkan lebar persegi panjang: ', (width) => {
        const rectangleArea = modul.calculateRectangleArea(parseFloat(length), parseFloat(width));
        const rectanglePerimeter = modul.calculateRectanglePerimeter(parseFloat(length), parseFloat(width));

        console.log(`Luas persegi panjang dengan panjang ${length} dan lebar ${width} adalah ${rectangleArea}`);
        console.log(`Keliling persegi panjang dengan panjang ${length} dan lebar ${width} adalah ${rectanglePerimeter}`);
        rl.close();
      });
    });
  } else {
    console.log('Pilihan bangun datar tidak valid.');
    rl.close();
  }
});
