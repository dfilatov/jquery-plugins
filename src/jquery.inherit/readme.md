jQuery inherit plugin
=====================
Plugin provides "class" and inheritance implementation.
It brings some syntax sugar for "class" declarations, constructors, "super" calls and static members.

Usage
-----
    var MyClass = $.inherit([myBaseClass], props, [staticProps]);

Example
-------
```javascript
// base "class"
var A = $.inherit(/** @lends A.prototype */{
    __constructor : function(property) { // constructor
        this.property = property;
    },

    getProperty : function() {
        return this.property + ' of instanceA';
    },

    getType : function() {
        return 'A';
    },

    getStaticProperty : function() {
        return this.__self.staticMember; // access to static
    }
}, /** @lends A */ {
    staticProperty : 'staticA',

    staticMethod : function() {
        return this.staticProperty;
    }
});

// inherited "class" from A
var B = $.inherit(A, /** @lends B.prototype */{
    getProperty : function() { // overriding
        return this.property + ' of instanceB';
    },

    getType : function() { // overriding + "super" call
        return this.__base() + 'B';
    }
}, /** @lends B */ {
    staticMethod : function() { // static overriding + "super" call
        return this.__base() + ' of staticB';
    }
});

var instanceOfB = new B('property');

instanceOfB.getProperty(); // returns 'property of instanceB'
instanceOfB.getType(); // returns 'AB'
B.staticMethod(); // returns 'staticA of staticB'
```
