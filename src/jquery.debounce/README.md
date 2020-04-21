## Source

Can be found here: https://github.com/dfilatov/jquery-plugins/tree/master/src/jquery.debounce
Repository: https://github.com/dfilatov/jquery-plugins

## Debouncing

```js
debouncedFn = $.debounce(fn, timeout, [invokeAsap], [context]);
```

Options
-------

- `fn`

  Original function.

- `timeout`

  Delay.

- `invokeAsap`

  True/false, false by default. Parameter indicating which of the above debouncing options should be used (the first is used by default).

- `context`

  Context of the original function.

## Throttling

```js
throttledFn = $.throttle(fn, period, [context]);
```

Options
-------

- `fn`

  Original function.

- `period`

  Period.

- `context`

  Context of the original function.

### LICENSE

Dual licensed under the MIT and GPL licenses:
- https://opensource.org/licenses/mit-license.php
- https://www.gnu.org/licenses/gpl.html
