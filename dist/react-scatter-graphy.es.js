import Ae, { useRef as fr, useState as V, useCallback as dr, useMemo as vr, useLayoutEffect as pr } from "react";
import { css as oe } from "@emotion/react";
import Ie from "@emotion/styled";
var ie = {}, hr = {
  get exports() {
    return ie;
  },
  set exports(i) {
    ie = i;
  }
}, B = {};
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
function mr() {
  if (ke)
    return B;
  ke = 1;
  var i = Ae, g = Symbol.for("react.element"), R = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, _ = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(f, d, C) {
    var m, y = {}, w = null, O = null;
    C !== void 0 && (w = "" + C), d.key !== void 0 && (w = "" + d.key), d.ref !== void 0 && (O = d.ref);
    for (m in d)
      p.call(d, m) && !b.hasOwnProperty(m) && (y[m] = d[m]);
    if (f && f.defaultProps)
      for (m in d = f.defaultProps, d)
        y[m] === void 0 && (y[m] = d[m]);
    return { $$typeof: g, type: f, key: w, ref: O, props: y, _owner: _.current };
  }
  return B.Fragment = R, B.jsx = c, B.jsxs = c, B;
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
function gr() {
  return De || (De = 1, process.env.NODE_ENV !== "production" && function() {
    var i = Ae, g = Symbol.for("react.element"), R = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), f = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), F = Symbol.iterator, j = "@@iterator";
    function P(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = F && e[F] || e[j];
      return typeof r == "function" ? r : null;
    }
    var x = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function l(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        k("error", e, t);
      }
    }
    function k(e, r, t) {
      {
        var n = x.ReactDebugCurrentFrame, s = n.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var W = !1, T = !1, A = !1, L = !1, We = !1, se;
    se = Symbol.for("react.module.reference");
    function Me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === p || e === b || We || e === _ || e === C || e === m || L || e === O || W || T || A || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === y || e.$$typeof === c || e.$$typeof === f || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === se || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function ue(e) {
      return e.displayName || "Context";
    }
    function D(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && l("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case p:
          return "Fragment";
        case R:
          return "Portal";
        case b:
          return "Profiler";
        case _:
          return "StrictMode";
        case C:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            var r = e;
            return ue(r) + ".Consumer";
          case c:
            var t = e;
            return ue(t._context) + ".Provider";
          case d:
            return Ye(e, e.render, "ForwardRef");
          case y:
            var n = e.displayName || null;
            return n !== null ? n : D(e.type) || "Memo";
          case w: {
            var s = e, u = s._payload, o = s._init;
            try {
              return D(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, N = 0, le, ce, fe, de, ve, pe, he;
    function me() {
    }
    me.__reactDisabledLog = !0;
    function Le() {
      {
        if (N === 0) {
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
        N++;
      }
    }
    function Ne() {
      {
        if (N--, N === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, e, {
              value: le
            }),
            info: I({}, e, {
              value: ce
            }),
            warn: I({}, e, {
              value: fe
            }),
            error: I({}, e, {
              value: de
            }),
            group: I({}, e, {
              value: ve
            }),
            groupCollapsed: I({}, e, {
              value: pe
            }),
            groupEnd: I({}, e, {
              value: he
            })
          });
        }
        N < 0 && l("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = x.ReactCurrentDispatcher, Z;
    function z(e, r, t) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            Z = n && n[1] || "";
          }
        return `
` + Z + e;
      }
    }
    var Q = !1, H;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      H = new Ue();
    }
    function ge(e, r) {
      if (!e || Q)
        return "";
      {
        var t = H.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Q = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = K.current, K.current = null, Le();
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
            } catch ($) {
              n = $;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch ($) {
              n = $;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($) {
            n = $;
          }
          e();
        }
      } catch ($) {
        if ($ && n && typeof $.stack == "string") {
          for (var a = $.stack.split(`
`), E = n.stack.split(`
`), v = a.length - 1, h = E.length - 1; v >= 1 && h >= 0 && a[v] !== E[h]; )
            h--;
          for (; v >= 1 && h >= 0; v--, h--)
            if (a[v] !== E[h]) {
              if (v !== 1 || h !== 1)
                do
                  if (v--, h--, h < 0 || a[v] !== E[h]) {
                    var S = `
` + a[v].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && H.set(e, S), S;
                  }
                while (v >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        Q = !1, K.current = u, Ne(), Error.prepareStackTrace = s;
      }
      var Y = e ? e.displayName || e.name : "", je = Y ? z(Y) : "";
      return typeof e == "function" && H.set(e, je), je;
    }
    function Ve(e, r, t) {
      return ge(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function G(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ge(e, Be(e));
      if (typeof e == "string")
        return z(e);
      switch (e) {
        case C:
          return z("Suspense");
        case m:
          return z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Ve(e.render);
          case y:
            return G(e.type, r, t);
          case w: {
            var n = e, s = n._payload, u = n._init;
            try {
              return G(u(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var J = Object.prototype.hasOwnProperty, be = {}, Ee = x.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    function qe(e, r, t, n, s) {
      {
        var u = Function.call.bind(J);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var E = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              a = v;
            }
            a && !(a instanceof Error) && (X(s), l("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), X(null)), a instanceof Error && !(a.message in be) && (be[a.message] = !0, X(s), l("Failed %s type: %s", t, a.message), X(null));
          }
      }
    }
    var ze = Array.isArray;
    function ee(e) {
      return ze(e);
    }
    function He(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function Re(e) {
      if (Ge(e))
        return l("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", He(e)), ye(e);
    }
    var U = x.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, we, re;
    re = {};
    function Xe(e) {
      if (J.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ke(e) {
      if (J.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      if (typeof e.ref == "string" && U.current && r && U.current.stateNode !== r) {
        var t = D(U.current.type);
        re[t] || (l('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D(U.current.type), e.ref), re[t] = !0);
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          _e || (_e = !0, l("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var t = function() {
          we || (we = !0, l("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, n, s, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: g,
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
        value: s
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function tr(e, r, t, n, s) {
      {
        var u, o = {}, a = null, E = null;
        t !== void 0 && (Re(t), a = "" + t), Ke(r) && (Re(r.key), a = "" + r.key), Xe(r) && (E = r.ref, Ze(r, s));
        for (u in r)
          J.call(r, u) && !Je.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (u in v)
            o[u] === void 0 && (o[u] = v[u]);
        }
        if (a || E) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Qe(o, h), E && er(o, h);
        }
        return rr(e, a, E, s, n, U.current, o);
      }
    }
    var te = x.ReactCurrentOwner, xe = x.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        xe.setExtraStackFrame(t);
      } else
        xe.setExtraStackFrame(null);
    }
    var ne;
    ne = !1;
    function ae(e) {
      return typeof e == "object" && e !== null && e.$$typeof === g;
    }
    function Te() {
      {
        if (te.current) {
          var e = D(te.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nr(e) {
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
    function ar(e) {
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
    function Se(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ar(r);
        if (Oe[t])
          return;
        Oe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== te.current && (n = " It was passed a child from " + D(e._owner.type) + "."), M(e), l('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), M(null);
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
          var s = P(e);
          if (typeof s == "function" && s !== e.entries)
            for (var u = s.call(e), o; !(o = u.next()).done; )
              ae(o.value) && Se(o.value, r);
        }
      }
    }
    function or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === y))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = D(r);
          qe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ne) {
          ne = !0;
          var s = D(r);
          l("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && l("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            M(e), l("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), M(null);
            break;
          }
        }
        e.ref !== null && (M(e), l("Invalid attribute `ref` supplied to `React.Fragment`."), M(null));
      }
    }
    function Pe(e, r, t, n, s, u) {
      {
        var o = Me(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = nr(s);
          E ? a += E : a += Te();
          var v;
          e === null ? v = "null" : ee(e) ? v = "array" : e !== void 0 && e.$$typeof === g ? (v = "<" + (D(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, l("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, a);
        }
        var h = tr(e, r, t, s, u);
        if (h == null)
          return h;
        if (o) {
          var S = r.children;
          if (S !== void 0)
            if (n)
              if (ee(S)) {
                for (var Y = 0; Y < S.length; Y++)
                  Ce(S[Y], e);
                Object.freeze && Object.freeze(S);
              } else
                l("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(S, e);
        }
        return e === p ? ir(h) : or(h), h;
      }
    }
    function sr(e, r, t) {
      return Pe(e, r, t, !0);
    }
    function ur(e, r, t) {
      return Pe(e, r, t, !1);
    }
    var lr = ur, cr = sr;
    q.Fragment = p, q.jsx = lr, q.jsxs = cr;
  }()), q;
}
(function(i) {
  process.env.NODE_ENV === "production" ? i.exports = mr() : i.exports = gr();
})(hr);
const $e = ie.jsx;
function br({ maxWidth: i, maxHeight: g }) {
  return [Math.floor(Math.random() * i), Math.floor(Math.random() * g)];
}
function Er(i, g) {
  let R;
  return function(..._) {
    R && clearTimeout(R), R = setTimeout(() => {
      i(..._);
    }, g);
  };
}
function Fe({ maxWidth: i, src: g, callback: R }) {
  const p = new Image(), _ = document.createElement("canvas"), b = _.getContext("2d");
  p.crossOrigin = "Anonymous", p.style.imageRendering = "crisp-edges", p.onload = () => {
    if (!b)
      return;
    const c = i, f = p.height * i / p.width, d = c >= f, C = d ? p.width / c / 10 : p.height / f / 10, m = Math.sqrt(c * f) / (d ? c : f) * C;
    _.width = c, _.height = f, b.scale(m, m), b.imageSmoothingEnabled = !1, b.drawImage(p, 0, 0, c, f);
    const y = b.getImageData(0, 0, c, f), w = new Uint8Array(y.data);
    let O = c, F = 0, j = f, P = 0;
    const x = [];
    for (let T = 0; T < w.length; T += 4)
      if (w[T + 3] !== 0) {
        const A = T / 4 % c, L = Math.floor(T / 4 / c);
        O = Math.min(A, O), F = Math.max(A, F), j = Math.min(L, j), P = Math.max(L, P), x.push([A, L]);
      }
    const l = F - O, k = P - j, W = x.map((T) => [
      (T[0] - O) * c / l,
      (T[1] - j) * f / k
    ]);
    R({ error: null, coords: W, height: f, pixelSize: d ? c / l : f / k });
  }, p.onerror = (c) => {
    R({ error: c });
  }, p.src = g;
}
const yr = Ie.div`
  position: relative;
  display: block;
  width: 100%;
`, Rr = Ie.span`
  position: absolute;

  ${({ randomCoord: i }) => i && oe`
      top: ${i[1]}px;
      left: ${i[0]}px;
    `}

  display: inline-block;
  background-color: ${({ color: i }) => i};
  transition: ${({ duration: i }) => `ease ${i}ms ${i}ms`};

  ${({ size: i }) => i && oe`
      width: ${i}px;
      height: ${i}px;
    `}

  ${({ isHovered: i, coord: g }) => i && oe`
      top: ${g[1]}px;
      left: ${g[0]}px;
    `}
`;
function Tr({
  src: i,
  duration: g = 500,
  size: R = 1,
  color: p = "black",
  resizeDelay: _ = 500
}) {
  const b = fr(null), [c, f] = V(!1), [d, C] = V([]), [m, y] = V(0), [w, O] = V(0), [F, j] = V(1), P = dr(() => {
    if (!b.current || !b.current.parentElement)
      return;
    const l = b.current.parentElement.clientWidth;
    y(l), Fe({
      maxWidth: l,
      src: i,
      callback: ({ error: k, coords: W, height: T, pixelSize: A }) => {
        if (k || !W || !T || !A) {
          console.error(k);
          return;
        }
        C(W), O(T), j(R * A);
      }
    });
  }, [b, i, C, O, j, y, R, Fe]), x = vr(
    () => Er(P, _),
    [P, _]
  );
  return pr(() => (P(), window.addEventListener("resize", x), () => window.removeEventListener("resize", x)), [P, x]), /* @__PURE__ */ $e(
    yr,
    {
      onMouseOver: () => f(!0),
      onMouseLeave: () => f(!1),
      style: {
        height: `${w}px`
      },
      ref: b,
      children: d.map((l, k) => /* @__PURE__ */ $e(
        Rr,
        {
          isHovered: c,
          size: F,
          duration: g,
          color: p,
          coord: l,
          randomCoord: br({ maxWidth: m, maxHeight: w })
        },
        k
      ))
    }
  );
}
export {
  Tr as ScatterGraphy
};
