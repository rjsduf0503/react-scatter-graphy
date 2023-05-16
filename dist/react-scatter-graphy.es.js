import Ye, { useRef as dr, useState as B, useCallback as Fe, useMemo as vr, useEffect as pr } from "react";
import { css as ce } from "@emotion/react";
import Le from "@emotion/styled";
var fe = {}, hr = {
  get exports() {
    return fe;
  },
  set exports(a) {
    fe = a;
  }
}, G = {};
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
    return G;
  Ae = 1;
  var a = Ye, E = Symbol.for("react.element"), g = Symbol.for("react.fragment"), x = Object.prototype.hasOwnProperty, k = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(f, s, S) {
    var h, T = {}, b = null, P = null;
    S !== void 0 && (b = "" + S), s.key !== void 0 && (b = "" + s.key), s.ref !== void 0 && (P = s.ref);
    for (h in s)
      x.call(s, h) && !y.hasOwnProperty(h) && (T[h] = s[h]);
    if (f && f.defaultProps)
      for (h in s = f.defaultProps, s)
        T[h] === void 0 && (T[h] = s[h]);
    return { $$typeof: E, type: f, key: b, ref: P, props: T, _owner: k.current };
  }
  return G.Fragment = g, G.jsx = v, G.jsxs = v, G;
}
var H = {};
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
    var a = Ye, E = Symbol.for("react.element"), g = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), f = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), R = Symbol.iterator, I = "@@iterator";
    function $(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = R && e[R] || e[I];
      return typeof r == "function" ? r : null;
    }
    var _ = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        M("error", e, t);
      }
    }
    function M(e, r, t) {
      {
        var n = _.ReactDebugCurrentFrame, u = n.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var l = t.map(function(i) {
          return String(i);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var O = !1, A = !1, Y = !1, V = !1, m = !1, L;
    L = Symbol.for("react.module.reference");
    function z(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === x || e === y || m || e === k || e === S || e === h || V || e === P || O || A || Y || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === T || e.$$typeof === v || e.$$typeof === f || e.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === L || e.getModuleId !== void 0));
    }
    function re(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function J(e) {
      return e.displayName || "Context";
    }
    function j(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case x:
          return "Fragment";
        case g:
          return "Portal";
        case y:
          return "Profiler";
        case k:
          return "StrictMode";
        case S:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            var r = e;
            return J(r) + ".Consumer";
          case v:
            var t = e;
            return J(t._context) + ".Provider";
          case s:
            return re(e, e.render, "ForwardRef");
          case T:
            var n = e.displayName || null;
            return n !== null ? n : j(e.type) || "Memo";
          case b: {
            var u = e, l = u._payload, i = u._init;
            try {
              return j(i(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, W = 0, de, ve, pe, he, me, ge, be;
    function Ee() {
    }
    Ee.__reactDisabledLog = !0;
    function Ne() {
      {
        if (W === 0) {
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
        W++;
      }
    }
    function Ue() {
      {
        if (W--, W === 0) {
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
        W < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var te = _.ReactCurrentDispatcher, ne;
    function X(e, r, t) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (u) {
            var n = u.stack.trim().match(/\n( *(at )?)/);
            ne = n && n[1] || "";
          }
        return `
` + ne + e;
      }
    }
    var ae = !1, K;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      K = new Ve();
    }
    function ye(e, r) {
      if (!e || ae)
        return "";
      {
        var t = K.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      ae = !0;
      var u = Error.prepareStackTrace;
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
          for (var o = F.stack.split(`
`), w = n.stack.split(`
`), d = o.length - 1, p = w.length - 1; d >= 1 && p >= 0 && o[d] !== w[p]; )
            p--;
          for (; d >= 1 && p >= 0; d--, p--)
            if (o[d] !== w[p]) {
              if (d !== 1 || p !== 1)
                do
                  if (d--, p--, p < 0 || o[d] !== w[p]) {
                    var C = `
` + o[d].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, C), C;
                  }
                while (d >= 1 && p >= 0);
              break;
            }
        }
      } finally {
        ae = !1, te.current = l, Ue(), Error.prepareStackTrace = u;
      }
      var U = e ? e.displayName || e.name : "", De = U ? X(U) : "";
      return typeof e == "function" && K.set(e, De), De;
    }
    function ze(e, r, t) {
      return ye(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Z(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ye(e, qe(e));
      if (typeof e == "string")
        return X(e);
      switch (e) {
        case S:
          return X("Suspense");
        case h:
          return X("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            return ze(e.render);
          case T:
            return Z(e.type, r, t);
          case b: {
            var n = e, u = n._payload, l = n._init;
            try {
              return Z(l(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, Re = {}, _e = _.ReactDebugCurrentFrame;
    function ee(e) {
      if (e) {
        var r = e._owner, t = Z(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(t);
      } else
        _e.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, u) {
      {
        var l = Function.call.bind(Q);
        for (var i in e)
          if (l(e, i)) {
            var o = void 0;
            try {
              if (typeof e[i] != "function") {
                var w = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              o = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (d) {
              o = d;
            }
            o && !(o instanceof Error) && (ee(u), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof o), ee(null)), o instanceof Error && !(o.message in Re) && (Re[o.message] = !0, ee(u), c("Failed %s type: %s", t, o.message), ee(null));
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
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", He(e)), we(e);
    }
    var q = _.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Te, Se, ie;
    ie = {};
    function Ke(e) {
      if (Q.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (Q.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      if (typeof e.ref == "string" && q.current && r && q.current.stateNode !== r) {
        var t = j(q.current.type);
        ie[t] || (c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(q.current.type), e.ref), ie[t] = !0);
      }
    }
    function er(e, r) {
      {
        var t = function() {
          Te || (Te = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Se || (Se = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, u, l, i) {
      var o = {
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
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function nr(e, r, t, n, u) {
      {
        var l, i = {}, o = null, w = null;
        t !== void 0 && (xe(t), o = "" + t), Ze(r) && (xe(r.key), o = "" + r.key), Ke(r) && (w = r.ref, Qe(r, u));
        for (l in r)
          Q.call(r, l) && !Xe.hasOwnProperty(l) && (i[l] = r[l]);
        if (e && e.defaultProps) {
          var d = e.defaultProps;
          for (l in d)
            i[l] === void 0 && (i[l] = d[l]);
        }
        if (o || w) {
          var p = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && er(i, p), w && rr(i, p);
        }
        return tr(e, o, w, u, n, q.current, i);
      }
    }
    var se = _.ReactCurrentOwner, Ce = _.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, t = Z(e.type, e._source, r ? r.type : null);
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
          var e = j(se.current.type);
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
        e && e._owner && e._owner !== se.current && (n = " It was passed a child from " + j(e._owner.type) + "."), N(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), N(null);
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
          var u = $(e);
          if (typeof u == "function" && u !== e.entries)
            for (var l = u.call(e), i; !(i = l.next()).done; )
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
        else if (typeof r == "object" && (r.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === T))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = j(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ue) {
          ue = !0;
          var u = j(r);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            N(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), N(null);
            break;
          }
        }
        e.ref !== null && (N(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    function $e(e, r, t, n, u, l) {
      {
        var i = z(e);
        if (!i) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = ar(u);
          w ? o += w : o += Pe();
          var d;
          e === null ? d = "null" : oe(e) ? d = "array" : e !== void 0 && e.$$typeof === E ? (d = "<" + (j(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, o);
        }
        var p = nr(e, r, t, u, l);
        if (p == null)
          return p;
        if (i) {
          var C = r.children;
          if (C !== void 0)
            if (n)
              if (oe(C)) {
                for (var U = 0; U < C.length; U++)
                  ke(C[U], e);
                Object.freeze && Object.freeze(C);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(C, e);
        }
        return e === x ? sr(p) : ir(p), p;
      }
    }
    function ur(e, r, t) {
      return $e(e, r, t, !0);
    }
    function lr(e, r, t) {
      return $e(e, r, t, !1);
    }
    var cr = lr, fr = ur;
    H.Fragment = x, H.jsx = cr, H.jsxs = fr;
  }()), H;
}
(function(a) {
  process.env.NODE_ENV === "production" ? a.exports = mr() : a.exports = gr();
})(hr);
const Me = fe.jsx, br = Le.div`
  position: relative;
  display: block;
  width: 100%;
`, Er = Le.span`
  position: absolute;

  ${({ randomCoord: a }) => a && ce`
      top: ${a[1]}px;
      left: ${a[0]}px;
    `}

  display: inline-block;
  background-color: ${({ color: a }) => a};
  transition: ${({ duration: a }) => `ease ${a}ms ${a}ms`};
  border-radius: ${({ shape: a }) => a === "circle" ? "100%" : null};

  ${({ size: a }) => a && ce`
      width: ${a}px;
      height: ${a}px;
    `}
  ${({ isHovered: a, coord: E }) => a && ce`
      top: ${E[1]}px;
      left: ${E[0]}px;
    `};
`;
function yr({ maxWidth: a, maxHeight: E }) {
  return [Math.floor(Math.random() * a), Math.floor(Math.random() * E)];
}
function Rr(a, E) {
  let g;
  return function(...k) {
    g && clearTimeout(g), g = setTimeout(() => {
      a(...k);
    }, E);
  };
}
const We = 2e3;
async function _r({
  maxWidth: a,
  src: E
}) {
  if (a <= 0)
    throw new Error("maxWidth must be greater than zero");
  const g = await createImageBitmap(await fetch(E).then((x) => x.blob()));
  return new Promise((x, k) => {
    requestAnimationFrame(() => {
      const y = document.createElement("canvas"), v = y.getContext("2d");
      if (!v)
        return k({ error: "Canvas context not available." });
      const f = a, s = g.height * a / g.width, S = f >= s, h = S ? f : s, T = (S ? g.width : g.height) / h / 10;
      let b = Math.sqrt(f * s) / h * T;
      y.width = f, y.height = s, v.scale(b, b), v.imageSmoothingEnabled = !1, v.drawImage(g, 0, 0, f, s);
      let P = v.getImageData(0, 0, y.width, y.height), R = new Uint8Array(P.data), I = 0;
      for (let m = 0; m < R.length; m += 4)
        R[m + 3] !== 0 && I++;
      I > We && (b = b * We / I, y.width = f, y.height = s, v.scale(b, b), v.drawImage(g, 0, 0, f, s), P = v.getImageData(0, 0, f, s), R = new Uint8Array(P.data));
      let $ = f, _ = 0, c = s, M = 0;
      const O = [];
      for (let m = 0; m < R.length; m += 4)
        if (R[m + 3] !== 0) {
          const L = m / 4 % f, z = Math.floor(m / 4 / f);
          $ = Math.min(L, $), _ = Math.max(L, _), c = Math.min(z, c), M = Math.max(z, M);
          const re = R[m], J = R[m + 1], j = R[m + 2], D = R[m + 3], W = `rgba(${re}, ${J}, ${j}, ${D})`;
          O.push([L, z, W]);
        }
      const A = _ - $, Y = M - c, V = O.map((m) => [
        (m[0] - $) * f / A,
        (m[1] - c) * s / Y,
        m[2]
      ]);
      x({
        coords: V,
        height: s,
        pixelSize: S ? f / A : s / Y
      });
    });
  });
}
function Sr({
  src: a,
  duration: E = 500,
  size: g = 1,
  color: x,
  shape: k = "square",
  resizeDelay: y = 500
}) {
  const v = dr(null), [f, s] = B(!1), [S, h] = B([]), [T, b] = B(0), [P, R] = B(0), [I, $] = B(1), _ = Fe(() => {
    if (!v.current || !v.current.parentElement)
      return;
    const O = v.current.parentElement.clientWidth;
    b(O), (async () => {
      const { coords: A, height: Y, pixelSize: V } = await _r({
        maxWidth: O,
        src: a
      });
      h(A), R(Y), $(g * V);
    })();
  }, [v, a, h, R, $, b, g]), c = vr(
    () => Rr(_, y),
    [_, y]
  );
  pr(() => (_(), window.addEventListener("resize", c), () => window.removeEventListener("resize", c)), [_, c]);
  const M = Fe(yr, []);
  return /* @__PURE__ */ Me(
    br,
    {
      onMouseOver: () => s(!0),
      onMouseLeave: () => s(!1),
      style: {
        height: `${P}px`
      },
      ref: v,
      children: S.map((O, A) => /* @__PURE__ */ Me(
        Er,
        {
          isHovered: f,
          size: I,
          duration: E,
          color: x || O[2],
          shape: k,
          coord: [O[0], O[1]],
          randomCoord: M({ maxWidth: T, maxHeight: P })
        },
        A
      ))
    }
  );
}
export {
  Sr as ScatterGraphy
};
