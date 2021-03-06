(function(undefined) {
  function Get(n, t) {
      return n[t]
  }
  function IsCallable(n) {
      return "function" == typeof n
  }
  function ToObject(e) {
      if (null === e || e === undefined)
          throw TypeError();
      return Object(e)
  }
  if (!("defineProperty"in Object && function() {
      try {
          var e = {}
          return Object.defineProperty(e, "test", {
              value: 42
          }),
          !0
      } catch (t) {
          return !1
      }
  }())) {
      !function(e) {
          var t = Object.prototype.hasOwnProperty("__defineGetter__")
            , r = "A property cannot both have accessors and be writable or have a value";
          Object.defineProperty = function n(o, i, c) {
              if (e && (o === window || o === document || o === Element.prototype || o instanceof Element))
                  return e(o, i, c);
              if (null === o || !(o instanceof Object || "object" == typeof o))
                  throw new TypeError("Object.defineProperty called on non-object");
              if (!(c instanceof Object))
                  throw new TypeError("Property description must be an object");
              var a = String(i)
                , f = "value"in c || "writable"in c
                , p = "get"in c && typeof c.get
                , s = "set"in c && typeof c.set;
              if (p) {
                  if ("function" !== p)
                      throw new TypeError("Getter must be a function");
                  if (!t)
                      throw new TypeError("Getters & setters cannot be defined on this javascript engine");
                  if (f)
                      throw new TypeError(r);
                  Object.__defineGetter__.call(o, a, c.get)
              } else
                  o[a] = c.value;
              if (s) {
                  if ("function" !== s)
                      throw new TypeError("Setter must be a function");
                  if (!t)
                      throw new TypeError("Getters & setters cannot be defined on this javascript engine");
                  if (f)
                      throw new TypeError(r);
                  Object.__defineSetter__.call(o, a, c.set)
              }
              return "value"in c && (o[a] = c.value),
              o
          }
      }(Object.defineProperty);
  }
  function CreateMethodProperty(e, r, t) {
      var a = {
          value: t,
          writable: !0,
          enumerable: !1,
          configurable: !0
      };
      Object.defineProperty(e, r, a)
  }
  if (!("bind"in Function.prototype)) {
      CreateMethodProperty(Function.prototype, "bind", function t(n) {
          var r = Array
            , o = Object
            , e = r.prototype
            , l = function g() {}
            , p = e.slice
            , a = e.concat
            , i = e.push
            , c = Math.max
            , u = this;
          if (!IsCallable(u))
              throw new TypeError("Function.prototype.bind called on incompatible " + u);
          for (var y, h = p.call(arguments, 1), s = function() {
              if (this instanceof y) {
                  var t = u.apply(this, a.call(h, p.call(arguments)));
                  return o(t) === t ? t : this
              }
              return u.apply(n, a.call(h, p.call(arguments)))
          }, f = c(0, u.length - h.length), b = [], d = 0; d < f; d++)
              i.call(b, "$" + d);
          return y = Function("binder", "return function (" + b.join(",") + "){ return binder.apply(this, arguments); }")(s),
          u.prototype && (l.prototype = u.prototype,
          y.prototype = new l,
          l.prototype = null),
          y
      });
  }
  if (!("getOwnPropertyDescriptor"in Object && "function" == typeof Object.getOwnPropertyDescriptor && function() {
      try {
          var t = {}
          return t.test = 0,
          0 === Object.getOwnPropertyDescriptor(t, "test").value
      } catch (e) {
          return !1
      }
  }())) {
      !function() {
          function e(e) {
              try {
                  return e.sentinel = 0,
                  0 === Object.getOwnPropertyDescriptor(e, "sentinel").value
              } catch (t) {}
          }
          var t, r, o, n = Function.prototype.call, c = Object.prototype, i = n.bind(c.hasOwnProperty);
          if ((o = i(c, "__defineGetter__")) && (t = n.bind(c.__lookupGetter__),
          r = n.bind(c.__lookupSetter__)),
          Object.defineProperty) {
              var p = e({});
              if (!("undefined" == typeof document || e(document.createElement("div"))) || !p)
                  var _ = Object.getOwnPropertyDescriptor
          }
          if (!Object.getOwnPropertyDescriptor || _) {
              CreateMethodProperty(Object, "getOwnPropertyDescriptor", function a(e, n) {
                  if ("object" != typeof e && "function" != typeof e || null === e)
                      throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: " + e);
                  if (_)
                      try {
                          return _.call(Object, e, n)
                      } catch (l) {}
                  if (i(e, n)) {
                      var p = {
                          enumerable: !0,
                          configurable: !0
                      };
                      if (o) {
                          var a = e.__proto__;
                          e.__proto__ = c;
                          var f = t(e, n)
                            , u = r(e, n);
                          if (e.__proto__ = a,
                          f || u)
                              return f && (p.get = f),
                              u && (p.set = u),
                              p
                      }
                      return p.value = e[n],
                      p.writable = !0,
                      p
                  }
              })
          }
      }();
  }
  if (!("keys"in Object && function() {
      return 2 === Object.keys(arguments).length
  }(1, 2) && function() {
      try {
          return Object.keys(""),
          !0
      } catch (t) {
          return !1
      }
  }())) {
      CreateMethodProperty(Object, "keys", function() {
          "use strict";
          function t(t) {
              var e = r.call(t)
                , n = "[object Arguments]" === e;
              return n || (n = "[object Array]" !== e && null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && "[object Function]" === r.call(t.callee)),
              n
          }
          var e = Object.prototype.hasOwnProperty
            , r = Object.prototype.toString
            , n = Object.prototype.propertyIsEnumerable
            , o = !n.call({
              toString: null
          }, "toString")
            , l = n.call(function() {}, "prototype")
            , c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]
            , i = function(t) {
              var e = t.constructor;
              return e && e.prototype === t
          }
            , u = {
              $console: !0,
              $external: !0,
              $frame: !0,
              $frameElement: !0,
              $frames: !0,
              $innerHeight: !0,
              $innerWidth: !0,
              $outerHeight: !0,
              $outerWidth: !0,
              $pageXOffset: !0,
              $pageYOffset: !0,
              $parent: !0,
              $scrollLeft: !0,
              $scrollTop: !0,
              $scrollX: !0,
              $scrollY: !0,
              $self: !0,
              $webkitIndexedDB: !0,
              $webkitStorageInfo: !0,
              $window: !0
          }
            , a = function() {
              if ("undefined" == typeof window)
                  return !1;
              for (var t in window)
                  try {
                      if (!u["$" + t] && e.call(window, t) && null !== window[t] && "object" == typeof window[t])
                          try {
                              i(window[t])
                          } catch (r) {
                              return !0
                          }
                  } catch (r) {
                      return !0
                  }
              return !1
          }()
            , f = function(t) {
              if ("undefined" == typeof window || !a)
                  return i(t);
              try {
                  return i(t)
              } catch (e) {
                  return !1
              }
          };
          return function p(n) {
              var i = "[object Function]" === r.call(n)
                , u = t(n)
                , a = "[object String]" === r.call(n)
                , p = [];
              if (n === undefined || null === n)
                  throw new TypeError("Cannot convert undefined or null to object");
              var s = l && i;
              if (a && n.length > 0 && !e.call(n, 0))
                  for (var y = 0; y < n.length; ++y)
                      p.push(String(y));
              if (u && n.length > 0)
                  for (var g = 0; g < n.length; ++g)
                      p.push(String(g));
              else
                  for (var h in n)
                      s && "prototype" === h || !e.call(n, h) || p.push(String(h));
              if (o)
                  for (var w = f(n), d = 0; d < c.length; ++d)
                      w && "constructor" === c[d] || !e.call(n, c[d]) || p.push(c[d]);
              return p
          }
      }());
  }
  if (!("assign"in Object)) {
      CreateMethodProperty(Object, "assign", function e(r, t) {
          var n = ToObject(r);
          if (1 === arguments.length)
              return n;
          var a, o, c, l, p = Array.prototype.slice.call(arguments, 1);
          for (a = 0; a < p.length; a++) {
              var b = p[a];
              for (b === undefined || null === b ? c = [] : (l = ToObject(b),
              c = Object.keys(l)),
              o = 0; o < c.length; o++) {
                  var i, u = c[o];
                  try {
                      var y = Object.getOwnPropertyDescriptor(l, u);
                      i = y !== undefined && !0 === y.enumerable
                  } catch (O) {
                      i = Object.prototype.propertyIsEnumerable.call(l, u)
                  }
                  if (i) {
                      var f = Get(l, u);
                      n[u] = f
                  }
              }
          }
          return n
      });
  }
}
).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
