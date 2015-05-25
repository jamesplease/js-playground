import _ from 'underscore';

// In the ES5-world, objects can only have strings as
// properties.

var myObject = {
  name: 'James'
};

// console.log('My name is', myObject.name);

// In ES6 and beyond, we can also use Symbols to
// set property names.

// Create our new Symbol. You can optionally pass it a name,
// but in this case I'm just creating a nameless one. The name
// could be useful for debugging.
var mySymbol = Symbol();

var myOtherObject = {

  name: 'Sam',

  // This is a method that returns true
  [mySymbol]() {
    return true;
  }
};

// We can access the method later if we
// still have access to the symbol
// console.log('True or false?', myOtherObject[mySymbol]());

// The one area I can see these being useful is for implementing a common
// interface in JavaScript without polluting the 'namespace' of your object,
// which you used to have to do by adding properties or methods on the object

// Implementations like `each` will ignore Symbol properties, which makes
// them non-obtrusive
// _.each(myOtherObject, props => {
//   console.log('sup', props);
// });

// You can get all of the symbols by using `Object.getOwnPropertySymbols()`
var otherObjectSymbols = Object.getOwnPropertySymbols(myOtherObject);
// console.log('What do I have?', otherObjectSymbols);
