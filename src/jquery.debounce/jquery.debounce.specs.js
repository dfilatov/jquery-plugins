describe('jquery.debounce specs', function() {

    it('should be function debounced', function() {
        var spy = jasmine.createSpy(),
            debouncedFn = $.debounce(spy, 50),
            cnt = 0, cntMax = 10,
            completed = false,
            testFn = function test() {
                if(cnt < cntMax) {
                    debouncedFn();
                    debouncedFn();
                    debouncedFn();
                    cnt++;
                    setTimeout(test, 35);
                }
                else {
                    setTimeout(function() {
                        if(cntMax == 20) {
                            completed = true;
                        }
                        else {
                            cntMax = 20;
                            setTimeout(test, 35);
                        }
                    }, 70);
                }
            };

        testFn();

        waitsFor(function() {
            return completed;
        });
        runs(function() {
            expect(spy.callCount).toBe(2);
        });
    });

    it('should be function throttled', function() {
        var spy = jasmine.createSpy(),
            throttledFn = $.throttle(spy, 50),
            cnt = 0,
            completed = false,
            testFn = function test() {
                if(cnt === 10) {
                    completed = true;
                }
                else {
                    throttledFn();
                    throttledFn();
                    throttledFn();
                    cnt++;
                    setTimeout(test, 42);
                }
            };

        testFn();

        waitsFor(function() {
            return completed;
        });
        runs(function() {
            expect(spy.callCount).toBe(9);
        });
    });

});