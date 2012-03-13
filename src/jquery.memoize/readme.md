jQuery memoize plugin
=====================
Plugin provides memoization technique

Usage
-----
    var memoizedFunction = $.memoize(originalFunction, [custom serializer]);

Example
-------
```javascript
// Simple example. Arguments are simple type (string, number, boolean)
var originalFn = function(a, b, c) {
        // do something complex with a, b and c
        return result;
    },
    memoizedFn = $.memoize(originalFn);

var first = memoizedFn(1, "2", true), // originalFn called
    second = memoizedFn(1, "2", true); // originalFn not called

console.log(first === second); // true
```