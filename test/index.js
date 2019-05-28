require('basichtml').init();

const qs2el = require('../cjs');

let el = qs2el('a#id.class[attribute=value]');

console.assert(el.id === 'id', 'id as function');
console.assert(el.className === 'class', 'class as function');
console.assert(el.getAttribute('attribute') === 'value', 'attribute as function');

el = qs2el`a#${'id'}${'.class'}${'[attribute=value]'}`;
console.assert(el.id === 'id', 'id as literal');
console.assert(el.className === 'class', 'class as literal');
console.assert(el.getAttribute('attribute') === 'value', 'attribute as literal');

el = qs2el('a[class=test]');
console.assert(el.className === 'test', 'class as attribute');

el = qs2el('button[disabled]');
console.assert(el.hasAttribute('disabled'), '[attribute]');

el = qs2el`button[attr=${qs2el.escape('[test]')}]`;
console.assert(el.getAttribute('attr') === '[test]', '[attribute=[test]]');

el = qs2el('#div');
console.assert(el.nodeName.toLowerCase() === 'div', 'div as default tag');
console.assert(el.id === 'div', 'the rest works too');

el = qs2el`button[a=b][][c=d]`;
console.assert(el.outerHTML.toLowerCase() === '<button a="b" c="d"></button>', 'empty attributes skipped');