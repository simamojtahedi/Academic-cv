!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.AOS = t())
    : (e.AOS = t());
})(this, function () {
  return (function (e) {
    function t(o) {
      if (n[o]) return n[o].exports;
      var i = (n[o] = { exports: {}, id: o, loaded: !1 });
      return e[o].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports;
    }
    var n = {};
    return (t.m = e), (t.c = n), (t.p = "dist/"), t(0);
  })([
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          },
        r = n(1),
        a = (o(r), n(6)),
        u = o(a),
        c = n(7),
        f = o(c),
        s = n(8),
        d = o(s),
        l = n(9),
        p = o(l),
        m = n(10),
        b = o(m),
        v = n(11),
        y = o(v),
        g = n(14),
        h = o(g),
        w = [],
        k = !1,
        x = document.all && !window.atob,
        j = {
          offset: 120,
          delay: 0,
          easing: "ease",
          duration: 400,
          disable: !1,
          once: !1,
          startEvent: "DOMContentLoaded",
          throttleDelay: 99,
          debounceDelay: 50,
          disableMutationObserver: !1,
        },
        O = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if ((e && (k = !0), k))
            return (w = (0, y.default)(w, j)), (0, b.default)(w, j.once), w;
        },
        _ = function () {
          (w = (0, h.default)()), O();
        },
        S = function () {
          w.forEach(function (e, t) {
            e.node.removeAttribute("data-aos"),
              e.node.removeAttribute("data-aos-easing"),
              e.node.removeAttribute("data-aos-duration"),
              e.node.removeAttribute("data-aos-delay");
          });
        },
        z = function (e) {
          return (
            e === !0 ||
            ("mobile" === e && p.default.mobile()) ||
            ("phone" === e && p.default.phone()) ||
            ("tablet" === e && p.default.tablet()) ||
            ("function" == typeof e && e() === !0)
          );
        },
        A = function (e) {
          return (
            (j = i(j, e)),
            (w = (0, h.default)()),
            z(j.disable) || x
              ? S()
              : (document
                  .querySelector("body")
                  .setAttribute("data-aos-easing", j.easing),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-duration", j.duration),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-delay", j.delay),
                "DOMContentLoaded" === j.startEvent &&
                ["complete", "interactive"].indexOf(document.readyState) > -1
                  ? O(!0)
                  : "load" === j.startEvent
                  ? window.addEventListener(j.startEvent, function () {
                      O(!0);
                    })
                  : document.addEventListener(j.startEvent, function () {
                      O(!0);
                    }),
                window.addEventListener(
                  "resize",
                  (0, f.default)(O, j.debounceDelay, !0)
                ),
                window.addEventListener(
                  "orientationchange",
                  (0, f.default)(O, j.debounceDelay, !0)
                ),
                window.addEventListener(
                  "scroll",
                  (0, u.default)(function () {
                    (0, b.default)(w, j.once);
                  }, j.throttleDelay)
                ),
                j.disableMutationObserver || (0, d.default)("[data-aos]", _),
                w)
          );
        };
      e.exports = { init: A, refresh: O, refreshHard: _ };
    },
    function (e, t) {},
    ,
    ,
    ,
    ,
    function (e, t) {
      (function (t) {
        "use strict";
        function n(e, t, n) {
          function o(t) {
            var n = b,
              o = v;
            return (b = v = void 0), (k = t), (g = e.apply(o, n));
          }
          function r(e) {
            return (k = e), (h = setTimeout(s, t)), _ ? o(e) : g;
          }
          function a(e) {
            var n = e - w,
              o = e - k,
              i = t - n;
            return S ? j(i, y - o) : i;
          }
          function c(e) {
            var n = e - w,
              o = e - k;
            return void 0 === w || n >= t || n < 0 || (S && o >= y);
          }
          function s() {
            var e = O();
            return c(e) ? d(e) : void (h = setTimeout(s, a(e)));
          }
          function d(e) {
            return (h = void 0), z && b ? o(e) : ((b = v = void 0), g);
          }
          function l() {
            void 0 !== h && clearTimeout(h), (k = 0), (b = w = v = h = void 0);
          }
          function p() {
            return void 0 === h ? g : d(O());
          }
          function m() {
            var e = O(),
              n = c(e);
            if (((b = arguments), (v = this), (w = e), n)) {
              if (void 0 === h) return r(w);
              if (S) return (h = setTimeout(s, t)), o(w);
            }
            return void 0 === h && (h = setTimeout(s, t)), g;
          }
          var b,
            v,
            y,
            g,
            h,
            w,
            k = 0,
            _ = !1,
            S = !1,
            z = !0;
          if ("function" != typeof e) throw new TypeError(f);
          return (
            (t = u(t) || 0),
            i(n) &&
              ((_ = !!n.leading),
              (S = "maxWait" in n),
              (y = S ? x(u(n.maxWait) || 0, t) : y),
              (z = "trailing" in n ? !!n.trailing : z)),
            (m.cancel = l),
            (m.flush = p),
            m
          );
        }
        function o(e, t, o) {
          var r = !0,
            a = !0;
          if ("function" != typeof e) throw new TypeError(f);
          return (
            i(o) &&
              ((r = "leading" in o ? !!o.leading : r),
              (a = "trailing" in o ? !!o.trailing : a)),
            n(e, t, { leading: r, maxWait: t, trailing: a })
          );
        }
        function i(e) {
          var t = "undefined" == typeof e ? "undefined" : c(e);
          return !!e && ("object" == t || "function" == t);
        }
        function r(e) {
          return (
            !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e))
          );
        }
        function a(e) {
          return (
            "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) ||
            (r(e) && k.call(e) == d)
          );
        }
        function u(e) {
          if ("number" == typeof e) return e;
          if (a(e)) return s;
          if (i(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = i(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(l, "");
          var n = m.test(e);
          return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? s : +e;
        }
        var c =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          f = "Expected a function",
          s = NaN,
          d = "[object Symbol]",
          l = /^\s+|\s+$/g,
          p = /^[-+]0x[0-9a-f]+$/i,
          m = /^0b[01]+$/i,
          b = /^0o[0-7]+$/i,
          v = parseInt,
          y =
            "object" == ("undefined" == typeof t ? "undefined" : c(t)) &&
            t &&
            t.Object === Object &&
            t,
          g =
            "object" == ("undefined" == typeof self ? "undefined" : c(self)) &&
            self &&
            self.Object === Object &&
            self,
          h = y || g || Function("return this")(),
          w = Object.prototype,
          k = w.toString,
          x = Math.max,
          j = Math.min,
          O = function () {
            return h.Date.now();
          };
        e.exports = o;
      }).call(
        t,
        (function () {
          return this;
        })()
      );
    },
    function (e, t) {
      (function (t) {
        "use strict";
        function n(e, t, n) {
          function i(t) {
            var n = b,
              o = v;
            return (b = v = void 0), (O = t), (g = e.apply(o, n));
          }
          function r(e) {
            return (O = e), (h = setTimeout(s, t)), _ ? i(e) : g;
          }
          function u(e) {
            var n = e - w,
              o = e - O,
              i = t - n;
            return S ? x(i, y - o) : i;
          }
          function f(e) {
            var n = e - w,
              o = e - O;
            return void 0 === w || n >= t || n < 0 || (S && o >= y);
          }
          function s() {
            var e = j();
            return f(e) ? d(e) : void (h = setTimeout(s, u(e)));
          }
          function d(e) {
            return (h = void 0), z && b ? i(e) : ((b = v = void 0), g);
          }
          function l() {
            void 0 !== h && clearTimeout(h), (O = 0), (b = w = v = h = void 0);
          }
          function p() {
            return void 0 === h ? g : d(j());
          }
          function m() {
            var e = j(),
              n = f(e);
            if (((b = arguments), (v = this), (w = e), n)) {
              if (void 0 === h) return r(w);
              if (S) return (h = setTimeout(s, t)), i(w);
            }
            return void 0 === h && (h = setTimeout(s, t)), g;
          }
          var b,
            v,
            y,
            g,
            h,
            w,
            O = 0,
            _ = !1,
            S = !1,
            z = !0;
          if ("function" != typeof e) throw new TypeError(c);
          return (
            (t = a(t) || 0),
            o(n) &&
              ((_ = !!n.leading),
              (S = "maxWait" in n),
              (y = S ? k(a(n.maxWait) || 0, t) : y),
              (z = "trailing" in n ? !!n.trailing : z)),
            (m.cancel = l),
            (m.flush = p),
            m
          );
        }
        function o(e) {
          var t = "undefined" == typeof e ? "undefined" : u(e);
          return !!e && ("object" == t || "function" == t);
        }
        function i(e) {
          return (
            !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e))
          );
        }
        function r(e) {
          return (
            "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) ||
            (i(e) && w.call(e) == s)
          );
        }
        function a(e) {
          if ("number" == typeof e) return e;
          if (r(e)) return f;
          if (o(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = o(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(d, "");
          var n = p.test(e);
          return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? f : +e;
        }
        var u =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          c = "Expected a function",
          f = NaN,
          s = "[object Symbol]",
          d = /^\s+|\s+$/g,
          l = /^[-+]0x[0-9a-f]+$/i,
          p = /^0b[01]+$/i,
          m = /^0o[0-7]+$/i,
          b = parseInt,
          v =
            "object" == ("undefined" == typeof t ? "undefined" : u(t)) &&
            t &&
            t.Object === Object &&
            t,
          y =
            "object" == ("undefined" == typeof self ? "undefined" : u(self)) &&
            self &&
            self.Object === Object &&
            self,
          g = v || y || Function("return this")(),
          h = Object.prototype,
          w = h.toString,
          k = Math.max,
          x = Math.min,
          j = function () {
            return g.Date.now();
          };
        e.exports = n;
      }).call(
        t,
        (function () {
          return this;
        })()
      );
    },
    function (e, t) {
      "use strict";
      function n(e, t) {
        var n = new r(o);
        (a = t),
          n.observe(i.documentElement, {
            childList: !0,
            subtree: !0,
            removedNodes: !0,
          });
      }
      function o(e) {
        e &&
          e.forEach(function (e) {
            var t = Array.prototype.slice.call(e.addedNodes),
              n = Array.prototype.slice.call(e.removedNodes),
              o = t.concat(n).filter(function (e) {
                return e.hasAttribute && e.hasAttribute("data-aos");
              }).length;
            o && a();
          });
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = window.document,
        r =
          window.MutationObserver ||
          window.WebKitMutationObserver ||
          window.MozMutationObserver,
        a = function () {};
      t.default = n;
    },
    function (e, t) {
      "use strict";
      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function o() {
        return navigator.userAgent || navigator.vendor || window.opera || "";
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })(),
        r =
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        a =
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        u =
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
        c =
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        f = (function () {
          function e() {
            n(this, e);
          }
          return (
            i(e, [
              {
                key: "phone",
                value: function () {
                  var e = o();
                  return !(!r.test(e) && !a.test(e.substr(0, 4)));
                },
              },
              {
                key: "mobile",
                value: function () {
                  var e = o();
                  return !(!u.test(e) && !c.test(e.substr(0, 4)));
                },
              },
              {
                key: "tablet",
                value: function () {
                  return this.mobile() && !this.phone();
                },
              },
            ]),
            e
          );
        })();
      t.default = new f();
    },
    function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = function (e, t, n) {
          var o = e.node.getAttribute("data-aos-once");
          t > e.position
            ? e.node.classList.add("aos-animate")
            : "undefined" != typeof o &&
              ("false" === o || (!n && "true" !== o)) &&
              e.node.classList.remove("aos-animate");
        },
        o = function (e, t) {
          var o = window.pageYOffset,
            i = window.innerHeight;
          e.forEach(function (e, r) {
            n(e, i + o, t);
          });
        };
      t.default = o;
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(12),
        r = o(i),
        a = function (e, t) {
          return (
            e.forEach(function (e, n) {
              e.node.classList.add("aos-init"),
                (e.position = (0, r.default)(e.node, t.offset));
            }),
            e
          );
        };
      t.default = a;
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(13),
        r = o(i),
        a = function (e, t) {
          var n = 0,
            o = 0,
            i = window.innerHeight,
            a = {
              offset: e.getAttribute("data-aos-offset"),
              anchor: e.getAttribute("data-aos-anchor"),
              anchorPlacement: e.getAttribute("data-aos-anchor-placement"),
            };
          switch (
            (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)),
            a.anchor &&
              document.querySelectorAll(a.anchor) &&
              (e = document.querySelectorAll(a.anchor)[0]),
            (n = (0, r.default)(e).top),
            a.anchorPlacement)
          ) {
            case "top-bottom":
              break;
            case "center-bottom":
              n += e.offsetHeight / 2;
              break;
            case "bottom-bottom":
              n += e.offsetHeight;
              break;
            case "top-center":
              n += i / 2;
              break;
            case "bottom-center":
              n += i / 2 + e.offsetHeight;
              break;
            case "center-center":
              n += i / 2 + e.offsetHeight / 2;
              break;
            case "top-top":
              n += i;
              break;
            case "bottom-top":
              n += e.offsetHeight + i;
              break;
            case "center-top":
              n += e.offsetHeight / 2 + i;
          }
          return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o;
        };
      t.default = a;
    },
    function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = function (e) {
        for (
          var t = 0, n = 0;
          e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

        )
          (t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)),
            (n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)),
            (e = e.offsetParent);
        return { top: n, left: t };
      };
      t.default = n;
    },
    function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = function (e) {
        return (
          (e = e || document.querySelectorAll("[data-aos]")),
          Array.prototype.map.call(e, function (e) {
            return { node: e };
          })
        );
      };
      t.default = n;
    },
  ]);
});

/*!
 * Bootstrap v5.0.2 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e(require("@popperjs/core")))
    : "function" == typeof define && define.amd
    ? define(["@popperjs/core"], e)
    : ((t =
        "undefined" != typeof globalThis ? globalThis : t || self).bootstrap =
        e(t.Popper));
})(this, function (t) {
  "use strict";
  function e(t) {
    if (t && t.__esModule) return t;
    var e = Object.create(null);
    return (
      t &&
        Object.keys(t).forEach(function (s) {
          if ("default" !== s) {
            var i = Object.getOwnPropertyDescriptor(t, s);
            Object.defineProperty(
              e,
              s,
              i.get
                ? i
                : {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    },
                  }
            );
          }
        }),
      (e.default = t),
      Object.freeze(e)
    );
  }
  var s = e(t);
  const i = {
      find: (t, e = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(e, t)),
      findOne: (t, e = document.documentElement) =>
        Element.prototype.querySelector.call(e, t),
      children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
      parents(t, e) {
        const s = [];
        let i = t.parentNode;
        for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType; )
          i.matches(e) && s.push(i), (i = i.parentNode);
        return s;
      },
      prev(t, e) {
        let s = t.previousElementSibling;
        for (; s; ) {
          if (s.matches(e)) return [s];
          s = s.previousElementSibling;
        }
        return [];
      },
      next(t, e) {
        let s = t.nextElementSibling;
        for (; s; ) {
          if (s.matches(e)) return [s];
          s = s.nextElementSibling;
        }
        return [];
      },
    },
    n = (t) => {
      do {
        t += Math.floor(1e6 * Math.random());
      } while (document.getElementById(t));
      return t;
    },
    o = (t) => {
      let e = t.getAttribute("data-bs-target");
      if (!e || "#" === e) {
        let s = t.getAttribute("href");
        if (!s || (!s.includes("#") && !s.startsWith("."))) return null;
        s.includes("#") && !s.startsWith("#") && (s = "#" + s.split("#")[1]),
          (e = s && "#" !== s ? s.trim() : null);
      }
      return e;
    },
    r = (t) => {
      const e = o(t);
      return e && document.querySelector(e) ? e : null;
    },
    a = (t) => {
      const e = o(t);
      return e ? document.querySelector(e) : null;
    },
    l = (t) => {
      t.dispatchEvent(new Event("transitionend"));
    },
    c = (t) =>
      !(!t || "object" != typeof t) &&
      (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
    h = (t) =>
      c(t)
        ? t.jquery
          ? t[0]
          : t
        : "string" == typeof t && t.length > 0
        ? i.findOne(t)
        : null,
    d = (t, e, s) => {
      Object.keys(s).forEach((i) => {
        const n = s[i],
          o = e[i],
          r =
            o && c(o)
              ? "element"
              : null == (a = o)
              ? "" + a
              : {}.toString
                  .call(a)
                  .match(/\s([a-z]+)/i)[1]
                  .toLowerCase();
        var a;
        if (!new RegExp(n).test(r))
          throw new TypeError(
            `${t.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${n}".`
          );
      });
    },
    u = (t) =>
      !(!c(t) || 0 === t.getClientRects().length) &&
      "visible" === getComputedStyle(t).getPropertyValue("visibility"),
    g = (t) =>
      !t ||
      t.nodeType !== Node.ELEMENT_NODE ||
      !!t.classList.contains("disabled") ||
      (void 0 !== t.disabled
        ? t.disabled
        : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
    p = (t) => {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        const e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? p(t.parentNode)
        : null;
    },
    f = () => {},
    m = (t) => t.offsetHeight,
    _ = () => {
      const { jQuery: t } = window;
      return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
    },
    b = [],
    v = () => "rtl" === document.documentElement.dir,
    y = (t) => {
      var e;
      (e = () => {
        const e = _();
        if (e) {
          const s = t.NAME,
            i = e.fn[s];
          (e.fn[s] = t.jQueryInterface),
            (e.fn[s].Constructor = t),
            (e.fn[s].noConflict = () => ((e.fn[s] = i), t.jQueryInterface));
        }
      }),
        "loading" === document.readyState
          ? (b.length ||
              document.addEventListener("DOMContentLoaded", () => {
                b.forEach((t) => t());
              }),
            b.push(e))
          : e();
    },
    w = (t) => {
      "function" == typeof t && t();
    },
    E = (t, e, s = !0) => {
      if (!s) return void w(t);
      const i =
        ((t) => {
          if (!t) return 0;
          let { transitionDuration: e, transitionDelay: s } =
            window.getComputedStyle(t);
          const i = Number.parseFloat(e),
            n = Number.parseFloat(s);
          return i || n
            ? ((e = e.split(",")[0]),
              (s = s.split(",")[0]),
              1e3 * (Number.parseFloat(e) + Number.parseFloat(s)))
            : 0;
        })(e) + 5;
      let n = !1;
      const o = ({ target: s }) => {
        s === e && ((n = !0), e.removeEventListener("transitionend", o), w(t));
      };
      e.addEventListener("transitionend", o),
        setTimeout(() => {
          n || l(e);
        }, i);
    },
    A = (t, e, s, i) => {
      let n = t.indexOf(e);
      if (-1 === n) return t[!s && i ? t.length - 1 : 0];
      const o = t.length;
      return (
        (n += s ? 1 : -1),
        i && (n = (n + o) % o),
        t[Math.max(0, Math.min(n, o - 1))]
      );
    },
    T = /[^.]*(?=\..*)\.|.*/,
    C = /\..*/,
    k = /::\d+$/,
    L = {};
  let O = 1;
  const D = { mouseenter: "mouseover", mouseleave: "mouseout" },
    I = /^(mouseenter|mouseleave)/i,
    N = new Set([
      "click",
      "dblclick",
      "mouseup",
      "mousedown",
      "contextmenu",
      "mousewheel",
      "DOMMouseScroll",
      "mouseover",
      "mouseout",
      "mousemove",
      "selectstart",
      "selectend",
      "keydown",
      "keypress",
      "keyup",
      "orientationchange",
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "pointerdown",
      "pointermove",
      "pointerup",
      "pointerleave",
      "pointercancel",
      "gesturestart",
      "gesturechange",
      "gestureend",
      "focus",
      "blur",
      "change",
      "reset",
      "select",
      "submit",
      "focusin",
      "focusout",
      "load",
      "unload",
      "beforeunload",
      "resize",
      "move",
      "DOMContentLoaded",
      "readystatechange",
      "error",
      "abort",
      "scroll",
    ]);
  function S(t, e) {
    return (e && `${e}::${O++}`) || t.uidEvent || O++;
  }
  function x(t) {
    const e = S(t);
    return (t.uidEvent = e), (L[e] = L[e] || {}), L[e];
  }
  function M(t, e, s = null) {
    const i = Object.keys(t);
    for (let n = 0, o = i.length; n < o; n++) {
      const o = t[i[n]];
      if (o.originalHandler === e && o.delegationSelector === s) return o;
    }
    return null;
  }
  function P(t, e, s) {
    const i = "string" == typeof e,
      n = i ? s : e;
    let o = R(t);
    return N.has(o) || (o = t), [i, n, o];
  }
  function j(t, e, s, i, n) {
    if ("string" != typeof e || !t) return;
    if ((s || ((s = i), (i = null)), I.test(e))) {
      const t = (t) =>
        function (e) {
          if (
            !e.relatedTarget ||
            (e.relatedTarget !== e.delegateTarget &&
              !e.delegateTarget.contains(e.relatedTarget))
          )
            return t.call(this, e);
        };
      i ? (i = t(i)) : (s = t(s));
    }
    const [o, r, a] = P(e, s, i),
      l = x(t),
      c = l[a] || (l[a] = {}),
      h = M(c, r, o ? s : null);
    if (h) return void (h.oneOff = h.oneOff && n);
    const d = S(r, e.replace(T, "")),
      u = o
        ? (function (t, e, s) {
            return function i(n) {
              const o = t.querySelectorAll(e);
              for (let { target: r } = n; r && r !== this; r = r.parentNode)
                for (let a = o.length; a--; )
                  if (o[a] === r)
                    return (
                      (n.delegateTarget = r),
                      i.oneOff && B.off(t, n.type, e, s),
                      s.apply(r, [n])
                    );
              return null;
            };
          })(t, s, i)
        : (function (t, e) {
            return function s(i) {
              return (
                (i.delegateTarget = t),
                s.oneOff && B.off(t, i.type, e),
                e.apply(t, [i])
              );
            };
          })(t, s);
    (u.delegationSelector = o ? s : null),
      (u.originalHandler = r),
      (u.oneOff = n),
      (u.uidEvent = d),
      (c[d] = u),
      t.addEventListener(a, u, o);
  }
  function H(t, e, s, i, n) {
    const o = M(e[s], i, n);
    o && (t.removeEventListener(s, o, Boolean(n)), delete e[s][o.uidEvent]);
  }
  function R(t) {
    return (t = t.replace(C, "")), D[t] || t;
  }
  const B = {
      on(t, e, s, i) {
        j(t, e, s, i, !1);
      },
      one(t, e, s, i) {
        j(t, e, s, i, !0);
      },
      off(t, e, s, i) {
        if ("string" != typeof e || !t) return;
        const [n, o, r] = P(e, s, i),
          a = r !== e,
          l = x(t),
          c = e.startsWith(".");
        if (void 0 !== o) {
          if (!l || !l[r]) return;
          return void H(t, l, r, o, n ? s : null);
        }
        c &&
          Object.keys(l).forEach((s) => {
            !(function (t, e, s, i) {
              const n = e[s] || {};
              Object.keys(n).forEach((o) => {
                if (o.includes(i)) {
                  const i = n[o];
                  H(t, e, s, i.originalHandler, i.delegationSelector);
                }
              });
            })(t, l, s, e.slice(1));
          });
        const h = l[r] || {};
        Object.keys(h).forEach((s) => {
          const i = s.replace(k, "");
          if (!a || e.includes(i)) {
            const e = h[s];
            H(t, l, r, e.originalHandler, e.delegationSelector);
          }
        });
      },
      trigger(t, e, s) {
        if ("string" != typeof e || !t) return null;
        const i = _(),
          n = R(e),
          o = e !== n,
          r = N.has(n);
        let a,
          l = !0,
          c = !0,
          h = !1,
          d = null;
        return (
          o &&
            i &&
            ((a = i.Event(e, s)),
            i(t).trigger(a),
            (l = !a.isPropagationStopped()),
            (c = !a.isImmediatePropagationStopped()),
            (h = a.isDefaultPrevented())),
          r
            ? ((d = document.createEvent("HTMLEvents")), d.initEvent(n, l, !0))
            : (d = new CustomEvent(e, { bubbles: l, cancelable: !0 })),
          void 0 !== s &&
            Object.keys(s).forEach((t) => {
              Object.defineProperty(d, t, { get: () => s[t] });
            }),
          h && d.preventDefault(),
          c && t.dispatchEvent(d),
          d.defaultPrevented && void 0 !== a && a.preventDefault(),
          d
        );
      },
    },
    $ = new Map();
  var W = {
    set(t, e, s) {
      $.has(t) || $.set(t, new Map());
      const i = $.get(t);
      i.has(e) || 0 === i.size
        ? i.set(e, s)
        : console.error(
            `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
              Array.from(i.keys())[0]
            }.`
          );
    },
    get: (t, e) => ($.has(t) && $.get(t).get(e)) || null,
    remove(t, e) {
      if (!$.has(t)) return;
      const s = $.get(t);
      s.delete(e), 0 === s.size && $.delete(t);
    },
  };
  class q {
    constructor(t) {
      (t = h(t)) &&
        ((this._element = t),
        W.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      W.remove(this._element, this.constructor.DATA_KEY),
        B.off(this._element, this.constructor.EVENT_KEY),
        Object.getOwnPropertyNames(this).forEach((t) => {
          this[t] = null;
        });
    }
    _queueCallback(t, e, s = !0) {
      E(t, e, s);
    }
    static getInstance(t) {
      return W.get(t, this.DATA_KEY);
    }
    static getOrCreateInstance(t, e = {}) {
      return (
        this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
      );
    }
    static get VERSION() {
      return "5.0.2";
    }
    static get NAME() {
      throw new Error(
        'You have to implement the static method "NAME", for each component!'
      );
    }
    static get DATA_KEY() {
      return "bs." + this.NAME;
    }
    static get EVENT_KEY() {
      return "." + this.DATA_KEY;
    }
  }
  class z extends q {
    static get NAME() {
      return "alert";
    }
    close(t) {
      const e = t ? this._getRootElement(t) : this._element,
        s = this._triggerCloseEvent(e);
      null === s || s.defaultPrevented || this._removeElement(e);
    }
    _getRootElement(t) {
      return a(t) || t.closest(".alert");
    }
    _triggerCloseEvent(t) {
      return B.trigger(t, "close.bs.alert");
    }
    _removeElement(t) {
      t.classList.remove("show");
      const e = t.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(t), t, e);
    }
    _destroyElement(t) {
      t.remove(), B.trigger(t, "closed.bs.alert");
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = z.getOrCreateInstance(this);
        "close" === t && e[t](this);
      });
    }
    static handleDismiss(t) {
      return function (e) {
        e && e.preventDefault(), t.close(this);
      };
    }
  }
  B.on(
    document,
    "click.bs.alert.data-api",
    '[data-bs-dismiss="alert"]',
    z.handleDismiss(new z())
  ),
    y(z);
  class F extends q {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute(
        "aria-pressed",
        this._element.classList.toggle("active")
      );
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = F.getOrCreateInstance(this);
        "toggle" === t && e[t]();
      });
    }
  }
  function U(t) {
    return (
      "true" === t ||
      ("false" !== t &&
        (t === Number(t).toString()
          ? Number(t)
          : "" === t || "null" === t
          ? null
          : t))
    );
  }
  function K(t) {
    return t.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase());
  }
  B.on(
    document,
    "click.bs.button.data-api",
    '[data-bs-toggle="button"]',
    (t) => {
      t.preventDefault();
      const e = t.target.closest('[data-bs-toggle="button"]');
      F.getOrCreateInstance(e).toggle();
    }
  ),
    y(F);
  const V = {
      setDataAttribute(t, e, s) {
        t.setAttribute("data-bs-" + K(e), s);
      },
      removeDataAttribute(t, e) {
        t.removeAttribute("data-bs-" + K(e));
      },
      getDataAttributes(t) {
        if (!t) return {};
        const e = {};
        return (
          Object.keys(t.dataset)
            .filter((t) => t.startsWith("bs"))
            .forEach((s) => {
              let i = s.replace(/^bs/, "");
              (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
                (e[i] = U(t.dataset[s]));
            }),
          e
        );
      },
      getDataAttribute: (t, e) => U(t.getAttribute("data-bs-" + K(e))),
      offset(t) {
        const e = t.getBoundingClientRect();
        return {
          top: e.top + document.body.scrollTop,
          left: e.left + document.body.scrollLeft,
        };
      },
      position: (t) => ({ top: t.offsetTop, left: t.offsetLeft }),
    },
    Q = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    X = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    Y = "next",
    G = "prev",
    Z = "left",
    J = "right",
    tt = { ArrowLeft: J, ArrowRight: Z };
  class et extends q {
    constructor(t, e) {
      super(t),
        (this._items = null),
        (this._interval = null),
        (this._activeElement = null),
        (this._isPaused = !1),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this.touchStartX = 0),
        (this.touchDeltaX = 0),
        (this._config = this._getConfig(e)),
        (this._indicatorsElement = i.findOne(
          ".carousel-indicators",
          this._element
        )),
        (this._touchSupported =
          "ontouchstart" in document.documentElement ||
          navigator.maxTouchPoints > 0),
        (this._pointerEvent = Boolean(window.PointerEvent)),
        this._addEventListeners();
    }
    static get Default() {
      return Q;
    }
    static get NAME() {
      return "carousel";
    }
    next() {
      this._slide(Y);
    }
    nextWhenVisible() {
      !document.hidden && u(this._element) && this.next();
    }
    prev() {
      this._slide(G);
    }
    pause(t) {
      t || (this._isPaused = !0),
        i.findOne(".carousel-item-next, .carousel-item-prev", this._element) &&
          (l(this._element), this.cycle(!0)),
        clearInterval(this._interval),
        (this._interval = null);
    }
    cycle(t) {
      t || (this._isPaused = !1),
        this._interval &&
          (clearInterval(this._interval), (this._interval = null)),
        this._config &&
          this._config.interval &&
          !this._isPaused &&
          (this._updateInterval(),
          (this._interval = setInterval(
            (document.visibilityState ? this.nextWhenVisible : this.next).bind(
              this
            ),
            this._config.interval
          )));
    }
    to(t) {
      this._activeElement = i.findOne(".active.carousel-item", this._element);
      const e = this._getItemIndex(this._activeElement);
      if (t > this._items.length - 1 || t < 0) return;
      if (this._isSliding)
        return void B.one(this._element, "slid.bs.carousel", () => this.to(t));
      if (e === t) return this.pause(), void this.cycle();
      const s = t > e ? Y : G;
      this._slide(s, this._items[t]);
    }
    _getConfig(t) {
      return (
        (t = {
          ...Q,
          ...V.getDataAttributes(this._element),
          ...("object" == typeof t ? t : {}),
        }),
        d("carousel", t, X),
        t
      );
    }
    _handleSwipe() {
      const t = Math.abs(this.touchDeltaX);
      if (t <= 40) return;
      const e = t / this.touchDeltaX;
      (this.touchDeltaX = 0), e && this._slide(e > 0 ? J : Z);
    }
    _addEventListeners() {
      this._config.keyboard &&
        B.on(this._element, "keydown.bs.carousel", (t) => this._keydown(t)),
        "hover" === this._config.pause &&
          (B.on(this._element, "mouseenter.bs.carousel", (t) => this.pause(t)),
          B.on(this._element, "mouseleave.bs.carousel", (t) => this.cycle(t))),
        this._config.touch &&
          this._touchSupported &&
          this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      const t = (t) => {
          !this._pointerEvent ||
          ("pen" !== t.pointerType && "touch" !== t.pointerType)
            ? this._pointerEvent || (this.touchStartX = t.touches[0].clientX)
            : (this.touchStartX = t.clientX);
        },
        e = (t) => {
          this.touchDeltaX =
            t.touches && t.touches.length > 1
              ? 0
              : t.touches[0].clientX - this.touchStartX;
        },
        s = (t) => {
          !this._pointerEvent ||
            ("pen" !== t.pointerType && "touch" !== t.pointerType) ||
            (this.touchDeltaX = t.clientX - this.touchStartX),
            this._handleSwipe(),
            "hover" === this._config.pause &&
              (this.pause(),
              this.touchTimeout && clearTimeout(this.touchTimeout),
              (this.touchTimeout = setTimeout(
                (t) => this.cycle(t),
                500 + this._config.interval
              )));
        };
      i.find(".carousel-item img", this._element).forEach((t) => {
        B.on(t, "dragstart.bs.carousel", (t) => t.preventDefault());
      }),
        this._pointerEvent
          ? (B.on(this._element, "pointerdown.bs.carousel", (e) => t(e)),
            B.on(this._element, "pointerup.bs.carousel", (t) => s(t)),
            this._element.classList.add("pointer-event"))
          : (B.on(this._element, "touchstart.bs.carousel", (e) => t(e)),
            B.on(this._element, "touchmove.bs.carousel", (t) => e(t)),
            B.on(this._element, "touchend.bs.carousel", (t) => s(t)));
    }
    _keydown(t) {
      if (/input|textarea/i.test(t.target.tagName)) return;
      const e = tt[t.key];
      e && (t.preventDefault(), this._slide(e));
    }
    _getItemIndex(t) {
      return (
        (this._items =
          t && t.parentNode ? i.find(".carousel-item", t.parentNode) : []),
        this._items.indexOf(t)
      );
    }
    _getItemByOrder(t, e) {
      const s = t === Y;
      return A(this._items, e, s, this._config.wrap);
    }
    _triggerSlideEvent(t, e) {
      const s = this._getItemIndex(t),
        n = this._getItemIndex(
          i.findOne(".active.carousel-item", this._element)
        );
      return B.trigger(this._element, "slide.bs.carousel", {
        relatedTarget: t,
        direction: e,
        from: n,
        to: s,
      });
    }
    _setActiveIndicatorElement(t) {
      if (this._indicatorsElement) {
        const e = i.findOne(".active", this._indicatorsElement);
        e.classList.remove("active"), e.removeAttribute("aria-current");
        const s = i.find("[data-bs-target]", this._indicatorsElement);
        for (let e = 0; e < s.length; e++)
          if (
            Number.parseInt(s[e].getAttribute("data-bs-slide-to"), 10) ===
            this._getItemIndex(t)
          ) {
            s[e].classList.add("active"),
              s[e].setAttribute("aria-current", "true");
            break;
          }
      }
    }
    _updateInterval() {
      const t =
        this._activeElement ||
        i.findOne(".active.carousel-item", this._element);
      if (!t) return;
      const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
      e
        ? ((this._config.defaultInterval =
            this._config.defaultInterval || this._config.interval),
          (this._config.interval = e))
        : (this._config.interval =
            this._config.defaultInterval || this._config.interval);
    }
    _slide(t, e) {
      const s = this._directionToOrder(t),
        n = i.findOne(".active.carousel-item", this._element),
        o = this._getItemIndex(n),
        r = e || this._getItemByOrder(s, n),
        a = this._getItemIndex(r),
        l = Boolean(this._interval),
        c = s === Y,
        h = c ? "carousel-item-start" : "carousel-item-end",
        d = c ? "carousel-item-next" : "carousel-item-prev",
        u = this._orderToDirection(s);
      if (r && r.classList.contains("active"))
        return void (this._isSliding = !1);
      if (this._isSliding) return;
      if (this._triggerSlideEvent(r, u).defaultPrevented) return;
      if (!n || !r) return;
      (this._isSliding = !0),
        l && this.pause(),
        this._setActiveIndicatorElement(r),
        (this._activeElement = r);
      const g = () => {
        B.trigger(this._element, "slid.bs.carousel", {
          relatedTarget: r,
          direction: u,
          from: o,
          to: a,
        });
      };
      if (this._element.classList.contains("slide")) {
        r.classList.add(d), m(r), n.classList.add(h), r.classList.add(h);
        const t = () => {
          r.classList.remove(h, d),
            r.classList.add("active"),
            n.classList.remove("active", d, h),
            (this._isSliding = !1),
            setTimeout(g, 0);
        };
        this._queueCallback(t, n, !0);
      } else n.classList.remove("active"), r.classList.add("active"), (this._isSliding = !1), g();
      l && this.cycle();
    }
    _directionToOrder(t) {
      return [J, Z].includes(t)
        ? v()
          ? t === Z
            ? G
            : Y
          : t === Z
          ? Y
          : G
        : t;
    }
    _orderToDirection(t) {
      return [Y, G].includes(t)
        ? v()
          ? t === G
            ? Z
            : J
          : t === G
          ? J
          : Z
        : t;
    }
    static carouselInterface(t, e) {
      const s = et.getOrCreateInstance(t, e);
      let { _config: i } = s;
      "object" == typeof e && (i = { ...i, ...e });
      const n = "string" == typeof e ? e : i.slide;
      if ("number" == typeof e) s.to(e);
      else if ("string" == typeof n) {
        if (void 0 === s[n]) throw new TypeError(`No method named "${n}"`);
        s[n]();
      } else i.interval && i.ride && (s.pause(), s.cycle());
    }
    static jQueryInterface(t) {
      return this.each(function () {
        et.carouselInterface(this, t);
      });
    }
    static dataApiClickHandler(t) {
      const e = a(this);
      if (!e || !e.classList.contains("carousel")) return;
      const s = { ...V.getDataAttributes(e), ...V.getDataAttributes(this) },
        i = this.getAttribute("data-bs-slide-to");
      i && (s.interval = !1),
        et.carouselInterface(e, s),
        i && et.getInstance(e).to(i),
        t.preventDefault();
    }
  }
  B.on(
    document,
    "click.bs.carousel.data-api",
    "[data-bs-slide], [data-bs-slide-to]",
    et.dataApiClickHandler
  ),
    B.on(window, "load.bs.carousel.data-api", () => {
      const t = i.find('[data-bs-ride="carousel"]');
      for (let e = 0, s = t.length; e < s; e++)
        et.carouselInterface(t[e], et.getInstance(t[e]));
    }),
    y(et);
  const st = { toggle: !0, parent: "" },
    it = { toggle: "boolean", parent: "(string|element)" };
  class nt extends q {
    constructor(t, e) {
      super(t),
        (this._isTransitioning = !1),
        (this._config = this._getConfig(e)),
        (this._triggerArray = i.find(
          `[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`
        ));
      const s = i.find('[data-bs-toggle="collapse"]');
      for (let t = 0, e = s.length; t < e; t++) {
        const e = s[t],
          n = r(e),
          o = i.find(n).filter((t) => t === this._element);
        null !== n &&
          o.length &&
          ((this._selector = n), this._triggerArray.push(e));
      }
      (this._parent = this._config.parent ? this._getParent() : null),
        this._config.parent ||
          this._addAriaAndCollapsedClass(this._element, this._triggerArray),
        this._config.toggle && this.toggle();
    }
    static get Default() {
      return st;
    }
    static get NAME() {
      return "collapse";
    }
    toggle() {
      this._element.classList.contains("show") ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._element.classList.contains("show"))
        return;
      let t, e;
      this._parent &&
        ((t = i
          .find(".show, .collapsing", this._parent)
          .filter((t) =>
            "string" == typeof this._config.parent
              ? t.getAttribute("data-bs-parent") === this._config.parent
              : t.classList.contains("collapse")
          )),
        0 === t.length && (t = null));
      const s = i.findOne(this._selector);
      if (t) {
        const i = t.find((t) => s !== t);
        if (((e = i ? nt.getInstance(i) : null), e && e._isTransitioning))
          return;
      }
      if (B.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
      t &&
        t.forEach((t) => {
          s !== t && nt.collapseInterface(t, "hide"),
            e || W.set(t, "bs.collapse", null);
        });
      const n = this._getDimension();
      this._element.classList.remove("collapse"),
        this._element.classList.add("collapsing"),
        (this._element.style[n] = 0),
        this._triggerArray.length &&
          this._triggerArray.forEach((t) => {
            t.classList.remove("collapsed"),
              t.setAttribute("aria-expanded", !0);
          }),
        this.setTransitioning(!0);
      const o = "scroll" + (n[0].toUpperCase() + n.slice(1));
      this._queueCallback(
        () => {
          this._element.classList.remove("collapsing"),
            this._element.classList.add("collapse", "show"),
            (this._element.style[n] = ""),
            this.setTransitioning(!1),
            B.trigger(this._element, "shown.bs.collapse");
        },
        this._element,
        !0
      ),
        (this._element.style[n] = this._element[o] + "px");
    }
    hide() {
      if (this._isTransitioning || !this._element.classList.contains("show"))
        return;
      if (B.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
      const t = this._getDimension();
      (this._element.style[t] =
        this._element.getBoundingClientRect()[t] + "px"),
        m(this._element),
        this._element.classList.add("collapsing"),
        this._element.classList.remove("collapse", "show");
      const e = this._triggerArray.length;
      if (e > 0)
        for (let t = 0; t < e; t++) {
          const e = this._triggerArray[t],
            s = a(e);
          s &&
            !s.classList.contains("show") &&
            (e.classList.add("collapsed"), e.setAttribute("aria-expanded", !1));
        }
      this.setTransitioning(!0),
        (this._element.style[t] = ""),
        this._queueCallback(
          () => {
            this.setTransitioning(!1),
              this._element.classList.remove("collapsing"),
              this._element.classList.add("collapse"),
              B.trigger(this._element, "hidden.bs.collapse");
          },
          this._element,
          !0
        );
    }
    setTransitioning(t) {
      this._isTransitioning = t;
    }
    _getConfig(t) {
      return (
        ((t = { ...st, ...t }).toggle = Boolean(t.toggle)),
        d("collapse", t, it),
        t
      );
    }
    _getDimension() {
      return this._element.classList.contains("width") ? "width" : "height";
    }
    _getParent() {
      let { parent: t } = this._config;
      t = h(t);
      const e = `[data-bs-toggle="collapse"][data-bs-parent="${t}"]`;
      return (
        i.find(e, t).forEach((t) => {
          const e = a(t);
          this._addAriaAndCollapsedClass(e, [t]);
        }),
        t
      );
    }
    _addAriaAndCollapsedClass(t, e) {
      if (!t || !e.length) return;
      const s = t.classList.contains("show");
      e.forEach((t) => {
        s ? t.classList.remove("collapsed") : t.classList.add("collapsed"),
          t.setAttribute("aria-expanded", s);
      });
    }
    static collapseInterface(t, e) {
      let s = nt.getInstance(t);
      const i = {
        ...st,
        ...V.getDataAttributes(t),
        ...("object" == typeof e && e ? e : {}),
      };
      if (
        (!s &&
          i.toggle &&
          "string" == typeof e &&
          /show|hide/.test(e) &&
          (i.toggle = !1),
        s || (s = new nt(t, i)),
        "string" == typeof e)
      ) {
        if (void 0 === s[e]) throw new TypeError(`No method named "${e}"`);
        s[e]();
      }
    }
    static jQueryInterface(t) {
      return this.each(function () {
        nt.collapseInterface(this, t);
      });
    }
  }
  B.on(
    document,
    "click.bs.collapse.data-api",
    '[data-bs-toggle="collapse"]',
    function (t) {
      ("A" === t.target.tagName ||
        (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
        t.preventDefault();
      const e = V.getDataAttributes(this),
        s = r(this);
      i.find(s).forEach((t) => {
        const s = nt.getInstance(t);
        let i;
        s
          ? (null === s._parent &&
              "string" == typeof e.parent &&
              ((s._config.parent = e.parent), (s._parent = s._getParent())),
            (i = "toggle"))
          : (i = e),
          nt.collapseInterface(t, i);
      });
    }
  ),
    y(nt);
  const ot = new RegExp("ArrowUp|ArrowDown|Escape"),
    rt = v() ? "top-end" : "top-start",
    at = v() ? "top-start" : "top-end",
    lt = v() ? "bottom-end" : "bottom-start",
    ct = v() ? "bottom-start" : "bottom-end",
    ht = v() ? "left-start" : "right-start",
    dt = v() ? "right-start" : "left-start",
    ut = {
      offset: [0, 2],
      boundary: "clippingParents",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
      autoClose: !0,
    },
    gt = {
      offset: "(array|string|function)",
      boundary: "(string|element)",
      reference: "(string|element|object)",
      display: "string",
      popperConfig: "(null|object|function)",
      autoClose: "(boolean|string)",
    };
  class pt extends q {
    constructor(t, e) {
      super(t),
        (this._popper = null),
        (this._config = this._getConfig(e)),
        (this._menu = this._getMenuElement()),
        (this._inNavbar = this._detectNavbar()),
        this._addEventListeners();
    }
    static get Default() {
      return ut;
    }
    static get DefaultType() {
      return gt;
    }
    static get NAME() {
      return "dropdown";
    }
    toggle() {
      g(this._element) ||
        (this._element.classList.contains("show") ? this.hide() : this.show());
    }
    show() {
      if (g(this._element) || this._menu.classList.contains("show")) return;
      const t = pt.getParentFromElement(this._element),
        e = { relatedTarget: this._element };
      if (!B.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
        if (this._inNavbar) V.setDataAttribute(this._menu, "popper", "none");
        else {
          if (void 0 === s)
            throw new TypeError(
              "Bootstrap's dropdowns require Popper (https://popper.js.org)"
            );
          let e = this._element;
          "parent" === this._config.reference
            ? (e = t)
            : c(this._config.reference)
            ? (e = h(this._config.reference))
            : "object" == typeof this._config.reference &&
              (e = this._config.reference);
          const i = this._getPopperConfig(),
            n = i.modifiers.find(
              (t) => "applyStyles" === t.name && !1 === t.enabled
            );
          (this._popper = s.createPopper(e, this._menu, i)),
            n && V.setDataAttribute(this._menu, "popper", "static");
        }
        "ontouchstart" in document.documentElement &&
          !t.closest(".navbar-nav") &&
          []
            .concat(...document.body.children)
            .forEach((t) => B.on(t, "mouseover", f)),
          this._element.focus(),
          this._element.setAttribute("aria-expanded", !0),
          this._menu.classList.toggle("show"),
          this._element.classList.toggle("show"),
          B.trigger(this._element, "shown.bs.dropdown", e);
      }
    }
    hide() {
      if (g(this._element) || !this._menu.classList.contains("show")) return;
      const t = { relatedTarget: this._element };
      this._completeHide(t);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      (this._inNavbar = this._detectNavbar()),
        this._popper && this._popper.update();
    }
    _addEventListeners() {
      B.on(this._element, "click.bs.dropdown", (t) => {
        t.preventDefault(), this.toggle();
      });
    }
    _completeHide(t) {
      B.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented ||
        ("ontouchstart" in document.documentElement &&
          []
            .concat(...document.body.children)
            .forEach((t) => B.off(t, "mouseover", f)),
        this._popper && this._popper.destroy(),
        this._menu.classList.remove("show"),
        this._element.classList.remove("show"),
        this._element.setAttribute("aria-expanded", "false"),
        V.removeDataAttribute(this._menu, "popper"),
        B.trigger(this._element, "hidden.bs.dropdown", t));
    }
    _getConfig(t) {
      if (
        ((t = {
          ...this.constructor.Default,
          ...V.getDataAttributes(this._element),
          ...t,
        }),
        d("dropdown", t, this.constructor.DefaultType),
        "object" == typeof t.reference &&
          !c(t.reference) &&
          "function" != typeof t.reference.getBoundingClientRect)
      )
        throw new TypeError(
          "dropdown".toUpperCase() +
            ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.'
        );
      return t;
    }
    _getMenuElement() {
      return i.next(this._element, ".dropdown-menu")[0];
    }
    _getPlacement() {
      const t = this._element.parentNode;
      if (t.classList.contains("dropend")) return ht;
      if (t.classList.contains("dropstart")) return dt;
      const e =
        "end" ===
        getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t.classList.contains("dropup") ? (e ? at : rt) : e ? ct : lt;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _getPopperConfig() {
      const t = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          { name: "offset", options: { offset: this._getOffset() } },
        ],
      };
      return (
        "static" === this._config.display &&
          (t.modifiers = [{ name: "applyStyles", enabled: !1 }]),
        {
          ...t,
          ...("function" == typeof this._config.popperConfig
            ? this._config.popperConfig(t)
            : this._config.popperConfig),
        }
      );
    }
    _selectMenuItem({ key: t, target: e }) {
      const s = i
        .find(
          ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
          this._menu
        )
        .filter(u);
      s.length && A(s, e, "ArrowDown" === t, !s.includes(e)).focus();
    }
    static dropdownInterface(t, e) {
      const s = pt.getOrCreateInstance(t, e);
      if ("string" == typeof e) {
        if (void 0 === s[e]) throw new TypeError(`No method named "${e}"`);
        s[e]();
      }
    }
    static jQueryInterface(t) {
      return this.each(function () {
        pt.dropdownInterface(this, t);
      });
    }
    static clearMenus(t) {
      if (t && (2 === t.button || ("keyup" === t.type && "Tab" !== t.key)))
        return;
      const e = i.find('[data-bs-toggle="dropdown"]');
      for (let s = 0, i = e.length; s < i; s++) {
        const i = pt.getInstance(e[s]);
        if (!i || !1 === i._config.autoClose) continue;
        if (!i._element.classList.contains("show")) continue;
        const n = { relatedTarget: i._element };
        if (t) {
          const e = t.composedPath(),
            s = e.includes(i._menu);
          if (
            e.includes(i._element) ||
            ("inside" === i._config.autoClose && !s) ||
            ("outside" === i._config.autoClose && s)
          )
            continue;
          if (
            i._menu.contains(t.target) &&
            (("keyup" === t.type && "Tab" === t.key) ||
              /input|select|option|textarea|form/i.test(t.target.tagName))
          )
            continue;
          "click" === t.type && (n.clickEvent = t);
        }
        i._completeHide(n);
      }
    }
    static getParentFromElement(t) {
      return a(t) || t.parentNode;
    }
    static dataApiKeydownHandler(t) {
      if (
        /input|textarea/i.test(t.target.tagName)
          ? "Space" === t.key ||
            ("Escape" !== t.key &&
              (("ArrowDown" !== t.key && "ArrowUp" !== t.key) ||
                t.target.closest(".dropdown-menu")))
          : !ot.test(t.key)
      )
        return;
      const e = this.classList.contains("show");
      if (!e && "Escape" === t.key) return;
      if ((t.preventDefault(), t.stopPropagation(), g(this))) return;
      const s = () =>
        this.matches('[data-bs-toggle="dropdown"]')
          ? this
          : i.prev(this, '[data-bs-toggle="dropdown"]')[0];
      return "Escape" === t.key
        ? (s().focus(), void pt.clearMenus())
        : "ArrowUp" === t.key || "ArrowDown" === t.key
        ? (e || s().click(), void pt.getInstance(s())._selectMenuItem(t))
        : void ((e && "Space" !== t.key) || pt.clearMenus());
    }
  }
  B.on(
    document,
    "keydown.bs.dropdown.data-api",
    '[data-bs-toggle="dropdown"]',
    pt.dataApiKeydownHandler
  ),
    B.on(
      document,
      "keydown.bs.dropdown.data-api",
      ".dropdown-menu",
      pt.dataApiKeydownHandler
    ),
    B.on(document, "click.bs.dropdown.data-api", pt.clearMenus),
    B.on(document, "keyup.bs.dropdown.data-api", pt.clearMenus),
    B.on(
      document,
      "click.bs.dropdown.data-api",
      '[data-bs-toggle="dropdown"]',
      function (t) {
        t.preventDefault(), pt.dropdownInterface(this);
      }
    ),
    y(pt);
  class ft {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t);
    }
    hide() {
      const t = this.getWidth();
      this._disableOverFlow(),
        this._setElementAttributes(this._element, "paddingRight", (e) => e + t),
        this._setElementAttributes(
          ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          "paddingRight",
          (e) => e + t
        ),
        this._setElementAttributes(".sticky-top", "marginRight", (e) => e - t);
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"),
        (this._element.style.overflow = "hidden");
    }
    _setElementAttributes(t, e, s) {
      const i = this.getWidth();
      this._applyManipulationCallback(t, (t) => {
        if (t !== this._element && window.innerWidth > t.clientWidth + i)
          return;
        this._saveInitialAttribute(t, e);
        const n = window.getComputedStyle(t)[e];
        t.style[e] = s(Number.parseFloat(n)) + "px";
      });
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"),
        this._resetElementAttributes(this._element, "paddingRight"),
        this._resetElementAttributes(
          ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          "paddingRight"
        ),
        this._resetElementAttributes(".sticky-top", "marginRight");
    }
    _saveInitialAttribute(t, e) {
      const s = t.style[e];
      s && V.setDataAttribute(t, e, s);
    }
    _resetElementAttributes(t, e) {
      this._applyManipulationCallback(t, (t) => {
        const s = V.getDataAttribute(t, e);
        void 0 === s
          ? t.style.removeProperty(e)
          : (V.removeDataAttribute(t, e), (t.style[e] = s));
      });
    }
    _applyManipulationCallback(t, e) {
      c(t) ? e(t) : i.find(t, this._element).forEach(e);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
  }
  const mt = {
      isVisible: !0,
      isAnimated: !1,
      rootElement: "body",
      clickCallback: null,
    },
    _t = {
      isVisible: "boolean",
      isAnimated: "boolean",
      rootElement: "(element|string)",
      clickCallback: "(function|null)",
    };
  class bt {
    constructor(t) {
      (this._config = this._getConfig(t)),
        (this._isAppended = !1),
        (this._element = null);
    }
    show(t) {
      this._config.isVisible
        ? (this._append(),
          this._config.isAnimated && m(this._getElement()),
          this._getElement().classList.add("show"),
          this._emulateAnimation(() => {
            w(t);
          }))
        : w(t);
    }
    hide(t) {
      this._config.isVisible
        ? (this._getElement().classList.remove("show"),
          this._emulateAnimation(() => {
            this.dispose(), w(t);
          }))
        : w(t);
    }
    _getElement() {
      if (!this._element) {
        const t = document.createElement("div");
        (t.className = "modal-backdrop"),
          this._config.isAnimated && t.classList.add("fade"),
          (this._element = t);
      }
      return this._element;
    }
    _getConfig(t) {
      return (
        ((t = { ...mt, ...("object" == typeof t ? t : {}) }).rootElement = h(
          t.rootElement
        )),
        d("backdrop", t, _t),
        t
      );
    }
    _append() {
      this._isAppended ||
        (this._config.rootElement.appendChild(this._getElement()),
        B.on(this._getElement(), "mousedown.bs.backdrop", () => {
          w(this._config.clickCallback);
        }),
        (this._isAppended = !0));
    }
    dispose() {
      this._isAppended &&
        (B.off(this._element, "mousedown.bs.backdrop"),
        this._element.remove(),
        (this._isAppended = !1));
    }
    _emulateAnimation(t) {
      E(t, this._getElement(), this._config.isAnimated);
    }
  }
  const vt = { backdrop: !0, keyboard: !0, focus: !0 },
    yt = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
    };
  class wt extends q {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._dialog = i.findOne(".modal-dialog", this._element)),
        (this._backdrop = this._initializeBackDrop()),
        (this._isShown = !1),
        (this._ignoreBackdropClick = !1),
        (this._isTransitioning = !1),
        (this._scrollBar = new ft());
    }
    static get Default() {
      return vt;
    }
    static get NAME() {
      return "modal";
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        this._isTransitioning ||
        B.trigger(this._element, "show.bs.modal", { relatedTarget: t })
          .defaultPrevented ||
        ((this._isShown = !0),
        this._isAnimated() && (this._isTransitioning = !0),
        this._scrollBar.hide(),
        document.body.classList.add("modal-open"),
        this._adjustDialog(),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        B.on(
          this._element,
          "click.dismiss.bs.modal",
          '[data-bs-dismiss="modal"]',
          (t) => this.hide(t)
        ),
        B.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
          B.one(this._element, "mouseup.dismiss.bs.modal", (t) => {
            t.target === this._element && (this._ignoreBackdropClick = !0);
          });
        }),
        this._showBackdrop(() => this._showElement(t)));
    }
    hide(t) {
      if (
        (t && ["A", "AREA"].includes(t.target.tagName) && t.preventDefault(),
        !this._isShown || this._isTransitioning)
      )
        return;
      if (B.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
      this._isShown = !1;
      const e = this._isAnimated();
      e && (this._isTransitioning = !0),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        B.off(document, "focusin.bs.modal"),
        this._element.classList.remove("show"),
        B.off(this._element, "click.dismiss.bs.modal"),
        B.off(this._dialog, "mousedown.dismiss.bs.modal"),
        this._queueCallback(() => this._hideModal(), this._element, e);
    }
    dispose() {
      [window, this._dialog].forEach((t) => B.off(t, ".bs.modal")),
        this._backdrop.dispose(),
        super.dispose(),
        B.off(document, "focusin.bs.modal");
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new bt({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated(),
      });
    }
    _getConfig(t) {
      return (
        (t = {
          ...vt,
          ...V.getDataAttributes(this._element),
          ...("object" == typeof t ? t : {}),
        }),
        d("modal", t, yt),
        t
      );
    }
    _showElement(t) {
      const e = this._isAnimated(),
        s = i.findOne(".modal-body", this._dialog);
      (this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
        document.body.appendChild(this._element),
        (this._element.style.display = "block"),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        (this._element.scrollTop = 0),
        s && (s.scrollTop = 0),
        e && m(this._element),
        this._element.classList.add("show"),
        this._config.focus && this._enforceFocus(),
        this._queueCallback(
          () => {
            this._config.focus && this._element.focus(),
              (this._isTransitioning = !1),
              B.trigger(this._element, "shown.bs.modal", { relatedTarget: t });
          },
          this._dialog,
          e
        );
    }
    _enforceFocus() {
      B.off(document, "focusin.bs.modal"),
        B.on(document, "focusin.bs.modal", (t) => {
          document === t.target ||
            this._element === t.target ||
            this._element.contains(t.target) ||
            this._element.focus();
        });
    }
    _setEscapeEvent() {
      this._isShown
        ? B.on(this._element, "keydown.dismiss.bs.modal", (t) => {
            this._config.keyboard && "Escape" === t.key
              ? (t.preventDefault(), this.hide())
              : this._config.keyboard ||
                "Escape" !== t.key ||
                this._triggerBackdropTransition();
          })
        : B.off(this._element, "keydown.dismiss.bs.modal");
    }
    _setResizeEvent() {
      this._isShown
        ? B.on(window, "resize.bs.modal", () => this._adjustDialog())
        : B.off(window, "resize.bs.modal");
    }
    _hideModal() {
      (this._element.style.display = "none"),
        this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        (this._isTransitioning = !1),
        this._backdrop.hide(() => {
          document.body.classList.remove("modal-open"),
            this._resetAdjustments(),
            this._scrollBar.reset(),
            B.trigger(this._element, "hidden.bs.modal");
        });
    }
    _showBackdrop(t) {
      B.on(this._element, "click.dismiss.bs.modal", (t) => {
        this._ignoreBackdropClick
          ? (this._ignoreBackdropClick = !1)
          : t.target === t.currentTarget &&
            (!0 === this._config.backdrop
              ? this.hide()
              : "static" === this._config.backdrop &&
                this._triggerBackdropTransition());
      }),
        this._backdrop.show(t);
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      if (B.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
        return;
      const { classList: t, scrollHeight: e, style: s } = this._element,
        i = e > document.documentElement.clientHeight;
      (!i && "hidden" === s.overflowY) ||
        t.contains("modal-static") ||
        (i || (s.overflowY = "hidden"),
        t.add("modal-static"),
        this._queueCallback(() => {
          t.remove("modal-static"),
            i ||
              this._queueCallback(() => {
                s.overflowY = "";
              }, this._dialog);
        }, this._dialog),
        this._element.focus());
    }
    _adjustDialog() {
      const t =
          this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._scrollBar.getWidth(),
        s = e > 0;
      ((!s && t && !v()) || (s && !t && v())) &&
        (this._element.style.paddingLeft = e + "px"),
        ((s && !t && !v()) || (!s && t && v())) &&
          (this._element.style.paddingRight = e + "px");
    }
    _resetAdjustments() {
      (this._element.style.paddingLeft = ""),
        (this._element.style.paddingRight = "");
    }
    static jQueryInterface(t, e) {
      return this.each(function () {
        const s = wt.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === s[t]) throw new TypeError(`No method named "${t}"`);
          s[t](e);
        }
      });
    }
  }
  B.on(
    document,
    "click.bs.modal.data-api",
    '[data-bs-toggle="modal"]',
    function (t) {
      const e = a(this);
      ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        B.one(e, "show.bs.modal", (t) => {
          t.defaultPrevented ||
            B.one(e, "hidden.bs.modal", () => {
              u(this) && this.focus();
            });
        }),
        wt.getOrCreateInstance(e).toggle(this);
    }
  ),
    y(wt);
  const Et = { backdrop: !0, keyboard: !0, scroll: !1 },
    At = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" };
  class Tt extends q {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._isShown = !1),
        (this._backdrop = this._initializeBackDrop()),
        this._addEventListeners();
    }
    static get NAME() {
      return "offcanvas";
    }
    static get Default() {
      return Et;
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        B.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t })
          .defaultPrevented ||
        ((this._isShown = !0),
        (this._element.style.visibility = "visible"),
        this._backdrop.show(),
        this._config.scroll ||
          (new ft().hide(), this._enforceFocusOnElement(this._element)),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        this._element.classList.add("show"),
        this._queueCallback(
          () => {
            B.trigger(this._element, "shown.bs.offcanvas", {
              relatedTarget: t,
            });
          },
          this._element,
          !0
        ));
    }
    hide() {
      this._isShown &&
        (B.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
          (B.off(document, "focusin.bs.offcanvas"),
          this._element.blur(),
          (this._isShown = !1),
          this._element.classList.remove("show"),
          this._backdrop.hide(),
          this._queueCallback(
            () => {
              this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                (this._element.style.visibility = "hidden"),
                this._config.scroll || new ft().reset(),
                B.trigger(this._element, "hidden.bs.offcanvas");
            },
            this._element,
            !0
          )));
    }
    dispose() {
      this._backdrop.dispose(),
        super.dispose(),
        B.off(document, "focusin.bs.offcanvas");
    }
    _getConfig(t) {
      return (
        (t = {
          ...Et,
          ...V.getDataAttributes(this._element),
          ...("object" == typeof t ? t : {}),
        }),
        d("offcanvas", t, At),
        t
      );
    }
    _initializeBackDrop() {
      return new bt({
        isVisible: this._config.backdrop,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: () => this.hide(),
      });
    }
    _enforceFocusOnElement(t) {
      B.off(document, "focusin.bs.offcanvas"),
        B.on(document, "focusin.bs.offcanvas", (e) => {
          document === e.target ||
            t === e.target ||
            t.contains(e.target) ||
            t.focus();
        }),
        t.focus();
    }
    _addEventListeners() {
      B.on(
        this._element,
        "click.dismiss.bs.offcanvas",
        '[data-bs-dismiss="offcanvas"]',
        () => this.hide()
      ),
        B.on(this._element, "keydown.dismiss.bs.offcanvas", (t) => {
          this._config.keyboard && "Escape" === t.key && this.hide();
        });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Tt.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  B.on(
    document,
    "click.bs.offcanvas.data-api",
    '[data-bs-toggle="offcanvas"]',
    function (t) {
      const e = a(this);
      if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), g(this)))
        return;
      B.one(e, "hidden.bs.offcanvas", () => {
        u(this) && this.focus();
      });
      const s = i.findOne(".offcanvas.show");
      s && s !== e && Tt.getInstance(s).hide(),
        Tt.getOrCreateInstance(e).toggle(this);
    }
  ),
    B.on(window, "load.bs.offcanvas.data-api", () =>
      i.find(".offcanvas.show").forEach((t) => Tt.getOrCreateInstance(t).show())
    ),
    y(Tt);
  const Ct = new Set([
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ]),
    kt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
    Lt =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    Ot = (t, e) => {
      const s = t.nodeName.toLowerCase();
      if (e.includes(s))
        return (
          !Ct.has(s) || Boolean(kt.test(t.nodeValue) || Lt.test(t.nodeValue))
        );
      const i = e.filter((t) => t instanceof RegExp);
      for (let t = 0, e = i.length; t < e; t++) if (i[t].test(s)) return !0;
      return !1;
    };
  function Dt(t, e, s) {
    if (!t.length) return t;
    if (s && "function" == typeof s) return s(t);
    const i = new window.DOMParser().parseFromString(t, "text/html"),
      n = Object.keys(e),
      o = [].concat(...i.body.querySelectorAll("*"));
    for (let t = 0, s = o.length; t < s; t++) {
      const s = o[t],
        i = s.nodeName.toLowerCase();
      if (!n.includes(i)) {
        s.remove();
        continue;
      }
      const r = [].concat(...s.attributes),
        a = [].concat(e["*"] || [], e[i] || []);
      r.forEach((t) => {
        Ot(t, a) || s.removeAttribute(t.nodeName);
      });
    }
    return i.body.innerHTML;
  }
  const It = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
    Nt = new Set(["sanitize", "allowList", "sanitizeFn"]),
    St = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(array|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacements: "array",
      boundary: "(string|element)",
      customClass: "(string|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      allowList: "object",
      popperConfig: "(null|object|function)",
    },
    xt = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: v() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: v() ? "right" : "left",
    },
    Mt = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: [0, 0],
      container: !1,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      boundary: "clippingParents",
      customClass: "",
      sanitize: !0,
      sanitizeFn: null,
      allowList: {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      popperConfig: null,
    },
    Pt = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip",
    };
  class jt extends q {
    constructor(t, e) {
      if (void 0 === s)
        throw new TypeError(
          "Bootstrap's tooltips require Popper (https://popper.js.org)"
        );
      super(t),
        (this._isEnabled = !0),
        (this._timeout = 0),
        (this._hoverState = ""),
        (this._activeTrigger = {}),
        (this._popper = null),
        (this._config = this._getConfig(e)),
        (this.tip = null),
        this._setListeners();
    }
    static get Default() {
      return Mt;
    }
    static get NAME() {
      return "tooltip";
    }
    static get Event() {
      return Pt;
    }
    static get DefaultType() {
      return St;
    }
    enable() {
      this._isEnabled = !0;
    }
    disable() {
      this._isEnabled = !1;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle(t) {
      if (this._isEnabled)
        if (t) {
          const e = this._initializeOnDelegatedTarget(t);
          (e._activeTrigger.click = !e._activeTrigger.click),
            e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
        } else {
          if (this.getTipElement().classList.contains("show"))
            return void this._leave(null, this);
          this._enter(null, this);
        }
    }
    dispose() {
      clearTimeout(this._timeout),
        B.off(
          this._element.closest(".modal"),
          "hide.bs.modal",
          this._hideModalHandler
        ),
        this.tip && this.tip.remove(),
        this._popper && this._popper.destroy(),
        super.dispose();
    }
    show() {
      if ("none" === this._element.style.display)
        throw new Error("Please use show on visible elements");
      if (!this.isWithContent() || !this._isEnabled) return;
      const t = B.trigger(this._element, this.constructor.Event.SHOW),
        e = p(this._element),
        i =
          null === e
            ? this._element.ownerDocument.documentElement.contains(
                this._element
              )
            : e.contains(this._element);
      if (t.defaultPrevented || !i) return;
      const o = this.getTipElement(),
        r = n(this.constructor.NAME);
      o.setAttribute("id", r),
        this._element.setAttribute("aria-describedby", r),
        this.setContent(),
        this._config.animation && o.classList.add("fade");
      const a =
          "function" == typeof this._config.placement
            ? this._config.placement.call(this, o, this._element)
            : this._config.placement,
        l = this._getAttachment(a);
      this._addAttachmentClass(l);
      const { container: c } = this._config;
      W.set(o, this.constructor.DATA_KEY, this),
        this._element.ownerDocument.documentElement.contains(this.tip) ||
          (c.appendChild(o),
          B.trigger(this._element, this.constructor.Event.INSERTED)),
        this._popper
          ? this._popper.update()
          : (this._popper = s.createPopper(
              this._element,
              o,
              this._getPopperConfig(l)
            )),
        o.classList.add("show");
      const h =
        "function" == typeof this._config.customClass
          ? this._config.customClass()
          : this._config.customClass;
      h && o.classList.add(...h.split(" ")),
        "ontouchstart" in document.documentElement &&
          [].concat(...document.body.children).forEach((t) => {
            B.on(t, "mouseover", f);
          });
      const d = this.tip.classList.contains("fade");
      this._queueCallback(
        () => {
          const t = this._hoverState;
          (this._hoverState = null),
            B.trigger(this._element, this.constructor.Event.SHOWN),
            "out" === t && this._leave(null, this);
        },
        this.tip,
        d
      );
    }
    hide() {
      if (!this._popper) return;
      const t = this.getTipElement();
      if (
        B.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented
      )
        return;
      t.classList.remove("show"),
        "ontouchstart" in document.documentElement &&
          []
            .concat(...document.body.children)
            .forEach((t) => B.off(t, "mouseover", f)),
        (this._activeTrigger.click = !1),
        (this._activeTrigger.focus = !1),
        (this._activeTrigger.hover = !1);
      const e = this.tip.classList.contains("fade");
      this._queueCallback(
        () => {
          this._isWithActiveTrigger() ||
            ("show" !== this._hoverState && t.remove(),
            this._cleanTipClass(),
            this._element.removeAttribute("aria-describedby"),
            B.trigger(this._element, this.constructor.Event.HIDDEN),
            this._popper && (this._popper.destroy(), (this._popper = null)));
        },
        this.tip,
        e
      ),
        (this._hoverState = "");
    }
    update() {
      null !== this._popper && this._popper.update();
    }
    isWithContent() {
      return Boolean(this.getTitle());
    }
    getTipElement() {
      if (this.tip) return this.tip;
      const t = document.createElement("div");
      return (
        (t.innerHTML = this._config.template),
        (this.tip = t.children[0]),
        this.tip
      );
    }
    setContent() {
      const t = this.getTipElement();
      this.setElementContent(i.findOne(".tooltip-inner", t), this.getTitle()),
        t.classList.remove("fade", "show");
    }
    setElementContent(t, e) {
      if (null !== t)
        return c(e)
          ? ((e = h(e)),
            void (this._config.html
              ? e.parentNode !== t && ((t.innerHTML = ""), t.appendChild(e))
              : (t.textContent = e.textContent)))
          : void (this._config.html
              ? (this._config.sanitize &&
                  (e = Dt(e, this._config.allowList, this._config.sanitizeFn)),
                (t.innerHTML = e))
              : (t.textContent = e));
    }
    getTitle() {
      let t = this._element.getAttribute("data-bs-original-title");
      return (
        t ||
          (t =
            "function" == typeof this._config.title
              ? this._config.title.call(this._element)
              : this._config.title),
        t
      );
    }
    updateAttachment(t) {
      return "right" === t ? "end" : "left" === t ? "start" : t;
    }
    _initializeOnDelegatedTarget(t, e) {
      const s = this.constructor.DATA_KEY;
      return (
        (e = e || W.get(t.delegateTarget, s)) ||
          ((e = new this.constructor(
            t.delegateTarget,
            this._getDelegateConfig()
          )),
          W.set(t.delegateTarget, s, e)),
        e
      );
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _getPopperConfig(t) {
      const e = {
        placement: t,
        modifiers: [
          {
            name: "flip",
            options: { fallbackPlacements: this._config.fallbackPlacements },
          },
          { name: "offset", options: { offset: this._getOffset() } },
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          {
            name: "arrow",
            options: { element: `.${this.constructor.NAME}-arrow` },
          },
          {
            name: "onChange",
            enabled: !0,
            phase: "afterWrite",
            fn: (t) => this._handlePopperPlacementChange(t),
          },
        ],
        onFirstUpdate: (t) => {
          t.options.placement !== t.placement &&
            this._handlePopperPlacementChange(t);
        },
      };
      return {
        ...e,
        ...("function" == typeof this._config.popperConfig
          ? this._config.popperConfig(e)
          : this._config.popperConfig),
      };
    }
    _addAttachmentClass(t) {
      this.getTipElement().classList.add(
        "bs-tooltip-" + this.updateAttachment(t)
      );
    }
    _getAttachment(t) {
      return xt[t.toUpperCase()];
    }
    _setListeners() {
      this._config.trigger.split(" ").forEach((t) => {
        if ("click" === t)
          B.on(
            this._element,
            this.constructor.Event.CLICK,
            this._config.selector,
            (t) => this.toggle(t)
          );
        else if ("manual" !== t) {
          const e =
              "hover" === t
                ? this.constructor.Event.MOUSEENTER
                : this.constructor.Event.FOCUSIN,
            s =
              "hover" === t
                ? this.constructor.Event.MOUSELEAVE
                : this.constructor.Event.FOCUSOUT;
          B.on(this._element, e, this._config.selector, (t) => this._enter(t)),
            B.on(this._element, s, this._config.selector, (t) =>
              this._leave(t)
            );
        }
      }),
        (this._hideModalHandler = () => {
          this._element && this.hide();
        }),
        B.on(
          this._element.closest(".modal"),
          "hide.bs.modal",
          this._hideModalHandler
        ),
        this._config.selector
          ? (this._config = {
              ...this._config,
              trigger: "manual",
              selector: "",
            })
          : this._fixTitle();
    }
    _fixTitle() {
      const t = this._element.getAttribute("title"),
        e = typeof this._element.getAttribute("data-bs-original-title");
      (t || "string" !== e) &&
        (this._element.setAttribute("data-bs-original-title", t || ""),
        !t ||
          this._element.getAttribute("aria-label") ||
          this._element.textContent ||
          this._element.setAttribute("aria-label", t),
        this._element.setAttribute("title", ""));
    }
    _enter(t, e) {
      (e = this._initializeOnDelegatedTarget(t, e)),
        t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
        e.getTipElement().classList.contains("show") || "show" === e._hoverState
          ? (e._hoverState = "show")
          : (clearTimeout(e._timeout),
            (e._hoverState = "show"),
            e._config.delay && e._config.delay.show
              ? (e._timeout = setTimeout(() => {
                  "show" === e._hoverState && e.show();
                }, e._config.delay.show))
              : e.show());
    }
    _leave(t, e) {
      (e = this._initializeOnDelegatedTarget(t, e)),
        t &&
          (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] =
            e._element.contains(t.relatedTarget)),
        e._isWithActiveTrigger() ||
          (clearTimeout(e._timeout),
          (e._hoverState = "out"),
          e._config.delay && e._config.delay.hide
            ? (e._timeout = setTimeout(() => {
                "out" === e._hoverState && e.hide();
              }, e._config.delay.hide))
            : e.hide());
    }
    _isWithActiveTrigger() {
      for (const t in this._activeTrigger)
        if (this._activeTrigger[t]) return !0;
      return !1;
    }
    _getConfig(t) {
      const e = V.getDataAttributes(this._element);
      return (
        Object.keys(e).forEach((t) => {
          Nt.has(t) && delete e[t];
        }),
        ((t = {
          ...this.constructor.Default,
          ...e,
          ...("object" == typeof t && t ? t : {}),
        }).container = !1 === t.container ? document.body : h(t.container)),
        "number" == typeof t.delay &&
          (t.delay = { show: t.delay, hide: t.delay }),
        "number" == typeof t.title && (t.title = t.title.toString()),
        "number" == typeof t.content && (t.content = t.content.toString()),
        d("tooltip", t, this.constructor.DefaultType),
        t.sanitize && (t.template = Dt(t.template, t.allowList, t.sanitizeFn)),
        t
      );
    }
    _getDelegateConfig() {
      const t = {};
      if (this._config)
        for (const e in this._config)
          this.constructor.Default[e] !== this._config[e] &&
            (t[e] = this._config[e]);
      return t;
    }
    _cleanTipClass() {
      const t = this.getTipElement(),
        e = t.getAttribute("class").match(It);
      null !== e &&
        e.length > 0 &&
        e.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
    }
    _handlePopperPlacementChange(t) {
      const { state: e } = t;
      e &&
        ((this.tip = e.elements.popper),
        this._cleanTipClass(),
        this._addAttachmentClass(this._getAttachment(e.placement)));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = jt.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  y(jt);
  const Ht = new RegExp("(^|\\s)bs-popover\\S+", "g"),
    Rt = {
      ...jt.Default,
      placement: "right",
      offset: [0, 8],
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    },
    Bt = { ...jt.DefaultType, content: "(string|element|function)" },
    $t = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover",
    };
  class Wt extends jt {
    static get Default() {
      return Rt;
    }
    static get NAME() {
      return "popover";
    }
    static get Event() {
      return $t;
    }
    static get DefaultType() {
      return Bt;
    }
    isWithContent() {
      return this.getTitle() || this._getContent();
    }
    getTipElement() {
      return (
        this.tip ||
          ((this.tip = super.getTipElement()),
          this.getTitle() || i.findOne(".popover-header", this.tip).remove(),
          this._getContent() || i.findOne(".popover-body", this.tip).remove()),
        this.tip
      );
    }
    setContent() {
      const t = this.getTipElement();
      this.setElementContent(i.findOne(".popover-header", t), this.getTitle());
      let e = this._getContent();
      "function" == typeof e && (e = e.call(this._element)),
        this.setElementContent(i.findOne(".popover-body", t), e),
        t.classList.remove("fade", "show");
    }
    _addAttachmentClass(t) {
      this.getTipElement().classList.add(
        "bs-popover-" + this.updateAttachment(t)
      );
    }
    _getContent() {
      return (
        this._element.getAttribute("data-bs-content") || this._config.content
      );
    }
    _cleanTipClass() {
      const t = this.getTipElement(),
        e = t.getAttribute("class").match(Ht);
      null !== e &&
        e.length > 0 &&
        e.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Wt.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  y(Wt);
  const qt = { offset: 10, method: "auto", target: "" },
    zt = { offset: "number", method: "string", target: "(string|element)" };
  class Ft extends q {
    constructor(t, e) {
      super(t),
        (this._scrollElement =
          "BODY" === this._element.tagName ? window : this._element),
        (this._config = this._getConfig(e)),
        (this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`),
        (this._offsets = []),
        (this._targets = []),
        (this._activeTarget = null),
        (this._scrollHeight = 0),
        B.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()),
        this.refresh(),
        this._process();
    }
    static get Default() {
      return qt;
    }
    static get NAME() {
      return "scrollspy";
    }
    refresh() {
      const t =
          this._scrollElement === this._scrollElement.window
            ? "offset"
            : "position",
        e = "auto" === this._config.method ? t : this._config.method,
        s = "position" === e ? this._getScrollTop() : 0;
      (this._offsets = []),
        (this._targets = []),
        (this._scrollHeight = this._getScrollHeight()),
        i
          .find(this._selector)
          .map((t) => {
            const n = r(t),
              o = n ? i.findOne(n) : null;
            if (o) {
              const t = o.getBoundingClientRect();
              if (t.width || t.height) return [V[e](o).top + s, n];
            }
            return null;
          })
          .filter((t) => t)
          .sort((t, e) => t[0] - e[0])
          .forEach((t) => {
            this._offsets.push(t[0]), this._targets.push(t[1]);
          });
    }
    dispose() {
      B.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
    }
    _getConfig(t) {
      if (
        "string" !=
          typeof (t = {
            ...qt,
            ...V.getDataAttributes(this._element),
            ...("object" == typeof t && t ? t : {}),
          }).target &&
        c(t.target)
      ) {
        let { id: e } = t.target;
        e || ((e = n("scrollspy")), (t.target.id = e)), (t.target = "#" + e);
      }
      return d("scrollspy", t, zt), t;
    }
    _getScrollTop() {
      return this._scrollElement === window
        ? this._scrollElement.pageYOffset
        : this._scrollElement.scrollTop;
    }
    _getScrollHeight() {
      return (
        this._scrollElement.scrollHeight ||
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        )
      );
    }
    _getOffsetHeight() {
      return this._scrollElement === window
        ? window.innerHeight
        : this._scrollElement.getBoundingClientRect().height;
    }
    _process() {
      const t = this._getScrollTop() + this._config.offset,
        e = this._getScrollHeight(),
        s = this._config.offset + e - this._getOffsetHeight();
      if ((this._scrollHeight !== e && this.refresh(), t >= s)) {
        const t = this._targets[this._targets.length - 1];
        this._activeTarget !== t && this._activate(t);
      } else {
        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
          return (this._activeTarget = null), void this._clear();
        for (let e = this._offsets.length; e--; )
          this._activeTarget !== this._targets[e] &&
            t >= this._offsets[e] &&
            (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) &&
            this._activate(this._targets[e]);
      }
    }
    _activate(t) {
      (this._activeTarget = t), this._clear();
      const e = this._selector
          .split(",")
          .map((e) => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`),
        s = i.findOne(e.join(","));
      s.classList.contains("dropdown-item")
        ? (i
            .findOne(".dropdown-toggle", s.closest(".dropdown"))
            .classList.add("active"),
          s.classList.add("active"))
        : (s.classList.add("active"),
          i.parents(s, ".nav, .list-group").forEach((t) => {
            i
              .prev(t, ".nav-link, .list-group-item")
              .forEach((t) => t.classList.add("active")),
              i.prev(t, ".nav-item").forEach((t) => {
                i.children(t, ".nav-link").forEach((t) =>
                  t.classList.add("active")
                );
              });
          })),
        B.trigger(this._scrollElement, "activate.bs.scrollspy", {
          relatedTarget: t,
        });
    }
    _clear() {
      i.find(this._selector)
        .filter((t) => t.classList.contains("active"))
        .forEach((t) => t.classList.remove("active"));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Ft.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  B.on(window, "load.bs.scrollspy.data-api", () => {
    i.find('[data-bs-spy="scroll"]').forEach((t) => new Ft(t));
  }),
    y(Ft);
  class Ut extends q {
    static get NAME() {
      return "tab";
    }
    show() {
      if (
        this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
        this._element.classList.contains("active")
      )
        return;
      let t;
      const e = a(this._element),
        s = this._element.closest(".nav, .list-group");
      if (s) {
        const e =
          "UL" === s.nodeName || "OL" === s.nodeName
            ? ":scope > li > .active"
            : ".active";
        (t = i.find(e, s)), (t = t[t.length - 1]);
      }
      const n = t
        ? B.trigger(t, "hide.bs.tab", { relatedTarget: this._element })
        : null;
      if (
        B.trigger(this._element, "show.bs.tab", { relatedTarget: t })
          .defaultPrevented ||
        (null !== n && n.defaultPrevented)
      )
        return;
      this._activate(this._element, s);
      const o = () => {
        B.trigger(t, "hidden.bs.tab", { relatedTarget: this._element }),
          B.trigger(this._element, "shown.bs.tab", { relatedTarget: t });
      };
      e ? this._activate(e, e.parentNode, o) : o();
    }
    _activate(t, e, s) {
      const n = (
          !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
            ? i.children(e, ".active")
            : i.find(":scope > li > .active", e)
        )[0],
        o = s && n && n.classList.contains("fade"),
        r = () => this._transitionComplete(t, n, s);
      n && o
        ? (n.classList.remove("show"), this._queueCallback(r, t, !0))
        : r();
    }
    _transitionComplete(t, e, s) {
      if (e) {
        e.classList.remove("active");
        const t = i.findOne(":scope > .dropdown-menu .active", e.parentNode);
        t && t.classList.remove("active"),
          "tab" === e.getAttribute("role") &&
            e.setAttribute("aria-selected", !1);
      }
      t.classList.add("active"),
        "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
        m(t),
        t.classList.contains("fade") && t.classList.add("show");
      let n = t.parentNode;
      if (
        (n && "LI" === n.nodeName && (n = n.parentNode),
        n && n.classList.contains("dropdown-menu"))
      ) {
        const e = t.closest(".dropdown");
        e &&
          i
            .find(".dropdown-toggle", e)
            .forEach((t) => t.classList.add("active")),
          t.setAttribute("aria-expanded", !0);
      }
      s && s();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Ut.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  B.on(
    document,
    "click.bs.tab.data-api",
    '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    function (t) {
      ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        g(this) || Ut.getOrCreateInstance(this).show();
    }
  ),
    y(Ut);
  const Kt = { animation: "boolean", autohide: "boolean", delay: "number" },
    Vt = { animation: !0, autohide: !0, delay: 5e3 };
  class Qt extends q {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._timeout = null),
        (this._hasMouseInteraction = !1),
        (this._hasKeyboardInteraction = !1),
        this._setListeners();
    }
    static get DefaultType() {
      return Kt;
    }
    static get Default() {
      return Vt;
    }
    static get NAME() {
      return "toast";
    }
    show() {
      B.trigger(this._element, "show.bs.toast").defaultPrevented ||
        (this._clearTimeout(),
        this._config.animation && this._element.classList.add("fade"),
        this._element.classList.remove("hide"),
        m(this._element),
        this._element.classList.add("showing"),
        this._queueCallback(
          () => {
            this._element.classList.remove("showing"),
              this._element.classList.add("show"),
              B.trigger(this._element, "shown.bs.toast"),
              this._maybeScheduleHide();
          },
          this._element,
          this._config.animation
        ));
    }
    hide() {
      this._element.classList.contains("show") &&
        (B.trigger(this._element, "hide.bs.toast").defaultPrevented ||
          (this._element.classList.remove("show"),
          this._queueCallback(
            () => {
              this._element.classList.add("hide"),
                B.trigger(this._element, "hidden.bs.toast");
            },
            this._element,
            this._config.animation
          )));
    }
    dispose() {
      this._clearTimeout(),
        this._element.classList.contains("show") &&
          this._element.classList.remove("show"),
        super.dispose();
    }
    _getConfig(t) {
      return (
        (t = {
          ...Vt,
          ...V.getDataAttributes(this._element),
          ...("object" == typeof t && t ? t : {}),
        }),
        d("toast", t, this.constructor.DefaultType),
        t
      );
    }
    _maybeScheduleHide() {
      this._config.autohide &&
        (this._hasMouseInteraction ||
          this._hasKeyboardInteraction ||
          (this._timeout = setTimeout(() => {
            this.hide();
          }, this._config.delay)));
    }
    _onInteraction(t, e) {
      switch (t.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e;
      }
      if (e) return void this._clearTimeout();
      const s = t.relatedTarget;
      this._element === s ||
        this._element.contains(s) ||
        this._maybeScheduleHide();
    }
    _setListeners() {
      B.on(
        this._element,
        "click.dismiss.bs.toast",
        '[data-bs-dismiss="toast"]',
        () => this.hide()
      ),
        B.on(this._element, "mouseover.bs.toast", (t) =>
          this._onInteraction(t, !0)
        ),
        B.on(this._element, "mouseout.bs.toast", (t) =>
          this._onInteraction(t, !1)
        ),
        B.on(this._element, "focusin.bs.toast", (t) =>
          this._onInteraction(t, !0)
        ),
        B.on(this._element, "focusout.bs.toast", (t) =>
          this._onInteraction(t, !1)
        );
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Qt.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  return (
    y(Qt),
    {
      Alert: z,
      Button: F,
      Carousel: et,
      Collapse: nt,
      Dropdown: pt,
      Modal: wt,
      Offcanvas: Tt,
      Popover: Wt,
      ScrollSpy: Ft,
      Tab: Ut,
      Toast: Qt,
      Tooltip: jt,
    }
  );
});

/*! jQuery v3.6.4 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    y = n.hasOwnProperty,
    a = y.toString,
    l = a.call(Object),
    v = {},
    m = function (e) {
      return (
        "function" == typeof e &&
        "number" != typeof e.nodeType &&
        "function" != typeof e.item
      );
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    E = C.document,
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement("script");
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[o.call(e)] || "object"
      : typeof e;
  }
  var f = "3.6.4",
    S = function (e, t) {
      return new S.fn.init(e, t);
    };
  function p(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return (
      !m(e) &&
      !x(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (S.fn = S.prototype =
    {
      jquery: f,
      constructor: S,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = S.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return S.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          S.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (S.extend = S.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || m(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || S.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = S.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    S.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== o.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = y.call(t, "constructor") && t.constructor) &&
              a.call(n) === l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        b(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (p(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (p(Object(e))
              ? S.merge(n, "string" == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (p(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: v,
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var d = (function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      y,
      s,
      c,
      v,
      S = "sizzle" + 1 * new Date(),
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
      j = function (e, t) {
        return e === t && (l = !0), 0;
      },
      D = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        M +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      W =
        "\\[" +
        M +
        "*(" +
        I +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        I +
        "))|)" +
        M +
        "*\\]",
      F =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        W +
        ")*)|.*)\\)|)",
      $ = new RegExp(M + "+", "g"),
      B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp(F),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        T();
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      H.apply((t = O.call(p.childNodes)), p.childNodes),
        t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              L.apply(e, O.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && (T(e), (e = e || C), E)) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && v(e, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if (
              (i = u[3]) &&
              d.getElementsByClassName &&
              e.getElementsByClassName
            )
              return H.apply(n, e.getElementsByClassName(i)), n;
          }
        if (
          d.qsa &&
          !N[t + " "] &&
          (!y || !y.test(t)) &&
          (1 !== p || "object" !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
            ((f = (ee.test(t) && ve(e.parentNode)) || e) === e && d.scope) ||
              ((s = e.getAttribute("id"))
                ? (s = s.replace(re, ie))
                : e.setAttribute("id", (s = S))),
              (o = (l = h(t)).length);
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            c = l.join(",");
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace(B, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function le(e) {
      return (e[S] = !0), e;
    }
    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function ye(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ve(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || "HTML");
      }),
    (T = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : p;
        return (
          r != C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (C = r).documentElement),
            (E = !i(C)),
            p != C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", oe, !1)
                : n.attachEvent && n.attachEvent("onunload", oe)),
            (d.scope = ce(function (e) {
              return (
                a.appendChild(e).appendChild(C.createElement("div")),
                "undefined" != typeof e.querySelectorAll &&
                  !e.querySelectorAll(":scope fieldset div").length
              );
            })),
            (d.cssHas = ce(function () {
              try {
                return C.querySelector(":has(*,:jqfake)"), !1;
              } catch (e) {
                return !0;
              }
            })),
            (d.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (d.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = S),
                !C.getElementsByName || !C.getElementsByName(S).length
              );
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++]))
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (s = []),
            (y = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ce(function (e) {
                var t;
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  S +
                  "'></a><select id='" +
                  S +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    y.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    y.push("\\[" + M + "*(?:value|" + R + ")"),
                  e.querySelectorAll("[id~=" + S + "-]").length || y.push("~="),
                  (t = C.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    y.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll(":checked").length || y.push(":checked"),
                  e.querySelectorAll("a#" + S + "+*").length ||
                    y.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  y.push("[\\r\\n\\f]");
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    y.push("name" + M + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    y.push(":enabled", ":disabled"),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    y.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  y.push(",.*:");
              })),
            (d.matchesSelector = K.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector)
            )) &&
              ce(function (e) {
                (d.disconnectedMatch = c.call(e, "*")),
                  c.call(e, "[s!='']:x"),
                  s.push("!=", F);
              }),
            d.cssHas || y.push(":has"),
            (y = y.length && new RegExp(y.join("|"))),
            (s = s.length && new RegExp(s.join("|"))),
            (t = K.test(a.compareDocumentPosition)),
            (v =
              t || K.test(a.contains)
                ? function (e, t) {
                    var n = (9 === e.nodeType && e.documentElement) || e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (j = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e == C || (e.ownerDocument == p && v(p, e))
                        ? -1
                        : t == C || (t.ownerDocument == p && v(p, t))
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e == C
                      ? -1
                      : t == C
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0;
                  if (i === o) return pe(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r
                    ? pe(a[r], s[r])
                    : a[r] == p
                    ? -1
                    : s[r] == p
                    ? 1
                    : 0;
                })),
          C
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (T(e),
        d.matchesSelector &&
          E &&
          !N[t + " "] &&
          (!s || !s.test(t)) &&
          (!y || !y.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          N(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), v(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r
        ? r
        : d.attributes || !E
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(j),
        l)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += o(t);
        return n;
      }),
    ((b = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    X.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = m[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                m(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace($, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (h, e, t, g, y) {
            var v = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
            return 1 === g && 0 === y
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = v !== m ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (v) {
                      while (l) {
                        a = e;
                        while ((a = a[l]))
                          if (
                            x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1;
                        u = l = "only" === h && !u && "nextSibling";
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      (d =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k &&
                          r[1]) && r[2]),
                        (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [k, s, d];
                          break;
                        }
                    } else if (
                      (p &&
                        (d = s =
                          (r =
                            (i =
                              (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                      !1 === d)
                    )
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (
                          (x
                            ? a.nodeName.toLowerCase() === f
                            : 1 === a.nodeType) &&
                          ++d &&
                          (p &&
                            ((i =
                              (o = a[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [k, d]),
                          a === e)
                        )
                          break;
                    return (d -= y) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                se.error("unsupported pseudo: " + e);
            return a[S]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace(B, "$1"));
            return s[S]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              V.test(n || "") || se.error("unsupported lang: " + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: ye(function () {
            return [0];
          }),
          last: ye(function (e, t) {
            return [t - 1];
          }),
          eq: ye(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ye(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ye(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ye(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ye(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = de(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [k, p];
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === k && r[1] === p)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, y, v, e) {
      return (
        y && !y[S] && (y = Ce(y)),
        v && !v[S] && (v = Ce(v, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
            p = g ? (v || (e ? d : l || y) ? [] : t) : f;
          if ((g && g(f, p, n, r), y)) {
            (i = Te(p, u)), y(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
          if (e) {
            if (v || d) {
              if (v) {
                (i = []), (o = p.length);
                while (o--) (a = p[o]) && i.push((f[o] = a));
                v(null, (p = []), i, r);
              }
              o = p.length;
              while (o--)
                (a = p[o]) &&
                  -1 < (i = v ? P(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (p = Te(p === t ? p.splice(l, p.length) : p)), v ? v(null, t, p, r) : H.apply(t, p);
        })
      );
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = be(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = be(
            function (e) {
              return -1 < P(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return Ce(
              1 < s && we(c),
              1 < s &&
                xe(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace(B, "$1"),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && xe(e)
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = x[e + " "];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (u = b.preFilter);
          while (a) {
            for (o in ((n && !(r = _.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = z.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace(B, " ") }),
              (a = a.slice(n.length))),
            b.filter))
              !(r = G[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            y,
            v,
            m,
            x,
            r,
            i = [],
            o = [],
            a = A[e + " "];
          if (!a) {
            t || (t = h(e)), (n = t.length);
            while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
            (a = A(
              e,
              ((y = o),
              (m = 0 < (v = i).length),
              (x = 0 < y.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = "0",
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG("*", i)),
                  h = (k += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (
                  i && (w = t == C || t || i);
                  l !== g && null != (o = d[l]);
                  l++
                ) {
                  if (x && o) {
                    (a = 0), t || o.ownerDocument == C || (T(o), (n = !E));
                    while ((s = y[a++]))
                      if (s(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (k = h);
                  }
                  m && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), m && l !== u)) {
                  a = 0;
                  while ((s = v[a++])) s(c, f, t, n);
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                    f = Te(f);
                  }
                  H.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + v.length &&
                      se.uniqueSort(r);
                }
                return i && ((k = h), (w = p)), c;
              }),
              m ? le(r) : r)
            )).selector = e;
          }
          return a;
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              "ID" === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            i = G.needsContext.test(e) ? 0 : o.length;
            while (i--) {
              if (((a = o[i]), b.relative[(s = a.type)])) break;
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, ne),
                  (ee.test(o[0].type) && ve(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && xe(o))))
                  return H.apply(n, r), n;
                break;
              }
            }
          }
          return (
            (l || f(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && ve(t.parentNode)) || t
            ),
            n
          );
        }),
      (d.sortStable = S.split("").sort(j).join("") === S),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(R, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      se
    );
  })(C);
  (S.find = d),
    (S.expr = d.selectors),
    (S.expr[":"] = S.expr.pseudos),
    (S.uniqueSort = S.unique = d.uniqueSort),
    (S.text = d.getText),
    (S.isXMLDoc = d.isXML),
    (S.contains = d.contains),
    (S.escapeSelector = d.escape);
  var h = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && S(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    T = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    k = S.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, n, r) {
    return m(n)
      ? S.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? S.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? S.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : S.filter(n, e, r);
  }
  (S.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? S.find.matchesSelector(r, e)
          ? [r]
          : []
        : S.find.matches(
            e,
            S.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    S.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            S(e).filter(function () {
              for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
        return 1 < r ? S.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1)
          .length;
      },
    });
  var D,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || D), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : q.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof S ? t[0] : t),
          S.merge(
            this,
            S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
          ),
          N.test(r[1]) && S.isPlainObject(t))
        )
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(S)
      : S.makeArray(e, this);
  }).prototype = S.fn),
    (D = S(E));
  var L = /^(?:parents|prev(?:Until|All))/,
    H = { children: !0, contents: !0, next: !0, prev: !0 };
  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && S(e);
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && S.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(S(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    S.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return h(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return h(e, "parentNode", n);
        },
        next: function (e) {
          return O(e, "nextSibling");
        },
        prev: function (e) {
          return O(e, "previousSibling");
        },
        nextAll: function (e) {
          return h(e, "nextSibling");
        },
        prevAll: function (e) {
          return h(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return h(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return h(e, "previousSibling", n);
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return T(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (A(e, "template") && (e = e.content || e),
              S.merge([], e.childNodes));
        },
      },
      function (r, i) {
        S.fn[r] = function (e, t) {
          var n = S.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length &&
              (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function I(e, t, n, r) {
    var i;
    try {
      e && m((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && m((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (S.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          S.each(e.match(P) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : S.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                S.each(e, function (e, t) {
                  m(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== w(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            S.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = S.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < S.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    S.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              S.Callbacks("memory"),
              S.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return S.Deferred(function (r) {
                S.each(o, function (e, t) {
                  var n = m(i[t[4]]) && i[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && m(e.promise)
                      ? e
                          .promise()
                          .progress(r.notify)
                          .done(r.resolve)
                          .fail(r.reject)
                      : r[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }),
                  (i = null);
              }).promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          m(t)
                            ? s
                              ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, R, s),
                                  l(u, o, M, s),
                                  l(u, o, R, o.notifyWith)
                                ))
                            : (a !== R && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            S.Deferred.exceptionHook &&
                              S.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== M && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (S.Deferred.getStackHook &&
                        (t.stackTrace = S.Deferred.getStackHook()),
                      C.setTimeout(t));
                };
              }
              return S.Deferred(function (e) {
                o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                  o[1][3].add(l(0, e, m(t) ? t : R)),
                  o[2][3].add(l(0, e, m(n) ? n : M));
              }).promise();
            },
            promise: function (e) {
              return null != e ? S.extend(e, a) : a;
            },
          },
          s = {};
        return (
          S.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (I(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || m(i[t] && i[t].then))
        )
          return o.then();
        while (t--) I(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (S.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      W.test(e.name) &&
      C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (S.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var F = S.Deferred();
  function $() {
    E.removeEventListener("DOMContentLoaded", $),
      C.removeEventListener("load", $),
      S.ready();
  }
  (S.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        S.readyException(e);
      }),
      this
    );
  }),
    S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --S.readyWait : S.isReady) ||
          ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
          F.resolveWith(E, [S]);
      },
    }),
    (S.ready.then = F.then),
    "complete" === E.readyState ||
    ("loading" !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(S.ready)
      : (E.addEventListener("DOMContentLoaded", $),
        C.addEventListener("load", $));
  var B = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n))
        for (s in ((i = !0), n)) B(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(S(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    _ = /^-ms-/,
    z = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function G() {
    this.expando = S.expando + G.uid++;
  }
  (G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            V(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[X(t)] = n;
        else for (r in t) i[X(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][X(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(X)
              : (t = X(t)) in r
              ? [t]
              : t.match(P) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || S.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !S.isEmptyObject(t);
      },
    });
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : J.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        Q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    S.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = X(r.slice(5))), Z(o, r, i[r]));
            Y.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              Q.set(this, n);
            })
          : B(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = Q.get(o, n))
                    ? t
                    : void 0 !== (t = Z(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  Q.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      },
    }),
    S.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Y.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Y.access(e, t, S.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                S.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: S.Callbacks("once memory").add(function () {
              Y.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    S.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? S.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          S.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = Y.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    re = E.documentElement,
    ie = function (e) {
      return S.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  re.getRootNode &&
    (ie = function (e) {
      return (
        S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      );
    });
  var ae = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && ie(e) && "none" === S.css(e, "display"))
    );
  };
  function se(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return S.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (S.cssNumber[t] || ("px" !== l && +u)) &&
        te.exec(S.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        S.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), S.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ue = {};
  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = Y.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ae(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ue[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = S.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ue[s] = u)))))
          : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  S.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? S(this).show() : S(this).hide();
          });
    },
  });
  var ce,
    fe,
    pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  (ce = E.createDocumentFragment().appendChild(E.createElement("div"))),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    (v.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ce.innerHTML = "<textarea>x</textarea>"),
    (v.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
    (ce.innerHTML = "<option></option>"),
    (v.option = !!ce.lastChild);
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function ye(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
    );
  }
  function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }
  (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td),
    v.option ||
      (ge.optgroup = ge.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          S.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < S.inArray(o, r)) i && i.push(o);
      else if (
        ((l = ie(o)), (a = ye(f.appendChild(o), "script")), l && ve(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var be = /^([^.]*)(?:\.(.+)|)/;
  function we() {
    return !0;
  }
  function Te() {
    return !1;
  }
  function Ce(e, t) {
    return (
      (e ===
        (function () {
          try {
            return E.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function Ee(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        Ee(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Te;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return S().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = S.guid++))),
      e.each(function () {
        S.event.add(this, t, i, r, n);
      })
    );
  }
  function Se(e, i, o) {
    o
      ? (Y.set(e, i, !1),
        S.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Y.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (S.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Y.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                );
            } else
              r.length &&
                (Y.set(this, i, {
                  value: S.event.trigger(
                    S.extend(r[0], S.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, i) && S.event.add(e, i, we);
  }
  (S.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y = Y.get(t);
      if (V(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && S.find.matchesSelector(re, i),
          n.guid || (n.guid = S.guid++),
          (u = y.events) || (u = y.events = Object.create(null)),
          (a = y.handle) ||
            (a = y.handle =
              function (e) {
                return "undefined" != typeof S && S.event.triggered !== e.type
                  ? S.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(P) || [""]).length);
        while (l--)
          (d = g = (s = be.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = S.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = S.event.special[d] || {}),
              (c = S.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && S.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (S.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y = Y.hasData(e) && Y.get(e);
      if (y && (u = y.events)) {
        l = (t = (t || "").match(P) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = be.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = S.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, y.handle)) ||
                S.removeEvent(e, d, y.handle),
              delete u[d]);
          } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = S.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        c = S.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = S.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (S.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < S(i, this).index(l)
                  : S.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, "input") &&
              Y.get(t, "click")) ||
            A(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (S.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (S.Event = function (e, t) {
      if (!(this instanceof S.Event)) return new S.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? we
              : Te),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && S.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[S.expando] = !0);
    }),
    (S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: Te,
      isPropagationStopped: Te,
      isImmediatePropagationStopped: Te,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = we),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = we),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = we),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    S.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      S.event.addProp
    ),
    S.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
      S.event.special[t] = {
        setup: function () {
          return Se(this, t, Ce), !1;
        },
        trigger: function () {
          return Se(this, t), !0;
        },
        _default: function (e) {
          return Y.get(e.target, t);
        },
        delegateType: e,
      };
    }),
    S.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        S.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || S.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    S.fn.extend({
      on: function (e, t, n, r) {
        return Ee(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Ee(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            S(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Te),
          this.each(function () {
            S.event.remove(this, e, n, t);
          })
        );
      },
    });
  var ke = /<script|<style|<link/i,
    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ne = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function je(e, t) {
    return (
      (A(e, "table") &&
        A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        S(e).children("tbody")[0]) ||
      e
    );
  }
  function De(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function qe(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Le(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in (Y.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
    }
  }
  function He(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || (1 < f && "string" == typeof d && !v.checkClone && Ae.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = S.map(ye(e, "script"), De)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = S.clone(u, !0, !0)), s && S.merge(a, ye(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || "") &&
              !Y.access(u, "globalEval") &&
              S.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? S._evalUrl &&
                  !u.noModule &&
                  S._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute("nonce") },
                    l
                  )
                : b(u.textContent.replace(Ne, ""), u, l));
    }
    return n;
  }
  function Oe(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || S.cleanData(ye(r)),
        r.parentNode &&
          (n && ie(r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  S.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (
        !(
          v.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          S.isXMLDoc(e)
        )
      )
        for (a = ye(c), r = 0, i = (o = ye(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ye(e), a = a || ye(c), r = 0, i = o.length; r < i; r++)
            Le(o[r], a[r]);
        else Le(e, c);
      return (
        0 < (a = ye(c, "script")).length && ve(a, !f && ye(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    S.fn.extend({
      detach: function (e) {
        return Oe(this, e, !0);
      },
      remove: function (e) {
        return Oe(this, e);
      },
      text: function (e) {
        return B(
          this,
          function (e) {
            return void 0 === e
              ? S.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return He(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            je(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return He(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = je(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (S.cleanData(ye(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return S.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return B(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !ke.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = S.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (S.cleanData(ye(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return He(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            S.inArray(this, n) < 0 &&
              (S.cleanData(ye(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    S.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        S.fn[e] = function (e) {
          for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              S(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Re = /^--/,
    Me = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    Ie = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    We = new RegExp(ne.join("|"), "i"),
    Fe = "[\\x20\\t\\r\\n\\f]",
    $e = new RegExp("^" + Fe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Fe + "+$", "g");
  function Be(e, t, n) {
    var r,
      i,
      o,
      a,
      s = Re.test(t),
      u = e.style;
    return (
      (n = n || Me(e)) &&
        ((a = n.getPropertyValue(t) || n[t]),
        s && a && (a = a.replace($e, "$1") || void 0),
        "" !== a || ie(e) || (a = S.style(e, t)),
        !v.pixelBoxStyles() &&
          Pe.test(a) &&
          We.test(t) &&
          ((r = u.width),
          (i = u.minWidth),
          (o = u.maxWidth),
          (u.minWidth = u.maxWidth = u.width = a),
          (a = n.width),
          (u.width = r),
          (u.minWidth = i),
          (u.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function _e(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        (n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (i = 12 === t(l.offsetWidth / 3)),
          re.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = E.createElement("div"),
      l = E.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (v.clearCloneStyle = "content-box" === l.style.backgroundClip),
      S.extend(v, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = E.createElement("table")),
              (t = E.createElement("tr")),
              (n = E.createElement("div")),
              (e.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (t.style.cssText = "border:1px solid"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              (n.style.display = "block"),
              re.appendChild(e).appendChild(t).appendChild(n),
              (r = C.getComputedStyle(t)),
              (a =
                parseInt(r.height, 10) +
                  parseInt(r.borderTopWidth, 10) +
                  parseInt(r.borderBottomWidth, 10) ===
                t.offsetHeight),
              re.removeChild(e)),
            a
          );
        },
      }));
  })();
  var ze = ["Webkit", "Moz", "ms"],
    Ue = E.createElement("div").style,
    Xe = {};
  function Ve(e) {
    var t = S.cssProps[e] || Xe[e];
    return (
      t ||
      (e in Ue
        ? e
        : (Xe[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = ze.length;
              while (n--) if ((e = ze[n] + t) in Ue) return e;
            })(e) || e))
    );
  }
  var Ge = /^(none|table(?!-c[ea]).+)/,
    Ye = { position: "absolute", visibility: "hidden", display: "block" },
    Qe = { letterSpacing: "0", fontWeight: "400" };
  function Je(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Ke(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
        r
          ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n &&
              (u -= S.css(e, "border" + ne[a] + "Width", !0, i)))
          : ((u += S.css(e, "padding" + ne[a], !0, i)),
            "padding" !== n
              ? (u += S.css(e, "border" + ne[a] + "Width", !0, i))
              : (s += S.css(e, "border" + ne[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function Ze(e, t, n) {
    var r = Me(e),
      i =
        (!v.boxSizingReliable() || n) &&
        "border-box" === S.css(e, "boxSizing", !1, r),
      o = i,
      a = Be(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Pe.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!v.boxSizingReliable() && i) ||
        (!v.reliableTrDimensions() && A(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === S.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        Ke(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function et(e, t, n, r, i) {
    return new et.prototype.init(e, t, n, r, i);
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Be(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = X(t),
          u = Re.test(t),
          l = e.style;
        if (
          (u || (t = Ve(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = se(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
            v.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = X(t);
      return (
        Re.test(t) || (t = Ve(s)),
        (a = S.cssHooks[t] || S.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Be(e, t, r)),
        "normal" === i && t in Qe && (i = Qe[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    S.each(["height", "width"], function (e, u) {
      S.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ge.test(S.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Ze(e, u, n)
              : Ie(e, Ye, function () {
                  return Ze(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Me(e),
            o = !v.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Ke(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  Ke(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = te.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = S.css(e, u))),
            Je(0, t, s)
          );
        },
      };
    }),
    (S.cssHooks.marginLeft = _e(v.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Be(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Ie(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (S.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (S.cssHooks[i + o].set = Je);
    }),
    S.fn.extend({
      css: function (e, t) {
        return B(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Me(e), i = t.length; a < i; a++)
                o[t[a]] = S.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((S.Tween = et).prototype = {
      constructor: et,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || S.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (S.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = et.propHooks[this.prop];
        return e && e.get ? e.get(this) : et.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = et.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                S.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : et.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = et.prototype),
    ((et.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          S.fx.step[e.prop]
            ? S.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!S.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : S.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = et.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (S.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (S.fx = et.prototype.init),
    (S.fx.step = {});
  var tt,
    nt,
    rt,
    it,
    ot = /^(?:toggle|show|hide)$/,
    at = /queueHooks$/;
  function st() {
    nt &&
      (!1 === E.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(st)
        : C.setTimeout(st, S.fx.interval),
      S.fx.tick());
  }
  function ut() {
    return (
      C.setTimeout(function () {
        tt = void 0;
      }),
      (tt = Date.now())
    );
  }
  function lt(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ct(e, t, n) {
    for (
      var r,
        i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function ft(o, e, t) {
    var n,
      a,
      r = 0,
      i = ft.prefilters.length,
      s = S.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = tt || ut(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: S.extend({}, e),
        opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: tt || ut(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = S.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = X(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = S.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = ft.prefilters[r].call(l, o, c, l.opts)))
        return (
          m(n.stop) &&
            (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      S.map(c, ct, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (S.Animation = S.extend(ft, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (ft.tweeners[n] = ft.tweeners[n] || []),
          ft.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          y = Y.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = S._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), ot.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !y || void 0 === y[r]) continue;
              g = !0;
            }
            d[r] = (y && y[r]) || S.style(e, r);
          }
        if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = y && y.display) && (l = Y.get(e, "display")),
            "none" === (c = S.css(e, "display")) &&
              (l
                ? (c = l)
                : (le([e], !0),
                  (l = e.style.display || l),
                  (c = S.css(e, "display")),
                  le([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === S.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (y
                ? "hidden" in y && (g = y.hidden)
                : (y = Y.access(e, "fxshow", { display: l })),
              o && (y.hidden = !g),
              g && le([e], !0),
              p.done(function () {
                for (r in (g || le([e]), Y.remove(e, "fxshow"), d))
                  S.style(e, r, d[r]);
              })),
              (u = ct(g ? y[r] : 0, r, p)),
              r in y ||
                ((y[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
    },
  })),
    (S.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? S.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            };
      return (
        S.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in S.fx.speeds
              ? (r.duration = S.fx.speeds[r.duration])
              : (r.duration = S.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
        }),
        r
      );
    }),
    S.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function () {
            var e = ft(this, S.extend({}, t), o);
            (i || Y.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = S.timers,
              r = Y.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || S.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = Y.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = S.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    S.each(["toggle", "show", "hide"], function (e, r) {
      var i = S.fn[r];
      S.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(lt(r, !0), e, t, n);
      };
    }),
    S.each(
      {
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        S.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (S.timers = []),
    (S.fx.tick = function () {
      var e,
        t = 0,
        n = S.timers;
      for (tt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || S.fx.stop(), (tt = void 0);
    }),
    (S.fx.timer = function (e) {
      S.timers.push(e), S.fx.start();
    }),
    (S.fx.interval = 13),
    (S.fx.start = function () {
      nt || ((nt = !0), st());
    }),
    (S.fx.stop = function () {
      nt = null;
    }),
    (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (S.fn.delay = function (r, e) {
      return (
        (r = (S.fx && S.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (rt = E.createElement("input")),
    (it = E.createElement("select").appendChild(E.createElement("option"))),
    (rt.type = "checkbox"),
    (v.checkOn = "" !== rt.value),
    (v.optSelected = it.selected),
    ((rt = E.createElement("input")).value = "t"),
    (rt.type = "radio"),
    (v.radioValue = "t" === rt.value);
  var pt,
    dt = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return B(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    },
  }),
    S.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? S.prop(e, t, n)
            : ((1 === o && S.isXMLDoc(e)) ||
                (i =
                  S.attrHooks[t.toLowerCase()] ||
                  (S.expr.match.bool.test(t) ? pt : void 0)),
              void 0 !== n
                ? null === n
                  ? void S.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = S.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!v.radioValue && "radio" === t && A(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(P);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (pt = {
      set: function (e, t, n) {
        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = dt[t] || S.find.attr;
      dt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = dt[o]),
            (dt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (dt[o] = i)),
          r
        );
      };
    });
  var ht = /^(?:input|select|textarea|button)$/i,
    gt = /^(?:a|area)$/i;
  function yt(e) {
    return (e.match(P) || []).join(" ");
  }
  function vt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function mt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
  }
  S.fn.extend({
    prop: function (e, t) {
      return B(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    },
  }),
    S.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && S.isXMLDoc(e)) ||
              ((t = S.propFix[t] || t), (i = S.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = S.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : ht.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    v.optSelected ||
      (S.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    S.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        S.propFix[this.toLowerCase()] = this;
      }
    ),
    S.fn.extend({
      addClass: function (t) {
        var e, n, r, i, o, a;
        return m(t)
          ? this.each(function (e) {
              S(this).addClass(t.call(this, e, vt(this)));
            })
          : (e = mt(t)).length
          ? this.each(function () {
              if (
                ((r = vt(this)), (n = 1 === this.nodeType && " " + yt(r) + " "))
              ) {
                for (o = 0; o < e.length; o++)
                  (i = e[o]), n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                (a = yt(n)), r !== a && this.setAttribute("class", a);
              }
            })
          : this;
      },
      removeClass: function (t) {
        var e, n, r, i, o, a;
        return m(t)
          ? this.each(function (e) {
              S(this).removeClass(t.call(this, e, vt(this)));
            })
          : arguments.length
          ? (e = mt(t)).length
            ? this.each(function () {
                if (
                  ((r = vt(this)),
                  (n = 1 === this.nodeType && " " + yt(r) + " "))
                ) {
                  for (o = 0; o < e.length; o++) {
                    i = e[o];
                    while (-1 < n.indexOf(" " + i + " "))
                      n = n.replace(" " + i + " ", " ");
                  }
                  (a = yt(n)), r !== a && this.setAttribute("class", a);
                }
              })
            : this
          : this.attr("class", "");
      },
      toggleClass: function (t, n) {
        var e,
          r,
          i,
          o,
          a = typeof t,
          s = "string" === a || Array.isArray(t);
        return m(t)
          ? this.each(function (e) {
              S(this).toggleClass(t.call(this, e, vt(this), n), n);
            })
          : "boolean" == typeof n && s
          ? n
            ? this.addClass(t)
            : this.removeClass(t)
          : ((e = mt(t)),
            this.each(function () {
              if (s)
                for (o = S(this), i = 0; i < e.length; i++)
                  (r = e[i]), o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
              else
                (void 0 !== t && "boolean" !== a) ||
                  ((r = vt(this)) && Y.set(this, "__className__", r),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      r || !1 === t ? "" : Y.get(this, "__className__") || ""
                    ));
            }));
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + yt(vt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var xt = /\r/g;
  S.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = m(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, S(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = S.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                S.valHooks[this.type] ||
                S.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(xt, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    S.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = S.find.attr(e, "value");
            return null != t ? t : yt(S.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
              ) {
                if (((t = S(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    S.each(["radio", "checkbox"], function () {
      (S.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < S.inArray(S(e).val(), t));
        },
      }),
        v.checkOn ||
          (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (v.focusin = "onfocusin" in C);
  var bt = /^(?:focusinfocus|focusoutblur)$/,
    wt = function (e) {
      e.stopPropagation();
    };
  S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = y.call(e, "type") ? e.type : e,
        h = y.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !bt.test(d + S.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[S.expando]
            ? e
            : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : S.makeArray(t, [e])),
          (c = S.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || E) &&
            p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (Y.get(o, "events") || Object.create(null))[e.type] &&
              Y.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              V(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !V(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (S.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, wt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, wt),
              (S.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
      S.event.trigger(r, null, t);
    },
  }),
    S.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          S.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return S.event.trigger(e, t, n, !0);
      },
    }),
    v.focusin ||
      S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        var i = function (e) {
          S.event.simulate(r, e.target, S.event.fix(e));
        };
        S.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r);
            t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r) - 1;
            t
              ? Y.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Y.remove(e, r));
          },
        };
      });
  var Tt = C.location,
    Ct = { guid: Date.now() },
    Et = /\?/;
  S.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}
    return (
      (n = t && t.getElementsByTagName("parsererror")[0]),
      (t && !n) ||
        S.error(
          "Invalid XML: " +
            (n
              ? S.map(n.childNodes, function (e) {
                  return e.textContent;
                }).join("\n")
              : e)
        ),
      t
    );
  };
  var St = /\[\]$/,
    kt = /\r?\n/g,
    At = /^(?:submit|button|image|reset|file)$/i,
    Nt = /^(?:input|select|textarea|keygen)/i;
  function jt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      S.each(e, function (e, t) {
        r || St.test(n)
          ? i(n, t)
          : jt(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== w(e)) i(n, e);
    else for (t in e) jt(n + "[" + t + "]", e[t], r, i);
  }
  (S.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
      S.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) jt(n, e[n], t, i);
    return r.join("&");
  }),
    S.fn.extend({
      serialize: function () {
        return S.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = S.prop(this, "elements");
          return e ? S.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !S(this).is(":disabled") &&
              Nt.test(this.nodeName) &&
              !At.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = S(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? S.map(n, function (e) {
                  return { name: t.name, value: e.replace(kt, "\r\n") };
                })
              : { name: t.name, value: n.replace(kt, "\r\n") };
          })
          .get();
      },
    });
  var Dt = /%20/g,
    qt = /#.*$/,
    Lt = /([?&])_=[^&]*/,
    Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ot = /^(?:GET|HEAD)$/,
    Pt = /^\/\//,
    Rt = {},
    Mt = {},
    It = "*/".concat("*"),
    Wt = E.createElement("a");
  function Ft(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(P) || [];
      if (m(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function $t(t, i, o, a) {
    var s = {},
      u = t === Mt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        S.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function Bt(e, t) {
    var n,
      r,
      i = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && S.extend(!0, e, r), e;
  }
  (Wt.href = Tt.href),
    S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Tt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Tt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": It,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": S.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Bt(Bt(e, S.ajaxSettings), t) : Bt(S.ajaxSettings, e);
      },
      ajaxPrefilter: Ft(Rt),
      ajaxTransport: Ft(Mt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          y = S.ajaxSetup({}, t),
          v = y.context || y,
          m = y.context && (v.nodeType || v.jquery) ? S(v) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = y.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = Ht.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (y.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (y.url = ((e || y.url || Tt.href) + "").replace(
            Pt,
            Tt.protocol + "//"
          )),
          (y.type = t.method || t.type || y.method || y.type),
          (y.dataTypes = (y.dataType || "*").toLowerCase().match(P) || [""]),
          null == y.crossDomain)
        ) {
          r = E.createElement("a");
          try {
            (r.href = y.url),
              (r.href = r.href),
              (y.crossDomain =
                Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host);
          } catch (e) {
            y.crossDomain = !0;
          }
        }
        if (
          (y.data &&
            y.processData &&
            "string" != typeof y.data &&
            (y.data = S.param(y.data, y.traditional)),
          $t(Rt, y, t, T),
          h)
        )
          return T;
        for (i in ((g = S.event && y.global) &&
          0 == S.active++ &&
          S.event.trigger("ajaxStart"),
        (y.type = y.type.toUpperCase()),
        (y.hasContent = !Ot.test(y.type)),
        (f = y.url.replace(qt, "")),
        y.hasContent
          ? y.data &&
            y.processData &&
            0 ===
              (y.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (y.data = y.data.replace(Dt, "+"))
          : ((o = y.url.slice(f.length)),
            y.data &&
              (y.processData || "string" == typeof y.data) &&
              ((f += (Et.test(f) ? "&" : "?") + y.data), delete y.data),
            !1 === y.cache &&
              ((f = f.replace(Lt, "$1")),
              (o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o)),
            (y.url = f + o)),
        y.ifModified &&
          (S.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
          S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
        ((y.data && y.hasContent && !1 !== y.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", y.contentType),
        T.setRequestHeader(
          "Accept",
          y.dataTypes[0] && y.accepts[y.dataTypes[0]]
            ? y.accepts[y.dataTypes[0]] +
                ("*" !== y.dataTypes[0] ? ", " + It + "; q=0.01" : "")
            : y.accepts["*"]
        ),
        y.headers))
          T.setRequestHeader(i, y.headers[i]);
        if (y.beforeSend && (!1 === y.beforeSend.call(v, T, y) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(y.complete),
          T.done(y.success),
          T.fail(y.error),
          (c = $t(Mt, y, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, y]), h))
            return T;
          y.async &&
            0 < y.timeout &&
            (d = C.setTimeout(function () {
              T.abort("timeout");
            }, y.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(y, T, n)),
            !i &&
              -1 < S.inArray("script", y.dataTypes) &&
              S.inArray("json", y.dataTypes) < 0 &&
              (y.converters["text script"] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(y, s, T, i)),
            i
              ? (y.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (S.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                204 === e || "HEAD" === y.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(v, [o, l, T]) : x.rejectWith(v, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, y, i ? o : a]),
            b.fireWith(v, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, y]),
              --S.active || S.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return S.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return S.get(e, void 0, t, "script");
      },
    }),
    S.each(["get", "post"], function (e, i) {
      S[i] = function (e, t, n, r) {
        return (
          m(t) && ((r = r || n), (n = t), (t = void 0)),
          S.ajax(
            S.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              S.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    S.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (S._evalUrl = function (e, t, n) {
      return S.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          S.globalEval(e, t, n);
        },
      });
    }),
    S.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return m(n)
          ? this.each(function (e) {
              S(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = S(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = m(t);
        return this.each(function (e) {
          S(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              S(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (S.expr.pseudos.hidden = function (e) {
      return !S.expr.pseudos.visible(e);
    }),
    (S.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (S.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var _t = { 0: 200, 1223: 204 },
    zt = S.ajaxSettings.xhr();
  (v.cors = !!zt && "withCredentials" in zt),
    (v.ajax = zt = !!zt),
    S.ajaxTransport(function (i) {
      var o, a;
      if (v.cors || (zt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        _t[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") ||
                          "string" != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    S.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    S.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return S.globalEval(e), e;
        },
      },
    }),
    S.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    S.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = S("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              E.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Ut,
    Xt = [],
    Vt = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Xt.pop() || S.expando + "_" + Ct.guid++;
      return (this[e] = !0), e;
    },
  }),
    S.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Vt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Vt.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Vt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || S.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? S(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)),
              o && m(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (v.createHTMLDocument =
      (((Ut = E.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Ut.childNodes.length)),
    (S.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (v.createHTMLDocument
              ? (((r = (t =
                  E.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = E.location.href),
                t.head.appendChild(r))
              : (t = E)),
          (o = !n && []),
          (i = N.exec(e))
            ? [t.createElement(i[1])]
            : ((i = xe([e], t, o)),
              o && o.length && S(o).remove(),
              S.merge([], i.childNodes)));
      var r, i, o;
    }),
    (S.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = yt(e.slice(s))), (e = e.slice(0, s))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (S.expr.pseudos.animated = function (t) {
      return S.grep(S.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (S.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = S.css(e, "top")),
          (u = S.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, S.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    S.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                S.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === S.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0)),
              (i.left += S.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - S.css(r, "marginTop", !0),
            left: t.left - i.left - S.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === S.css(e, "position")) e = e.offsetParent;
          return e || re;
        });
      },
    }),
    S.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function (e) {
          return B(
            this,
            function (e, t, n) {
              var r;
              if (
                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    S.each(["top", "left"], function (e, n) {
      S.cssHooks[n] = _e(v.pixelPosition, function (e, t) {
        if (t)
          return (t = Be(e, n)), Pe.test(t) ? S(e).position()[n] + "px" : t;
      });
    }),
    S.each({ Height: "height", Width: "width" }, function (a, s) {
      S.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          S.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return B(
              this,
              function (e, t, n) {
                var r;
                return x(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + a],
                      r["scroll" + a],
                      e.body["offset" + a],
                      r["offset" + a],
                      r["client" + a]
                    ))
                  : void 0 === n
                  ? S.css(e, t, i)
                  : S.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    S.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        S.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    S.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    S.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        S.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var Gt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  (S.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
      return (
        (r = s.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid =
          e.guid || S.guid++),
        i
      );
  }),
    (S.holdReady = function (e) {
      e ? S.readyWait++ : S.ready(!0);
    }),
    (S.isArray = Array.isArray),
    (S.parseJSON = JSON.parse),
    (S.nodeName = A),
    (S.isFunction = m),
    (S.isWindow = x),
    (S.camelCase = X),
    (S.type = w),
    (S.now = Date.now),
    (S.isNumeric = function (e) {
      var t = S.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (S.trim = function (e) {
      return null == e ? "" : (e + "").replace(Gt, "$1");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return S;
      });
  var Yt = C.jQuery,
    Qt = C.$;
  return (
    (S.noConflict = function (e) {
      return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S;
    }),
    "undefined" == typeof e && (C.jQuery = C.$ = S),
    S
  );
});
