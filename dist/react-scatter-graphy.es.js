import Ye, { useRef as dr, useState as B, useCallback as Fe, useMemo as vr, useEffect as pr } from "react";
import { css as ce } from "@emotion/react";
import Le from "@emotion/styled";
var fe = {}, hr = {
  get exports() {
    return fe;
  },
  set exports(o) {
    fe = o;
  }
}, q = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function mr() {
  if (Ae)
    return q;
  Ae = 1;
  var o = Ye, E = Symbol.for("react.element"), g = Symbol.for("react.fragment"), T = Object.prototype.hasOwnProperty, O = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(c, u, S) {
    var m, _ = {}, b = null, j = null;
    S !== void 0 && (b = "" + S), u.key !== void 0 && (b = "" + u.key), u.ref !== void 0 && (j = u.ref);
    for (m in u)
      T.call(u, m) && !h.hasOwnProperty(m) && (_[m] = u[m]);
    if (c && c.defaultProps)
      for (m in u = c.defaultProps, u)
        _[m] === void 0 && (_[m] = u[m]);
    return { $$typeof: E, type: c, key: b, ref: j, props: _, _owner: O.current };
  }
  return q.Fragment = g, q.jsx = y, q.jsxs = y, q;
}
var G = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function gr() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && function() {
    var o = Ye, E = Symbol.for("react.element"), g = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), w = Symbol.iterator, A = "@@iterator";
    function k(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = w && e[w] || e[A];
      return typeof r == "function" ? r : null;
    }
    var x = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        C("error", e, t);
      }
    }
    function C(e, r, t) {
      {
        var n = x.ReactDebugCurrentFrame, s = n.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var l = t.map(function(i) {
          return String(i);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var I = !1, W = !1, Y = !1, ee = !1, p = !1, L;
    L = Symbol.for("react.module.reference");
    function V(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === T || e === h || p || e === O || e === S || e === m || ee || e === j || I || W || Y || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === _ || e.$$typeof === y || e.$$typeof === c || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === L || e.getModuleId !== void 0));
    }
    function re(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function H(e) {
      return e.displayName || "Context";
    }
    function $(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case T:
          return "Fragment";
        case g:
          return "Portal";
        case h:
          return "Profiler";
        case O:
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
            return H(r) + ".Consumer";
          case y:
            var t = e;
            return H(t._context) + ".Provider";
          case u:
            return re(e, e.render, "ForwardRef");
          case _:
            var n = e.displayName || null;
            return n !== null ? n : $(e.type) || "Memo";
          case b: {
            var s = e, l = s._payload, i = s._init;
            try {
              return $(i(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, M = 0, de, ve, pe, he, me, ge, be;
    function Ee() {
    }
    Ee.__reactDisabledLog = !0;
    function Ne() {
      {
        if (M === 0) {
          de = console.log, ve = console.info, pe = console.warn, he = console.error, me = console.group, ge = console.groupCollapsed, be = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ee,
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
        M++;
      }
    }
    function Ue() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: de
            }),
            info: D({}, e, {
              value: ve
            }),
            warn: D({}, e, {
              value: pe
            }),
            error: D({}, e, {
              value: he
            }),
            group: D({}, e, {
              value: me
            }),
            groupCollapsed: D({}, e, {
              value: ge
            }),
            groupEnd: D({}, e, {
              value: be
            })
          });
        }
        M < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var te = x.ReactCurrentDispatcher, ne;
    function J(e, r, t) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            ne = n && n[1] || "";
          }
        return `
` + ne + e;
      }
    }
    var ae = !1, X;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      X = new Ve();
    }
    function ye(e, r) {
      if (!e || ae)
        return "";
      {
        var t = X.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      ae = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = te.current, te.current = null, Ne();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (F) {
              n = F;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (F) {
              n = F;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (F) {
            n = F;
          }
          e();
        }
      } catch (F) {
        if (F && n && typeof F.stack == "string") {
          for (var a = F.stack.split(`
`), R = n.stack.split(`
`), d = a.length - 1, v = R.length - 1; d >= 1 && v >= 0 && a[d] !== R[v]; )
            v--;
          for (; d >= 1 && v >= 0; d--, v--)
            if (a[d] !== R[v]) {
              if (d !== 1 || v !== 1)
                do
                  if (d--, v--, v < 0 || a[d] !== R[v]) {
                    var P = `
` + a[d].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && X.set(e, P), P;
                  }
                while (d >= 1 && v >= 0);
              break;
            }
        }
      } finally {
        ae = !1, te.current = l, Ue(), Error.prepareStackTrace = s;
      }
      var U = e ? e.displayName || e.name : "", De = U ? J(U) : "";
      return typeof e == "function" && X.set(e, De), De;
    }
    function ze(e, r, t) {
      return ye(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function K(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ye(e, Be(e));
      if (typeof e == "string")
        return J(e);
      switch (e) {
        case S:
          return J("Suspense");
        case m:
          return J("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return ze(e.render);
          case _:
            return K(e.type, r, t);
          case b: {
            var n = e, s = n._payload, l = n._init;
            try {
              return K(l(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Z = Object.prototype.hasOwnProperty, Re = {}, _e = x.ReactDebugCurrentFrame;
    function Q(e) {
      if (e) {
        var r = e._owner, t = K(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(t);
      } else
        _e.setExtraStackFrame(null);
    }
    function qe(e, r, t, n, s) {
      {
        var l = Function.call.bind(Z);
        for (var i in e)
          if (l(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var R = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (d) {
              a = d;
            }
            a && !(a instanceof Error) && (Q(s), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), Q(null)), a instanceof Error && !(a.message in Re) && (Re[a.message] = !0, Q(s), f("Failed %s type: %s", t, a.message), Q(null));
          }
      }
    }
    var Ge = Array.isArray;
    function oe(e) {
      return Ge(e);
    }
    function He(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Je(e) {
      try {
        return we(e), !1;
      } catch {
        return !0;
      }
    }
    function we(e) {
      return "" + e;
    }
    function xe(e) {
      if (Je(e))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", He(e)), we(e);
    }
    var z = x.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Te, Se, ie;
    ie = {};
    function Ke(e) {
      if (Z.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (Z.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      if (typeof e.ref == "string" && z.current && r && z.current.stateNode !== r) {
        var t = $(z.current.type);
        ie[t] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', $(z.current.type), e.ref), ie[t] = !0);
      }
    }
    function er(e, r) {
      {
        var t = function() {
          Te || (Te = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          Se || (Se = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, s, l, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: E,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: l
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
        value: s
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function nr(e, r, t, n, s) {
      {
        var l, i = {}, a = null, R = null;
        t !== void 0 && (xe(t), a = "" + t), Ze(r) && (xe(r.key), a = "" + r.key), Ke(r) && (R = r.ref, Qe(r, s));
        for (l in r)
          Z.call(r, l) && !Xe.hasOwnProperty(l) && (i[l] = r[l]);
        if (e && e.defaultProps) {
          var d = e.defaultProps;
          for (l in d)
            i[l] === void 0 && (i[l] = d[l]);
        }
        if (a || R) {
          var v = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && er(i, v), R && rr(i, v);
        }
        return tr(e, a, R, s, n, z.current, i);
      }
    }
    var se = x.ReactCurrentOwner, Ce = x.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, t = K(e.type, e._source, r ? r.type : null);
        Ce.setExtraStackFrame(t);
      } else
        Ce.setExtraStackFrame(null);
    }
    var ue;
    ue = !1;
    function le(e) {
      return typeof e == "object" && e !== null && e.$$typeof === E;
    }
    function Pe() {
      {
        if (se.current) {
          var e = $(se.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
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
    function or(e) {
      {
        var r = Pe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function je(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = or(r);
        if (Oe[t])
          return;
        Oe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== se.current && (n = " It was passed a child from " + $(e._owner.type) + "."), N(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), N(null);
      }
    }
    function ke(e, r) {
      {
        if (typeof e != "object")
          return;
        if (oe(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            le(n) && je(n, r);
          }
        else if (le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = k(e);
          if (typeof s == "function" && s !== e.entries)
            for (var l = s.call(e), i; !(i = l.next()).done; )
              le(i.value) && je(i.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === _))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = $(r);
          qe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ue) {
          ue = !0;
          var s = $(r);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            N(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), N(null);
            break;
          }
        }
        e.ref !== null && (N(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    function $e(e, r, t, n, s, l) {
      {
        var i = V(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = ar(s);
          R ? a += R : a += Pe();
          var d;
          e === null ? d = "null" : oe(e) ? d = "array" : e !== void 0 && e.$$typeof === E ? (d = "<" + ($(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, a);
        }
        var v = nr(e, r, t, s, l);
        if (v == null)
          return v;
        if (i) {
          var P = r.children;
          if (P !== void 0)
            if (n)
              if (oe(P)) {
                for (var U = 0; U < P.length; U++)
                  ke(P[U], e);
                Object.freeze && Object.freeze(P);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(P, e);
        }
        return e === T ? sr(v) : ir(v), v;
      }
    }
    function ur(e, r, t) {
      return $e(e, r, t, !0);
    }
    function lr(e, r, t) {
      return $e(e, r, t, !1);
    }
    var cr = lr, fr = ur;
    G.Fragment = T, G.jsx = cr, G.jsxs = fr;
  }()), G;
}
(function(o) {
  process.env.NODE_ENV === "production" ? o.exports = mr() : o.exports = gr();
})(hr);
const Me = fe.jsx, br = Le.div`
  position: relative;
  display: block;
  width: 100%;
`, Er = Le.span`
  position: absolute;

  ${({ randomCoord: o }) => o && ce`
      top: ${o[1]}px;
      left: ${o[0]}px;
    `}

  display: inline-block;
  background-color: ${({ color: o }) => o};
  transition: ${({ duration: o }) => `ease ${o}ms ${o}ms`};

  ${({ size: o }) => o && ce`
      width: ${o}px;
      height: ${o}px;
    `}

  ${({ isHovered: o, coord: E }) => o && ce`
      top: ${E[1]}px;
      left: ${E[0]}px;
    `}
`;
function yr({ maxWidth: o, maxHeight: E }) {
  return [Math.floor(Math.random() * o), Math.floor(Math.random() * E)];
}
function Rr(o, E) {
  let g;
  return function(...O) {
    g && clearTimeout(g), g = setTimeout(() => {
      o(...O);
    }, E);
  };
}
const We = 2e3;
async function _r({
  maxWidth: o,
  src: E
}) {
  if (o <= 0)
    throw new Error("maxWidth must be greater than zero");
  const g = await createImageBitmap(await fetch(E).then((T) => T.blob()));
  return new Promise((T, O) => {
    requestAnimationFrame(() => {
      const h = document.createElement("canvas"), y = h.getContext("2d");
      if (!y)
        return O({ error: "Canvas context not available." });
      const c = o, u = g.height * o / g.width, S = c >= u, m = S ? c : u, _ = (S ? g.width : g.height) / m / 10;
      let b = Math.sqrt(c * u) / m * _;
      h.width = c, h.height = u, y.scale(b, b), y.imageSmoothingEnabled = !1, y.drawImage(g, 0, 0, c, u);
      let j = y.getImageData(0, 0, h.width, h.height), w = new Uint8Array(j.data), A = 0;
      for (let p = 0; p < w.length; p += 4)
        w[p + 3] !== 0 && A++;
      A > We && (b = b * We / A, h.width = c, h.height = u, y.scale(b, b), y.drawImage(g, 0, 0, c, u), j = y.getImageData(0, 0, c, u), w = new Uint8Array(j.data));
      let k = c, x = 0, f = u, C = 0;
      const I = [];
      for (let p = 0; p < w.length; p += 4)
        if (w[p + 3] !== 0) {
          const L = p / 4 % c, V = Math.floor(p / 4 / c);
          k = Math.min(L, k), x = Math.max(L, x), f = Math.min(V, f), C = Math.max(V, C);
          const re = w[p], H = w[p + 1], $ = w[p + 2], D = w[p + 3], M = `rgba(${re}, ${H}, ${$}, ${D})`;
          I.push([L, V, M]);
        }
      const W = x - k, Y = C - f, ee = I.map((p) => [
        (p[0] - k) * c / W,
        (p[1] - f) * u / Y,
        p[2]
      ]);
      T({
        coords: ee,
        height: u,
        pixelSize: S ? c / W : u / Y
      });
    });
  });
}
function Sr({
  src: o,
  duration: E = 500,
  size: g = 1,
  color: T,
  resizeDelay: O = 500
}) {
  const h = dr(null), [y, c] = B(!1), [u, S] = B([]), [m, _] = B(0), [b, j] = B(0), [w, A] = B(1), k = Fe(() => {
    if (!h.current || !h.current.parentElement)
      return;
    const C = h.current.parentElement.clientWidth;
    _(C), (async () => {
      const { coords: I, height: W, pixelSize: Y } = await _r({
        maxWidth: C,
        src: o
      });
      S(I), j(W), A(g * Y);
    })();
  }, [h, o, S, j, A, _, g]), x = vr(
    () => Rr(k, O),
    [k, O]
  );
  pr(() => (k(), window.addEventListener("resize", x), () => window.removeEventListener("resize", x)), [k, x]);
  const f = Fe(yr, []);
  return /* @__PURE__ */ Me(
    br,
    {
      onMouseOver: () => c(!0),
      onMouseLeave: () => c(!1),
      style: {
        height: `${b}px`
      },
      ref: h,
      children: u.map((C, I) => /* @__PURE__ */ Me(
        Er,
        {
          isHovered: y,
          size: w,
          duration: E,
          color: T || C[2],
          coord: [C[0], C[1]],
          randomCoord: f({ maxWidth: m, maxHeight: b })
        },
        I
      ))
    }
  );
}
export {
  Sr as ScatterGraphy
};
