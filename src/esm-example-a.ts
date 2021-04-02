// These `esm-example*` files exist to demonstrate how "go to definition" behaves for .ts files
// using native import/export syntax.

import {bar as baz} from './esm-example-b';

// GOOD: "Go to definition" goes to `function foo()`.  I believe allowJs should do the same.
baz();