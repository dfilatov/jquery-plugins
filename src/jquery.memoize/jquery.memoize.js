/**
 * Memoization plugin
 *
 * Copyright (c) 2009 Filatov Dmitry (alpha@zforms.ru)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * @version 1.0.2
 * @requires $.identify
 */

(function($) {

var getFnHash = function(ctx, args) {
    var res = [$.identify(ctx)],
        i = 0, len = args.length;

    while(i < len) {
        res.push(typeof args[i], args[i++]);
    }

    return res.join('\x0B');
};

/**
 * @param {Function} fn original function
 * @returns Function memoized version of original function
 */
$.memoize = function(fn) {
    var memo = {};
    return function() {
        var hash = getFnHash(this, arguments);
        return hash in memo?
            memo[hash] :
            memo[hash] = fn.apply(this, arguments);
    };
};

})(jQuery);