!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).quoke=n()}(this,(function(){"use strict";"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;(function(e){var n={exports:{}};return e(n,n.exports),n.exports})((function(e,n){e.exports=function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=3)}([function(e,n,t){var o=t(1);e.exports=function(e,n){return n=n||{},o.forEach((function(t){var o="function"==typeof t[1]?t[1](n.retainLength):t[1];e=e.replace(t[0],o)})),e}},function(e){e.exports=[[/'''/g,function(e){return"‴"+(e?"⁣⁣":"")}],[/(\W|^)"(\w)/g,"$1“$2"],[/(\u201c[^"]*)"([^"]*$|[^\u201c"]*\u201c)/g,"$1”$2"],[/([^0-9])"/g,"$1”"],[/''/g,function(e){return"″"+(e?"⁣":"")}],[/(\W|^)'(\S)/g,"$1‘$2"],[/([a-z0-9])'([a-z])/gi,"$1’$2"],[/(\u2018)([0-9]{2}[^\u2019]*)(\u2018([^0-9]|$)|$|\u2019[a-z])/gi,"’$2$3"],[/((\u2018[^']*)|[a-z])'([^0-9]|$)/gi,"$1’$3"],[/(\B|^)\u2018(?=([^\u2018\u2019]*\u2019\b)*([^\u2018\u2019]*\B\W[\u2018\u2019]\b|[^\u2018\u2019]*$))/gi,"$1’"],[/"/g,"″"],[/'/g,"′"]]},function(e,n,t){function o(e){if(-1===["CODE","PRE","SCRIPT","STYLE","NOSCRIPT"].indexOf(e.nodeName.toUpperCase())){var n,t,f,a="",d=e.childNodes,l=[];for(n=0;n<d.length;n++)(t=d[n]).nodeType===i||"#text"===t.nodeName?(l.push([t,a.length]),a+=t.nodeValue||t.value):t.childNodes&&t.childNodes.length&&(a+=o(t));for(n in a=u(a,{retainLength:!0}),l)(f=l[n])[0].nodeValue?f[0].nodeValue=r(a,f[0].nodeValue,f[1]):f[0].value&&(f[0].value=r(a,f[0].value,f[1]));return a}}function r(e,n,t){return e.substr(t,n.length).replace("⁣","")}var u=t(0),i="undefined"!=typeof Element&&Element.TEXT_NODE||3;e.exports=function(e){return o(e),e}},function(e,n,t){function o(e){return"undefined"!=typeof document&&void 0===e?(i.runOnReady((function(){return u(document.body)})),o):"string"==typeof e?f(e):u(e)}var r=t(1),u=t(2),i=t(4),f=t(0);e.exports=o,e.exports.string=f,e.exports.element=u,e.exports.replacements=r,e.exports.listen=i},function(e,n,t){function o(e){var n=new MutationObserver((function(e){e.forEach((function(e){var n,t=!0,o=!1;try{for(var u,i,f=e.addedNodes[Symbol.iterator]();!(t=(u=f.next()).done);t=!0)i=u.value,r(i)}catch(e){o=!0,n=e}finally{try{!t&&f.return&&f.return()}finally{if(o)throw n}}}))}));return o.runOnReady((function(){n.observe(e||document.body,{childList:!0,subtree:!0})})),n}var r=t(2);t(0),o.runOnReady=function(e){if("loading"!==document.readyState)e();else if(document.addEventListener)document.addEventListener("DOMContentLoaded",e,!1);else var n=setInterval((function(){"loading"!==document.readyState&&(clearInterval(n),e())}),10)},e.exports=o}])}))(),console.log("Hello from rollup... :) please add some npm scripts here...");return{}}));
//# sourceMappingURL=index.js.map
