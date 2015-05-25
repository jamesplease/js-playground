// Sets and Maps are two new native implementations of
// common algorithms.

// Sets are like arrays, except there can't be repeats
var mySet = new Set();
mySet.add('James').add('Sam').add('James');
// console.log('How many names?', mySet.size);

// Maps allow you to associate any object with any key. Imagine
// if you could make an object where one of the properties is
// ANOTHER object.
var myMap = new Map();
var mapKey = {};
myMap.set(mapKey, 'Lala');
// console.log('The result:', myMap.get(mapKey));

// Weak Maps and Weak Sets are the exact same way, except
// they only allow for members that have other references.
// Otherwise, they are ignored.

var myWeakSet = new WeakSet();

// The mapKey has a reference in the above `myMap`, so it remains
// in the set.
myWeakSet.add(mapKey);

// But just setting any old object will not store the reference.
myWeakSet.add({});

// console.log('Does my weakSet have `mapKey`?', myWeakSet.has(mapKey));

// Because there's no other reference to our object...it's difficult
// to verify that it isn't held! I suppose we just have to trust Babel
// on this one :)
