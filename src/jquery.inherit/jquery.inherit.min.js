/**
 * Inheritance plugin
 *
 * Copyright (c) 2010 Filatov Dmitry (dfilatov@yandex-team.ru)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * @version 1.3.3
 */(function(a){function f(e,f,g){var h=!1;if(c){var i=[];a.each(d,function(){g.hasOwnProperty(this)&&(h=!0)&&i.push({name:this,val:g[this]})}),h&&(a.each(g,function(a){i.push({name:a,val:this})}),g=i)}a.each(g,function(c,d){h&&(c=d.name,d=d.val);if(a.isFunction(d)&&(!b||d.toString().indexOf(".__base")>-1)){var g=e[c]||function(){};f[c]=function(){var a=this.__base;this.__base=g;var b=d.apply(this,arguments);return this.__base=a,b}}else f[c]=d})}var b=function(){_}.toString().indexOf("_")>-1,c=a.browser.msie,d=c?["toString","valueOf"]:null,e=function(){};a.inherit=function(){var b=arguments,c=a.isFunction(b[0]),d=c?b[0]:e,g=b[c?1:0]||{},h=b[c?2:1],i=g.__constructor||c&&d.prototype.__constructor?function(){return this.__constructor.apply(this,arguments)}:function(){};if(!c)return i.prototype=g,i.prototype.__self=i.prototype.constructor=i,a.extend(i,h);a.extend(i,d);var j=function(){},k=j.prototype=d.prototype,l=i.prototype=new j;return l.__self=l.constructor=i,f(k,l,g),h&&f(d,i,h),i},a.inheritSelf=function(a,b,c){var d=a.prototype;return f(d,d,b),c&&f(a,a,c),a}})(jQuery);