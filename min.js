/*! (c) Andrea Giammarchi - ISC */
var qs2el=function(n,r){return e.escape=function(e){return e.replace(/[[\]]/g,t)},e;function g(e,r){return n(r)}function t(e){return"&#"+r[e]+";"}function e(e){return function(e,r,n,t,a){var c=document.createElement(r||"div");n&&(c.id=n.slice(1));t&&(c.className=t.replace(/\./g," ").slice(1));if(a)for(var i,l=/\[([\s\S]*?)\]/g;i=l.exec(a);){var u=i[1],s=u.indexOf("="),o=s<0?u:u.slice(0,s),f=s<0||(p=u.slice(s+1),p.replace(/^("|')?([\s\S]*)\1$/,"$2").replace(/&#(91|93);/g,g));"class"===o&&(o="className"),o in c?c[o]=f:o&&c.setAttribute(o,s<0?"":f)}var p;return c}.apply(null,/^([a-z0-9-]+)?(#[a-z0-9_-]+)?((?:\.[a-z0-9_-]+)+)?(\[[\s\S]*\])?$/.exec("string"==typeof e?e:function(e){for(var r=[e[0]],n=1;n<arguments.length;n++)r.push(arguments[n],e[n]);return r.join("")}.apply(null,arguments)))}}(String.fromCharCode,{"[":91,"]":93});