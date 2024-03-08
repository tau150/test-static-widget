var pp = Object.defineProperty;
var mp = (o, u, s) => u in o ? pp(o, u, { enumerable: !0, configurable: !0, writable: !0, value: s }) : o[u] = s;
var wf = (o, u, s) => (mp(o, typeof u != "symbol" ? u + "" : u, s), s), ns = (o, u, s) => {
  if (!u.has(o))
    throw TypeError("Cannot " + s);
};
var p = (o, u, s) => (ns(o, u, "read from private field"), s ? s.call(o) : u.get(o)), I = (o, u, s) => {
  if (u.has(o))
    throw TypeError("Cannot add the same private member more than once");
  u instanceof WeakSet ? u.add(o) : u.set(o, s);
}, N = (o, u, s, f) => (ns(o, u, "write to private field"), f ? f.call(o, s) : u.set(o, s), s);
var Xl = (o, u, s, f) => ({
  set _(w) {
    N(o, u, w, s);
  },
  get _() {
    return p(o, u, f);
  }
}), Z = (o, u, s) => (ns(o, u, "access private method"), s);
function yp(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var $f = { exports: {} }, xi = {}, Kf = { exports: {} }, te = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sf;
function vp() {
  if (Sf)
    return te;
  Sf = 1;
  var o = Symbol.for("react.element"), u = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), P = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), q = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), Y = Symbol.iterator;
  function F(h) {
    return h === null || typeof h != "object" ? null : (h = Y && h[Y] || h["@@iterator"], typeof h == "function" ? h : null);
  }
  var U = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, J = Object.assign, X = {};
  function z(h, k, H) {
    this.props = h, this.context = k, this.refs = X, this.updater = H || U;
  }
  z.prototype.isReactComponent = {}, z.prototype.setState = function(h, k) {
    if (typeof h != "object" && typeof h != "function" && h != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, h, k, "setState");
  }, z.prototype.forceUpdate = function(h) {
    this.updater.enqueueForceUpdate(this, h, "forceUpdate");
  };
  function K() {
  }
  K.prototype = z.prototype;
  function he(h, k, H) {
    this.props = h, this.context = k, this.refs = X, this.updater = H || U;
  }
  var ee = he.prototype = new K();
  ee.constructor = he, J(ee, z.prototype), ee.isPureReactComponent = !0;
  var le = Array.isArray, ve = Object.prototype.hasOwnProperty, fe = { current: null }, oe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ne(h, k, H) {
    var ie, b = {}, me = null, ae = null;
    if (k != null)
      for (ie in k.ref !== void 0 && (ae = k.ref), k.key !== void 0 && (me = "" + k.key), k)
        ve.call(k, ie) && !oe.hasOwnProperty(ie) && (b[ie] = k[ie]);
    var pe = arguments.length - 2;
    if (pe === 1)
      b.children = H;
    else if (1 < pe) {
      for (var ce = Array(pe), qe = 0; qe < pe; qe++)
        ce[qe] = arguments[qe + 2];
      b.children = ce;
    }
    if (h && h.defaultProps)
      for (ie in pe = h.defaultProps, pe)
        b[ie] === void 0 && (b[ie] = pe[ie]);
    return { $$typeof: o, type: h, key: me, ref: ae, props: b, _owner: fe.current };
  }
  function Me(h, k) {
    return { $$typeof: o, type: h.type, key: k, ref: h.ref, props: h.props, _owner: h._owner };
  }
  function At(h) {
    return typeof h == "object" && h !== null && h.$$typeof === o;
  }
  function On(h) {
    var k = { "=": "=0", ":": "=2" };
    return "$" + h.replace(/[=:]/g, function(H) {
      return k[H];
    });
  }
  var Nt = /\/+/g;
  function nt(h, k) {
    return typeof h == "object" && h !== null && h.key != null ? On("" + h.key) : k.toString(36);
  }
  function wt(h, k, H, ie, b) {
    var me = typeof h;
    (me === "undefined" || me === "boolean") && (h = null);
    var ae = !1;
    if (h === null)
      ae = !0;
    else
      switch (me) {
        case "string":
        case "number":
          ae = !0;
          break;
        case "object":
          switch (h.$$typeof) {
            case o:
            case u:
              ae = !0;
          }
      }
    if (ae)
      return ae = h, b = b(ae), h = ie === "" ? "." + nt(ae, 0) : ie, le(b) ? (H = "", h != null && (H = h.replace(Nt, "$&/") + "/"), wt(b, k, H, "", function(qe) {
        return qe;
      })) : b != null && (At(b) && (b = Me(b, H + (!b.key || ae && ae.key === b.key ? "" : ("" + b.key).replace(Nt, "$&/") + "/") + h)), k.push(b)), 1;
    if (ae = 0, ie = ie === "" ? "." : ie + ":", le(h))
      for (var pe = 0; pe < h.length; pe++) {
        me = h[pe];
        var ce = ie + nt(me, pe);
        ae += wt(me, k, H, ce, b);
      }
    else if (ce = F(h), typeof ce == "function")
      for (h = ce.call(h), pe = 0; !(me = h.next()).done; )
        me = me.value, ce = ie + nt(me, pe++), ae += wt(me, k, H, ce, b);
    else if (me === "object")
      throw k = String(h), Error("Objects are not valid as a React child (found: " + (k === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : k) + "). If you meant to render a collection of children, use an array instead.");
    return ae;
  }
  function Rt(h, k, H) {
    if (h == null)
      return h;
    var ie = [], b = 0;
    return wt(h, ie, "", "", function(me) {
      return k.call(H, me, b++);
    }), ie;
  }
  function Ge(h) {
    if (h._status === -1) {
      var k = h._result;
      k = k(), k.then(function(H) {
        (h._status === 0 || h._status === -1) && (h._status = 1, h._result = H);
      }, function(H) {
        (h._status === 0 || h._status === -1) && (h._status = 2, h._result = H);
      }), h._status === -1 && (h._status = 0, h._result = k);
    }
    if (h._status === 1)
      return h._result.default;
    throw h._result;
  }
  var xe = { current: null }, R = { transition: null }, $ = { ReactCurrentDispatcher: xe, ReactCurrentBatchConfig: R, ReactCurrentOwner: fe };
  return te.Children = { map: Rt, forEach: function(h, k, H) {
    Rt(h, function() {
      k.apply(this, arguments);
    }, H);
  }, count: function(h) {
    var k = 0;
    return Rt(h, function() {
      k++;
    }), k;
  }, toArray: function(h) {
    return Rt(h, function(k) {
      return k;
    }) || [];
  }, only: function(h) {
    if (!At(h))
      throw Error("React.Children.only expected to receive a single React element child.");
    return h;
  } }, te.Component = z, te.Fragment = s, te.Profiler = w, te.PureComponent = he, te.StrictMode = f, te.Suspense = T, te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $, te.cloneElement = function(h, k, H) {
    if (h == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
    var ie = J({}, h.props), b = h.key, me = h.ref, ae = h._owner;
    if (k != null) {
      if (k.ref !== void 0 && (me = k.ref, ae = fe.current), k.key !== void 0 && (b = "" + k.key), h.type && h.type.defaultProps)
        var pe = h.type.defaultProps;
      for (ce in k)
        ve.call(k, ce) && !oe.hasOwnProperty(ce) && (ie[ce] = k[ce] === void 0 && pe !== void 0 ? pe[ce] : k[ce]);
    }
    var ce = arguments.length - 2;
    if (ce === 1)
      ie.children = H;
    else if (1 < ce) {
      pe = Array(ce);
      for (var qe = 0; qe < ce; qe++)
        pe[qe] = arguments[qe + 2];
      ie.children = pe;
    }
    return { $$typeof: o, type: h.type, key: b, ref: me, props: ie, _owner: ae };
  }, te.createContext = function(h) {
    return h = { $$typeof: P, _currentValue: h, _currentValue2: h, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, h.Provider = { $$typeof: C, _context: h }, h.Consumer = h;
  }, te.createElement = ne, te.createFactory = function(h) {
    var k = ne.bind(null, h);
    return k.type = h, k;
  }, te.createRef = function() {
    return { current: null };
  }, te.forwardRef = function(h) {
    return { $$typeof: O, render: h };
  }, te.isValidElement = At, te.lazy = function(h) {
    return { $$typeof: L, _payload: { _status: -1, _result: h }, _init: Ge };
  }, te.memo = function(h, k) {
    return { $$typeof: q, type: h, compare: k === void 0 ? null : k };
  }, te.startTransition = function(h) {
    var k = R.transition;
    R.transition = {};
    try {
      h();
    } finally {
      R.transition = k;
    }
  }, te.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, te.useCallback = function(h, k) {
    return xe.current.useCallback(h, k);
  }, te.useContext = function(h) {
    return xe.current.useContext(h);
  }, te.useDebugValue = function() {
  }, te.useDeferredValue = function(h) {
    return xe.current.useDeferredValue(h);
  }, te.useEffect = function(h, k) {
    return xe.current.useEffect(h, k);
  }, te.useId = function() {
    return xe.current.useId();
  }, te.useImperativeHandle = function(h, k, H) {
    return xe.current.useImperativeHandle(h, k, H);
  }, te.useInsertionEffect = function(h, k) {
    return xe.current.useInsertionEffect(h, k);
  }, te.useLayoutEffect = function(h, k) {
    return xe.current.useLayoutEffect(h, k);
  }, te.useMemo = function(h, k) {
    return xe.current.useMemo(h, k);
  }, te.useReducer = function(h, k, H) {
    return xe.current.useReducer(h, k, H);
  }, te.useRef = function(h) {
    return xe.current.useRef(h);
  }, te.useState = function(h) {
    return xe.current.useState(h);
  }, te.useSyncExternalStore = function(h, k, H) {
    return xe.current.useSyncExternalStore(h, k, H);
  }, te.useTransition = function() {
    return xe.current.useTransition();
  }, te.version = "18.2.0", te;
}
Kf.exports = vp();
var re = Kf.exports;
const Xt = /* @__PURE__ */ yp(re);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kf;
function gp() {
  if (kf)
    return xi;
  kf = 1;
  var o = re, u = Symbol.for("react.element"), s = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, w = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function P(O, T, q) {
    var L, Y = {}, F = null, U = null;
    q !== void 0 && (F = "" + q), T.key !== void 0 && (F = "" + T.key), T.ref !== void 0 && (U = T.ref);
    for (L in T)
      f.call(T, L) && !C.hasOwnProperty(L) && (Y[L] = T[L]);
    if (O && O.defaultProps)
      for (L in T = O.defaultProps, T)
        Y[L] === void 0 && (Y[L] = T[L]);
    return { $$typeof: u, type: O, key: F, ref: U, props: Y, _owner: w.current };
  }
  return xi.Fragment = s, xi.jsx = P, xi.jsxs = P, xi;
}
$f.exports = gp();
var B = $f.exports, bl = {}, Gf = { exports: {} }, et = {}, rs = { exports: {} }, is = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ef;
function wp() {
  return Ef || (Ef = 1, function(o) {
    function u(R, $) {
      var h = R.length;
      R.push($);
      e:
        for (; 0 < h; ) {
          var k = h - 1 >>> 1, H = R[k];
          if (0 < w(H, $))
            R[k] = $, R[h] = H, h = k;
          else
            break e;
        }
    }
    function s(R) {
      return R.length === 0 ? null : R[0];
    }
    function f(R) {
      if (R.length === 0)
        return null;
      var $ = R[0], h = R.pop();
      if (h !== $) {
        R[0] = h;
        e:
          for (var k = 0, H = R.length, ie = H >>> 1; k < ie; ) {
            var b = 2 * (k + 1) - 1, me = R[b], ae = b + 1, pe = R[ae];
            if (0 > w(me, h))
              ae < H && 0 > w(pe, me) ? (R[k] = pe, R[ae] = h, k = ae) : (R[k] = me, R[b] = h, k = b);
            else if (ae < H && 0 > w(pe, h))
              R[k] = pe, R[ae] = h, k = ae;
            else
              break e;
          }
      }
      return $;
    }
    function w(R, $) {
      var h = R.sortIndex - $.sortIndex;
      return h !== 0 ? h : R.id - $.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var C = performance;
      o.unstable_now = function() {
        return C.now();
      };
    } else {
      var P = Date, O = P.now();
      o.unstable_now = function() {
        return P.now() - O;
      };
    }
    var T = [], q = [], L = 1, Y = null, F = 3, U = !1, J = !1, X = !1, z = typeof setTimeout == "function" ? setTimeout : null, K = typeof clearTimeout == "function" ? clearTimeout : null, he = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ee(R) {
      for (var $ = s(q); $ !== null; ) {
        if ($.callback === null)
          f(q);
        else if ($.startTime <= R)
          f(q), $.sortIndex = $.expirationTime, u(T, $);
        else
          break;
        $ = s(q);
      }
    }
    function le(R) {
      if (X = !1, ee(R), !J)
        if (s(T) !== null)
          J = !0, Ge(ve);
        else {
          var $ = s(q);
          $ !== null && xe(le, $.startTime - R);
        }
    }
    function ve(R, $) {
      J = !1, X && (X = !1, K(ne), ne = -1), U = !0;
      var h = F;
      try {
        for (ee($), Y = s(T); Y !== null && (!(Y.expirationTime > $) || R && !On()); ) {
          var k = Y.callback;
          if (typeof k == "function") {
            Y.callback = null, F = Y.priorityLevel;
            var H = k(Y.expirationTime <= $);
            $ = o.unstable_now(), typeof H == "function" ? Y.callback = H : Y === s(T) && f(T), ee($);
          } else
            f(T);
          Y = s(T);
        }
        if (Y !== null)
          var ie = !0;
        else {
          var b = s(q);
          b !== null && xe(le, b.startTime - $), ie = !1;
        }
        return ie;
      } finally {
        Y = null, F = h, U = !1;
      }
    }
    var fe = !1, oe = null, ne = -1, Me = 5, At = -1;
    function On() {
      return !(o.unstable_now() - At < Me);
    }
    function Nt() {
      if (oe !== null) {
        var R = o.unstable_now();
        At = R;
        var $ = !0;
        try {
          $ = oe(!0, R);
        } finally {
          $ ? nt() : (fe = !1, oe = null);
        }
      } else
        fe = !1;
    }
    var nt;
    if (typeof he == "function")
      nt = function() {
        he(Nt);
      };
    else if (typeof MessageChannel < "u") {
      var wt = new MessageChannel(), Rt = wt.port2;
      wt.port1.onmessage = Nt, nt = function() {
        Rt.postMessage(null);
      };
    } else
      nt = function() {
        z(Nt, 0);
      };
    function Ge(R) {
      oe = R, fe || (fe = !0, nt());
    }
    function xe(R, $) {
      ne = z(function() {
        R(o.unstable_now());
      }, $);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(R) {
      R.callback = null;
    }, o.unstable_continueExecution = function() {
      J || U || (J = !0, Ge(ve));
    }, o.unstable_forceFrameRate = function(R) {
      0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Me = 0 < R ? Math.floor(1e3 / R) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return F;
    }, o.unstable_getFirstCallbackNode = function() {
      return s(T);
    }, o.unstable_next = function(R) {
      switch (F) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = F;
      }
      var h = F;
      F = $;
      try {
        return R();
      } finally {
        F = h;
      }
    }, o.unstable_pauseExecution = function() {
    }, o.unstable_requestPaint = function() {
    }, o.unstable_runWithPriority = function(R, $) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var h = F;
      F = R;
      try {
        return $();
      } finally {
        F = h;
      }
    }, o.unstable_scheduleCallback = function(R, $, h) {
      var k = o.unstable_now();
      switch (typeof h == "object" && h !== null ? (h = h.delay, h = typeof h == "number" && 0 < h ? k + h : k) : h = k, R) {
        case 1:
          var H = -1;
          break;
        case 2:
          H = 250;
          break;
        case 5:
          H = 1073741823;
          break;
        case 4:
          H = 1e4;
          break;
        default:
          H = 5e3;
      }
      return H = h + H, R = { id: L++, callback: $, priorityLevel: R, startTime: h, expirationTime: H, sortIndex: -1 }, h > k ? (R.sortIndex = h, u(q, R), s(T) === null && R === s(q) && (X ? (K(ne), ne = -1) : X = !0, xe(le, h - k))) : (R.sortIndex = H, u(T, R), J || U || (J = !0, Ge(ve))), R;
    }, o.unstable_shouldYield = On, o.unstable_wrapCallback = function(R) {
      var $ = F;
      return function() {
        var h = F;
        F = $;
        try {
          return R.apply(this, arguments);
        } finally {
          F = h;
        }
      };
    };
  }(is)), is;
}
var Cf;
function Sp() {
  return Cf || (Cf = 1, rs.exports = wp()), rs.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xf;
function kp() {
  if (xf)
    return et;
  xf = 1;
  var o = re, u = Sp();
  function s(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var f = /* @__PURE__ */ new Set(), w = {};
  function C(e, t) {
    P(e, t), P(e + "Capture", t);
  }
  function P(e, t) {
    for (w[e] = t, e = 0; e < t.length; e++)
      f.add(t[e]);
  }
  var O = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), T = Object.prototype.hasOwnProperty, q = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, L = {}, Y = {};
  function F(e) {
    return T.call(Y, e) ? !0 : T.call(L, e) ? !1 : q.test(e) ? Y[e] = !0 : (L[e] = !0, !1);
  }
  function U(e, t, n, r) {
    if (n !== null && n.type === 0)
      return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function J(e, t, n, r) {
    if (t === null || typeof t > "u" || U(e, t, n, r))
      return !0;
    if (r)
      return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function X(e, t, n, r, i, l, a) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = a;
  }
  var z = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    z[e] = new X(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    z[t] = new X(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    z[e] = new X(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    z[e] = new X(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    z[e] = new X(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    z[e] = new X(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    z[e] = new X(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    z[e] = new X(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    z[e] = new X(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var K = /[\-:]([a-z])/g;
  function he(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      K,
      he
    );
    z[t] = new X(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(K, he);
    z[t] = new X(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(K, he);
    z[t] = new X(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    z[e] = new X(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), z.xlinkHref = new X("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    z[e] = new X(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function ee(e, t, n, r) {
    var i = z.hasOwnProperty(t) ? z[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (J(t, n, i, r) && (n = null), r || i === null ? F(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var le = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ve = Symbol.for("react.element"), fe = Symbol.for("react.portal"), oe = Symbol.for("react.fragment"), ne = Symbol.for("react.strict_mode"), Me = Symbol.for("react.profiler"), At = Symbol.for("react.provider"), On = Symbol.for("react.context"), Nt = Symbol.for("react.forward_ref"), nt = Symbol.for("react.suspense"), wt = Symbol.for("react.suspense_list"), Rt = Symbol.for("react.memo"), Ge = Symbol.for("react.lazy"), xe = Symbol.for("react.offscreen"), R = Symbol.iterator;
  function $(e) {
    return e === null || typeof e != "object" ? null : (e = R && e[R] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var h = Object.assign, k;
  function H(e) {
    if (k === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        k = t && t[1] || "";
      }
    return `
` + k + e;
  }
  var ie = !1;
  function b(e, t) {
    if (!e || ie)
      return "";
    ie = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (t = function() {
          throw Error();
        }, Object.defineProperty(t.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(t, []);
          } catch (g) {
            var r = g;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (g) {
            r = g;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (g) {
          r = g;
        }
        e();
      }
    } catch (g) {
      if (g && r && typeof g.stack == "string") {
        for (var i = g.stack.split(`
`), l = r.stack.split(`
`), a = i.length - 1, c = l.length - 1; 1 <= a && 0 <= c && i[a] !== l[c]; )
          c--;
        for (; 1 <= a && 0 <= c; a--, c--)
          if (i[a] !== l[c]) {
            if (a !== 1 || c !== 1)
              do
                if (a--, c--, 0 > c || i[a] !== l[c]) {
                  var d = `
` + i[a].replace(" at new ", " at ");
                  return e.displayName && d.includes("<anonymous>") && (d = d.replace("<anonymous>", e.displayName)), d;
                }
              while (1 <= a && 0 <= c);
            break;
          }
      }
    } finally {
      ie = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? H(e) : "";
  }
  function me(e) {
    switch (e.tag) {
      case 5:
        return H(e.type);
      case 16:
        return H("Lazy");
      case 13:
        return H("Suspense");
      case 19:
        return H("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = b(e.type, !1), e;
      case 11:
        return e = b(e.type.render, !1), e;
      case 1:
        return e = b(e.type, !0), e;
      default:
        return "";
    }
  }
  function ae(e) {
    if (e == null)
      return null;
    if (typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case oe:
        return "Fragment";
      case fe:
        return "Portal";
      case Me:
        return "Profiler";
      case ne:
        return "StrictMode";
      case nt:
        return "Suspense";
      case wt:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case On:
          return (e.displayName || "Context") + ".Consumer";
        case At:
          return (e._context.displayName || "Context") + ".Provider";
        case Nt:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Rt:
          return t = e.displayName || null, t !== null ? t : ae(e.type) || "Memo";
        case Ge:
          t = e._payload, e = e._init;
          try {
            return ae(e(t));
          } catch {
          }
      }
    return null;
  }
  function pe(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ae(t);
      case 8:
        return t === ne ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function")
          return t.displayName || t.name || null;
        if (typeof t == "string")
          return t;
    }
    return null;
  }
  function ce(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function qe(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function vd(e) {
    var t = qe(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var i = n.get, l = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return i.call(this);
      }, set: function(a) {
        r = "" + a, l.call(this, a);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(a) {
        r = "" + a;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Qi(e) {
    e._valueTracker || (e._valueTracker = vd(e));
  }
  function Cs(e) {
    if (!e)
      return !1;
    var t = e._valueTracker;
    if (!t)
      return !0;
    var n = t.getValue(), r = "";
    return e && (r = qe(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Hi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function su(e, t) {
    var n = t.checked;
    return h({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function xs(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = ce(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function _s(e, t) {
    t = t.checked, t != null && ee(e, "checked", t, !1);
  }
  function au(e, t) {
    _s(e, t);
    var n = ce(t.value), r = t.type;
    if (n != null)
      r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? cu(e, t.type, n) : t.hasOwnProperty("defaultValue") && cu(e, t.type, ce(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Ps(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
        return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function cu(e, t, n) {
    (t !== "number" || Hi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Ar = Array.isArray;
  function Xn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < n.length; i++)
        t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ce(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          e[i].selected = !0, r && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function fu(e, t) {
    if (t.dangerouslySetInnerHTML != null)
      throw Error(s(91));
    return h({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Os(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null)
          throw Error(s(92));
        if (Ar(n)) {
          if (1 < n.length)
            throw Error(s(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: ce(n) };
  }
  function Ns(e, t) {
    var n = ce(t.value), r = ce(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Rs(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Ts(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function du(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Ts(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Bi, Ls = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, i);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (Bi = Bi || document.createElement("div"), Bi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Bi.firstChild; e.firstChild; )
        e.removeChild(e.firstChild);
      for (; t.firstChild; )
        e.appendChild(t.firstChild);
    }
  });
  function Qr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Hr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, gd = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Hr).forEach(function(e) {
    gd.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Hr[t] = Hr[e];
    });
  });
  function zs(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Hr.hasOwnProperty(e) && Hr[e] ? ("" + t).trim() : t + "px";
  }
  function Ms(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, i = zs(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
      }
  }
  var wd = h({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function hu(e, t) {
    if (t) {
      if (wd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null)
          throw Error(s(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
          throw Error(s(61));
      }
      if (t.style != null && typeof t.style != "object")
        throw Error(s(62));
    }
  }
  function pu(e, t) {
    if (e.indexOf("-") === -1)
      return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var mu = null;
  function yu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var vu = null, Zn = null, Jn = null;
  function js(e) {
    if (e = ai(e)) {
      if (typeof vu != "function")
        throw Error(s(280));
      var t = e.stateNode;
      t && (t = fl(t), vu(e.stateNode, e.type, t));
    }
  }
  function Fs(e) {
    Zn ? Jn ? Jn.push(e) : Jn = [e] : Zn = e;
  }
  function Ds() {
    if (Zn) {
      var e = Zn, t = Jn;
      if (Jn = Zn = null, js(e), t)
        for (e = 0; e < t.length; e++)
          js(t[e]);
    }
  }
  function Is(e, t) {
    return e(t);
  }
  function Us() {
  }
  var gu = !1;
  function As(e, t, n) {
    if (gu)
      return e(t, n);
    gu = !0;
    try {
      return Is(e, t, n);
    } finally {
      gu = !1, (Zn !== null || Jn !== null) && (Us(), Ds());
    }
  }
  function Br(e, t) {
    var n = e.stateNode;
    if (n === null)
      return null;
    var r = fl(n);
    if (r === null)
      return null;
    n = r[t];
    e:
      switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
          break e;
        default:
          e = !1;
      }
    if (e)
      return null;
    if (n && typeof n != "function")
      throw Error(s(231, t, typeof n));
    return n;
  }
  var wu = !1;
  if (O)
    try {
      var Vr = {};
      Object.defineProperty(Vr, "passive", { get: function() {
        wu = !0;
      } }), window.addEventListener("test", Vr, Vr), window.removeEventListener("test", Vr, Vr);
    } catch {
      wu = !1;
    }
  function Sd(e, t, n, r, i, l, a, c, d) {
    var g = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, g);
    } catch (E) {
      this.onError(E);
    }
  }
  var Wr = !1, Vi = null, Wi = !1, Su = null, kd = { onError: function(e) {
    Wr = !0, Vi = e;
  } };
  function Ed(e, t, n, r, i, l, a, c, d) {
    Wr = !1, Vi = null, Sd.apply(kd, arguments);
  }
  function Cd(e, t, n, r, i, l, a, c, d) {
    if (Ed.apply(this, arguments), Wr) {
      if (Wr) {
        var g = Vi;
        Wr = !1, Vi = null;
      } else
        throw Error(s(198));
      Wi || (Wi = !0, Su = g);
    }
  }
  function Nn(e) {
    var t = e, n = e;
    if (e.alternate)
      for (; t.return; )
        t = t.return;
    else {
      e = t;
      do
        t = e, t.flags & 4098 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Qs(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
        return t.dehydrated;
    }
    return null;
  }
  function Hs(e) {
    if (Nn(e) !== e)
      throw Error(s(188));
  }
  function xd(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Nn(e), t === null)
        throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var i = n.return;
      if (i === null)
        break;
      var l = i.alternate;
      if (l === null) {
        if (r = i.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (i.child === l.child) {
        for (l = i.child; l; ) {
          if (l === n)
            return Hs(i), e;
          if (l === r)
            return Hs(i), t;
          l = l.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== r.return)
        n = i, r = l;
      else {
        for (var a = !1, c = i.child; c; ) {
          if (c === n) {
            a = !0, n = i, r = l;
            break;
          }
          if (c === r) {
            a = !0, r = i, n = l;
            break;
          }
          c = c.sibling;
        }
        if (!a) {
          for (c = l.child; c; ) {
            if (c === n) {
              a = !0, n = l, r = i;
              break;
            }
            if (c === r) {
              a = !0, r = l, n = i;
              break;
            }
            c = c.sibling;
          }
          if (!a)
            throw Error(s(189));
        }
      }
      if (n.alternate !== r)
        throw Error(s(190));
    }
    if (n.tag !== 3)
      throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function Bs(e) {
    return e = xd(e), e !== null ? Vs(e) : null;
  }
  function Vs(e) {
    if (e.tag === 5 || e.tag === 6)
      return e;
    for (e = e.child; e !== null; ) {
      var t = Vs(e);
      if (t !== null)
        return t;
      e = e.sibling;
    }
    return null;
  }
  var Ws = u.unstable_scheduleCallback, $s = u.unstable_cancelCallback, _d = u.unstable_shouldYield, Pd = u.unstable_requestPaint, Pe = u.unstable_now, Od = u.unstable_getCurrentPriorityLevel, ku = u.unstable_ImmediatePriority, Ks = u.unstable_UserBlockingPriority, $i = u.unstable_NormalPriority, Nd = u.unstable_LowPriority, Gs = u.unstable_IdlePriority, Ki = null, Tt = null;
  function Rd(e) {
    if (Tt && typeof Tt.onCommitFiberRoot == "function")
      try {
        Tt.onCommitFiberRoot(Ki, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
  }
  var St = Math.clz32 ? Math.clz32 : zd, Td = Math.log, Ld = Math.LN2;
  function zd(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Td(e) / Ld | 0) | 0;
  }
  var Gi = 64, qi = 4194304;
  function $r(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Yi(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
      return 0;
    var r = 0, i = e.suspendedLanes, l = e.pingedLanes, a = n & 268435455;
    if (a !== 0) {
      var c = a & ~i;
      c !== 0 ? r = $r(c) : (l &= a, l !== 0 && (r = $r(l)));
    } else
      a = n & ~i, a !== 0 ? r = $r(a) : l !== 0 && (r = $r(l));
    if (r === 0)
      return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, l = t & -t, i >= l || i === 16 && (l & 4194240) !== 0))
      return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
      for (e = e.entanglements, t &= r; 0 < t; )
        n = 31 - St(t), i = 1 << n, r |= e[n], t &= ~i;
    return r;
  }
  function Md(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function jd(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
      var a = 31 - St(l), c = 1 << a, d = i[a];
      d === -1 ? (!(c & n) || c & r) && (i[a] = Md(c, t)) : d <= t && (e.expiredLanes |= c), l &= ~c;
    }
  }
  function Eu(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function qs() {
    var e = Gi;
    return Gi <<= 1, !(Gi & 4194240) && (Gi = 64), e;
  }
  function Cu(e) {
    for (var t = [], n = 0; 31 > n; n++)
      t.push(e);
    return t;
  }
  function Kr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - St(t), e[t] = n;
  }
  function Fd(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - St(n), l = 1 << i;
      t[i] = 0, r[i] = -1, e[i] = -1, n &= ~l;
    }
  }
  function xu(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - St(n), i = 1 << r;
      i & t | e[r] & t && (e[r] |= t), n &= ~i;
    }
  }
  var de = 0;
  function Ys(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Xs, _u, Zs, Js, bs, Pu = !1, Xi = [], Zt = null, Jt = null, bt = null, Gr = /* @__PURE__ */ new Map(), qr = /* @__PURE__ */ new Map(), en = [], Dd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ea(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Zt = null;
        break;
      case "dragenter":
      case "dragleave":
        Jt = null;
        break;
      case "mouseover":
      case "mouseout":
        bt = null;
        break;
      case "pointerover":
      case "pointerout":
        Gr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        qr.delete(t.pointerId);
    }
  }
  function Yr(e, t, n, r, i, l) {
    return e === null || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [i] }, t !== null && (t = ai(t), t !== null && _u(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function Id(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return Zt = Yr(Zt, e, t, n, r, i), !0;
      case "dragenter":
        return Jt = Yr(Jt, e, t, n, r, i), !0;
      case "mouseover":
        return bt = Yr(bt, e, t, n, r, i), !0;
      case "pointerover":
        var l = i.pointerId;
        return Gr.set(l, Yr(Gr.get(l) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return l = i.pointerId, qr.set(l, Yr(qr.get(l) || null, e, t, n, r, i)), !0;
    }
    return !1;
  }
  function ta(e) {
    var t = Rn(e.target);
    if (t !== null) {
      var n = Nn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Qs(n), t !== null) {
            e.blockedOn = t, bs(e.priority, function() {
              Zs(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Zi(e) {
    if (e.blockedOn !== null)
      return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Nu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        mu = r, n.target.dispatchEvent(r), mu = null;
      } else
        return t = ai(n), t !== null && _u(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function na(e, t, n) {
    Zi(e) && n.delete(t);
  }
  function Ud() {
    Pu = !1, Zt !== null && Zi(Zt) && (Zt = null), Jt !== null && Zi(Jt) && (Jt = null), bt !== null && Zi(bt) && (bt = null), Gr.forEach(na), qr.forEach(na);
  }
  function Xr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Pu || (Pu = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, Ud)));
  }
  function Zr(e) {
    function t(i) {
      return Xr(i, e);
    }
    if (0 < Xi.length) {
      Xr(Xi[0], e);
      for (var n = 1; n < Xi.length; n++) {
        var r = Xi[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Zt !== null && Xr(Zt, e), Jt !== null && Xr(Jt, e), bt !== null && Xr(bt, e), Gr.forEach(t), qr.forEach(t), n = 0; n < en.length; n++)
      r = en[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < en.length && (n = en[0], n.blockedOn === null); )
      ta(n), n.blockedOn === null && en.shift();
  }
  var bn = le.ReactCurrentBatchConfig, Ji = !0;
  function Ad(e, t, n, r) {
    var i = de, l = bn.transition;
    bn.transition = null;
    try {
      de = 1, Ou(e, t, n, r);
    } finally {
      de = i, bn.transition = l;
    }
  }
  function Qd(e, t, n, r) {
    var i = de, l = bn.transition;
    bn.transition = null;
    try {
      de = 4, Ou(e, t, n, r);
    } finally {
      de = i, bn.transition = l;
    }
  }
  function Ou(e, t, n, r) {
    if (Ji) {
      var i = Nu(e, t, n, r);
      if (i === null)
        $u(e, t, r, bi, n), ea(e, r);
      else if (Id(i, e, t, n, r))
        r.stopPropagation();
      else if (ea(e, r), t & 4 && -1 < Dd.indexOf(e)) {
        for (; i !== null; ) {
          var l = ai(i);
          if (l !== null && Xs(l), l = Nu(e, t, n, r), l === null && $u(e, t, r, bi, n), l === i)
            break;
          i = l;
        }
        i !== null && r.stopPropagation();
      } else
        $u(e, t, r, null, n);
    }
  }
  var bi = null;
  function Nu(e, t, n, r) {
    if (bi = null, e = yu(r), e = Rn(e), e !== null)
      if (t = Nn(e), t === null)
        e = null;
      else if (n = t.tag, n === 13) {
        if (e = Qs(t), e !== null)
          return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else
        t !== e && (e = null);
    return bi = e, null;
  }
  function ra(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Od()) {
          case ku:
            return 1;
          case Ks:
            return 4;
          case $i:
          case Nd:
            return 16;
          case Gs:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var tn = null, Ru = null, el = null;
  function ia() {
    if (el)
      return el;
    var e, t = Ru, n = t.length, r, i = "value" in tn ? tn.value : tn.textContent, l = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
      ;
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === i[l - r]; r++)
      ;
    return el = i.slice(e, 1 < r ? 1 - r : void 0);
  }
  function tl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function nl() {
    return !0;
  }
  function la() {
    return !1;
  }
  function rt(e) {
    function t(n, r, i, l, a) {
      this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = l, this.target = a, this.currentTarget = null;
      for (var c in e)
        e.hasOwnProperty(c) && (n = e[c], this[c] = n ? n(l) : l[c]);
      return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? nl : la, this.isPropagationStopped = la, this;
    }
    return h(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = nl);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = nl);
    }, persist: function() {
    }, isPersistent: nl }), t;
  }
  var er = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Tu = rt(er), Jr = h({}, er, { view: 0, detail: 0 }), Hd = rt(Jr), Lu, zu, br, rl = h({}, Jr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ju, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== br && (br && e.type === "mousemove" ? (Lu = e.screenX - br.screenX, zu = e.screenY - br.screenY) : zu = Lu = 0, br = e), Lu);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : zu;
  } }), ua = rt(rl), Bd = h({}, rl, { dataTransfer: 0 }), Vd = rt(Bd), Wd = h({}, Jr, { relatedTarget: 0 }), Mu = rt(Wd), $d = h({}, er, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Kd = rt($d), Gd = h({}, er, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), qd = rt(Gd), Yd = h({}, er, { data: 0 }), oa = rt(Yd), Xd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Zd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Jd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function bd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Jd[e]) ? !!t[e] : !1;
  }
  function ju() {
    return bd;
  }
  var eh = h({}, Jr, { key: function(e) {
    if (e.key) {
      var t = Xd[e.key] || e.key;
      if (t !== "Unidentified")
        return t;
    }
    return e.type === "keypress" ? (e = tl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Zd[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ju, charCode: function(e) {
    return e.type === "keypress" ? tl(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? tl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), th = rt(eh), nh = h({}, rl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), sa = rt(nh), rh = h({}, Jr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ju }), ih = rt(rh), lh = h({}, er, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), uh = rt(lh), oh = h({}, rl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), sh = rt(oh), ah = [9, 13, 27, 32], Fu = O && "CompositionEvent" in window, ei = null;
  O && "documentMode" in document && (ei = document.documentMode);
  var ch = O && "TextEvent" in window && !ei, aa = O && (!Fu || ei && 8 < ei && 11 >= ei), ca = " ", fa = !1;
  function da(e, t) {
    switch (e) {
      case "keyup":
        return ah.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ha(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var tr = !1;
  function fh(e, t) {
    switch (e) {
      case "compositionend":
        return ha(t);
      case "keypress":
        return t.which !== 32 ? null : (fa = !0, ca);
      case "textInput":
        return e = t.data, e === ca && fa ? null : e;
      default:
        return null;
    }
  }
  function dh(e, t) {
    if (tr)
      return e === "compositionend" || !Fu && da(e, t) ? (e = ia(), el = Ru = tn = null, tr = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which)
            return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return aa && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var hh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function pa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!hh[e.type] : t === "textarea";
  }
  function ma(e, t, n, r) {
    Fs(r), t = sl(t, "onChange"), 0 < t.length && (n = new Tu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var ti = null, ni = null;
  function ph(e) {
    Ma(e, 0);
  }
  function il(e) {
    var t = ur(e);
    if (Cs(t))
      return e;
  }
  function mh(e, t) {
    if (e === "change")
      return t;
  }
  var ya = !1;
  if (O) {
    var Du;
    if (O) {
      var Iu = "oninput" in document;
      if (!Iu) {
        var va = document.createElement("div");
        va.setAttribute("oninput", "return;"), Iu = typeof va.oninput == "function";
      }
      Du = Iu;
    } else
      Du = !1;
    ya = Du && (!document.documentMode || 9 < document.documentMode);
  }
  function ga() {
    ti && (ti.detachEvent("onpropertychange", wa), ni = ti = null);
  }
  function wa(e) {
    if (e.propertyName === "value" && il(ni)) {
      var t = [];
      ma(t, ni, e, yu(e)), As(ph, t);
    }
  }
  function yh(e, t, n) {
    e === "focusin" ? (ga(), ti = t, ni = n, ti.attachEvent("onpropertychange", wa)) : e === "focusout" && ga();
  }
  function vh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return il(ni);
  }
  function gh(e, t) {
    if (e === "click")
      return il(t);
  }
  function wh(e, t) {
    if (e === "input" || e === "change")
      return il(t);
  }
  function Sh(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var kt = typeof Object.is == "function" ? Object.is : Sh;
  function ri(e, t) {
    if (kt(e, t))
      return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length)
      return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!T.call(t, i) || !kt(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  function Sa(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function ka(e, t) {
    var n = Sa(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t)
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Sa(n);
    }
  }
  function Ea(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ea(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Ca() {
    for (var e = window, t = Hi(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n)
        e = t.contentWindow;
      else
        break;
      t = Hi(e.document);
    }
    return t;
  }
  function Uu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function kh(e) {
    var t = Ca(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ea(n.ownerDocument.documentElement, n)) {
      if (r !== null && Uu(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
          n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var i = n.textContent.length, l = Math.min(r.start, i);
          r = r.end === void 0 ? l : Math.min(r.end, i), !e.extend && l > r && (i = r, r = l, l = i), i = ka(n, l);
          var a = ka(
            n,
            r
          );
          i && a && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; )
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Eh = O && "documentMode" in document && 11 >= document.documentMode, nr = null, Au = null, ii = null, Qu = !1;
  function xa(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Qu || nr == null || nr !== Hi(r) || (r = nr, "selectionStart" in r && Uu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ii && ri(ii, r) || (ii = r, r = sl(Au, "onSelect"), 0 < r.length && (t = new Tu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = nr)));
  }
  function ll(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var rr = { animationend: ll("Animation", "AnimationEnd"), animationiteration: ll("Animation", "AnimationIteration"), animationstart: ll("Animation", "AnimationStart"), transitionend: ll("Transition", "TransitionEnd") }, Hu = {}, _a = {};
  O && (_a = document.createElement("div").style, "AnimationEvent" in window || (delete rr.animationend.animation, delete rr.animationiteration.animation, delete rr.animationstart.animation), "TransitionEvent" in window || delete rr.transitionend.transition);
  function ul(e) {
    if (Hu[e])
      return Hu[e];
    if (!rr[e])
      return e;
    var t = rr[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in _a)
        return Hu[e] = t[n];
    return e;
  }
  var Pa = ul("animationend"), Oa = ul("animationiteration"), Na = ul("animationstart"), Ra = ul("transitionend"), Ta = /* @__PURE__ */ new Map(), La = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function nn(e, t) {
    Ta.set(e, t), C(t, [e]);
  }
  for (var Bu = 0; Bu < La.length; Bu++) {
    var Vu = La[Bu], Ch = Vu.toLowerCase(), xh = Vu[0].toUpperCase() + Vu.slice(1);
    nn(Ch, "on" + xh);
  }
  nn(Pa, "onAnimationEnd"), nn(Oa, "onAnimationIteration"), nn(Na, "onAnimationStart"), nn("dblclick", "onDoubleClick"), nn("focusin", "onFocus"), nn("focusout", "onBlur"), nn(Ra, "onTransitionEnd"), P("onMouseEnter", ["mouseout", "mouseover"]), P("onMouseLeave", ["mouseout", "mouseover"]), P("onPointerEnter", ["pointerout", "pointerover"]), P("onPointerLeave", ["pointerout", "pointerover"]), C("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), C("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), C("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), C("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), C("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), C("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var li = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), _h = new Set("cancel close invalid load scroll toggle".split(" ").concat(li));
  function za(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Cd(r, t, void 0, e), e.currentTarget = null;
  }
  function Ma(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], i = r.event;
      r = r.listeners;
      e: {
        var l = void 0;
        if (t)
          for (var a = r.length - 1; 0 <= a; a--) {
            var c = r[a], d = c.instance, g = c.currentTarget;
            if (c = c.listener, d !== l && i.isPropagationStopped())
              break e;
            za(i, c, g), l = d;
          }
        else
          for (a = 0; a < r.length; a++) {
            if (c = r[a], d = c.instance, g = c.currentTarget, c = c.listener, d !== l && i.isPropagationStopped())
              break e;
            za(i, c, g), l = d;
          }
      }
    }
    if (Wi)
      throw e = Su, Wi = !1, Su = null, e;
  }
  function ge(e, t) {
    var n = t[Zu];
    n === void 0 && (n = t[Zu] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (ja(t, e, 2, !1), n.add(r));
  }
  function Wu(e, t, n) {
    var r = 0;
    t && (r |= 4), ja(n, e, r, t);
  }
  var ol = "_reactListening" + Math.random().toString(36).slice(2);
  function ui(e) {
    if (!e[ol]) {
      e[ol] = !0, f.forEach(function(n) {
        n !== "selectionchange" && (_h.has(n) || Wu(n, !1, e), Wu(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ol] || (t[ol] = !0, Wu("selectionchange", !1, t));
    }
  }
  function ja(e, t, n, r) {
    switch (ra(t)) {
      case 1:
        var i = Ad;
        break;
      case 4:
        i = Qd;
        break;
      default:
        i = Ou;
    }
    n = i.bind(null, t, n, e), i = void 0, !wu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
  }
  function $u(e, t, n, r, i) {
    var l = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e:
        for (; ; ) {
          if (r === null)
            return;
          var a = r.tag;
          if (a === 3 || a === 4) {
            var c = r.stateNode.containerInfo;
            if (c === i || c.nodeType === 8 && c.parentNode === i)
              break;
            if (a === 4)
              for (a = r.return; a !== null; ) {
                var d = a.tag;
                if ((d === 3 || d === 4) && (d = a.stateNode.containerInfo, d === i || d.nodeType === 8 && d.parentNode === i))
                  return;
                a = a.return;
              }
            for (; c !== null; ) {
              if (a = Rn(c), a === null)
                return;
              if (d = a.tag, d === 5 || d === 6) {
                r = l = a;
                continue e;
              }
              c = c.parentNode;
            }
          }
          r = r.return;
        }
    As(function() {
      var g = l, E = yu(n), x = [];
      e: {
        var S = Ta.get(e);
        if (S !== void 0) {
          var M = Tu, D = e;
          switch (e) {
            case "keypress":
              if (tl(n) === 0)
                break e;
            case "keydown":
            case "keyup":
              M = th;
              break;
            case "focusin":
              D = "focus", M = Mu;
              break;
            case "focusout":
              D = "blur", M = Mu;
              break;
            case "beforeblur":
            case "afterblur":
              M = Mu;
              break;
            case "click":
              if (n.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              M = ua;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              M = Vd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              M = ih;
              break;
            case Pa:
            case Oa:
            case Na:
              M = Kd;
              break;
            case Ra:
              M = uh;
              break;
            case "scroll":
              M = Hd;
              break;
            case "wheel":
              M = sh;
              break;
            case "copy":
            case "cut":
            case "paste":
              M = qd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              M = sa;
          }
          var A = (t & 4) !== 0, Oe = !A && e === "scroll", y = A ? S !== null ? S + "Capture" : null : S;
          A = [];
          for (var m = g, v; m !== null; ) {
            v = m;
            var _ = v.stateNode;
            if (v.tag === 5 && _ !== null && (v = _, y !== null && (_ = Br(m, y), _ != null && A.push(oi(m, _, v)))), Oe)
              break;
            m = m.return;
          }
          0 < A.length && (S = new M(S, D, null, n, E), x.push({ event: S, listeners: A }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (S = e === "mouseover" || e === "pointerover", M = e === "mouseout" || e === "pointerout", S && n !== mu && (D = n.relatedTarget || n.fromElement) && (Rn(D) || D[Qt]))
            break e;
          if ((M || S) && (S = E.window === E ? E : (S = E.ownerDocument) ? S.defaultView || S.parentWindow : window, M ? (D = n.relatedTarget || n.toElement, M = g, D = D ? Rn(D) : null, D !== null && (Oe = Nn(D), D !== Oe || D.tag !== 5 && D.tag !== 6) && (D = null)) : (M = null, D = g), M !== D)) {
            if (A = ua, _ = "onMouseLeave", y = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (A = sa, _ = "onPointerLeave", y = "onPointerEnter", m = "pointer"), Oe = M == null ? S : ur(M), v = D == null ? S : ur(D), S = new A(_, m + "leave", M, n, E), S.target = Oe, S.relatedTarget = v, _ = null, Rn(E) === g && (A = new A(y, m + "enter", D, n, E), A.target = v, A.relatedTarget = Oe, _ = A), Oe = _, M && D)
              t: {
                for (A = M, y = D, m = 0, v = A; v; v = ir(v))
                  m++;
                for (v = 0, _ = y; _; _ = ir(_))
                  v++;
                for (; 0 < m - v; )
                  A = ir(A), m--;
                for (; 0 < v - m; )
                  y = ir(y), v--;
                for (; m--; ) {
                  if (A === y || y !== null && A === y.alternate)
                    break t;
                  A = ir(A), y = ir(y);
                }
                A = null;
              }
            else
              A = null;
            M !== null && Fa(x, S, M, A, !1), D !== null && Oe !== null && Fa(x, Oe, D, A, !0);
          }
        }
        e: {
          if (S = g ? ur(g) : window, M = S.nodeName && S.nodeName.toLowerCase(), M === "select" || M === "input" && S.type === "file")
            var Q = mh;
          else if (pa(S))
            if (ya)
              Q = wh;
            else {
              Q = vh;
              var V = yh;
            }
          else
            (M = S.nodeName) && M.toLowerCase() === "input" && (S.type === "checkbox" || S.type === "radio") && (Q = gh);
          if (Q && (Q = Q(e, g))) {
            ma(x, Q, n, E);
            break e;
          }
          V && V(e, S, g), e === "focusout" && (V = S._wrapperState) && V.controlled && S.type === "number" && cu(S, "number", S.value);
        }
        switch (V = g ? ur(g) : window, e) {
          case "focusin":
            (pa(V) || V.contentEditable === "true") && (nr = V, Au = g, ii = null);
            break;
          case "focusout":
            ii = Au = nr = null;
            break;
          case "mousedown":
            Qu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Qu = !1, xa(x, n, E);
            break;
          case "selectionchange":
            if (Eh)
              break;
          case "keydown":
          case "keyup":
            xa(x, n, E);
        }
        var W;
        if (Fu)
          e: {
            switch (e) {
              case "compositionstart":
                var G = "onCompositionStart";
                break e;
              case "compositionend":
                G = "onCompositionEnd";
                break e;
              case "compositionupdate":
                G = "onCompositionUpdate";
                break e;
            }
            G = void 0;
          }
        else
          tr ? da(e, n) && (G = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (G = "onCompositionStart");
        G && (aa && n.locale !== "ko" && (tr || G !== "onCompositionStart" ? G === "onCompositionEnd" && tr && (W = ia()) : (tn = E, Ru = "value" in tn ? tn.value : tn.textContent, tr = !0)), V = sl(g, G), 0 < V.length && (G = new oa(G, e, null, n, E), x.push({ event: G, listeners: V }), W ? G.data = W : (W = ha(n), W !== null && (G.data = W)))), (W = ch ? fh(e, n) : dh(e, n)) && (g = sl(g, "onBeforeInput"), 0 < g.length && (E = new oa("onBeforeInput", "beforeinput", null, n, E), x.push({ event: E, listeners: g }), E.data = W));
      }
      Ma(x, t);
    });
  }
  function oi(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function sl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e, l = i.stateNode;
      i.tag === 5 && l !== null && (i = l, l = Br(e, n), l != null && r.unshift(oi(e, l, i)), l = Br(e, t), l != null && r.push(oi(e, l, i))), e = e.return;
    }
    return r;
  }
  function ir(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Fa(e, t, n, r, i) {
    for (var l = t._reactName, a = []; n !== null && n !== r; ) {
      var c = n, d = c.alternate, g = c.stateNode;
      if (d !== null && d === r)
        break;
      c.tag === 5 && g !== null && (c = g, i ? (d = Br(n, l), d != null && a.unshift(oi(n, d, c))) : i || (d = Br(n, l), d != null && a.push(oi(n, d, c)))), n = n.return;
    }
    a.length !== 0 && e.push({ event: t, listeners: a });
  }
  var Ph = /\r\n?/g, Oh = /\u0000|\uFFFD/g;
  function Da(e) {
    return (typeof e == "string" ? e : "" + e).replace(Ph, `
`).replace(Oh, "");
  }
  function al(e, t, n) {
    if (t = Da(t), Da(e) !== t && n)
      throw Error(s(425));
  }
  function cl() {
  }
  var Ku = null, Gu = null;
  function qu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Yu = typeof setTimeout == "function" ? setTimeout : void 0, Nh = typeof clearTimeout == "function" ? clearTimeout : void 0, Ia = typeof Promise == "function" ? Promise : void 0, Rh = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ia < "u" ? function(e) {
    return Ia.resolve(null).then(e).catch(Th);
  } : Yu;
  function Th(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Xu(e, t) {
    var n = t, r = 0;
    do {
      var i = n.nextSibling;
      if (e.removeChild(n), i && i.nodeType === 8)
        if (n = i.data, n === "/$") {
          if (r === 0) {
            e.removeChild(i), Zr(t);
            return;
          }
          r--;
        } else
          n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = i;
    } while (n);
    Zr(t);
  }
  function rn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3)
        break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?")
          break;
        if (t === "/$")
          return null;
      }
    }
    return e;
  }
  function Ua(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0)
            return e;
          t--;
        } else
          n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var lr = Math.random().toString(36).slice(2), Lt = "__reactFiber$" + lr, si = "__reactProps$" + lr, Qt = "__reactContainer$" + lr, Zu = "__reactEvents$" + lr, Lh = "__reactListeners$" + lr, zh = "__reactHandles$" + lr;
  function Rn(e) {
    var t = e[Lt];
    if (t)
      return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Qt] || n[Lt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Ua(e); e !== null; ) {
            if (n = e[Lt])
              return n;
            e = Ua(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function ai(e) {
    return e = e[Lt] || e[Qt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function ur(e) {
    if (e.tag === 5 || e.tag === 6)
      return e.stateNode;
    throw Error(s(33));
  }
  function fl(e) {
    return e[si] || null;
  }
  var Ju = [], or = -1;
  function ln(e) {
    return { current: e };
  }
  function we(e) {
    0 > or || (e.current = Ju[or], Ju[or] = null, or--);
  }
  function ye(e, t) {
    or++, Ju[or] = e.current, e.current = t;
  }
  var un = {}, Qe = ln(un), Ye = ln(!1), Tn = un;
  function sr(e, t) {
    var n = e.type.contextTypes;
    if (!n)
      return un;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, l;
    for (l in n)
      i[l] = t[l];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
  }
  function Xe(e) {
    return e = e.childContextTypes, e != null;
  }
  function dl() {
    we(Ye), we(Qe);
  }
  function Aa(e, t, n) {
    if (Qe.current !== un)
      throw Error(s(168));
    ye(Qe, t), ye(Ye, n);
  }
  function Qa(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function")
      return n;
    r = r.getChildContext();
    for (var i in r)
      if (!(i in t))
        throw Error(s(108, pe(e) || "Unknown", i));
    return h({}, n, r);
  }
  function hl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || un, Tn = Qe.current, ye(Qe, e), ye(Ye, Ye.current), !0;
  }
  function Ha(e, t, n) {
    var r = e.stateNode;
    if (!r)
      throw Error(s(169));
    n ? (e = Qa(e, t, Tn), r.__reactInternalMemoizedMergedChildContext = e, we(Ye), we(Qe), ye(Qe, e)) : we(Ye), ye(Ye, n);
  }
  var Ht = null, pl = !1, bu = !1;
  function Ba(e) {
    Ht === null ? Ht = [e] : Ht.push(e);
  }
  function Mh(e) {
    pl = !0, Ba(e);
  }
  function on() {
    if (!bu && Ht !== null) {
      bu = !0;
      var e = 0, t = de;
      try {
        var n = Ht;
        for (de = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Ht = null, pl = !1;
      } catch (i) {
        throw Ht !== null && (Ht = Ht.slice(e + 1)), Ws(ku, on), i;
      } finally {
        de = t, bu = !1;
      }
    }
    return null;
  }
  var ar = [], cr = 0, ml = null, yl = 0, at = [], ct = 0, Ln = null, Bt = 1, Vt = "";
  function zn(e, t) {
    ar[cr++] = yl, ar[cr++] = ml, ml = e, yl = t;
  }
  function Va(e, t, n) {
    at[ct++] = Bt, at[ct++] = Vt, at[ct++] = Ln, Ln = e;
    var r = Bt;
    e = Vt;
    var i = 32 - St(r) - 1;
    r &= ~(1 << i), n += 1;
    var l = 32 - St(t) + i;
    if (30 < l) {
      var a = i - i % 5;
      l = (r & (1 << a) - 1).toString(32), r >>= a, i -= a, Bt = 1 << 32 - St(t) + i | n << i | r, Vt = l + e;
    } else
      Bt = 1 << l | n << i | r, Vt = e;
  }
  function eo(e) {
    e.return !== null && (zn(e, 1), Va(e, 1, 0));
  }
  function to(e) {
    for (; e === ml; )
      ml = ar[--cr], ar[cr] = null, yl = ar[--cr], ar[cr] = null;
    for (; e === Ln; )
      Ln = at[--ct], at[ct] = null, Vt = at[--ct], at[ct] = null, Bt = at[--ct], at[ct] = null;
  }
  var it = null, lt = null, ke = !1, Et = null;
  function Wa(e, t) {
    var n = pt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function $a(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, it = e, lt = rn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, it = e, lt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ln !== null ? { id: Bt, overflow: Vt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = pt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, it = e, lt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function no(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ro(e) {
    if (ke) {
      var t = lt;
      if (t) {
        var n = t;
        if (!$a(e, t)) {
          if (no(e))
            throw Error(s(418));
          t = rn(n.nextSibling);
          var r = it;
          t && $a(e, t) ? Wa(r, n) : (e.flags = e.flags & -4097 | 2, ke = !1, it = e);
        }
      } else {
        if (no(e))
          throw Error(s(418));
        e.flags = e.flags & -4097 | 2, ke = !1, it = e;
      }
    }
  }
  function Ka(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
      e = e.return;
    it = e;
  }
  function vl(e) {
    if (e !== it)
      return !1;
    if (!ke)
      return Ka(e), ke = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !qu(e.type, e.memoizedProps)), t && (t = lt)) {
      if (no(e))
        throw Ga(), Error(s(418));
      for (; t; )
        Wa(e, t), t = rn(t.nextSibling);
    }
    if (Ka(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                lt = rn(e.nextSibling);
                break e;
              }
              t--;
            } else
              n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        lt = null;
      }
    } else
      lt = it ? rn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ga() {
    for (var e = lt; e; )
      e = rn(e.nextSibling);
  }
  function fr() {
    lt = it = null, ke = !1;
  }
  function io(e) {
    Et === null ? Et = [e] : Et.push(e);
  }
  var jh = le.ReactCurrentBatchConfig;
  function Ct(e, t) {
    if (e && e.defaultProps) {
      t = h({}, t), e = e.defaultProps;
      for (var n in e)
        t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  var gl = ln(null), wl = null, dr = null, lo = null;
  function uo() {
    lo = dr = wl = null;
  }
  function oo(e) {
    var t = gl.current;
    we(gl), e._currentValue = t;
  }
  function so(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
        break;
      e = e.return;
    }
  }
  function hr(e, t) {
    wl = e, lo = dr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ze = !0), e.firstContext = null);
  }
  function ft(e) {
    var t = e._currentValue;
    if (lo !== e)
      if (e = { context: e, memoizedValue: t, next: null }, dr === null) {
        if (wl === null)
          throw Error(s(308));
        dr = e, wl.dependencies = { lanes: 0, firstContext: e };
      } else
        dr = dr.next = e;
    return t;
  }
  var Mn = null;
  function ao(e) {
    Mn === null ? Mn = [e] : Mn.push(e);
  }
  function qa(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, ao(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Wt(e, r);
  }
  function Wt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var sn = !1;
  function co(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Ya(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function $t(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function an(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
      return null;
    if (r = r.shared, ue & 2) {
      var i = r.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Wt(e, n);
    }
    return i = r.interleaved, i === null ? (t.next = t, ao(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Wt(e, n);
  }
  function Sl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, xu(e, n);
    }
  }
  function Xa(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var i = null, l = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          l === null ? i = l = a : l = l.next = a, n = n.next;
        } while (n !== null);
        l === null ? i = l = t : l = l.next = t;
      } else
        i = l = t;
      n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: l, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function kl(e, t, n, r) {
    var i = e.updateQueue;
    sn = !1;
    var l = i.firstBaseUpdate, a = i.lastBaseUpdate, c = i.shared.pending;
    if (c !== null) {
      i.shared.pending = null;
      var d = c, g = d.next;
      d.next = null, a === null ? l = g : a.next = g, a = d;
      var E = e.alternate;
      E !== null && (E = E.updateQueue, c = E.lastBaseUpdate, c !== a && (c === null ? E.firstBaseUpdate = g : c.next = g, E.lastBaseUpdate = d));
    }
    if (l !== null) {
      var x = i.baseState;
      a = 0, E = g = d = null, c = l;
      do {
        var S = c.lane, M = c.eventTime;
        if ((r & S) === S) {
          E !== null && (E = E.next = {
            eventTime: M,
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          });
          e: {
            var D = e, A = c;
            switch (S = t, M = n, A.tag) {
              case 1:
                if (D = A.payload, typeof D == "function") {
                  x = D.call(M, x, S);
                  break e;
                }
                x = D;
                break e;
              case 3:
                D.flags = D.flags & -65537 | 128;
              case 0:
                if (D = A.payload, S = typeof D == "function" ? D.call(M, x, S) : D, S == null)
                  break e;
                x = h({}, x, S);
                break e;
              case 2:
                sn = !0;
            }
          }
          c.callback !== null && c.lane !== 0 && (e.flags |= 64, S = i.effects, S === null ? i.effects = [c] : S.push(c));
        } else
          M = { eventTime: M, lane: S, tag: c.tag, payload: c.payload, callback: c.callback, next: null }, E === null ? (g = E = M, d = x) : E = E.next = M, a |= S;
        if (c = c.next, c === null) {
          if (c = i.shared.pending, c === null)
            break;
          S = c, c = S.next, S.next = null, i.lastBaseUpdate = S, i.shared.pending = null;
        }
      } while (!0);
      if (E === null && (d = x), i.baseState = d, i.firstBaseUpdate = g, i.lastBaseUpdate = E, t = i.shared.interleaved, t !== null) {
        i = t;
        do
          a |= i.lane, i = i.next;
        while (i !== t);
      } else
        l === null && (i.shared.lanes = 0);
      Dn |= a, e.lanes = a, e.memoizedState = x;
    }
  }
  function Za(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
      for (t = 0; t < e.length; t++) {
        var r = e[t], i = r.callback;
        if (i !== null) {
          if (r.callback = null, r = n, typeof i != "function")
            throw Error(s(191, i));
          i.call(r);
        }
      }
  }
  var Ja = new o.Component().refs;
  function fo(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : h({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var El = { isMounted: function(e) {
    return (e = e._reactInternals) ? Nn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = $e(), i = hn(e), l = $t(r, i);
    l.payload = t, n != null && (l.callback = n), t = an(e, l, i), t !== null && (Pt(t, e, i, r), Sl(t, e, i));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = $e(), i = hn(e), l = $t(r, i);
    l.tag = 1, l.payload = t, n != null && (l.callback = n), t = an(e, l, i), t !== null && (Pt(t, e, i, r), Sl(t, e, i));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = $e(), r = hn(e), i = $t(n, r);
    i.tag = 2, t != null && (i.callback = t), t = an(e, i, r), t !== null && (Pt(t, e, r, n), Sl(t, e, r));
  } };
  function ba(e, t, n, r, i, l, a) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, a) : t.prototype && t.prototype.isPureReactComponent ? !ri(n, r) || !ri(i, l) : !0;
  }
  function ec(e, t, n) {
    var r = !1, i = un, l = t.contextType;
    return typeof l == "object" && l !== null ? l = ft(l) : (i = Xe(t) ? Tn : Qe.current, r = t.contextTypes, l = (r = r != null) ? sr(e, i) : un), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = El, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = l), t;
  }
  function tc(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && El.enqueueReplaceState(t, t.state, null);
  }
  function ho(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = Ja, co(e);
    var l = t.contextType;
    typeof l == "object" && l !== null ? i.context = ft(l) : (l = Xe(t) ? Tn : Qe.current, i.context = sr(e, l)), i.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (fo(e, t, l, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && El.enqueueReplaceState(i, i.state, null), kl(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function ci(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1)
            throw Error(s(309));
          var r = n.stateNode;
        }
        if (!r)
          throw Error(s(147, e));
        var i = r, l = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(a) {
          var c = i.refs;
          c === Ja && (c = i.refs = {}), a === null ? delete c[l] : c[l] = a;
        }, t._stringRef = l, t);
      }
      if (typeof e != "string")
        throw Error(s(284));
      if (!n._owner)
        throw Error(s(290, e));
    }
    return e;
  }
  function Cl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function nc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function rc(e) {
    function t(y, m) {
      if (e) {
        var v = y.deletions;
        v === null ? (y.deletions = [m], y.flags |= 16) : v.push(m);
      }
    }
    function n(y, m) {
      if (!e)
        return null;
      for (; m !== null; )
        t(y, m), m = m.sibling;
      return null;
    }
    function r(y, m) {
      for (y = /* @__PURE__ */ new Map(); m !== null; )
        m.key !== null ? y.set(m.key, m) : y.set(m.index, m), m = m.sibling;
      return y;
    }
    function i(y, m) {
      return y = mn(y, m), y.index = 0, y.sibling = null, y;
    }
    function l(y, m, v) {
      return y.index = v, e ? (v = y.alternate, v !== null ? (v = v.index, v < m ? (y.flags |= 2, m) : v) : (y.flags |= 2, m)) : (y.flags |= 1048576, m);
    }
    function a(y) {
      return e && y.alternate === null && (y.flags |= 2), y;
    }
    function c(y, m, v, _) {
      return m === null || m.tag !== 6 ? (m = Xo(v, y.mode, _), m.return = y, m) : (m = i(m, v), m.return = y, m);
    }
    function d(y, m, v, _) {
      var Q = v.type;
      return Q === oe ? E(y, m, v.props.children, _, v.key) : m !== null && (m.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === Ge && nc(Q) === m.type) ? (_ = i(m, v.props), _.ref = ci(y, m, v), _.return = y, _) : (_ = Bl(v.type, v.key, v.props, null, y.mode, _), _.ref = ci(y, m, v), _.return = y, _);
    }
    function g(y, m, v, _) {
      return m === null || m.tag !== 4 || m.stateNode.containerInfo !== v.containerInfo || m.stateNode.implementation !== v.implementation ? (m = Zo(v, y.mode, _), m.return = y, m) : (m = i(m, v.children || []), m.return = y, m);
    }
    function E(y, m, v, _, Q) {
      return m === null || m.tag !== 7 ? (m = Qn(v, y.mode, _, Q), m.return = y, m) : (m = i(m, v), m.return = y, m);
    }
    function x(y, m, v) {
      if (typeof m == "string" && m !== "" || typeof m == "number")
        return m = Xo("" + m, y.mode, v), m.return = y, m;
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case ve:
            return v = Bl(m.type, m.key, m.props, null, y.mode, v), v.ref = ci(y, null, m), v.return = y, v;
          case fe:
            return m = Zo(m, y.mode, v), m.return = y, m;
          case Ge:
            var _ = m._init;
            return x(y, _(m._payload), v);
        }
        if (Ar(m) || $(m))
          return m = Qn(m, y.mode, v, null), m.return = y, m;
        Cl(y, m);
      }
      return null;
    }
    function S(y, m, v, _) {
      var Q = m !== null ? m.key : null;
      if (typeof v == "string" && v !== "" || typeof v == "number")
        return Q !== null ? null : c(y, m, "" + v, _);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case ve:
            return v.key === Q ? d(y, m, v, _) : null;
          case fe:
            return v.key === Q ? g(y, m, v, _) : null;
          case Ge:
            return Q = v._init, S(
              y,
              m,
              Q(v._payload),
              _
            );
        }
        if (Ar(v) || $(v))
          return Q !== null ? null : E(y, m, v, _, null);
        Cl(y, v);
      }
      return null;
    }
    function M(y, m, v, _, Q) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number")
        return y = y.get(v) || null, c(m, y, "" + _, Q);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case ve:
            return y = y.get(_.key === null ? v : _.key) || null, d(m, y, _, Q);
          case fe:
            return y = y.get(_.key === null ? v : _.key) || null, g(m, y, _, Q);
          case Ge:
            var V = _._init;
            return M(y, m, v, V(_._payload), Q);
        }
        if (Ar(_) || $(_))
          return y = y.get(v) || null, E(m, y, _, Q, null);
        Cl(m, _);
      }
      return null;
    }
    function D(y, m, v, _) {
      for (var Q = null, V = null, W = m, G = m = 0, De = null; W !== null && G < v.length; G++) {
        W.index > G ? (De = W, W = null) : De = W.sibling;
        var se = S(y, W, v[G], _);
        if (se === null) {
          W === null && (W = De);
          break;
        }
        e && W && se.alternate === null && t(y, W), m = l(se, m, G), V === null ? Q = se : V.sibling = se, V = se, W = De;
      }
      if (G === v.length)
        return n(y, W), ke && zn(y, G), Q;
      if (W === null) {
        for (; G < v.length; G++)
          W = x(y, v[G], _), W !== null && (m = l(W, m, G), V === null ? Q = W : V.sibling = W, V = W);
        return ke && zn(y, G), Q;
      }
      for (W = r(y, W); G < v.length; G++)
        De = M(W, y, G, v[G], _), De !== null && (e && De.alternate !== null && W.delete(De.key === null ? G : De.key), m = l(De, m, G), V === null ? Q = De : V.sibling = De, V = De);
      return e && W.forEach(function(yn) {
        return t(y, yn);
      }), ke && zn(y, G), Q;
    }
    function A(y, m, v, _) {
      var Q = $(v);
      if (typeof Q != "function")
        throw Error(s(150));
      if (v = Q.call(v), v == null)
        throw Error(s(151));
      for (var V = Q = null, W = m, G = m = 0, De = null, se = v.next(); W !== null && !se.done; G++, se = v.next()) {
        W.index > G ? (De = W, W = null) : De = W.sibling;
        var yn = S(y, W, se.value, _);
        if (yn === null) {
          W === null && (W = De);
          break;
        }
        e && W && yn.alternate === null && t(y, W), m = l(yn, m, G), V === null ? Q = yn : V.sibling = yn, V = yn, W = De;
      }
      if (se.done)
        return n(
          y,
          W
        ), ke && zn(y, G), Q;
      if (W === null) {
        for (; !se.done; G++, se = v.next())
          se = x(y, se.value, _), se !== null && (m = l(se, m, G), V === null ? Q = se : V.sibling = se, V = se);
        return ke && zn(y, G), Q;
      }
      for (W = r(y, W); !se.done; G++, se = v.next())
        se = M(W, y, G, se.value, _), se !== null && (e && se.alternate !== null && W.delete(se.key === null ? G : se.key), m = l(se, m, G), V === null ? Q = se : V.sibling = se, V = se);
      return e && W.forEach(function(hp) {
        return t(y, hp);
      }), ke && zn(y, G), Q;
    }
    function Oe(y, m, v, _) {
      if (typeof v == "object" && v !== null && v.type === oe && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case ve:
            e: {
              for (var Q = v.key, V = m; V !== null; ) {
                if (V.key === Q) {
                  if (Q = v.type, Q === oe) {
                    if (V.tag === 7) {
                      n(y, V.sibling), m = i(V, v.props.children), m.return = y, y = m;
                      break e;
                    }
                  } else if (V.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === Ge && nc(Q) === V.type) {
                    n(y, V.sibling), m = i(V, v.props), m.ref = ci(y, V, v), m.return = y, y = m;
                    break e;
                  }
                  n(y, V);
                  break;
                } else
                  t(y, V);
                V = V.sibling;
              }
              v.type === oe ? (m = Qn(v.props.children, y.mode, _, v.key), m.return = y, y = m) : (_ = Bl(v.type, v.key, v.props, null, y.mode, _), _.ref = ci(y, m, v), _.return = y, y = _);
            }
            return a(y);
          case fe:
            e: {
              for (V = v.key; m !== null; ) {
                if (m.key === V)
                  if (m.tag === 4 && m.stateNode.containerInfo === v.containerInfo && m.stateNode.implementation === v.implementation) {
                    n(y, m.sibling), m = i(m, v.children || []), m.return = y, y = m;
                    break e;
                  } else {
                    n(y, m);
                    break;
                  }
                else
                  t(y, m);
                m = m.sibling;
              }
              m = Zo(v, y.mode, _), m.return = y, y = m;
            }
            return a(y);
          case Ge:
            return V = v._init, Oe(y, m, V(v._payload), _);
        }
        if (Ar(v))
          return D(y, m, v, _);
        if ($(v))
          return A(y, m, v, _);
        Cl(y, v);
      }
      return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, m !== null && m.tag === 6 ? (n(y, m.sibling), m = i(m, v), m.return = y, y = m) : (n(y, m), m = Xo(v, y.mode, _), m.return = y, y = m), a(y)) : n(y, m);
    }
    return Oe;
  }
  var pr = rc(!0), ic = rc(!1), fi = {}, zt = ln(fi), di = ln(fi), hi = ln(fi);
  function jn(e) {
    if (e === fi)
      throw Error(s(174));
    return e;
  }
  function po(e, t) {
    switch (ye(hi, t), ye(di, e), ye(zt, fi), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : du(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = du(t, e);
    }
    we(zt), ye(zt, t);
  }
  function mr() {
    we(zt), we(di), we(hi);
  }
  function lc(e) {
    jn(hi.current);
    var t = jn(zt.current), n = du(t, e.type);
    t !== n && (ye(di, e), ye(zt, n));
  }
  function mo(e) {
    di.current === e && (we(zt), we(di));
  }
  var Ee = ln(0);
  function xl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128)
          return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var yo = [];
  function vo() {
    for (var e = 0; e < yo.length; e++)
      yo[e]._workInProgressVersionPrimary = null;
    yo.length = 0;
  }
  var _l = le.ReactCurrentDispatcher, go = le.ReactCurrentBatchConfig, Fn = 0, Ce = null, Re = null, je = null, Pl = !1, pi = !1, mi = 0, Fh = 0;
  function He() {
    throw Error(s(321));
  }
  function wo(e, t) {
    if (t === null)
      return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!kt(e[n], t[n]))
        return !1;
    return !0;
  }
  function So(e, t, n, r, i, l) {
    if (Fn = l, Ce = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, _l.current = e === null || e.memoizedState === null ? Ah : Qh, e = n(r, i), pi) {
      l = 0;
      do {
        if (pi = !1, mi = 0, 25 <= l)
          throw Error(s(301));
        l += 1, je = Re = null, t.updateQueue = null, _l.current = Hh, e = n(r, i);
      } while (pi);
    }
    if (_l.current = Rl, t = Re !== null && Re.next !== null, Fn = 0, je = Re = Ce = null, Pl = !1, t)
      throw Error(s(300));
    return e;
  }
  function ko() {
    var e = mi !== 0;
    return mi = 0, e;
  }
  function Mt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return je === null ? Ce.memoizedState = je = e : je = je.next = e, je;
  }
  function dt() {
    if (Re === null) {
      var e = Ce.alternate;
      e = e !== null ? e.memoizedState : null;
    } else
      e = Re.next;
    var t = je === null ? Ce.memoizedState : je.next;
    if (t !== null)
      je = t, Re = e;
    else {
      if (e === null)
        throw Error(s(310));
      Re = e, e = { memoizedState: Re.memoizedState, baseState: Re.baseState, baseQueue: Re.baseQueue, queue: Re.queue, next: null }, je === null ? Ce.memoizedState = je = e : je = je.next = e;
    }
    return je;
  }
  function yi(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Eo(e) {
    var t = dt(), n = t.queue;
    if (n === null)
      throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = Re, i = r.baseQueue, l = n.pending;
    if (l !== null) {
      if (i !== null) {
        var a = i.next;
        i.next = l.next, l.next = a;
      }
      r.baseQueue = i = l, n.pending = null;
    }
    if (i !== null) {
      l = i.next, r = r.baseState;
      var c = a = null, d = null, g = l;
      do {
        var E = g.lane;
        if ((Fn & E) === E)
          d !== null && (d = d.next = { lane: 0, action: g.action, hasEagerState: g.hasEagerState, eagerState: g.eagerState, next: null }), r = g.hasEagerState ? g.eagerState : e(r, g.action);
        else {
          var x = {
            lane: E,
            action: g.action,
            hasEagerState: g.hasEagerState,
            eagerState: g.eagerState,
            next: null
          };
          d === null ? (c = d = x, a = r) : d = d.next = x, Ce.lanes |= E, Dn |= E;
        }
        g = g.next;
      } while (g !== null && g !== l);
      d === null ? a = r : d.next = c, kt(r, t.memoizedState) || (Ze = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = d, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      i = e;
      do
        l = i.lane, Ce.lanes |= l, Dn |= l, i = i.next;
      while (i !== e);
    } else
      i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Co(e) {
    var t = dt(), n = t.queue;
    if (n === null)
      throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, i = n.pending, l = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var a = i = i.next;
      do
        l = e(l, a.action), a = a.next;
      while (a !== i);
      kt(l, t.memoizedState) || (Ze = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
    }
    return [l, r];
  }
  function uc() {
  }
  function oc(e, t) {
    var n = Ce, r = dt(), i = t(), l = !kt(r.memoizedState, i);
    if (l && (r.memoizedState = i, Ze = !0), r = r.queue, xo(cc.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || je !== null && je.memoizedState.tag & 1) {
      if (n.flags |= 2048, vi(9, ac.bind(null, n, r, i, t), void 0, null), Fe === null)
        throw Error(s(349));
      Fn & 30 || sc(n, t, i);
    }
    return i;
  }
  function sc(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ce.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ce.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function ac(e, t, n, r) {
    t.value = n, t.getSnapshot = r, fc(t) && dc(e);
  }
  function cc(e, t, n) {
    return n(function() {
      fc(t) && dc(e);
    });
  }
  function fc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !kt(e, n);
    } catch {
      return !0;
    }
  }
  function dc(e) {
    var t = Wt(e, 1);
    t !== null && Pt(t, e, 1, -1);
  }
  function hc(e) {
    var t = Mt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: yi, lastRenderedState: e }, t.queue = e, e = e.dispatch = Uh.bind(null, Ce, e), [t.memoizedState, e];
  }
  function vi(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ce.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ce.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function pc() {
    return dt().memoizedState;
  }
  function Ol(e, t, n, r) {
    var i = Mt();
    Ce.flags |= e, i.memoizedState = vi(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Nl(e, t, n, r) {
    var i = dt();
    r = r === void 0 ? null : r;
    var l = void 0;
    if (Re !== null) {
      var a = Re.memoizedState;
      if (l = a.destroy, r !== null && wo(r, a.deps)) {
        i.memoizedState = vi(t, n, l, r);
        return;
      }
    }
    Ce.flags |= e, i.memoizedState = vi(1 | t, n, l, r);
  }
  function mc(e, t) {
    return Ol(8390656, 8, e, t);
  }
  function xo(e, t) {
    return Nl(2048, 8, e, t);
  }
  function yc(e, t) {
    return Nl(4, 2, e, t);
  }
  function vc(e, t) {
    return Nl(4, 4, e, t);
  }
  function gc(e, t) {
    if (typeof t == "function")
      return e = e(), t(e), function() {
        t(null);
      };
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function wc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Nl(4, 4, gc.bind(null, t, e), n);
  }
  function _o() {
  }
  function Sc(e, t) {
    var n = dt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && wo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function kc(e, t) {
    var n = dt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && wo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Ec(e, t, n) {
    return Fn & 21 ? (kt(n, t) || (n = qs(), Ce.lanes |= n, Dn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ze = !0), e.memoizedState = n);
  }
  function Dh(e, t) {
    var n = de;
    de = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = go.transition;
    go.transition = {};
    try {
      e(!1), t();
    } finally {
      de = n, go.transition = r;
    }
  }
  function Cc() {
    return dt().memoizedState;
  }
  function Ih(e, t, n) {
    var r = hn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, xc(e))
      _c(t, n);
    else if (n = qa(e, t, n, r), n !== null) {
      var i = $e();
      Pt(n, e, r, i), Pc(n, t, r);
    }
  }
  function Uh(e, t, n) {
    var r = hn(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (xc(e))
      _c(t, i);
    else {
      var l = e.alternate;
      if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null))
        try {
          var a = t.lastRenderedState, c = l(a, n);
          if (i.hasEagerState = !0, i.eagerState = c, kt(c, a)) {
            var d = t.interleaved;
            d === null ? (i.next = i, ao(t)) : (i.next = d.next, d.next = i), t.interleaved = i;
            return;
          }
        } catch {
        } finally {
        }
      n = qa(e, t, i, r), n !== null && (i = $e(), Pt(n, e, r, i), Pc(n, t, r));
    }
  }
  function xc(e) {
    var t = e.alternate;
    return e === Ce || t !== null && t === Ce;
  }
  function _c(e, t) {
    pi = Pl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Pc(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, xu(e, n);
    }
  }
  var Rl = { readContext: ft, useCallback: He, useContext: He, useEffect: He, useImperativeHandle: He, useInsertionEffect: He, useLayoutEffect: He, useMemo: He, useReducer: He, useRef: He, useState: He, useDebugValue: He, useDeferredValue: He, useTransition: He, useMutableSource: He, useSyncExternalStore: He, useId: He, unstable_isNewReconciler: !1 }, Ah = { readContext: ft, useCallback: function(e, t) {
    return Mt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: ft, useEffect: mc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Ol(
      4194308,
      4,
      gc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Ol(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Ol(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Mt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Mt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Ih.bind(null, Ce, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Mt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: hc, useDebugValue: _o, useDeferredValue: function(e) {
    return Mt().memoizedState = e;
  }, useTransition: function() {
    var e = hc(!1), t = e[0];
    return e = Dh.bind(null, e[1]), Mt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Ce, i = Mt();
    if (ke) {
      if (n === void 0)
        throw Error(s(407));
      n = n();
    } else {
      if (n = t(), Fe === null)
        throw Error(s(349));
      Fn & 30 || sc(r, t, n);
    }
    i.memoizedState = n;
    var l = { value: n, getSnapshot: t };
    return i.queue = l, mc(cc.bind(
      null,
      r,
      l,
      e
    ), [e]), r.flags |= 2048, vi(9, ac.bind(null, r, l, n, t), void 0, null), n;
  }, useId: function() {
    var e = Mt(), t = Fe.identifierPrefix;
    if (ke) {
      var n = Vt, r = Bt;
      n = (r & ~(1 << 32 - St(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = mi++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else
      n = Fh++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Qh = {
    readContext: ft,
    useCallback: Sc,
    useContext: ft,
    useEffect: xo,
    useImperativeHandle: wc,
    useInsertionEffect: yc,
    useLayoutEffect: vc,
    useMemo: kc,
    useReducer: Eo,
    useRef: pc,
    useState: function() {
      return Eo(yi);
    },
    useDebugValue: _o,
    useDeferredValue: function(e) {
      var t = dt();
      return Ec(t, Re.memoizedState, e);
    },
    useTransition: function() {
      var e = Eo(yi)[0], t = dt().memoizedState;
      return [e, t];
    },
    useMutableSource: uc,
    useSyncExternalStore: oc,
    useId: Cc,
    unstable_isNewReconciler: !1
  }, Hh = { readContext: ft, useCallback: Sc, useContext: ft, useEffect: xo, useImperativeHandle: wc, useInsertionEffect: yc, useLayoutEffect: vc, useMemo: kc, useReducer: Co, useRef: pc, useState: function() {
    return Co(yi);
  }, useDebugValue: _o, useDeferredValue: function(e) {
    var t = dt();
    return Re === null ? t.memoizedState = e : Ec(t, Re.memoizedState, e);
  }, useTransition: function() {
    var e = Co(yi)[0], t = dt().memoizedState;
    return [e, t];
  }, useMutableSource: uc, useSyncExternalStore: oc, useId: Cc, unstable_isNewReconciler: !1 };
  function yr(e, t) {
    try {
      var n = "", r = t;
      do
        n += me(r), r = r.return;
      while (r);
      var i = n;
    } catch (l) {
      i = `
Error generating stack: ` + l.message + `
` + l.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function Po(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Oo(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Bh = typeof WeakMap == "function" ? WeakMap : Map;
  function Oc(e, t, n) {
    n = $t(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      Dl || (Dl = !0, Bo = r), Oo(e, t);
    }, n;
  }
  function Nc(e, t, n) {
    n = $t(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      n.payload = function() {
        return r(i);
      }, n.callback = function() {
        Oo(e, t);
      };
    }
    var l = e.stateNode;
    return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
      Oo(e, t), typeof r != "function" && (fn === null ? fn = /* @__PURE__ */ new Set([this]) : fn.add(this));
      var a = t.stack;
      this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
    }), n;
  }
  function Rc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Bh();
      var i = /* @__PURE__ */ new Set();
      r.set(t, i);
    } else
      i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
    i.has(n) || (i.add(n), e = np.bind(null, e, t, n), t.then(e, e));
  }
  function Tc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Lc(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = $t(-1, 1), t.tag = 2, an(n, t, 1))), n.lanes |= 1), e);
  }
  var Vh = le.ReactCurrentOwner, Ze = !1;
  function We(e, t, n, r) {
    t.child = e === null ? ic(t, null, n, r) : pr(t, e.child, n, r);
  }
  function zc(e, t, n, r, i) {
    n = n.render;
    var l = t.ref;
    return hr(t, i), r = So(e, t, n, r, l, i), n = ko(), e !== null && !Ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Kt(e, t, i)) : (ke && n && eo(t), t.flags |= 1, We(e, t, r, i), t.child);
  }
  function Mc(e, t, n, r, i) {
    if (e === null) {
      var l = n.type;
      return typeof l == "function" && !Yo(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, jc(e, t, l, r, i)) : (e = Bl(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (l = e.child, !(e.lanes & i)) {
      var a = l.memoizedProps;
      if (n = n.compare, n = n !== null ? n : ri, n(a, r) && e.ref === t.ref)
        return Kt(e, t, i);
    }
    return t.flags |= 1, e = mn(l, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function jc(e, t, n, r, i) {
    if (e !== null) {
      var l = e.memoizedProps;
      if (ri(l, r) && e.ref === t.ref)
        if (Ze = !1, t.pendingProps = r = l, (e.lanes & i) !== 0)
          e.flags & 131072 && (Ze = !0);
        else
          return t.lanes = e.lanes, Kt(e, t, i);
    }
    return No(e, t, n, r, i);
  }
  function Fc(e, t, n) {
    var r = t.pendingProps, i = r.children, l = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ye(gr, ut), ut |= n;
      else {
        if (!(n & 1073741824))
          return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ye(gr, ut), ut |= e, null;
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = l !== null ? l.baseLanes : n, ye(gr, ut), ut |= r;
      }
    else
      l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, ye(gr, ut), ut |= r;
    return We(e, t, i, n), t.child;
  }
  function Dc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function No(e, t, n, r, i) {
    var l = Xe(n) ? Tn : Qe.current;
    return l = sr(t, l), hr(t, i), n = So(e, t, n, r, l, i), r = ko(), e !== null && !Ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Kt(e, t, i)) : (ke && r && eo(t), t.flags |= 1, We(e, t, n, i), t.child);
  }
  function Ic(e, t, n, r, i) {
    if (Xe(n)) {
      var l = !0;
      hl(t);
    } else
      l = !1;
    if (hr(t, i), t.stateNode === null)
      Ll(e, t), ec(t, n, r), ho(t, n, r, i), r = !0;
    else if (e === null) {
      var a = t.stateNode, c = t.memoizedProps;
      a.props = c;
      var d = a.context, g = n.contextType;
      typeof g == "object" && g !== null ? g = ft(g) : (g = Xe(n) ? Tn : Qe.current, g = sr(t, g));
      var E = n.getDerivedStateFromProps, x = typeof E == "function" || typeof a.getSnapshotBeforeUpdate == "function";
      x || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (c !== r || d !== g) && tc(t, a, r, g), sn = !1;
      var S = t.memoizedState;
      a.state = S, kl(t, r, a, i), d = t.memoizedState, c !== r || S !== d || Ye.current || sn ? (typeof E == "function" && (fo(t, n, E, r), d = t.memoizedState), (c = sn || ba(t, n, c, r, S, d, g)) ? (x || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = d), a.props = r, a.state = d, a.context = g, r = c) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      a = t.stateNode, Ya(e, t), c = t.memoizedProps, g = t.type === t.elementType ? c : Ct(t.type, c), a.props = g, x = t.pendingProps, S = a.context, d = n.contextType, typeof d == "object" && d !== null ? d = ft(d) : (d = Xe(n) ? Tn : Qe.current, d = sr(t, d));
      var M = n.getDerivedStateFromProps;
      (E = typeof M == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (c !== x || S !== d) && tc(t, a, r, d), sn = !1, S = t.memoizedState, a.state = S, kl(t, r, a, i);
      var D = t.memoizedState;
      c !== x || S !== D || Ye.current || sn ? (typeof M == "function" && (fo(t, n, M, r), D = t.memoizedState), (g = sn || ba(t, n, g, r, S, D, d) || !1) ? (E || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, D, d), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, D, d)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || c === e.memoizedProps && S === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && S === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = D), a.props = r, a.state = D, a.context = d, r = g) : (typeof a.componentDidUpdate != "function" || c === e.memoizedProps && S === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && S === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Ro(e, t, n, r, l, i);
  }
  function Ro(e, t, n, r, i, l) {
    Dc(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a)
      return i && Ha(t, n, !1), Kt(e, t, l);
    r = t.stateNode, Vh.current = t;
    var c = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && a ? (t.child = pr(t, e.child, null, l), t.child = pr(t, null, c, l)) : We(e, t, c, l), t.memoizedState = r.state, i && Ha(t, n, !0), t.child;
  }
  function Uc(e) {
    var t = e.stateNode;
    t.pendingContext ? Aa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Aa(e, t.context, !1), po(e, t.containerInfo);
  }
  function Ac(e, t, n, r, i) {
    return fr(), io(i), t.flags |= 256, We(e, t, n, r), t.child;
  }
  var To = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Lo(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Qc(e, t, n) {
    var r = t.pendingProps, i = Ee.current, l = !1, a = (t.flags & 128) !== 0, c;
    if ((c = a) || (c = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), c ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), ye(Ee, i & 1), e === null)
      return ro(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, a = { mode: "hidden", children: a }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = a) : l = Vl(a, r, 0, null), e = Qn(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Lo(n), t.memoizedState = To, e) : zo(t, a));
    if (i = e.memoizedState, i !== null && (c = i.dehydrated, c !== null))
      return Wh(e, t, a, r, c, i, n);
    if (l) {
      l = r.fallback, a = t.mode, i = e.child, c = i.sibling;
      var d = { mode: "hidden", children: r.children };
      return !(a & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = d, t.deletions = null) : (r = mn(i, d), r.subtreeFlags = i.subtreeFlags & 14680064), c !== null ? l = mn(c, l) : (l = Qn(l, a, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, a = e.child.memoizedState, a = a === null ? Lo(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, l.memoizedState = a, l.childLanes = e.childLanes & ~n, t.memoizedState = To, r;
    }
    return l = e.child, e = l.sibling, r = mn(l, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function zo(e, t) {
    return t = Vl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Tl(e, t, n, r) {
    return r !== null && io(r), pr(t, e.child, null, n), e = zo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Wh(e, t, n, r, i, l, a) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Po(Error(s(422))), Tl(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, i = t.mode, r = Vl({ mode: "visible", children: r.children }, i, 0, null), l = Qn(l, i, a, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && pr(t, e.child, null, a), t.child.memoizedState = Lo(a), t.memoizedState = To, l);
    if (!(t.mode & 1))
      return Tl(e, t, a, null);
    if (i.data === "$!") {
      if (r = i.nextSibling && i.nextSibling.dataset, r)
        var c = r.dgst;
      return r = c, l = Error(s(419)), r = Po(l, r, void 0), Tl(e, t, a, r);
    }
    if (c = (a & e.childLanes) !== 0, Ze || c) {
      if (r = Fe, r !== null) {
        switch (a & -a) {
          case 4:
            i = 2;
            break;
          case 16:
            i = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            i = 32;
            break;
          case 536870912:
            i = 268435456;
            break;
          default:
            i = 0;
        }
        i = i & (r.suspendedLanes | a) ? 0 : i, i !== 0 && i !== l.retryLane && (l.retryLane = i, Wt(e, i), Pt(r, e, i, -1));
      }
      return qo(), r = Po(Error(s(421))), Tl(e, t, a, r);
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = rp.bind(null, e), i._reactRetry = t, null) : (e = l.treeContext, lt = rn(i.nextSibling), it = t, ke = !0, Et = null, e !== null && (at[ct++] = Bt, at[ct++] = Vt, at[ct++] = Ln, Bt = e.id, Vt = e.overflow, Ln = t), t = zo(t, r.children), t.flags |= 4096, t);
  }
  function Hc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), so(e.return, t, n);
  }
  function Mo(e, t, n, r, i) {
    var l = e.memoizedState;
    l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = i);
  }
  function Bc(e, t, n) {
    var r = t.pendingProps, i = r.revealOrder, l = r.tail;
    if (We(e, t, r.children, n), r = Ee.current, r & 2)
      r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128)
        e:
          for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && Hc(e, n, t);
            else if (e.tag === 19)
              Hc(e, n, t);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t)
              break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
      r &= 1;
    }
    if (ye(Ee, r), !(t.mode & 1))
      t.memoizedState = null;
    else
      switch (i) {
        case "forwards":
          for (n = t.child, i = null; n !== null; )
            e = n.alternate, e !== null && xl(e) === null && (i = n), n = n.sibling;
          n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Mo(t, !1, i, n, l);
          break;
        case "backwards":
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (e = i.alternate, e !== null && xl(e) === null) {
              t.child = i;
              break;
            }
            e = i.sibling, i.sibling = n, n = i, i = e;
          }
          Mo(t, !0, n, null, l);
          break;
        case "together":
          Mo(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Ll(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Kt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Dn |= t.lanes, !(n & t.childLanes))
      return null;
    if (e !== null && t.child !== e.child)
      throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, n = mn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = mn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function $h(e, t, n) {
    switch (t.tag) {
      case 3:
        Uc(t), fr();
        break;
      case 5:
        lc(t);
        break;
      case 1:
        Xe(t.type) && hl(t);
        break;
      case 4:
        po(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, i = t.memoizedProps.value;
        ye(gl, r._currentValue), r._currentValue = i;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (ye(Ee, Ee.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Qc(e, t, n) : (ye(Ee, Ee.current & 1), e = Kt(e, t, n), e !== null ? e.sibling : null);
        ye(Ee, Ee.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r)
            return Bc(e, t, n);
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), ye(Ee, Ee.current), r)
          break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Fc(e, t, n);
    }
    return Kt(e, t, n);
  }
  var Vc, jo, Wc, $c;
  Vc = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6)
        e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t)
        break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t)
          return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, jo = function() {
  }, Wc = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
      e = t.stateNode, jn(zt.current);
      var l = null;
      switch (n) {
        case "input":
          i = su(e, i), r = su(e, r), l = [];
          break;
        case "select":
          i = h({}, i, { value: void 0 }), r = h({}, r, { value: void 0 }), l = [];
          break;
        case "textarea":
          i = fu(e, i), r = fu(e, r), l = [];
          break;
        default:
          typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = cl);
      }
      hu(n, r);
      var a;
      n = null;
      for (g in i)
        if (!r.hasOwnProperty(g) && i.hasOwnProperty(g) && i[g] != null)
          if (g === "style") {
            var c = i[g];
            for (a in c)
              c.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
          } else
            g !== "dangerouslySetInnerHTML" && g !== "children" && g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && g !== "autoFocus" && (w.hasOwnProperty(g) ? l || (l = []) : (l = l || []).push(g, null));
      for (g in r) {
        var d = r[g];
        if (c = i != null ? i[g] : void 0, r.hasOwnProperty(g) && d !== c && (d != null || c != null))
          if (g === "style")
            if (c) {
              for (a in c)
                !c.hasOwnProperty(a) || d && d.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
              for (a in d)
                d.hasOwnProperty(a) && c[a] !== d[a] && (n || (n = {}), n[a] = d[a]);
            } else
              n || (l || (l = []), l.push(
                g,
                n
              )), n = d;
          else
            g === "dangerouslySetInnerHTML" ? (d = d ? d.__html : void 0, c = c ? c.__html : void 0, d != null && c !== d && (l = l || []).push(g, d)) : g === "children" ? typeof d != "string" && typeof d != "number" || (l = l || []).push(g, "" + d) : g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && (w.hasOwnProperty(g) ? (d != null && g === "onScroll" && ge("scroll", e), l || c === d || (l = [])) : (l = l || []).push(g, d));
      }
      n && (l = l || []).push("style", n);
      var g = l;
      (t.updateQueue = g) && (t.flags |= 4);
    }
  }, $c = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function gi(e, t) {
    if (!ke)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), n = n.sibling;
          r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
      }
  }
  function Be(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t)
      for (var i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
      for (i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Kh(e, t, n) {
    var r = t.pendingProps;
    switch (to(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Be(t), null;
      case 1:
        return Xe(t.type) && dl(), Be(t), null;
      case 3:
        return r = t.stateNode, mr(), we(Ye), we(Qe), vo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (vl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Et !== null && ($o(Et), Et = null))), jo(e, t), Be(t), null;
      case 5:
        mo(t);
        var i = jn(hi.current);
        if (n = t.type, e !== null && t.stateNode != null)
          Wc(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw Error(s(166));
            return Be(t), null;
          }
          if (e = jn(zt.current), vl(t)) {
            r = t.stateNode, n = t.type;
            var l = t.memoizedProps;
            switch (r[Lt] = t, r[si] = l, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                ge("cancel", r), ge("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ge("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < li.length; i++)
                  ge(li[i], r);
                break;
              case "source":
                ge("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ge(
                  "error",
                  r
                ), ge("load", r);
                break;
              case "details":
                ge("toggle", r);
                break;
              case "input":
                xs(r, l), ge("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!l.multiple }, ge("invalid", r);
                break;
              case "textarea":
                Os(r, l), ge("invalid", r);
            }
            hu(n, l), i = null;
            for (var a in l)
              if (l.hasOwnProperty(a)) {
                var c = l[a];
                a === "children" ? typeof c == "string" ? r.textContent !== c && (l.suppressHydrationWarning !== !0 && al(r.textContent, c, e), i = ["children", c]) : typeof c == "number" && r.textContent !== "" + c && (l.suppressHydrationWarning !== !0 && al(
                  r.textContent,
                  c,
                  e
                ), i = ["children", "" + c]) : w.hasOwnProperty(a) && c != null && a === "onScroll" && ge("scroll", r);
              }
            switch (n) {
              case "input":
                Qi(r), Ps(r, l, !0);
                break;
              case "textarea":
                Qi(r), Rs(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof l.onClick == "function" && (r.onclick = cl);
            }
            r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            a = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ts(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[Lt] = t, e[si] = r, Vc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (a = pu(n, r), n) {
                case "dialog":
                  ge("cancel", e), ge("close", e), i = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ge("load", e), i = r;
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < li.length; i++)
                    ge(li[i], e);
                  i = r;
                  break;
                case "source":
                  ge("error", e), i = r;
                  break;
                case "img":
                case "image":
                case "link":
                  ge(
                    "error",
                    e
                  ), ge("load", e), i = r;
                  break;
                case "details":
                  ge("toggle", e), i = r;
                  break;
                case "input":
                  xs(e, r), i = su(e, r), ge("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, i = h({}, r, { value: void 0 }), ge("invalid", e);
                  break;
                case "textarea":
                  Os(e, r), i = fu(e, r), ge("invalid", e);
                  break;
                default:
                  i = r;
              }
              hu(n, i), c = i;
              for (l in c)
                if (c.hasOwnProperty(l)) {
                  var d = c[l];
                  l === "style" ? Ms(e, d) : l === "dangerouslySetInnerHTML" ? (d = d ? d.__html : void 0, d != null && Ls(e, d)) : l === "children" ? typeof d == "string" ? (n !== "textarea" || d !== "") && Qr(e, d) : typeof d == "number" && Qr(e, "" + d) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (w.hasOwnProperty(l) ? d != null && l === "onScroll" && ge("scroll", e) : d != null && ee(e, l, d, a));
                }
              switch (n) {
                case "input":
                  Qi(e), Ps(e, r, !1);
                  break;
                case "textarea":
                  Qi(e), Rs(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ce(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, l = r.value, l != null ? Xn(e, !!r.multiple, l, !1) : r.defaultValue != null && Xn(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = cl);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Be(t), null;
      case 6:
        if (e && t.stateNode != null)
          $c(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null)
            throw Error(s(166));
          if (n = jn(hi.current), jn(zt.current), vl(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Lt] = t, (l = r.nodeValue !== n) && (e = it, e !== null))
              switch (e.tag) {
                case 3:
                  al(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 && al(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            l && (t.flags |= 4);
          } else
            r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Lt] = t, t.stateNode = r;
        }
        return Be(t), null;
      case 13:
        if (we(Ee), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (ke && lt !== null && t.mode & 1 && !(t.flags & 128))
            Ga(), fr(), t.flags |= 98560, l = !1;
          else if (l = vl(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!l)
                throw Error(s(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l)
                throw Error(s(317));
              l[Lt] = t;
            } else
              fr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            Be(t), l = !1;
          } else
            Et !== null && ($o(Et), Et = null), l = !0;
          if (!l)
            return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Ee.current & 1 ? Te === 0 && (Te = 3) : qo())), t.updateQueue !== null && (t.flags |= 4), Be(t), null);
      case 4:
        return mr(), jo(e, t), e === null && ui(t.stateNode.containerInfo), Be(t), null;
      case 10:
        return oo(t.type._context), Be(t), null;
      case 17:
        return Xe(t.type) && dl(), Be(t), null;
      case 19:
        if (we(Ee), l = t.memoizedState, l === null)
          return Be(t), null;
        if (r = (t.flags & 128) !== 0, a = l.rendering, a === null)
          if (r)
            gi(l, !1);
          else {
            if (Te !== 0 || e !== null && e.flags & 128)
              for (e = t.child; e !== null; ) {
                if (a = xl(e), a !== null) {
                  for (t.flags |= 128, gi(l, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                    l = n, e = r, l.flags &= 14680066, a = l.alternate, a === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, e = a.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                  return ye(Ee, Ee.current & 1 | 2), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && Pe() > wr && (t.flags |= 128, r = !0, gi(l, !1), t.lanes = 4194304);
          }
        else {
          if (!r)
            if (e = xl(a), e !== null) {
              if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), gi(l, !0), l.tail === null && l.tailMode === "hidden" && !a.alternate && !ke)
                return Be(t), null;
            } else
              2 * Pe() - l.renderingStartTime > wr && n !== 1073741824 && (t.flags |= 128, r = !0, gi(l, !1), t.lanes = 4194304);
          l.isBackwards ? (a.sibling = t.child, t.child = a) : (n = l.last, n !== null ? n.sibling = a : t.child = a, l.last = a);
        }
        return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = Pe(), t.sibling = null, n = Ee.current, ye(Ee, r ? n & 1 | 2 : n & 1), t) : (Be(t), null);
      case 22:
      case 23:
        return Go(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ut & 1073741824 && (Be(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Be(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Gh(e, t) {
    switch (to(t), t.tag) {
      case 1:
        return Xe(t.type) && dl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return mr(), we(Ye), we(Qe), vo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return mo(t), null;
      case 13:
        if (we(Ee), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(s(340));
          fr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return we(Ee), null;
      case 4:
        return mr(), null;
      case 10:
        return oo(t.type._context), null;
      case 22:
      case 23:
        return Go(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var zl = !1, Ve = !1, qh = typeof WeakSet == "function" ? WeakSet : Set, j = null;
  function vr(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          _e(e, t, r);
        }
      else
        n.current = null;
  }
  function Fo(e, t, n) {
    try {
      n();
    } catch (r) {
      _e(e, t, r);
    }
  }
  var Kc = !1;
  function Yh(e, t) {
    if (Ku = Ji, e = Ca(), Uu(e)) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = (n = e.ownerDocument) && n.defaultView || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var i = r.anchorOffset, l = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, l.nodeType;
            } catch {
              n = null;
              break e;
            }
            var a = 0, c = -1, d = -1, g = 0, E = 0, x = e, S = null;
            t:
              for (; ; ) {
                for (var M; x !== n || i !== 0 && x.nodeType !== 3 || (c = a + i), x !== l || r !== 0 && x.nodeType !== 3 || (d = a + r), x.nodeType === 3 && (a += x.nodeValue.length), (M = x.firstChild) !== null; )
                  S = x, x = M;
                for (; ; ) {
                  if (x === e)
                    break t;
                  if (S === n && ++g === i && (c = a), S === l && ++E === r && (d = a), (M = x.nextSibling) !== null)
                    break;
                  x = S, S = x.parentNode;
                }
                x = M;
              }
            n = c === -1 || d === -1 ? null : { start: c, end: d };
          } else
            n = null;
        }
      n = n || { start: 0, end: 0 };
    } else
      n = null;
    for (Gu = { focusedElem: e, selectionRange: n }, Ji = !1, j = t; j !== null; )
      if (t = j, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, j = e;
      else
        for (; j !== null; ) {
          t = j;
          try {
            var D = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (D !== null) {
                    var A = D.memoizedProps, Oe = D.memoizedState, y = t.stateNode, m = y.getSnapshotBeforeUpdate(t.elementType === t.type ? A : Ct(t.type, A), Oe);
                    y.__reactInternalSnapshotBeforeUpdate = m;
                  }
                  break;
                case 3:
                  var v = t.stateNode.containerInfo;
                  v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(s(163));
              }
          } catch (_) {
            _e(t, t.return, _);
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, j = e;
            break;
          }
          j = t.return;
        }
    return D = Kc, Kc = !1, D;
  }
  function wi(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var i = r = r.next;
      do {
        if ((i.tag & e) === e) {
          var l = i.destroy;
          i.destroy = void 0, l !== void 0 && Fo(t, n, l);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function Ml(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Do(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Gc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Gc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Lt], delete t[si], delete t[Zu], delete t[Lh], delete t[zh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function qc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Yc(e) {
    e:
      for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || qc(e.return))
            return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.flags & 2 || e.child === null || e.tag === 4)
            continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2))
          return e.stateNode;
      }
  }
  function Io(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = cl));
    else if (r !== 4 && (e = e.child, e !== null))
      for (Io(e, t, n), e = e.sibling; e !== null; )
        Io(e, t, n), e = e.sibling;
  }
  function Uo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
      for (Uo(e, t, n), e = e.sibling; e !== null; )
        Uo(e, t, n), e = e.sibling;
  }
  var Ue = null, xt = !1;
  function cn(e, t, n) {
    for (n = n.child; n !== null; )
      Xc(e, t, n), n = n.sibling;
  }
  function Xc(e, t, n) {
    if (Tt && typeof Tt.onCommitFiberUnmount == "function")
      try {
        Tt.onCommitFiberUnmount(Ki, n);
      } catch {
      }
    switch (n.tag) {
      case 5:
        Ve || vr(n, t);
      case 6:
        var r = Ue, i = xt;
        Ue = null, cn(e, t, n), Ue = r, xt = i, Ue !== null && (xt ? (e = Ue, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ue.removeChild(n.stateNode));
        break;
      case 18:
        Ue !== null && (xt ? (e = Ue, n = n.stateNode, e.nodeType === 8 ? Xu(e.parentNode, n) : e.nodeType === 1 && Xu(e, n), Zr(e)) : Xu(Ue, n.stateNode));
        break;
      case 4:
        r = Ue, i = xt, Ue = n.stateNode.containerInfo, xt = !0, cn(e, t, n), Ue = r, xt = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ve && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          i = r = r.next;
          do {
            var l = i, a = l.destroy;
            l = l.tag, a !== void 0 && (l & 2 || l & 4) && Fo(n, t, a), i = i.next;
          } while (i !== r);
        }
        cn(e, t, n);
        break;
      case 1:
        if (!Ve && (vr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
          try {
            r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
          } catch (c) {
            _e(n, t, c);
          }
        cn(e, t, n);
        break;
      case 21:
        cn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Ve = (r = Ve) || n.memoizedState !== null, cn(e, t, n), Ve = r) : cn(e, t, n);
        break;
      default:
        cn(e, t, n);
    }
  }
  function Zc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new qh()), t.forEach(function(r) {
        var i = ip.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
    }
  }
  function _t(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        try {
          var l = e, a = t, c = a;
          e:
            for (; c !== null; ) {
              switch (c.tag) {
                case 5:
                  Ue = c.stateNode, xt = !1;
                  break e;
                case 3:
                  Ue = c.stateNode.containerInfo, xt = !0;
                  break e;
                case 4:
                  Ue = c.stateNode.containerInfo, xt = !0;
                  break e;
              }
              c = c.return;
            }
          if (Ue === null)
            throw Error(s(160));
          Xc(l, a, i), Ue = null, xt = !1;
          var d = i.alternate;
          d !== null && (d.return = null), i.return = null;
        } catch (g) {
          _e(i, t, g);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; )
        Jc(t, e), t = t.sibling;
  }
  function Jc(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (_t(t, e), jt(e), r & 4) {
          try {
            wi(3, e, e.return), Ml(3, e);
          } catch (A) {
            _e(e, e.return, A);
          }
          try {
            wi(5, e, e.return);
          } catch (A) {
            _e(e, e.return, A);
          }
        }
        break;
      case 1:
        _t(t, e), jt(e), r & 512 && n !== null && vr(n, n.return);
        break;
      case 5:
        if (_t(t, e), jt(e), r & 512 && n !== null && vr(n, n.return), e.flags & 32) {
          var i = e.stateNode;
          try {
            Qr(i, "");
          } catch (A) {
            _e(e, e.return, A);
          }
        }
        if (r & 4 && (i = e.stateNode, i != null)) {
          var l = e.memoizedProps, a = n !== null ? n.memoizedProps : l, c = e.type, d = e.updateQueue;
          if (e.updateQueue = null, d !== null)
            try {
              c === "input" && l.type === "radio" && l.name != null && _s(i, l), pu(c, a);
              var g = pu(c, l);
              for (a = 0; a < d.length; a += 2) {
                var E = d[a], x = d[a + 1];
                E === "style" ? Ms(i, x) : E === "dangerouslySetInnerHTML" ? Ls(i, x) : E === "children" ? Qr(i, x) : ee(i, E, x, g);
              }
              switch (c) {
                case "input":
                  au(i, l);
                  break;
                case "textarea":
                  Ns(i, l);
                  break;
                case "select":
                  var S = i._wrapperState.wasMultiple;
                  i._wrapperState.wasMultiple = !!l.multiple;
                  var M = l.value;
                  M != null ? Xn(i, !!l.multiple, M, !1) : S !== !!l.multiple && (l.defaultValue != null ? Xn(
                    i,
                    !!l.multiple,
                    l.defaultValue,
                    !0
                  ) : Xn(i, !!l.multiple, l.multiple ? [] : "", !1));
              }
              i[si] = l;
            } catch (A) {
              _e(e, e.return, A);
            }
        }
        break;
      case 6:
        if (_t(t, e), jt(e), r & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          i = e.stateNode, l = e.memoizedProps;
          try {
            i.nodeValue = l;
          } catch (A) {
            _e(e, e.return, A);
          }
        }
        break;
      case 3:
        if (_t(t, e), jt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            Zr(t.containerInfo);
          } catch (A) {
            _e(e, e.return, A);
          }
        break;
      case 4:
        _t(t, e), jt(e);
        break;
      case 13:
        _t(t, e), jt(e), i = e.child, i.flags & 8192 && (l = i.memoizedState !== null, i.stateNode.isHidden = l, !l || i.alternate !== null && i.alternate.memoizedState !== null || (Ho = Pe())), r & 4 && Zc(e);
        break;
      case 22:
        if (E = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ve = (g = Ve) || E, _t(t, e), Ve = g) : _t(t, e), jt(e), r & 8192) {
          if (g = e.memoizedState !== null, (e.stateNode.isHidden = g) && !E && e.mode & 1)
            for (j = e, E = e.child; E !== null; ) {
              for (x = j = E; j !== null; ) {
                switch (S = j, M = S.child, S.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    wi(4, S, S.return);
                    break;
                  case 1:
                    vr(S, S.return);
                    var D = S.stateNode;
                    if (typeof D.componentWillUnmount == "function") {
                      r = S, n = S.return;
                      try {
                        t = r, D.props = t.memoizedProps, D.state = t.memoizedState, D.componentWillUnmount();
                      } catch (A) {
                        _e(r, n, A);
                      }
                    }
                    break;
                  case 5:
                    vr(S, S.return);
                    break;
                  case 22:
                    if (S.memoizedState !== null) {
                      tf(x);
                      continue;
                    }
                }
                M !== null ? (M.return = S, j = M) : tf(x);
              }
              E = E.sibling;
            }
          e:
            for (E = null, x = e; ; ) {
              if (x.tag === 5) {
                if (E === null) {
                  E = x;
                  try {
                    i = x.stateNode, g ? (l = i.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (c = x.stateNode, d = x.memoizedProps.style, a = d != null && d.hasOwnProperty("display") ? d.display : null, c.style.display = zs("display", a));
                  } catch (A) {
                    _e(e, e.return, A);
                  }
                }
              } else if (x.tag === 6) {
                if (E === null)
                  try {
                    x.stateNode.nodeValue = g ? "" : x.memoizedProps;
                  } catch (A) {
                    _e(e, e.return, A);
                  }
              } else if ((x.tag !== 22 && x.tag !== 23 || x.memoizedState === null || x === e) && x.child !== null) {
                x.child.return = x, x = x.child;
                continue;
              }
              if (x === e)
                break e;
              for (; x.sibling === null; ) {
                if (x.return === null || x.return === e)
                  break e;
                E === x && (E = null), x = x.return;
              }
              E === x && (E = null), x.sibling.return = x.return, x = x.sibling;
            }
        }
        break;
      case 19:
        _t(t, e), jt(e), r & 4 && Zc(e);
        break;
      case 21:
        break;
      default:
        _t(
          t,
          e
        ), jt(e);
    }
  }
  function jt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (qc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(s(160));
        }
        switch (r.tag) {
          case 5:
            var i = r.stateNode;
            r.flags & 32 && (Qr(i, ""), r.flags &= -33);
            var l = Yc(e);
            Uo(e, l, i);
            break;
          case 3:
          case 4:
            var a = r.stateNode.containerInfo, c = Yc(e);
            Io(e, c, a);
            break;
          default:
            throw Error(s(161));
        }
      } catch (d) {
        _e(e, e.return, d);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Xh(e, t, n) {
    j = e, bc(e);
  }
  function bc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; j !== null; ) {
      var i = j, l = i.child;
      if (i.tag === 22 && r) {
        var a = i.memoizedState !== null || zl;
        if (!a) {
          var c = i.alternate, d = c !== null && c.memoizedState !== null || Ve;
          c = zl;
          var g = Ve;
          if (zl = a, (Ve = d) && !g)
            for (j = i; j !== null; )
              a = j, d = a.child, a.tag === 22 && a.memoizedState !== null ? nf(i) : d !== null ? (d.return = a, j = d) : nf(i);
          for (; l !== null; )
            j = l, bc(l), l = l.sibling;
          j = i, zl = c, Ve = g;
        }
        ef(e);
      } else
        i.subtreeFlags & 8772 && l !== null ? (l.return = i, j = l) : ef(e);
    }
  }
  function ef(e) {
    for (; j !== null; ) {
      var t = j;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ve || Ml(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ve)
                  if (n === null)
                    r.componentDidMount();
                  else {
                    var i = t.elementType === t.type ? n.memoizedProps : Ct(t.type, n.memoizedProps);
                    r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var l = t.updateQueue;
                l !== null && Za(t, l, r);
                break;
              case 3:
                var a = t.updateQueue;
                if (a !== null) {
                  if (n = null, t.child !== null)
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Za(t, a, n);
                }
                break;
              case 5:
                var c = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = c;
                  var d = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d.autoFocus && n.focus();
                      break;
                    case "img":
                      d.src && (n.src = d.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var g = t.alternate;
                  if (g !== null) {
                    var E = g.memoizedState;
                    if (E !== null) {
                      var x = E.dehydrated;
                      x !== null && Zr(x);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(s(163));
            }
          Ve || t.flags & 512 && Do(t);
        } catch (S) {
          _e(t, t.return, S);
        }
      }
      if (t === e) {
        j = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, j = n;
        break;
      }
      j = t.return;
    }
  }
  function tf(e) {
    for (; j !== null; ) {
      var t = j;
      if (t === e) {
        j = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, j = n;
        break;
      }
      j = t.return;
    }
  }
  function nf(e) {
    for (; j !== null; ) {
      var t = j;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Ml(4, t);
            } catch (d) {
              _e(t, n, d);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (d) {
                _e(t, i, d);
              }
            }
            var l = t.return;
            try {
              Do(t);
            } catch (d) {
              _e(t, l, d);
            }
            break;
          case 5:
            var a = t.return;
            try {
              Do(t);
            } catch (d) {
              _e(t, a, d);
            }
        }
      } catch (d) {
        _e(t, t.return, d);
      }
      if (t === e) {
        j = null;
        break;
      }
      var c = t.sibling;
      if (c !== null) {
        c.return = t.return, j = c;
        break;
      }
      j = t.return;
    }
  }
  var Zh = Math.ceil, jl = le.ReactCurrentDispatcher, Ao = le.ReactCurrentOwner, ht = le.ReactCurrentBatchConfig, ue = 0, Fe = null, Ne = null, Ae = 0, ut = 0, gr = ln(0), Te = 0, Si = null, Dn = 0, Fl = 0, Qo = 0, ki = null, Je = null, Ho = 0, wr = 1 / 0, Gt = null, Dl = !1, Bo = null, fn = null, Il = !1, dn = null, Ul = 0, Ei = 0, Vo = null, Al = -1, Ql = 0;
  function $e() {
    return ue & 6 ? Pe() : Al !== -1 ? Al : Al = Pe();
  }
  function hn(e) {
    return e.mode & 1 ? ue & 2 && Ae !== 0 ? Ae & -Ae : jh.transition !== null ? (Ql === 0 && (Ql = qs()), Ql) : (e = de, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ra(e.type)), e) : 1;
  }
  function Pt(e, t, n, r) {
    if (50 < Ei)
      throw Ei = 0, Vo = null, Error(s(185));
    Kr(e, n, r), (!(ue & 2) || e !== Fe) && (e === Fe && (!(ue & 2) && (Fl |= n), Te === 4 && pn(e, Ae)), be(e, r), n === 1 && ue === 0 && !(t.mode & 1) && (wr = Pe() + 500, pl && on()));
  }
  function be(e, t) {
    var n = e.callbackNode;
    jd(e, t);
    var r = Yi(e, e === Fe ? Ae : 0);
    if (r === 0)
      n !== null && $s(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && $s(n), t === 1)
        e.tag === 0 ? Mh(lf.bind(null, e)) : Ba(lf.bind(null, e)), Rh(function() {
          !(ue & 6) && on();
        }), n = null;
      else {
        switch (Ys(r)) {
          case 1:
            n = ku;
            break;
          case 4:
            n = Ks;
            break;
          case 16:
            n = $i;
            break;
          case 536870912:
            n = Gs;
            break;
          default:
            n = $i;
        }
        n = hf(n, rf.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function rf(e, t) {
    if (Al = -1, Ql = 0, ue & 6)
      throw Error(s(327));
    var n = e.callbackNode;
    if (Sr() && e.callbackNode !== n)
      return null;
    var r = Yi(e, e === Fe ? Ae : 0);
    if (r === 0)
      return null;
    if (r & 30 || r & e.expiredLanes || t)
      t = Hl(e, r);
    else {
      t = r;
      var i = ue;
      ue |= 2;
      var l = of();
      (Fe !== e || Ae !== t) && (Gt = null, wr = Pe() + 500, Un(e, t));
      do
        try {
          ep();
          break;
        } catch (c) {
          uf(e, c);
        }
      while (!0);
      uo(), jl.current = l, ue = i, Ne !== null ? t = 0 : (Fe = null, Ae = 0, t = Te);
    }
    if (t !== 0) {
      if (t === 2 && (i = Eu(e), i !== 0 && (r = i, t = Wo(e, i))), t === 1)
        throw n = Si, Un(e, 0), pn(e, r), be(e, Pe()), n;
      if (t === 6)
        pn(e, r);
      else {
        if (i = e.current.alternate, !(r & 30) && !Jh(i) && (t = Hl(e, r), t === 2 && (l = Eu(e), l !== 0 && (r = l, t = Wo(e, l))), t === 1))
          throw n = Si, Un(e, 0), pn(e, r), be(e, Pe()), n;
        switch (e.finishedWork = i, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            An(e, Je, Gt);
            break;
          case 3:
            if (pn(e, r), (r & 130023424) === r && (t = Ho + 500 - Pe(), 10 < t)) {
              if (Yi(e, 0) !== 0)
                break;
              if (i = e.suspendedLanes, (i & r) !== r) {
                $e(), e.pingedLanes |= e.suspendedLanes & i;
                break;
              }
              e.timeoutHandle = Yu(An.bind(null, e, Je, Gt), t);
              break;
            }
            An(e, Je, Gt);
            break;
          case 4:
            if (pn(e, r), (r & 4194240) === r)
              break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var a = 31 - St(r);
              l = 1 << a, a = t[a], a > i && (i = a), r &= ~l;
            }
            if (r = i, r = Pe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Zh(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Yu(An.bind(null, e, Je, Gt), r);
              break;
            }
            An(e, Je, Gt);
            break;
          case 5:
            An(e, Je, Gt);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return be(e, Pe()), e.callbackNode === n ? rf.bind(null, e) : null;
  }
  function Wo(e, t) {
    var n = ki;
    return e.current.memoizedState.isDehydrated && (Un(e, t).flags |= 256), e = Hl(e, t), e !== 2 && (t = Je, Je = n, t !== null && $o(t)), e;
  }
  function $o(e) {
    Je === null ? Je = e : Je.push.apply(Je, e);
  }
  function Jh(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null))
          for (var r = 0; r < n.length; r++) {
            var i = n[r], l = i.getSnapshot;
            i = i.value;
            try {
              if (!kt(l(), i))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
      else {
        if (t === e)
          break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function pn(e, t) {
    for (t &= ~Qo, t &= ~Fl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - St(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function lf(e) {
    if (ue & 6)
      throw Error(s(327));
    Sr();
    var t = Yi(e, 0);
    if (!(t & 1))
      return be(e, Pe()), null;
    var n = Hl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Eu(e);
      r !== 0 && (t = r, n = Wo(e, r));
    }
    if (n === 1)
      throw n = Si, Un(e, 0), pn(e, t), be(e, Pe()), n;
    if (n === 6)
      throw Error(s(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, An(e, Je, Gt), be(e, Pe()), null;
  }
  function Ko(e, t) {
    var n = ue;
    ue |= 1;
    try {
      return e(t);
    } finally {
      ue = n, ue === 0 && (wr = Pe() + 500, pl && on());
    }
  }
  function In(e) {
    dn !== null && dn.tag === 0 && !(ue & 6) && Sr();
    var t = ue;
    ue |= 1;
    var n = ht.transition, r = de;
    try {
      if (ht.transition = null, de = 1, e)
        return e();
    } finally {
      de = r, ht.transition = n, ue = t, !(ue & 6) && on();
    }
  }
  function Go() {
    ut = gr.current, we(gr);
  }
  function Un(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Nh(n)), Ne !== null)
      for (n = Ne.return; n !== null; ) {
        var r = n;
        switch (to(r), r.tag) {
          case 1:
            r = r.type.childContextTypes, r != null && dl();
            break;
          case 3:
            mr(), we(Ye), we(Qe), vo();
            break;
          case 5:
            mo(r);
            break;
          case 4:
            mr();
            break;
          case 13:
            we(Ee);
            break;
          case 19:
            we(Ee);
            break;
          case 10:
            oo(r.type._context);
            break;
          case 22:
          case 23:
            Go();
        }
        n = n.return;
      }
    if (Fe = e, Ne = e = mn(e.current, null), Ae = ut = t, Te = 0, Si = null, Qo = Fl = Dn = 0, Je = ki = null, Mn !== null) {
      for (t = 0; t < Mn.length; t++)
        if (n = Mn[t], r = n.interleaved, r !== null) {
          n.interleaved = null;
          var i = r.next, l = n.pending;
          if (l !== null) {
            var a = l.next;
            l.next = i, r.next = a;
          }
          n.pending = r;
        }
      Mn = null;
    }
    return e;
  }
  function uf(e, t) {
    do {
      var n = Ne;
      try {
        if (uo(), _l.current = Rl, Pl) {
          for (var r = Ce.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), r = r.next;
          }
          Pl = !1;
        }
        if (Fn = 0, je = Re = Ce = null, pi = !1, mi = 0, Ao.current = null, n === null || n.return === null) {
          Te = 1, Si = t, Ne = null;
          break;
        }
        e: {
          var l = e, a = n.return, c = n, d = t;
          if (t = Ae, c.flags |= 32768, d !== null && typeof d == "object" && typeof d.then == "function") {
            var g = d, E = c, x = E.tag;
            if (!(E.mode & 1) && (x === 0 || x === 11 || x === 15)) {
              var S = E.alternate;
              S ? (E.updateQueue = S.updateQueue, E.memoizedState = S.memoizedState, E.lanes = S.lanes) : (E.updateQueue = null, E.memoizedState = null);
            }
            var M = Tc(a);
            if (M !== null) {
              M.flags &= -257, Lc(M, a, c, l, t), M.mode & 1 && Rc(l, g, t), t = M, d = g;
              var D = t.updateQueue;
              if (D === null) {
                var A = /* @__PURE__ */ new Set();
                A.add(d), t.updateQueue = A;
              } else
                D.add(d);
              break e;
            } else {
              if (!(t & 1)) {
                Rc(l, g, t), qo();
                break e;
              }
              d = Error(s(426));
            }
          } else if (ke && c.mode & 1) {
            var Oe = Tc(a);
            if (Oe !== null) {
              !(Oe.flags & 65536) && (Oe.flags |= 256), Lc(Oe, a, c, l, t), io(yr(d, c));
              break e;
            }
          }
          l = d = yr(d, c), Te !== 4 && (Te = 2), ki === null ? ki = [l] : ki.push(l), l = a;
          do {
            switch (l.tag) {
              case 3:
                l.flags |= 65536, t &= -t, l.lanes |= t;
                var y = Oc(l, d, t);
                Xa(l, y);
                break e;
              case 1:
                c = d;
                var m = l.type, v = l.stateNode;
                if (!(l.flags & 128) && (typeof m.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (fn === null || !fn.has(v)))) {
                  l.flags |= 65536, t &= -t, l.lanes |= t;
                  var _ = Nc(l, c, t);
                  Xa(l, _);
                  break e;
                }
            }
            l = l.return;
          } while (l !== null);
        }
        af(n);
      } catch (Q) {
        t = Q, Ne === n && n !== null && (Ne = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function of() {
    var e = jl.current;
    return jl.current = Rl, e === null ? Rl : e;
  }
  function qo() {
    (Te === 0 || Te === 3 || Te === 2) && (Te = 4), Fe === null || !(Dn & 268435455) && !(Fl & 268435455) || pn(Fe, Ae);
  }
  function Hl(e, t) {
    var n = ue;
    ue |= 2;
    var r = of();
    (Fe !== e || Ae !== t) && (Gt = null, Un(e, t));
    do
      try {
        bh();
        break;
      } catch (i) {
        uf(e, i);
      }
    while (!0);
    if (uo(), ue = n, jl.current = r, Ne !== null)
      throw Error(s(261));
    return Fe = null, Ae = 0, Te;
  }
  function bh() {
    for (; Ne !== null; )
      sf(Ne);
  }
  function ep() {
    for (; Ne !== null && !_d(); )
      sf(Ne);
  }
  function sf(e) {
    var t = df(e.alternate, e, ut);
    e.memoizedProps = e.pendingProps, t === null ? af(e) : Ne = t, Ao.current = null;
  }
  function af(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = Gh(n, t), n !== null) {
          n.flags &= 32767, Ne = n;
          return;
        }
        if (e !== null)
          e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Te = 6, Ne = null;
          return;
        }
      } else if (n = Kh(n, t, ut), n !== null) {
        Ne = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        Ne = t;
        return;
      }
      Ne = t = e;
    } while (t !== null);
    Te === 0 && (Te = 5);
  }
  function An(e, t, n) {
    var r = de, i = ht.transition;
    try {
      ht.transition = null, de = 1, tp(e, t, n, r);
    } finally {
      ht.transition = i, de = r;
    }
    return null;
  }
  function tp(e, t, n, r) {
    do
      Sr();
    while (dn !== null);
    if (ue & 6)
      throw Error(s(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
      return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
      throw Error(s(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var l = n.lanes | n.childLanes;
    if (Fd(e, l), e === Fe && (Ne = Fe = null, Ae = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Il || (Il = !0, hf($i, function() {
      return Sr(), null;
    })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
      l = ht.transition, ht.transition = null;
      var a = de;
      de = 1;
      var c = ue;
      ue |= 4, Ao.current = null, Yh(e, n), Jc(n, e), kh(Gu), Ji = !!Ku, Gu = Ku = null, e.current = n, Xh(n), Pd(), ue = c, de = a, ht.transition = l;
    } else
      e.current = n;
    if (Il && (Il = !1, dn = e, Ul = i), l = e.pendingLanes, l === 0 && (fn = null), Rd(n.stateNode), be(e, Pe()), t !== null)
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
    if (Dl)
      throw Dl = !1, e = Bo, Bo = null, e;
    return Ul & 1 && e.tag !== 0 && Sr(), l = e.pendingLanes, l & 1 ? e === Vo ? Ei++ : (Ei = 0, Vo = e) : Ei = 0, on(), null;
  }
  function Sr() {
    if (dn !== null) {
      var e = Ys(Ul), t = ht.transition, n = de;
      try {
        if (ht.transition = null, de = 16 > e ? 16 : e, dn === null)
          var r = !1;
        else {
          if (e = dn, dn = null, Ul = 0, ue & 6)
            throw Error(s(331));
          var i = ue;
          for (ue |= 4, j = e.current; j !== null; ) {
            var l = j, a = l.child;
            if (j.flags & 16) {
              var c = l.deletions;
              if (c !== null) {
                for (var d = 0; d < c.length; d++) {
                  var g = c[d];
                  for (j = g; j !== null; ) {
                    var E = j;
                    switch (E.tag) {
                      case 0:
                      case 11:
                      case 15:
                        wi(8, E, l);
                    }
                    var x = E.child;
                    if (x !== null)
                      x.return = E, j = x;
                    else
                      for (; j !== null; ) {
                        E = j;
                        var S = E.sibling, M = E.return;
                        if (Gc(E), E === g) {
                          j = null;
                          break;
                        }
                        if (S !== null) {
                          S.return = M, j = S;
                          break;
                        }
                        j = M;
                      }
                  }
                }
                var D = l.alternate;
                if (D !== null) {
                  var A = D.child;
                  if (A !== null) {
                    D.child = null;
                    do {
                      var Oe = A.sibling;
                      A.sibling = null, A = Oe;
                    } while (A !== null);
                  }
                }
                j = l;
              }
            }
            if (l.subtreeFlags & 2064 && a !== null)
              a.return = l, j = a;
            else
              e:
                for (; j !== null; ) {
                  if (l = j, l.flags & 2048)
                    switch (l.tag) {
                      case 0:
                      case 11:
                      case 15:
                        wi(9, l, l.return);
                    }
                  var y = l.sibling;
                  if (y !== null) {
                    y.return = l.return, j = y;
                    break e;
                  }
                  j = l.return;
                }
          }
          var m = e.current;
          for (j = m; j !== null; ) {
            a = j;
            var v = a.child;
            if (a.subtreeFlags & 2064 && v !== null)
              v.return = a, j = v;
            else
              e:
                for (a = m; j !== null; ) {
                  if (c = j, c.flags & 2048)
                    try {
                      switch (c.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Ml(9, c);
                      }
                    } catch (Q) {
                      _e(c, c.return, Q);
                    }
                  if (c === a) {
                    j = null;
                    break e;
                  }
                  var _ = c.sibling;
                  if (_ !== null) {
                    _.return = c.return, j = _;
                    break e;
                  }
                  j = c.return;
                }
          }
          if (ue = i, on(), Tt && typeof Tt.onPostCommitFiberRoot == "function")
            try {
              Tt.onPostCommitFiberRoot(Ki, e);
            } catch {
            }
          r = !0;
        }
        return r;
      } finally {
        de = n, ht.transition = t;
      }
    }
    return !1;
  }
  function cf(e, t, n) {
    t = yr(n, t), t = Oc(e, t, 1), e = an(e, t, 1), t = $e(), e !== null && (Kr(e, 1, t), be(e, t));
  }
  function _e(e, t, n) {
    if (e.tag === 3)
      cf(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          cf(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (fn === null || !fn.has(r))) {
            e = yr(n, e), e = Nc(t, e, 1), t = an(t, e, 1), e = $e(), t !== null && (Kr(t, 1, e), be(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function np(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = $e(), e.pingedLanes |= e.suspendedLanes & n, Fe === e && (Ae & n) === n && (Te === 4 || Te === 3 && (Ae & 130023424) === Ae && 500 > Pe() - Ho ? Un(e, 0) : Qo |= n), be(e, t);
  }
  function ff(e, t) {
    t === 0 && (e.mode & 1 ? (t = qi, qi <<= 1, !(qi & 130023424) && (qi = 4194304)) : t = 1);
    var n = $e();
    e = Wt(e, t), e !== null && (Kr(e, t, n), be(e, n));
  }
  function rp(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), ff(e, n);
  }
  function ip(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    r !== null && r.delete(t), ff(e, n);
  }
  var df;
  df = function(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ye.current)
        Ze = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128))
          return Ze = !1, $h(e, t, n);
        Ze = !!(e.flags & 131072);
      }
    else
      Ze = !1, ke && t.flags & 1048576 && Va(t, yl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        Ll(e, t), e = t.pendingProps;
        var i = sr(t, Qe.current);
        hr(t, n), i = So(null, t, r, e, i, n);
        var l = ko();
        return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Xe(r) ? (l = !0, hl(t)) : l = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, co(t), i.updater = El, t.stateNode = i, i._reactInternals = t, ho(t, r, e, n), t = Ro(null, t, r, !0, l, n)) : (t.tag = 0, ke && l && eo(t), We(null, t, i, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (Ll(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = up(r), e = Ct(r, e), i) {
            case 0:
              t = No(null, t, r, e, n);
              break e;
            case 1:
              t = Ic(null, t, r, e, n);
              break e;
            case 11:
              t = zc(null, t, r, e, n);
              break e;
            case 14:
              t = Mc(null, t, r, Ct(r.type, e), n);
              break e;
          }
          throw Error(s(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ct(r, i), No(e, t, r, i, n);
      case 1:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ct(r, i), Ic(e, t, r, i, n);
      case 3:
        e: {
          if (Uc(t), e === null)
            throw Error(s(387));
          r = t.pendingProps, l = t.memoizedState, i = l.element, Ya(e, t), kl(t, r, null, n);
          var a = t.memoizedState;
          if (r = a.element, l.isDehydrated)
            if (l = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
              i = yr(Error(s(423)), t), t = Ac(e, t, r, n, i);
              break e;
            } else if (r !== i) {
              i = yr(Error(s(424)), t), t = Ac(e, t, r, n, i);
              break e;
            } else
              for (lt = rn(t.stateNode.containerInfo.firstChild), it = t, ke = !0, Et = null, n = ic(t, null, r, n), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (fr(), r === i) {
              t = Kt(e, t, n);
              break e;
            }
            We(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return lc(t), e === null && ro(t), r = t.type, i = t.pendingProps, l = e !== null ? e.memoizedProps : null, a = i.children, qu(r, i) ? a = null : l !== null && qu(r, l) && (t.flags |= 32), Dc(e, t), We(e, t, a, n), t.child;
      case 6:
        return e === null && ro(t), null;
      case 13:
        return Qc(e, t, n);
      case 4:
        return po(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = pr(t, null, r, n) : We(e, t, r, n), t.child;
      case 11:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ct(r, i), zc(e, t, r, i, n);
      case 7:
        return We(e, t, t.pendingProps, n), t.child;
      case 8:
        return We(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return We(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, i = t.pendingProps, l = t.memoizedProps, a = i.value, ye(gl, r._currentValue), r._currentValue = a, l !== null)
            if (kt(l.value, a)) {
              if (l.children === i.children && !Ye.current) {
                t = Kt(e, t, n);
                break e;
              }
            } else
              for (l = t.child, l !== null && (l.return = t); l !== null; ) {
                var c = l.dependencies;
                if (c !== null) {
                  a = l.child;
                  for (var d = c.firstContext; d !== null; ) {
                    if (d.context === r) {
                      if (l.tag === 1) {
                        d = $t(-1, n & -n), d.tag = 2;
                        var g = l.updateQueue;
                        if (g !== null) {
                          g = g.shared;
                          var E = g.pending;
                          E === null ? d.next = d : (d.next = E.next, E.next = d), g.pending = d;
                        }
                      }
                      l.lanes |= n, d = l.alternate, d !== null && (d.lanes |= n), so(
                        l.return,
                        n,
                        t
                      ), c.lanes |= n;
                      break;
                    }
                    d = d.next;
                  }
                } else if (l.tag === 10)
                  a = l.type === t.type ? null : l.child;
                else if (l.tag === 18) {
                  if (a = l.return, a === null)
                    throw Error(s(341));
                  a.lanes |= n, c = a.alternate, c !== null && (c.lanes |= n), so(a, n, t), a = l.sibling;
                } else
                  a = l.child;
                if (a !== null)
                  a.return = l;
                else
                  for (a = l; a !== null; ) {
                    if (a === t) {
                      a = null;
                      break;
                    }
                    if (l = a.sibling, l !== null) {
                      l.return = a.return, a = l;
                      break;
                    }
                    a = a.return;
                  }
                l = a;
              }
          We(e, t, i.children, n), t = t.child;
        }
        return t;
      case 9:
        return i = t.type, r = t.pendingProps.children, hr(t, n), i = ft(i), r = r(i), t.flags |= 1, We(e, t, r, n), t.child;
      case 14:
        return r = t.type, i = Ct(r, t.pendingProps), i = Ct(r.type, i), Mc(e, t, r, i, n);
      case 15:
        return jc(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ct(r, i), Ll(e, t), t.tag = 1, Xe(r) ? (e = !0, hl(t)) : e = !1, hr(t, n), ec(t, r, i), ho(t, r, i, n), Ro(null, t, r, !0, e, n);
      case 19:
        return Bc(e, t, n);
      case 22:
        return Fc(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function hf(e, t) {
    return Ws(e, t);
  }
  function lp(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function pt(e, t, n, r) {
    return new lp(e, t, n, r);
  }
  function Yo(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function up(e) {
    if (typeof e == "function")
      return Yo(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Nt)
        return 11;
      if (e === Rt)
        return 14;
    }
    return 2;
  }
  function mn(e, t) {
    var n = e.alternate;
    return n === null ? (n = pt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Bl(e, t, n, r, i, l) {
    var a = 2;
    if (r = e, typeof e == "function")
      Yo(e) && (a = 1);
    else if (typeof e == "string")
      a = 5;
    else
      e:
        switch (e) {
          case oe:
            return Qn(n.children, i, l, t);
          case ne:
            a = 8, i |= 8;
            break;
          case Me:
            return e = pt(12, n, t, i | 2), e.elementType = Me, e.lanes = l, e;
          case nt:
            return e = pt(13, n, t, i), e.elementType = nt, e.lanes = l, e;
          case wt:
            return e = pt(19, n, t, i), e.elementType = wt, e.lanes = l, e;
          case xe:
            return Vl(n, i, l, t);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case At:
                  a = 10;
                  break e;
                case On:
                  a = 9;
                  break e;
                case Nt:
                  a = 11;
                  break e;
                case Rt:
                  a = 14;
                  break e;
                case Ge:
                  a = 16, r = null;
                  break e;
              }
            throw Error(s(130, e == null ? e : typeof e, ""));
        }
    return t = pt(a, n, t, i), t.elementType = e, t.type = r, t.lanes = l, t;
  }
  function Qn(e, t, n, r) {
    return e = pt(7, e, r, t), e.lanes = n, e;
  }
  function Vl(e, t, n, r) {
    return e = pt(22, e, r, t), e.elementType = xe, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Xo(e, t, n) {
    return e = pt(6, e, null, t), e.lanes = n, e;
  }
  function Zo(e, t, n) {
    return t = pt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function op(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Cu(0), this.expirationTimes = Cu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Cu(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
  }
  function Jo(e, t, n, r, i, l, a, c, d) {
    return e = new op(e, t, n, c, d), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = pt(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, co(l), e;
  }
  function sp(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: fe, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function pf(e) {
    if (!e)
      return un;
    e = e._reactInternals;
    e: {
      if (Nn(e) !== e || e.tag !== 1)
        throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Xe(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(s(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Xe(n))
        return Qa(e, n, t);
    }
    return t;
  }
  function mf(e, t, n, r, i, l, a, c, d) {
    return e = Jo(n, r, !0, e, i, l, a, c, d), e.context = pf(null), n = e.current, r = $e(), i = hn(n), l = $t(r, i), l.callback = t ?? null, an(n, l, i), e.current.lanes = i, Kr(e, i, r), be(e, r), e;
  }
  function Wl(e, t, n, r) {
    var i = t.current, l = $e(), a = hn(i);
    return n = pf(n), t.context === null ? t.context = n : t.pendingContext = n, t = $t(l, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = an(i, t, a), e !== null && (Pt(e, i, a, l), Sl(e, i, a)), a;
  }
  function $l(e) {
    if (e = e.current, !e.child)
      return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function yf(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function bo(e, t) {
    yf(e, t), (e = e.alternate) && yf(e, t);
  }
  function ap() {
    return null;
  }
  var vf = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function es(e) {
    this._internalRoot = e;
  }
  Kl.prototype.render = es.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
      throw Error(s(409));
    Wl(e, t, null, null);
  }, Kl.prototype.unmount = es.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      In(function() {
        Wl(null, e, null, null);
      }), t[Qt] = null;
    }
  };
  function Kl(e) {
    this._internalRoot = e;
  }
  Kl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Js();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < en.length && t !== 0 && t < en[n].priority; n++)
        ;
      en.splice(n, 0, e), n === 0 && ta(e);
    }
  };
  function ts(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Gl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function gf() {
  }
  function cp(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var l = r;
        r = function() {
          var g = $l(a);
          l.call(g);
        };
      }
      var a = mf(t, r, e, 0, null, !1, !1, "", gf);
      return e._reactRootContainer = a, e[Qt] = a.current, ui(e.nodeType === 8 ? e.parentNode : e), In(), a;
    }
    for (; i = e.lastChild; )
      e.removeChild(i);
    if (typeof r == "function") {
      var c = r;
      r = function() {
        var g = $l(d);
        c.call(g);
      };
    }
    var d = Jo(e, 0, !1, null, null, !1, !1, "", gf);
    return e._reactRootContainer = d, e[Qt] = d.current, ui(e.nodeType === 8 ? e.parentNode : e), In(function() {
      Wl(t, d, n, r);
    }), d;
  }
  function ql(e, t, n, r, i) {
    var l = n._reactRootContainer;
    if (l) {
      var a = l;
      if (typeof i == "function") {
        var c = i;
        i = function() {
          var d = $l(a);
          c.call(d);
        };
      }
      Wl(t, a, e, i);
    } else
      a = cp(n, t, e, i, r);
    return $l(a);
  }
  Xs = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = $r(t.pendingLanes);
          n !== 0 && (xu(t, n | 1), be(t, Pe()), !(ue & 6) && (wr = Pe() + 500, on()));
        }
        break;
      case 13:
        In(function() {
          var r = Wt(e, 1);
          if (r !== null) {
            var i = $e();
            Pt(r, e, 1, i);
          }
        }), bo(e, 1);
    }
  }, _u = function(e) {
    if (e.tag === 13) {
      var t = Wt(e, 134217728);
      if (t !== null) {
        var n = $e();
        Pt(t, e, 134217728, n);
      }
      bo(e, 134217728);
    }
  }, Zs = function(e) {
    if (e.tag === 13) {
      var t = hn(e), n = Wt(e, t);
      if (n !== null) {
        var r = $e();
        Pt(n, e, t, r);
      }
      bo(e, t);
    }
  }, Js = function() {
    return de;
  }, bs = function(e, t) {
    var n = de;
    try {
      return de = e, t();
    } finally {
      de = n;
    }
  }, vu = function(e, t, n) {
    switch (t) {
      case "input":
        if (au(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; )
            n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var i = fl(r);
              if (!i)
                throw Error(s(90));
              Cs(r), au(r, i);
            }
          }
        }
        break;
      case "textarea":
        Ns(e, n);
        break;
      case "select":
        t = n.value, t != null && Xn(e, !!n.multiple, t, !1);
    }
  }, Is = Ko, Us = In;
  var fp = { usingClientEntryPoint: !1, Events: [ai, ur, fl, Fs, Ds, Ko] }, Ci = { findFiberByHostInstance: Rn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, dp = { bundleType: Ci.bundleType, version: Ci.version, rendererPackageName: Ci.rendererPackageName, rendererConfig: Ci.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: le.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Bs(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Ci.findFiberByHostInstance || ap, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Yl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Yl.isDisabled && Yl.supportsFiber)
      try {
        Ki = Yl.inject(dp), Tt = Yl;
      } catch {
      }
  }
  return et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fp, et.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ts(t))
      throw Error(s(200));
    return sp(e, t, null, n);
  }, et.createRoot = function(e, t) {
    if (!ts(e))
      throw Error(s(299));
    var n = !1, r = "", i = vf;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Jo(e, 1, !1, null, null, n, !1, r, i), e[Qt] = t.current, ui(e.nodeType === 8 ? e.parentNode : e), new es(t);
  }, et.findDOMNode = function(e) {
    if (e == null)
      return null;
    if (e.nodeType === 1)
      return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = Bs(t), e = e === null ? null : e.stateNode, e;
  }, et.flushSync = function(e) {
    return In(e);
  }, et.hydrate = function(e, t, n) {
    if (!Gl(t))
      throw Error(s(200));
    return ql(null, e, t, !0, n);
  }, et.hydrateRoot = function(e, t, n) {
    if (!ts(e))
      throw Error(s(405));
    var r = n != null && n.hydratedSources || null, i = !1, l = "", a = vf;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = mf(t, null, e, 1, n ?? null, i, !1, l, a), e[Qt] = t.current, ui(e), r)
      for (e = 0; e < r.length; e++)
        n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
          n,
          i
        );
    return new Kl(t);
  }, et.render = function(e, t, n) {
    if (!Gl(t))
      throw Error(s(200));
    return ql(null, e, t, !1, n);
  }, et.unmountComponentAtNode = function(e) {
    if (!Gl(e))
      throw Error(s(40));
    return e._reactRootContainer ? (In(function() {
      ql(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Qt] = null;
      });
    }), !0) : !1;
  }, et.unstable_batchedUpdates = Ko, et.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Gl(n))
      throw Error(s(200));
    if (e == null || e._reactInternals === void 0)
      throw Error(s(38));
    return ql(e, t, n, !1, r);
  }, et.version = "18.2.0-next-9e3b772b8-20220608", et;
}
function qf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qf);
    } catch (o) {
      console.error(o);
    }
}
qf(), Gf.exports = kp();
var Yf = Gf.exports, _f = Yf;
bl.createRoot = _f.createRoot, bl.hydrateRoot = _f.hydrateRoot;
var Ur = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(o) {
    return this.listeners.add(o), this.onSubscribe(), () => {
      this.listeners.delete(o), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, Ir = typeof window > "u" || "Deno" in window;
function gt() {
}
function Ep(o, u) {
  return typeof o == "function" ? o(u) : o;
}
function us(o) {
  return typeof o == "number" && o >= 0 && o !== 1 / 0;
}
function Xf(o, u) {
  return Math.max(o + (u || 0) - Date.now(), 0);
}
function Pf(o, u) {
  const {
    type: s = "all",
    exact: f,
    fetchStatus: w,
    predicate: C,
    queryKey: P,
    stale: O
  } = o;
  if (P) {
    if (f) {
      if (u.queryHash !== Ss(P, u.options))
        return !1;
    } else if (!Pi(u.queryKey, P))
      return !1;
  }
  if (s !== "all") {
    const T = u.isActive();
    if (s === "active" && !T || s === "inactive" && T)
      return !1;
  }
  return !(typeof O == "boolean" && u.isStale() !== O || typeof w < "u" && w !== u.state.fetchStatus || C && !C(u));
}
function Of(o, u) {
  const { exact: s, status: f, predicate: w, mutationKey: C } = o;
  if (C) {
    if (!u.options.mutationKey)
      return !1;
    if (s) {
      if (Yn(u.options.mutationKey) !== Yn(C))
        return !1;
    } else if (!Pi(u.options.mutationKey, C))
      return !1;
  }
  return !(f && u.state.status !== f || w && !w(u));
}
function Ss(o, u) {
  return ((u == null ? void 0 : u.queryKeyHashFn) || Yn)(o);
}
function Yn(o) {
  return JSON.stringify(
    o,
    (u, s) => os(s) ? Object.keys(s).sort().reduce((f, w) => (f[w] = s[w], f), {}) : s
  );
}
function Pi(o, u) {
  return o === u ? !0 : typeof o != typeof u ? !1 : o && u && typeof o == "object" && typeof u == "object" ? !Object.keys(u).some((s) => !Pi(o[s], u[s])) : !1;
}
function Zf(o, u) {
  if (o === u)
    return o;
  const s = Nf(o) && Nf(u);
  if (s || os(o) && os(u)) {
    const f = s ? o : Object.keys(o), w = f.length, C = s ? u : Object.keys(u), P = C.length, O = s ? [] : {};
    let T = 0;
    for (let q = 0; q < P; q++) {
      const L = s ? q : C[q];
      !s && o[L] === void 0 && u[L] === void 0 && f.includes(L) ? (O[L] = void 0, T++) : (O[L] = Zf(o[L], u[L]), O[L] === o[L] && o[L] !== void 0 && T++);
    }
    return w === P && T === w ? o : O;
  }
  return u;
}
function eu(o, u) {
  if (!u || Object.keys(o).length !== Object.keys(u).length)
    return !1;
  for (const s in o)
    if (o[s] !== u[s])
      return !1;
  return !0;
}
function Nf(o) {
  return Array.isArray(o) && o.length === Object.keys(o).length;
}
function os(o) {
  if (!Rf(o))
    return !1;
  const u = o.constructor;
  if (typeof u > "u")
    return !0;
  const s = u.prototype;
  return !(!Rf(s) || !s.hasOwnProperty("isPrototypeOf"));
}
function Rf(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function Cp(o) {
  return new Promise((u) => {
    setTimeout(u, o);
  });
}
function ss(o, u, s) {
  return typeof s.structuralSharing == "function" ? s.structuralSharing(o, u) : s.structuralSharing !== !1 ? Zf(o, u) : u;
}
function xp(o, u, s = 0) {
  const f = [...o, u];
  return s && f.length > s ? f.slice(1) : f;
}
function _p(o, u, s = 0) {
  const f = [u, ...o];
  return s && f.length > s ? f.slice(0, -1) : f;
}
var Hn, gn, kr, Ff, Pp = (Ff = class extends Ur {
  constructor() {
    super();
    I(this, Hn, void 0);
    I(this, gn, void 0);
    I(this, kr, void 0);
    N(this, kr, (u) => {
      if (!Ir && window.addEventListener) {
        const s = () => u();
        return window.addEventListener("visibilitychange", s, !1), () => {
          window.removeEventListener("visibilitychange", s);
        };
      }
    });
  }
  onSubscribe() {
    p(this, gn) || this.setEventListener(p(this, kr));
  }
  onUnsubscribe() {
    var u;
    this.hasListeners() || ((u = p(this, gn)) == null || u.call(this), N(this, gn, void 0));
  }
  setEventListener(u) {
    var s;
    N(this, kr, u), (s = p(this, gn)) == null || s.call(this), N(this, gn, u((f) => {
      typeof f == "boolean" ? this.setFocused(f) : this.onFocus();
    }));
  }
  setFocused(u) {
    p(this, Hn) !== u && (N(this, Hn, u), this.onFocus());
  }
  onFocus() {
    this.listeners.forEach((u) => {
      u();
    });
  }
  isFocused() {
    var u;
    return typeof p(this, Hn) == "boolean" ? p(this, Hn) : ((u = globalThis.document) == null ? void 0 : u.visibilityState) !== "hidden";
  }
}, Hn = new WeakMap(), gn = new WeakMap(), kr = new WeakMap(), Ff), tu = new Pp(), Er, wn, Cr, Df, Op = (Df = class extends Ur {
  constructor() {
    super();
    I(this, Er, !0);
    I(this, wn, void 0);
    I(this, Cr, void 0);
    N(this, Cr, (u) => {
      if (!Ir && window.addEventListener) {
        const s = () => u(!0), f = () => u(!1);
        return window.addEventListener("online", s, !1), window.addEventListener("offline", f, !1), () => {
          window.removeEventListener("online", s), window.removeEventListener("offline", f);
        };
      }
    });
  }
  onSubscribe() {
    p(this, wn) || this.setEventListener(p(this, Cr));
  }
  onUnsubscribe() {
    var u;
    this.hasListeners() || ((u = p(this, wn)) == null || u.call(this), N(this, wn, void 0));
  }
  setEventListener(u) {
    var s;
    N(this, Cr, u), (s = p(this, wn)) == null || s.call(this), N(this, wn, u(this.setOnline.bind(this)));
  }
  setOnline(u) {
    p(this, Er) !== u && (N(this, Er, u), this.listeners.forEach((f) => {
      f(u);
    }));
  }
  isOnline() {
    return p(this, Er);
  }
}, Er = new WeakMap(), wn = new WeakMap(), Cr = new WeakMap(), Df), nu = new Op();
function Np(o) {
  return Math.min(1e3 * 2 ** o, 3e4);
}
function uu(o) {
  return (o ?? "online") === "online" ? nu.isOnline() : !0;
}
var Jf = class {
  constructor(o) {
    this.revert = o == null ? void 0 : o.revert, this.silent = o == null ? void 0 : o.silent;
  }
};
function ls(o) {
  return o instanceof Jf;
}
function bf(o) {
  let u = !1, s = 0, f = !1, w, C, P;
  const O = new Promise((z, K) => {
    C = z, P = K;
  }), T = (z) => {
    var K;
    f || (U(new Jf(z)), (K = o.abort) == null || K.call(o));
  }, q = () => {
    u = !0;
  }, L = () => {
    u = !1;
  }, Y = () => !tu.isFocused() || o.networkMode !== "always" && !nu.isOnline(), F = (z) => {
    var K;
    f || (f = !0, (K = o.onSuccess) == null || K.call(o, z), w == null || w(), C(z));
  }, U = (z) => {
    var K;
    f || (f = !0, (K = o.onError) == null || K.call(o, z), w == null || w(), P(z));
  }, J = () => new Promise((z) => {
    var K;
    w = (he) => {
      const ee = f || !Y();
      return ee && z(he), ee;
    }, (K = o.onPause) == null || K.call(o);
  }).then(() => {
    var z;
    w = void 0, f || (z = o.onContinue) == null || z.call(o);
  }), X = () => {
    if (f)
      return;
    let z;
    try {
      z = o.fn();
    } catch (K) {
      z = Promise.reject(K);
    }
    Promise.resolve(z).then(F).catch((K) => {
      var fe;
      if (f)
        return;
      const he = o.retry ?? (Ir ? 0 : 3), ee = o.retryDelay ?? Np, le = typeof ee == "function" ? ee(s, K) : ee, ve = he === !0 || typeof he == "number" && s < he || typeof he == "function" && he(s, K);
      if (u || !ve) {
        U(K);
        return;
      }
      s++, (fe = o.onFail) == null || fe.call(o, s, K), Cp(le).then(() => {
        if (Y())
          return J();
      }).then(() => {
        u ? U(K) : X();
      });
    });
  };
  return uu(o.networkMode) ? X() : J().then(X), {
    promise: O,
    cancel: T,
    continue: () => (w == null ? void 0 : w()) ? O : Promise.resolve(),
    cancelRetry: q,
    continueRetry: L
  };
}
function Rp() {
  let o = [], u = 0, s = (F) => {
    F();
  }, f = (F) => {
    F();
  }, w = (F) => setTimeout(F, 0);
  const C = (F) => {
    w = F;
  }, P = (F) => {
    let U;
    u++;
    try {
      U = F();
    } finally {
      u--, u || q();
    }
    return U;
  }, O = (F) => {
    u ? o.push(F) : w(() => {
      s(F);
    });
  }, T = (F) => (...U) => {
    O(() => {
      F(...U);
    });
  }, q = () => {
    const F = o;
    o = [], F.length && w(() => {
      f(() => {
        F.forEach((U) => {
          s(U);
        });
      });
    });
  };
  return {
    batch: P,
    batchCalls: T,
    schedule: O,
    setNotifyFunction: (F) => {
      s = F;
    },
    setBatchNotifyFunction: (F) => {
      f = F;
    },
    setScheduler: C
  };
}
var ze = Rp(), Bn, If, ed = (If = class {
  constructor() {
    I(this, Bn, void 0);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), us(this.gcTime) && N(this, Bn, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(o) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      o ?? (Ir ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    p(this, Bn) && (clearTimeout(p(this, Bn)), N(this, Bn, void 0));
  }
}, Bn = new WeakMap(), If), xr, _r, mt, Sn, yt, Ie, Oi, Vn, Pr, Zl, Ot, qt, Uf, Tp = (Uf = class extends ed {
  constructor(u) {
    super();
    I(this, Pr);
    I(this, Ot);
    I(this, xr, void 0);
    I(this, _r, void 0);
    I(this, mt, void 0);
    I(this, Sn, void 0);
    I(this, yt, void 0);
    I(this, Ie, void 0);
    I(this, Oi, void 0);
    I(this, Vn, void 0);
    N(this, Vn, !1), N(this, Oi, u.defaultOptions), Z(this, Pr, Zl).call(this, u.options), N(this, Ie, []), N(this, mt, u.cache), this.queryKey = u.queryKey, this.queryHash = u.queryHash, N(this, xr, u.state || Lp(this.options)), this.state = p(this, xr), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  optionalRemove() {
    !p(this, Ie).length && this.state.fetchStatus === "idle" && p(this, mt).remove(this);
  }
  setData(u, s) {
    const f = ss(this.state.data, u, this.options);
    return Z(this, Ot, qt).call(this, {
      data: f,
      type: "success",
      dataUpdatedAt: s == null ? void 0 : s.updatedAt,
      manual: s == null ? void 0 : s.manual
    }), f;
  }
  setState(u, s) {
    Z(this, Ot, qt).call(this, { type: "setState", state: u, setStateOptions: s });
  }
  cancel(u) {
    var f;
    const s = p(this, Sn);
    return (f = p(this, yt)) == null || f.cancel(u), s ? s.then(gt).catch(gt) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(p(this, xr));
  }
  isActive() {
    return p(this, Ie).some(
      (u) => u.options.enabled !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || p(this, Ie).some((u) => u.getCurrentResult().isStale);
  }
  isStaleByTime(u = 0) {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !Xf(this.state.dataUpdatedAt, u);
  }
  onFocus() {
    var s;
    const u = p(this, Ie).find((f) => f.shouldFetchOnWindowFocus());
    u == null || u.refetch({ cancelRefetch: !1 }), (s = p(this, yt)) == null || s.continue();
  }
  onOnline() {
    var s;
    const u = p(this, Ie).find((f) => f.shouldFetchOnReconnect());
    u == null || u.refetch({ cancelRefetch: !1 }), (s = p(this, yt)) == null || s.continue();
  }
  addObserver(u) {
    p(this, Ie).includes(u) || (p(this, Ie).push(u), this.clearGcTimeout(), p(this, mt).notify({ type: "observerAdded", query: this, observer: u }));
  }
  removeObserver(u) {
    p(this, Ie).includes(u) && (N(this, Ie, p(this, Ie).filter((s) => s !== u)), p(this, Ie).length || (p(this, yt) && (p(this, Vn) ? p(this, yt).cancel({ revert: !0 }) : p(this, yt).cancelRetry()), this.scheduleGc()), p(this, mt).notify({ type: "observerRemoved", query: this, observer: u }));
  }
  getObserversCount() {
    return p(this, Ie).length;
  }
  invalidate() {
    this.state.isInvalidated || Z(this, Ot, qt).call(this, { type: "invalidate" });
  }
  fetch(u, s) {
    var q, L, Y, F;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && (s != null && s.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (p(this, Sn))
        return (q = p(this, yt)) == null || q.continueRetry(), p(this, Sn);
    }
    if (u && Z(this, Pr, Zl).call(this, u), !this.options.queryFn) {
      const U = p(this, Ie).find((J) => J.options.queryFn);
      U && Z(this, Pr, Zl).call(this, U.options);
    }
    const f = new AbortController(), w = {
      queryKey: this.queryKey,
      meta: this.meta
    }, C = (U) => {
      Object.defineProperty(U, "signal", {
        enumerable: !0,
        get: () => (N(this, Vn, !0), f.signal)
      });
    };
    C(w);
    const P = () => this.options.queryFn ? (N(this, Vn, !1), this.options.persister ? this.options.persister(
      this.options.queryFn,
      w,
      this
    ) : this.options.queryFn(
      w
    )) : Promise.reject(
      new Error(`Missing queryFn: '${this.options.queryHash}'`)
    ), O = {
      fetchOptions: s,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: P
    };
    C(O), (L = this.options.behavior) == null || L.onFetch(
      O,
      this
    ), N(this, _r, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((Y = O.fetchOptions) == null ? void 0 : Y.meta)) && Z(this, Ot, qt).call(this, { type: "fetch", meta: (F = O.fetchOptions) == null ? void 0 : F.meta });
    const T = (U) => {
      var J, X, z, K;
      ls(U) && U.silent || Z(this, Ot, qt).call(this, {
        type: "error",
        error: U
      }), ls(U) || ((X = (J = p(this, mt).config).onError) == null || X.call(
        J,
        U,
        this
      ), (K = (z = p(this, mt).config).onSettled) == null || K.call(
        z,
        this.state.data,
        U,
        this
      )), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return N(this, yt, bf({
      fn: O.fetchFn,
      abort: f.abort.bind(f),
      onSuccess: (U) => {
        var J, X, z, K;
        if (typeof U > "u") {
          T(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        this.setData(U), (X = (J = p(this, mt).config).onSuccess) == null || X.call(J, U, this), (K = (z = p(this, mt).config).onSettled) == null || K.call(
          z,
          U,
          this.state.error,
          this
        ), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: T,
      onFail: (U, J) => {
        Z(this, Ot, qt).call(this, { type: "failed", failureCount: U, error: J });
      },
      onPause: () => {
        Z(this, Ot, qt).call(this, { type: "pause" });
      },
      onContinue: () => {
        Z(this, Ot, qt).call(this, { type: "continue" });
      },
      retry: O.options.retry,
      retryDelay: O.options.retryDelay,
      networkMode: O.options.networkMode
    })), N(this, Sn, p(this, yt).promise), p(this, Sn);
  }
}, xr = new WeakMap(), _r = new WeakMap(), mt = new WeakMap(), Sn = new WeakMap(), yt = new WeakMap(), Ie = new WeakMap(), Oi = new WeakMap(), Vn = new WeakMap(), Pr = new WeakSet(), Zl = function(u) {
  this.options = { ...p(this, Oi), ...u }, this.updateGcTime(this.options.gcTime);
}, Ot = new WeakSet(), qt = function(u) {
  const s = (f) => {
    switch (u.type) {
      case "failed":
        return {
          ...f,
          fetchFailureCount: u.failureCount,
          fetchFailureReason: u.error
        };
      case "pause":
        return {
          ...f,
          fetchStatus: "paused"
        };
      case "continue":
        return {
          ...f,
          fetchStatus: "fetching"
        };
      case "fetch":
        return {
          ...f,
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchMeta: u.meta ?? null,
          fetchStatus: uu(this.options.networkMode) ? "fetching" : "paused",
          ...!f.dataUpdatedAt && {
            error: null,
            status: "pending"
          }
        };
      case "success":
        return {
          ...f,
          data: u.data,
          dataUpdateCount: f.dataUpdateCount + 1,
          dataUpdatedAt: u.dataUpdatedAt ?? Date.now(),
          error: null,
          isInvalidated: !1,
          status: "success",
          ...!u.manual && {
            fetchStatus: "idle",
            fetchFailureCount: 0,
            fetchFailureReason: null
          }
        };
      case "error":
        const w = u.error;
        return ls(w) && w.revert && p(this, _r) ? { ...p(this, _r), fetchStatus: "idle" } : {
          ...f,
          error: w,
          errorUpdateCount: f.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: f.fetchFailureCount + 1,
          fetchFailureReason: w,
          fetchStatus: "idle",
          status: "error"
        };
      case "invalidate":
        return {
          ...f,
          isInvalidated: !0
        };
      case "setState":
        return {
          ...f,
          ...u.state
        };
    }
  };
  this.state = s(this.state), ze.batch(() => {
    p(this, Ie).forEach((f) => {
      f.onQueryUpdate();
    }), p(this, mt).notify({ query: this, type: "updated", action: u });
  });
}, Uf);
function Lp(o) {
  const u = typeof o.initialData == "function" ? o.initialData() : o.initialData, s = typeof u < "u", f = s ? typeof o.initialDataUpdatedAt == "function" ? o.initialDataUpdatedAt() : o.initialDataUpdatedAt : 0;
  return {
    data: u,
    dataUpdateCount: 0,
    dataUpdatedAt: s ? f ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: s ? "success" : "pending",
    fetchStatus: "idle"
  };
}
var Ft, Af, zp = (Af = class extends Ur {
  constructor(u = {}) {
    super();
    I(this, Ft, void 0);
    this.config = u, N(this, Ft, /* @__PURE__ */ new Map());
  }
  build(u, s, f) {
    const w = s.queryKey, C = s.queryHash ?? Ss(w, s);
    let P = this.get(C);
    return P || (P = new Tp({
      cache: this,
      queryKey: w,
      queryHash: C,
      options: u.defaultQueryOptions(s),
      state: f,
      defaultOptions: u.getQueryDefaults(w)
    }), this.add(P)), P;
  }
  add(u) {
    p(this, Ft).has(u.queryHash) || (p(this, Ft).set(u.queryHash, u), this.notify({
      type: "added",
      query: u
    }));
  }
  remove(u) {
    const s = p(this, Ft).get(u.queryHash);
    s && (u.destroy(), s === u && p(this, Ft).delete(u.queryHash), this.notify({ type: "removed", query: u }));
  }
  clear() {
    ze.batch(() => {
      this.getAll().forEach((u) => {
        this.remove(u);
      });
    });
  }
  get(u) {
    return p(this, Ft).get(u);
  }
  getAll() {
    return [...p(this, Ft).values()];
  }
  find(u) {
    const s = { exact: !0, ...u };
    return this.getAll().find(
      (f) => Pf(s, f)
    );
  }
  findAll(u = {}) {
    const s = this.getAll();
    return Object.keys(u).length > 0 ? s.filter((f) => Pf(u, f)) : s;
  }
  notify(u) {
    ze.batch(() => {
      this.listeners.forEach((s) => {
        s(u);
      });
    });
  }
  onFocus() {
    ze.batch(() => {
      this.getAll().forEach((u) => {
        u.onFocus();
      });
    });
  }
  onOnline() {
    ze.batch(() => {
      this.getAll().forEach((u) => {
        u.onOnline();
      });
    });
  }
}, Ft = new WeakMap(), Af), Dt, Ni, ot, Or, It, vn, Qf, Mp = (Qf = class extends ed {
  constructor(u) {
    super();
    I(this, It);
    I(this, Dt, void 0);
    I(this, Ni, void 0);
    I(this, ot, void 0);
    I(this, Or, void 0);
    this.mutationId = u.mutationId, N(this, Ni, u.defaultOptions), N(this, ot, u.mutationCache), N(this, Dt, []), this.state = u.state || td(), this.setOptions(u.options), this.scheduleGc();
  }
  setOptions(u) {
    this.options = { ...p(this, Ni), ...u }, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(u) {
    p(this, Dt).includes(u) || (p(this, Dt).push(u), this.clearGcTimeout(), p(this, ot).notify({
      type: "observerAdded",
      mutation: this,
      observer: u
    }));
  }
  removeObserver(u) {
    N(this, Dt, p(this, Dt).filter((s) => s !== u)), this.scheduleGc(), p(this, ot).notify({
      type: "observerRemoved",
      mutation: this,
      observer: u
    });
  }
  optionalRemove() {
    p(this, Dt).length || (this.state.status === "pending" ? this.scheduleGc() : p(this, ot).remove(this));
  }
  continue() {
    var u;
    return ((u = p(this, Or)) == null ? void 0 : u.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(u) {
    var w, C, P, O, T, q, L, Y, F, U, J, X, z, K, he, ee, le, ve, fe, oe;
    const s = () => (N(this, Or, bf({
      fn: () => this.options.mutationFn ? this.options.mutationFn(u) : Promise.reject(new Error("No mutationFn found")),
      onFail: (ne, Me) => {
        Z(this, It, vn).call(this, { type: "failed", failureCount: ne, error: Me });
      },
      onPause: () => {
        Z(this, It, vn).call(this, { type: "pause" });
      },
      onContinue: () => {
        Z(this, It, vn).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode
    })), p(this, Or).promise), f = this.state.status === "pending";
    try {
      if (!f) {
        Z(this, It, vn).call(this, { type: "pending", variables: u }), await ((C = (w = p(this, ot).config).onMutate) == null ? void 0 : C.call(
          w,
          u,
          this
        ));
        const Me = await ((O = (P = this.options).onMutate) == null ? void 0 : O.call(P, u));
        Me !== this.state.context && Z(this, It, vn).call(this, {
          type: "pending",
          context: Me,
          variables: u
        });
      }
      const ne = await s();
      return await ((q = (T = p(this, ot).config).onSuccess) == null ? void 0 : q.call(
        T,
        ne,
        u,
        this.state.context,
        this
      )), await ((Y = (L = this.options).onSuccess) == null ? void 0 : Y.call(L, ne, u, this.state.context)), await ((U = (F = p(this, ot).config).onSettled) == null ? void 0 : U.call(
        F,
        ne,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((X = (J = this.options).onSettled) == null ? void 0 : X.call(J, ne, null, u, this.state.context)), Z(this, It, vn).call(this, { type: "success", data: ne }), ne;
    } catch (ne) {
      try {
        throw await ((K = (z = p(this, ot).config).onError) == null ? void 0 : K.call(
          z,
          ne,
          u,
          this.state.context,
          this
        )), await ((ee = (he = this.options).onError) == null ? void 0 : ee.call(
          he,
          ne,
          u,
          this.state.context
        )), await ((ve = (le = p(this, ot).config).onSettled) == null ? void 0 : ve.call(
          le,
          void 0,
          ne,
          this.state.variables,
          this.state.context,
          this
        )), await ((oe = (fe = this.options).onSettled) == null ? void 0 : oe.call(
          fe,
          void 0,
          ne,
          u,
          this.state.context
        )), ne;
      } finally {
        Z(this, It, vn).call(this, { type: "error", error: ne });
      }
    }
  }
}, Dt = new WeakMap(), Ni = new WeakMap(), ot = new WeakMap(), Or = new WeakMap(), It = new WeakSet(), vn = function(u) {
  const s = (f) => {
    switch (u.type) {
      case "failed":
        return {
          ...f,
          failureCount: u.failureCount,
          failureReason: u.error
        };
      case "pause":
        return {
          ...f,
          isPaused: !0
        };
      case "continue":
        return {
          ...f,
          isPaused: !1
        };
      case "pending":
        return {
          ...f,
          context: u.context,
          data: void 0,
          failureCount: 0,
          failureReason: null,
          error: null,
          isPaused: !uu(this.options.networkMode),
          status: "pending",
          variables: u.variables,
          submittedAt: Date.now()
        };
      case "success":
        return {
          ...f,
          data: u.data,
          failureCount: 0,
          failureReason: null,
          error: null,
          status: "success",
          isPaused: !1
        };
      case "error":
        return {
          ...f,
          data: void 0,
          error: u.error,
          failureCount: f.failureCount + 1,
          failureReason: u.error,
          isPaused: !1,
          status: "error"
        };
    }
  };
  this.state = s(this.state), ze.batch(() => {
    p(this, Dt).forEach((f) => {
      f.onMutationUpdate(u);
    }), p(this, ot).notify({
      mutation: this,
      type: "updated",
      action: u
    });
  });
}, Qf);
function td() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}
var vt, Ri, Wn, Hf, jp = (Hf = class extends Ur {
  constructor(u = {}) {
    super();
    I(this, vt, void 0);
    I(this, Ri, void 0);
    I(this, Wn, void 0);
    this.config = u, N(this, vt, []), N(this, Ri, 0);
  }
  build(u, s, f) {
    const w = new Mp({
      mutationCache: this,
      mutationId: ++Xl(this, Ri)._,
      options: u.defaultMutationOptions(s),
      state: f
    });
    return this.add(w), w;
  }
  add(u) {
    p(this, vt).push(u), this.notify({ type: "added", mutation: u });
  }
  remove(u) {
    N(this, vt, p(this, vt).filter((s) => s !== u)), this.notify({ type: "removed", mutation: u });
  }
  clear() {
    ze.batch(() => {
      p(this, vt).forEach((u) => {
        this.remove(u);
      });
    });
  }
  getAll() {
    return p(this, vt);
  }
  find(u) {
    const s = { exact: !0, ...u };
    return p(this, vt).find(
      (f) => Of(s, f)
    );
  }
  findAll(u = {}) {
    return p(this, vt).filter(
      (s) => Of(u, s)
    );
  }
  notify(u) {
    ze.batch(() => {
      this.listeners.forEach((s) => {
        s(u);
      });
    });
  }
  resumePausedMutations() {
    return N(this, Wn, (p(this, Wn) ?? Promise.resolve()).then(() => {
      const u = p(this, vt).filter((s) => s.state.isPaused);
      return ze.batch(
        () => u.reduce(
          (s, f) => s.then(() => f.continue().catch(gt)),
          Promise.resolve()
        )
      );
    }).then(() => {
      N(this, Wn, void 0);
    })), p(this, Wn);
  }
}, vt = new WeakMap(), Ri = new WeakMap(), Wn = new WeakMap(), Hf);
function Fp(o) {
  return {
    onFetch: (u, s) => {
      const f = async () => {
        var J, X, z, K, he;
        const w = u.options, C = (z = (X = (J = u.fetchOptions) == null ? void 0 : J.meta) == null ? void 0 : X.fetchMore) == null ? void 0 : z.direction, P = ((K = u.state.data) == null ? void 0 : K.pages) || [], O = ((he = u.state.data) == null ? void 0 : he.pageParams) || [], T = { pages: [], pageParams: [] };
        let q = !1;
        const L = (ee) => {
          Object.defineProperty(ee, "signal", {
            enumerable: !0,
            get: () => (u.signal.aborted ? q = !0 : u.signal.addEventListener("abort", () => {
              q = !0;
            }), u.signal)
          });
        }, Y = u.options.queryFn || (() => Promise.reject(
          new Error(`Missing queryFn: '${u.options.queryHash}'`)
        )), F = async (ee, le, ve) => {
          if (q)
            return Promise.reject();
          if (le == null && ee.pages.length)
            return Promise.resolve(ee);
          const fe = {
            queryKey: u.queryKey,
            pageParam: le,
            direction: ve ? "backward" : "forward",
            meta: u.options.meta
          };
          L(fe);
          const oe = await Y(
            fe
          ), { maxPages: ne } = u.options, Me = ve ? _p : xp;
          return {
            pages: Me(ee.pages, oe, ne),
            pageParams: Me(ee.pageParams, le, ne)
          };
        };
        let U;
        if (C && P.length) {
          const ee = C === "backward", le = ee ? Dp : Tf, ve = {
            pages: P,
            pageParams: O
          }, fe = le(w, ve);
          U = await F(ve, fe, ee);
        } else {
          U = await F(
            T,
            O[0] ?? w.initialPageParam
          );
          const ee = o ?? P.length;
          for (let le = 1; le < ee; le++) {
            const ve = Tf(w, U);
            U = await F(U, ve);
          }
        }
        return U;
      };
      u.options.persister ? u.fetchFn = () => {
        var w, C;
        return (C = (w = u.options).persister) == null ? void 0 : C.call(
          w,
          f,
          {
            queryKey: u.queryKey,
            meta: u.options.meta,
            signal: u.signal
          },
          s
        );
      } : u.fetchFn = f;
    }
  };
}
function Tf(o, { pages: u, pageParams: s }) {
  const f = u.length - 1;
  return o.getNextPageParam(
    u[f],
    u,
    s[f],
    s
  );
}
function Dp(o, { pages: u, pageParams: s }) {
  var f;
  return (f = o.getPreviousPageParam) == null ? void 0 : f.call(
    o,
    u[0],
    u,
    s[0],
    s
  );
}
var Le, kn, En, Nr, Rr, Cn, Tr, Lr, Bf, Ip = (Bf = class {
  constructor(o = {}) {
    I(this, Le, void 0);
    I(this, kn, void 0);
    I(this, En, void 0);
    I(this, Nr, void 0);
    I(this, Rr, void 0);
    I(this, Cn, void 0);
    I(this, Tr, void 0);
    I(this, Lr, void 0);
    N(this, Le, o.queryCache || new zp()), N(this, kn, o.mutationCache || new jp()), N(this, En, o.defaultOptions || {}), N(this, Nr, /* @__PURE__ */ new Map()), N(this, Rr, /* @__PURE__ */ new Map()), N(this, Cn, 0);
  }
  mount() {
    Xl(this, Cn)._++, p(this, Cn) === 1 && (N(this, Tr, tu.subscribe(() => {
      tu.isFocused() && (this.resumePausedMutations(), p(this, Le).onFocus());
    })), N(this, Lr, nu.subscribe(() => {
      nu.isOnline() && (this.resumePausedMutations(), p(this, Le).onOnline());
    })));
  }
  unmount() {
    var o, u;
    Xl(this, Cn)._--, p(this, Cn) === 0 && ((o = p(this, Tr)) == null || o.call(this), N(this, Tr, void 0), (u = p(this, Lr)) == null || u.call(this), N(this, Lr, void 0));
  }
  isFetching(o) {
    return p(this, Le).findAll({ ...o, fetchStatus: "fetching" }).length;
  }
  isMutating(o) {
    return p(this, kn).findAll({ ...o, status: "pending" }).length;
  }
  getQueryData(o) {
    var s;
    const u = this.defaultQueryOptions({ queryKey: o });
    return (s = p(this, Le).get(u.queryHash)) == null ? void 0 : s.state.data;
  }
  ensureQueryData(o) {
    const u = this.getQueryData(o.queryKey);
    return u !== void 0 ? Promise.resolve(u) : this.fetchQuery(o);
  }
  getQueriesData(o) {
    return this.getQueryCache().findAll(o).map(({ queryKey: u, state: s }) => {
      const f = s.data;
      return [u, f];
    });
  }
  setQueryData(o, u, s) {
    const f = this.defaultQueryOptions({ queryKey: o }), w = p(this, Le).get(
      f.queryHash
    ), C = w == null ? void 0 : w.state.data, P = Ep(u, C);
    if (!(typeof P > "u"))
      return p(this, Le).build(this, f).setData(P, { ...s, manual: !0 });
  }
  setQueriesData(o, u, s) {
    return ze.batch(
      () => this.getQueryCache().findAll(o).map(({ queryKey: f }) => [
        f,
        this.setQueryData(f, u, s)
      ])
    );
  }
  getQueryState(o) {
    var s;
    const u = this.defaultQueryOptions({ queryKey: o });
    return (s = p(this, Le).get(u.queryHash)) == null ? void 0 : s.state;
  }
  removeQueries(o) {
    const u = p(this, Le);
    ze.batch(() => {
      u.findAll(o).forEach((s) => {
        u.remove(s);
      });
    });
  }
  resetQueries(o, u) {
    const s = p(this, Le), f = {
      type: "active",
      ...o
    };
    return ze.batch(() => (s.findAll(o).forEach((w) => {
      w.reset();
    }), this.refetchQueries(f, u)));
  }
  cancelQueries(o = {}, u = {}) {
    const s = { revert: !0, ...u }, f = ze.batch(
      () => p(this, Le).findAll(o).map((w) => w.cancel(s))
    );
    return Promise.all(f).then(gt).catch(gt);
  }
  invalidateQueries(o = {}, u = {}) {
    return ze.batch(() => {
      if (p(this, Le).findAll(o).forEach((f) => {
        f.invalidate();
      }), o.refetchType === "none")
        return Promise.resolve();
      const s = {
        ...o,
        type: o.refetchType ?? o.type ?? "active"
      };
      return this.refetchQueries(s, u);
    });
  }
  refetchQueries(o = {}, u) {
    const s = {
      ...u,
      cancelRefetch: (u == null ? void 0 : u.cancelRefetch) ?? !0
    }, f = ze.batch(
      () => p(this, Le).findAll(o).filter((w) => !w.isDisabled()).map((w) => {
        let C = w.fetch(void 0, s);
        return s.throwOnError || (C = C.catch(gt)), w.state.fetchStatus === "paused" ? Promise.resolve() : C;
      })
    );
    return Promise.all(f).then(gt);
  }
  fetchQuery(o) {
    const u = this.defaultQueryOptions(o);
    typeof u.retry > "u" && (u.retry = !1);
    const s = p(this, Le).build(this, u);
    return s.isStaleByTime(u.staleTime) ? s.fetch(u) : Promise.resolve(s.state.data);
  }
  prefetchQuery(o) {
    return this.fetchQuery(o).then(gt).catch(gt);
  }
  fetchInfiniteQuery(o) {
    return o.behavior = Fp(o.pages), this.fetchQuery(o);
  }
  prefetchInfiniteQuery(o) {
    return this.fetchInfiniteQuery(o).then(gt).catch(gt);
  }
  resumePausedMutations() {
    return p(this, kn).resumePausedMutations();
  }
  getQueryCache() {
    return p(this, Le);
  }
  getMutationCache() {
    return p(this, kn);
  }
  getDefaultOptions() {
    return p(this, En);
  }
  setDefaultOptions(o) {
    N(this, En, o);
  }
  setQueryDefaults(o, u) {
    p(this, Nr).set(Yn(o), {
      queryKey: o,
      defaultOptions: u
    });
  }
  getQueryDefaults(o) {
    const u = [...p(this, Nr).values()];
    let s = {};
    return u.forEach((f) => {
      Pi(o, f.queryKey) && (s = { ...s, ...f.defaultOptions });
    }), s;
  }
  setMutationDefaults(o, u) {
    p(this, Rr).set(Yn(o), {
      mutationKey: o,
      defaultOptions: u
    });
  }
  getMutationDefaults(o) {
    const u = [...p(this, Rr).values()];
    let s = {};
    return u.forEach((f) => {
      Pi(o, f.mutationKey) && (s = { ...s, ...f.defaultOptions });
    }), s;
  }
  defaultQueryOptions(o) {
    if (o._defaulted)
      return o;
    const u = {
      ...p(this, En).queries,
      ...this.getQueryDefaults(o.queryKey),
      ...o,
      _defaulted: !0
    };
    return u.queryHash || (u.queryHash = Ss(
      u.queryKey,
      u
    )), typeof u.refetchOnReconnect > "u" && (u.refetchOnReconnect = u.networkMode !== "always"), typeof u.throwOnError > "u" && (u.throwOnError = !!u.suspense), typeof u.networkMode > "u" && u.persister && (u.networkMode = "offlineFirst"), u;
  }
  defaultMutationOptions(o) {
    return o != null && o._defaulted ? o : {
      ...p(this, En).mutations,
      ...(o == null ? void 0 : o.mutationKey) && this.getMutationDefaults(o.mutationKey),
      ...o,
      _defaulted: !0
    };
  }
  clear() {
    p(this, Le).clear(), p(this, kn).clear();
  }
}, Le = new WeakMap(), kn = new WeakMap(), En = new WeakMap(), Nr = new WeakMap(), Rr = new WeakMap(), Cn = new WeakMap(), Tr = new WeakMap(), Lr = new WeakMap(), Bf), tt, Se, Ti, Ke, $n, zr, Ut, Li, Mr, jr, Kn, Gn, xn, Fr, qn, _i, zi, as, Mi, cs, ji, fs, Fi, ds, Di, hs, Ii, ps, Ui, ms, lu, nd, Vf, Up = (Vf = class extends Ur {
  constructor(u, s) {
    super();
    I(this, qn);
    I(this, zi);
    I(this, Mi);
    I(this, ji);
    I(this, Fi);
    I(this, Di);
    I(this, Ii);
    I(this, Ui);
    I(this, lu);
    I(this, tt, void 0);
    I(this, Se, void 0);
    I(this, Ti, void 0);
    I(this, Ke, void 0);
    I(this, $n, void 0);
    I(this, zr, void 0);
    I(this, Ut, void 0);
    I(this, Li, void 0);
    I(this, Mr, void 0);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    I(this, jr, void 0);
    I(this, Kn, void 0);
    I(this, Gn, void 0);
    I(this, xn, void 0);
    I(this, Fr, /* @__PURE__ */ new Set());
    this.options = s, N(this, tt, u), N(this, Ut, null), this.bindMethods(), this.setOptions(s);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (p(this, Se).addObserver(this), Lf(p(this, Se), this.options) ? Z(this, qn, _i).call(this) : this.updateResult(), Z(this, Fi, ds).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return ys(
      p(this, Se),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return ys(
      p(this, Se),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), Z(this, Di, hs).call(this), Z(this, Ii, ps).call(this), p(this, Se).removeObserver(this);
  }
  setOptions(u, s) {
    const f = this.options, w = p(this, Se);
    if (this.options = p(this, tt).defaultQueryOptions(u), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    Z(this, Ui, ms).call(this), eu(this.options, f) || p(this, tt).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: p(this, Se),
      observer: this
    });
    const C = this.hasListeners();
    C && zf(
      p(this, Se),
      w,
      this.options,
      f
    ) && Z(this, qn, _i).call(this), this.updateResult(s), C && (p(this, Se) !== w || this.options.enabled !== f.enabled || this.options.staleTime !== f.staleTime) && Z(this, zi, as).call(this);
    const P = Z(this, Mi, cs).call(this);
    C && (p(this, Se) !== w || this.options.enabled !== f.enabled || P !== p(this, xn)) && Z(this, ji, fs).call(this, P);
  }
  getOptimisticResult(u) {
    const s = p(this, tt).getQueryCache().build(p(this, tt), u), f = this.createResult(s, u);
    return Qp(this, f) && (N(this, Ke, f), N(this, zr, this.options), N(this, $n, p(this, Se).state)), f;
  }
  getCurrentResult() {
    return p(this, Ke);
  }
  trackResult(u) {
    const s = {};
    return Object.keys(u).forEach((f) => {
      Object.defineProperty(s, f, {
        configurable: !1,
        enumerable: !0,
        get: () => (p(this, Fr).add(f), u[f])
      });
    }), s;
  }
  getCurrentQuery() {
    return p(this, Se);
  }
  refetch({ ...u } = {}) {
    return this.fetch({
      ...u
    });
  }
  fetchOptimistic(u) {
    const s = p(this, tt).defaultQueryOptions(u), f = p(this, tt).getQueryCache().build(p(this, tt), s);
    return f.isFetchingOptimistic = !0, f.fetch().then(() => this.createResult(f, s));
  }
  fetch(u) {
    return Z(this, qn, _i).call(this, {
      ...u,
      cancelRefetch: u.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), p(this, Ke)));
  }
  createResult(u, s) {
    var fe;
    const f = p(this, Se), w = this.options, C = p(this, Ke), P = p(this, $n), O = p(this, zr), q = u !== f ? u.state : p(this, Ti), { state: L } = u;
    let { error: Y, errorUpdatedAt: F, fetchStatus: U, status: J } = L, X = !1, z;
    if (s._optimisticResults) {
      const oe = this.hasListeners(), ne = !oe && Lf(u, s), Me = oe && zf(u, f, s, w);
      (ne || Me) && (U = uu(u.options.networkMode) ? "fetching" : "paused", L.dataUpdatedAt || (J = "pending")), s._optimisticResults === "isRestoring" && (U = "idle");
    }
    if (s.select && typeof L.data < "u")
      if (C && L.data === (P == null ? void 0 : P.data) && s.select === p(this, Li))
        z = p(this, Mr);
      else
        try {
          N(this, Li, s.select), z = s.select(L.data), z = ss(C == null ? void 0 : C.data, z, s), N(this, Mr, z), N(this, Ut, null);
        } catch (oe) {
          N(this, Ut, oe);
        }
    else
      z = L.data;
    if (typeof s.placeholderData < "u" && typeof z > "u" && J === "pending") {
      let oe;
      if (C != null && C.isPlaceholderData && s.placeholderData === (O == null ? void 0 : O.placeholderData))
        oe = C.data;
      else if (oe = typeof s.placeholderData == "function" ? s.placeholderData(
        (fe = p(this, jr)) == null ? void 0 : fe.state.data,
        p(this, jr)
      ) : s.placeholderData, s.select && typeof oe < "u")
        try {
          oe = s.select(oe), N(this, Ut, null);
        } catch (ne) {
          N(this, Ut, ne);
        }
      typeof oe < "u" && (J = "success", z = ss(
        C == null ? void 0 : C.data,
        oe,
        s
      ), X = !0);
    }
    p(this, Ut) && (Y = p(this, Ut), z = p(this, Mr), F = Date.now(), J = "error");
    const K = U === "fetching", he = J === "pending", ee = J === "error", le = he && K;
    return {
      status: J,
      fetchStatus: U,
      isPending: he,
      isSuccess: J === "success",
      isError: ee,
      isInitialLoading: le,
      isLoading: le,
      data: z,
      dataUpdatedAt: L.dataUpdatedAt,
      error: Y,
      errorUpdatedAt: F,
      failureCount: L.fetchFailureCount,
      failureReason: L.fetchFailureReason,
      errorUpdateCount: L.errorUpdateCount,
      isFetched: L.dataUpdateCount > 0 || L.errorUpdateCount > 0,
      isFetchedAfterMount: L.dataUpdateCount > q.dataUpdateCount || L.errorUpdateCount > q.errorUpdateCount,
      isFetching: K,
      isRefetching: K && !he,
      isLoadingError: ee && L.dataUpdatedAt === 0,
      isPaused: U === "paused",
      isPlaceholderData: X,
      isRefetchError: ee && L.dataUpdatedAt !== 0,
      isStale: ks(u, s),
      refetch: this.refetch
    };
  }
  updateResult(u) {
    const s = p(this, Ke), f = this.createResult(p(this, Se), this.options);
    if (N(this, $n, p(this, Se).state), N(this, zr, this.options), p(this, $n).data !== void 0 && N(this, jr, p(this, Se)), eu(f, s))
      return;
    N(this, Ke, f);
    const w = {}, C = () => {
      if (!s)
        return !0;
      const { notifyOnChangeProps: P } = this.options, O = typeof P == "function" ? P() : P;
      if (O === "all" || !O && !p(this, Fr).size)
        return !0;
      const T = new Set(
        O ?? p(this, Fr)
      );
      return this.options.throwOnError && T.add("error"), Object.keys(p(this, Ke)).some((q) => {
        const L = q;
        return p(this, Ke)[L] !== s[L] && T.has(L);
      });
    };
    (u == null ? void 0 : u.listeners) !== !1 && C() && (w.listeners = !0), Z(this, lu, nd).call(this, { ...w, ...u });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && Z(this, Fi, ds).call(this);
  }
}, tt = new WeakMap(), Se = new WeakMap(), Ti = new WeakMap(), Ke = new WeakMap(), $n = new WeakMap(), zr = new WeakMap(), Ut = new WeakMap(), Li = new WeakMap(), Mr = new WeakMap(), jr = new WeakMap(), Kn = new WeakMap(), Gn = new WeakMap(), xn = new WeakMap(), Fr = new WeakMap(), qn = new WeakSet(), _i = function(u) {
  Z(this, Ui, ms).call(this);
  let s = p(this, Se).fetch(
    this.options,
    u
  );
  return u != null && u.throwOnError || (s = s.catch(gt)), s;
}, zi = new WeakSet(), as = function() {
  if (Z(this, Di, hs).call(this), Ir || p(this, Ke).isStale || !us(this.options.staleTime))
    return;
  const s = Xf(
    p(this, Ke).dataUpdatedAt,
    this.options.staleTime
  ) + 1;
  N(this, Kn, setTimeout(() => {
    p(this, Ke).isStale || this.updateResult();
  }, s));
}, Mi = new WeakSet(), cs = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(p(this, Se)) : this.options.refetchInterval) ?? !1;
}, ji = new WeakSet(), fs = function(u) {
  Z(this, Ii, ps).call(this), N(this, xn, u), !(Ir || this.options.enabled === !1 || !us(p(this, xn)) || p(this, xn) === 0) && N(this, Gn, setInterval(() => {
    (this.options.refetchIntervalInBackground || tu.isFocused()) && Z(this, qn, _i).call(this);
  }, p(this, xn)));
}, Fi = new WeakSet(), ds = function() {
  Z(this, zi, as).call(this), Z(this, ji, fs).call(this, Z(this, Mi, cs).call(this));
}, Di = new WeakSet(), hs = function() {
  p(this, Kn) && (clearTimeout(p(this, Kn)), N(this, Kn, void 0));
}, Ii = new WeakSet(), ps = function() {
  p(this, Gn) && (clearInterval(p(this, Gn)), N(this, Gn, void 0));
}, Ui = new WeakSet(), ms = function() {
  const u = p(this, tt).getQueryCache().build(p(this, tt), this.options);
  if (u === p(this, Se))
    return;
  const s = p(this, Se);
  N(this, Se, u), N(this, Ti, u.state), this.hasListeners() && (s == null || s.removeObserver(this), u.addObserver(this));
}, lu = new WeakSet(), nd = function(u) {
  ze.batch(() => {
    u.listeners && this.listeners.forEach((s) => {
      s(p(this, Ke));
    }), p(this, tt).getQueryCache().notify({
      query: p(this, Se),
      type: "observerResultsUpdated"
    });
  });
}, Vf);
function Ap(o, u) {
  return u.enabled !== !1 && !o.state.dataUpdatedAt && !(o.state.status === "error" && u.retryOnMount === !1);
}
function Lf(o, u) {
  return Ap(o, u) || o.state.dataUpdatedAt > 0 && ys(o, u, u.refetchOnMount);
}
function ys(o, u, s) {
  if (u.enabled !== !1) {
    const f = typeof s == "function" ? s(o) : s;
    return f === "always" || f !== !1 && ks(o, u);
  }
  return !1;
}
function zf(o, u, s, f) {
  return s.enabled !== !1 && (o !== u || f.enabled === !1) && (!s.suspense || o.state.status !== "error") && ks(o, s);
}
function ks(o, u) {
  return o.isStaleByTime(u.staleTime);
}
function Qp(o, u) {
  return !eu(o.getCurrentResult(), u);
}
var _n, Pn, st, Yt, Dr, Jl, Ai, vs, Wf, Hp = (Wf = class extends Ur {
  constructor(u, s) {
    super();
    I(this, Dr);
    I(this, Ai);
    I(this, _n, void 0);
    I(this, Pn, void 0);
    I(this, st, void 0);
    I(this, Yt, void 0);
    N(this, _n, u), this.setOptions(s), this.bindMethods(), Z(this, Dr, Jl).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(u) {
    var f;
    const s = this.options;
    this.options = p(this, _n).defaultMutationOptions(u), eu(this.options, s) || p(this, _n).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: p(this, st),
      observer: this
    }), s != null && s.mutationKey && this.options.mutationKey && Yn(s.mutationKey) !== Yn(this.options.mutationKey) ? this.reset() : (f = p(this, st)) == null || f.setOptions(this.options);
  }
  onUnsubscribe() {
    var u;
    this.hasListeners() || (u = p(this, st)) == null || u.removeObserver(this);
  }
  onMutationUpdate(u) {
    Z(this, Dr, Jl).call(this), Z(this, Ai, vs).call(this, u);
  }
  getCurrentResult() {
    return p(this, Pn);
  }
  reset() {
    var u;
    (u = p(this, st)) == null || u.removeObserver(this), N(this, st, void 0), Z(this, Dr, Jl).call(this), Z(this, Ai, vs).call(this);
  }
  mutate(u, s) {
    var f;
    return N(this, Yt, s), (f = p(this, st)) == null || f.removeObserver(this), N(this, st, p(this, _n).getMutationCache().build(p(this, _n), this.options)), p(this, st).addObserver(this), p(this, st).execute(u);
  }
}, _n = new WeakMap(), Pn = new WeakMap(), st = new WeakMap(), Yt = new WeakMap(), Dr = new WeakSet(), Jl = function() {
  var s;
  const u = ((s = p(this, st)) == null ? void 0 : s.state) ?? td();
  N(this, Pn, {
    ...u,
    isPending: u.status === "pending",
    isSuccess: u.status === "success",
    isError: u.status === "error",
    isIdle: u.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, Ai = new WeakSet(), vs = function(u) {
  ze.batch(() => {
    var s, f, w, C, P, O, T, q;
    if (p(this, Yt) && this.hasListeners()) {
      const L = p(this, Pn).variables, Y = p(this, Pn).context;
      (u == null ? void 0 : u.type) === "success" ? ((f = (s = p(this, Yt)).onSuccess) == null || f.call(s, u.data, L, Y), (C = (w = p(this, Yt)).onSettled) == null || C.call(w, u.data, null, L, Y)) : (u == null ? void 0 : u.type) === "error" && ((O = (P = p(this, Yt)).onError) == null || O.call(P, u.error, L, Y), (q = (T = p(this, Yt)).onSettled) == null || q.call(
        T,
        void 0,
        u.error,
        L,
        Y
      ));
    }
    this.listeners.forEach((L) => {
      L(p(this, Pn));
    });
  });
}, Wf), rd = re.createContext(
  void 0
), id = (o) => {
  const u = re.useContext(rd);
  if (o)
    return o;
  if (!u)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return u;
}, Bp = ({
  client: o,
  children: u
}) => (re.useEffect(() => (o.mount(), () => {
  o.unmount();
}), [o]), /* @__PURE__ */ B.jsx(rd.Provider, { value: o, children: u })), ld = re.createContext(!1), Vp = () => re.useContext(ld);
ld.Provider;
function Wp() {
  let o = !1;
  return {
    clearReset: () => {
      o = !1;
    },
    reset: () => {
      o = !0;
    },
    isReset: () => o
  };
}
var $p = re.createContext(Wp()), Kp = () => re.useContext($p);
function ud(o, u) {
  return typeof o == "function" ? o(...u) : !!o;
}
var Gp = (o, u) => {
  (o.suspense || o.throwOnError) && (u.isReset() || (o.retryOnMount = !1));
}, qp = (o) => {
  re.useEffect(() => {
    o.clearReset();
  }, [o]);
}, Yp = ({
  result: o,
  errorResetBoundary: u,
  throwOnError: s,
  query: f
}) => o.isError && !u.isReset() && !o.isFetching && f && ud(s, [o.error, f]), Xp = (o) => {
  o.suspense && typeof o.staleTime != "number" && (o.staleTime = 1e3);
}, Zp = (o, u) => (o == null ? void 0 : o.suspense) && u.isPending, Jp = (o, u, s) => u.fetchOptimistic(o).catch(() => {
  s.clearReset();
});
function bp(o, u, s) {
  const f = id(s), w = Vp(), C = Kp(), P = f.defaultQueryOptions(o);
  P._optimisticResults = w ? "isRestoring" : "optimistic", Xp(P), Gp(P, C), qp(C);
  const [O] = re.useState(
    () => new u(
      f,
      P
    )
  ), T = O.getOptimisticResult(P);
  if (re.useSyncExternalStore(
    re.useCallback(
      (q) => {
        const L = w ? () => {
        } : O.subscribe(ze.batchCalls(q));
        return O.updateResult(), L;
      },
      [O, w]
    ),
    () => O.getCurrentResult(),
    () => O.getCurrentResult()
  ), re.useEffect(() => {
    O.setOptions(P, { listeners: !1 });
  }, [P, O]), Zp(P, T))
    throw Jp(P, O, C);
  if (Yp({
    result: T,
    errorResetBoundary: C,
    throwOnError: P.throwOnError,
    query: f.getQueryCache().get(P.queryHash)
  }))
    throw T.error;
  return P.notifyOnChangeProps ? T : O.trackResult(T);
}
function em(o, u) {
  return bp(o, Up, u);
}
function tm(o, u) {
  const s = id(u), [f] = re.useState(
    () => new Hp(
      s,
      o
    )
  );
  re.useEffect(() => {
    f.setOptions(o);
  }, [f, o]);
  const w = re.useSyncExternalStore(
    re.useCallback(
      (P) => f.subscribe(ze.batchCalls(P)),
      [f]
    ),
    () => f.getCurrentResult(),
    () => f.getCurrentResult()
  ), C = re.useCallback(
    (P, O) => {
      f.mutate(P, O).catch(nm);
    },
    [f]
  );
  if (w.error && ud(f.options.throwOnError, [w.error]))
    throw w.error;
  return { ...w, mutate: C, mutateAsync: w.mutate };
}
function nm() {
}
const Es = "/images/sequra-logo.png", od = () => /* @__PURE__ */ B.jsxs("div", { className: "w-96 placeholder:mt-4 mt-10 shadow-sm p-2", children: [
  /* @__PURE__ */ B.jsx("div", { className: "bg-green-100 p-2 flex justify-center", children: /* @__PURE__ */ B.jsx("figure", { children: /* @__PURE__ */ B.jsx("img", { alt: "sequra-logo", className: "my-2 w-[80px]", src: Es }) }) }),
  /* @__PURE__ */ B.jsx("div", { className: "m-4", children: /* @__PURE__ */ B.jsx("h4", { className: "align-center text-center text-md mb-2 text-red-600", children: "It seems something went wrong, please try again later" }) })
] });
class rm extends re.Component {
  constructor() {
    super(...arguments);
    wf(this, "state", {
      hasError: !1
    });
  }
  static getDerivedStateFromError(s) {
    return { hasError: !0 };
  }
  componentDidCatch(s, f) {
    console.error("Uncaught error:", s, f);
  }
  render() {
    return this.state.hasError ? /* @__PURE__ */ B.jsx(od, {}) : this.props.children;
  }
}
var sd = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Mf = Xt.createContext && /* @__PURE__ */ Xt.createContext(sd), im = ["attr", "size", "title"];
function lm(o, u) {
  if (o == null)
    return {};
  var s = um(o, u), f, w;
  if (Object.getOwnPropertySymbols) {
    var C = Object.getOwnPropertySymbols(o);
    for (w = 0; w < C.length; w++)
      f = C[w], !(u.indexOf(f) >= 0) && Object.prototype.propertyIsEnumerable.call(o, f) && (s[f] = o[f]);
  }
  return s;
}
function um(o, u) {
  if (o == null)
    return {};
  var s = {}, f = Object.keys(o), w, C;
  for (C = 0; C < f.length; C++)
    w = f[C], !(u.indexOf(w) >= 0) && (s[w] = o[w]);
  return s;
}
function ru() {
  return ru = Object.assign ? Object.assign.bind() : function(o) {
    for (var u = 1; u < arguments.length; u++) {
      var s = arguments[u];
      for (var f in s)
        Object.prototype.hasOwnProperty.call(s, f) && (o[f] = s[f]);
    }
    return o;
  }, ru.apply(this, arguments);
}
function jf(o, u) {
  var s = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(o);
    u && (f = f.filter(function(w) {
      return Object.getOwnPropertyDescriptor(o, w).enumerable;
    })), s.push.apply(s, f);
  }
  return s;
}
function iu(o) {
  for (var u = 1; u < arguments.length; u++) {
    var s = arguments[u] != null ? arguments[u] : {};
    u % 2 ? jf(Object(s), !0).forEach(function(f) {
      om(o, f, s[f]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(s)) : jf(Object(s)).forEach(function(f) {
      Object.defineProperty(o, f, Object.getOwnPropertyDescriptor(s, f));
    });
  }
  return o;
}
function om(o, u, s) {
  return u = sm(u), u in o ? Object.defineProperty(o, u, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : o[u] = s, o;
}
function sm(o) {
  var u = am(o, "string");
  return typeof u == "symbol" ? u : String(u);
}
function am(o, u) {
  if (typeof o != "object" || o === null)
    return o;
  var s = o[Symbol.toPrimitive];
  if (s !== void 0) {
    var f = s.call(o, u || "default");
    if (typeof f != "object")
      return f;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (u === "string" ? String : Number)(o);
}
function ad(o) {
  return o && o.map((u, s) => /* @__PURE__ */ Xt.createElement(u.tag, iu({
    key: s
  }, u.attr), ad(u.child)));
}
function ou(o) {
  return (u) => /* @__PURE__ */ Xt.createElement(cm, ru({
    attr: iu({}, o.attr)
  }, u), ad(o.child));
}
function cm(o) {
  var u = (s) => {
    var {
      attr: f,
      size: w,
      title: C
    } = o, P = lm(o, im), O = w || s.size || "1em", T;
    return s.className && (T = s.className), o.className && (T = (T ? T + " " : "") + o.className), /* @__PURE__ */ Xt.createElement("svg", ru({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, s.attr, f, P, {
      className: T,
      style: iu(iu({
        color: o.color || s.color
      }, s.style), o.style),
      height: O,
      width: O,
      xmlns: "http://www.w3.org/2000/svg"
    }), C && /* @__PURE__ */ Xt.createElement("title", null, C), o.children);
  };
  return Mf !== void 0 ? /* @__PURE__ */ Xt.createElement(Mf.Consumer, null, (s) => u(s)) : u(sd);
}
function fm(o) {
  return ou({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "line", attr: { x1: "8", x2: "16", y1: "12", y2: "12" }, child: [] }, { tag: "line", attr: { x1: "12", x2: "12", y1: "16", y2: "16" }, child: [] }, { tag: "line", attr: { x1: "12", x2: "12", y1: "8", y2: "8" }, child: [] }, { tag: "circle", attr: { cx: "12", cy: "12", r: "10" }, child: [] }] })(o);
}
function dm(o) {
  return ou({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: { id: "Credit_Card_1" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { d: "M19.44,5.14H4.56a2.5,2.5,0,0,0-2.5,2.5v8.72a2.5,2.5,0,0,0,2.5,2.5H19.44a2.5,2.5,0,0,0,2.5-2.5V7.64A2.5,2.5,0,0,0,19.44,5.14ZM3.06,7.64a1.5,1.5,0,0,1,1.5-1.5H19.44a1.5,1.5,0,0,1,1.5,1.5v.5H3.06Zm17.88,8.72a1.5,1.5,0,0,1-1.5,1.5H4.56a1.5,1.5,0,0,1-1.5-1.5V9.64H20.94Z" }, child: [] }, { tag: "path", attr: { d: "M8.063,14.247h-3a.5.5,0,1,1,0-1h3a.5.5,0,1,1,0,1Z" }, child: [] }, { tag: "path", attr: { d: "M18.934,14.25h-6.5a.5.5,0,1,1,0-1h6.5a.5.5,0,0,1,0,1Z" }, child: [] }] }] }] })(o);
}
function hm(o) {
  return ou({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "m18 7-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41 6 19l1.41-1.41L1.83 12 .41 13.41z" }, child: [] }] })(o);
}
function pm(o) {
  return ou({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z" }, child: [] }] })(o);
}
const cd = re.forwardRef(({ children: o, id: u = "#sequra-modal-root" }, s) => {
  const [f, w] = re.useState(!1);
  return re.useEffect(() => (w(!0), () => w(!1)), []), f ? Yf.createPortal(re.cloneElement(o, { ref: s }), document.querySelector(u)) : null;
});
cd.displayName = "Portal";
const mm = (o, u) => {
  const s = re.useCallback(
    (f) => {
      o.current == null || o.current.contains(f.target) || u();
    },
    [u, o]
  );
  re.useEffect(() => (document.addEventListener("click", s), () => document.removeEventListener("click", s)), [s]);
}, ym = ({ children: o, isOpen: u, handleClose: s }) => {
  const f = re.useRef(null);
  return mm(f, s), u ? /* @__PURE__ */ B.jsx(cd, { children: /* @__PURE__ */ B.jsx("div", { className: "w-full h-full fixed bottom-0 top-0 left-0 right-0 h-100 z-10 flex justify-center items-center bg-black bg-opacity-50", children: /* @__PURE__ */ B.jsxs(
    "div",
    {
      ref: f,
      className: "w-full h-full bg-white p-5 relative z-20 md:w-4/12 md:min-h-[60%] md:h-fit animate-fadeIn",
      children: [
        /* @__PURE__ */ B.jsx(
          pm,
          {
            className: "absolute right-5 size-6 cursor-pointer",
            "data-testid": "close-icon",
            onClick: s
          }
        ),
        o
      ]
    }
  ) }) }) : null;
}, vm = ({ isOpen: o, fee: u, onClose: s }) => /* @__PURE__ */ B.jsxs(ym, { handleClose: s, isOpen: o, children: [
  /* @__PURE__ */ B.jsxs("div", { className: "mt-4 p-2", children: [
    /* @__PURE__ */ B.jsx("figure", { className: "flex justify-center", children: /* @__PURE__ */ B.jsx("img", { alt: "sequra-logo", className: "my-2 w-[120px] ", src: Es }) }),
    /* @__PURE__ */ B.jsx("h1", { className: "font-bold text-lg text-center mt-4", children: "Fracciona tu pago" })
  ] }),
  /* @__PURE__ */ B.jsxs("div", { className: "flex items-center justify-around mt-8 p-4", children: [
    /* @__PURE__ */ B.jsx("p", { className: "font-semibold text-lg max-w-80", children: "Fracciona tu pago solo con un coste fijo por cuota." }),
    /* @__PURE__ */ B.jsx(fm, { className: "size-10 text-green-500" })
  ] }),
  /* @__PURE__ */ B.jsxs("div", { className: "flex items-center justify-around  mt-8 p-4", children: [
    /* @__PURE__ */ B.jsx("p", { className: "font-semibold text-lg max-w-80", children: "Ahora solo pagas la primera cuota." }),
    /* @__PURE__ */ B.jsx(hm, { className: "size-10 text-green-500" })
  ] }),
  /* @__PURE__ */ B.jsxs("div", { className: "flex items-center justify-around  mt-8 p-4", children: [
    /* @__PURE__ */ B.jsx("p", { className: "font-semibold text-lg max-w-80", children: "El resto de los pagos se cargarán automáticamente a tu tarjeta." }),
    /* @__PURE__ */ B.jsx(dm, { className: "size-10 text-green-500" })
  ] }),
  /* @__PURE__ */ B.jsxs("p", { className: "mt-20 text-center", children: [
    "Además en el importe mostrado ya se incluye la cuota única mensual de ",
    u,
    "/mes, por lo que no tendrás ninguna sorpresa."
  ] })
] });
var gs = /* @__PURE__ */ ((o) => (o.CHECKOUT_WIDGET = "checkoutWidget", o))(gs || {}), ws = /* @__PURE__ */ ((o) => (o.SIMULATOR_INSTALLMENT_CHANGE = "simulatorInstalmentChanged", o.SIMULATOR_INSTALLMENT_MODAL_OPEN = "simulatorModalOpen", o))(ws || {});
const gm = (o) => o.map((u) => /* @__PURE__ */ B.jsxs("option", { value: u.installments, children: [
  u.installments,
  " cuotas de ",
  u.amount,
  "/mes"
] }, u.installments));
var fd = /* @__PURE__ */ ((o) => (o.POST = "POST", o.PUT = "PUT", o.GET = "GET", o.PATCH = "PATCH", o.DELETE = "DELETE", o))(fd || {});
async function dd(o, u) {
  const s = `http://localhost:8080${o}`, f = await fetch(s, {
    ...u,
    ...(u == null ? void 0 : u.body) && { body: JSON.stringify(u.body) },
    headers: {
      ...u == null ? void 0 : u.headers,
      "Content-Type": "application/json"
    }
  });
  if (!f.ok)
    throw new Error(f.statusText);
  return await f.json();
}
const hd = {
  AGREEMENTS: "/credit_agreements?totalWithTax=",
  EVENTS: "/events"
}, wm = {
  post: async (o) => dd(`${hd.EVENTS}`, {
    method: fd.POST,
    body: o
  })
}, Sm = ({
  onError: o
}) => tm({
  mutationFn: wm.post,
  onError: o
}), km = {
  agreement: (o) => o.map((u) => ({
    installments: u.instalment_count,
    fee: u.instalment_fee.string,
    amount: u.instalment_amount.string,
    total: u.total_with_tax.string
  }))
}, Em = {
  agreements: async (o) => {
    const u = await dd(`${hd.AGREEMENTS}${o}`);
    return km.agreement(u);
  }
}, Cm = "agreements", xm = (o) => em({
  queryFn: () => Em.agreements(o),
  queryKey: [Cm, o],
  staleTime: 1 / 0
}), _m = ({ amount: o }) => {
  var F;
  const [u, s] = re.useState(!1), [f, w] = re.useState(0), { data: C, isLoading: P, isError: O } = xm(o), T = Sm({
    onError: () => console.warn("Error in log event, check the log service")
  });
  if (re.useEffect(() => {
    C && w(C[0].installments);
  }, [C]), O)
    return /* @__PURE__ */ B.jsx(od, {});
  const q = (U) => {
    T.mutate({
      context: gs.CHECKOUT_WIDGET,
      type: ws.SIMULATOR_INSTALLMENT_CHANGE,
      selectedInstalment: U.target.value
    }), w(Number(U.target.value));
  }, L = () => {
    T.mutate({
      context: gs.CHECKOUT_WIDGET,
      type: ws.SIMULATOR_INSTALLMENT_MODAL_OPEN
    }), s(!0);
  }, Y = (F = C == null ? void 0 : C.find((U) => U.installments === f)) == null ? void 0 : F.fee;
  return /* @__PURE__ */ B.jsxs("div", { className: "w-96 mt-10 shadow-md rounded-lg", children: [
    /* @__PURE__ */ B.jsx("div", { className: "bg-green-100 p-2 flex justify-center", children: /* @__PURE__ */ B.jsx("figure", { children: /* @__PURE__ */ B.jsx("img", { alt: "sequra-logo", className: "my-2 w-[80px]", src: Es }) }) }),
    /* @__PURE__ */ B.jsxs("div", { className: "p-2", children: [
      /* @__PURE__ */ B.jsx("h4", { className: "align-center text-center text-lg mb-2 text-gray-400", children: "Más flexibilidad en tus pagos." }),
      /* @__PURE__ */ B.jsxs("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ B.jsx("p", { className: "text-sm", children: "Divide tu pago" }),
        P ? /* @__PURE__ */ B.jsx("div", { className: "skeleton w-12 h-4 rounded-md" }) : /* @__PURE__ */ B.jsx(
          "a",
          {
            className: "text-sm underline text-green-400 cursor-pointer",
            onClick: L,
            children: "Más info"
          }
        )
      ] }),
      /* @__PURE__ */ B.jsx("div", { className: "mt-4", children: P ? /* @__PURE__ */ B.jsx("div", { className: "skeleton w-full h-12 rounded-md" }) : /* @__PURE__ */ B.jsx(
        "select",
        {
          className: "border-color w-full ring-1 ring-green-400/50 rounded-sm p-2 my-2",
          value: f,
          onChange: q,
          children: gm(C)
        }
      ) })
    ] }),
    /* @__PURE__ */ B.jsx(vm, { fee: Y, isOpen: u, onClose: () => s(!1) })
  ] });
}, pd = "onSequraWidgetAmountUpdate", md = "sequra-widget", yd = ({ amount: o, isWidget: u = !1, style: s }) => {
  const [f, w] = re.useState(o), C = new Ip(), P = re.useCallback((T) => {
    w(T.detail.amount);
  }, []);
  re.useEffect(() => {
    u && document.addEventListener(pd, P);
  }, [u, P]), re.useEffect(() => {
    w(o);
  }, [o]);
  const O = u ? f : o;
  return O ? /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
    /* @__PURE__ */ B.jsx("div", { style: s, children: /* @__PURE__ */ B.jsx(rm, { children: /* @__PURE__ */ B.jsx(Bp, { client: C, children: /* @__PURE__ */ B.jsx(_m, { amount: O }) }) }) }),
    /* @__PURE__ */ B.jsx("div", { id: "sequra-modal-root" })
  ] }) : null;
};
bl.createRoot(document.getElementById(md)).render(
  /* @__PURE__ */ B.jsx(Xt.StrictMode, { children: /* @__PURE__ */ B.jsx(yd, { isWidget: !0, amount: "39999" }) })
);
const Pm = (o, u) => {
  bl.createRoot(document.getElementById(md)).render(
    /* @__PURE__ */ B.jsx(Xt.StrictMode, { children: /* @__PURE__ */ B.jsx(yd, { isWidget: !0, amount: o, style: u }) })
  );
}, Om = (o) => {
  const u = new CustomEvent(pd, {
    detail: { amount: o }
  });
  document.dispatchEvent(u);
}, Nm = {
  renderWidget: Pm,
  setAmount: Om
};
window.Sequra = Nm;
export {
  Nm as default
};
