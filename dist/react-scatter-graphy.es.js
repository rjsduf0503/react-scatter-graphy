import De, { useRef as fr, useState as J, useLayoutEffect as cr } from "react";
import { css as ne } from "@emotion/react";
import $e from "@emotion/styled";
var ae = {}, dr = {
  get exports() {
    return ae;
  },
  set exports(u) {
    ae = u;
  }
}, N = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function vr() {
  if (Pe)
    return N;
  Pe = 1;
  var u = De, g = Symbol.for("react.element"), S = Symbol.for("react.fragment"), x = Object.prototype.hasOwnProperty, d = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(p, l, O) {
    var v, h = {}, R = null, E = null;
    O !== void 0 && (R = "" + O), l.key !== void 0 && (R = "" + l.key), l.ref !== void 0 && (E = l.ref);
    for (v in l)
      x.call(l, v) && !_.hasOwnProperty(v) && (h[v] = l[v]);
    if (p && p.defaultProps)
      for (v in l = p.defaultProps, l)
        h[v] === void 0 && (h[v] = l[v]);
    return { $$typeof: g, type: p, key: R, ref: E, props: h, _owner: d.current };
  }
  return N.Fragment = S, N.jsx = y, N.jsxs = y, N;
}
var U = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function pr() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && function() {
    var u = De, g = Symbol.for("react.element"), S = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), p = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), w = Symbol.iterator, D = "@@iterator";
    function F(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = w && e[w] || e[D];
      return typeof r == "function" ? r : null;
    }
    var k = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        C("error", e, t);
      }
    }
    function C(e, r, t) {
      {
        var n = k.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var W = !1, M = !1, Fe = !1, Ae = !1, Ie = !1, oe;
    oe = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === x || e === _ || Ie || e === d || e === O || e === v || Ae || e === E || W || M || Fe || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === h || e.$$typeof === y || e.$$typeof === p || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === oe || e.getModuleId !== void 0));
    }
    function Me(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ie(e) {
      return e.displayName || "Context";
    }
    function P(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case x:
          return "Fragment";
        case S:
          return "Portal";
        case _:
          return "Profiler";
        case d:
          return "StrictMode";
        case O:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            var r = e;
            return ie(r) + ".Consumer";
          case y:
            var t = e;
            return ie(t._context) + ".Provider";
          case l:
            return Me(e, e.render, "ForwardRef");
          case h:
            var n = e.displayName || null;
            return n !== null ? n : P(e.type) || "Memo";
          case R: {
            var i = e, s = i._payload, o = i._init;
            try {
              return P(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, Y = 0, ue, se, le, fe, ce, de, ve;
    function pe() {
    }
    pe.__reactDisabledLog = !0;
    function Ye() {
      {
        if (Y === 0) {
          ue = console.log, se = console.info, le = console.warn, fe = console.error, ce = console.group, de = console.groupCollapsed, ve = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: pe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Y++;
      }
    }
    function Le() {
      {
        if (Y--, Y === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, e, {
              value: ue
            }),
            info: $({}, e, {
              value: se
            }),
            warn: $({}, e, {
              value: le
            }),
            error: $({}, e, {
              value: fe
            }),
            group: $({}, e, {
              value: ce
            }),
            groupCollapsed: $({}, e, {
              value: de
            }),
            groupEnd: $({}, e, {
              value: ve
            })
          });
        }
        Y < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = k.ReactCurrentDispatcher, K;
    function V(e, r, t) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            K = n && n[1] || "";
          }
        return `
` + K + e;
      }
    }
    var Z = !1, B;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      B = new Ne();
    }
    function he(e, r) {
      if (!e || Z)
        return "";
      {
        var t = B.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Z = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = X.current, X.current = null, Ye();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (j) {
              n = j;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (j) {
              n = j;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (j) {
            n = j;
          }
          e();
        }
      } catch (j) {
        if (j && n && typeof j.stack == "string") {
          for (var a = j.stack.split(`
`), b = n.stack.split(`
`), f = a.length - 1, c = b.length - 1; f >= 1 && c >= 0 && a[f] !== b[c]; )
            c--;
          for (; f >= 1 && c >= 0; f--, c--)
            if (a[f] !== b[c]) {
              if (f !== 1 || c !== 1)
                do
                  if (f--, c--, c < 0 || a[f] !== b[c]) {
                    var T = `
` + a[f].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, T), T;
                  }
                while (f >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        Z = !1, X.current = s, Le(), Error.prepareStackTrace = i;
      }
      var I = e ? e.displayName || e.name : "", Se = I ? V(I) : "";
      return typeof e == "function" && B.set(e, Se), Se;
    }
    function Ue(e, r, t) {
      return he(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function q(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return he(e, Ve(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case O:
          return V("Suspense");
        case v:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Ue(e.render);
          case h:
            return q(e.type, r, t);
          case R: {
            var n = e, i = n._payload, s = n._init;
            try {
              return q(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var G = Object.prototype.hasOwnProperty, me = {}, ge = k.ReactDebugCurrentFrame;
    function H(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, i) {
      {
        var s = Function.call.bind(G);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var b = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (f) {
              a = f;
            }
            a && !(a instanceof Error) && (H(i), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), H(null)), a instanceof Error && !(a.message in me) && (me[a.message] = !0, H(i), m("Failed %s type: %s", t, a.message), H(null));
          }
      }
    }
    var qe = Array.isArray;
    function z(e) {
      return qe(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function He(e) {
      try {
        return be(e), !1;
      } catch {
        return !0;
      }
    }
    function be(e) {
      return "" + e;
    }
    function ye(e) {
      if (He(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), be(e);
    }
    var L = k.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, Re, Q;
    Q = {};
    function Xe(e) {
      if (G.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ke(e) {
      if (G.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      if (typeof e.ref == "string" && L.current && r && L.current.stateNode !== r) {
        var t = P(L.current.type);
        Q[t] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(L.current.type), e.ref), Q[t] = !0);
      }
    }
    function ze(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          Re || (Re = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, i, s, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: g,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function rr(e, r, t, n, i) {
      {
        var s, o = {}, a = null, b = null;
        t !== void 0 && (ye(t), a = "" + t), Ke(r) && (ye(r.key), a = "" + r.key), Xe(r) && (b = r.ref, Ze(r, i));
        for (s in r)
          G.call(r, s) && !Je.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var f = e.defaultProps;
          for (s in f)
            o[s] === void 0 && (o[s] = f[s]);
        }
        if (a || b) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && ze(o, c), b && Qe(o, c);
        }
        return er(e, a, b, i, n, L.current, o);
      }
    }
    var ee = k.ReactCurrentOwner, _e = k.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(t);
      } else
        _e.setExtraStackFrame(null);
    }
    var re;
    re = !1;
    function te(e) {
      return typeof e == "object" && e !== null && e.$$typeof === g;
    }
    function Te() {
      {
        if (ee.current) {
          var e = P(ee.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var xe = {};
    function nr(e) {
      {
        var r = Te();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function we(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (xe[t])
          return;
        xe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== ee.current && (n = " It was passed a child from " + P(e._owner.type) + "."), A(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), A(null);
      }
    }
    function Oe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            te(n) && we(n, r);
          }
        else if (te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = F(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              te(o.value) && we(o.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === h))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = P(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !re) {
          re = !0;
          var i = P(r);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            A(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    function Ce(e, r, t, n, i, s) {
      {
        var o = We(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = tr(i);
          b ? a += b : a += Te();
          var f;
          e === null ? f = "null" : z(e) ? f = "array" : e !== void 0 && e.$$typeof === g ? (f = "<" + (P(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, a);
        }
        var c = rr(e, r, t, i, s);
        if (c == null)
          return c;
        if (o) {
          var T = r.children;
          if (T !== void 0)
            if (n)
              if (z(T)) {
                for (var I = 0; I < T.length; I++)
                  Oe(T[I], e);
                Object.freeze && Object.freeze(T);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Oe(T, e);
        }
        return e === x ? or(c) : ar(c), c;
      }
    }
    function ir(e, r, t) {
      return Ce(e, r, t, !0);
    }
    function ur(e, r, t) {
      return Ce(e, r, t, !1);
    }
    var sr = ur, lr = ir;
    U.Fragment = x, U.jsx = sr, U.jsxs = lr;
  }()), U;
}
(function(u) {
  process.env.NODE_ENV === "production" ? u.exports = vr() : u.exports = pr();
})(dr);
const ke = ae.jsx;
function hr({ maxWidth: u, maxHeight: g }) {
  return [Math.floor(Math.random() * u), Math.floor(Math.random() * g)];
}
function mr({ maxWidth: u, size: g, src: S, callback: x }) {
  const d = new Image();
  d.crossOrigin = "Anonymous", d.style.imageRendering = "crisp-edges", d.onload = () => {
    const _ = document.createElement("canvas"), y = _.getContext("2d");
    if (!y)
      return;
    const p = u, l = d.height * u / d.width;
    _.width = p, _.height = l, y.scale(0.5 / g, 0.5 / g), y.imageSmoothingEnabled = !1, y.drawImage(d, 0, 0, p * 2, l * 2);
    const O = y.getImageData(0, 0, p, l), v = new Uint8Array(O.data);
    let h = p, R = 0, E = l, w = 0;
    const D = [];
    for (let C = 0; C < v.length; C += 4)
      if (v[C + 3] !== 0) {
        const W = C / 4 % p, M = Math.floor(C / 4 / p);
        h = Math.min(W, h), R = Math.max(W, R), E = Math.min(M, E), w = Math.max(M, w), D.push([W, M]);
      }
    const F = R - h, k = w - E, m = D.map((C) => [
      (C[0] - h) * p / F,
      (C[1] - E) * l / k
    ]);
    x({ error: null, coords: m, height: l });
  }, d.onerror = (_) => {
    x({ error: _ });
  }, d.src = S;
}
const gr = $e.div`
  position: relative;
  display: block;
  width: 100%;
`, br = $e.span`
  position: absolute;

  ${({ randomCoord: u }) => u && ne`
      top: ${u[1]}px;
      left: ${u[0]}px;
    `}

  display: inline-block;
  background-color: ${({ color: u }) => u};
  transition: ${({ duration: u }) => `ease ${u}ms ${u}ms`};

  ${({ size: u }) => u && ne`
      width: ${u}px;
      height: ${u}px;
    `}

  ${({ isHovered: u, coord: g }) => u && ne`
      top: ${g[1]}px;
      left: ${g[0]}px;
    `}
`;
function _r({ src: u, duration: g = 500, size: S = 4, color: x = "black" }) {
  const d = fr(null), [_, y] = J(!1), [p, l] = J([]), [O, v] = J(0), [h, R] = J(0);
  return cr(() => {
    if (!d.current || !d.current.parentElement)
      return;
    const E = d.current.parentElement.clientWidth;
    v(E), mr({
      maxWidth: E,
      size: S,
      src: u,
      callback: ({ error: w, coords: D, height: F }) => {
        if (w || !D || !F) {
          console.error(w);
          return;
        }
        l(D), R(F);
      }
    });
  }, [S]), /* @__PURE__ */ ke(
    gr,
    {
      onMouseOver: () => y(!0),
      onMouseLeave: () => y(!1),
      style: {
        height: `${h}px`
      },
      ref: d,
      children: p.map((E, w) => /* @__PURE__ */ ke(
        br,
        {
          isHovered: _,
          size: S,
          duration: g,
          color: x,
          coord: E,
          randomCoord: hr({ maxWidth: O, maxHeight: h })
        },
        w
      ))
    }
  );
}
export {
  _r as ScatterGraphy
};
