// // My favorite use of destructuring is pulling out values from
// an `options` object passed into a method
var orderShirt = function(options) {
  let {color, size} = options;
  console.log('Options:', color, size);
};

// orderShirt({
//   color: 'blue',
//   size: 'L'
// });

// 
var increaseValues = function(numOne, numTwo) {
  let [largerOne, largerTwo] = [numOne + 2, numTwo + 3];
  console.log('Original:', numOne, numTwo);
  console.log('New:', largerOne, largerTwo);
};
// increaseValues(2, 5);
