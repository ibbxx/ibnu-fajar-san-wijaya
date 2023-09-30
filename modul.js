// Fungsi untuk menghitung luas persegi
function calculateSquareArea(side) {
    return side * side;
  }
  
  // Fungsi untuk menghitung keliling persegi
  function calculateSquarePerimeter(side) {
    return 4 * side;
  }
  
  // Fungsi untuk menghitung luas persegi panjang
  function calculateRectangleArea(length, width) {
    return length * width;
  }
  
  // Fungsi untuk menghitung keliling persegi panjang
  function calculateRectanglePerimeter(length, width) {
    return 2 * (length + width);
  }
  
  module.exports = {
    calculateSquareArea,
    calculateSquarePerimeter,
    calculateRectangleArea,
    calculateRectanglePerimeter,
  };
  