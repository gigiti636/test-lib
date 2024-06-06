import { jsx as Ze } from "react/jsx-runtime";
import * as K from "react";
import { forwardRef as un, useContext as fn } from "react";
function Ne(e) {
  let r = "https://mui.com/production-error/?code=" + e;
  for (let t = 1; t < arguments.length; t += 1)
    r += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified MUI error #" + e + "; visit " + r + " for the full message.";
}
const ln = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ne
}, Symbol.toStringTag, { value: "Module" }));
function L() {
  return L = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, L.apply(this, arguments);
}
function Tt(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var dn = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, pn = /* @__PURE__ */ Tt(
  function(e) {
    return dn.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function mn(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function hn(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var yn = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = t.speedy === void 0 ? process.env.NODE_ENV === "production" : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(hn(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var i = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !i;
    }
    if (this.isSpeedy) {
      var a = mn(o);
      try {
        a.insertRule(n, a.cssRules.length);
      } catch (s) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', s);
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), H = "-ms-", Ke = "-moz-", $ = "-webkit-", $r = "comm", Ir = "rule", Mr = "decl", gn = "@import", Ct = "@keyframes", bn = "@layer", vn = Math.abs, Qe = String.fromCharCode, xn = Object.assign;
function En(e, r) {
  return G(e, 0) ^ 45 ? (((r << 2 ^ G(e, 0)) << 2 ^ G(e, 1)) << 2 ^ G(e, 2)) << 2 ^ G(e, 3) : 0;
}
function Pt(e) {
  return e.trim();
}
function On(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function I(e, r, t) {
  return e.replace(r, t);
}
function Pr(e, r) {
  return e.indexOf(r);
}
function G(e, r) {
  return e.charCodeAt(r) | 0;
}
function $e(e, r, t) {
  return e.slice(r, t);
}
function se(e) {
  return e.length;
}
function Dr(e) {
  return e.length;
}
function We(e, r) {
  return r.push(e), e;
}
function _n(e, r) {
  return e.map(r).join("");
}
var er = 1, Se = 1, At = 0, Z = 0, Y = 0, Te = "";
function rr(e, r, t, n, o, i, a) {
  return { value: e, root: r, parent: t, type: n, props: o, children: i, line: er, column: Se, length: a, return: "" };
}
function Ae(e, r) {
  return xn(rr("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function wn() {
  return Y;
}
function Sn() {
  return Y = Z > 0 ? G(Te, --Z) : 0, Se--, Y === 10 && (Se = 1, er--), Y;
}
function ee() {
  return Y = Z < At ? G(Te, Z++) : 0, Se++, Y === 10 && (Se = 1, er++), Y;
}
function ce() {
  return G(Te, Z);
}
function qe() {
  return Z;
}
function je(e, r) {
  return $e(Te, e, r);
}
function Ie(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Rt(e) {
  return er = Se = 1, At = se(Te = e), Z = 0, [];
}
function kt(e) {
  return Te = "", e;
}
function Ye(e) {
  return Pt(je(Z - 1, Ar(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Tn(e) {
  for (; (Y = ce()) && Y < 33; )
    ee();
  return Ie(e) > 2 || Ie(Y) > 3 ? "" : " ";
}
function Cn(e, r) {
  for (; --r && ee() && !(Y < 48 || Y > 102 || Y > 57 && Y < 65 || Y > 70 && Y < 97); )
    ;
  return je(e, qe() + (r < 6 && ce() == 32 && ee() == 32));
}
function Ar(e) {
  for (; ee(); )
    switch (Y) {
      case e:
        return Z;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ar(Y);
        break;
      case 40:
        e === 41 && Ar(e);
        break;
      case 92:
        ee();
        break;
    }
  return Z;
}
function Pn(e, r) {
  for (; ee() && e + Y !== 57; )
    if (e + Y === 84 && ce() === 47)
      break;
  return "/*" + je(r, Z - 1) + "*" + Qe(e === 47 ? e : ee());
}
function An(e) {
  for (; !Ie(ce()); )
    ee();
  return je(e, Z);
}
function Rn(e) {
  return kt(Ge("", null, null, null, [""], e = Rt(e), 0, [0], e));
}
function Ge(e, r, t, n, o, i, a, s, l) {
  for (var f = 0, u = 0, p = a, d = 0, b = 0, y = 0, c = 1, x = 1, E = 1, P = 0, _ = "", j = o, h = i, W = n, A = _; x; )
    switch (y = P, P = ee()) {
      case 40:
        if (y != 108 && G(A, p - 1) == 58) {
          Pr(A += I(Ye(P), "&", "&\f"), "&\f") != -1 && (E = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        A += Ye(P);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        A += Tn(y);
        break;
      case 92:
        A += Cn(qe() - 1, 7);
        continue;
      case 47:
        switch (ce()) {
          case 42:
          case 47:
            We(kn(Pn(ee(), qe()), r, t), l);
            break;
          default:
            A += "/";
        }
        break;
      case 123 * c:
        s[f++] = se(A) * E;
      case 125 * c:
      case 59:
      case 0:
        switch (P) {
          case 0:
          case 125:
            x = 0;
          case 59 + u:
            E == -1 && (A = I(A, /\f/g, "")), b > 0 && se(A) - p && We(b > 32 ? Kr(A + ";", n, t, p - 1) : Kr(I(A, " ", "") + ";", n, t, p - 2), l);
            break;
          case 59:
            A += ";";
          default:
            if (We(W = Gr(A, r, t, f, u, o, s, _, j = [], h = [], p), i), P === 123)
              if (u === 0)
                Ge(A, r, W, W, j, i, p, s, h);
              else
                switch (d === 99 && G(A, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ge(e, W, W, n && We(Gr(e, W, W, 0, 0, o, s, _, o, j = [], p), h), o, h, p, s, n ? j : h);
                    break;
                  default:
                    Ge(A, W, W, W, [""], h, 0, s, h);
                }
        }
        f = u = b = 0, c = E = 1, _ = A = "", p = a;
        break;
      case 58:
        p = 1 + se(A), b = y;
      default:
        if (c < 1) {
          if (P == 123)
            --c;
          else if (P == 125 && c++ == 0 && Sn() == 125)
            continue;
        }
        switch (A += Qe(P), P * c) {
          case 38:
            E = u > 0 ? 1 : (A += "\f", -1);
            break;
          case 44:
            s[f++] = (se(A) - 1) * E, E = 1;
            break;
          case 64:
            ce() === 45 && (A += Ye(ee())), d = ce(), u = p = se(_ = A += An(qe())), P++;
            break;
          case 45:
            y === 45 && se(A) == 2 && (c = 0);
        }
    }
  return i;
}
function Gr(e, r, t, n, o, i, a, s, l, f, u) {
  for (var p = o - 1, d = o === 0 ? i : [""], b = Dr(d), y = 0, c = 0, x = 0; y < n; ++y)
    for (var E = 0, P = $e(e, p + 1, p = vn(c = a[y])), _ = e; E < b; ++E)
      (_ = Pt(c > 0 ? d[E] + " " + P : I(P, /&\f/g, d[E]))) && (l[x++] = _);
  return rr(e, r, t, o === 0 ? Ir : s, l, f, u);
}
function kn(e, r, t) {
  return rr(e, r, t, $r, Qe(wn()), $e(e, 2, -2), 0);
}
function Kr(e, r, t, n) {
  return rr(e, r, t, Mr, $e(e, 0, n), $e(e, n + 1, -1), n);
}
function _e(e, r) {
  for (var t = "", n = Dr(e), o = 0; o < n; o++)
    t += r(e[o], o, e, r) || "";
  return t;
}
function Nn(e, r, t, n) {
  switch (e.type) {
    case bn:
      if (e.children.length)
        break;
    case gn:
    case Mr:
      return e.return = e.return || e.value;
    case $r:
      return "";
    case Ct:
      return e.return = e.value + "{" + _e(e.children, n) + "}";
    case Ir:
      e.value = e.props.join(",");
  }
  return se(t = _e(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function $n(e) {
  var r = Dr(e);
  return function(t, n, o, i) {
    for (var a = "", s = 0; s < r; s++)
      a += e[s](t, n, o, i) || "";
    return a;
  };
}
function In(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
var Mn = function(r, t, n) {
  for (var o = 0, i = 0; o = i, i = ce(), o === 38 && i === 12 && (t[n] = 1), !Ie(i); )
    ee();
  return je(r, Z);
}, Dn = function(r, t) {
  var n = -1, o = 44;
  do
    switch (Ie(o)) {
      case 0:
        o === 38 && ce() === 12 && (t[n] = 1), r[n] += Mn(Z - 1, t, n);
        break;
      case 2:
        r[n] += Ye(o);
        break;
      case 4:
        if (o === 44) {
          r[++n] = ce() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += Qe(o);
    }
  while (o = ee());
  return r;
}, jn = function(r, t) {
  return kt(Dn(Rt(r), t));
}, Hr = /* @__PURE__ */ new WeakMap(), Vn = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, o = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !Hr.get(n)) && !o) {
      Hr.set(r, !0);
      for (var i = [], a = jn(t, i), s = n.props, l = 0, f = 0; l < a.length; l++)
        for (var u = 0; u < s.length; u++, f++)
          r.props[f] = i[l] ? a[l].replace(/&\f/g, s[u]) : s[u] + " " + a[l];
    }
  }
}, zn = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
}, Ln = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", Un = function(r) {
  return r.type === "comm" && r.children.indexOf(Ln) > -1;
}, Bn = function(r) {
  return function(t, n, o) {
    if (!(t.type !== "rule" || r.compat)) {
      var i = t.value.match(/(:first|:nth|:nth-last)-child/g);
      if (i) {
        for (var a = !!t.parent, s = a ? t.parent.children : (
          // global rule at the root level
          o
        ), l = s.length - 1; l >= 0; l--) {
          var f = s[l];
          if (f.line < t.line)
            break;
          if (f.column < t.column) {
            if (Un(f))
              return;
            break;
          }
        }
        i.forEach(function(u) {
          console.error('The pseudo class "' + u + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + u.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, Nt = function(r) {
  return r.type.charCodeAt(1) === 105 && r.type.charCodeAt(0) === 64;
}, Wn = function(r, t) {
  for (var n = r - 1; n >= 0; n--)
    if (!Nt(t[n]))
      return !0;
  return !1;
}, Xr = function(r) {
  r.type = "", r.value = "", r.return = "", r.children = "", r.props = "";
}, Fn = function(r, t, n) {
  Nt(r) && (r.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Xr(r)) : Wn(t, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Xr(r)));
};
function $t(e, r) {
  switch (En(e, r)) {
    case 5103:
      return $ + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return $ + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return $ + e + Ke + e + H + e + e;
    case 6828:
    case 4268:
      return $ + e + H + e + e;
    case 6165:
      return $ + e + H + "flex-" + e + e;
    case 5187:
      return $ + e + I(e, /(\w+).+(:[^]+)/, $ + "box-$1$2" + H + "flex-$1$2") + e;
    case 5443:
      return $ + e + H + "flex-item-" + I(e, /flex-|-self/, "") + e;
    case 4675:
      return $ + e + H + "flex-line-pack" + I(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return $ + e + H + I(e, "shrink", "negative") + e;
    case 5292:
      return $ + e + H + I(e, "basis", "preferred-size") + e;
    case 6060:
      return $ + "box-" + I(e, "-grow", "") + $ + e + H + I(e, "grow", "positive") + e;
    case 4554:
      return $ + I(e, /([^-])(transform)/g, "$1" + $ + "$2") + e;
    case 6187:
      return I(I(I(e, /(zoom-|grab)/, $ + "$1"), /(image-set)/, $ + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return I(e, /(image-set\([^]*)/, $ + "$1$`$1");
    case 4968:
      return I(I(e, /(.+:)(flex-)?(.*)/, $ + "box-pack:$3" + H + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + $ + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return I(e, /(.+)-inline(.+)/, $ + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (se(e) - 1 - r > 6)
        switch (G(e, r + 1)) {
          case 109:
            if (G(e, r + 4) !== 45)
              break;
          case 102:
            return I(e, /(.+:)(.+)-([^]+)/, "$1" + $ + "$2-$3$1" + Ke + (G(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Pr(e, "stretch") ? $t(I(e, "stretch", "fill-available"), r) + e : e;
        }
      break;
    case 4949:
      if (G(e, r + 1) !== 115)
        break;
    case 6444:
      switch (G(e, se(e) - 3 - (~Pr(e, "!important") && 10))) {
        case 107:
          return I(e, ":", ":" + $) + e;
        case 101:
          return I(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + $ + (G(e, 14) === 45 ? "inline-" : "") + "box$3$1" + $ + "$2$3$1" + H + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (G(e, r + 11)) {
        case 114:
          return $ + e + H + I(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return $ + e + H + I(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return $ + e + H + I(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return $ + e + H + e + e;
  }
  return e;
}
var qn = function(r, t, n, o) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case Mr:
        r.return = $t(r.value, r.length);
        break;
      case Ct:
        return _e([Ae(r, {
          value: I(r.value, "@", "@" + $)
        })], o);
      case Ir:
        if (r.length)
          return _n(r.props, function(i) {
            switch (On(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return _e([Ae(r, {
                  props: [I(i, /:(read-\w+)/, ":" + Ke + "$1")]
                })], o);
              case "::placeholder":
                return _e([Ae(r, {
                  props: [I(i, /:(plac\w+)/, ":" + $ + "input-$1")]
                }), Ae(r, {
                  props: [I(i, /:(plac\w+)/, ":" + Ke + "$1")]
                }), Ae(r, {
                  props: [I(i, /:(plac\w+)/, H + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, Yn = [qn], Gn = function(r) {
  var t = r.key;
  if (process.env.NODE_ENV !== "production" && !t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(c) {
      var x = c.getAttribute("data-emotion");
      x.indexOf(" ") !== -1 && (document.head.appendChild(c), c.setAttribute("data-s", ""));
    });
  }
  var o = r.stylisPlugins || Yn;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var i = {}, a, s = [];
  a = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(c) {
      for (var x = c.getAttribute("data-emotion").split(" "), E = 1; E < x.length; E++)
        i[x[E]] = !0;
      s.push(c);
    }
  );
  var l, f = [Vn, zn];
  process.env.NODE_ENV !== "production" && f.push(Bn({
    get compat() {
      return y.compat;
    }
  }), Fn);
  {
    var u, p = [Nn, process.env.NODE_ENV !== "production" ? function(c) {
      c.root || (c.return ? u.insert(c.return) : c.value && c.type !== $r && u.insert(c.value + "{}"));
    } : In(function(c) {
      u.insert(c);
    })], d = $n(f.concat(o, p)), b = function(x) {
      return _e(Rn(x), d);
    };
    l = function(x, E, P, _) {
      u = P, process.env.NODE_ENV !== "production" && E.map !== void 0 && (u = {
        insert: function(h) {
          P.insert(h + E.map);
        }
      }), b(x ? x + "{" + E.styles + "}" : E.styles), _ && (y.inserted[E.name] = !0);
    };
  }
  var y = {
    key: t,
    sheet: new yn({
      key: t,
      container: a,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: i,
    registered: {},
    insert: l
  };
  return y.sheet.hydrate(s), y;
};
function Kn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function It(e) {
  if (e.__esModule)
    return e;
  var r = e.default;
  if (typeof r == "function") {
    var t = function n() {
      return this instanceof n ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    t.prototype = r.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(t, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), t;
}
var Hn = !0;
function Mt(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(o) {
    e[o] !== void 0 ? r.push(e[o] + ";") : n += o + " ";
  }), n;
}
var jr = function(r, t, n) {
  var o = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Hn === !1) && r.registered[o] === void 0 && (r.registered[o] = t.styles);
}, Dt = function(r, t, n) {
  jr(r, t, n);
  var o = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var i = t;
    do
      r.insert(t === i ? "." + o : "", i, r.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Xn(e) {
  for (var r = 0, t, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var Jn = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Jr = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Zn = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Qn = /[A-Z]|^ms/g, jt = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Vr = function(r) {
  return r.charCodeAt(1) === 45;
}, Zr = function(r) {
  return r != null && typeof r != "boolean";
}, br = /* @__PURE__ */ Tt(function(e) {
  return Vr(e) ? e : e.replace(Qn, "-$&").toLowerCase();
}), He = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(jt, function(n, o, i) {
          return oe = {
            name: o,
            styles: i,
            next: oe
          }, o;
        });
  }
  return Jn[r] !== 1 && !Vr(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
if (process.env.NODE_ENV !== "production") {
  var eo = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, ro = ["normal", "none", "initial", "inherit", "unset"], to = He, no = /^-ms-/, oo = /-(.)/g, Qr = {};
  He = function(r, t) {
    if (r === "content" && (typeof t != "string" || ro.indexOf(t) === -1 && !eo.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
    var n = to(r, t);
    return n !== "" && !Vr(r) && r.indexOf("-") !== -1 && Qr[r] === void 0 && (Qr[r] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + r.replace(no, "ms-").replace(oo, function(o, i) {
      return i.toUpperCase();
    }) + "?")), n;
  };
}
var Vt = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Me(e, r, t) {
  if (t == null)
    return "";
  if (t.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && t.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(Vt);
    return t;
  }
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return oe = {
          name: t.name,
          styles: t.styles,
          next: oe
        }, t.name;
      if (t.styles !== void 0) {
        var n = t.next;
        if (n !== void 0)
          for (; n !== void 0; )
            oe = {
              name: n.name,
              styles: n.styles,
              next: oe
            }, n = n.next;
        var o = t.styles + ";";
        return process.env.NODE_ENV !== "production" && t.map !== void 0 && (o += t.map), o;
      }
      return io(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var i = oe, a = t(e);
        return oe = i, Me(e, r, a);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var s = [], l = t.replace(jt, function(u, p, d) {
          var b = "animation" + s.length;
          return s.push("const " + b + " = keyframes`" + d.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + b + "}";
        });
        s.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(s, ["`" + l + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + l + "`"));
      }
      break;
  }
  if (r == null)
    return t;
  var f = r[t];
  return f !== void 0 ? f : t;
}
function io(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      n += Me(e, r, t[o]) + ";";
  else
    for (var i in t) {
      var a = t[i];
      if (typeof a != "object")
        r != null && r[a] !== void 0 ? n += i + "{" + r[a] + "}" : Zr(a) && (n += br(i) + ":" + He(i, a) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(Vt);
        if (Array.isArray(a) && typeof a[0] == "string" && (r == null || r[a[0]] === void 0))
          for (var s = 0; s < a.length; s++)
            Zr(a[s]) && (n += br(i) + ":" + He(i, a[s]) + ";");
        else {
          var l = Me(e, r, a);
          switch (i) {
            case "animation":
            case "animationName": {
              n += br(i) + ":" + l + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && i === "undefined" && console.error(Zn), n += i + "{" + l + "}";
          }
        }
      }
    }
  return n;
}
var et = /label:\s*([^\s;\n{]+)\s*(;|$)/g, zt;
process.env.NODE_ENV !== "production" && (zt = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var oe, Rr = function(r, t, n) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var o = !0, i = "";
  oe = void 0;
  var a = r[0];
  a == null || a.raw === void 0 ? (o = !1, i += Me(n, t, a)) : (process.env.NODE_ENV !== "production" && a[0] === void 0 && console.error(Jr), i += a[0]);
  for (var s = 1; s < r.length; s++)
    i += Me(n, t, r[s]), o && (process.env.NODE_ENV !== "production" && a[s] === void 0 && console.error(Jr), i += a[s]);
  var l;
  process.env.NODE_ENV !== "production" && (i = i.replace(zt, function(d) {
    return l = d, "";
  })), et.lastIndex = 0;
  for (var f = "", u; (u = et.exec(i)) !== null; )
    f += "-" + // $FlowFixMe we know it's not null
    u[1];
  var p = Xn(i) + f;
  return process.env.NODE_ENV !== "production" ? {
    name: p,
    styles: i,
    map: l,
    next: oe,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: p,
    styles: i,
    next: oe
  };
}, ao = function(r) {
  return r();
}, so = K.useInsertionEffect ? K.useInsertionEffect : !1, Lt = so || ao, co = {}.hasOwnProperty, zr = /* @__PURE__ */ K.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Gn({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (zr.displayName = "EmotionCacheContext");
zr.Provider;
var Ut = function(r) {
  return /* @__PURE__ */ un(function(t, n) {
    var o = fn(zr);
    return r(t, o, n);
  });
}, tr = /* @__PURE__ */ K.createContext({});
process.env.NODE_ENV !== "production" && (tr.displayName = "EmotionThemeContext");
var rt = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", tt = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", uo = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return jr(t, n, o), Lt(function() {
    return Dt(t, n, o);
  }), null;
}, fo = /* @__PURE__ */ Ut(function(e, r, t) {
  var n = e.css;
  typeof n == "string" && r.registered[n] !== void 0 && (n = r.registered[n]);
  var o = e[rt], i = [n], a = "";
  typeof e.className == "string" ? a = Mt(r.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var s = Rr(i, void 0, K.useContext(tr));
  if (process.env.NODE_ENV !== "production" && s.name.indexOf("-") === -1) {
    var l = e[tt];
    l && (s = Rr([s, "label:" + l + ";"]));
  }
  a += r.key + "-" + s.name;
  var f = {};
  for (var u in e)
    co.call(e, u) && u !== "css" && u !== rt && (process.env.NODE_ENV === "production" || u !== tt) && (f[u] = e[u]);
  return f.ref = t, f.className = a, /* @__PURE__ */ K.createElement(K.Fragment, null, /* @__PURE__ */ K.createElement(uo, {
    cache: r,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ K.createElement(o, f));
});
process.env.NODE_ENV !== "production" && (fo.displayName = "EmotionCssPropInternal");
var vr = { exports: {} }, nt;
function lo() {
  return nt || (nt = 1, function(e) {
    function r() {
      return e.exports = r = Object.assign ? Object.assign.bind() : function(t) {
        for (var n = 1; n < arguments.length; n++) {
          var o = arguments[n];
          for (var i in o)
            Object.prototype.hasOwnProperty.call(o, i) && (t[i] = o[i]);
        }
        return t;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, r.apply(this, arguments);
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(vr)), vr.exports;
}
lo();
var po = pn, mo = function(r) {
  return r !== "theme";
}, ot = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? po : mo;
}, it = function(r, t, n) {
  var o;
  if (t) {
    var i = t.shouldForwardProp;
    o = r.__emotion_forwardProp && i ? function(a) {
      return r.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = r.__emotion_forwardProp), o;
}, at = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, ho = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return jr(t, n, o), Lt(function() {
    return Dt(t, n, o);
  }), null;
}, yo = function e(r, t) {
  if (process.env.NODE_ENV !== "production" && r === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = r.__emotion_real === r, o = n && r.__emotion_base || r, i, a;
  t !== void 0 && (i = t.label, a = t.target);
  var s = it(r, t, n), l = s || ot(o), f = !l("as");
  return function() {
    var u = arguments, p = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (i !== void 0 && p.push("label:" + i + ";"), u[0] == null || u[0].raw === void 0)
      p.push.apply(p, u);
    else {
      process.env.NODE_ENV !== "production" && u[0][0] === void 0 && console.error(at), p.push(u[0][0]);
      for (var d = u.length, b = 1; b < d; b++)
        process.env.NODE_ENV !== "production" && u[0][b] === void 0 && console.error(at), p.push(u[b], u[0][b]);
    }
    var y = Ut(function(c, x, E) {
      var P = f && c.as || o, _ = "", j = [], h = c;
      if (c.theme == null) {
        h = {};
        for (var W in c)
          h[W] = c[W];
        h.theme = K.useContext(tr);
      }
      typeof c.className == "string" ? _ = Mt(x.registered, j, c.className) : c.className != null && (_ = c.className + " ");
      var A = Rr(p.concat(j), x.registered, h);
      _ += x.key + "-" + A.name, a !== void 0 && (_ += " " + a);
      var Pe = f && s === void 0 ? ot(P) : l, le = {};
      for (var de in c)
        f && de === "as" || // $FlowFixMe
        Pe(de) && (le[de] = c[de]);
      return le.className = _, le.ref = E, /* @__PURE__ */ K.createElement(K.Fragment, null, /* @__PURE__ */ K.createElement(ho, {
        cache: x,
        serialized: A,
        isStringTag: typeof P == "string"
      }), /* @__PURE__ */ K.createElement(P, le));
    });
    return y.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", y.defaultProps = r.defaultProps, y.__emotion_real = y, y.__emotion_base = o, y.__emotion_styles = p, y.__emotion_forwardProp = s, Object.defineProperty(y, "toString", {
      value: function() {
        return a === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), y.withComponent = function(c, x) {
      return e(c, L({}, t, x, {
        shouldForwardProp: it(y, x, !0)
      })).apply(void 0, p);
    }, y;
  };
}, go = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], kr = yo.bind();
go.forEach(function(e) {
  kr[e] = kr(e);
});
var Nr = { exports: {} }, Fe = { exports: {} }, M = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var st;
function bo() {
  if (st)
    return M;
  st = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function _(h) {
    if (typeof h == "object" && h !== null) {
      var W = h.$$typeof;
      switch (W) {
        case r:
          switch (h = h.type, h) {
            case l:
            case f:
            case n:
            case i:
            case o:
            case p:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case s:
                case u:
                case y:
                case b:
                case a:
                  return h;
                default:
                  return W;
              }
          }
        case t:
          return W;
      }
    }
  }
  function j(h) {
    return _(h) === f;
  }
  return M.AsyncMode = l, M.ConcurrentMode = f, M.ContextConsumer = s, M.ContextProvider = a, M.Element = r, M.ForwardRef = u, M.Fragment = n, M.Lazy = y, M.Memo = b, M.Portal = t, M.Profiler = i, M.StrictMode = o, M.Suspense = p, M.isAsyncMode = function(h) {
    return j(h) || _(h) === l;
  }, M.isConcurrentMode = j, M.isContextConsumer = function(h) {
    return _(h) === s;
  }, M.isContextProvider = function(h) {
    return _(h) === a;
  }, M.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === r;
  }, M.isForwardRef = function(h) {
    return _(h) === u;
  }, M.isFragment = function(h) {
    return _(h) === n;
  }, M.isLazy = function(h) {
    return _(h) === y;
  }, M.isMemo = function(h) {
    return _(h) === b;
  }, M.isPortal = function(h) {
    return _(h) === t;
  }, M.isProfiler = function(h) {
    return _(h) === i;
  }, M.isStrictMode = function(h) {
    return _(h) === o;
  }, M.isSuspense = function(h) {
    return _(h) === p;
  }, M.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === f || h === i || h === o || h === p || h === d || typeof h == "object" && h !== null && (h.$$typeof === y || h.$$typeof === b || h.$$typeof === a || h.$$typeof === s || h.$$typeof === u || h.$$typeof === x || h.$$typeof === E || h.$$typeof === P || h.$$typeof === c);
  }, M.typeOf = _, M;
}
var D = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ct;
function vo() {
  return ct || (ct = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function _(g) {
      return typeof g == "string" || typeof g == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      g === n || g === f || g === i || g === o || g === p || g === d || typeof g == "object" && g !== null && (g.$$typeof === y || g.$$typeof === b || g.$$typeof === a || g.$$typeof === s || g.$$typeof === u || g.$$typeof === x || g.$$typeof === E || g.$$typeof === P || g.$$typeof === c);
    }
    function j(g) {
      if (typeof g == "object" && g !== null) {
        var ae = g.$$typeof;
        switch (ae) {
          case r:
            var Be = g.type;
            switch (Be) {
              case l:
              case f:
              case n:
              case i:
              case o:
              case p:
                return Be;
              default:
                var Yr = Be && Be.$$typeof;
                switch (Yr) {
                  case s:
                  case u:
                  case y:
                  case b:
                  case a:
                    return Yr;
                  default:
                    return ae;
                }
            }
          case t:
            return ae;
        }
      }
    }
    var h = l, W = f, A = s, Pe = a, le = r, de = u, Le = n, mr = y, hr = b, ge = t, yr = i, ie = o, he = p, Ue = !1;
    function gr(g) {
      return Ue || (Ue = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), m(g) || j(g) === l;
    }
    function m(g) {
      return j(g) === f;
    }
    function v(g) {
      return j(g) === s;
    }
    function C(g) {
      return j(g) === a;
    }
    function S(g) {
      return typeof g == "object" && g !== null && g.$$typeof === r;
    }
    function O(g) {
      return j(g) === u;
    }
    function R(g) {
      return j(g) === n;
    }
    function w(g) {
      return j(g) === y;
    }
    function T(g) {
      return j(g) === b;
    }
    function k(g) {
      return j(g) === t;
    }
    function V(g) {
      return j(g) === i;
    }
    function N(g) {
      return j(g) === o;
    }
    function J(g) {
      return j(g) === p;
    }
    D.AsyncMode = h, D.ConcurrentMode = W, D.ContextConsumer = A, D.ContextProvider = Pe, D.Element = le, D.ForwardRef = de, D.Fragment = Le, D.Lazy = mr, D.Memo = hr, D.Portal = ge, D.Profiler = yr, D.StrictMode = ie, D.Suspense = he, D.isAsyncMode = gr, D.isConcurrentMode = m, D.isContextConsumer = v, D.isContextProvider = C, D.isElement = S, D.isForwardRef = O, D.isFragment = R, D.isLazy = w, D.isMemo = T, D.isPortal = k, D.isProfiler = V, D.isStrictMode = N, D.isSuspense = J, D.isValidElementType = _, D.typeOf = j;
  }()), D;
}
var ut;
function Bt() {
  return ut || (ut = 1, process.env.NODE_ENV === "production" ? Fe.exports = bo() : Fe.exports = vo()), Fe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var xr, ft;
function xo() {
  if (ft)
    return xr;
  ft = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, s = 0; s < 10; s++)
        a["_" + String.fromCharCode(s)] = s;
      var l = Object.getOwnPropertyNames(a).map(function(u) {
        return a[u];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        f[u] = u;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return xr = o() ? Object.assign : function(i, a) {
    for (var s, l = n(i), f, u = 1; u < arguments.length; u++) {
      s = Object(arguments[u]);
      for (var p in s)
        r.call(s, p) && (l[p] = s[p]);
      if (e) {
        f = e(s);
        for (var d = 0; d < f.length; d++)
          t.call(s, f[d]) && (l[f[d]] = s[f[d]]);
      }
    }
    return l;
  }, xr;
}
var Er, lt;
function Lr() {
  if (lt)
    return Er;
  lt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Er = e, Er;
}
var Or, dt;
function Wt() {
  return dt || (dt = 1, Or = Function.call.bind(Object.prototype.hasOwnProperty)), Or;
}
var _r, pt;
function Eo() {
  if (pt)
    return _r;
  pt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = Lr(), t = {}, n = Wt();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, s, l, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in i)
        if (n(i, u)) {
          var p;
          try {
            if (typeof i[u] != "function") {
              var d = Error(
                (l || "React class") + ": " + s + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            p = i[u](a, u, l, s, null, r);
          } catch (y) {
            p = y;
          }
          if (p && !(p instanceof Error) && e(
            (l || "React class") + ": type specification of " + s + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in t)) {
            t[p.message] = !0;
            var b = f ? f() : "";
            e(
              "Failed " + s + " type: " + p.message + (b ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, _r = o, _r;
}
var wr, mt;
function Oo() {
  if (mt)
    return wr;
  mt = 1;
  var e = Bt(), r = xo(), t = Lr(), n = Wt(), o = Eo(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var l = "Warning: " + s;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return wr = function(s, l) {
    var f = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function p(m) {
      var v = m && (f && m[f] || m[u]);
      if (typeof v == "function")
        return v;
    }
    var d = "<<anonymous>>", b = {
      array: E("array"),
      bigint: E("bigint"),
      bool: E("boolean"),
      func: E("function"),
      number: E("number"),
      object: E("object"),
      string: E("string"),
      symbol: E("symbol"),
      any: P(),
      arrayOf: _,
      element: j(),
      elementType: h(),
      instanceOf: W,
      node: de(),
      objectOf: Pe,
      oneOf: A,
      oneOfType: le,
      shape: mr,
      exact: hr
    };
    function y(m, v) {
      return m === v ? m !== 0 || 1 / m === 1 / v : m !== m && v !== v;
    }
    function c(m, v) {
      this.message = m, this.data = v && typeof v == "object" ? v : {}, this.stack = "";
    }
    c.prototype = Error.prototype;
    function x(m) {
      if (process.env.NODE_ENV !== "production")
        var v = {}, C = 0;
      function S(R, w, T, k, V, N, J) {
        if (k = k || d, N = N || T, J !== t) {
          if (l) {
            var g = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw g.name = "Invariant Violation", g;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ae = k + ":" + T;
            !v[ae] && // Avoid spamming the console because they are often not actionable except for lib authors
            C < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + N + "` prop on `" + k + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), v[ae] = !0, C++);
          }
        }
        return w[T] == null ? R ? w[T] === null ? new c("The " + V + " `" + N + "` is marked as required " + ("in `" + k + "`, but its value is `null`.")) : new c("The " + V + " `" + N + "` is marked as required in " + ("`" + k + "`, but its value is `undefined`.")) : null : m(w, T, k, V, N);
      }
      var O = S.bind(null, !1);
      return O.isRequired = S.bind(null, !0), O;
    }
    function E(m) {
      function v(C, S, O, R, w, T) {
        var k = C[S], V = ie(k);
        if (V !== m) {
          var N = he(k);
          return new c(
            "Invalid " + R + " `" + w + "` of type " + ("`" + N + "` supplied to `" + O + "`, expected ") + ("`" + m + "`."),
            { expectedType: m }
          );
        }
        return null;
      }
      return x(v);
    }
    function P() {
      return x(a);
    }
    function _(m) {
      function v(C, S, O, R, w) {
        if (typeof m != "function")
          return new c("Property `" + w + "` of component `" + O + "` has invalid PropType notation inside arrayOf.");
        var T = C[S];
        if (!Array.isArray(T)) {
          var k = ie(T);
          return new c("Invalid " + R + " `" + w + "` of type " + ("`" + k + "` supplied to `" + O + "`, expected an array."));
        }
        for (var V = 0; V < T.length; V++) {
          var N = m(T, V, O, R, w + "[" + V + "]", t);
          if (N instanceof Error)
            return N;
        }
        return null;
      }
      return x(v);
    }
    function j() {
      function m(v, C, S, O, R) {
        var w = v[C];
        if (!s(w)) {
          var T = ie(w);
          return new c("Invalid " + O + " `" + R + "` of type " + ("`" + T + "` supplied to `" + S + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(m);
    }
    function h() {
      function m(v, C, S, O, R) {
        var w = v[C];
        if (!e.isValidElementType(w)) {
          var T = ie(w);
          return new c("Invalid " + O + " `" + R + "` of type " + ("`" + T + "` supplied to `" + S + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(m);
    }
    function W(m) {
      function v(C, S, O, R, w) {
        if (!(C[S] instanceof m)) {
          var T = m.name || d, k = gr(C[S]);
          return new c("Invalid " + R + " `" + w + "` of type " + ("`" + k + "` supplied to `" + O + "`, expected ") + ("instance of `" + T + "`."));
        }
        return null;
      }
      return x(v);
    }
    function A(m) {
      if (!Array.isArray(m))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function v(C, S, O, R, w) {
        for (var T = C[S], k = 0; k < m.length; k++)
          if (y(T, m[k]))
            return null;
        var V = JSON.stringify(m, function(J, g) {
          var ae = he(g);
          return ae === "symbol" ? String(g) : g;
        });
        return new c("Invalid " + R + " `" + w + "` of value `" + String(T) + "` " + ("supplied to `" + O + "`, expected one of " + V + "."));
      }
      return x(v);
    }
    function Pe(m) {
      function v(C, S, O, R, w) {
        if (typeof m != "function")
          return new c("Property `" + w + "` of component `" + O + "` has invalid PropType notation inside objectOf.");
        var T = C[S], k = ie(T);
        if (k !== "object")
          return new c("Invalid " + R + " `" + w + "` of type " + ("`" + k + "` supplied to `" + O + "`, expected an object."));
        for (var V in T)
          if (n(T, V)) {
            var N = m(T, V, O, R, w + "." + V, t);
            if (N instanceof Error)
              return N;
          }
        return null;
      }
      return x(v);
    }
    function le(m) {
      if (!Array.isArray(m))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var v = 0; v < m.length; v++) {
        var C = m[v];
        if (typeof C != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Ue(C) + " at index " + v + "."
          ), a;
      }
      function S(O, R, w, T, k) {
        for (var V = [], N = 0; N < m.length; N++) {
          var J = m[N], g = J(O, R, w, T, k, t);
          if (g == null)
            return null;
          g.data && n(g.data, "expectedType") && V.push(g.data.expectedType);
        }
        var ae = V.length > 0 ? ", expected one of type [" + V.join(", ") + "]" : "";
        return new c("Invalid " + T + " `" + k + "` supplied to " + ("`" + w + "`" + ae + "."));
      }
      return x(S);
    }
    function de() {
      function m(v, C, S, O, R) {
        return ge(v[C]) ? null : new c("Invalid " + O + " `" + R + "` supplied to " + ("`" + S + "`, expected a ReactNode."));
      }
      return x(m);
    }
    function Le(m, v, C, S, O) {
      return new c(
        (m || "React class") + ": " + v + " type `" + C + "." + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + O + "`."
      );
    }
    function mr(m) {
      function v(C, S, O, R, w) {
        var T = C[S], k = ie(T);
        if (k !== "object")
          return new c("Invalid " + R + " `" + w + "` of type `" + k + "` " + ("supplied to `" + O + "`, expected `object`."));
        for (var V in m) {
          var N = m[V];
          if (typeof N != "function")
            return Le(O, R, w, V, he(N));
          var J = N(T, V, O, R, w + "." + V, t);
          if (J)
            return J;
        }
        return null;
      }
      return x(v);
    }
    function hr(m) {
      function v(C, S, O, R, w) {
        var T = C[S], k = ie(T);
        if (k !== "object")
          return new c("Invalid " + R + " `" + w + "` of type `" + k + "` " + ("supplied to `" + O + "`, expected `object`."));
        var V = r({}, C[S], m);
        for (var N in V) {
          var J = m[N];
          if (n(m, N) && typeof J != "function")
            return Le(O, R, w, N, he(J));
          if (!J)
            return new c(
              "Invalid " + R + " `" + w + "` key `" + N + "` supplied to `" + O + "`.\nBad object: " + JSON.stringify(C[S], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(m), null, "  ")
            );
          var g = J(T, N, O, R, w + "." + N, t);
          if (g)
            return g;
        }
        return null;
      }
      return x(v);
    }
    function ge(m) {
      switch (typeof m) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !m;
        case "object":
          if (Array.isArray(m))
            return m.every(ge);
          if (m === null || s(m))
            return !0;
          var v = p(m);
          if (v) {
            var C = v.call(m), S;
            if (v !== m.entries) {
              for (; !(S = C.next()).done; )
                if (!ge(S.value))
                  return !1;
            } else
              for (; !(S = C.next()).done; ) {
                var O = S.value;
                if (O && !ge(O[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function yr(m, v) {
      return m === "symbol" ? !0 : v ? v["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && v instanceof Symbol : !1;
    }
    function ie(m) {
      var v = typeof m;
      return Array.isArray(m) ? "array" : m instanceof RegExp ? "object" : yr(v, m) ? "symbol" : v;
    }
    function he(m) {
      if (typeof m > "u" || m === null)
        return "" + m;
      var v = ie(m);
      if (v === "object") {
        if (m instanceof Date)
          return "date";
        if (m instanceof RegExp)
          return "regexp";
      }
      return v;
    }
    function Ue(m) {
      var v = he(m);
      switch (v) {
        case "array":
        case "object":
          return "an " + v;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + v;
        default:
          return v;
      }
    }
    function gr(m) {
      return !m.constructor || !m.constructor.name ? d : m.constructor.name;
    }
    return b.checkPropTypes = o, b.resetWarningCache = o.resetWarningCache, b.PropTypes = b, b;
  }, wr;
}
var Sr, ht;
function _o() {
  if (ht)
    return Sr;
  ht = 1;
  var e = Lr();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, Sr = function() {
    function n(a, s, l, f, u, p) {
      if (p !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return i.PropTypes = i, i;
  }, Sr;
}
if (process.env.NODE_ENV !== "production") {
  var wo = Bt(), So = !0;
  Nr.exports = Oo()(wo.isElement, So);
} else
  Nr.exports = _o()();
var To = Nr.exports;
const X = /* @__PURE__ */ Kn(To);
/**
 * @mui/styled-engine v5.15.14
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Co(e, r) {
  const t = kr(e, r);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = `"${e}"`;
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), t(...n);
  } : t;
}
function pe(e, r) {
  if (e == null)
    return {};
  var t = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (r.indexOf(n) >= 0)
        continue;
      t[n] = e[n];
    }
  return t;
}
function ye(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const r = Object.getPrototypeOf(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ft(e) {
  if (!ye(e))
    return e;
  const r = {};
  return Object.keys(e).forEach((t) => {
    r[t] = Ft(e[t]);
  }), r;
}
function ue(e, r, t = {
  clone: !0
}) {
  const n = t.clone ? L({}, e) : e;
  return ye(e) && ye(r) && Object.keys(r).forEach((o) => {
    o !== "__proto__" && (ye(r[o]) && o in e && ye(e[o]) ? n[o] = ue(e[o], r[o], t) : t.clone ? n[o] = ye(r[o]) ? Ft(r[o]) : r[o] : n[o] = r[o]);
  }), n;
}
const Po = ["values", "unit", "step"], Ao = (e) => {
  const r = Object.keys(e).map((t) => ({
    key: t,
    val: e[t]
  })) || [];
  return r.sort((t, n) => t.val - n.val), r.reduce((t, n) => L({}, t, {
    [n.key]: n.val
  }), {});
};
function Ro(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: r = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: t = "px",
    step: n = 5
  } = e, o = pe(e, Po), i = Ao(r), a = Object.keys(i);
  function s(d) {
    return `@media (min-width:${typeof r[d] == "number" ? r[d] : d}${t})`;
  }
  function l(d) {
    return `@media (max-width:${(typeof r[d] == "number" ? r[d] : d) - n / 100}${t})`;
  }
  function f(d, b) {
    const y = a.indexOf(b);
    return `@media (min-width:${typeof r[d] == "number" ? r[d] : d}${t}) and (max-width:${(y !== -1 && typeof r[a[y]] == "number" ? r[a[y]] : b) - n / 100}${t})`;
  }
  function u(d) {
    return a.indexOf(d) + 1 < a.length ? f(d, a[a.indexOf(d) + 1]) : s(d);
  }
  function p(d) {
    const b = a.indexOf(d);
    return b === 0 ? s(a[1]) : b === a.length - 1 ? l(a[b]) : f(d, a[a.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return L({
    keys: a,
    values: i,
    up: s,
    down: l,
    between: f,
    only: u,
    not: p,
    unit: t
  }, o);
}
const ko = {
  borderRadius: 4
}, me = process.env.NODE_ENV !== "production" ? X.oneOfType([X.number, X.string, X.object, X.array]) : {};
function ke(e, r) {
  return r ? ue(e, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Ur = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, yt = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Ur[e]}px)`
};
function fe(e, r, t) {
  const n = e.theme || {};
  if (Array.isArray(r)) {
    const i = n.breakpoints || yt;
    return r.reduce((a, s, l) => (a[i.up(i.keys[l])] = t(r[l]), a), {});
  }
  if (typeof r == "object") {
    const i = n.breakpoints || yt;
    return Object.keys(r).reduce((a, s) => {
      if (Object.keys(i.values || Ur).indexOf(s) !== -1) {
        const l = i.up(s);
        a[l] = t(r[s], s);
      } else {
        const l = s;
        a[l] = r[l];
      }
      return a;
    }, {});
  }
  return t(r);
}
function No(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function $o(e, r) {
  return e.reduce((t, n) => {
    const o = t[n];
    return (!o || Object.keys(o).length === 0) && delete t[n], t;
  }, r);
}
function qt(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ne(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function nr(e, r, t = !0) {
  if (!r || typeof r != "string")
    return null;
  if (e && e.vars && t) {
    const n = `vars.${r}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return r.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function Xe(e, r, t, n = t) {
  let o;
  return typeof e == "function" ? o = e(t) : Array.isArray(e) ? o = e[t] || n : o = nr(e, t) || n, r && (o = r(o, n, e)), o;
}
function F(e) {
  const {
    prop: r,
    cssProperty: t = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[r] == null)
      return null;
    const s = a[r], l = a.theme, f = nr(l, n) || {};
    return fe(a, s, (p) => {
      let d = Xe(f, o, p);
      return p === d && typeof p == "string" && (d = Xe(f, o, `${r}${p === "default" ? "" : qt(p)}`, p)), t === !1 ? d : {
        [t]: d
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [r]: me
  } : {}, i.filterProps = [r], i;
}
function Io(e) {
  const r = {};
  return (t) => (r[t] === void 0 && (r[t] = e(t)), r[t]);
}
const Mo = {
  m: "margin",
  p: "padding"
}, Do = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, gt = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, jo = Io((e) => {
  if (e.length > 2)
    if (gt[e])
      e = gt[e];
    else
      return [e];
  const [r, t] = e.split(""), n = Mo[r], o = Do[t] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), or = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ir = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Vo = [...or, ...ir];
function Ve(e, r, t, n) {
  var o;
  const i = (o = nr(e, r, !1)) != null ? o : t;
  return typeof i == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${a}.`), i * a) : Array.isArray(i) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > i.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${a} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${r}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${r}\` as a number.`].join(`
`))), i[a]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${r}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Yt(e) {
  return Ve(e, "spacing", 8, "spacing");
}
function ze(e, r) {
  if (typeof r == "string" || r == null)
    return r;
  const t = Math.abs(r), n = e(t);
  return r >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function zo(e, r) {
  return (t) => e.reduce((n, o) => (n[o] = ze(r, t), n), {});
}
function Lo(e, r, t, n) {
  if (r.indexOf(t) === -1)
    return null;
  const o = jo(t), i = zo(o, n), a = e[t];
  return fe(e, a, i);
}
function Gt(e, r) {
  const t = Yt(e.theme);
  return Object.keys(e).map((n) => Lo(e, r, n, t)).reduce(ke, {});
}
function U(e) {
  return Gt(e, or);
}
U.propTypes = process.env.NODE_ENV !== "production" ? or.reduce((e, r) => (e[r] = me, e), {}) : {};
U.filterProps = or;
function B(e) {
  return Gt(e, ir);
}
B.propTypes = process.env.NODE_ENV !== "production" ? ir.reduce((e, r) => (e[r] = me, e), {}) : {};
B.filterProps = ir;
process.env.NODE_ENV !== "production" && Vo.reduce((e, r) => (e[r] = me, e), {});
function Uo(e = 8) {
  if (e.mui)
    return e;
  const r = Yt({
    spacing: e
  }), t = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = r(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return t.mui = !0, t;
}
function ar(...e) {
  const r = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), t = (n) => Object.keys(n).reduce((o, i) => r[i] ? ke(o, r[i](n)) : o, {});
  return t.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, t.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), t;
}
function re(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function ne(e, r) {
  return F({
    prop: e,
    themeKey: "borders",
    transform: r
  });
}
const Bo = ne("border", re), Wo = ne("borderTop", re), Fo = ne("borderRight", re), qo = ne("borderBottom", re), Yo = ne("borderLeft", re), Go = ne("borderColor"), Ko = ne("borderTopColor"), Ho = ne("borderRightColor"), Xo = ne("borderBottomColor"), Jo = ne("borderLeftColor"), Zo = ne("outline", re), Qo = ne("outlineColor"), sr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const r = Ve(e.theme, "shape.borderRadius", 4, "borderRadius"), t = (n) => ({
      borderRadius: ze(r, n)
    });
    return fe(e, e.borderRadius, t);
  }
  return null;
};
sr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: me
} : {};
sr.filterProps = ["borderRadius"];
ar(Bo, Wo, Fo, qo, Yo, Go, Ko, Ho, Xo, Jo, sr, Zo, Qo);
const cr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const r = Ve(e.theme, "spacing", 8, "gap"), t = (n) => ({
      gap: ze(r, n)
    });
    return fe(e, e.gap, t);
  }
  return null;
};
cr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: me
} : {};
cr.filterProps = ["gap"];
const ur = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const r = Ve(e.theme, "spacing", 8, "columnGap"), t = (n) => ({
      columnGap: ze(r, n)
    });
    return fe(e, e.columnGap, t);
  }
  return null;
};
ur.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: me
} : {};
ur.filterProps = ["columnGap"];
const fr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const r = Ve(e.theme, "spacing", 8, "rowGap"), t = (n) => ({
      rowGap: ze(r, n)
    });
    return fe(e, e.rowGap, t);
  }
  return null;
};
fr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: me
} : {};
fr.filterProps = ["rowGap"];
const ei = F({
  prop: "gridColumn"
}), ri = F({
  prop: "gridRow"
}), ti = F({
  prop: "gridAutoFlow"
}), ni = F({
  prop: "gridAutoColumns"
}), oi = F({
  prop: "gridAutoRows"
}), ii = F({
  prop: "gridTemplateColumns"
}), ai = F({
  prop: "gridTemplateRows"
}), si = F({
  prop: "gridTemplateAreas"
}), ci = F({
  prop: "gridArea"
});
ar(cr, ur, fr, ei, ri, ti, ni, oi, ii, ai, si, ci);
function we(e, r) {
  return r === "grey" ? r : e;
}
const ui = F({
  prop: "color",
  themeKey: "palette",
  transform: we
}), fi = F({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: we
}), li = F({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: we
});
ar(ui, fi, li);
function Q(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const di = F({
  prop: "width",
  transform: Q
}), Br = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const r = (t) => {
      var n, o;
      const i = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[t]) || Ur[t];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: Q(t)
      };
    };
    return fe(e, e.maxWidth, r);
  }
  return null;
};
Br.filterProps = ["maxWidth"];
const pi = F({
  prop: "minWidth",
  transform: Q
}), mi = F({
  prop: "height",
  transform: Q
}), hi = F({
  prop: "maxHeight",
  transform: Q
}), yi = F({
  prop: "minHeight",
  transform: Q
});
F({
  prop: "size",
  cssProperty: "width",
  transform: Q
});
F({
  prop: "size",
  cssProperty: "height",
  transform: Q
});
const gi = F({
  prop: "boxSizing"
});
ar(di, Br, pi, mi, hi, yi, gi);
const lr = {
  // borders
  border: {
    themeKey: "borders",
    transform: re
  },
  borderTop: {
    themeKey: "borders",
    transform: re
  },
  borderRight: {
    themeKey: "borders",
    transform: re
  },
  borderBottom: {
    themeKey: "borders",
    transform: re
  },
  borderLeft: {
    themeKey: "borders",
    transform: re
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: re
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: sr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: we
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: we
  },
  backgroundColor: {
    themeKey: "palette",
    transform: we
  },
  // spacing
  p: {
    style: B
  },
  pt: {
    style: B
  },
  pr: {
    style: B
  },
  pb: {
    style: B
  },
  pl: {
    style: B
  },
  px: {
    style: B
  },
  py: {
    style: B
  },
  padding: {
    style: B
  },
  paddingTop: {
    style: B
  },
  paddingRight: {
    style: B
  },
  paddingBottom: {
    style: B
  },
  paddingLeft: {
    style: B
  },
  paddingX: {
    style: B
  },
  paddingY: {
    style: B
  },
  paddingInline: {
    style: B
  },
  paddingInlineStart: {
    style: B
  },
  paddingInlineEnd: {
    style: B
  },
  paddingBlock: {
    style: B
  },
  paddingBlockStart: {
    style: B
  },
  paddingBlockEnd: {
    style: B
  },
  m: {
    style: U
  },
  mt: {
    style: U
  },
  mr: {
    style: U
  },
  mb: {
    style: U
  },
  ml: {
    style: U
  },
  mx: {
    style: U
  },
  my: {
    style: U
  },
  margin: {
    style: U
  },
  marginTop: {
    style: U
  },
  marginRight: {
    style: U
  },
  marginBottom: {
    style: U
  },
  marginLeft: {
    style: U
  },
  marginX: {
    style: U
  },
  marginY: {
    style: U
  },
  marginInline: {
    style: U
  },
  marginInlineStart: {
    style: U
  },
  marginInlineEnd: {
    style: U
  },
  marginBlock: {
    style: U
  },
  marginBlockStart: {
    style: U
  },
  marginBlockEnd: {
    style: U
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: cr
  },
  rowGap: {
    style: fr
  },
  columnGap: {
    style: ur
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Q
  },
  maxWidth: {
    style: Br
  },
  minWidth: {
    transform: Q
  },
  height: {
    transform: Q
  },
  maxHeight: {
    transform: Q
  },
  minHeight: {
    transform: Q
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function bi(...e) {
  const r = e.reduce((n, o) => n.concat(Object.keys(o)), []), t = new Set(r);
  return e.every((n) => t.size === Object.keys(n).length);
}
function vi(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function xi() {
  function e(t, n, o, i) {
    const a = {
      [t]: n,
      theme: o
    }, s = i[t];
    if (!s)
      return {
        [t]: n
      };
    const {
      cssProperty: l = t,
      themeKey: f,
      transform: u,
      style: p
    } = s;
    if (n == null)
      return null;
    if (f === "typography" && n === "inherit")
      return {
        [t]: n
      };
    const d = nr(o, f) || {};
    return p ? p(a) : fe(a, n, (y) => {
      let c = Xe(d, u, y);
      return y === c && typeof y == "string" && (c = Xe(d, u, `${t}${y === "default" ? "" : qt(y)}`, y)), l === !1 ? c : {
        [l]: c
      };
    });
  }
  function r(t) {
    var n;
    const {
      sx: o,
      theme: i = {}
    } = t || {};
    if (!o)
      return null;
    const a = (n = i.unstable_sxConfig) != null ? n : lr;
    function s(l) {
      let f = l;
      if (typeof l == "function")
        f = l(i);
      else if (typeof l != "object")
        return l;
      if (!f)
        return null;
      const u = No(i.breakpoints), p = Object.keys(u);
      let d = u;
      return Object.keys(f).forEach((b) => {
        const y = vi(f[b], i);
        if (y != null)
          if (typeof y == "object")
            if (a[b])
              d = ke(d, e(b, y, i, a));
            else {
              const c = fe({
                theme: i
              }, y, (x) => ({
                [b]: x
              }));
              bi(c, y) ? d[b] = r({
                sx: y,
                theme: i
              }) : d = ke(d, c);
            }
          else
            d = ke(d, e(b, y, i, a));
      }), $o(p, d);
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return r;
}
const dr = xi();
dr.filterProps = ["sx"];
function Ei(e, r) {
  const t = this;
  return t.vars && typeof t.getColorSchemeSelector == "function" ? {
    [t.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: r
  } : t.palette.mode === e ? r : {};
}
const Oi = ["breakpoints", "palette", "spacing", "shape"];
function Kt(e = {}, ...r) {
  const {
    breakpoints: t = {},
    palette: n = {},
    spacing: o,
    shape: i = {}
  } = e, a = pe(e, Oi), s = Ro(t), l = Uo(o);
  let f = ue({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: L({
      mode: "light"
    }, n),
    spacing: l,
    shape: L({}, ko, i)
  }, a);
  return f.applyStyles = Ei, f = r.reduce((u, p) => ue(u, p), f), f.unstable_sxConfig = L({}, lr, a == null ? void 0 : a.unstable_sxConfig), f.unstable_sx = function(p) {
    return dr({
      sx: p,
      theme: this
    });
  }, f;
}
function _i(e) {
  return Object.keys(e).length === 0;
}
function wi(e = null) {
  const r = K.useContext(tr);
  return !r || _i(r) ? e : r;
}
const Si = Kt();
function Ht(e = Si) {
  return wi(e);
}
const Ti = ["sx"], Ci = (e) => {
  var r, t;
  const n = {
    systemProps: {},
    otherProps: {}
  }, o = (r = e == null || (t = e.theme) == null ? void 0 : t.unstable_sxConfig) != null ? r : lr;
  return Object.keys(e).forEach((i) => {
    o[i] ? n.systemProps[i] = e[i] : n.otherProps[i] = e[i];
  }), n;
};
function Pi(e) {
  const {
    sx: r
  } = e, t = pe(e, Ti), {
    systemProps: n,
    otherProps: o
  } = Ci(t);
  let i;
  return Array.isArray(r) ? i = [n, ...r] : typeof r == "function" ? i = (...a) => {
    const s = r(...a);
    return ye(s) ? L({}, n, s) : n;
  } : i = L({}, n, r), L({}, o, {
    sx: i
  });
}
const bt = (e) => e, Ai = () => {
  let e = bt;
  return {
    configure(r) {
      e = r;
    },
    generate(r) {
      return e(r);
    },
    reset() {
      e = bt;
    }
  };
}, Xt = Ai();
function Jt(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (r = 0; r < o; r++)
        e[r] && (t = Jt(e[r])) && (n && (n += " "), n += t);
    } else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function Ri() {
  for (var e, r, t = 0, n = "", o = arguments.length; t < o; t++)
    (e = arguments[t]) && (r = Jt(e)) && (n && (n += " "), n += r);
  return n;
}
const ki = ["className", "component"];
function Ni(e = {}) {
  const {
    themeId: r,
    defaultTheme: t,
    defaultClassName: n = "MuiBox-root",
    generateClassName: o
  } = e, i = Co("div", {
    shouldForwardProp: (s) => s !== "theme" && s !== "sx" && s !== "as"
  })(dr);
  return /* @__PURE__ */ K.forwardRef(function(l, f) {
    const u = Ht(t), p = Pi(l), {
      className: d,
      component: b = "div"
    } = p, y = pe(p, ki);
    return /* @__PURE__ */ Ze(i, L({
      as: b,
      ref: f,
      className: Ri(d, o ? o(n) : n),
      theme: r && u[r] || u
    }, y));
  });
}
const $i = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Zt(e, r, t = "Mui") {
  const n = $i[r];
  return n ? `${t}-${n}` : `${Xt.generate(e)}-${r}`;
}
function Ii(e, r, t = "Mui") {
  const n = {};
  return r.forEach((o) => {
    n[o] = Zt(e, o, t);
  }), n;
}
function Mi(e, r = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(e, t));
}
const Di = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mi
}, Symbol.toStringTag, { value: "Module" })), Qt = "$$material";
function ji(e, r) {
  return L({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, r);
}
var q = {}, en = { exports: {} };
(function(e) {
  function r(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }
  e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
})(en);
var Vi = en.exports;
const zi = /* @__PURE__ */ It(ln), Li = /* @__PURE__ */ It(Di);
var rn = Vi;
Object.defineProperty(q, "__esModule", {
  value: !0
});
q.alpha = an;
q.blend = Zi;
q.colorChannel = void 0;
var Ui = q.darken = Fr;
q.decomposeColor = te;
q.emphasize = sn;
var vt = q.getContrastRatio = Gi;
q.getLuminance = Je;
q.hexToRgb = tn;
q.hslToRgb = on;
var Bi = q.lighten = qr;
q.private_safeAlpha = Ki;
q.private_safeColorChannel = void 0;
q.private_safeDarken = Hi;
q.private_safeEmphasize = Ji;
q.private_safeLighten = Xi;
q.recomposeColor = Ce;
q.rgbToHex = Yi;
var xt = rn(zi), Wi = rn(Li);
function Wr(e, r = 0, t = 1) {
  return process.env.NODE_ENV !== "production" && (e < r || e > t) && console.error(`MUI: The value provided ${e} is out of range [${r}, ${t}].`), (0, Wi.default)(e, r, t);
}
function tn(e) {
  e = e.slice(1);
  const r = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let t = e.match(r);
  return t && t[0].length === 1 && (t = t.map((n) => n + n)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Fi(e) {
  const r = e.toString(16);
  return r.length === 1 ? `0${r}` : r;
}
function te(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return te(tn(e));
  const r = e.indexOf("("), t = e.substring(0, r);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(t) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, xt.default)(9, e));
  let n = e.substring(r + 1, e.length - 1), o;
  if (t === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, xt.default)(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: t,
    values: n,
    colorSpace: o
  };
}
const nn = (e) => {
  const r = te(e);
  return r.values.slice(0, 3).map((t, n) => r.type.indexOf("hsl") !== -1 && n !== 0 ? `${t}%` : t).join(" ");
};
q.colorChannel = nn;
const qi = (e, r) => {
  try {
    return nn(e);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
};
q.private_safeColorChannel = qi;
function Ce(e) {
  const {
    type: r,
    colorSpace: t
  } = e;
  let {
    values: n
  } = e;
  return r.indexOf("rgb") !== -1 ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : r.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), r.indexOf("color") !== -1 ? n = `${t} ${n.join(" ")}` : n = `${n.join(", ")}`, `${r}(${n})`;
}
function Yi(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: r
  } = te(e);
  return `#${r.map((t, n) => Fi(n === 3 ? Math.round(255 * t) : t)).join("")}`;
}
function on(e) {
  e = te(e);
  const {
    values: r
  } = e, t = r[0], n = r[1] / 100, o = r[2] / 100, i = n * Math.min(o, 1 - o), a = (f, u = (f + t / 30) % 12) => o - i * Math.max(Math.min(u - 3, 9 - u, 1), -1);
  let s = "rgb";
  const l = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (s += "a", l.push(r[3])), Ce({
    type: s,
    values: l
  });
}
function Je(e) {
  e = te(e);
  let r = e.type === "hsl" || e.type === "hsla" ? te(on(e)).values : e.values;
  return r = r.map((t) => (e.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function Gi(e, r) {
  const t = Je(e), n = Je(r);
  return (Math.max(t, n) + 0.05) / (Math.min(t, n) + 0.05);
}
function an(e, r) {
  return e = te(e), r = Wr(r), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${r}` : e.values[3] = r, Ce(e);
}
function Ki(e, r, t) {
  try {
    return an(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function Fr(e, r) {
  if (e = te(e), r = Wr(r), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - r;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] *= 1 - r;
  return Ce(e);
}
function Hi(e, r, t) {
  try {
    return Fr(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function qr(e, r) {
  if (e = te(e), r = Wr(r), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * r;
  else if (e.type.indexOf("rgb") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (255 - e.values[t]) * r;
  else if (e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (1 - e.values[t]) * r;
  return Ce(e);
}
function Xi(e, r, t) {
  try {
    return qr(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function sn(e, r = 0.15) {
  return Je(e) > 0.5 ? Fr(e, r) : qr(e, r);
}
function Ji(e, r, t) {
  try {
    return sn(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function Zi(e, r, t, n = 1) {
  const o = (l, f) => Math.round((l ** (1 / n) * (1 - t) + f ** (1 / n) * t) ** n), i = te(e), a = te(r), s = [o(i.values[0], a.values[0]), o(i.values[1], a.values[1]), o(i.values[2], a.values[2])];
  return Ce({
    type: "rgb",
    values: s
  });
}
const De = {
  black: "#000",
  white: "#fff"
}, Qi = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, be = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, ve = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, Re = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, xe = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, Ee = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, Oe = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, ea = ["mode", "contrastThreshold", "tonalOffset"], Et = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: De.white,
    default: De.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Tr = {
  text: {
    primary: De.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: De.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function Ot(e, r, t, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[r] || (e.hasOwnProperty(t) ? e[r] = e[t] : r === "light" ? e.light = Bi(e.main, o) : r === "dark" && (e.dark = Ui(e.main, i)));
}
function ra(e = "light") {
  return e === "dark" ? {
    main: xe[200],
    light: xe[50],
    dark: xe[400]
  } : {
    main: xe[700],
    light: xe[400],
    dark: xe[800]
  };
}
function ta(e = "light") {
  return e === "dark" ? {
    main: be[200],
    light: be[50],
    dark: be[400]
  } : {
    main: be[500],
    light: be[300],
    dark: be[700]
  };
}
function na(e = "light") {
  return e === "dark" ? {
    main: ve[500],
    light: ve[300],
    dark: ve[700]
  } : {
    main: ve[700],
    light: ve[400],
    dark: ve[800]
  };
}
function oa(e = "light") {
  return e === "dark" ? {
    main: Ee[400],
    light: Ee[300],
    dark: Ee[700]
  } : {
    main: Ee[700],
    light: Ee[500],
    dark: Ee[900]
  };
}
function ia(e = "light") {
  return e === "dark" ? {
    main: Oe[400],
    light: Oe[300],
    dark: Oe[700]
  } : {
    main: Oe[800],
    light: Oe[500],
    dark: Oe[900]
  };
}
function aa(e = "light") {
  return e === "dark" ? {
    main: Re[400],
    light: Re[300],
    dark: Re[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Re[500],
    dark: Re[900]
  };
}
function sa(e) {
  const {
    mode: r = "light",
    contrastThreshold: t = 3,
    tonalOffset: n = 0.2
  } = e, o = pe(e, ea), i = e.primary || ra(r), a = e.secondary || ta(r), s = e.error || na(r), l = e.info || oa(r), f = e.success || ia(r), u = e.warning || aa(r);
  function p(c) {
    const x = vt(c, Tr.text.primary) >= t ? Tr.text.primary : Et.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const E = vt(c, x);
      E < 3 && console.error([`MUI: The contrast ratio of ${E}:1 for ${x} on ${c}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return x;
  }
  const d = ({
    color: c,
    name: x,
    mainShade: E = 500,
    lightShade: P = 300,
    darkShade: _ = 700
  }) => {
    if (c = L({}, c), !c.main && c[E] && (c.main = c[E]), !c.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${x ? ` (${x})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${E}\` property.` : Ne(11, x ? ` (${x})` : "", E));
    if (typeof c.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${x ? ` (${x})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(c.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Ne(12, x ? ` (${x})` : "", JSON.stringify(c.main)));
    return Ot(c, "light", P, n), Ot(c, "dark", _, n), c.contrastText || (c.contrastText = p(c.main)), c;
  }, b = {
    dark: Tr,
    light: Et
  };
  return process.env.NODE_ENV !== "production" && (b[r] || console.error(`MUI: The palette mode \`${r}\` is not supported.`)), ue(L({
    // A collection of common colors.
    common: L({}, De),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: d({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: d({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: d({
      color: s,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: d({
      color: u,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: d({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: d({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: Qi,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: t,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: d,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, b[r]), o);
}
const ca = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function ua(e) {
  return Math.round(e * 1e5) / 1e5;
}
const _t = {
  textTransform: "uppercase"
}, wt = '"Roboto", "Helvetica", "Arial", sans-serif';
function fa(e, r) {
  const t = typeof r == "function" ? r(e) : r, {
    fontFamily: n = wt,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: f = 16,
    // Apply the CSS properties to all the variants.
    allVariants: u,
    pxToRem: p
  } = t, d = pe(t, ca);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof f != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const b = o / 14, y = p || ((E) => `${E / f * b}rem`), c = (E, P, _, j, h) => L({
    fontFamily: n,
    fontWeight: E,
    fontSize: y(P),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: _
  }, n === wt ? {
    letterSpacing: `${ua(j / P)}em`
  } : {}, h, u), x = {
    h1: c(i, 96, 1.167, -1.5),
    h2: c(i, 60, 1.2, -0.5),
    h3: c(a, 48, 1.167, 0),
    h4: c(a, 34, 1.235, 0.25),
    h5: c(a, 24, 1.334, 0),
    h6: c(s, 20, 1.6, 0.15),
    subtitle1: c(a, 16, 1.75, 0.15),
    subtitle2: c(s, 14, 1.57, 0.1),
    body1: c(a, 16, 1.5, 0.15),
    body2: c(a, 14, 1.43, 0.15),
    button: c(s, 14, 1.75, 0.4, _t),
    caption: c(a, 12, 1.66, 0.4),
    overline: c(a, 12, 2.66, 1, _t),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return ue(L({
    htmlFontSize: f,
    pxToRem: y,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: s,
    fontWeightBold: l
  }, x), d, {
    clone: !1
    // No need to clone deep
  });
}
const la = 0.2, da = 0.14, pa = 0.12;
function z(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${la})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${da})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${pa})`].join(",");
}
const ma = ["none", z(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), z(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), z(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), z(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), z(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), z(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), z(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), z(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), z(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), z(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), z(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), z(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), z(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), z(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), z(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), z(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), z(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), z(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), z(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), z(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), z(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), z(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), z(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), z(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], ha = ["duration", "easing", "delay"], ya = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, ga = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function St(e) {
  return `${Math.round(e)}ms`;
}
function ba(e) {
  if (!e)
    return 0;
  const r = e / 36;
  return Math.round((4 + 15 * r ** 0.25 + r / 5) * 10);
}
function va(e) {
  const r = L({}, ya, e.easing), t = L({}, ga, e.duration);
  return L({
    getAutoHeightDuration: ba,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = t.standard,
        easing: s = r.easeInOut,
        delay: l = 0
      } = i, f = pe(i, ha);
      if (process.env.NODE_ENV !== "production") {
        const u = (d) => typeof d == "string", p = (d) => !isNaN(parseFloat(d));
        !u(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(a) && !u(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), u(s) || console.error('MUI: Argument "easing" must be a string.'), !p(l) && !u(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((u) => `${u} ${typeof a == "string" ? a : St(a)} ${s} ${typeof l == "string" ? l : St(l)}`).join(",");
    }
  }, e, {
    easing: r,
    duration: t
  });
}
const xa = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Ea = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function cn(e = {}, ...r) {
  const {
    mixins: t = {},
    palette: n = {},
    transitions: o = {},
    typography: i = {}
  } = e, a = pe(e, Ea);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Ne(18));
  const s = sa(n), l = Kt(e);
  let f = ue(l, {
    mixins: ji(l.breakpoints, t),
    palette: s,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: ma.slice(),
    typography: fa(s, i),
    transitions: va(o),
    zIndex: L({}, xa)
  });
  if (f = ue(f, a), f = r.reduce((u, p) => ue(u, p), f), process.env.NODE_ENV !== "production") {
    const u = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (d, b) => {
      let y;
      for (y in d) {
        const c = d[y];
        if (u.indexOf(y) !== -1 && Object.keys(c).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const x = Zt("", y);
            console.error([`MUI: The \`${b}\` component increases the CSS specificity of the \`${y}\` internal state.`, "You can not override it like this: ", JSON.stringify(d, null, 2), "", `Instead, you need to use the '&.${x}' syntax:`, JSON.stringify({
              root: {
                [`&.${x}`]: c
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          d[y] = {};
        }
      }
    };
    Object.keys(f.components).forEach((d) => {
      const b = f.components[d].styleOverrides;
      b && d.indexOf("Mui") === 0 && p(b, d);
    });
  }
  return f.unstable_sxConfig = L({}, lr, a == null ? void 0 : a.unstable_sxConfig), f.unstable_sx = function(p) {
    return dr({
      sx: p,
      theme: this
    });
  }, f;
}
const Oa = cn();
function _a() {
  const e = Ht(Oa);
  return process.env.NODE_ENV !== "production" && K.useDebugValue(e), e[Qt] || e;
}
const wa = Ii("MuiBox", ["root"]), Sa = cn(), pr = Ni({
  themeId: Qt,
  defaultTheme: Sa,
  defaultClassName: wa.root,
  generateClassName: Xt.generate
});
process.env.NODE_ENV !== "production" && (pr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: X.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: X.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: X.oneOfType([X.arrayOf(X.oneOfType([X.func, X.object, X.bool])), X.func, X.object])
});
const Cr = 3, Ta = 2;
function Aa({ children: e, sx: r, ...t }) {
  return /* @__PURE__ */ Ze(
    pr,
    {
      component: "section",
      sx: {
        background: (n) => n.palette.background.paper,
        mx: { sm: 0, md: Ta },
        mt: { sm: 0, md: Cr },
        mb: { sm: 0, md: Cr },
        borderRadius: { sm: 0, md: "13px" },
        paddingX: { xs: 2, lg: 5 },
        paddingTop: 3,
        paddingBottom: Cr * 2,
        flexGrow: { xs: 1, md: 0 },
        ...r
      },
      ...t,
      children: e
    }
  );
}
const Ra = ({ title: e, sx: r, ...t }) => {
  const n = _a();
  return /* @__PURE__ */ Ze(
    pr,
    {
      sx: {
        fontSize: {
          xs: n.typography.fontSize * 1.9,
          md: n.typography.fontSize * 2.3,
          lg: n.typography.fontSize * 2.5
        },
        fontWeight: "900",
        textAlign: "left",
        component: "h2",
        my: 0,
        mt: 1,
        color: n.palette.mode === "dark" ? n.palette.common.white : n.palette.common.black,
        ...r
      },
      ...t,
      children: e
    }
  );
};
function ka({ bgcolor: e, sx: r, children: t, ...n }) {
  return /* @__PURE__ */ Ze(
    pr,
    {
      bgcolor: e || ((o) => o.palette.mode === "dark" ? "#353535" : "#F8F7F7"),
      boxShadow: "0.3px 0.8px 1.1px 0px rgba(187, 187, 187, 0.11), 0.5px 1.3px 1.8px -0.6px rgba(187, 187, 187, 0.18), 1.1px 2.7px 3.8px -1.2px rgba(187, 187, 187, 0.26)",
      border: "0.5px solid rgba(0, 0, 0, 0.30)",
      sx: r,
      py: { xs: 1, md: 2.5 },
      px: { xs: 2, md: 7 },
      textAlign: "left",
      ...n,
      children: t
    }
  );
}
export {
  Aa as PageLayout,
  ka as PageSection,
  Ra as PageTitle
};
