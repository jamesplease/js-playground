// Generators simplify the creation of iterators. Understanding
// generators is much easier in the context of iterators, so I
// encourage you to study those first.
function* firstGenerator(i = 2) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
  return 'All done!';
}

// Create an iterator from a generator
var iterator = firstGenerator(0);

// Call it a few times to see the values of yield
// console.log('Yield values:', iterator.next(), iterator.next(), iterator.next());

// Later, we can see that the return value will only be returned once.
// Subsequent calls to the generator return `undefined`.
// console.log('Return values:', iterator.next(), iterator.next());

// The same generator can be used to create another iterator...hence the name.
var anotherIterator = firstGenerator(0);

// console.log('Yield once again...', anotherIterator.next(), anotherIterator.next());

// Generators needn't terminate. By using an infinite loop, they can
// be made to always return the same value.
function* neverEndingGenerator() {
  yield 3;
  yield 2;
  yield 1;

  while(true) {
    yield 'This will never stop!';
  }
}

var neverEnding = neverEndingGenerator();

// console.log('Counting down:', neverEnding.next(), neverEnding.next(), neverEnding.next());
// console.log('Some values!', neverEnding.next(), neverEnding.next(), neverEnding.next());

// The last interesting thing about generators is that you can continue to pass information
// into them when you call `next`.

// This generator will initially return (input + 1). As you call next, passing in new
// values, it will add an additional value to what you pass in.
function* someGenerator(input) {
  input = yield input + 1;
  input = yield input + 2;
  input = yield input + 3;
}

// Let's start by passing in 5. The first value returned will be (5 + 1)
var adder = someGenerator(5);

// Log out our first value: `5 + 1`. One thing to note is that the
// first time you call `next`, you don't need to pass in a value. The
// initial value was already passed in when you created the iterator,
// so the value passed into the first `next` will be ignored.
// console.log('First value:', adder.next());

// Now we add a second, third, and fourth value. Eventually we get undefined.
// console.log('Second value:', adder.next(50));
// console.log('Third value:', adder.next(200));
// console.log('Fourth value:', adder.next(5000));
