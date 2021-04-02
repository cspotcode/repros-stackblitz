// BUG: "Find references" on the local `foo` in this file does not include anything from `index.js`
// BUG: "Find references" on the `foo` in `exports.foo` in this file does not include anything; jumps to self.
// GOOD: "Go to definition" on the `foo` in `exports.foo` in this file jumps to `async function foo`

exports.foo = foo;
/** jsdoc here */
async function foo() {}

foo();