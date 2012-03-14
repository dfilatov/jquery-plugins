jQuery observable plugin
========================
Plugin provides very fast (doubly linked list based) implementation of observable pattern.

Usage
-----
```javascript
var observable = new $.observable();

// Subscribing on event
observable.on(event, [data], callback, [context]);

// Subscribing on some events
observable.on(
    {
        event1 : callback1,
        event2 : callback2,
        ...
        eventN : callbackN
    },
    [context]);

// Subscribing only on first time the event occurs. Callback is unsubscribed after that.
observable.once(event, [data], callback, [context]);