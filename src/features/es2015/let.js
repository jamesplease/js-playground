// `let` is like `var`, but without the (unusually unintended) consequences.
// The tl;dr is that `let` is block-scoped and isn't hoisted.

// To see how it's block-scoped, consider writing a loop...
for (var i = 0; i < 3; i++) {
  // console.log('i:', i);
}

// `i` has leaked outside of the loop
// console.log('i', typeof i);

// With let, you can keep this from happening
for (let j = 0; j < 3; j++) {
  // console.log('j:', j);
}

// console.log('j?', typeof j);
