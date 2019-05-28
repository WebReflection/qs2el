# qs2el

[![Build Status](https://travis-ci.com/WebReflection/qs2el.svg?branch=master)](https://travis-ci.com/WebReflection/qs2el) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/qs2el/badge.svg?branch=master)](https://coveralls.io/github/WebReflection/qs2el?branch=master) ![WebReflection status](https://offline.report/status/webreflection.svg)


Create an element from a query selector string.

```js
// as function
const a = qs2el('a#home.special[data-page=home]');

// or as literal
const button = qs2el`button${'.primary'}[disabled]`;
```
