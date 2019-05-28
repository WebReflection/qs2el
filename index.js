var qs2el = (function (fromCharCode, toCharCode) {

  /*! (c) Andrea Giammarchi - ISC */

  qs2el.escape = escape;

  return qs2el;

  function asChar(_, $) {
    return fromCharCode($);
  }

  function asEntity($) {
    return '&#' + toCharCode[$] + ';';
  }

  function qs2el(selector) {
    return selector2element.apply(
      null,
      /^([a-z0-9-]+)?(#[a-z0-9_-]+)?((?:\.[a-z0-9_-]+)+)?(\[[\s\S]*\])?$/.exec(
        typeof selector === 'string' ?
          selector :
          join.apply(null, arguments)
      )
    );
  }

  function escape(value) {
    return value.replace(/[[\]]/g, asEntity);
  }

  function join(template) {
    for (var
      out = [template[0]],
      i = 1; i < arguments.length; i++
    ) {
      out.push(arguments[i], template[i]);
    }
    return out.join('');
  }

  function selector2element(_, tag, id, classes, attributes) {
    var el = document.createElement(tag || 'div');
    if (id)
      el.id = id.slice(1);
    if (classes)
      el.className = classes.replace(/\./g, ' ').slice(1);
    if (attributes) {
      var re = /\[([\s\S]*?)\]/g;
      var match;
      while (match = re.exec(attributes)) {
        var all = match[1];
        var i = all.indexOf('=');
        var key = i < 0 ? all : all.slice(0, i);
        var value = i < 0 ? true : unescape(unquote(all.slice(i + 1)));
        if (key === 'class')
          key = 'className';
        if (key in el)
          el[key] = value;
        else if (key)
          el.setAttribute(key, i < 0 ? '' : value);
      }
    }
    return el;
  }

  function unescape(value) {
    return value.replace(/&#(91|93);/g, asChar);
  }

  function unquote(value) {
    return value.replace(/^("|')?([\s\S]*)\1$/, '$2');
  }

}(String.fromCharCode, {'[': 91, ']': 93}));
