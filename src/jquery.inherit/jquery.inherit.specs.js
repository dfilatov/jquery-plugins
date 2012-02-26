describe('jquery.inherit specs', function() {

    it('should be valid instance\'s properties', function() {
        var A = $.inherit({
            __constructor : function(val) {
                this.prop = val;
            }
        });

        expect(new A('test').prop).toBe('test');
        expect(new A('other').prop).toBe('other');
    });

    it('should be valid instanceOf value', function() {
        var A = $.inherit({}),
            B = $.inherit(A, {});

        expect(new A() instanceof A).toBeTruthy();
        expect(new A() instanceof B).toBeFalsy();
        expect(new B() instanceof A).toBeTruthy();
        expect(new B() instanceof B).toBeTruthy();
    });

    it('should be used constructor\'s result', function() {
        var A = $.inherit({}),
            B = $.inherit({
                __constructor : function() {
                    return new A();
                }
            });

        expect(new B() instanceof A).toBeTruthy();
    });

    it('should __self property contains constructor', function() {
        var A = $.inherit({}),
            B = $.inherit(A, {});

        expect(new A().__self).toBe(A);
        expect(new B().__self).toBe(B);
    });

    it('should be properties inherited', function() {
        var A = $.inherit({
                method1 : function() {
                    return 'A';
                }
            }),
            B = $.inherit(A, {
                method2 : function() {
                    return 'B';
                }
            });

        expect(new A().method2).toBeUndefined();
        expect(new B().method1()).toEqual('A');
    });

    it('should be static properties inherited', function() {
        var A = $.inherit({}, {
                method1 : function() {
                    return 'A';
                }
            }),
            B = $.inherit(A, {}, {
                method2 : function() {
                    return 'B';
                }
            });

        expect(A.method2).toBeUndefined();
        expect(B.method1()).toEqual('A');
    });

    it('should be properties overrided', function() {
        var A = $.inherit({
                method : function() {
                    return 'A';
                }
            }),
            B = $.inherit(A, {
                method : function() {
                    return 'B';
                }
            });

        expect(new A().method(), 'A');
        expect(new B().method(), 'B');
    });

    it('should be static properties overrided', function() {
        var A = $.inherit({}, {
                method : function() {
                    return 'A';
                }
            }),
            B = $.inherit(A, {}, {
                method : function() {
                    return 'B';
                }
            });

        expect(A.method(), 'A');
        expect(B.method(), 'B');
    });

    it('should be allowed for base call', function() {
        var A = $.inherit({
                method1 : function() {
                    return 'A';
                }
            }),
            B = $.inherit(A, {
                method1 : function() {
                    return this.__base() + 'B';
                },
                method2 : function() {
                    return this.__base() + 'B2';
                }
            }),
            C = $.inherit(B, {
                method1 : function() {
                    return this.__base() + 'C';
                }
            });

        expect(new C().method1()).toBe('ABC');
        expect(new C().method2()).toBe('undefinedB2');
    });

    it('should be allowed for static base call', function() {
        var A = $.inherit({}, {
                method1 : function() {
                    return 'A';
                }
            }),
            B = $.inherit(A, {}, {
                method1 : function() {
                    return this.__base() + 'B';
                },
                method2 : function() {
                    return this.__base() + 'B2';
                }
            }),
            C = $.inherit(B, {}, {
                method1 : function() {
                    return this.__base() + 'C';
                }
            });

        expect(C.method1()).toBe('ABC');
        expect(C.method2()).toBe('undefinedB2');
    });

});