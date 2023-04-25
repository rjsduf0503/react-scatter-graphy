import Fe, { useRef as cr, useState as U, useLayoutEffect as fr } from "react";
import { css as oe } from "@emotion/react";
import Ae from "@emotion/styled";
var ie = {}, dr = {
  get exports() {
    return ie;
  },
  set exports(s) {
    ie = s;
  }
}, V = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function vr() {
  if (ke)
    return V;
  ke = 1;
  var s = Fe, b = Symbol.for("react.element"), D = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, E = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(c, f, S) {
    var m, y = {}, _ = null, w = null;
    S !== void 0 && (_ = "" + S), f.key !== void 0 && (_ = "" + f.key), f.ref !== void 0 && (w = f.ref);
    for (m in f)
      h.call(f, m) && !R.hasOwnProperty(m) && (y[m] = f[m]);
    if (c && c.defaultProps)
      for (m in f = c.defaultProps, f)
        y[m] === void 0 && (y[m] = f[m]);
    return { $$typeof: b, type: c, key: _, ref: w, props: y, _owner: E.current };
  }
  return V.Fragment = D, V.jsx = l, V.jsxs = l, V;
}
var q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function pr() {
  return De || (De = 1, process.env.NODE_ENV !== "production" && function() {
    var s = Fe, b = Symbol.for("react.element"), D = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), $ = Symbol.iterator, O = "@@iterator";
    function C(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = $ && e[$] || e[O];
      return typeof r == "function" ? r : null;
    }
    var x = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        F("error", e, t);
      }
    }
    function F(e, r, t) {
      {
        var n = x.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var X = !1, P = !1, W = !1, Y = !1, Ie = !1, se;
    se = Symbol.for("react.module.reference");
    function Me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === R || Ie || e === E || e === S || e === m || Y || e === w || X || P || W || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === y || e.$$typeof === l || e.$$typeof === c || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === se || e.getModuleId !== void 0));
    }
    function We(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ue(e) {
      return e.displayName || "Context";
    }
    function j(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case D:
          return "Portal";
        case R:
          return "Profiler";
        case E:
          return "StrictMode";
        case S:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            var r = e;
            return ue(r) + ".Consumer";
          case l:
            var t = e;
            return ue(t._context) + ".Provider";
          case f:
            return We(e, e.render, "ForwardRef");
          case y:
            var n = e.displayName || null;
            return n !== null ? n : j(e.type) || "Memo";
          case _: {
            var i = e, u = i._payload, o = i._init;
            try {
              return j(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, L = 0, le, ce, fe, de, ve, pe, he;
    function me() {
    }
    me.__reactDisabledLog = !0;
    function Ye() {
      {
        if (L === 0) {
          le = console.log, ce = console.info, fe = console.warn, de = console.error, ve = console.group, pe = console.groupCollapsed, he = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: me,
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
        L++;
      }
    }
    function Le() {
      {
        if (L--, L === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, e, {
              value: le
            }),
            info: A({}, e, {
              value: ce
            }),
            warn: A({}, e, {
              value: fe
            }),
            error: A({}, e, {
              value: de
            }),
            group: A({}, e, {
              value: ve
            }),
            groupCollapsed: A({}, e, {
              value: pe
            }),
            groupEnd: A({}, e, {
              value: he
            })
          });
        }
        L < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = x.ReactCurrentDispatcher, Z;
    function B(e, r, t) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            Z = n && n[1] || "";
          }
        return `
` + Z + e;
      }
    }
    var Q = !1, z;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      z = new Ne();
    }
    function ge(e, r) {
      if (!e || Q)
        return "";
      {
        var t = z.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Q = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = K.current, K.current = null, Ye();
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
            } catch (k) {
              n = k;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (k) {
              n = k;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (k) {
            n = k;
          }
          e();
        }
      } catch (k) {
        if (k && n && typeof k.stack == "string") {
          for (var a = k.stack.split(`
`), g = n.stack.split(`
`), v = a.length - 1, p = g.length - 1; v >= 1 && p >= 0 && a[v] !== g[p]; )
            p--;
          for (; v >= 1 && p >= 0; v--, p--)
            if (a[v] !== g[p]) {
              if (v !== 1 || p !== 1)
                do
                  if (v--, p--, p < 0 || a[v] !== g[p]) {
                    var T = `
` + a[v].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && z.set(e, T), T;
                  }
                while (v >= 1 && p >= 0);
              break;
            }
        }
      } finally {
        Q = !1, K.current = u, Le(), Error.prepareStackTrace = i;
      }
      var M = e ? e.displayName || e.name : "", je = M ? B(M) : "";
      return typeof e == "function" && z.set(e, je), je;
    }
    function Ue(e, r, t) {
      return ge(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function H(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ge(e, Ve(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case S:
          return B("Suspense");
        case m:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Ue(e.render);
          case y:
            return H(e.type, r, t);
          case _: {
            var n = e, i = n._payload, u = n._init;
            try {
              return H(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var G = Object.prototype.hasOwnProperty, be = {}, ye = x.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, t = H(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    function qe(e, r, t, n, i) {
      {
        var u = Function.call.bind(G);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var g = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              a = v;
            }
            a && !(a instanceof Error) && (J(i), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), J(null)), a instanceof Error && !(a.message in be) && (be[a.message] = !0, J(i), d("Failed %s type: %s", t, a.message), J(null));
          }
      }
    }
    var Be = Array.isArray;
    function ee(e) {
      return Be(e);
    }
    function ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function He(e) {
      try {
        return Ee(e), !1;
      } catch {
        return !0;
      }
    }
    function Ee(e) {
      return "" + e;
    }
    function Re(e) {
      if (He(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), Ee(e);
    }
    var N = x.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, xe, re;
    re = {};
    function Je(e) {
      if (G.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (G.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ke(e, r) {
      if (typeof e.ref == "string" && N.current && r && N.current.stateNode !== r) {
        var t = j(N.current.type);
        re[t] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(N.current.type), e.ref), re[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          _e || (_e = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          xe || (xe = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: b,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
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
        var u, o = {}, a = null, g = null;
        t !== void 0 && (Re(t), a = "" + t), Xe(r) && (Re(r.key), a = "" + r.key), Je(r) && (g = r.ref, Ke(r, i));
        for (u in r)
          G.call(r, u) && !Ge.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (u in v)
            o[u] === void 0 && (o[u] = v[u]);
        }
        if (a || g) {
          var p = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(o, p), g && Qe(o, p);
        }
        return er(e, a, g, i, n, N.current, o);
      }
    }
    var te = x.ReactCurrentOwner, Te = x.ReactDebugCurrentFrame;
    function I(e) {
      if (e) {
        var r = e._owner, t = H(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(t);
      } else
        Te.setExtraStackFrame(null);
    }
    var ne;
    ne = !1;
    function ae(e) {
      return typeof e == "object" && e !== null && e.$$typeof === b;
    }
    function we() {
      {
        if (te.current) {
          var e = j(te.current.type);
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
    var Oe = {};
    function nr(e) {
      {
        var r = we();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Se(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (Oe[t])
          return;
        Oe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== te.current && (n = " It was passed a child from " + j(e._owner.type) + "."), I(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), I(null);
      }
    }
    function Ce(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ee(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ae(n) && Se(n, r);
          }
        else if (ae(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = C(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              ae(o.value) && Se(o.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === y))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = j(r);
          qe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ne) {
          ne = !0;
          var i = j(r);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            I(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), I(null);
            break;
          }
        }
        e.ref !== null && (I(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
      }
    }
    function Pe(e, r, t, n, i, u) {
      {
        var o = Me(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var g = tr(i);
          g ? a += g : a += we();
          var v;
          e === null ? v = "null" : ee(e) ? v = "array" : e !== void 0 && e.$$typeof === b ? (v = "<" + (j(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, a);
        }
        var p = rr(e, r, t, i, u);
        if (p == null)
          return p;
        if (o) {
          var T = r.children;
          if (T !== void 0)
            if (n)
              if (ee(T)) {
                for (var M = 0; M < T.length; M++)
                  Ce(T[M], e);
                Object.freeze && Object.freeze(T);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(T, e);
        }
        return e === h ? or(p) : ar(p), p;
      }
    }
    function ir(e, r, t) {
      return Pe(e, r, t, !0);
    }
    function sr(e, r, t) {
      return Pe(e, r, t, !1);
    }
    var ur = sr, lr = ir;
    q.Fragment = h, q.jsx = ur, q.jsxs = lr;
  }()), q;
}
(function(s) {
  process.env.NODE_ENV === "production" ? s.exports = vr() : s.exports = pr();
})(dr);
const $e = ie.jsx;
function hr({ maxWidth: s, maxHeight: b }) {
  return [Math.floor(Math.random() * s), Math.floor(Math.random() * b)];
}
function mr({ maxWidth: s, src: b, callback: D }) {
  const h = new Image(), E = document.createElement("canvas"), R = E.getContext("2d");
  h.crossOrigin = "Anonymous", h.style.imageRendering = "crisp-edges", h.onload = () => {
    if (!R)
      return;
    const l = s, c = h.height * s / h.width, f = l >= c, S = f ? h.width / l / 10 : h.height / c / 10, m = Math.sqrt(l * c) / (f ? l : c) * S;
    E.width = l, E.height = c, R.scale(m, m), R.imageSmoothingEnabled = !1, R.drawImage(h, 0, 0, l, c);
    const y = R.getImageData(0, 0, l, c), _ = new Uint8Array(y.data);
    let w = l, $ = 0, O = c, C = 0;
    const x = [];
    for (let P = 0; P < _.length; P += 4)
      if (_[P + 3] !== 0) {
        const W = P / 4 % l, Y = Math.floor(P / 4 / l);
        w = Math.min(W, w), $ = Math.max(W, $), O = Math.min(Y, O), C = Math.max(Y, C), x.push([W, Y]);
      }
    const d = $ - w, F = C - O, X = x.map((P) => [
      (P[0] - w) * l / d,
      (P[1] - O) * c / F
    ]);
    D({ error: null, coords: X, height: c, pixelSize: f ? l / d : c / F });
  }, h.onerror = (l) => {
    D({ error: l });
  }, h.src = b;
}
const gr = Ae.div`
  position: relative;
  display: block;
  width: 100%;
`, br = Ae.span`
  position: absolute;

  ${({ randomCoord: s }) => s && oe`
      top: ${s[1]}px;
      left: ${s[0]}px;
    `}

  display: inline-block;
  background-color: ${({ color: s }) => s};
  transition: ${({ duration: s }) => `ease ${s}ms ${s}ms`};

  ${({ size: s }) => s && oe`
      width: ${s}px;
      height: ${s}px;
    `}

  ${({ isHovered: s, coord: b }) => s && oe`
      top: ${b[1]}px;
      left: ${b[0]}px;
    `}
`;
function _r({ src: s, duration: b = 500, size: D = 1, color: h = "black" }) {
  const E = cr(null), [R, l] = U(!1), [c, f] = U([]), [S, m] = U(0), [y, _] = U(0), [w, $] = U(1);
  return fr(() => {
    if (!E.current || !E.current.parentElement)
      return;
    const O = E.current.parentElement.clientWidth;
    m(O), mr({
      maxWidth: O,
      src: s,
      callback: ({ error: C, coords: x, height: d, pixelSize: F }) => {
        if (C || !x || !d || !F) {
          console.error(C);
          return;
        }
        f(x), _(d), $(D * F);
      }
    });
  }, []), /* @__PURE__ */ $e(
    gr,
    {
      onMouseOver: () => l(!0),
      onMouseLeave: () => l(!1),
      style: {
        height: `${y}px`
      },
      ref: E,
      children: c.map((O, C) => /* @__PURE__ */ $e(
        br,
        {
          isHovered: R,
          size: w,
          duration: b,
          color: h,
          coord: O,
          randomCoord: hr({ maxWidth: S, maxHeight: y })
        },
        C
      ))
    }
  );
}
export {
  _r as ScatterGraphy
};
