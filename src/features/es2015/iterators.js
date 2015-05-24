// // need to construct a String object explicitly to avoid auto-boxing
// var someString = new String('hi');

// someString[Symbol.iterator] = function() {
//   return {
//     next: function() {
//       if (this._first) {
//         this._first = false;
//         return {value: 'bye', done: false};
//       } else {
//         return {done: true};
//       }
//     },
//     _first: true
//   };
// };

// console.log('what hello', [...someString]);
