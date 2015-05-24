import './features/classes';
import './features/common-algorithms';
import './features/comprehensions';
import './features/decomposition';
import './features/generators';
import './features/iterators';
import './features/let';
import './features/reflect';
import './features/symbols';

// // var x = y => { return y + 3; };
// // console.log(x(4));

// // class View extends Mn.ItemView {
// //   constructor() {
// //     console.log('hello there');
// //     super();
// //   }
// // }

// // var view = new View();
// // console.log('what pls', view);

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
