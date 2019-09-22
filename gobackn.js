!(function(e) {
  function t(i) {
    if (n[i]) return n[i].exports;
    var r = (n[i] = { exports: {}, id: i, loaded: !1 });
    return e[i].call(r.exports, r, r.exports, t), (r.loaded = !0), r.exports;
  }
  var n = {};
  return (t.m = e), (t.c = n), (t.p = ""), t(0);
})(
  (function(e) {
    for (var t in e)
      if (Object.prototype.hasOwnProperty.call(e, t))
        switch (typeof e[t]) {
          case "function":
            break;
          case "object":
            e[t] = (function(t) {
              var n = t.slice(1),
                i = e[t[0]];
              return function(e, t, r) {
                i.apply(this, [e, t, r].concat(n));
              };
            })(e[t]);
            break;
          default:
            e[t] = e[e[t]];
        }
    return e;
  })([
    function(e, t, n) {
      e.exports = n(1);
    },
    function(e, t, n) {
      var i = n(2);
      new i();
    },
    function(e, t, n) {
      (function(t) {
        var i = n(4),
          r = n(5);
        n(8), n(12);
        var o = i(n(14)),
          s = function() {
            (this.node = o.querySelector("div").cloneNode(!0)),
              (this.$node = t(this.node)),
              document.body.appendChild(this.node),
              (this.applet = new r()),
              this.applet.initBoard();
          };
        e.exports = s;
      }.call(t, n(3)));
    },
    function(e, t, n) {
      var i, r;
      /*!
       * jQuery JavaScript Library v2.2.4
       * http://jquery.com/
       *
       * Includes Sizzle.js
       * http://sizzlejs.com/
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license
       * http://jquery.org/license
       *
       * Date: 2016-05-20T17:23Z
       */
      !(function(t, n) {
        "object" == typeof e && "object" == typeof e.exports
          ? (e.exports = t.document
              ? n(t, !0)
              : function(e) {
                  if (!e.document)
                    throw new Error("jQuery requires a window with a document");
                  return n(e);
                })
          : n(t);
      })("undefined" != typeof window ? window : this, function(n, o) {
        function s(e) {
          var t = !!e && "length" in e && e.length,
            n = le.type(e);
          return "function" === n || le.isWindow(e)
            ? !1
            : "array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e);
        }
        function a(e, t, n) {
          if (le.isFunction(t))
            return le.grep(e, function(e, i) {
              return !!t.call(e, i, e) !== n;
            });
          if (t.nodeType)
            return le.grep(e, function(e) {
              return (e === t) !== n;
            });
          if ("string" == typeof t) {
            if (xe.test(t)) return le.filter(t, e, n);
            t = le.filter(t, e);
          }
          return le.grep(e, function(e) {
            return ie.call(t, e) > -1 !== n;
          });
        }
        function c(e, t) {
          for (; (e = e[t]) && 1 !== e.nodeType; );
          return e;
        }
        function l(e) {
          var t = {};
          return (
            le.each(e.match(Te) || [], function(e, n) {
              t[n] = !0;
            }),
            t
          );
        }
        function u() {
          Z.removeEventListener("DOMContentLoaded", u),
            n.removeEventListener("load", u),
            le.ready();
        }
        function d() {
          this.expando = le.expando + d.uid++;
        }
        function p(e, t, n) {
          var i;
          if (void 0 === n && 1 === e.nodeType)
            if (
              ((i = "data-" + t.replace(Le, "-$&").toLowerCase()),
              (n = e.getAttribute(i)),
              "string" == typeof n)
            ) {
              try {
                n =
                  "true" === n
                    ? !0
                    : "false" === n
                    ? !1
                    : "null" === n
                    ? null
                    : +n + "" === n
                    ? +n
                    : Re.test(n)
                    ? le.parseJSON(n)
                    : n;
              } catch (r) {}
              Ee.set(e, t, n);
            } else n = void 0;
          return n;
        }
        function f(e, t, n, i) {
          var r,
            o = 1,
            s = 20,
            a = i
              ? function() {
                  return i.cur();
                }
              : function() {
                  return le.css(e, t, "");
                },
            c = a(),
            l = (n && n[3]) || (le.cssNumber[t] ? "" : "px"),
            u =
              (le.cssNumber[t] || ("px" !== l && +c)) && je.exec(le.css(e, t));
          if (u && u[3] !== l) {
            (l = l || u[3]), (n = n || []), (u = +c || 1);
            do (o = o || ".5"), (u /= o), le.style(e, t, u + l);
            while (o !== (o = a() / c) && 1 !== o && --s);
          }
          return (
            n &&
              ((u = +u || +c || 0),
              (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
              i && ((i.unit = l), (i.start = u), (i.end = r))),
            r
          );
        }
        function h(e, t) {
          var n =
            "undefined" != typeof e.getElementsByTagName
              ? e.getElementsByTagName(t || "*")
              : "undefined" != typeof e.querySelectorAll
              ? e.querySelectorAll(t || "*")
              : [];
          return void 0 === t || (t && le.nodeName(e, t))
            ? le.merge([e], n)
            : n;
        }
        function v(e, t) {
          for (var n = 0, i = e.length; i > n; n++)
            Ne.set(e[n], "globalEval", !t || Ne.get(t[n], "globalEval"));
        }
        function g(e, t, n, i, r) {
          for (
            var o,
              s,
              a,
              c,
              l,
              u,
              d = t.createDocumentFragment(),
              p = [],
              f = 0,
              g = e.length;
            g > f;
            f++
          )
            if (((o = e[f]), o || 0 === o))
              if ("object" === le.type(o)) le.merge(p, o.nodeType ? [o] : o);
              else if (Be.test(o)) {
                for (
                  s = s || d.appendChild(t.createElement("div")),
                    a = (He.exec(o) || ["", ""])[1].toLowerCase(),
                    c = Fe[a] || Fe._default,
                    s.innerHTML = c[1] + le.htmlPrefilter(o) + c[2],
                    u = c[0];
                  u--;

                )
                  s = s.lastChild;
                le.merge(p, s.childNodes),
                  (s = d.firstChild),
                  (s.textContent = "");
              } else p.push(t.createTextNode(o));
          for (d.textContent = "", f = 0; (o = p[f++]); )
            if (i && le.inArray(o, i) > -1) r && r.push(o);
            else if (
              ((l = le.contains(o.ownerDocument, o)),
              (s = h(d.appendChild(o), "script")),
              l && v(s),
              n)
            )
              for (u = 0; (o = s[u++]); ) Oe.test(o.type || "") && n.push(o);
          return d;
        }
        function m() {
          return !0;
        }
        function y() {
          return !1;
        }
        function x() {
          try {
            return Z.activeElement;
          } catch (e) {}
        }
        function b(e, t, n, i, r, o) {
          var s, a;
          if ("object" == typeof t) {
            "string" != typeof n && ((i = i || n), (n = void 0));
            for (a in t) b(e, a, n, i, t[a], o);
            return e;
          }
          if (
            (null == i && null == r
              ? ((r = n), (i = n = void 0))
              : null == r &&
                ("string" == typeof n
                  ? ((r = i), (i = void 0))
                  : ((r = i), (i = n), (n = void 0))),
            r === !1)
          )
            r = y;
          else if (!r) return e;
          return (
            1 === o &&
              ((s = r),
              (r = function(e) {
                return le().off(e), s.apply(this, arguments);
              }),
              (r.guid = s.guid || (s.guid = le.guid++))),
            e.each(function() {
              le.event.add(this, t, r, i, n);
            })
          );
        }
        function k(e, t) {
          return le.nodeName(e, "table") &&
            le.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
            ? e.getElementsByTagName("tbody")[0] ||
                e.appendChild(e.ownerDocument.createElement("tbody"))
            : e;
        }
        function w(e) {
          return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
        }
        function P(e) {
          var t = Ge.exec(e.type);
          return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
        }
        function C(e, t) {
          var n, i, r, o, s, a, c, l;
          if (1 === t.nodeType) {
            if (
              Ne.hasData(e) &&
              ((o = Ne.access(e)), (s = Ne.set(t, o)), (l = o.events))
            ) {
              delete s.handle, (s.events = {});
              for (r in l)
                for (n = 0, i = l[r].length; i > n; n++)
                  le.event.add(t, r, l[r][n]);
            }
            Ee.hasData(e) &&
              ((a = Ee.access(e)), (c = le.extend({}, a)), Ee.set(t, c));
          }
        }
        function T(e, t) {
          var n = t.nodeName.toLowerCase();
          "input" === n && Me.test(e.type)
            ? (t.checked = e.checked)
            : ("input" !== n && "textarea" !== n) ||
              (t.defaultValue = e.defaultValue);
        }
        function S(e, t, n, i) {
          t = te.apply([], t);
          var r,
            o,
            s,
            a,
            c,
            l,
            u = 0,
            d = e.length,
            p = d - 1,
            f = t[0],
            v = le.isFunction(f);
          if (
            v ||
            (d > 1 && "string" == typeof f && !ae.checkClone && Ye.test(f))
          )
            return e.each(function(r) {
              var o = e.eq(r);
              v && (t[0] = f.call(this, r, o.html())), S(o, t, n, i);
            });
          if (
            d &&
            ((r = g(t, e[0].ownerDocument, !1, e, i)),
            (o = r.firstChild),
            1 === r.childNodes.length && (r = o),
            o || i)
          ) {
            for (s = le.map(h(r, "script"), w), a = s.length; d > u; u++)
              (c = r),
                u !== p &&
                  ((c = le.clone(c, !0, !0)), a && le.merge(s, h(c, "script"))),
                n.call(e[u], c, u);
            if (a)
              for (
                l = s[s.length - 1].ownerDocument, le.map(s, P), u = 0;
                a > u;
                u++
              )
                (c = s[u]),
                  Oe.test(c.type || "") &&
                    !Ne.access(c, "globalEval") &&
                    le.contains(l, c) &&
                    (c.src
                      ? le._evalUrl && le._evalUrl(c.src)
                      : le.globalEval(c.textContent.replace(Ve, "")));
          }
          return e;
        }
        function A(e, t, n) {
          for (
            var i, r = t ? le.filter(t, e) : e, o = 0;
            null != (i = r[o]);
            o++
          )
            n || 1 !== i.nodeType || le.cleanData(h(i)),
              i.parentNode &&
                (n && le.contains(i.ownerDocument, i) && v(h(i, "script")),
                i.parentNode.removeChild(i));
          return e;
        }
        function _(e, t) {
          var n = le(t.createElement(e)).appendTo(t.body),
            i = le.css(n[0], "display");
          return n.detach(), i;
        }
        function N(e) {
          var t = Z,
            n = Je[e];
          return (
            n ||
              ((n = _(e, t)),
              ("none" !== n && n) ||
                ((Ke = (
                  Ke || le("<iframe frameborder='0' width='0' height='0'/>")
                ).appendTo(t.documentElement)),
                (t = Ke[0].contentDocument),
                t.write(),
                t.close(),
                (n = _(e, t)),
                Ke.detach()),
              (Je[e] = n)),
            n
          );
        }
        function E(e, t, n) {
          var i,
            r,
            o,
            s,
            a = e.style;
          return (
            (n = n || et(e)),
            (s = n ? n.getPropertyValue(t) || n[t] : void 0),
            ("" !== s && void 0 !== s) ||
              le.contains(e.ownerDocument, e) ||
              (s = le.style(e, t)),
            n &&
              !ae.pixelMarginRight() &&
              Ze.test(s) &&
              Qe.test(t) &&
              ((i = a.width),
              (r = a.minWidth),
              (o = a.maxWidth),
              (a.minWidth = a.maxWidth = a.width = s),
              (s = n.width),
              (a.width = i),
              (a.minWidth = r),
              (a.maxWidth = o)),
            void 0 !== s ? s + "" : s
          );
        }
        function R(e, t) {
          return {
            get: function() {
              return e()
                ? void delete this.get
                : (this.get = t).apply(this, arguments);
            }
          };
        }
        function L(e) {
          if (e in at) return e;
          for (var t = e[0].toUpperCase() + e.slice(1), n = st.length; n--; )
            if (((e = st[n] + t), e in at)) return e;
        }
        function D(e, t, n) {
          var i = je.exec(t);
          return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
        }
        function j(e, t, n, i, r) {
          for (
            var o =
                n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
              s = 0;
            4 > o;
            o += 2
          )
            "margin" === n && (s += le.css(e, n + qe[o], !0, r)),
              i
                ? ("content" === n &&
                    (s -= le.css(e, "padding" + qe[o], !0, r)),
                  "margin" !== n &&
                    (s -= le.css(e, "border" + qe[o] + "Width", !0, r)))
                : ((s += le.css(e, "padding" + qe[o], !0, r)),
                  "padding" !== n &&
                    (s += le.css(e, "border" + qe[o] + "Width", !0, r)));
          return s;
        }
        function q(e, t, n) {
          var i = !0,
            r = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = et(e),
            s = "border-box" === le.css(e, "boxSizing", !1, o);
          if (0 >= r || null == r) {
            if (
              ((r = E(e, t, o)),
              (0 > r || null == r) && (r = e.style[t]),
              Ze.test(r))
            )
              return r;
            (i = s && (ae.boxSizingReliable() || r === e.style[t])),
              (r = parseFloat(r) || 0);
          }
          return r + j(e, t, n || (s ? "border" : "content"), i, o) + "px";
        }
        function I(e, t) {
          for (var n, i, r, o = [], s = 0, a = e.length; a > s; s++)
            (i = e[s]),
              i.style &&
                ((o[s] = Ne.get(i, "olddisplay")),
                (n = i.style.display),
                t
                  ? (o[s] || "none" !== n || (i.style.display = ""),
                    "" === i.style.display &&
                      Ie(i) &&
                      (o[s] = Ne.access(i, "olddisplay", N(i.nodeName))))
                  : ((r = Ie(i)),
                    ("none" === n && r) ||
                      Ne.set(i, "olddisplay", r ? n : le.css(i, "display"))));
          for (s = 0; a > s; s++)
            (i = e[s]),
              i.style &&
                ((t && "none" !== i.style.display && "" !== i.style.display) ||
                  (i.style.display = t ? o[s] || "" : "none"));
          return e;
        }
        function M(e, t, n, i, r) {
          return new M.prototype.init(e, t, n, i, r);
        }
        function H() {
          return (
            n.setTimeout(function() {
              ct = void 0;
            }),
            (ct = le.now())
          );
        }
        function O(e, t) {
          var n,
            i = 0,
            r = { height: e };
          for (t = t ? 1 : 0; 4 > i; i += 2 - t)
            (n = qe[i]), (r["margin" + n] = r["padding" + n] = e);
          return t && (r.opacity = r.width = e), r;
        }
        function F(e, t, n) {
          for (
            var i,
              r = ($.tweeners[t] || []).concat($.tweeners["*"]),
              o = 0,
              s = r.length;
            s > o;
            o++
          )
            if ((i = r[o].call(n, t, e))) return i;
        }
        function B(e, t, n) {
          var i,
            r,
            o,
            s,
            a,
            c,
            l,
            u,
            d = this,
            p = {},
            f = e.style,
            h = e.nodeType && Ie(e),
            v = Ne.get(e, "fxshow");
          n.queue ||
            ((a = le._queueHooks(e, "fx")),
            null == a.unqueued &&
              ((a.unqueued = 0),
              (c = a.empty.fire),
              (a.empty.fire = function() {
                a.unqueued || c();
              })),
            a.unqueued++,
            d.always(function() {
              d.always(function() {
                a.unqueued--, le.queue(e, "fx").length || a.empty.fire();
              });
            })),
            1 === e.nodeType &&
              ("height" in t || "width" in t) &&
              ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
              (l = le.css(e, "display")),
              (u = "none" === l ? Ne.get(e, "olddisplay") || N(e.nodeName) : l),
              "inline" === u &&
                "none" === le.css(e, "float") &&
                (f.display = "inline-block")),
            n.overflow &&
              ((f.overflow = "hidden"),
              d.always(function() {
                (f.overflow = n.overflow[0]),
                  (f.overflowX = n.overflow[1]),
                  (f.overflowY = n.overflow[2]);
              }));
          for (i in t)
            if (((r = t[i]), ut.exec(r))) {
              if (
                (delete t[i],
                (o = o || "toggle" === r),
                r === (h ? "hide" : "show"))
              ) {
                if ("show" !== r || !v || void 0 === v[i]) continue;
                h = !0;
              }
              p[i] = (v && v[i]) || le.style(e, i);
            } else l = void 0;
          if (le.isEmptyObject(p))
            "inline" === ("none" === l ? N(e.nodeName) : l) && (f.display = l);
          else {
            v
              ? "hidden" in v && (h = v.hidden)
              : (v = Ne.access(e, "fxshow", {})),
              o && (v.hidden = !h),
              h
                ? le(e).show()
                : d.done(function() {
                    le(e).hide();
                  }),
              d.done(function() {
                var t;
                Ne.remove(e, "fxshow");
                for (t in p) le.style(e, t, p[t]);
              });
            for (i in p)
              (s = F(h ? v[i] : 0, i, d)),
                i in v ||
                  ((v[i] = s.start),
                  h &&
                    ((s.end = s.start),
                    (s.start = "width" === i || "height" === i ? 1 : 0)));
          }
        }
        function W(e, t) {
          var n, i, r, o, s;
          for (n in e)
            if (
              ((i = le.camelCase(n)),
              (r = t[i]),
              (o = e[n]),
              le.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
              n !== i && ((e[i] = o), delete e[n]),
              (s = le.cssHooks[i]),
              s && "expand" in s)
            ) {
              (o = s.expand(o)), delete e[i];
              for (n in o) n in e || ((e[n] = o[n]), (t[n] = r));
            } else t[i] = r;
        }
        function $(e, t, n) {
          var i,
            r,
            o = 0,
            s = $.prefilters.length,
            a = le.Deferred().always(function() {
              delete c.elem;
            }),
            c = function() {
              if (r) return !1;
              for (
                var t = ct || H(),
                  n = Math.max(0, l.startTime + l.duration - t),
                  i = n / l.duration || 0,
                  o = 1 - i,
                  s = 0,
                  c = l.tweens.length;
                c > s;
                s++
              )
                l.tweens[s].run(o);
              return (
                a.notifyWith(e, [l, o, n]),
                1 > o && c ? n : (a.resolveWith(e, [l]), !1)
              );
            },
            l = a.promise({
              elem: e,
              props: le.extend({}, t),
              opts: le.extend(
                !0,
                { specialEasing: {}, easing: le.easing._default },
                n
              ),
              originalProperties: t,
              originalOptions: n,
              startTime: ct || H(),
              duration: n.duration,
              tweens: [],
              createTween: function(t, n) {
                var i = le.Tween(
                  e,
                  l.opts,
                  t,
                  n,
                  l.opts.specialEasing[t] || l.opts.easing
                );
                return l.tweens.push(i), i;
              },
              stop: function(t) {
                var n = 0,
                  i = t ? l.tweens.length : 0;
                if (r) return this;
                for (r = !0; i > n; n++) l.tweens[n].run(1);
                return (
                  t
                    ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t]))
                    : a.rejectWith(e, [l, t]),
                  this
                );
              }
            }),
            u = l.props;
          for (W(u, l.opts.specialEasing); s > o; o++)
            if ((i = $.prefilters[o].call(l, e, u, l.opts)))
              return (
                le.isFunction(i.stop) &&
                  (le._queueHooks(l.elem, l.opts.queue).stop = le.proxy(
                    i.stop,
                    i
                  )),
                i
              );
          return (
            le.map(u, F, l),
            le.isFunction(l.opts.start) && l.opts.start.call(e, l),
            le.fx.timer(
              le.extend(c, { elem: e, anim: l, queue: l.opts.queue })
            ),
            l
              .progress(l.opts.progress)
              .done(l.opts.done, l.opts.complete)
              .fail(l.opts.fail)
              .always(l.opts.always)
          );
        }
        function z(e) {
          return (e.getAttribute && e.getAttribute("class")) || "";
        }
        function U(e) {
          return function(t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var i,
              r = 0,
              o = t.toLowerCase().match(Te) || [];
            if (le.isFunction(n))
              for (; (i = o[r++]); )
                "+" === i[0]
                  ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
                  : (e[i] = e[i] || []).push(n);
          };
        }
        function X(e, t, n, i) {
          function r(a) {
            var c;
            return (
              (o[a] = !0),
              le.each(e[a] || [], function(e, a) {
                var l = a(t, n, i);
                return "string" != typeof l || s || o[l]
                  ? s
                    ? !(c = l)
                    : void 0
                  : (t.dataTypes.unshift(l), r(l), !1);
              }),
              c
            );
          }
          var o = {},
            s = e === Et;
          return r(t.dataTypes[0]) || (!o["*"] && r("*"));
        }
        function Y(e, t) {
          var n,
            i,
            r = le.ajaxSettings.flatOptions || {};
          for (n in t)
            void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
          return i && le.extend(!0, e, i), e;
        }
        function G(e, t, n) {
          for (var i, r, o, s, a = e.contents, c = e.dataTypes; "*" === c[0]; )
            c.shift(),
              void 0 === i &&
                (i = e.mimeType || t.getResponseHeader("Content-Type"));
          if (i)
            for (r in a)
              if (a[r] && a[r].test(i)) {
                c.unshift(r);
                break;
              }
          if (c[0] in n) o = c[0];
          else {
            for (r in n) {
              if (!c[0] || e.converters[r + " " + c[0]]) {
                o = r;
                break;
              }
              s || (s = r);
            }
            o = o || s;
          }
          return o ? (o !== c[0] && c.unshift(o), n[o]) : void 0;
        }
        function V(e, t, n, i) {
          var r,
            o,
            s,
            a,
            c,
            l = {},
            u = e.dataTypes.slice();
          if (u[1])
            for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
          for (o = u.shift(); o; )
            if (
              (e.responseFields[o] && (n[e.responseFields[o]] = t),
              !c && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
              (c = o),
              (o = u.shift()))
            )
              if ("*" === o) o = c;
              else if ("*" !== c && c !== o) {
                if (((s = l[c + " " + o] || l["* " + o]), !s))
                  for (r in l)
                    if (
                      ((a = r.split(" ")),
                      a[1] === o && (s = l[c + " " + a[0]] || l["* " + a[0]]))
                    ) {
                      s === !0
                        ? (s = l[r])
                        : l[r] !== !0 && ((o = a[0]), u.unshift(a[1]));
                      break;
                    }
                if (s !== !0)
                  if (s && e["throws"]) t = s(t);
                  else
                    try {
                      t = s(t);
                    } catch (d) {
                      return {
                        state: "parsererror",
                        error: s ? d : "No conversion from " + c + " to " + o
                      };
                    }
              }
          return { state: "success", data: t };
        }
        function K(e, t, n, i) {
          var r;
          if (le.isArray(t))
            le.each(t, function(t, r) {
              n || jt.test(e)
                ? i(e, r)
                : K(
                    e +
                      "[" +
                      ("object" == typeof r && null != r ? t : "") +
                      "]",
                    r,
                    n,
                    i
                  );
            });
          else if (n || "object" !== le.type(t)) i(e, t);
          else for (r in t) K(e + "[" + r + "]", t[r], n, i);
        }
        function J(e) {
          return le.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
        }
        var Q = [],
          Z = n.document,
          ee = Q.slice,
          te = Q.concat,
          ne = Q.push,
          ie = Q.indexOf,
          re = {},
          oe = re.toString,
          se = re.hasOwnProperty,
          ae = {},
          ce = "2.2.4",
          le = function(e, t) {
            return new le.fn.init(e, t);
          },
          ue = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
          de = /^-ms-/,
          pe = /-([\da-z])/gi,
          fe = function(e, t) {
            return t.toUpperCase();
          };
        (le.fn = le.prototype = {
          jquery: ce,
          constructor: le,
          selector: "",
          length: 0,
          toArray: function() {
            return ee.call(this);
          },
          get: function(e) {
            return null != e
              ? 0 > e
                ? this[e + this.length]
                : this[e]
              : ee.call(this);
          },
          pushStack: function(e) {
            var t = le.merge(this.constructor(), e);
            return (t.prevObject = this), (t.context = this.context), t;
          },
          each: function(e) {
            return le.each(this, e);
          },
          map: function(e) {
            return this.pushStack(
              le.map(this, function(t, n) {
                return e.call(t, n, t);
              })
            );
          },
          slice: function() {
            return this.pushStack(ee.apply(this, arguments));
          },
          first: function() {
            return this.eq(0);
          },
          last: function() {
            return this.eq(-1);
          },
          eq: function(e) {
            var t = this.length,
              n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
          },
          end: function() {
            return this.prevObject || this.constructor();
          },
          push: ne,
          sort: Q.sort,
          splice: Q.splice
        }),
          (le.extend = le.fn.extend = function() {
            var e,
              t,
              n,
              i,
              r,
              o,
              s = arguments[0] || {},
              a = 1,
              c = arguments.length,
              l = !1;
            for (
              "boolean" == typeof s && ((l = s), (s = arguments[a] || {}), a++),
                "object" == typeof s || le.isFunction(s) || (s = {}),
                a === c && ((s = this), a--);
              c > a;
              a++
            )
              if (null != (e = arguments[a]))
                for (t in e)
                  (n = s[t]),
                    (i = e[t]),
                    s !== i &&
                      (l && i && (le.isPlainObject(i) || (r = le.isArray(i)))
                        ? (r
                            ? ((r = !1), (o = n && le.isArray(n) ? n : []))
                            : (o = n && le.isPlainObject(n) ? n : {}),
                          (s[t] = le.extend(l, o, i)))
                        : void 0 !== i && (s[t] = i));
            return s;
          }),
          le.extend({
            expando: "jQuery" + (ce + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
              throw new Error(e);
            },
            noop: function() {},
            isFunction: function(e) {
              return "function" === le.type(e);
            },
            isArray: Array.isArray,
            isWindow: function(e) {
              return null != e && e === e.window;
            },
            isNumeric: function(e) {
              var t = e && e.toString();
              return !le.isArray(e) && t - parseFloat(t) + 1 >= 0;
            },
            isPlainObject: function(e) {
              var t;
              if ("object" !== le.type(e) || e.nodeType || le.isWindow(e))
                return !1;
              if (
                e.constructor &&
                !se.call(e, "constructor") &&
                !se.call(e.constructor.prototype || {}, "isPrototypeOf")
              )
                return !1;
              for (t in e);
              return void 0 === t || se.call(e, t);
            },
            isEmptyObject: function(e) {
              var t;
              for (t in e) return !1;
              return !0;
            },
            type: function(e) {
              return null == e
                ? e + ""
                : "object" == typeof e || "function" == typeof e
                ? re[oe.call(e)] || "object"
                : typeof e;
            },
            globalEval: function(e) {
              var t,
                n = eval;
              (e = le.trim(e)),
                e &&
                  (1 === e.indexOf("use strict")
                    ? ((t = Z.createElement("script")),
                      (t.text = e),
                      Z.head.appendChild(t).parentNode.removeChild(t))
                    : n(e));
            },
            camelCase: function(e) {
              return e.replace(de, "ms-").replace(pe, fe);
            },
            nodeName: function(e, t) {
              return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
            },
            each: function(e, t) {
              var n,
                i = 0;
              if (s(e))
                for (n = e.length; n > i && t.call(e[i], i, e[i]) !== !1; i++);
              else for (i in e) if (t.call(e[i], i, e[i]) === !1) break;
              return e;
            },
            trim: function(e) {
              return null == e ? "" : (e + "").replace(ue, "");
            },
            makeArray: function(e, t) {
              var n = t || [];
              return (
                null != e &&
                  (s(Object(e))
                    ? le.merge(n, "string" == typeof e ? [e] : e)
                    : ne.call(n, e)),
                n
              );
            },
            inArray: function(e, t, n) {
              return null == t ? -1 : ie.call(t, e, n);
            },
            merge: function(e, t) {
              for (var n = +t.length, i = 0, r = e.length; n > i; i++)
                e[r++] = t[i];
              return (e.length = r), e;
            },
            grep: function(e, t, n) {
              for (var i, r = [], o = 0, s = e.length, a = !n; s > o; o++)
                (i = !t(e[o], o)), i !== a && r.push(e[o]);
              return r;
            },
            map: function(e, t, n) {
              var i,
                r,
                o = 0,
                a = [];
              if (s(e))
                for (i = e.length; i > o; o++)
                  (r = t(e[o], o, n)), null != r && a.push(r);
              else for (o in e) (r = t(e[o], o, n)), null != r && a.push(r);
              return te.apply([], a);
            },
            guid: 1,
            proxy: function(e, t) {
              var n, i, r;
              return (
                "string" == typeof t && ((n = e[t]), (t = e), (e = n)),
                le.isFunction(e)
                  ? ((i = ee.call(arguments, 2)),
                    (r = function() {
                      return e.apply(t || this, i.concat(ee.call(arguments)));
                    }),
                    (r.guid = e.guid = e.guid || le.guid++),
                    r)
                  : void 0
              );
            },
            now: Date.now,
            support: ae
          }),
          "function" == typeof Symbol &&
            (le.fn[Symbol.iterator] = Q[Symbol.iterator]),
          le.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
              " "
            ),
            function(e, t) {
              re["[object " + t + "]"] = t.toLowerCase();
            }
          );
        var he = /*!
         * Sizzle CSS Selector Engine v2.2.1
         * http://sizzlejs.com/
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2015-10-17
         */ (function(e) {
          function t(e, t, n, i) {
            var r,
              o,
              s,
              a,
              c,
              l,
              d,
              f,
              h = t && t.ownerDocument,
              v = t ? t.nodeType : 9;
            if (
              ((n = n || []),
              "string" != typeof e || !e || (1 !== v && 9 !== v && 11 !== v))
            )
              return n;
            if (
              !i &&
              ((t ? t.ownerDocument || t : F) !== L && R(t), (t = t || L), j)
            ) {
              if (11 !== v && (l = me.exec(e)))
                if ((r = l[1])) {
                  if (9 === v) {
                    if (!(s = t.getElementById(r))) return n;
                    if (s.id === r) return n.push(s), n;
                  } else if (
                    h &&
                    (s = h.getElementById(r)) &&
                    H(t, s) &&
                    s.id === r
                  )
                    return n.push(s), n;
                } else {
                  if (l[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                  if (
                    (r = l[3]) &&
                    k.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return Q.apply(n, t.getElementsByClassName(r)), n;
                }
              if (k.qsa && !U[e + " "] && (!q || !q.test(e))) {
                if (1 !== v) (h = t), (f = e);
                else if ("object" !== t.nodeName.toLowerCase()) {
                  for (
                    (a = t.getAttribute("id"))
                      ? (a = a.replace(xe, "\\$&"))
                      : t.setAttribute("id", (a = O)),
                      d = T(e),
                      o = d.length,
                      c = pe.test(a) ? "#" + a : "[id='" + a + "']";
                    o--;

                  )
                    d[o] = c + " " + p(d[o]);
                  (f = d.join(",")), (h = (ye.test(e) && u(t.parentNode)) || t);
                }
                if (f)
                  try {
                    return Q.apply(n, h.querySelectorAll(f)), n;
                  } catch (g) {
                  } finally {
                    a === O && t.removeAttribute("id");
                  }
              }
            }
            return A(e.replace(ae, "$1"), t, n, i);
          }
          function n() {
            function e(n, i) {
              return (
                t.push(n + " ") > w.cacheLength && delete e[t.shift()],
                (e[n + " "] = i)
              );
            }
            var t = [];
            return e;
          }
          function i(e) {
            return (e[O] = !0), e;
          }
          function r(e) {
            var t = L.createElement("div");
            try {
              return !!e(t);
            } catch (n) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function o(e, t) {
            for (var n = e.split("|"), i = n.length; i--; )
              w.attrHandle[n[i]] = t;
          }
          function s(e, t) {
            var n = t && e,
              i =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
            if (i) return i;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function a(e) {
            return function(t) {
              var n = t.nodeName.toLowerCase();
              return "input" === n && t.type === e;
            };
          }
          function c(e) {
            return function(t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }
          function l(e) {
            return i(function(t) {
              return (
                (t = +t),
                i(function(n, i) {
                  for (var r, o = e([], n.length, t), s = o.length; s--; )
                    n[(r = o[s])] && (n[r] = !(i[r] = n[r]));
                })
              );
            });
          }
          function u(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
          }
          function d() {}
          function p(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i;
          }
          function f(e, t, n) {
            var i = t.dir,
              r = n && "parentNode" === i,
              o = W++;
            return t.first
              ? function(t, n, o) {
                  for (; (t = t[i]); )
                    if (1 === t.nodeType || r) return e(t, n, o);
                }
              : function(t, n, s) {
                  var a,
                    c,
                    l,
                    u = [B, o];
                  if (s) {
                    for (; (t = t[i]); )
                      if ((1 === t.nodeType || r) && e(t, n, s)) return !0;
                  } else
                    for (; (t = t[i]); )
                      if (1 === t.nodeType || r) {
                        if (
                          ((l = t[O] || (t[O] = {})),
                          (c = l[t.uniqueID] || (l[t.uniqueID] = {})),
                          (a = c[i]) && a[0] === B && a[1] === o)
                        )
                          return (u[2] = a[2]);
                        if (((c[i] = u), (u[2] = e(t, n, s)))) return !0;
                      }
                };
          }
          function h(e) {
            return e.length > 1
              ? function(t, n, i) {
                  for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                  return !0;
                }
              : e[0];
          }
          function v(e, n, i) {
            for (var r = 0, o = n.length; o > r; r++) t(e, n[r], i);
            return i;
          }
          function g(e, t, n, i, r) {
            for (var o, s = [], a = 0, c = e.length, l = null != t; c > a; a++)
              (o = e[a]) && ((n && !n(o, i, r)) || (s.push(o), l && t.push(a)));
            return s;
          }
          function m(e, t, n, r, o, s) {
            return (
              r && !r[O] && (r = m(r)),
              o && !o[O] && (o = m(o, s)),
              i(function(i, s, a, c) {
                var l,
                  u,
                  d,
                  p = [],
                  f = [],
                  h = s.length,
                  m = i || v(t || "*", a.nodeType ? [a] : a, []),
                  y = !e || (!i && t) ? m : g(m, p, e, a, c),
                  x = n ? (o || (i ? e : h || r) ? [] : s) : y;
                if ((n && n(y, x, a, c), r))
                  for (l = g(x, f), r(l, [], a, c), u = l.length; u--; )
                    (d = l[u]) && (x[f[u]] = !(y[f[u]] = d));
                if (i) {
                  if (o || e) {
                    if (o) {
                      for (l = [], u = x.length; u--; )
                        (d = x[u]) && l.push((y[u] = d));
                      o(null, (x = []), l, c);
                    }
                    for (u = x.length; u--; )
                      (d = x[u]) &&
                        (l = o ? ee(i, d) : p[u]) > -1 &&
                        (i[l] = !(s[l] = d));
                  }
                } else (x = g(x === s ? x.splice(h, x.length) : x)), o ? o(null, s, x, c) : Q.apply(s, x);
              })
            );
          }
          function y(e) {
            for (
              var t,
                n,
                i,
                r = e.length,
                o = w.relative[e[0].type],
                s = o || w.relative[" "],
                a = o ? 1 : 0,
                c = f(
                  function(e) {
                    return e === t;
                  },
                  s,
                  !0
                ),
                l = f(
                  function(e) {
                    return ee(t, e) > -1;
                  },
                  s,
                  !0
                ),
                u = [
                  function(e, n, i) {
                    var r =
                      (!o && (i || n !== _)) ||
                      ((t = n).nodeType ? c(e, n, i) : l(e, n, i));
                    return (t = null), r;
                  }
                ];
              r > a;
              a++
            )
              if ((n = w.relative[e[a].type])) u = [f(h(u), n)];
              else {
                if (
                  ((n = w.filter[e[a].type].apply(null, e[a].matches)), n[O])
                ) {
                  for (i = ++a; r > i && !w.relative[e[i].type]; i++);
                  return m(
                    a > 1 && h(u),
                    a > 1 &&
                      p(
                        e
                          .slice(0, a - 1)
                          .concat({ value: " " === e[a - 2].type ? "*" : "" })
                      ).replace(ae, "$1"),
                    n,
                    i > a && y(e.slice(a, i)),
                    r > i && y((e = e.slice(i))),
                    r > i && p(e)
                  );
                }
                u.push(n);
              }
            return h(u);
          }
          function x(e, n) {
            var r = n.length > 0,
              o = e.length > 0,
              s = function(i, s, a, c, l) {
                var u,
                  d,
                  p,
                  f = 0,
                  h = "0",
                  v = i && [],
                  m = [],
                  y = _,
                  x = i || (o && w.find.TAG("*", l)),
                  b = (B += null == y ? 1 : Math.random() || 0.1),
                  k = x.length;
                for (
                  l && (_ = s === L || s || l);
                  h !== k && null != (u = x[h]);
                  h++
                ) {
                  if (o && u) {
                    for (
                      d = 0, s || u.ownerDocument === L || (R(u), (a = !j));
                      (p = e[d++]);

                    )
                      if (p(u, s || L, a)) {
                        c.push(u);
                        break;
                      }
                    l && (B = b);
                  }
                  r && ((u = !p && u) && f--, i && v.push(u));
                }
                if (((f += h), r && h !== f)) {
                  for (d = 0; (p = n[d++]); ) p(v, m, s, a);
                  if (i) {
                    if (f > 0) for (; h--; ) v[h] || m[h] || (m[h] = K.call(c));
                    m = g(m);
                  }
                  Q.apply(c, m),
                    l &&
                      !i &&
                      m.length > 0 &&
                      f + n.length > 1 &&
                      t.uniqueSort(c);
                }
                return l && ((B = b), (_ = y)), v;
              };
            return r ? i(s) : s;
          }
          var b,
            k,
            w,
            P,
            C,
            T,
            S,
            A,
            _,
            N,
            E,
            R,
            L,
            D,
            j,
            q,
            I,
            M,
            H,
            O = "sizzle" + 1 * new Date(),
            F = e.document,
            B = 0,
            W = 0,
            $ = n(),
            z = n(),
            U = n(),
            X = function(e, t) {
              return e === t && (E = !0), 0;
            },
            Y = 1 << 31,
            G = {}.hasOwnProperty,
            V = [],
            K = V.pop,
            J = V.push,
            Q = V.push,
            Z = V.slice,
            ee = function(e, t) {
              for (var n = 0, i = e.length; i > n; n++)
                if (e[n] === t) return n;
              return -1;
            },
            te =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            re =
              "\\[" +
              ne +
              "*(" +
              ie +
              ")(?:" +
              ne +
              "*([*^$|!~]?=)" +
              ne +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              ie +
              "))|)" +
              ne +
              "*\\]",
            oe =
              ":(" +
              ie +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              re +
              ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            ae = new RegExp(
              "^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$",
              "g"
            ),
            ce = new RegExp("^" + ne + "*," + ne + "*"),
            le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            de = new RegExp(oe),
            pe = new RegExp("^" + ie + "$"),
            fe = {
              ID: new RegExp("^#(" + ie + ")"),
              CLASS: new RegExp("^\\.(" + ie + ")"),
              TAG: new RegExp("^(" + ie + "|[*])"),
              ATTR: new RegExp("^" + re),
              PSEUDO: new RegExp("^" + oe),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  ne +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  ne +
                  "*(?:([+-]|)" +
                  ne +
                  "*(\\d+)|))" +
                  ne +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + te + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  ne +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  ne +
                  "*((?:-\\d)?\\d*)" +
                  ne +
                  "*\\)|)(?=[^-]|$)",
                "i"
              )
            },
            he = /^(?:input|select|textarea|button)$/i,
            ve = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            xe = /'|\\/g,
            be = new RegExp(
              "\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)",
              "ig"
            ),
            ke = function(e, t, n) {
              var i = "0x" + t - 65536;
              return i !== i || n
                ? t
                : 0 > i
                ? String.fromCharCode(i + 65536)
                : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
            },
            we = function() {
              R();
            };
          try {
            Q.apply((V = Z.call(F.childNodes)), F.childNodes),
              V[F.childNodes.length].nodeType;
          } catch (Pe) {
            Q = {
              apply: V.length
                ? function(e, t) {
                    J.apply(e, Z.call(t));
                  }
                : function(e, t) {
                    for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                    e.length = n - 1;
                  }
            };
          }
          (k = t.support = {}),
            (C = t.isXML = function(e) {
              var t = e && (e.ownerDocument || e).documentElement;
              return t ? "HTML" !== t.nodeName : !1;
            }),
            (R = t.setDocument = function(e) {
              var t,
                n,
                i = e ? e.ownerDocument || e : F;
              return i !== L && 9 === i.nodeType && i.documentElement
                ? ((L = i),
                  (D = L.documentElement),
                  (j = !C(L)),
                  (n = L.defaultView) &&
                    n.top !== n &&
                    (n.addEventListener
                      ? n.addEventListener("unload", we, !1)
                      : n.attachEvent && n.attachEvent("onunload", we)),
                  (k.attributes = r(function(e) {
                    return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (k.getElementsByTagName = r(function(e) {
                    return (
                      e.appendChild(L.createComment("")),
                      !e.getElementsByTagName("*").length
                    );
                  })),
                  (k.getElementsByClassName = ge.test(
                    L.getElementsByClassName
                  )),
                  (k.getById = r(function(e) {
                    return (
                      (D.appendChild(e).id = O),
                      !L.getElementsByName || !L.getElementsByName(O).length
                    );
                  })),
                  k.getById
                    ? ((w.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && j) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }),
                      (w.filter.ID = function(e) {
                        var t = e.replace(be, ke);
                        return function(e) {
                          return e.getAttribute("id") === t;
                        };
                      }))
                    : (delete w.find.ID,
                      (w.filter.ID = function(e) {
                        var t = e.replace(be, ke);
                        return function(e) {
                          var n =
                            "undefined" != typeof e.getAttributeNode &&
                            e.getAttributeNode("id");
                          return n && n.value === t;
                        };
                      })),
                  (w.find.TAG = k.getElementsByTagName
                    ? function(e, t) {
                        return "undefined" != typeof t.getElementsByTagName
                          ? t.getElementsByTagName(e)
                          : k.qsa
                          ? t.querySelectorAll(e)
                          : void 0;
                      }
                    : function(e, t) {
                        var n,
                          i = [],
                          r = 0,
                          o = t.getElementsByTagName(e);
                        if ("*" === e) {
                          for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                          return i;
                        }
                        return o;
                      }),
                  (w.find.CLASS =
                    k.getElementsByClassName &&
                    function(e, t) {
                      return "undefined" != typeof t.getElementsByClassName && j
                        ? t.getElementsByClassName(e)
                        : void 0;
                    }),
                  (I = []),
                  (q = []),
                  (k.qsa = ge.test(L.querySelectorAll)) &&
                    (r(function(e) {
                      (D.appendChild(e).innerHTML =
                        "<a id='" +
                        O +
                        "'></a><select id='" +
                        O +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length &&
                          q.push("[*^$]=" + ne + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length ||
                          q.push("\\[" + ne + "*(?:value|" + te + ")"),
                        e.querySelectorAll("[id~=" + O + "-]").length ||
                          q.push("~="),
                        e.querySelectorAll(":checked").length ||
                          q.push(":checked"),
                        e.querySelectorAll("a#" + O + "+*").length ||
                          q.push(".#.+[+~]");
                    }),
                    r(function(e) {
                      var t = L.createElement("input");
                      t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length &&
                          q.push("name" + ne + "*[*^$|!~]?="),
                        e.querySelectorAll(":enabled").length ||
                          q.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        q.push(",.*:");
                    })),
                  (k.matchesSelector = ge.test(
                    (M =
                      D.matches ||
                      D.webkitMatchesSelector ||
                      D.mozMatchesSelector ||
                      D.oMatchesSelector ||
                      D.msMatchesSelector)
                  )) &&
                    r(function(e) {
                      (k.disconnectedMatch = M.call(e, "div")),
                        M.call(e, "[s!='']:x"),
                        I.push("!=", oe);
                    }),
                  (q = q.length && new RegExp(q.join("|"))),
                  (I = I.length && new RegExp(I.join("|"))),
                  (t = ge.test(D.compareDocumentPosition)),
                  (H =
                    t || ge.test(D.contains)
                      ? function(e, t) {
                          var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                          return (
                            e === i ||
                            !(
                              !i ||
                              1 !== i.nodeType ||
                              !(n.contains
                                ? n.contains(i)
                                : e.compareDocumentPosition &&
                                  16 & e.compareDocumentPosition(i))
                            )
                          );
                        }
                      : function(e, t) {
                          if (t)
                            for (; (t = t.parentNode); ) if (t === e) return !0;
                          return !1;
                        }),
                  (X = t
                    ? function(e, t) {
                        if (e === t) return (E = !0), 0;
                        var n =
                          !e.compareDocumentPosition -
                          !t.compareDocumentPosition;
                        return n
                          ? n
                          : ((n =
                              (e.ownerDocument || e) === (t.ownerDocument || t)
                                ? e.compareDocumentPosition(t)
                                : 1),
                            1 & n ||
                            (!k.sortDetached &&
                              t.compareDocumentPosition(e) === n)
                              ? e === L || (e.ownerDocument === F && H(F, e))
                                ? -1
                                : t === L || (t.ownerDocument === F && H(F, t))
                                ? 1
                                : N
                                ? ee(N, e) - ee(N, t)
                                : 0
                              : 4 & n
                              ? -1
                              : 1);
                      }
                    : function(e, t) {
                        if (e === t) return (E = !0), 0;
                        var n,
                          i = 0,
                          r = e.parentNode,
                          o = t.parentNode,
                          a = [e],
                          c = [t];
                        if (!r || !o)
                          return e === L
                            ? -1
                            : t === L
                            ? 1
                            : r
                            ? -1
                            : o
                            ? 1
                            : N
                            ? ee(N, e) - ee(N, t)
                            : 0;
                        if (r === o) return s(e, t);
                        for (n = e; (n = n.parentNode); ) a.unshift(n);
                        for (n = t; (n = n.parentNode); ) c.unshift(n);
                        for (; a[i] === c[i]; ) i++;
                        return i
                          ? s(a[i], c[i])
                          : a[i] === F
                          ? -1
                          : c[i] === F
                          ? 1
                          : 0;
                      }),
                  L)
                : L;
            }),
            (t.matches = function(e, n) {
              return t(e, null, null, n);
            }),
            (t.matchesSelector = function(e, n) {
              if (
                ((e.ownerDocument || e) !== L && R(e),
                (n = n.replace(ue, "='$1']")),
                k.matchesSelector &&
                  j &&
                  !U[n + " "] &&
                  (!I || !I.test(n)) &&
                  (!q || !q.test(n)))
              )
                try {
                  var i = M.call(e, n);
                  if (
                    i ||
                    k.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return i;
                } catch (r) {}
              return t(n, L, null, [e]).length > 0;
            }),
            (t.contains = function(e, t) {
              return (e.ownerDocument || e) !== L && R(e), H(e, t);
            }),
            (t.attr = function(e, t) {
              (e.ownerDocument || e) !== L && R(e);
              var n = w.attrHandle[t.toLowerCase()],
                i =
                  n && G.call(w.attrHandle, t.toLowerCase())
                    ? n(e, t, !j)
                    : void 0;
              return void 0 !== i
                ? i
                : k.attributes || !j
                ? e.getAttribute(t)
                : (i = e.getAttributeNode(t)) && i.specified
                ? i.value
                : null;
            }),
            (t.error = function(e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (t.uniqueSort = function(e) {
              var t,
                n = [],
                i = 0,
                r = 0;
              if (
                ((E = !k.detectDuplicates),
                (N = !k.sortStable && e.slice(0)),
                e.sort(X),
                E)
              ) {
                for (; (t = e[r++]); ) t === e[r] && (i = n.push(r));
                for (; i--; ) e.splice(n[i], 1);
              }
              return (N = null), e;
            }),
            (P = t.getText = function(e) {
              var t,
                n = "",
                i = 0,
                r = e.nodeType;
              if (r) {
                if (1 === r || 9 === r || 11 === r) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += P(e);
                } else if (3 === r || 4 === r) return e.nodeValue;
              } else for (; (t = e[i++]); ) n += P(t);
              return n;
            }),
            (w = t.selectors = {
              cacheLength: 50,
              createPseudo: i,
              match: fe,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" }
              },
              preFilter: {
                ATTR: function(e) {
                  return (
                    (e[1] = e[1].replace(be, ke)),
                    (e[3] = (e[3] || e[4] || e[5] || "").replace(be, ke)),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                  );
                },
                CHILD: function(e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    "nth" === e[1].slice(0, 3)
                      ? (e[3] || t.error(e[0]),
                        (e[4] = +(e[4]
                          ? e[5] + (e[6] || 1)
                          : 2 * ("even" === e[3] || "odd" === e[3]))),
                        (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                      : e[3] && t.error(e[0]),
                    e
                  );
                },
                PSEUDO: function(e) {
                  var t,
                    n = !e[6] && e[2];
                  return fe.CHILD.test(e[0])
                    ? null
                    : (e[3]
                        ? (e[2] = e[4] || e[5] || "")
                        : n &&
                          de.test(n) &&
                          (t = T(n, !0)) &&
                          (t = n.indexOf(")", n.length - t) - n.length) &&
                          ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                      e.slice(0, 3));
                }
              },
              filter: {
                TAG: function(e) {
                  var t = e.replace(be, ke).toLowerCase();
                  return "*" === e
                    ? function() {
                        return !0;
                      }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                      };
                },
                CLASS: function(e) {
                  var t = $[e + " "];
                  return (
                    t ||
                    ((t = new RegExp(
                      "(^|" + ne + ")" + e + "(" + ne + "|$)"
                    )) &&
                      $(e, function(e) {
                        return t.test(
                          ("string" == typeof e.className && e.className) ||
                            ("undefined" != typeof e.getAttribute &&
                              e.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function(e, n, i) {
                  return function(r) {
                    var o = t.attr(r, e);
                    return null == o
                      ? "!=" === n
                      : n
                      ? ((o += ""),
                        "=" === n
                          ? o === i
                          : "!=" === n
                          ? o !== i
                          : "^=" === n
                          ? i && 0 === o.indexOf(i)
                          : "*=" === n
                          ? i && o.indexOf(i) > -1
                          : "$=" === n
                          ? i && o.slice(-i.length) === i
                          : "~=" === n
                          ? (" " + o.replace(se, " ") + " ").indexOf(i) > -1
                          : "|=" === n
                          ? o === i || o.slice(0, i.length + 1) === i + "-"
                          : !1)
                      : !0;
                  };
                },
                CHILD: function(e, t, n, i, r) {
                  var o = "nth" !== e.slice(0, 3),
                    s = "last" !== e.slice(-4),
                    a = "of-type" === t;
                  return 1 === i && 0 === r
                    ? function(e) {
                        return !!e.parentNode;
                      }
                    : function(t, n, c) {
                        var l,
                          u,
                          d,
                          p,
                          f,
                          h,
                          v = o !== s ? "nextSibling" : "previousSibling",
                          g = t.parentNode,
                          m = a && t.nodeName.toLowerCase(),
                          y = !c && !a,
                          x = !1;
                        if (g) {
                          if (o) {
                            for (; v; ) {
                              for (p = t; (p = p[v]); )
                                if (
                                  a
                                    ? p.nodeName.toLowerCase() === m
                                    : 1 === p.nodeType
                                )
                                  return !1;
                              h = v = "only" === e && !h && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((h = [s ? g.firstChild : g.lastChild]), s && y)
                          ) {
                            for (
                              p = g,
                                d = p[O] || (p[O] = {}),
                                u = d[p.uniqueID] || (d[p.uniqueID] = {}),
                                l = u[e] || [],
                                f = l[0] === B && l[1],
                                x = f && l[2],
                                p = f && g.childNodes[f];
                              (p =
                                (++f && p && p[v]) || (x = f = 0) || h.pop());

                            )
                              if (1 === p.nodeType && ++x && p === t) {
                                u[e] = [B, f, x];
                                break;
                              }
                          } else if (
                            (y &&
                              ((p = t),
                              (d = p[O] || (p[O] = {})),
                              (u = d[p.uniqueID] || (d[p.uniqueID] = {})),
                              (l = u[e] || []),
                              (f = l[0] === B && l[1]),
                              (x = f)),
                            x === !1)
                          )
                            for (
                              ;
                              (p =
                                (++f && p && p[v]) || (x = f = 0) || h.pop()) &&
                              ((a
                                ? p.nodeName.toLowerCase() !== m
                                : 1 !== p.nodeType) ||
                                !++x ||
                                (y &&
                                  ((d = p[O] || (p[O] = {})),
                                  (u = d[p.uniqueID] || (d[p.uniqueID] = {})),
                                  (u[e] = [B, x])),
                                p !== t));

                            );
                          return (
                            (x -= r), x === i || (x % i === 0 && x / i >= 0)
                          );
                        }
                      };
                },
                PSEUDO: function(e, n) {
                  var r,
                    o =
                      w.pseudos[e] ||
                      w.setFilters[e.toLowerCase()] ||
                      t.error("unsupported pseudo: " + e);
                  return o[O]
                    ? o(n)
                    : o.length > 1
                    ? ((r = [e, e, "", n]),
                      w.setFilters.hasOwnProperty(e.toLowerCase())
                        ? i(function(e, t) {
                            for (var i, r = o(e, n), s = r.length; s--; )
                              (i = ee(e, r[s])), (e[i] = !(t[i] = r[s]));
                          })
                        : function(e) {
                            return o(e, 0, r);
                          })
                    : o;
                }
              },
              pseudos: {
                not: i(function(e) {
                  var t = [],
                    n = [],
                    r = S(e.replace(ae, "$1"));
                  return r[O]
                    ? i(function(e, t, n, i) {
                        for (var o, s = r(e, null, i, []), a = e.length; a--; )
                          (o = s[a]) && (e[a] = !(t[a] = o));
                      })
                    : function(e, i, o) {
                        return (
                          (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                        );
                      };
                }),
                has: i(function(e) {
                  return function(n) {
                    return t(e, n).length > 0;
                  };
                }),
                contains: i(function(e) {
                  return (
                    (e = e.replace(be, ke)),
                    function(t) {
                      return (
                        (t.textContent || t.innerText || P(t)).indexOf(e) > -1
                      );
                    }
                  );
                }),
                lang: i(function(e) {
                  return (
                    pe.test(e || "") || t.error("unsupported lang: " + e),
                    (e = e.replace(be, ke).toLowerCase()),
                    function(t) {
                      var n;
                      do
                        if (
                          (n = j
                            ? t.lang
                            : t.getAttribute("xml:lang") ||
                              t.getAttribute("lang"))
                        )
                          return (
                            (n = n.toLowerCase()),
                            n === e || 0 === n.indexOf(e + "-")
                          );
                      while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function(t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id;
                },
                root: function(e) {
                  return e === D;
                },
                focus: function(e) {
                  return (
                    e === L.activeElement &&
                    (!L.hasFocus || L.hasFocus()) &&
                    !!(e.type || e.href || ~e.tabIndex)
                  );
                },
                enabled: function(e) {
                  return e.disabled === !1;
                },
                disabled: function(e) {
                  return e.disabled === !0;
                },
                checked: function(e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && !!e.checked) ||
                    ("option" === t && !!e.selected)
                  );
                },
                selected: function(e) {
                  return (
                    e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                  );
                },
                empty: function(e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6) return !1;
                  return !0;
                },
                parent: function(e) {
                  return !w.pseudos.empty(e);
                },
                header: function(e) {
                  return ve.test(e.nodeName);
                },
                input: function(e) {
                  return he.test(e.nodeName);
                },
                button: function(e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && "button" === e.type) || "button" === t
                  );
                },
                text: function(e) {
                  var t;
                  return (
                    "input" === e.nodeName.toLowerCase() &&
                    "text" === e.type &&
                    (null == (t = e.getAttribute("type")) ||
                      "text" === t.toLowerCase())
                  );
                },
                first: l(function() {
                  return [0];
                }),
                last: l(function(e, t) {
                  return [t - 1];
                }),
                eq: l(function(e, t, n) {
                  return [0 > n ? n + t : n];
                }),
                even: l(function(e, t) {
                  for (var n = 0; t > n; n += 2) e.push(n);
                  return e;
                }),
                odd: l(function(e, t) {
                  for (var n = 1; t > n; n += 2) e.push(n);
                  return e;
                }),
                lt: l(function(e, t, n) {
                  for (var i = 0 > n ? n + t : n; --i >= 0; ) e.push(i);
                  return e;
                }),
                gt: l(function(e, t, n) {
                  for (var i = 0 > n ? n + t : n; ++i < t; ) e.push(i);
                  return e;
                })
              }
            }),
            (w.pseudos.nth = w.pseudos.eq);
          for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
          })
            w.pseudos[b] = a(b);
          for (b in { submit: !0, reset: !0 }) w.pseudos[b] = c(b);
          return (
            (d.prototype = w.filters = w.pseudos),
            (w.setFilters = new d()),
            (T = t.tokenize = function(e, n) {
              var i,
                r,
                o,
                s,
                a,
                c,
                l,
                u = z[e + " "];
              if (u) return n ? 0 : u.slice(0);
              for (a = e, c = [], l = w.preFilter; a; ) {
                (i && !(r = ce.exec(a))) ||
                  (r && (a = a.slice(r[0].length) || a), c.push((o = []))),
                  (i = !1),
                  (r = le.exec(a)) &&
                    ((i = r.shift()),
                    o.push({ value: i, type: r[0].replace(ae, " ") }),
                    (a = a.slice(i.length)));
                for (s in w.filter)
                  !(r = fe[s].exec(a)) ||
                    (l[s] && !(r = l[s](r))) ||
                    ((i = r.shift()),
                    o.push({ value: i, type: s, matches: r }),
                    (a = a.slice(i.length)));
                if (!i) break;
              }
              return n ? a.length : a ? t.error(e) : z(e, c).slice(0);
            }),
            (S = t.compile = function(e, t) {
              var n,
                i = [],
                r = [],
                o = U[e + " "];
              if (!o) {
                for (t || (t = T(e)), n = t.length; n--; )
                  (o = y(t[n])), o[O] ? i.push(o) : r.push(o);
                (o = U(e, x(r, i))), (o.selector = e);
              }
              return o;
            }),
            (A = t.select = function(e, t, n, i) {
              var r,
                o,
                s,
                a,
                c,
                l = "function" == typeof e && e,
                d = !i && T((e = l.selector || e));
              if (((n = n || []), 1 === d.length)) {
                if (
                  ((o = d[0] = d[0].slice(0)),
                  o.length > 2 &&
                    "ID" === (s = o[0]).type &&
                    k.getById &&
                    9 === t.nodeType &&
                    j &&
                    w.relative[o[1].type])
                ) {
                  if (
                    ((t = (w.find.ID(s.matches[0].replace(be, ke), t) ||
                      [])[0]),
                    !t)
                  )
                    return n;
                  l && (t = t.parentNode),
                    (e = e.slice(o.shift().value.length));
                }
                for (
                  r = fe.needsContext.test(e) ? 0 : o.length;
                  r-- && ((s = o[r]), !w.relative[(a = s.type)]);

                )
                  if (
                    (c = w.find[a]) &&
                    (i = c(
                      s.matches[0].replace(be, ke),
                      (ye.test(o[0].type) && u(t.parentNode)) || t
                    ))
                  ) {
                    if ((o.splice(r, 1), (e = i.length && p(o)), !e))
                      return Q.apply(n, i), n;
                    break;
                  }
              }
              return (
                (l || S(e, d))(
                  i,
                  t,
                  !j,
                  n,
                  !t || (ye.test(e) && u(t.parentNode)) || t
                ),
                n
              );
            }),
            (k.sortStable =
              O.split("")
                .sort(X)
                .join("") === O),
            (k.detectDuplicates = !!E),
            R(),
            (k.sortDetached = r(function(e) {
              return 1 & e.compareDocumentPosition(L.createElement("div"));
            })),
            r(function(e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                "#" === e.firstChild.getAttribute("href")
              );
            }) ||
              o("type|href|height|width", function(e, t, n) {
                return n
                  ? void 0
                  : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
            (k.attributes &&
              r(function(e) {
                return (
                  (e.innerHTML = "<input/>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })) ||
              o("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase()
                  ? void 0
                  : e.defaultValue;
              }),
            r(function(e) {
              return null == e.getAttribute("disabled");
            }) ||
              o(te, function(e, t, n) {
                var i;
                return n
                  ? void 0
                  : e[t] === !0
                  ? t.toLowerCase()
                  : (i = e.getAttributeNode(t)) && i.specified
                  ? i.value
                  : null;
              }),
            t
          );
        })(n);
        (le.find = he),
          (le.expr = he.selectors),
          (le.expr[":"] = le.expr.pseudos),
          (le.uniqueSort = le.unique = he.uniqueSort),
          (le.text = he.getText),
          (le.isXMLDoc = he.isXML),
          (le.contains = he.contains);
        var ve = function(e, t, n) {
            for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
              if (1 === e.nodeType) {
                if (r && le(e).is(n)) break;
                i.push(e);
              }
            return i;
          },
          ge = function(e, t) {
            for (var n = []; e; e = e.nextSibling)
              1 === e.nodeType && e !== t && n.push(e);
            return n;
          },
          me = le.expr.match.needsContext,
          ye = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
          xe = /^.[^:#\[\.,]*$/;
        (le.filter = function(e, t, n) {
          var i = t[0];
          return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === i.nodeType
              ? le.find.matchesSelector(i, e)
                ? [i]
                : []
              : le.find.matches(
                  e,
                  le.grep(t, function(e) {
                    return 1 === e.nodeType;
                  })
                )
          );
        }),
          le.fn.extend({
            find: function(e) {
              var t,
                n = this.length,
                i = [],
                r = this;
              if ("string" != typeof e)
                return this.pushStack(
                  le(e).filter(function() {
                    for (t = 0; n > t; t++)
                      if (le.contains(r[t], this)) return !0;
                  })
                );
              for (t = 0; n > t; t++) le.find(e, r[t], i);
              return (
                (i = this.pushStack(n > 1 ? le.unique(i) : i)),
                (i.selector = this.selector ? this.selector + " " + e : e),
                i
              );
            },
            filter: function(e) {
              return this.pushStack(a(this, e || [], !1));
            },
            not: function(e) {
              return this.pushStack(a(this, e || [], !0));
            },
            is: function(e) {
              return !!a(
                this,
                "string" == typeof e && me.test(e) ? le(e) : e || [],
                !1
              ).length;
            }
          });
        var be,
          ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
          we = (le.fn.init = function(e, t, n) {
            var i, r;
            if (!e) return this;
            if (((n = n || be), "string" == typeof e)) {
              if (
                ((i =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : ke.exec(e)),
                !i || (!i[1] && t))
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (i[1]) {
                if (
                  ((t = t instanceof le ? t[0] : t),
                  le.merge(
                    this,
                    le.parseHTML(
                      i[1],
                      t && t.nodeType ? t.ownerDocument || t : Z,
                      !0
                    )
                  ),
                  ye.test(i[1]) && le.isPlainObject(t))
                )
                  for (i in t)
                    le.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
              }
              return (
                (r = Z.getElementById(i[2])),
                r && r.parentNode && ((this.length = 1), (this[0] = r)),
                (this.context = Z),
                (this.selector = e),
                this
              );
            }
            return e.nodeType
              ? ((this.context = this[0] = e), (this.length = 1), this)
              : le.isFunction(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(le)
              : (void 0 !== e.selector &&
                  ((this.selector = e.selector), (this.context = e.context)),
                le.makeArray(e, this));
          });
        (we.prototype = le.fn), (be = le(Z));
        var Pe = /^(?:parents|prev(?:Until|All))/,
          Ce = { children: !0, contents: !0, next: !0, prev: !0 };
        le.fn.extend({
          has: function(e) {
            var t = le(e, this),
              n = t.length;
            return this.filter(function() {
              for (var e = 0; n > e; e++)
                if (le.contains(this, t[e])) return !0;
            });
          },
          closest: function(e, t) {
            for (
              var n,
                i = 0,
                r = this.length,
                o = [],
                s =
                  me.test(e) || "string" != typeof e
                    ? le(e, t || this.context)
                    : 0;
              r > i;
              i++
            )
              for (n = this[i]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (s
                    ? s.index(n) > -1
                    : 1 === n.nodeType && le.find.matchesSelector(n, e))
                ) {
                  o.push(n);
                  break;
                }
            return this.pushStack(o.length > 1 ? le.uniqueSort(o) : o);
          },
          index: function(e) {
            return e
              ? "string" == typeof e
                ? ie.call(le(e), this[0])
                : ie.call(this, e.jquery ? e[0] : e)
              : this[0] && this[0].parentNode
              ? this.first().prevAll().length
              : -1;
          },
          add: function(e, t) {
            return this.pushStack(
              le.uniqueSort(le.merge(this.get(), le(e, t)))
            );
          },
          addBack: function(e) {
            return this.add(
              null == e ? this.prevObject : this.prevObject.filter(e)
            );
          }
        }),
          le.each(
            {
              parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
              },
              parents: function(e) {
                return ve(e, "parentNode");
              },
              parentsUntil: function(e, t, n) {
                return ve(e, "parentNode", n);
              },
              next: function(e) {
                return c(e, "nextSibling");
              },
              prev: function(e) {
                return c(e, "previousSibling");
              },
              nextAll: function(e) {
                return ve(e, "nextSibling");
              },
              prevAll: function(e) {
                return ve(e, "previousSibling");
              },
              nextUntil: function(e, t, n) {
                return ve(e, "nextSibling", n);
              },
              prevUntil: function(e, t, n) {
                return ve(e, "previousSibling", n);
              },
              siblings: function(e) {
                return ge((e.parentNode || {}).firstChild, e);
              },
              children: function(e) {
                return ge(e.firstChild);
              },
              contents: function(e) {
                return e.contentDocument || le.merge([], e.childNodes);
              }
            },
            function(e, t) {
              le.fn[e] = function(n, i) {
                var r = le.map(this, t, n);
                return (
                  "Until" !== e.slice(-5) && (i = n),
                  i && "string" == typeof i && (r = le.filter(i, r)),
                  this.length > 1 &&
                    (Ce[e] || le.uniqueSort(r), Pe.test(e) && r.reverse()),
                  this.pushStack(r)
                );
              };
            }
          );
        var Te = /\S+/g;
        (le.Callbacks = function(e) {
          e = "string" == typeof e ? l(e) : le.extend({}, e);
          var t,
            n,
            i,
            r,
            o = [],
            s = [],
            a = -1,
            c = function() {
              for (r = e.once, i = t = !0; s.length; a = -1)
                for (n = s.shift(); ++a < o.length; )
                  o[a].apply(n[0], n[1]) === !1 &&
                    e.stopOnFalse &&
                    ((a = o.length), (n = !1));
              e.memory || (n = !1), (t = !1), r && (o = n ? [] : "");
            },
            u = {
              add: function() {
                return (
                  o &&
                    (n && !t && ((a = o.length - 1), s.push(n)),
                    (function i(t) {
                      le.each(t, function(t, n) {
                        le.isFunction(n)
                          ? (e.unique && u.has(n)) || o.push(n)
                          : n && n.length && "string" !== le.type(n) && i(n);
                      });
                    })(arguments),
                    n && !t && c()),
                  this
                );
              },
              remove: function() {
                return (
                  le.each(arguments, function(e, t) {
                    for (var n; (n = le.inArray(t, o, n)) > -1; )
                      o.splice(n, 1), a >= n && a--;
                  }),
                  this
                );
              },
              has: function(e) {
                return e ? le.inArray(e, o) > -1 : o.length > 0;
              },
              empty: function() {
                return o && (o = []), this;
              },
              disable: function() {
                return (r = s = []), (o = n = ""), this;
              },
              disabled: function() {
                return !o;
              },
              lock: function() {
                return (r = s = []), n || (o = n = ""), this;
              },
              locked: function() {
                return !!r;
              },
              fireWith: function(e, n) {
                return (
                  r ||
                    ((n = n || []),
                    (n = [e, n.slice ? n.slice() : n]),
                    s.push(n),
                    t || c()),
                  this
                );
              },
              fire: function() {
                return u.fireWith(this, arguments), this;
              },
              fired: function() {
                return !!i;
              }
            };
          return u;
        }),
          le.extend({
            Deferred: function(e) {
              var t = [
                  ["resolve", "done", le.Callbacks("once memory"), "resolved"],
                  ["reject", "fail", le.Callbacks("once memory"), "rejected"],
                  ["notify", "progress", le.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                  state: function() {
                    return n;
                  },
                  always: function() {
                    return r.done(arguments).fail(arguments), this;
                  },
                  then: function() {
                    var e = arguments;
                    return le
                      .Deferred(function(n) {
                        le.each(t, function(t, o) {
                          var s = le.isFunction(e[t]) && e[t];
                          r[o[1]](function() {
                            var e = s && s.apply(this, arguments);
                            e && le.isFunction(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[o[0] + "With"](
                                  this === i ? n.promise() : this,
                                  s ? [e] : arguments
                                );
                          });
                        }),
                          (e = null);
                      })
                      .promise();
                  },
                  promise: function(e) {
                    return null != e ? le.extend(e, i) : i;
                  }
                },
                r = {};
              return (
                (i.pipe = i.then),
                le.each(t, function(e, o) {
                  var s = o[2],
                    a = o[3];
                  (i[o[1]] = s.add),
                    a &&
                      s.add(
                        function() {
                          n = a;
                        },
                        t[1 ^ e][2].disable,
                        t[2][2].lock
                      ),
                    (r[o[0]] = function() {
                      return (
                        r[o[0] + "With"](this === r ? i : this, arguments), this
                      );
                    }),
                    (r[o[0] + "With"] = s.fireWith);
                }),
                i.promise(r),
                e && e.call(r, r),
                r
              );
            },
            when: function(e) {
              var t,
                n,
                i,
                r = 0,
                o = ee.call(arguments),
                s = o.length,
                a = 1 !== s || (e && le.isFunction(e.promise)) ? s : 0,
                c = 1 === a ? e : le.Deferred(),
                l = function(e, n, i) {
                  return function(r) {
                    (n[e] = this),
                      (i[e] = arguments.length > 1 ? ee.call(arguments) : r),
                      i === t ? c.notifyWith(n, i) : --a || c.resolveWith(n, i);
                  };
                };
              if (s > 1)
                for (
                  t = new Array(s), n = new Array(s), i = new Array(s);
                  s > r;
                  r++
                )
                  o[r] && le.isFunction(o[r].promise)
                    ? o[r]
                        .promise()
                        .progress(l(r, n, t))
                        .done(l(r, i, o))
                        .fail(c.reject)
                    : --a;
              return a || c.resolveWith(i, o), c.promise();
            }
          });
        var Se;
        (le.fn.ready = function(e) {
          return le.ready.promise().done(e), this;
        }),
          le.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
              e ? le.readyWait++ : le.ready(!0);
            },
            ready: function(e) {
              (e === !0 ? --le.readyWait : le.isReady) ||
                ((le.isReady = !0),
                (e !== !0 && --le.readyWait > 0) ||
                  (Se.resolveWith(Z, [le]),
                  le.fn.triggerHandler &&
                    (le(Z).triggerHandler("ready"), le(Z).off("ready"))));
            }
          }),
          (le.ready.promise = function(e) {
            return (
              Se ||
                ((Se = le.Deferred()),
                "complete" === Z.readyState ||
                ("loading" !== Z.readyState && !Z.documentElement.doScroll)
                  ? n.setTimeout(le.ready)
                  : (Z.addEventListener("DOMContentLoaded", u),
                    n.addEventListener("load", u))),
              Se.promise(e)
            );
          }),
          le.ready.promise();
        var Ae = function(e, t, n, i, r, o, s) {
            var a = 0,
              c = e.length,
              l = null == n;
            if ("object" === le.type(n)) {
              r = !0;
              for (a in n) Ae(e, t, a, n[a], !0, o, s);
            } else if (
              void 0 !== i &&
              ((r = !0),
              le.isFunction(i) || (s = !0),
              l &&
                (s
                  ? (t.call(e, i), (t = null))
                  : ((l = t),
                    (t = function(e, t, n) {
                      return l.call(le(e), n);
                    }))),
              t)
            )
              for (; c > a; a++)
                t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return r ? e : l ? t.call(e) : c ? t(e[0], n) : o;
          },
          _e = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
        (d.uid = 1),
          (d.prototype = {
            register: function(e, t) {
              var n = t || {};
              return (
                e.nodeType
                  ? (e[this.expando] = n)
                  : Object.defineProperty(e, this.expando, {
                      value: n,
                      writable: !0,
                      configurable: !0
                    }),
                e[this.expando]
              );
            },
            cache: function(e) {
              if (!_e(e)) return {};
              var t = e[this.expando];
              return (
                t ||
                  ((t = {}),
                  _e(e) &&
                    (e.nodeType
                      ? (e[this.expando] = t)
                      : Object.defineProperty(e, this.expando, {
                          value: t,
                          configurable: !0
                        }))),
                t
              );
            },
            set: function(e, t, n) {
              var i,
                r = this.cache(e);
              if ("string" == typeof t) r[t] = n;
              else for (i in t) r[i] = t[i];
              return r;
            },
            get: function(e, t) {
              return void 0 === t
                ? this.cache(e)
                : e[this.expando] && e[this.expando][t];
            },
            access: function(e, t, n) {
              var i;
              return void 0 === t || (t && "string" == typeof t && void 0 === n)
                ? ((i = this.get(e, t)),
                  void 0 !== i ? i : this.get(e, le.camelCase(t)))
                : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function(e, t) {
              var n,
                i,
                r,
                o = e[this.expando];
              if (void 0 !== o) {
                if (void 0 === t) this.register(e);
                else {
                  le.isArray(t)
                    ? (i = t.concat(t.map(le.camelCase)))
                    : ((r = le.camelCase(t)),
                      t in o
                        ? (i = [t, r])
                        : ((i = r), (i = i in o ? [i] : i.match(Te) || []))),
                    (n = i.length);
                  for (; n--; ) delete o[i[n]];
                }
                (void 0 === t || le.isEmptyObject(o)) &&
                  (e.nodeType
                    ? (e[this.expando] = void 0)
                    : delete e[this.expando]);
              }
            },
            hasData: function(e) {
              var t = e[this.expando];
              return void 0 !== t && !le.isEmptyObject(t);
            }
          });
        var Ne = new d(),
          Ee = new d(),
          Re = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          Le = /[A-Z]/g;
        le.extend({
          hasData: function(e) {
            return Ee.hasData(e) || Ne.hasData(e);
          },
          data: function(e, t, n) {
            return Ee.access(e, t, n);
          },
          removeData: function(e, t) {
            Ee.remove(e, t);
          },
          _data: function(e, t, n) {
            return Ne.access(e, t, n);
          },
          _removeData: function(e, t) {
            Ne.remove(e, t);
          }
        }),
          le.fn.extend({
            data: function(e, t) {
              var n,
                i,
                r,
                o = this[0],
                s = o && o.attributes;
              if (void 0 === e) {
                if (
                  this.length &&
                  ((r = Ee.get(o)),
                  1 === o.nodeType && !Ne.get(o, "hasDataAttrs"))
                ) {
                  for (n = s.length; n--; )
                    s[n] &&
                      ((i = s[n].name),
                      0 === i.indexOf("data-") &&
                        ((i = le.camelCase(i.slice(5))), p(o, i, r[i])));
                  Ne.set(o, "hasDataAttrs", !0);
                }
                return r;
              }
              return "object" == typeof e
                ? this.each(function() {
                    Ee.set(this, e);
                  })
                : Ae(
                    this,
                    function(t) {
                      var n, i;
                      if (o && void 0 === t) {
                        if (
                          ((n =
                            Ee.get(o, e) ||
                            Ee.get(o, e.replace(Le, "-$&").toLowerCase())),
                          void 0 !== n)
                        )
                          return n;
                        if (
                          ((i = le.camelCase(e)),
                          (n = Ee.get(o, i)),
                          void 0 !== n)
                        )
                          return n;
                        if (((n = p(o, i, void 0)), void 0 !== n)) return n;
                      } else
                        (i = le.camelCase(e)),
                          this.each(function() {
                            var n = Ee.get(this, i);
                            Ee.set(this, i, t),
                              e.indexOf("-") > -1 &&
                                void 0 !== n &&
                                Ee.set(this, e, t);
                          });
                    },
                    null,
                    t,
                    arguments.length > 1,
                    null,
                    !0
                  );
            },
            removeData: function(e) {
              return this.each(function() {
                Ee.remove(this, e);
              });
            }
          }),
          le.extend({
            queue: function(e, t, n) {
              var i;
              return e
                ? ((t = (t || "fx") + "queue"),
                  (i = Ne.get(e, t)),
                  n &&
                    (!i || le.isArray(n)
                      ? (i = Ne.access(e, t, le.makeArray(n)))
                      : i.push(n)),
                  i || [])
                : void 0;
            },
            dequeue: function(e, t) {
              t = t || "fx";
              var n = le.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = le._queueHooks(e, t),
                s = function() {
                  le.dequeue(e, t);
                };
              "inprogress" === r && ((r = n.shift()), i--),
                r &&
                  ("fx" === t && n.unshift("inprogress"),
                  delete o.stop,
                  r.call(e, s, o)),
                !i && o && o.empty.fire();
            },
            _queueHooks: function(e, t) {
              var n = t + "queueHooks";
              return (
                Ne.get(e, n) ||
                Ne.access(e, n, {
                  empty: le.Callbacks("once memory").add(function() {
                    Ne.remove(e, [t + "queue", n]);
                  })
                })
              );
            }
          }),
          le.fn.extend({
            queue: function(e, t) {
              var n = 2;
              return (
                "string" != typeof e && ((t = e), (e = "fx"), n--),
                arguments.length < n
                  ? le.queue(this[0], e)
                  : void 0 === t
                  ? this
                  : this.each(function() {
                      var n = le.queue(this, e, t);
                      le._queueHooks(this, e),
                        "fx" === e &&
                          "inprogress" !== n[0] &&
                          le.dequeue(this, e);
                    })
              );
            },
            dequeue: function(e) {
              return this.each(function() {
                le.dequeue(this, e);
              });
            },
            clearQueue: function(e) {
              return this.queue(e || "fx", []);
            },
            promise: function(e, t) {
              var n,
                i = 1,
                r = le.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                  --i || r.resolveWith(o, [o]);
                };
              for (
                "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
                s--;

              )
                (n = Ne.get(o[s], e + "queueHooks")),
                  n && n.empty && (i++, n.empty.add(a));
              return a(), r.promise(t);
            }
          });
        var De = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          je = new RegExp("^(?:([+-])=|)(" + De + ")([a-z%]*)$", "i"),
          qe = ["Top", "Right", "Bottom", "Left"],
          Ie = function(e, t) {
            return (
              (e = t || e),
              "none" === le.css(e, "display") ||
                !le.contains(e.ownerDocument, e)
            );
          },
          Me = /^(?:checkbox|radio)$/i,
          He = /<([\w:-]+)/,
          Oe = /^$|\/(?:java|ecma)script/i,
          Fe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
          };
        (Fe.optgroup = Fe.option),
          (Fe.tbody = Fe.tfoot = Fe.colgroup = Fe.caption = Fe.thead),
          (Fe.th = Fe.td);
        var Be = /<|&#?\w+;/;
        !(function() {
          var e = Z.createDocumentFragment(),
            t = e.appendChild(Z.createElement("div")),
            n = Z.createElement("input");
          n.setAttribute("type", "radio"),
            n.setAttribute("checked", "checked"),
            n.setAttribute("name", "t"),
            t.appendChild(n),
            (ae.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (t.innerHTML = "<textarea>x</textarea>"),
            (ae.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
        })();
        var We = /^key/,
          $e = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
          ze = /^([^.]*)(?:\.(.+)|)/;
        (le.event = {
          global: {},
          add: function(e, t, n, i, r) {
            var o,
              s,
              a,
              c,
              l,
              u,
              d,
              p,
              f,
              h,
              v,
              g = Ne.get(e);
            if (g)
              for (
                n.handler && ((o = n), (n = o.handler), (r = o.selector)),
                  n.guid || (n.guid = le.guid++),
                  (c = g.events) || (c = g.events = {}),
                  (s = g.handle) ||
                    (s = g.handle = function(t) {
                      return "undefined" != typeof le &&
                        le.event.triggered !== t.type
                        ? le.event.dispatch.apply(e, arguments)
                        : void 0;
                    }),
                  t = (t || "").match(Te) || [""],
                  l = t.length;
                l--;

              )
                (a = ze.exec(t[l]) || []),
                  (f = v = a[1]),
                  (h = (a[2] || "").split(".").sort()),
                  f &&
                    ((d = le.event.special[f] || {}),
                    (f = (r ? d.delegateType : d.bindType) || f),
                    (d = le.event.special[f] || {}),
                    (u = le.extend(
                      {
                        type: f,
                        origType: v,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && le.expr.match.needsContext.test(r),
                        namespace: h.join(".")
                      },
                      o
                    )),
                    (p = c[f]) ||
                      ((p = c[f] = []),
                      (p.delegateCount = 0),
                      (d.setup && d.setup.call(e, i, h, s) !== !1) ||
                        (e.addEventListener && e.addEventListener(f, s))),
                    d.add &&
                      (d.add.call(e, u),
                      u.handler.guid || (u.handler.guid = n.guid)),
                    r ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                    (le.event.global[f] = !0));
          },
          remove: function(e, t, n, i, r) {
            var o,
              s,
              a,
              c,
              l,
              u,
              d,
              p,
              f,
              h,
              v,
              g = Ne.hasData(e) && Ne.get(e);
            if (g && (c = g.events)) {
              for (t = (t || "").match(Te) || [""], l = t.length; l--; )
                if (
                  ((a = ze.exec(t[l]) || []),
                  (f = v = a[1]),
                  (h = (a[2] || "").split(".").sort()),
                  f)
                ) {
                  for (
                    d = le.event.special[f] || {},
                      f = (i ? d.delegateType : d.bindType) || f,
                      p = c[f] || [],
                      a =
                        a[2] &&
                        new RegExp(
                          "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                        ),
                      s = o = p.length;
                    o--;

                  )
                    (u = p[o]),
                      (!r && v !== u.origType) ||
                        (n && n.guid !== u.guid) ||
                        (a && !a.test(u.namespace)) ||
                        (i &&
                          i !== u.selector &&
                          ("**" !== i || !u.selector)) ||
                        (p.splice(o, 1),
                        u.selector && p.delegateCount--,
                        d.remove && d.remove.call(e, u));
                  s &&
                    !p.length &&
                    ((d.teardown && d.teardown.call(e, h, g.handle) !== !1) ||
                      le.removeEvent(e, f, g.handle),
                    delete c[f]);
                } else for (f in c) le.event.remove(e, f + t[l], n, i, !0);
              le.isEmptyObject(c) && Ne.remove(e, "handle events");
            }
          },
          dispatch: function(e) {
            e = le.event.fix(e);
            var t,
              n,
              i,
              r,
              o,
              s = [],
              a = ee.call(arguments),
              c = (Ne.get(this, "events") || {})[e.type] || [],
              l = le.event.special[e.type] || {};
            if (
              ((a[0] = e),
              (e.delegateTarget = this),
              !l.preDispatch || l.preDispatch.call(this, e) !== !1)
            ) {
              for (
                s = le.event.handlers.call(this, e, c), t = 0;
                (r = s[t++]) && !e.isPropagationStopped();

              )
                for (
                  e.currentTarget = r.elem, n = 0;
                  (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();

                )
                  (e.rnamespace && !e.rnamespace.test(o.namespace)) ||
                    ((e.handleObj = o),
                    (e.data = o.data),
                    (i = (
                      (le.event.special[o.origType] || {}).handle || o.handler
                    ).apply(r.elem, a)),
                    void 0 !== i &&
                      (e.result = i) === !1 &&
                      (e.preventDefault(), e.stopPropagation()));
              return l.postDispatch && l.postDispatch.call(this, e), e.result;
            }
          },
          handlers: function(e, t) {
            var n,
              i,
              r,
              o,
              s = [],
              a = t.delegateCount,
              c = e.target;
            if (
              a &&
              c.nodeType &&
              ("click" !== e.type || isNaN(e.button) || e.button < 1)
            )
              for (; c !== this; c = c.parentNode || this)
                if (
                  1 === c.nodeType &&
                  (c.disabled !== !0 || "click" !== e.type)
                ) {
                  for (i = [], n = 0; a > n; n++)
                    (o = t[n]),
                      (r = o.selector + " "),
                      void 0 === i[r] &&
                        (i[r] = o.needsContext
                          ? le(r, this).index(c) > -1
                          : le.find(r, this, null, [c]).length),
                      i[r] && i.push(o);
                  i.length && s.push({ elem: c, handlers: i });
                }
            return (
              a < t.length && s.push({ elem: this, handlers: t.slice(a) }), s
            );
          },
          props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
            " "
          ),
          fixHooks: {},
          keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
              return (
                null == e.which &&
                  (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
              );
            }
          },
          mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
              " "
            ),
            filter: function(e, t) {
              var n,
                i,
                r,
                o = t.button;
              return (
                null == e.pageX &&
                  null != t.clientX &&
                  ((n = e.target.ownerDocument || Z),
                  (i = n.documentElement),
                  (r = n.body),
                  (e.pageX =
                    t.clientX +
                    ((i && i.scrollLeft) || (r && r.scrollLeft) || 0) -
                    ((i && i.clientLeft) || (r && r.clientLeft) || 0)),
                  (e.pageY =
                    t.clientY +
                    ((i && i.scrollTop) || (r && r.scrollTop) || 0) -
                    ((i && i.clientTop) || (r && r.clientTop) || 0))),
                e.which ||
                  void 0 === o ||
                  (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                e
              );
            }
          },
          fix: function(e) {
            if (e[le.expando]) return e;
            var t,
              n,
              i,
              r = e.type,
              o = e,
              s = this.fixHooks[r];
            for (
              s ||
                (this.fixHooks[r] = s = $e.test(r)
                  ? this.mouseHooks
                  : We.test(r)
                  ? this.keyHooks
                  : {}),
                i = s.props ? this.props.concat(s.props) : this.props,
                e = new le.Event(o),
                t = i.length;
              t--;

            )
              (n = i[t]), (e[n] = o[n]);
            return (
              e.target || (e.target = Z),
              3 === e.target.nodeType && (e.target = e.target.parentNode),
              s.filter ? s.filter(e, o) : e
            );
          },
          special: {
            load: { noBubble: !0 },
            focus: {
              trigger: function() {
                return this !== x() && this.focus ? (this.focus(), !1) : void 0;
              },
              delegateType: "focusin"
            },
            blur: {
              trigger: function() {
                return this === x() && this.blur ? (this.blur(), !1) : void 0;
              },
              delegateType: "focusout"
            },
            click: {
              trigger: function() {
                return "checkbox" === this.type &&
                  this.click &&
                  le.nodeName(this, "input")
                  ? (this.click(), !1)
                  : void 0;
              },
              _default: function(e) {
                return le.nodeName(e.target, "a");
              }
            },
            beforeunload: {
              postDispatch: function(e) {
                void 0 !== e.result &&
                  e.originalEvent &&
                  (e.originalEvent.returnValue = e.result);
              }
            }
          }
        }),
          (le.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
          }),
          (le.Event = function(e, t) {
            return this instanceof le.Event
              ? (e && e.type
                  ? ((this.originalEvent = e),
                    (this.type = e.type),
                    (this.isDefaultPrevented =
                      e.defaultPrevented ||
                      (void 0 === e.defaultPrevented && e.returnValue === !1)
                        ? m
                        : y))
                  : (this.type = e),
                t && le.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || le.now()),
                void (this[le.expando] = !0))
              : new le.Event(e, t);
          }),
          (le.Event.prototype = {
            constructor: le.Event,
            isDefaultPrevented: y,
            isPropagationStopped: y,
            isImmediatePropagationStopped: y,
            isSimulated: !1,
            preventDefault: function() {
              var e = this.originalEvent;
              (this.isDefaultPrevented = m),
                e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function() {
              var e = this.originalEvent;
              (this.isPropagationStopped = m),
                e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function() {
              var e = this.originalEvent;
              (this.isImmediatePropagationStopped = m),
                e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation();
            }
          }),
          le.each(
            {
              mouseenter: "mouseover",
              mouseleave: "mouseout",
              pointerenter: "pointerover",
              pointerleave: "pointerout"
            },
            function(e, t) {
              le.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                  var n,
                    i = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                  return (
                    (r && (r === i || le.contains(i, r))) ||
                      ((e.type = o.origType),
                      (n = o.handler.apply(this, arguments)),
                      (e.type = t)),
                    n
                  );
                }
              };
            }
          ),
          le.fn.extend({
            on: function(e, t, n, i) {
              return b(this, e, t, n, i);
            },
            one: function(e, t, n, i) {
              return b(this, e, t, n, i, 1);
            },
            off: function(e, t, n) {
              var i, r;
              if (e && e.preventDefault && e.handleObj)
                return (
                  (i = e.handleObj),
                  le(e.delegateTarget).off(
                    i.namespace ? i.origType + "." + i.namespace : i.origType,
                    i.selector,
                    i.handler
                  ),
                  this
                );
              if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this;
              }
              return (
                (t !== !1 && "function" != typeof t) || ((n = t), (t = void 0)),
                n === !1 && (n = y),
                this.each(function() {
                  le.event.remove(this, e, n, t);
                })
              );
            }
          });
        var Ue = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
          Xe = /<script|<style|<link/i,
          Ye = /checked\s*(?:[^=]|=\s*.checked.)/i,
          Ge = /^true\/(.*)/,
          Ve = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        le.extend({
          htmlPrefilter: function(e) {
            return e.replace(Ue, "<$1></$2>");
          },
          clone: function(e, t, n) {
            var i,
              r,
              o,
              s,
              a = e.cloneNode(!0),
              c = le.contains(e.ownerDocument, e);
            if (
              !(
                ae.noCloneChecked ||
                (1 !== e.nodeType && 11 !== e.nodeType) ||
                le.isXMLDoc(e)
              )
            )
              for (s = h(a), o = h(e), i = 0, r = o.length; r > i; i++)
                T(o[i], s[i]);
            if (t)
              if (n)
                for (
                  o = o || h(e), s = s || h(a), i = 0, r = o.length;
                  r > i;
                  i++
                )
                  C(o[i], s[i]);
              else C(e, a);
            return (
              (s = h(a, "script")),
              s.length > 0 && v(s, !c && h(e, "script")),
              a
            );
          },
          cleanData: function(e) {
            for (
              var t, n, i, r = le.event.special, o = 0;
              void 0 !== (n = e[o]);
              o++
            )
              if (_e(n)) {
                if ((t = n[Ne.expando])) {
                  if (t.events)
                    for (i in t.events)
                      r[i]
                        ? le.event.remove(n, i)
                        : le.removeEvent(n, i, t.handle);
                  n[Ne.expando] = void 0;
                }
                n[Ee.expando] && (n[Ee.expando] = void 0);
              }
          }
        }),
          le.fn.extend({
            domManip: S,
            detach: function(e) {
              return A(this, e, !0);
            },
            remove: function(e) {
              return A(this, e);
            },
            text: function(e) {
              return Ae(
                this,
                function(e) {
                  return void 0 === e
                    ? le.text(this)
                    : this.empty().each(function() {
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
            append: function() {
              return S(this, arguments, function(e) {
                if (
                  1 === this.nodeType ||
                  11 === this.nodeType ||
                  9 === this.nodeType
                ) {
                  var t = k(this, e);
                  t.appendChild(e);
                }
              });
            },
            prepend: function() {
              return S(this, arguments, function(e) {
                if (
                  1 === this.nodeType ||
                  11 === this.nodeType ||
                  9 === this.nodeType
                ) {
                  var t = k(this, e);
                  t.insertBefore(e, t.firstChild);
                }
              });
            },
            before: function() {
              return S(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
              });
            },
            after: function() {
              return S(this, arguments, function(e) {
                this.parentNode &&
                  this.parentNode.insertBefore(e, this.nextSibling);
              });
            },
            empty: function() {
              for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType &&
                  (le.cleanData(h(e, !1)), (e.textContent = ""));
              return this;
            },
            clone: function(e, t) {
              return (
                (e = null == e ? !1 : e),
                (t = null == t ? e : t),
                this.map(function() {
                  return le.clone(this, e, t);
                })
              );
            },
            html: function(e) {
              return Ae(
                this,
                function(e) {
                  var t = this[0] || {},
                    n = 0,
                    i = this.length;
                  if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                  if (
                    "string" == typeof e &&
                    !Xe.test(e) &&
                    !Fe[(He.exec(e) || ["", ""])[1].toLowerCase()]
                  ) {
                    e = le.htmlPrefilter(e);
                    try {
                      for (; i > n; n++)
                        (t = this[n] || {}),
                          1 === t.nodeType &&
                            (le.cleanData(h(t, !1)), (t.innerHTML = e));
                      t = 0;
                    } catch (r) {}
                  }
                  t && this.empty().append(e);
                },
                null,
                e,
                arguments.length
              );
            },
            replaceWith: function() {
              var e = [];
              return S(
                this,
                arguments,
                function(t) {
                  var n = this.parentNode;
                  le.inArray(this, e) < 0 &&
                    (le.cleanData(h(this)), n && n.replaceChild(t, this));
                },
                e
              );
            }
          }),
          le.each(
            {
              appendTo: "append",
              prependTo: "prepend",
              insertBefore: "before",
              insertAfter: "after",
              replaceAll: "replaceWith"
            },
            function(e, t) {
              le.fn[e] = function(e) {
                for (
                  var n, i = [], r = le(e), o = r.length - 1, s = 0;
                  o >= s;
                  s++
                )
                  (n = s === o ? this : this.clone(!0)),
                    le(r[s])[t](n),
                    ne.apply(i, n.get());
                return this.pushStack(i);
              };
            }
          );
        var Ke,
          Je = { HTML: "block", BODY: "block" },
          Qe = /^margin/,
          Ze = new RegExp("^(" + De + ")(?!px)[a-z%]+$", "i"),
          et = function(e) {
            var t = e.ownerDocument.defaultView;
            return (t && t.opener) || (t = n), t.getComputedStyle(e);
          },
          tt = function(e, t, n, i) {
            var r,
              o,
              s = {};
            for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
            r = n.apply(e, i || []);
            for (o in t) e.style[o] = s[o];
            return r;
          },
          nt = Z.documentElement;
        !(function() {
          function e() {
            (a.style.cssText =
              "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
              (a.innerHTML = ""),
              nt.appendChild(s);
            var e = n.getComputedStyle(a);
            (t = "1%" !== e.top),
              (o = "2px" === e.marginLeft),
              (i = "4px" === e.width),
              (a.style.marginRight = "50%"),
              (r = "4px" === e.marginRight),
              nt.removeChild(s);
          }
          var t,
            i,
            r,
            o,
            s = Z.createElement("div"),
            a = Z.createElement("div");
          a.style &&
            ((a.style.backgroundClip = "content-box"),
            (a.cloneNode(!0).style.backgroundClip = ""),
            (ae.clearCloneStyle = "content-box" === a.style.backgroundClip),
            (s.style.cssText =
              "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
            s.appendChild(a),
            le.extend(ae, {
              pixelPosition: function() {
                return e(), t;
              },
              boxSizingReliable: function() {
                return null == i && e(), i;
              },
              pixelMarginRight: function() {
                return null == i && e(), r;
              },
              reliableMarginLeft: function() {
                return null == i && e(), o;
              },
              reliableMarginRight: function() {
                var e,
                  t = a.appendChild(Z.createElement("div"));
                return (
                  (t.style.cssText = a.style.cssText =
                    "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                  (t.style.marginRight = t.style.width = "0"),
                  (a.style.width = "1px"),
                  nt.appendChild(s),
                  (e = !parseFloat(n.getComputedStyle(t).marginRight)),
                  nt.removeChild(s),
                  a.removeChild(t),
                  e
                );
              }
            }));
        })();
        var it = /^(none|table(?!-c[ea]).+)/,
          rt = { position: "absolute", visibility: "hidden", display: "block" },
          ot = { letterSpacing: "0", fontWeight: "400" },
          st = ["Webkit", "O", "Moz", "ms"],
          at = Z.createElement("div").style;
        le.extend({
          cssHooks: {
            opacity: {
              get: function(e, t) {
                if (t) {
                  var n = E(e, "opacity");
                  return "" === n ? "1" : n;
                }
              }
            }
          },
          cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
          },
          cssProps: { float: "cssFloat" },
          style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var r,
                o,
                s,
                a = le.camelCase(t),
                c = e.style;
              return (
                (t = le.cssProps[a] || (le.cssProps[a] = L(a) || a)),
                (s = le.cssHooks[t] || le.cssHooks[a]),
                void 0 === n
                  ? s && "get" in s && void 0 !== (r = s.get(e, !1, i))
                    ? r
                    : c[t]
                  : ((o = typeof n),
                    "string" === o &&
                      (r = je.exec(n)) &&
                      r[1] &&
                      ((n = f(e, t, r)), (o = "number")),
                    null != n &&
                      n === n &&
                      ("number" === o &&
                        (n += (r && r[3]) || (le.cssNumber[a] ? "" : "px")),
                      ae.clearCloneStyle ||
                        "" !== n ||
                        0 !== t.indexOf("background") ||
                        (c[t] = "inherit"),
                      (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
                        (c[t] = n)),
                    void 0)
              );
            }
          },
          css: function(e, t, n, i) {
            var r,
              o,
              s,
              a = le.camelCase(t);
            return (
              (t = le.cssProps[a] || (le.cssProps[a] = L(a) || a)),
              (s = le.cssHooks[t] || le.cssHooks[a]),
              s && "get" in s && (r = s.get(e, !0, n)),
              void 0 === r && (r = E(e, t, i)),
              "normal" === r && t in ot && (r = ot[t]),
              "" === n || n
                ? ((o = parseFloat(r)), n === !0 || isFinite(o) ? o || 0 : r)
                : r
            );
          }
        }),
          le.each(["height", "width"], function(e, t) {
            le.cssHooks[t] = {
              get: function(e, n, i) {
                return n
                  ? it.test(le.css(e, "display")) && 0 === e.offsetWidth
                    ? tt(e, rt, function() {
                        return q(e, t, i);
                      })
                    : q(e, t, i)
                  : void 0;
              },
              set: function(e, n, i) {
                var r,
                  o = i && et(e),
                  s =
                    i &&
                    j(
                      e,
                      t,
                      i,
                      "border-box" === le.css(e, "boxSizing", !1, o),
                      o
                    );
                return (
                  s &&
                    (r = je.exec(n)) &&
                    "px" !== (r[3] || "px") &&
                    ((e.style[t] = n), (n = le.css(e, t))),
                  D(e, n, s)
                );
              }
            };
          }),
          (le.cssHooks.marginLeft = R(ae.reliableMarginLeft, function(e, t) {
            return t
              ? (parseFloat(E(e, "marginLeft")) ||
                  e.getBoundingClientRect().left -
                    tt(e, { marginLeft: 0 }, function() {
                      return e.getBoundingClientRect().left;
                    })) + "px"
              : void 0;
          })),
          (le.cssHooks.marginRight = R(ae.reliableMarginRight, function(e, t) {
            return t
              ? tt(e, { display: "inline-block" }, E, [e, "marginRight"])
              : void 0;
          })),
          le.each({ margin: "", padding: "", border: "Width" }, function(e, t) {
            (le.cssHooks[e + t] = {
              expand: function(n) {
                for (
                  var i = 0,
                    r = {},
                    o = "string" == typeof n ? n.split(" ") : [n];
                  4 > i;
                  i++
                )
                  r[e + qe[i] + t] = o[i] || o[i - 2] || o[0];
                return r;
              }
            }),
              Qe.test(e) || (le.cssHooks[e + t].set = D);
          }),
          le.fn.extend({
            css: function(e, t) {
              return Ae(
                this,
                function(e, t, n) {
                  var i,
                    r,
                    o = {},
                    s = 0;
                  if (le.isArray(t)) {
                    for (i = et(e), r = t.length; r > s; s++)
                      o[t[s]] = le.css(e, t[s], !1, i);
                    return o;
                  }
                  return void 0 !== n ? le.style(e, t, n) : le.css(e, t);
                },
                e,
                t,
                arguments.length > 1
              );
            },
            show: function() {
              return I(this, !0);
            },
            hide: function() {
              return I(this);
            },
            toggle: function(e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function() {
                    Ie(this) ? le(this).show() : le(this).hide();
                  });
            }
          }),
          (le.Tween = M),
          (M.prototype = {
            constructor: M,
            init: function(e, t, n, i, r, o) {
              (this.elem = e),
                (this.prop = n),
                (this.easing = r || le.easing._default),
                (this.options = t),
                (this.start = this.now = this.cur()),
                (this.end = i),
                (this.unit = o || (le.cssNumber[n] ? "" : "px"));
            },
            cur: function() {
              var e = M.propHooks[this.prop];
              return e && e.get ? e.get(this) : M.propHooks._default.get(this);
            },
            run: function(e) {
              var t,
                n = M.propHooks[this.prop];
              return (
                this.options.duration
                  ? (this.pos = t = le.easing[this.easing](
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
                n && n.set ? n.set(this) : M.propHooks._default.set(this),
                this
              );
            }
          }),
          (M.prototype.init.prototype = M.prototype),
          (M.propHooks = {
            _default: {
              get: function(e) {
                var t;
                return 1 !== e.elem.nodeType ||
                  (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                  ? e.elem[e.prop]
                  : ((t = le.css(e.elem, e.prop, "")),
                    t && "auto" !== t ? t : 0);
              },
              set: function(e) {
                le.fx.step[e.prop]
                  ? le.fx.step[e.prop](e)
                  : 1 !== e.elem.nodeType ||
                    (null == e.elem.style[le.cssProps[e.prop]] &&
                      !le.cssHooks[e.prop])
                  ? (e.elem[e.prop] = e.now)
                  : le.style(e.elem, e.prop, e.now + e.unit);
              }
            }
          }),
          (M.propHooks.scrollTop = M.propHooks.scrollLeft = {
            set: function(e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            }
          }),
          (le.easing = {
            linear: function(e) {
              return e;
            },
            swing: function(e) {
              return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing"
          }),
          (le.fx = M.prototype.init),
          (le.fx.step = {});
        var ct,
          lt,
          ut = /^(?:toggle|show|hide)$/,
          dt = /queueHooks$/;
        (le.Animation = le.extend($, {
          tweeners: {
            "*": [
              function(e, t) {
                var n = this.createTween(e, t);
                return f(n.elem, e, je.exec(t), n), n;
              }
            ]
          },
          tweener: function(e, t) {
            le.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.match(Te));
            for (var n, i = 0, r = e.length; r > i; i++)
              (n = e[i]),
                ($.tweeners[n] = $.tweeners[n] || []),
                $.tweeners[n].unshift(t);
          },
          prefilters: [B],
          prefilter: function(e, t) {
            t ? $.prefilters.unshift(e) : $.prefilters.push(e);
          }
        })),
          (le.speed = function(e, t, n) {
            var i =
              e && "object" == typeof e
                ? le.extend({}, e)
                : {
                    complete: n || (!n && t) || (le.isFunction(e) && e),
                    duration: e,
                    easing: (n && t) || (t && !le.isFunction(t) && t)
                  };
            return (
              (i.duration = le.fx.off
                ? 0
                : "number" == typeof i.duration
                ? i.duration
                : i.duration in le.fx.speeds
                ? le.fx.speeds[i.duration]
                : le.fx.speeds._default),
              (null != i.queue && i.queue !== !0) || (i.queue = "fx"),
              (i.old = i.complete),
              (i.complete = function() {
                le.isFunction(i.old) && i.old.call(this),
                  i.queue && le.dequeue(this, i.queue);
              }),
              i
            );
          }),
          le.fn.extend({
            fadeTo: function(e, t, n, i) {
              return this.filter(Ie)
                .css("opacity", 0)
                .show()
                .end()
                .animate({ opacity: t }, e, n, i);
            },
            animate: function(e, t, n, i) {
              var r = le.isEmptyObject(e),
                o = le.speed(t, n, i),
                s = function() {
                  var t = $(this, le.extend({}, e), o);
                  (r || Ne.get(this, "finish")) && t.stop(!0);
                };
              return (
                (s.finish = s),
                r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
              );
            },
            stop: function(e, t, n) {
              var i = function(e) {
                var t = e.stop;
                delete e.stop, t(n);
              };
              return (
                "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                t && e !== !1 && this.queue(e || "fx", []),
                this.each(function() {
                  var t = !0,
                    r = null != e && e + "queueHooks",
                    o = le.timers,
                    s = Ne.get(this);
                  if (r) s[r] && s[r].stop && i(s[r]);
                  else for (r in s) s[r] && s[r].stop && dt.test(r) && i(s[r]);
                  for (r = o.length; r--; )
                    o[r].elem !== this ||
                      (null != e && o[r].queue !== e) ||
                      (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
                  (!t && n) || le.dequeue(this, e);
                })
              );
            },
            finish: function(e) {
              return (
                e !== !1 && (e = e || "fx"),
                this.each(function() {
                  var t,
                    n = Ne.get(this),
                    i = n[e + "queue"],
                    r = n[e + "queueHooks"],
                    o = le.timers,
                    s = i ? i.length : 0;
                  for (
                    n.finish = !0,
                      le.queue(this, e, []),
                      r && r.stop && r.stop.call(this, !0),
                      t = o.length;
                    t--;

                  )
                    o[t].elem === this &&
                      o[t].queue === e &&
                      (o[t].anim.stop(!0), o.splice(t, 1));
                  for (t = 0; s > t; t++)
                    i[t] && i[t].finish && i[t].finish.call(this);
                  delete n.finish;
                })
              );
            }
          }),
          le.each(["toggle", "show", "hide"], function(e, t) {
            var n = le.fn[t];
            le.fn[t] = function(e, i, r) {
              return null == e || "boolean" == typeof e
                ? n.apply(this, arguments)
                : this.animate(O(t, !0), e, i, r);
            };
          }),
          le.each(
            {
              slideDown: O("show"),
              slideUp: O("hide"),
              slideToggle: O("toggle"),
              fadeIn: { opacity: "show" },
              fadeOut: { opacity: "hide" },
              fadeToggle: { opacity: "toggle" }
            },
            function(e, t) {
              le.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i);
              };
            }
          ),
          (le.timers = []),
          (le.fx.tick = function() {
            var e,
              t = 0,
              n = le.timers;
            for (ct = le.now(); t < n.length; t++)
              (e = n[t]), e() || n[t] !== e || n.splice(t--, 1);
            n.length || le.fx.stop(), (ct = void 0);
          }),
          (le.fx.timer = function(e) {
            le.timers.push(e), e() ? le.fx.start() : le.timers.pop();
          }),
          (le.fx.interval = 13),
          (le.fx.start = function() {
            lt || (lt = n.setInterval(le.fx.tick, le.fx.interval));
          }),
          (le.fx.stop = function() {
            n.clearInterval(lt), (lt = null);
          }),
          (le.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
          (le.fn.delay = function(e, t) {
            return (
              (e = le.fx ? le.fx.speeds[e] || e : e),
              (t = t || "fx"),
              this.queue(t, function(t, i) {
                var r = n.setTimeout(t, e);
                i.stop = function() {
                  n.clearTimeout(r);
                };
              })
            );
          }),
          (function() {
            var e = Z.createElement("input"),
              t = Z.createElement("select"),
              n = t.appendChild(Z.createElement("option"));
            (e.type = "checkbox"),
              (ae.checkOn = "" !== e.value),
              (ae.optSelected = n.selected),
              (t.disabled = !0),
              (ae.optDisabled = !n.disabled),
              (e = Z.createElement("input")),
              (e.value = "t"),
              (e.type = "radio"),
              (ae.radioValue = "t" === e.value);
          })();
        var pt,
          ft = le.expr.attrHandle;
        le.fn.extend({
          attr: function(e, t) {
            return Ae(this, le.attr, e, t, arguments.length > 1);
          },
          removeAttr: function(e) {
            return this.each(function() {
              le.removeAttr(this, e);
            });
          }
        }),
          le.extend({
            attr: function(e, t, n) {
              var i,
                r,
                o = e.nodeType;
              if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute
                  ? le.prop(e, t, n)
                  : ((1 === o && le.isXMLDoc(e)) ||
                      ((t = t.toLowerCase()),
                      (r =
                        le.attrHooks[t] ||
                        (le.expr.match.bool.test(t) ? pt : void 0))),
                    void 0 !== n
                      ? null === n
                        ? void le.removeAttr(e, t)
                        : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                        ? i
                        : (e.setAttribute(t, n + ""), n)
                      : r && "get" in r && null !== (i = r.get(e, t))
                      ? i
                      : ((i = le.find.attr(e, t)), null == i ? void 0 : i));
            },
            attrHooks: {
              type: {
                set: function(e, t) {
                  if (
                    !ae.radioValue &&
                    "radio" === t &&
                    le.nodeName(e, "input")
                  ) {
                    var n = e.value;
                    return e.setAttribute("type", t), n && (e.value = n), t;
                  }
                }
              }
            },
            removeAttr: function(e, t) {
              var n,
                i,
                r = 0,
                o = t && t.match(Te);
              if (o && 1 === e.nodeType)
                for (; (n = o[r++]); )
                  (i = le.propFix[n] || n),
                    le.expr.match.bool.test(n) && (e[i] = !1),
                    e.removeAttribute(n);
            }
          }),
          (pt = {
            set: function(e, t, n) {
              return t === !1 ? le.removeAttr(e, n) : e.setAttribute(n, n), n;
            }
          }),
          le.each(le.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = ft[t] || le.find.attr;
            ft[t] = function(e, t, i) {
              var r, o;
              return (
                i ||
                  ((o = ft[t]),
                  (ft[t] = r),
                  (r = null != n(e, t, i) ? t.toLowerCase() : null),
                  (ft[t] = o)),
                r
              );
            };
          });
        var ht = /^(?:input|select|textarea|button)$/i,
          vt = /^(?:a|area)$/i;
        le.fn.extend({
          prop: function(e, t) {
            return Ae(this, le.prop, e, t, arguments.length > 1);
          },
          removeProp: function(e) {
            return this.each(function() {
              delete this[le.propFix[e] || e];
            });
          }
        }),
          le.extend({
            prop: function(e, t, n) {
              var i,
                r,
                o = e.nodeType;
              if (3 !== o && 8 !== o && 2 !== o)
                return (
                  (1 === o && le.isXMLDoc(e)) ||
                    ((t = le.propFix[t] || t), (r = le.propHooks[t])),
                  void 0 !== n
                    ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                      ? i
                      : (e[t] = n)
                    : r && "get" in r && null !== (i = r.get(e, t))
                    ? i
                    : e[t]
                );
            },
            propHooks: {
              tabIndex: {
                get: function(e) {
                  var t = le.find.attr(e, "tabindex");
                  return t
                    ? parseInt(t, 10)
                    : ht.test(e.nodeName) || (vt.test(e.nodeName) && e.href)
                    ? 0
                    : -1;
                }
              }
            },
            propFix: { for: "htmlFor", class: "className" }
          }),
          ae.optSelected ||
            (le.propHooks.selected = {
              get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null;
              },
              set: function(e) {
                var t = e.parentNode;
                t &&
                  (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
              }
            }),
          le.each(
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
              "contentEditable"
            ],
            function() {
              le.propFix[this.toLowerCase()] = this;
            }
          );
        var gt = /[\t\r\n\f]/g;
        le.fn.extend({
          addClass: function(e) {
            var t,
              n,
              i,
              r,
              o,
              s,
              a,
              c = 0;
            if (le.isFunction(e))
              return this.each(function(t) {
                le(this).addClass(e.call(this, t, z(this)));
              });
            if ("string" == typeof e && e)
              for (t = e.match(Te) || []; (n = this[c++]); )
                if (
                  ((r = z(n)),
                  (i = 1 === n.nodeType && (" " + r + " ").replace(gt, " ")))
                ) {
                  for (s = 0; (o = t[s++]); )
                    i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                  (a = le.trim(i)), r !== a && n.setAttribute("class", a);
                }
            return this;
          },
          removeClass: function(e) {
            var t,
              n,
              i,
              r,
              o,
              s,
              a,
              c = 0;
            if (le.isFunction(e))
              return this.each(function(t) {
                le(this).removeClass(e.call(this, t, z(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
              for (t = e.match(Te) || []; (n = this[c++]); )
                if (
                  ((r = z(n)),
                  (i = 1 === n.nodeType && (" " + r + " ").replace(gt, " ")))
                ) {
                  for (s = 0; (o = t[s++]); )
                    for (; i.indexOf(" " + o + " ") > -1; )
                      i = i.replace(" " + o + " ", " ");
                  (a = le.trim(i)), r !== a && n.setAttribute("class", a);
                }
            return this;
          },
          toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : le.isFunction(e)
              ? this.each(function(n) {
                  le(this).toggleClass(e.call(this, n, z(this), t), t);
                })
              : this.each(function() {
                  var t, i, r, o;
                  if ("string" === n)
                    for (
                      i = 0, r = le(this), o = e.match(Te) || [];
                      (t = o[i++]);

                    )
                      r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                  else
                    (void 0 !== e && "boolean" !== n) ||
                      ((t = z(this)),
                      t && Ne.set(this, "__className__", t),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          t || e === !1
                            ? ""
                            : Ne.get(this, "__className__") || ""
                        ));
                });
          },
          hasClass: function(e) {
            var t,
              n,
              i = 0;
            for (t = " " + e + " "; (n = this[i++]); )
              if (
                1 === n.nodeType &&
                (" " + z(n) + " ").replace(gt, " ").indexOf(t) > -1
              )
                return !0;
            return !1;
          }
        });
        var mt = /\r/g,
          yt = /[\x20\t\r\n\f]+/g;
        le.fn.extend({
          val: function(e) {
            var t,
              n,
              i,
              r = this[0];
            {
              if (arguments.length)
                return (
                  (i = le.isFunction(e)),
                  this.each(function(n) {
                    var r;
                    1 === this.nodeType &&
                      ((r = i ? e.call(this, n, le(this).val()) : e),
                      null == r
                        ? (r = "")
                        : "number" == typeof r
                        ? (r += "")
                        : le.isArray(r) &&
                          (r = le.map(r, function(e) {
                            return null == e ? "" : e + "";
                          })),
                      (t =
                        le.valHooks[this.type] ||
                        le.valHooks[this.nodeName.toLowerCase()]),
                      (t && "set" in t && void 0 !== t.set(this, r, "value")) ||
                        (this.value = r));
                  })
                );
              if (r)
                return (
                  (t =
                    le.valHooks[r.type] ||
                    le.valHooks[r.nodeName.toLowerCase()]),
                  t && "get" in t && void 0 !== (n = t.get(r, "value"))
                    ? n
                    : ((n = r.value),
                      "string" == typeof n
                        ? n.replace(mt, "")
                        : null == n
                        ? ""
                        : n)
                );
            }
          }
        }),
          le.extend({
            valHooks: {
              option: {
                get: function(e) {
                  var t = le.find.attr(e, "value");
                  return null != t ? t : le.trim(le.text(e)).replace(yt, " ");
                }
              },
              select: {
                get: function(e) {
                  for (
                    var t,
                      n,
                      i = e.options,
                      r = e.selectedIndex,
                      o = "select-one" === e.type || 0 > r,
                      s = o ? null : [],
                      a = o ? r + 1 : i.length,
                      c = 0 > r ? a : o ? r : 0;
                    a > c;
                    c++
                  )
                    if (
                      ((n = i[c]),
                      (n.selected || c === r) &&
                        (ae.optDisabled
                          ? !n.disabled
                          : null === n.getAttribute("disabled")) &&
                        (!n.parentNode.disabled ||
                          !le.nodeName(n.parentNode, "optgroup")))
                    ) {
                      if (((t = le(n).val()), o)) return t;
                      s.push(t);
                    }
                  return s;
                },
                set: function(e, t) {
                  for (
                    var n, i, r = e.options, o = le.makeArray(t), s = r.length;
                    s--;

                  )
                    (i = r[s]),
                      (i.selected =
                        le.inArray(le.valHooks.option.get(i), o) > -1) &&
                        (n = !0);
                  return n || (e.selectedIndex = -1), o;
                }
              }
            }
          }),
          le.each(["radio", "checkbox"], function() {
            (le.valHooks[this] = {
              set: function(e, t) {
                return le.isArray(t)
                  ? (e.checked = le.inArray(le(e).val(), t) > -1)
                  : void 0;
              }
            }),
              ae.checkOn ||
                (le.valHooks[this].get = function(e) {
                  return null === e.getAttribute("value") ? "on" : e.value;
                });
          });
        var xt = /^(?:focusinfocus|focusoutblur)$/;
        le.extend(le.event, {
          trigger: function(e, t, i, r) {
            var o,
              s,
              a,
              c,
              l,
              u,
              d,
              p = [i || Z],
              f = se.call(e, "type") ? e.type : e,
              h = se.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
              ((s = a = i = i || Z),
              3 !== i.nodeType &&
                8 !== i.nodeType &&
                !xt.test(f + le.event.triggered) &&
                (f.indexOf(".") > -1 &&
                  ((h = f.split(".")), (f = h.shift()), h.sort()),
                (l = f.indexOf(":") < 0 && "on" + f),
                (e = e[le.expando]
                  ? e
                  : new le.Event(f, "object" == typeof e && e)),
                (e.isTrigger = r ? 2 : 3),
                (e.namespace = h.join(".")),
                (e.rnamespace = e.namespace
                  ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
                  : null),
                (e.result = void 0),
                e.target || (e.target = i),
                (t = null == t ? [e] : le.makeArray(t, [e])),
                (d = le.event.special[f] || {}),
                r || !d.trigger || d.trigger.apply(i, t) !== !1))
            ) {
              if (!r && !d.noBubble && !le.isWindow(i)) {
                for (
                  c = d.delegateType || f, xt.test(c + f) || (s = s.parentNode);
                  s;
                  s = s.parentNode
                )
                  p.push(s), (a = s);
                a === (i.ownerDocument || Z) &&
                  p.push(a.defaultView || a.parentWindow || n);
              }
              for (o = 0; (s = p[o++]) && !e.isPropagationStopped(); )
                (e.type = o > 1 ? c : d.bindType || f),
                  (u =
                    (Ne.get(s, "events") || {})[e.type] && Ne.get(s, "handle")),
                  u && u.apply(s, t),
                  (u = l && s[l]),
                  u &&
                    u.apply &&
                    _e(s) &&
                    ((e.result = u.apply(s, t)),
                    e.result === !1 && e.preventDefault());
              return (
                (e.type = f),
                r ||
                  e.isDefaultPrevented() ||
                  (d._default && d._default.apply(p.pop(), t) !== !1) ||
                  !_e(i) ||
                  (l &&
                    le.isFunction(i[f]) &&
                    !le.isWindow(i) &&
                    ((a = i[l]),
                    a && (i[l] = null),
                    (le.event.triggered = f),
                    i[f](),
                    (le.event.triggered = void 0),
                    a && (i[l] = a))),
                e.result
              );
            }
          },
          simulate: function(e, t, n) {
            var i = le.extend(new le.Event(), n, { type: e, isSimulated: !0 });
            le.event.trigger(i, null, t);
          }
        }),
          le.fn.extend({
            trigger: function(e, t) {
              return this.each(function() {
                le.event.trigger(e, t, this);
              });
            },
            triggerHandler: function(e, t) {
              var n = this[0];
              return n ? le.event.trigger(e, t, n, !0) : void 0;
            }
          }),
          le.each(
            "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
              " "
            ),
            function(e, t) {
              le.fn[t] = function(e, n) {
                return arguments.length > 0
                  ? this.on(t, null, e, n)
                  : this.trigger(t);
              };
            }
          ),
          le.fn.extend({
            hover: function(e, t) {
              return this.mouseenter(e).mouseleave(t || e);
            }
          }),
          (ae.focusin = "onfocusin" in n),
          ae.focusin ||
            le.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
              var n = function(e) {
                le.event.simulate(t, e.target, le.event.fix(e));
              };
              le.event.special[t] = {
                setup: function() {
                  var i = this.ownerDocument || this,
                    r = Ne.access(i, t);
                  r || i.addEventListener(e, n, !0),
                    Ne.access(i, t, (r || 0) + 1);
                },
                teardown: function() {
                  var i = this.ownerDocument || this,
                    r = Ne.access(i, t) - 1;
                  r
                    ? Ne.access(i, t, r)
                    : (i.removeEventListener(e, n, !0), Ne.remove(i, t));
                }
              };
            });
        var bt = n.location,
          kt = le.now(),
          wt = /\?/;
        (le.parseJSON = function(e) {
          return JSON.parse(e + "");
        }),
          (le.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
              t = new n.DOMParser().parseFromString(e, "text/xml");
            } catch (i) {
              t = void 0;
            }
            return (
              (t && !t.getElementsByTagName("parsererror").length) ||
                le.error("Invalid XML: " + e),
              t
            );
          });
        var Pt = /#.*$/,
          Ct = /([?&])_=[^&]*/,
          Tt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          St = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
          At = /^(?:GET|HEAD)$/,
          _t = /^\/\//,
          Nt = {},
          Et = {},
          Rt = "*/".concat("*"),
          Lt = Z.createElement("a");
        (Lt.href = bt.href),
          le.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
              url: bt.href,
              type: "GET",
              isLocal: St.test(bt.protocol),
              global: !0,
              processData: !0,
              async: !0,
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              accepts: {
                "*": Rt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
              },
              contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
              responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
              },
              converters: {
                "* text": String,
                "text html": !0,
                "text json": le.parseJSON,
                "text xml": le.parseXML
              },
              flatOptions: { url: !0, context: !0 }
            },
            ajaxSetup: function(e, t) {
              return t ? Y(Y(e, le.ajaxSettings), t) : Y(le.ajaxSettings, e);
            },
            ajaxPrefilter: U(Nt),
            ajaxTransport: U(Et),
            ajax: function(e, t) {
              function i(e, t, i, a) {
                var l,
                  d,
                  y,
                  x,
                  k,
                  P = t;
                2 !== b &&
                  ((b = 2),
                  c && n.clearTimeout(c),
                  (r = void 0),
                  (s = a || ""),
                  (w.readyState = e > 0 ? 4 : 0),
                  (l = (e >= 200 && 300 > e) || 304 === e),
                  i && (x = G(p, w, i)),
                  (x = V(p, x, w, l)),
                  l
                    ? (p.ifModified &&
                        ((k = w.getResponseHeader("Last-Modified")),
                        k && (le.lastModified[o] = k),
                        (k = w.getResponseHeader("etag")),
                        k && (le.etag[o] = k)),
                      204 === e || "HEAD" === p.type
                        ? (P = "nocontent")
                        : 304 === e
                        ? (P = "notmodified")
                        : ((P = x.state),
                          (d = x.data),
                          (y = x.error),
                          (l = !y)))
                    : ((y = P), (!e && P) || ((P = "error"), 0 > e && (e = 0))),
                  (w.status = e),
                  (w.statusText = (t || P) + ""),
                  l ? v.resolveWith(f, [d, P, w]) : v.rejectWith(f, [w, P, y]),
                  w.statusCode(m),
                  (m = void 0),
                  u &&
                    h.trigger(l ? "ajaxSuccess" : "ajaxError", [
                      w,
                      p,
                      l ? d : y
                    ]),
                  g.fireWith(f, [w, P]),
                  u &&
                    (h.trigger("ajaxComplete", [w, p]),
                    --le.active || le.event.trigger("ajaxStop")));
              }
              "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
              var r,
                o,
                s,
                a,
                c,
                l,
                u,
                d,
                p = le.ajaxSetup({}, t),
                f = p.context || p,
                h = p.context && (f.nodeType || f.jquery) ? le(f) : le.event,
                v = le.Deferred(),
                g = le.Callbacks("once memory"),
                m = p.statusCode || {},
                y = {},
                x = {},
                b = 0,
                k = "canceled",
                w = {
                  readyState: 0,
                  getResponseHeader: function(e) {
                    var t;
                    if (2 === b) {
                      if (!a)
                        for (a = {}; (t = Tt.exec(s)); )
                          a[t[1].toLowerCase()] = t[2];
                      t = a[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                  },
                  getAllResponseHeaders: function() {
                    return 2 === b ? s : null;
                  },
                  setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return b || ((e = x[n] = x[n] || e), (y[e] = t)), this;
                  },
                  overrideMimeType: function(e) {
                    return b || (p.mimeType = e), this;
                  },
                  statusCode: function(e) {
                    var t;
                    if (e)
                      if (2 > b) for (t in e) m[t] = [m[t], e[t]];
                      else w.always(e[w.status]);
                    return this;
                  },
                  abort: function(e) {
                    var t = e || k;
                    return r && r.abort(t), i(0, t), this;
                  }
                };
              if (
                ((v.promise(w).complete = g.add),
                (w.success = w.done),
                (w.error = w.fail),
                (p.url = ((e || p.url || bt.href) + "")
                  .replace(Pt, "")
                  .replace(_t, bt.protocol + "//")),
                (p.type = t.method || t.type || p.method || p.type),
                (p.dataTypes = le
                  .trim(p.dataType || "*")
                  .toLowerCase()
                  .match(Te) || [""]),
                null == p.crossDomain)
              ) {
                l = Z.createElement("a");
                try {
                  (l.href = p.url),
                    (l.href = l.href),
                    (p.crossDomain =
                      Lt.protocol + "//" + Lt.host !=
                      l.protocol + "//" + l.host);
                } catch (P) {
                  p.crossDomain = !0;
                }
              }
              if (
                (p.data &&
                  p.processData &&
                  "string" != typeof p.data &&
                  (p.data = le.param(p.data, p.traditional)),
                X(Nt, p, t, w),
                2 === b)
              )
                return w;
              (u = le.event && p.global),
                u && 0 === le.active++ && le.event.trigger("ajaxStart"),
                (p.type = p.type.toUpperCase()),
                (p.hasContent = !At.test(p.type)),
                (o = p.url),
                p.hasContent ||
                  (p.data &&
                    ((o = p.url += (wt.test(o) ? "&" : "?") + p.data),
                    delete p.data),
                  p.cache === !1 &&
                    (p.url = Ct.test(o)
                      ? o.replace(Ct, "$1_=" + kt++)
                      : o + (wt.test(o) ? "&" : "?") + "_=" + kt++)),
                p.ifModified &&
                  (le.lastModified[o] &&
                    w.setRequestHeader("If-Modified-Since", le.lastModified[o]),
                  le.etag[o] &&
                    w.setRequestHeader("If-None-Match", le.etag[o])),
                ((p.data && p.hasContent && p.contentType !== !1) ||
                  t.contentType) &&
                  w.setRequestHeader("Content-Type", p.contentType),
                w.setRequestHeader(
                  "Accept",
                  p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                    ? p.accepts[p.dataTypes[0]] +
                        ("*" !== p.dataTypes[0] ? ", " + Rt + "; q=0.01" : "")
                    : p.accepts["*"]
                );
              for (d in p.headers) w.setRequestHeader(d, p.headers[d]);
              if (
                p.beforeSend &&
                (p.beforeSend.call(f, w, p) === !1 || 2 === b)
              )
                return w.abort();
              k = "abort";
              for (d in { success: 1, error: 1, complete: 1 }) w[d](p[d]);
              if ((r = X(Et, p, t, w))) {
                if (
                  ((w.readyState = 1),
                  u && h.trigger("ajaxSend", [w, p]),
                  2 === b)
                )
                  return w;
                p.async &&
                  p.timeout > 0 &&
                  (c = n.setTimeout(function() {
                    w.abort("timeout");
                  }, p.timeout));
                try {
                  (b = 1), r.send(y, i);
                } catch (P) {
                  if (!(2 > b)) throw P;
                  i(-1, P);
                }
              } else i(-1, "No Transport");
              return w;
            },
            getJSON: function(e, t, n) {
              return le.get(e, t, n, "json");
            },
            getScript: function(e, t) {
              return le.get(e, void 0, t, "script");
            }
          }),
          le.each(["get", "post"], function(e, t) {
            le[t] = function(e, n, i, r) {
              return (
                le.isFunction(n) && ((r = r || i), (i = n), (n = void 0)),
                le.ajax(
                  le.extend(
                    { url: e, type: t, dataType: r, data: n, success: i },
                    le.isPlainObject(e) && e
                  )
                )
              );
            };
          }),
          (le._evalUrl = function(e) {
            return le.ajax({
              url: e,
              type: "GET",
              dataType: "script",
              async: !1,
              global: !1,
              throws: !0
            });
          }),
          le.fn.extend({
            wrapAll: function(e) {
              var t;
              return le.isFunction(e)
                ? this.each(function(t) {
                    le(this).wrapAll(e.call(this, t));
                  })
                : (this[0] &&
                    ((t = le(e, this[0].ownerDocument)
                      .eq(0)
                      .clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function() {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this);
            },
            wrapInner: function(e) {
              return le.isFunction(e)
                ? this.each(function(t) {
                    le(this).wrapInner(e.call(this, t));
                  })
                : this.each(function() {
                    var t = le(this),
                      n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e);
                  });
            },
            wrap: function(e) {
              var t = le.isFunction(e);
              return this.each(function(n) {
                le(this).wrapAll(t ? e.call(this, n) : e);
              });
            },
            unwrap: function() {
              return this.parent()
                .each(function() {
                  le.nodeName(this, "body") ||
                    le(this).replaceWith(this.childNodes);
                })
                .end();
            }
          }),
          (le.expr.filters.hidden = function(e) {
            return !le.expr.filters.visible(e);
          }),
          (le.expr.filters.visible = function(e) {
            return (
              e.offsetWidth > 0 ||
              e.offsetHeight > 0 ||
              e.getClientRects().length > 0
            );
          });
        var Dt = /%20/g,
          jt = /\[\]$/,
          qt = /\r?\n/g,
          It = /^(?:submit|button|image|reset|file)$/i,
          Mt = /^(?:input|select|textarea|keygen)/i;
        (le.param = function(e, t) {
          var n,
            i = [],
            r = function(e, t) {
              (t = le.isFunction(t) ? t() : null == t ? "" : t),
                (i[i.length] =
                  encodeURIComponent(e) + "=" + encodeURIComponent(t));
            };
          if (
            (void 0 === t &&
              (t = le.ajaxSettings && le.ajaxSettings.traditional),
            le.isArray(e) || (e.jquery && !le.isPlainObject(e)))
          )
            le.each(e, function() {
              r(this.name, this.value);
            });
          else for (n in e) K(n, e[n], t, r);
          return i.join("&").replace(Dt, "+");
        }),
          le.fn.extend({
            serialize: function() {
              return le.param(this.serializeArray());
            },
            serializeArray: function() {
              return this.map(function() {
                var e = le.prop(this, "elements");
                return e ? le.makeArray(e) : this;
              })
                .filter(function() {
                  var e = this.type;
                  return (
                    this.name &&
                    !le(this).is(":disabled") &&
                    Mt.test(this.nodeName) &&
                    !It.test(e) &&
                    (this.checked || !Me.test(e))
                  );
                })
                .map(function(e, t) {
                  var n = le(this).val();
                  return null == n
                    ? null
                    : le.isArray(n)
                    ? le.map(n, function(e) {
                        return { name: t.name, value: e.replace(qt, "\r\n") };
                      })
                    : { name: t.name, value: n.replace(qt, "\r\n") };
                })
                .get();
            }
          }),
          (le.ajaxSettings.xhr = function() {
            try {
              return new n.XMLHttpRequest();
            } catch (e) {}
          });
        var Ht = { 0: 200, 1223: 204 },
          Ot = le.ajaxSettings.xhr();
        (ae.cors = !!Ot && "withCredentials" in Ot),
          (ae.ajax = Ot = !!Ot),
          le.ajaxTransport(function(e) {
            var t, i;
            return ae.cors || (Ot && !e.crossDomain)
              ? {
                  send: function(r, o) {
                    var s,
                      a = e.xhr();
                    if (
                      (a.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (s in e.xhrFields) a[s] = e.xhrFields[s];
                    e.mimeType &&
                      a.overrideMimeType &&
                      a.overrideMimeType(e.mimeType),
                      e.crossDomain ||
                        r["X-Requested-With"] ||
                        (r["X-Requested-With"] = "XMLHttpRequest");
                    for (s in r) a.setRequestHeader(s, r[s]);
                    (t = function(e) {
                      return function() {
                        t &&
                          ((t = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null),
                          "abort" === e
                            ? a.abort()
                            : "error" === e
                            ? "number" != typeof a.status
                              ? o(0, "error")
                              : o(a.status, a.statusText)
                            : o(
                                Ht[a.status] || a.status,
                                a.statusText,
                                "text" !== (a.responseType || "text") ||
                                  "string" != typeof a.responseText
                                  ? { binary: a.response }
                                  : { text: a.responseText },
                                a.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (a.onload = t()),
                      (i = a.onerror = t("error")),
                      void 0 !== a.onabort
                        ? (a.onabort = i)
                        : (a.onreadystatechange = function() {
                            4 === a.readyState &&
                              n.setTimeout(function() {
                                t && i();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      a.send((e.hasContent && e.data) || null);
                    } catch (c) {
                      if (t) throw c;
                    }
                  },
                  abort: function() {
                    t && t();
                  }
                }
              : void 0;
          }),
          le.ajaxSetup({
            accepts: {
              script:
                "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
              "text script": function(e) {
                return le.globalEval(e), e;
              }
            }
          }),
          le.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1),
              e.crossDomain && (e.type = "GET");
          }),
          le.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
              var t, n;
              return {
                send: function(i, r) {
                  (t = le("<script>")
                    .prop({ charset: e.scriptCharset, src: e.url })
                    .on(
                      "load error",
                      (n = function(e) {
                        t.remove(),
                          (n = null),
                          e && r("error" === e.type ? 404 : 200, e.type);
                      })
                    )),
                    Z.head.appendChild(t[0]);
                },
                abort: function() {
                  n && n();
                }
              };
            }
          });
        var Ft = [],
          Bt = /(=)\?(?=&|$)|\?\?/;
        le.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function() {
            var e = Ft.pop() || le.expando + "_" + kt++;
            return (this[e] = !0), e;
          }
        }),
          le.ajaxPrefilter("json jsonp", function(e, t, i) {
            var r,
              o,
              s,
              a =
                e.jsonp !== !1 &&
                (Bt.test(e.url)
                  ? "url"
                  : "string" == typeof e.data &&
                    0 ===
                      (e.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    Bt.test(e.data) &&
                    "data");
            return a || "jsonp" === e.dataTypes[0]
              ? ((r = e.jsonpCallback = le.isFunction(e.jsonpCallback)
                  ? e.jsonpCallback()
                  : e.jsonpCallback),
                a
                  ? (e[a] = e[a].replace(Bt, "$1" + r))
                  : e.jsonp !== !1 &&
                    (e.url += (wt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                (e.converters["script json"] = function() {
                  return s || le.error(r + " was not called"), s[0];
                }),
                (e.dataTypes[0] = "json"),
                (o = n[r]),
                (n[r] = function() {
                  s = arguments;
                }),
                i.always(function() {
                  void 0 === o ? le(n).removeProp(r) : (n[r] = o),
                    e[r] && ((e.jsonpCallback = t.jsonpCallback), Ft.push(r)),
                    s && le.isFunction(o) && o(s[0]),
                    (s = o = void 0);
                }),
                "script")
              : void 0;
          }),
          (le.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && ((n = t), (t = !1)), (t = t || Z);
            var i = ye.exec(e),
              r = !n && [];
            return i
              ? [t.createElement(i[1])]
              : ((i = g([e], t, r)),
                r && r.length && le(r).remove(),
                le.merge([], i.childNodes));
          });
        var Wt = le.fn.load;
        (le.fn.load = function(e, t, n) {
          if ("string" != typeof e && Wt) return Wt.apply(this, arguments);
          var i,
            r,
            o,
            s = this,
            a = e.indexOf(" ");
          return (
            a > -1 && ((i = le.trim(e.slice(a))), (e = e.slice(0, a))),
            le.isFunction(t)
              ? ((n = t), (t = void 0))
              : t && "object" == typeof t && (r = "POST"),
            s.length > 0 &&
              le
                .ajax({ url: e, type: r || "GET", dataType: "html", data: t })
                .done(function(e) {
                  (o = arguments),
                    s.html(
                      i
                        ? le("<div>")
                            .append(le.parseHTML(e))
                            .find(i)
                        : e
                    );
                })
                .always(
                  n &&
                    function(e, t) {
                      s.each(function() {
                        n.apply(this, o || [e.responseText, t, e]);
                      });
                    }
                ),
            this
          );
        }),
          le.each(
            [
              "ajaxStart",
              "ajaxStop",
              "ajaxComplete",
              "ajaxError",
              "ajaxSuccess",
              "ajaxSend"
            ],
            function(e, t) {
              le.fn[t] = function(e) {
                return this.on(t, e);
              };
            }
          ),
          (le.expr.filters.animated = function(e) {
            return le.grep(le.timers, function(t) {
              return e === t.elem;
            }).length;
          }),
          (le.offset = {
            setOffset: function(e, t, n) {
              var i,
                r,
                o,
                s,
                a,
                c,
                l,
                u = le.css(e, "position"),
                d = le(e),
                p = {};
              "static" === u && (e.style.position = "relative"),
                (a = d.offset()),
                (o = le.css(e, "top")),
                (c = le.css(e, "left")),
                (l =
                  ("absolute" === u || "fixed" === u) &&
                  (o + c).indexOf("auto") > -1),
                l
                  ? ((i = d.position()), (s = i.top), (r = i.left))
                  : ((s = parseFloat(o) || 0), (r = parseFloat(c) || 0)),
                le.isFunction(t) && (t = t.call(e, n, le.extend({}, a))),
                null != t.top && (p.top = t.top - a.top + s),
                null != t.left && (p.left = t.left - a.left + r),
                "using" in t ? t.using.call(e, p) : d.css(p);
            }
          }),
          le.fn.extend({
            offset: function(e) {
              if (arguments.length)
                return void 0 === e
                  ? this
                  : this.each(function(t) {
                      le.offset.setOffset(this, e, t);
                    });
              var t,
                n,
                i = this[0],
                r = { top: 0, left: 0 },
                o = i && i.ownerDocument;
              if (o)
                return (
                  (t = o.documentElement),
                  le.contains(t, i)
                    ? ((r = i.getBoundingClientRect()),
                      (n = J(o)),
                      {
                        top: r.top + n.pageYOffset - t.clientTop,
                        left: r.left + n.pageXOffset - t.clientLeft
                      })
                    : r
                );
            },
            position: function() {
              if (this[0]) {
                var e,
                  t,
                  n = this[0],
                  i = { top: 0, left: 0 };
                return (
                  "fixed" === le.css(n, "position")
                    ? (t = n.getBoundingClientRect())
                    : ((e = this.offsetParent()),
                      (t = this.offset()),
                      le.nodeName(e[0], "html") || (i = e.offset()),
                      (i.top += le.css(e[0], "borderTopWidth", !0)),
                      (i.left += le.css(e[0], "borderLeftWidth", !0))),
                  {
                    top: t.top - i.top - le.css(n, "marginTop", !0),
                    left: t.left - i.left - le.css(n, "marginLeft", !0)
                  }
                );
              }
            },
            offsetParent: function() {
              return this.map(function() {
                for (
                  var e = this.offsetParent;
                  e && "static" === le.css(e, "position");

                )
                  e = e.offsetParent;
                return e || nt;
              });
            }
          }),
          le.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function(e, t) {
              var n = "pageYOffset" === t;
              le.fn[e] = function(i) {
                return Ae(
                  this,
                  function(e, i, r) {
                    var o = J(e);
                    return void 0 === r
                      ? o
                        ? o[t]
                        : e[i]
                      : void (o
                          ? o.scrollTo(
                              n ? o.pageXOffset : r,
                              n ? r : o.pageYOffset
                            )
                          : (e[i] = r));
                  },
                  e,
                  i,
                  arguments.length
                );
              };
            }
          ),
          le.each(["top", "left"], function(e, t) {
            le.cssHooks[t] = R(ae.pixelPosition, function(e, n) {
              return n
                ? ((n = E(e, t)), Ze.test(n) ? le(e).position()[t] + "px" : n)
                : void 0;
            });
          }),
          le.each({ Height: "height", Width: "width" }, function(e, t) {
            le.each(
              { padding: "inner" + e, content: t, "": "outer" + e },
              function(n, i) {
                le.fn[i] = function(i, r) {
                  var o = arguments.length && (n || "boolean" != typeof i),
                    s = n || (i === !0 || r === !0 ? "margin" : "border");
                  return Ae(
                    this,
                    function(t, n, i) {
                      var r;
                      return le.isWindow(t)
                        ? t.document.documentElement["client" + e]
                        : 9 === t.nodeType
                        ? ((r = t.documentElement),
                          Math.max(
                            t.body["scroll" + e],
                            r["scroll" + e],
                            t.body["offset" + e],
                            r["offset" + e],
                            r["client" + e]
                          ))
                        : void 0 === i
                        ? le.css(t, n, s)
                        : le.style(t, n, i, s);
                    },
                    t,
                    o ? i : void 0,
                    o,
                    null
                  );
                };
              }
            );
          }),
          le.fn.extend({
            bind: function(e, t, n) {
              return this.on(e, null, t, n);
            },
            unbind: function(e, t) {
              return this.off(e, null, t);
            },
            delegate: function(e, t, n, i) {
              return this.on(t, e, n, i);
            },
            undelegate: function(e, t, n) {
              return 1 === arguments.length
                ? this.off(e, "**")
                : this.off(t, e || "**", n);
            },
            size: function() {
              return this.length;
            }
          }),
          (le.fn.andSelf = le.fn.addBack),
          (i = []),
          (r = function() {
            return le;
          }.apply(t, i)),
          !(void 0 !== r && (e.exports = r));
        var $t = n.jQuery,
          zt = n.$;
        return (
          (le.noConflict = function(e) {
            return (
              n.$ === le && (n.$ = zt),
              e && n.jQuery === le && (n.jQuery = $t),
              le
            );
          }),
          o || (n.jQuery = n.$ = le),
          le
        );
      });
    },
    function(e, t) {
      "use strict";
      var n = document.createElement("div");
      e.exports = function(e) {
        var t = document.createDocumentFragment();
        for (
          e = e.replace(/>\s*</gm, "><"),
            n.innerHTML = e.replace(/>\s*</gm, "><");
          n.firstChild;

        )
          t.appendChild(n.firstChild);
        return t;
      };
    },
    function(e, t, n) {
      (function(t) {
        var i,
          r = n(6),
          o = n(7),
          s = {
            waiting: "skyblue",
            free: "white",
            received: "red",
            ackReceived: "blue",
            send: "skyblue",
            ack: "yellow"
          },
          a = [],
          c = void 0,
          l = 0;
        window.requestAnimFrame = (function() {
          return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(e) {
              window.setTimeout(e, 1e3 / 60);
            }
          );
        })();
        var u = function(e, t) {
          var n = this;
          (this.ctx = e),
            (this.width = 10),
            (this.height = 30),
            (this.padding = 1.9),
            (this.color = "white"),
            (this.id = 0),
            (this.position = t || [0, 0]),
            (this.type = void 0),
            (this.textPosition = "top"),
            (this.status = ""),
            (this.applet = void 0),
            (this.textPositions = { top: 0, bottom: n.height + 18 });
        };
        u.prototype = {
          draw: function() {
            var e = this;
            e.ctx.beginPath(),
              (e.ctx.fillStyle = this.color),
              c && c.cell === e && (e.ctx.fillStyle = "lime"),
              e.ctx.fillRect(
                this.position[0],
                this.position[1] + 4,
                e.width,
                e.height
              ),
              (e.ctx.fillStyle = "black"),
              e.ctx.rect(
                this.position[0],
                this.position[1] + 4,
                e.width,
                e.height
              ),
              (e.ctx.lineWidth = "2"),
              (e.ctx.font = "14px Arial"),
              (e.ctx.textAlign = "center"),
              e.ctx.fillText(
                e.id,
                this.position[0] + e.width / 2,
                this.position[1] + e.textPositions[e.textPosition]
              ),
              e.ctx.stroke();
          },
          setPosition: function(e) {
            this.position = e;
          },
          setStatus: function(e) {
            (this.status = e), (this.color = s[e]);
          }
        };
        var d = function() {
          (this.canvas = t(".animation canvas")[0]),
            (this.ctx = this.canvas.getContext("2d")),
            (this.senderPackets = {
              maxCountSenderPacket: 5,
              currentCountSenderPackets: 0,
              currentPositionInArray: 0,
              widthStep: 19,
              width: 95,
              height: 37,
              top: 31,
              lastPacketId: 0
            }),
            (this.receivePackets = {
              maxCountSenderPacket: 1,
              currentCountSenderPackets: 0,
              currentPositionInArray: 0,
              widthStep: 19,
              width: 19,
              height: 37,
              top: this.canvas.clientHeight - 80,
              lastPacketId: 0
            }),
            (this.allCells = {}),
            (this.countCells = 20),
            (this.isRender = !1),
            (this.speedDefault = 0.8),
            (this.speedPacket = this.speedDefault = 0.8),
            (this.speedPacketStep = 0.1),
            (this.delta = 4),
            (this.maxSpeed = 1),
            (this.minSpeed = 0.1),
            (this.isPaused = !1),
            (this.waitTimerId = void 0),
            (this.waitSeconds = 10e3),
            (this.elements = {}),
            (this.nextSeqNum = 0);
        };
        d.prototype = {
          keys: { 49: 0, 50: 1, 51: 2, 52: 3, 53: 4 },
          startTimer: function(e) {
            var t = this;
            this.waitTimerId ||
              (this.waitTimerId = setTimeout(
                t.waitTimer.bind(this),
                this.waitSeconds / this.speedPacket
              ));
          },
          stopTimer: function() {
            this.waitTimerId &&
              (clearInterval(this.waitTimerId), (this.waitTimerId = void 0));
          },
          redrawBoard: function() {
            this.ctx.beginPath(),
              this.ctx.clearRect(0, 0, 500, 500),
              this.allCells.sender.forEach(function(e) {
                e.draw();
              }),
              this.allCells.receive.forEach(function(e) {
                e.draw();
              }),
              a.length > 0 &&
                a.forEach(function(e) {
                  e.cell.draw();
                }),
              (this.ctx.lineWidth = 1);
            var e = this.senderPackets;
            this.ctx.rect(
              26 + e.currentPositionInArray * e.widthStep,
              e.top,
              e.width,
              e.height
            );
            var t = this.receivePackets;
            this.ctx.rect(
              26 + t.currentPositionInArray * t.widthStep,
              t.top,
              t.width,
              t.height
            ),
              this.ctx.stroke();
          },
          initBoard: function() {
            var e = this;
            (i = this),
              this.generateSenderCells(),
              this.generateReceiveCells(),
              this.isRender ||
                (this.render(),
                (this.isRender = !0),
                t(this.canvas).on("click", e.mouseDown.bind(this)),
                t(document).ready(function() {
                  e.initButtons.call(e),
                    e.updateButtons(),
                    (e.elements.base = t(".applet .base")),
                    (e.elements.nextseqnum = t(".applet .nextseqnum")),
                    (e.elements.animation = t(".animation")),
                    (e.voice = new o(15)),
                    e.addLog(r.gobackn_caption + "\n"),
                    e.updateElements(),
                    t("[autofocus]").focus(),
                    (window.onkeypress = e.onKeyPressed);
                }));
          },
          killSelectedPacket: function() {
            this.buttons.killPacket;
            c &&
              ("send" == c.cell.status
                ? (i.voice.speak("Packet " + c.cell.id + "is lost."),
                  this.addLog("- Packet " + c.cell.id + " lost"))
                : (i.voice.speak(
                    "Cumulative Ack of Packet " + c.cell.id + "is lost."
                  ),
                  this.addLog(
                    "- Cumulative Ack of Packet " + c.cell.id + " lost"
                  )),
              clearInterval(c.idTimer),
              a.remove(c),
              (c = void 0),
              this.updateButtons());
          },
          mouseDown: function(e) {
            var t = this.collides(e.offsetX, e.offsetY);
            t && (t.select(), this.updateButtons());
          },
          render: function() {
            window.requestAnimFrame(this.render.bind(this)), this.redrawBoard();
          },
          generateCells: function(e) {
            var t = this,
              n = e.margin || { top: 30, left: 30 };
            this.allCells[e.type] = [];
            for (var i = 0; i < t.countCells; i++) {
              var r = [n.left, n.top],
                o = new u(t.ctx);
              (r[0] = i * o.width * o.padding + n.left),
                (o.id = i),
                o.setPosition(r),
                (o.textPosition = e.textPosition || "top"),
                o.draw(),
                (o.type = e.type || void 0),
                this.allCells[o.type].push(o);
            }
          },
          generateSenderCells: function() {
            this.generateCells({
              margin: { top: 30, left: 30 },
              type: "sender",
              textPosition: "top"
            });
          },
          generateReceiveCells: function() {
            var e = this;
            this.generateCells({
              margin: { top: e.canvas.clientHeight - 80, left: 30 },
              type: "receive",
              textPosition: "bottom"
            });
          },
          getCellById: function(e, t) {
            return this.allCells[t][e];
          },
          resetBoard: function() {
            this.buttons.reset;
            this.stopTimer(),
              (this.isPaused = !1),
              (this.senderPackets.lastPacketId = 0),
              (this.nextSeqNum = 0),
              (this.speedPacket = this.speedDefault),
              (this.allCells = {}),
              a.forEach(function(e) {
                clearInterval(e.idTimer);
              }),
              (a = []),
              (this.senderPackets.currentPositionInArray = 0),
              (this.receivePackets.currentPositionInArray = 0),
              (this.senderPackets.currentCountSenderPackets = 0),
              i.voice.speak(r.simulation_restarted.voice),
              i.addLog("\n--------------------------------------------------"),
              i.addLog(r.simulation_restarted.text),
              this.initBoard(),
              this.updateButtons(),
              this.updateElements(),
              this.buttons.pause.prop("disabled", !0);
          },
          sendOnePacket: function(e, t, n, i, r) {
            this.stopTimer();
            var o = new u(this.ctx);
            (o.type = n),
              (o.id = t),
              (o.applet = this),
              o.setStatus(i || "send");
            var s = e,
              a = this.getCellById(e, n),
              c = "",
              d = "down";
            "sender" == n
              ? ("" == this.allCells.sender[o.id].status &&
                  (this.nextSeqNum++, this.updateElements()),
                (c = "receive"),
                (d = "down"))
              : ((c = "sender"), (d = "up"));
            var f = this.getCellById(s, c);
            o.setPosition([a.position[0], a.position[1] - l]),
              (o.textPosition = "top"),
              this.startTimer();
            new p({
              applet: this,
              ctx: this.ctx,
              cellFrom: o,
              type: n,
              cellWhere: f,
              moveDirection: d,
              isSelected: r
            });
          },
          getResultMessage: function(e, t) {
            return (
              t &&
                t.forEach(function(t, n) {
                  e = e.replace("%s", t);
                }),
              e
            );
          },
          sendPacket: function() {
            var e = this.senderPackets;
            e.currentPositionInArray;
            if (
              (this.waitTimerId
                ? (i.voice.speak(
                    this.getResultMessage(r.timer_already_running.voice, [
                      r.at_the_sender_side
                    ])
                  ),
                  i.addLog(
                    this.getResultMessage(r.timer_already_running.text, [r.S])
                  ))
                : (i.voice.speak(
                    this.getResultMessage(r.start_timer_for_packet.voice, [
                      e.currentCountSenderPackets + e.currentPositionInArray,
                      r.at_the_sender_side
                    ])
                  ),
                  i.addLog(
                    this.getResultMessage(r.start_timer_for_packet.text, [
                      r.S,
                      e.currentCountSenderPackets + e.currentPositionInArray
                    ])
                  )),
              e.currentCountSenderPackets < 5)
            ) {
              this.sendOnePacket(
                e.currentCountSenderPackets + e.currentPositionInArray,
                e.currentCountSenderPackets + e.currentPositionInArray,
                "sender",
                "send"
              ),
                this.allCells.sender[
                  e.currentCountSenderPackets + e.currentPositionInArray
                ].setStatus("waiting");
              e.currentCountSenderPackets + e.currentPositionInArray;
              i.voice.speak(
                this.getResultMessage(r.packet_sent.voice, [
                  e.currentCountSenderPackets + e.currentPositionInArray,
                  r.at_the_sender_side
                ])
              ),
                i.addLog(
                  this.getResultMessage(r.packet_sent.text, [
                    r.S,
                    e.currentCountSenderPackets + e.currentPositionInArray
                  ])
                ),
                e.currentCountSenderPackets++;
            }
            this.updateButtons(),
              this.startTimer(),
              this.buttons.pause.prop("disabled", !1);
          },
          packetReceived: function(e, t) {
            var n = e.cell;
            return n.id != t.receivePackets.currentPositionInArray &&
              t.receivePackets.currentPositionInArray > 0
              ? (t.sendOnePacket(
                  e.cellWhere.id,
                  t.receivePackets.lastPacketId,
                  "receive",
                  "ack",
                  this.isSelected
                ),
                t.voice.speak(
                  this.getResultMessage(r.packet_received_out_of_order.voice, [
                    n.id,
                    r.at_the_sender_side,
                    n.id,
                    t.receivePackets.lastPacketId,
                    r.at_the_receiver_side
                  ])
                ),
                void t.addLog(
                  this.getResultMessage(r.packet_received_out_of_order.text, [
                    r.R,
                    n.id,
                    n.id,
                    t.receivePackets.lastPacketId
                  ])
                ))
              : (n.id > t.receivePackets.currentPositionInArray &&
                  (t.voice.speak(
                    this.getResultMessage(
                      r.packet_no_packets_acknowledged.voice,
                      [n.id, r.at_the_receiver_side]
                    )
                  ),
                  t.addLog(
                    this.getResultMessage(
                      r.packet_no_packets_acknowledged.text,
                      [r.R, n.id]
                    )
                  )),
                void (n.id == t.receivePackets.currentPositionInArray ||
                n.id < t.receivePackets.currentPositionInArray
                  ? (t.allCells.receive[n.id].setStatus("received"),
                    e.cellWhere.setStatus("received"),
                    n.id == t.receivePackets.currentPositionInArray &&
                      (t.sendOnePacket(
                        e.cellWhere.id,
                        e.cell.applet.receivePackets.currentPositionInArray,
                        "receive",
                        "ack",
                        e.isSelected
                      ),
                      t.voice.speak(
                        this.getResultMessage(r.packet_received.voice, [
                          e.cell.id,
                          e.cell.id,
                          e.cell.id,
                          r.at_the_receiver_side
                        ])
                      ),
                      t.addLog(
                        this.getResultMessage(r.packet_received.text, [
                          r.R,
                          e.cell.id,
                          e.cell.id,
                          e.cell.id
                        ])
                      )),
                    n.id < t.receivePackets.currentPositionInArray &&
                      t.sendOnePacket(
                        e.cellWhere.id,
                        e.cell.id,
                        "receive",
                        "ack",
                        e.isSelected
                      ),
                    this.receivePackets.currentPositionInArray <
                      this.countCells -
                        this.receivePackets.maxCountSenderPacket &&
                      t.receivePackets.currentPositionInArray++,
                    (t.receivePackets.lastPacketId = n.id))
                  : n.id < t.receivePackets.currentPositionInArray &&
                    (t.allCells.receive[n.id].setStatus("received"),
                    e.cellWhere.setStatus("received"),
                    t.sendOnePacket(
                      e.cellWhere.id,
                      e.cell.id,
                      "receive",
                      "ack",
                      e.isSelected
                    ),
                    (t.receivePackets.lastPacketId = n.id))));
          },
          ackPacketReceived: function(e, t) {
            var n = e.cell;
            if (
              t.senderPackets.currentPositionInArray <
              this.countCells - t.senderPackets.maxCountSenderPacket
            )
              if (t.senderPackets.currentPositionInArray == n.id)
                t.allCells.sender[n.id].setStatus("ackReceived"),
                  t.senderPackets.currentPositionInArray++,
                  t.senderPackets.currentCountSenderPackets--,
                  (t.senderPackets.lastPacketId = n.id),
                  t.voice.speak(
                    this.getResultMessage(r.cumulative_ack_received.voice, [
                      e.cell.id,
                      r.at_the_sender_side
                    ])
                  ),
                  t.addLog(
                    this.getResultMessage(r.cumulative_ack_received.text, [
                      r.S,
                      e.cell.id
                    ])
                  );
              else if (t.senderPackets.currentPositionInArray <= n.id) {
                for (
                  var i = t.senderPackets.currentPositionInArray;
                  i <= n.id;
                  i++
                )
                  t.allCells.sender[i].setStatus("ackReceived"),
                    (t.senderPackets.currentPositionInArray = i + 1),
                    t.senderPackets.currentCountSenderPackets--,
                    (t.senderPackets.lastPacketId = i);
                t.voice.speak(
                  this.getResultMessage(r.cumulative_ack_received.voice, [
                    e.cell.id,
                    r.at_the_sender_side
                  ])
                ),
                  t.addLog(
                    this.getResultMessage(r.cumulative_ack_received.text, [
                      r.S,
                      e.cell.id
                    ])
                  );
              } else
                t.senderPackets.currentPositionInArray > n.id &&
                  (t.voice.speak(
                    this.getResultMessage(r.rececive_again_dupack.voice, [
                      e.cell.id,
                      r.at_the_sender_side
                    ])
                  ),
                  t.addLog(
                    this.getResultMessage(r.rececive_again_dupack.text, [
                      r.S,
                      n.id
                    ])
                  ));
            else if (t.senderPackets.currentPositionInArray <= n.id) {
              "ackReceived" == t.allCells.sender[n.id].status
                ? (t.voice.speak(
                    this.getResultMessage(r.rececive_again_dupack.voice, [
                      e.cell.id,
                      r.at_the_sender_side
                    ])
                  ),
                  t.addLog(
                    this.getResultMessage(r.rececive_again_dupack.text, [
                      r.S,
                      n.id
                    ])
                  ))
                : (t.voice.speak(
                    this.getResultMessage(r.cumulative_ack_received.voice, [
                      e.cell.id,
                      r.at_the_sender_side
                    ])
                  ),
                  t.addLog(
                    this.getResultMessage(r.cumulative_ack_received.text, [
                      r.S,
                      e.cell.id
                    ])
                  ));
              for (
                var i = t.senderPackets.currentPositionInArray;
                i <= n.id;
                i++
              )
                t.allCells.sender[i].setStatus("ackReceived"),
                  (t.senderPackets.lastPacketId = i);
            } else
              t.allCells.sender[n.id].setStatus("ackReceived"),
                (t.senderPackets.lastPacketId = n.id);
            var o = !1;
            t.allCells.sender.forEach(function(e) {
              "waiting" == e.status && (o = !0);
            }),
              t.voice.speak(
                this.getResultMessage(r.stop_timer.voice, [
                  r.at_the_sender_side
                ])
              ),
              t.addLog(this.getResultMessage(r.stop_timer.text, [r.S])),
              o &&
                (t.voice.speak(
                  this.getResultMessage(r.start_timer_for_packet.voice, [
                    1 + n.id,
                    r.at_the_sender_side
                  ])
                ),
                t.addLog(
                  this.getResultMessage(r.start_timer_for_packet.text, [
                    r.S,
                    n.id + 1
                  ])
                )),
              0 == o && t.stopTimer(),
              this.updateElements(),
              this.updateButtons();
          },
          collides: function(e, t) {
            var n = !1;
            return (
              a.forEach(function(i) {
                var r = {
                    w: i.cell.width,
                    h: i.cell.height,
                    x: i.cell.position[0],
                    y: i.cell.position[1]
                  },
                  o = {
                    left: r.x,
                    right: r.x + r.w,
                    top: r.y,
                    bottom: r.y + r.h
                  };
                o.right >= e &&
                  o.left <= e &&
                  o.bottom >= t &&
                  o.top <= t &&
                  (n = i);
              }),
              n
            );
          },
          waitTimer: function() {
            var e = this;
            (e.waitTimerId = void 0),
              a.forEach(function(e) {
                clearInterval(e.idTimer);
              }),
              (a = []),
              (c = void 0);
            var t = !0,
              n = 0,
              o = -1,
              s = -1;
            this.allCells.sender.forEach(function(a) {
              var c = a.status;
              "waiting" == c &&
                (n++,
                e.sendOnePacket(a.id, a.id, "sender", "send", !1),
                (l += 2),
                0 > o && (o = a.id),
                (s = a.id),
                t &&
                  ((t = !1),
                  i.voice.speak(
                    i.getResultMessage(r.timeout_occured.voice, [
                      a.id,
                      r.at_the_sender_side
                    ])
                  ),
                  i.addLog(
                    i.getResultMessage(r.timeout_occured.text, [r.S, a.id])
                  )));
            }),
              (l = 0),
              n > 0 &&
                (i.voice.speak(
                  this.getResultMessage(r.all_outstanding_packets.voice, [
                    o,
                    s,
                    o
                  ])
                ),
                i.addLog(
                  this.getResultMessage(r.all_outstanding_packets.text, [
                    o,
                    s,
                    o
                  ])
                ));
          },
          pause: function() {
            this.isPaused = !this.isPaused;
            this.buttons.pause;
            this.isPaused
              ? (i.voice.speak(r.simulation_paused.voice),
                i.addLog(r.simulation_paused.text),
                (this.lastSpeedPacket = this.speedPacket),
                (this.speedPacket = 0),
                this.stopTimer(),
                this.generateTextForAnimation())
              : (i.voice.speak(r.simulation_resumed.voice),
                i.addLog(r.simulation_resumed.text),
                (this.speedPacket = this.lastSpeedPacket),
                this.startTimer(),
                this.clearTextInAnimation()),
              this.updateButtons();
          },
          clearTextInAnimation: function() {
            this.elements.animation.attr("aria-label", "");
          },
          generateTextForAnimation: function(e) {
            var t = "";
            0 != e &&
              (t +=
                "Base equals " +
                i.senderPackets.currentPositionInArray +
                " now, the next packet in the sequence is " +
                i.nextSeqNum +
                ". ");
            var n = "",
              r = "";
            a.forEach(function(e, t) {
              "ack" == e.cell.status &&
                (n +=
                  "Cumulative Ack for Packet " +
                  e.cell.id +
                  " is sent. Click key Num" +
                  (t + 1) +
                  " to kill this ack. "),
                "send" == e.cell.status &&
                  (r +=
                    "Packet " +
                    e.cell.id +
                    " is sent. Click key Num" +
                    (t + 1) +
                    " to kill it. ");
            }),
              (t += n + r),
              i.addLog(t),
              i.voice.speak(t);
          },
          speedUp: function() {
            this.buttons.faster;
            i.voice.speak(r.simulation_spd_incr.voice),
              i.addLog(r.simulation_spd_incr.text),
              (this.speedPacket = Math.min(
                this.maxSpeed * this.delta,
                (this.speedPacket += this.speedPacketStep * this.delta)
              )),
              this.stopTimer(),
              this.startTimer();
          },
          speedDown: function() {
            this.buttons.slower;
            i.voice.speak(r.simulation_spd_decr.voice),
              i.addLog(r.simulation_spd_decr.text),
              (this.speedPacket = Math.max(
                Math.max(0.1, this.minSpeed / this.delta),
                (this.speedPacket -= this.speedPacketStep * this.delta)
              )),
              this.stopTimer(),
              this.startTimer();
          },
          initButtons: function() {
            var e = this,
              n = t(".applet .buttons");
            t(".bottom-label").css(
              "margin-top",
              e.canvas.clientHeight - 170 + "px"
            ),
              (this.textArea = t("#log-textarea")),
              (this.buttons = {
                send: n.find(".send-new"),
                pause: n.find(".pause"),
                faster: n.find(".faster"),
                slower: n.find(".slower"),
                killPacket: n.find(".killpacket-ack"),
                reset: n.find(".reset")
              }),
              this.buttons.pause.prop("disabled", !0),
              this.buttons.send.on("click", e.sendPacket.bind(e)),
              this.buttons.reset.on("click", e.resetBoard.bind(e)),
              this.buttons.killPacket.on("click", e.killSelectedPacket.bind(e)),
              this.buttons.pause.on("click", e.pause.bind(e)),
              this.buttons.faster.on("click", e.speedUp.bind(e)),
              this.buttons.slower.on("click", e.speedDown.bind(e));
          },
          updateButtons: function() {
            this.isPaused
              ? (this.buttons.send.prop("disabled", !0),
                this.buttons.faster.prop("disabled", !0),
                this.buttons.slower.prop("disabled", !0),
                this.buttons.killPacket.prop("disabled", !0),
                this.buttons.pause.text("Resume"))
              : (this.buttons.send.prop("disabled", !1),
                this.buttons.faster.prop("disabled", !1),
                this.buttons.slower.prop("disabled", !1),
                this.buttons.killPacket.prop("disabled", !1),
                this.buttons.pause.text("Pause")),
              this.senderPackets.currentCountSenderPackets ==
                this.senderPackets.maxCountSenderPacket &&
                this.buttons.send.prop("disabled", !0);
            var e = !1;
            a.forEach(function(t) {
              t.isSelected && (e = !0);
            }),
              e
                ? this.buttons.killPacket.prop("disabled", !1)
                : this.buttons.killPacket.prop("disabled", !0);
          },
          addLog: function(e) {
            e && (e += "\n"),
              this.textArea.append(e || ""),
              (this.textArea[0].scrollTop = this.textArea[0].scrollHeight);
          },
          updateElements: function() {
            this.elements.nextseqnum.text("nextseqnum = " + i.nextSeqNum),
              this.elements.base.text(
                "base = " + this.senderPackets.currentPositionInArray
              );
          },
          onKeyPressed: function(e) {
            var t = e.keyCode || e.which;
            if (i.isPaused) {
              var n = i.keys[t];
              if (n >= 0) {
                var o = a[n];
                if (!o) return;
                i.elements.animation;
                "send" == o.cell.status
                  ? (i.voice.speak(
                      i.getResultMessage(r.packet_lost.voice, [o.cell.id])
                    ),
                    i.addLog(
                      i.getResultMessage(r.packet_lost.text, [o.cell.id])
                    ))
                  : (i.voice.speak(
                      i.getResultMessage(r.cumulative_ack_lost.voice, [
                        o.cell.id
                      ])
                    ),
                    i.addLog(
                      i.getResultMessage(r.cumulative_ack_lost.text, [
                        o.cell.id
                      ])
                    )),
                  clearInterval(o.idTimer),
                  a.remove(o),
                  i.generateTextForAnimation(!1);
              }
            }
          }
        };
        var p = function(e) {
          var t = this;
          (this.applet = e.applet),
            (this.speed = function() {
              return t.applet.speedPacket;
            }),
            (this.ctx = e.ctx),
            (this.cell = e.cellFrom),
            (this.cellWhere = e.cellWhere),
            (this.destroyPosition = this.cellWhere.position[1]);
          var n = e.moveDirection;
          (this.idTimer = -1),
            (this.isSelected = e.isSelected || !1),
            this.isSelected && (c = this),
            "down" == n
              ? (this.idTimer = setInterval(this.movingDown.bind(this), 16))
              : (this.idTimer = setInterval(this.movingUp.bind(this), 16)),
            a.push(this);
        };
        (p.prototype = {
          receiveAndDestroyPacket: function() {
            var e = this.cell.applet;
            switch (
              (clearInterval(this.idTimer), a.remove(this), this.cell.status)
            ) {
              case "send":
                e.packetReceived(this, e);
                break;
              case "ack":
                e.ackPacketReceived(this, e);
            }
          },
          movingDown: function() {
            (this.cell.position[1] += this.speed()),
              "sender" == this.cell.type &&
                this.destroyPosition < this.cell.position[1] &&
                this.receiveAndDestroyPacket();
          },
          select: function() {
            a.forEach(function(e) {
              e.isSelected = !1;
            }),
              (c = this),
              (c.isSelected = !0),
              "send" == c.cell.status
                ? (i.voice.speak(
                    i.getResultMessage(r.packet_selected.voice, [c.cell.id])
                  ),
                  i.addLog(
                    i.getResultMessage(r.packet_selected.text, [c.cell.id])
                  ))
                : (i.voice.speak(
                    i.getResultMessage(r.cumulative_packet_selected.voice, [
                      c.cell.id
                    ])
                  ),
                  i.addLog(
                    i.getResultMessage(r.cumulative_packet_selected.text, [
                      c.cell.id
                    ])
                  ));
          },
          movingUp: function() {
            (this.cell.position[1] -= this.speed()),
              "receive" == this.cell.type &&
                this.destroyPosition > this.cell.position[1] &&
                this.receiveAndDestroyPacket();
          }
        }),
          (Array.prototype.remove = function(e) {
            return this.splice(this.indexOf(e), 1), !0;
          }),
          (e.exports = d);
      }.call(t, n(3)));
    },
    function(e, t) {
      var n = {
        S: "(S) - ",
        R: "(R) - ",
        at_the_receiver_side: "at the receiver side",
        at_the_sender_side: "at the sender side",
        gobackn_caption:
          "- GoBackN originally written by Matt Shatley & Chris Hoffman \n- Advised by Professor Paul D. Amer (amer@udel.edu), U of Delaware, 2008\n- Updated by Chris Hoffman and Professor Amer, 2012",
        simulation_paused: {
          text: "- Simulation paused.",
          voice: "Simulation paused."
        },
        simulation_resumed: {
          text: "- Simulation resumed.",
          voice: "Simulation resumed."
        },
        simulation_spd_incr: {
          text: "- Simulation speed increased.",
          voice: "Simulation speed increased."
        },
        simulation_spd_decr: {
          text: "- Simulation speed decreased.",
          voice: "Simulation speed decreased."
        },
        ready_to_run: {
          text: '- Ready to run. Press "Send New" button to start.',
          voice: "Ready to run. Press Send New button to start."
        },
        packet_lost: { text: "- Packet %s lost.", voice: "Packet %s lost." },
        cumulative_ack_lost: {
          text: "- Cumulative Ack of Packet %s is lost.",
          voice: "Cumulative Ack of Packet %s is lost."
        },
        packet_selected: {
          text: "- Packet %s selected.",
          voice: "Packet %s selected."
        },
        simulation_restarted: {
          text: '- Simulation restarted. Press "Send New" to start.',
          voice: "Simulation restarted. Press Send New to start."
        },
        cumulative_packet_selected: {
          text: "- Cumulative Ack %s selected.",
          voice: "Cumulative Ack %s selected."
        },
        stop_timer: { text: "%s Stop timer.", voice: "Stop timer %s." },
        start_timer_for_packet: {
          text: "%s Start timer (for Packet %s).",
          voice: "Start timer for Packet %s %s."
        },
        packet_sent: {
          text: "%s packet %s sent. Press Pause to be able to kill packet.",
          voice: "packet %s sent %s. Press Pause to be able to kill packet."
        },
        timer_already_running: {
          text: "%s Timer already running.",
          voice: "Timer already running."
        },
        packet_received_out_of_order: {
          text:
            "%s Packet %s received out of order. Dropping Packet %s. Cumulative Ack for Packets up to and including %s sent.",
          voice:
            "Packet %s received out of order %s. Dropping Packet %s. Cumulative Ack for Packets up to and including %s sent %s."
        },
        packet_no_packets_acknowledged: {
          text:
            "%s Packet %s received out of order - no Packets acknowledged. Special case -  No Ack sent.",
          voice:
            "Packet %s received out of order - no Packets acknowledged. Special case -  No Ack sent %s."
        },
        packet_received: {
          text:
            "%s Packet %s received. Cumulative Ack for Packets up to and including %s sent. Packet %s delivered to application.",
          voice:
            "Packet %s received. Cumulative Ack for Packets up to and including %s sent. Packet %s delivered to application %s."
        },
        cumulative_ack_received: {
          text:
            "%s Cumulative Ack received for Packet(s) up to and including %s.",
          voice:
            "Cumulative Ack received for Packets up to and including %s %s."
        },
        rececive_again_dupack: {
          text:
            "%s Cumulative Ack for Packet(s) up to and including %s received again (DUPACK).",
          voice:
            "Cumulative Ack for Packets up to and including %s received again DUPACK %s."
        },
        timeout_occured: {
          text: "%s Timeout occurred (for Packet %s) ",
          voice: "Timeout occurred for Packet %s"
        },
        all_outstanding_packets: {
          text:
            "All outstanding Packet(s) from %s to %s are retransmitted. Start timer (for Packet %s)",
          voice:
            "All outstanding Packets from %s to %s are retransmitted. Start timer for Packet %s"
        },
        btn_send_pressed: "Send new button pressed.",
        btn_pause_pressed: "Pause button pressed.",
        btn_resume_pressed: "Resume button pressed.",
        btn_faster_pressed: "Faster button pressed.",
        btn_slower_pressed: "Slower button pressed.",
        btn_kill_pressed: "Kill Packet button pressed.",
        btn_reset_pressed: "Reset button pressed."
      };
      e.exports = n;
    },
    function(e, t, n) {
      (function(t) {
        var n = function(e) {
          (this.history = []), (this.maxHistory = e || 500);
          var n =
            '<div id="voice-log" role="log" aria-live="polite" aria-atomic="false" style="width:0px; height:0px; position: absolute; left: -9999px; font-size:0px; "></div>';
          t(document.body).append(n), (this.$voiceLog = t("#voice-log"));
        };
        (n.prototype = {
          speak: function(e) {
            var t = "<p>" + e + "</p>";
            this.updateHistory(),
              this.$voiceLog.append(t),
              this.history.push(e);
          },
          updateHistory: function() {
            var e = this.$voiceLog.find("p");
            e.length > this.maxHistory && ((this.history = []), e.remove());
          }
        }),
          (e.exports = n);
      }.call(t, n(3)));
    },
    [15, 9],
    function(e, t, n) {
      (t = e.exports = n(10)()),
        t.push([
          e.id,
          `.applet {
            margin: 5px;
            display: block;
          }
          .applet button {
            min-width: 109px;
          }
          .top-label {
            float: left;
            margin: 3px;
            top: 40px;
            position: relative;
          }
          canvas {
            float: left;
          }
          .blue {
            color: #23c495;
            margin: 5px 0;
          }
          .top-label p {
            margin: 0;
          }
          .animation {
            height: 330px;
          }
          .animation,
          .footer {
            display: inline-block;
          }
          .footer {
          
            width: auto;
            height: auto;
            position: relative;
            padding-bottom: 0;
            padding: 10px;
          }
          .legend {
            margin: 0 auto;
            border: 1px solid #000;
            padding: 10px 20px 5px;
          }
          .legend,
          .legend .block {
            width: auto;
            text-align: center;
          }
          .legend .block {
            display: inline-block;
            margin: 0 18px;
          }
          .rect {
            width: 15px;
            height: 15px;
            border: 1px solid #000;
            border-radius : 25px ;
          }
          .footer .legend p,
          .rect {
            display: inline-block;
            margin: 0;
            float: left;
          }
          .footer .legend p {
            padding-left: 5px;
          }
          .legend .red {
            background: red;
          }
          .legend .lime {
            background: lime;
          }
          .legend .yellow {
            background: #ff0;
          }
          .legend .blue {
            background: #4169e1;
          }
          .legend .skyblue {
            background: skyblue;
          }
          .log-container {
            top: 15px;
            display: inline-block;
            position: relative;
            text-align: center;
            width: 650px;
            margin: 0 auto;
            box-sizing: border-box;
          }
          .log-container p {
            display: inline-block;
            padding: 0 20px;
          }
          .log-container textarea {
            width: 100%;
            display: inline-block;
            box-sizing: border-box;
            font-size: 80%;
          }
          p {
            -webkit-user-select: none;
          }
          `,
          ""
        ]);
    },
    function(e, t) {
      e.exports = function() {
        var e = [];
        return (
          (e.toString = function() {
            for (var e = [], t = 0; t < this.length; t++) {
              var n = this[t];
              n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1]);
            }
            return e.join("");
          }),
          (e.i = function(t, n) {
            "string" == typeof t && (t = [[null, t, ""]]);
            for (var i = {}, r = 0; r < this.length; r++) {
              var o = this[r][0];
              "number" == typeof o && (i[o] = !0);
            }
            for (r = 0; r < t.length; r++) {
              var s = t[r];
              ("number" == typeof s[0] && i[s[0]]) ||
                (n && !s[2]
                  ? (s[2] = n)
                  : n && (s[2] = "(" + s[2] + ") and (" + n + ")"),
                e.push(s));
            }
          }),
          e
        );
      };
    },
    function(e, t, n) {
      function i(e, t) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n],
            r = f[i.id];
          if (r) {
            r.refs++;
            for (var o = 0; o < r.parts.length; o++) r.parts[o](i.parts[o]);
            for (; o < i.parts.length; o++) r.parts.push(l(i.parts[o], t));
          } else {
            for (var s = [], o = 0; o < i.parts.length; o++)
              s.push(l(i.parts[o], t));
            f[i.id] = { id: i.id, refs: 1, parts: s };
          }
        }
      }
      function r(e) {
        for (var t = [], n = {}, i = 0; i < e.length; i++) {
          var r = e[i],
            o = r[0],
            s = r[1],
            a = r[2],
            c = r[3],
            l = { css: s, media: a, sourceMap: c };
          n[o] ? n[o].parts.push(l) : t.push((n[o] = { id: o, parts: [l] }));
        }
        return t;
      }
      function o(e, t) {
        var n = g(),
          i = x[x.length - 1];
        if ("top" === e.insertAt)
          i
            ? i.nextSibling
              ? n.insertBefore(t, i.nextSibling)
              : n.appendChild(t)
            : n.insertBefore(t, n.firstChild),
            x.push(t);
        else {
          if ("bottom" !== e.insertAt)
            throw new Error(
              "Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'."
            );
          n.appendChild(t);
        }
      }
      function s(e) {
        e.parentNode.removeChild(e);
        var t = x.indexOf(e);
        t >= 0 && x.splice(t, 1);
      }
      function a(e) {
        var t = document.createElement("style");
        return (t.type = "text/css"), o(e, t), t;
      }
      function c(e) {
        var t = document.createElement("link");
        return (t.rel = "stylesheet"), o(e, t), t;
      }
      function l(e, t) {
        var n, i, r;
        if (t.singleton) {
          var o = y++;
          (n = m || (m = a(t))),
            (i = u.bind(null, n, o, !1)),
            (r = u.bind(null, n, o, !0));
        } else
          e.sourceMap &&
          "function" == typeof URL &&
          "function" == typeof URL.createObjectURL &&
          "function" == typeof URL.revokeObjectURL &&
          "function" == typeof Blob &&
          "function" == typeof btoa
            ? ((n = c(t)),
              (i = p.bind(null, n)),
              (r = function() {
                s(n), n.href && URL.revokeObjectURL(n.href);
              }))
            : ((n = a(t)),
              (i = d.bind(null, n)),
              (r = function() {
                s(n);
              }));
        return (
          i(e),
          function(t) {
            if (t) {
              if (
                t.css === e.css &&
                t.media === e.media &&
                t.sourceMap === e.sourceMap
              )
                return;
              i((e = t));
            } else r();
          }
        );
      }
      function u(e, t, n, i) {
        var r = n ? "" : i.css;
        if (e.styleSheet) e.styleSheet.cssText = b(t, r);
        else {
          var o = document.createTextNode(r),
            s = e.childNodes;
          s[t] && e.removeChild(s[t]),
            s.length ? e.insertBefore(o, s[t]) : e.appendChild(o);
        }
      }
      function d(e, t) {
        var n = t.css,
          i = t.media;
        if ((i && e.setAttribute("media", i), e.styleSheet))
          e.styleSheet.cssText = n;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(n));
        }
      }
      function p(e, t) {
        var n = t.css,
          i = t.sourceMap;
        i &&
          (n +=
            "\n/*# sourceMappingURL=data:application/json;base64," +
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
            " */");
        var r = new Blob([n], { type: "text/css" }),
          o = e.href;
        (e.href = URL.createObjectURL(r)), o && URL.revokeObjectURL(o);
      }
      var f = {},
        h = function(e) {
          var t;
          return function() {
            return "undefined" == typeof t && (t = e.apply(this, arguments)), t;
          };
        },
        v = h(function() {
          return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
        }),
        g = h(function() {
          return document.head || document.getElementsByTagName("head")[0];
        }),
        m = null,
        y = 0,
        x = [];
      e.exports = function(e, t) {
        (t = t || {}),
          "undefined" == typeof t.singleton && (t.singleton = v()),
          "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
        var n = r(e);
        return (
          i(n, t),
          function(e) {
            for (var o = [], s = 0; s < n.length; s++) {
              var a = n[s],
                c = f[a.id];
              c.refs--, o.push(c);
            }
            if (e) {
              var l = r(e);
              i(l, t);
            }
            for (var s = 0; s < o.length; s++) {
              var c = o[s];
              if (0 === c.refs) {
                for (var u = 0; u < c.parts.length; u++) c.parts[u]();
                delete f[c.id];
              }
            }
          }
        );
      };
      var b = (function() {
        var e = [];
        return function(t, n) {
          return (e[t] = n), e.filter(Boolean).join("\n");
        };
      })();
    },
    [15, 13],
    function(e, t, n) {
      (t = e.exports = n(10)()),
        t.push([
          e.id,
          `body {
            font-family: Arial, sans-serif;
          }
          .header,
          h1 {
            color: #101027;
            font-size: 200%;
            font-weight: 400;
            margin: 0.67em 0;
          }
          .focusable,
          canvas {
            border: 3px solid transparent;
          }
          .focusable:focus,
          button:focus,
          canvas:focus {
            outline: none;
            border: 3px solid #555;
          }
          .text,
          p {
            font-size: 100%;
            margin: 1em 0;
          }
          button {
            font-size: 80%;
            height: 35px;
            background-color: #23c495;
            border: none;
            color: white;
            padding: 10px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 12px;
            margin: 4px 6px;
            border-radius: 30px;
            border: 1px solid #adadad;
            box-sizing: border-box;
          }
          button:disabled {
            background: #d3d3d3;
            border: 1px solid #bcbcbc;
          }
          button::-moz-focus-inner {
            border: 0;
          }
          .navigation {
            width: 0;
            height: 0;
            padding: 0;
            margin: 0;
            overflow: hidden;
          }
          `,
          ""
        ]);
    },
    function(e, t) {
      e.exports = `<div id="comp">
        <div aria-labelledby="navigation">
          \r\n
          <div class="applet">
            \r\n
            <div class="buttons" role="presentation" id="buttons-navigation">
              \r\n
              <button class="send-new" aria-label="Send New">Send New</button>\r\n
              <button class="pause">Pause</button>\r\n
              <button class="killpacket-ack" aria-label="Kill Packet/Ack">
                Kill Packet/Ack</button
              >\r\n <button class="reset" role="button">Reset</button>\r\n
            </div>
            \r\n\r\n
            <div class="animation" aria-hidden="true">
              \r\n <canvas width="450" height="340"></canvas>\r\n
              <div class="top-label" aria-hidden="true">
                \r\n
                <p class="blue"> Sender <br/> (Send Window Size = 5) </p>
                \r\n\r\n
                <p class="blue bottom-label" style="margin-top:200px;">
                  Receiver
                </p>
                \r\n
              </div>
              \r\n
            </div>
            \r\n
          </div>
          \r\n
          <div class="footer"  aria-hidden="true">
            \r\n
            <div class="legend" style=" border-radius: 25px;" aria-hidden="true">
              \r\n
              <div class="block">
                \r\n
                <div class="rect skyblue"></div>
                \r\n
                <p aria-label="blue - packet.">Packet</p>
                \r\n
              </div>
              \r\n
              <div class="block">
                \r\n
                <div class="rect red"></div>
                \r\n
                <p aria-label="red - Received.">Received</p>
                \r\n
              </div>
              \r\n
              <div class="block">
                \r\n
                <div class="rect yellow"></div>
                \r\n
                <p aria-hidden="true" aria-label="yellow - ack.">Ack</p>
                \r\n
              </div>
              \r\n
              <div class="block">
                \r\n
                <div class="rect blue"></div>
                \r\n
                <p aria-label="blue - ack received.">Ack Received</p>
                \r\n
              </div>
              \r\n
              <div class="block">
                \r\n
                <div class="rect lime"></div>
                \r\n
                <p aria-label="green - Selected.">Selected</p>
                \r\n
              </div>
              \r\n
            </div>
            \r\n
            <div class="log-container" tabindex="-1" aria-hidden="true">
              \r\n
              <textarea
                tabindex="-1"
                id="log-textarea"
                rows="0"
                aria-hidden="true"
                readonly
                style="display:none;"
              ></textarea
              >\r\n
            </div>
            \r\n
          </div>
          \r\n
        </div>
        \r\n
      </div>
      \r\n
       `;
    },
    function(e, t, n, i) {
      var r = n(i);
      "string" == typeof r && (r = [[e.id, r, ""]]);
      n(11)(r, {});
      r.locals && (e.exports = r.locals);
    }
  ])
);
