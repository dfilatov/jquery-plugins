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

var DELIMITER = '\x0B',
    /** default serializer */
    serialize = function(args) {
        var res = [],
            i = 0, len = args.length;

        while(i < len) {
            res.push(typeof args[i], args[i++]);
        }

        return res.join(DELIMITER);
    };

/**
 * @param {Function} fn original function
 * @param {Function} [serializeFn] custom argument's serializer
 * @returns Function memoized version of original function
 */
$.memoize = function(fn, serializeFn) {
    var memo = {};
    return function() {
        var hash = $.identify(this) + DELIMITER + (serializeFn || serialize)(arguments);
        return hash in memo?
            memo[hash] :
            memo[hash] = fn.apply(this, arguments);
    };
};

})(jQuery);