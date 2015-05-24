// Iterators are not only a new feature to JavaScript, but they're also
// a new *type* of feature. They are a collection of two interfaces that cause JavaScript
// objects to behave a particular way in certain situations.
//
// The quintessential example of this is perhaps the for...of loop,
// which 'iterates' through objects that implement the Iterator interface,
// outputting each value in sequence. Another example is the spread operator.

// Because iterators are just an interface, anything can become an Iterator –
// even a plain old object.
var iteratable = {

  // We begin by adhering to the Iterable interface. This interface
  // requires that our object have a special method on it: `[Symbol.iterator]`.
  // `Symbol.iterator` is a special built-in Symbol.
  [Symbol.iterator]() {
    let done = false;
    let value = 0;

    // Per the `iteratable` interface, our `[Symbol.iterator]` method
    // needs to return an object that adheres to the other interface, the
    // `iterator` interface. The `iterator` interface requires that we
    // return an object with a `next` method.
    return {
      next() {

        // This method, in turn, needs to return an object with two
        // properties: `done` and `value`. Done lets us know when the iterator
        // is complete, and `value` is the value of that iteration.

        // In this situation, we add `10` to our value until it's greater than 100.
        if (value >= 100) {
          done = true;
        } else {
          value += 10;
        }
        return {done, value};
      }
    };
  }
};

// The new spread operator adheres to the Iterator interface, so we can now
// spread this object out! Pretty nifty.
// console.log([...iteratable]);

// Generators can be used to simplify the creation of iterators. The same code
// above can be written as...
var simpleIterator = {

  [Symbol.iterator]: function*() {
    let value = 0;
    while(value < 100) {
      value += 10;
      yield value;
    }
  }
}

// console.log('simpler iterator:', [...simpleIterator]);

// The list of things that expect iterators are:
// Map(), WeakMap(), Set(), WeakSet()
// Promise.all(), Promise.race(), Array.from()
// for-of loops, spread operators, yield*

