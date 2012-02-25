describe('jquery.memoize specs', function() {

    var spy, fn, memoizedFn;
    beforeEach(function() {
        spy = jasmine.createSpy();
        fn = function(p1, p2) {
            spy();
            return p1 + p2;
        };
        memoizedFn = $.memoize(fn);
    });

    it('memoized version should return equal result', function() {
        var origRes = fn(1, 2),
            memoizedRes1 = memoizedFn(1, 2),
            memoizedRes2 = memoizedFn(1, 2);

        expect(origRes).toBe(memoizedRes1);
        expect(origRes).toBe(memoizedRes2);
    });

    it('original function should be called once with empty params', function() {
        memoizedFn();
        memoizedFn();

        expect(spy.callCount).toEqual(1);
    });

    it('original function should be called once with equal params', function() {
        memoizedFn(1, 2);
        memoizedFn(1, 2);

        expect(spy.callCount).toEqual(1);
    });

    it('should be allowed for params type', function() {
        memoizedFn(1, 2);
        memoizedFn(1, "2");

        expect(spy.callCount).toEqual(2);
    });

    it('should be allowed for context', function() {
        var ctx = {};

        memoizedFn.call(ctx, 1, 2);
        memoizedFn.call(ctx, 1, 2);
        memoizedFn.call({}, 1, 2);

        expect(spy.callCount).toEqual(2);
    });

    it('should be allowed for custom serializer', function() {
        var spy = jasmine.createSpy(),
            fn = function() {
                spy();
            },
            memoizedFn = $.memoize(fn, function(args) { return args[0].id });

        memoizedFn({ id : 1 });
        memoizedFn({ id : 1 });
        memoizedFn({ id : 2 });

        expect(spy.callCount).toEqual(2);
    });

});