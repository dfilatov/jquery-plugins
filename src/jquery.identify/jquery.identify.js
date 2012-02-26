/**
 * Identify plugin
 *
 * Copyright (c) 2009 Filatov Dmitry (dfilatov@yandex-team.ru)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * @version 1.0.0
 */

(function($) {

var cnt = 0,
    expando = '__' + (+new Date),
    get = function() {
        return 'uniq' + ++cnt;
    };

/**
 * @param {Object} [obj] object to identify, return next unique id if no passed
 * @param {Boolean} [onlyGet=false] return unique id only if before assigned
 * @returns {String} unique id
 */
$.identify = function(obj, onlyGet) {

    if(!obj) return get();

    var key = 'uniqueID' in obj? 'uniqueID' : expando; // use native uniqueID for IE elements

    return onlyGet || key in obj?
        obj[key] :
        obj[key] = get();

};

})(jQuery);