/**
 * Debounce and throttle function's decorator plugin 1.0.6
 *
 * Copyright (c) 2009 Filatov Dmitry (alpha@zforms.ru)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

(function($) {

$.extend({

    /**
     * Debounce's decorator
     * @param {Function} fn original function
     * @param {Number} timeout timeout
     * @param {Boolean} [invokeAsap=false] invoke function as soon as possible
     * @param {Object} [ctx] context of original function
     */
    debounce : function(fn, timeout, invokeAsap, ctx) {

        if(arguments.length == 3 && typeof invokeAsap != 'boolean') {
            ctx = invokeAsap;
            invokeAsap = false;
        }

        var timer;
        var lastInvokeTime = 0;

        function invoke(time, args) {
            if (time - lastInvokeTime > timeout) {
                fn.apply(this, args);
                lastInvokeTime = time;
            }
        }

        return function() {

            var time = new Date().valueOf();
            ctx = ctx || this;

            invokeAsap && !timer && invoke.call(ctx, time, arguments);

            clearTimeout(timer);

            timer = setTimeout(function() {
                invoke.call(ctx, time, arguments);
                timer = null;
            }, timeout);

        };

    },

    /**
     * Throttle's decorator
     * @param {Function} fn original function
     * @param {Number} timeout timeout
     * @param {Object} [ctx] context of original function
     */
    throttle : function(fn, timeout, ctx) {

        var timer, args, needInvoke;

        return function() {

            args = arguments;
            needInvoke = true;
            ctx = ctx || this;

            timer || (function() {
                if(needInvoke) {
                    fn.apply(ctx, args);
                    needInvoke = false;
                    timer = setTimeout(arguments.callee, timeout);
                }
                else {
                    timer = null;
                }
            })();

        };

    }

});

})(jQuery);
