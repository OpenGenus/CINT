/*
Copyright (C) OPENGENUS / iq.opengenus.org
Authors: Aditya Chatterjee + OpenGenus contributors
License: OPENGENUS license
All rights reserved.
Contact: team@opengenus.org
*/
!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return t(e);
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [],
        r = e.document,
        i = Object.getPrototypeOf,
        o = n.slice,
        s = n.concat,
        a = n.push,
        u = n.indexOf,
        c = {},
        l = c.toString,
        d = c.hasOwnProperty,
        f = d.toString,
        p = f.call(Object),
        h = {},
        m = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType;
        },
        g = function (e) {
            return null != e && e === e.window;
        },
        v = { type: !0, src: !0, noModule: !0 };
    function y(e, t, n) {
        var i,
            o = (t = t || r).createElement("script");
        if (((o.text = e), n)) for (i in v) n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o);
    }
    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[l.call(e)] || "object" : typeof e;
    }
    var w = function (e, t) {
            return new w.fn.init(e, t);
        },
        x = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function C(e) {
        var t = !!e && "length" in e && e.length,
            n = b(e);
        return !m(e) && !g(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
    }
    (w.fn = w.prototype = {
        jquery: "3.3.1",
        constructor: w,
        length: 0,
        toArray: function () {
            return o.call(this);
        },
        get: function (e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return (t.prevObject = this), t;
        },
        each: function (e) {
            return w.each(this, e);
        },
        map: function (e) {
            return this.pushStack(
                w.map(this, function (t, n) {
                    return e.call(t, n, t);
                })
            );
        },
        slice: function () {
            return this.pushStack(o.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: a,
        sort: n.sort,
        splice: n.splice,
    }),
        (w.extend = w.fn.extend = function () {
            var e,
                t,
                n,
                r,
                i,
                o,
                s = arguments[0] || {},
                a = 1,
                u = arguments.length,
                c = !1;
            for ("boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++), "object" == typeof s || m(s) || (s = {}), a === u && ((s = this), a--); a < u; a++)
                if (null != (e = arguments[a]))
                    for (t in e)
                        (n = s[t]),
                            s !== (r = e[t]) &&
                                (c && r && (w.isPlainObject(r) || (i = Array.isArray(r)))
                                    ? (i ? ((i = !1), (o = n && Array.isArray(n) ? n : [])) : (o = n && w.isPlainObject(n) ? n : {}), (s[t] = w.extend(c, o, r)))
                                    : void 0 !== r && (s[t] = r));
            return s;
        }),
        w.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== l.call(e) || ((t = i(e)) && ("function" != typeof (n = d.call(t, "constructor") && t.constructor) || f.call(n) !== p)));
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            globalEval: function (e) {
                y(e);
            },
            each: function (e, t) {
                var n,
                    r = 0;
                if (C(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(x, "");
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n;
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : u.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return (e.length = i), e;
            },
            grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) !t(e[i], i) !== s && r.push(e[i]);
                return r;
            },
            map: function (e, t, n) {
                var r,
                    i,
                    o = 0,
                    a = [];
                if (C(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
                else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                return s.apply([], a);
            },
            guid: 1,
            support: h,
        }),
        "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
        w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            c["[object " + t + "]"] = t.toLowerCase();
        });
    var _ = (function (e) {
        var t,
            n,
            r,
            i,
            o,
            s,
            a,
            u,
            c,
            l,
            d,
            f,
            p,
            h,
            m,
            g,
            v,
            y,
            b,
            w = "sizzle" + 1 * new Date(),
            x = e.document,
            C = 0,
            _ = 0,
            E = se(),
            T = se(),
            k = se(),
            S = function (e, t) {
                return e === t && (d = !0), 0;
            },
            A = {}.hasOwnProperty,
            L = [],
            q = L.pop,
            P = L.push,
            D = L.push,
            I = L.slice,
            j = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1;
            },
            N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            O = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M = "\\[" + O + "*(" + R + ")(?:" + O + "*([*^$|!~]?=)" + O + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + O + "*\\]",
            z = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            B = new RegExp(O + "+", "g"),
            F = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
            $ = new RegExp("^" + O + "*," + O + "*"),
            H = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
            W = new RegExp("=" + O + "*([^\\]'\"]*?)" + O + "*\\]", "g"),
            U = new RegExp(z),
            V = new RegExp("^" + R + "$"),
            Q = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + z),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + N + ")$", "i"),
                needsContext: new RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", "i"),
            },
            X = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            J = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + O + "?|(" + O + ")|.)", "ig"),
            ee = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function (e, t) {
                return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
            },
            re = function () {
                f();
            },
            ie = ye(
                function (e) {
                    return !0 === e.disabled && ("form" in e || "label" in e);
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            D.apply((L = I.call(x.childNodes)), x.childNodes), L[x.childNodes.length].nodeType;
        } catch (e) {
            D = {
                apply: L.length
                    ? function (e, t) {
                          P.apply(e, I.call(t));
                      }
                    : function (e, t) {
                          for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                          e.length = n - 1;
                      },
            };
        }
        function oe(e, t, r, i) {
            var o,
                a,
                c,
                l,
                d,
                h,
                v,
                y = t && t.ownerDocument,
                C = t ? t.nodeType : 9;
            if (((r = r || []), "string" != typeof e || !e || (1 !== C && 9 !== C && 11 !== C))) return r;
            if (!i && ((t ? t.ownerDocument || t : x) !== p && f(t), (t = t || p), m)) {
                if (11 !== C && (d = K.exec(e)))
                    if ((o = d[1])) {
                        if (9 === C) {
                            if (!(c = t.getElementById(o))) return r;
                            if (c.id === o) return r.push(c), r;
                        } else if (y && (c = y.getElementById(o)) && b(t, c) && c.id === o) return r.push(c), r;
                    } else {
                        if (d[2]) return D.apply(r, t.getElementsByTagName(e)), r;
                        if ((o = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return D.apply(r, t.getElementsByClassName(o)), r;
                    }
                if (n.qsa && !k[e + " "] && (!g || !g.test(e))) {
                    if (1 !== C) (y = t), (v = e);
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((l = t.getAttribute("id")) ? (l = l.replace(te, ne)) : t.setAttribute("id", (l = w)), a = (h = s(e)).length; a--; ) h[a] = "#" + l + " " + ve(h[a]);
                        (v = h.join(",")), (y = (J.test(e) && me(t.parentNode)) || t);
                    }
                    if (v)
                        try {
                            return D.apply(r, y.querySelectorAll(v)), r;
                        } catch (e) {
                        } finally {
                            l === w && t.removeAttribute("id");
                        }
                }
            }
            return u(e.replace(F, "$1"), t, r, i);
        }
        function se() {
            var e = [];
            return function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], (t[n + " "] = i);
            };
        }
        function ae(e) {
            return (e[w] = !0), e;
        }
        function ue(e) {
            var t = p.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function ce(e, t) {
            for (var n = e.split("|"), i = n.length; i--; ) r.attrHandle[n[i]] = t;
        }
        function le(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function de(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }
        function fe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function pe(e) {
            return function (t) {
                return "form" in t
                    ? t.parentNode && !1 === t.disabled
                        ? "label" in t
                            ? "label" in t.parentNode
                                ? t.parentNode.disabled === e
                                : t.disabled === e
                            : t.isDisabled === e || (t.isDisabled !== !e && ie(t) === e)
                        : t.disabled === e
                    : "label" in t && t.disabled === e;
            };
        }
        function he(e) {
            return ae(function (t) {
                return (
                    (t = +t),
                    ae(function (n, r) {
                        for (var i, o = e([], n.length, t), s = o.length; s--; ) n[(i = o[s])] && (n[i] = !(r[i] = n[i]));
                    })
                );
            });
        }
        function me(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        for (t in ((n = oe.support = {}),
        (o = oe.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
        }),
        (f = oe.setDocument = function (e) {
            var t,
                i,
                s = e ? e.ownerDocument || e : x;
            return s !== p && 9 === s.nodeType && s.documentElement
                ? ((h = (p = s).documentElement),
                  (m = !o(p)),
                  x !== p && (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)),
                  (n.attributes = ue(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (n.getElementsByTagName = ue(function (e) {
                      return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length;
                  })),
                  (n.getElementsByClassName = Y.test(p.getElementsByClassName)),
                  (n.getById = ue(function (e) {
                      return (h.appendChild(e).id = w), !p.getElementsByName || !p.getElementsByName(w).length;
                  })),
                  n.getById
                      ? ((r.filter.ID = function (e) {
                            var t = e.replace(Z, ee);
                            return function (e) {
                                return e.getAttribute("id") === t;
                            };
                        }),
                        (r.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && m) {
                                var n = t.getElementById(e);
                                return n ? [n] : [];
                            }
                        }))
                      : ((r.filter.ID = function (e) {
                            var t = e.replace(Z, ee);
                            return function (e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t;
                            };
                        }),
                        (r.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && m) {
                                var n,
                                    r,
                                    i,
                                    o = t.getElementById(e);
                                if (o) {
                                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                    for (i = t.getElementsByName(e), r = 0; (o = i[r++]); ) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                }
                                return [];
                            }
                        })),
                  (r.find.TAG = n.getElementsByTagName
                      ? function (e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                        }
                      : function (e, t) {
                            var n,
                                r = [],
                                i = 0,
                                o = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                                return r;
                            }
                            return o;
                        }),
                  (r.find.CLASS =
                      n.getElementsByClassName &&
                      function (e, t) {
                          if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e);
                      }),
                  (v = []),
                  (g = []),
                  (n.qsa = Y.test(p.querySelectorAll)) &&
                      (ue(function (e) {
                          (h.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                              e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + O + "*(?:''|\"\")"),
                              e.querySelectorAll("[selected]").length || g.push("\\[" + O + "*(?:value|" + N + ")"),
                              e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="),
                              e.querySelectorAll(":checked").length || g.push(":checked"),
                              e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]");
                      }),
                      ue(function (e) {
                          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                          var t = p.createElement("input");
                          t.setAttribute("type", "hidden"),
                              e.appendChild(t).setAttribute("name", "D"),
                              e.querySelectorAll("[name=d]").length && g.push("name" + O + "*[*^$|!~]?="),
                              2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"),
                              (h.appendChild(e).disabled = !0),
                              2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                              e.querySelectorAll("*,:x"),
                              g.push(",.*:");
                      })),
                  (n.matchesSelector = Y.test((y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector))) &&
                      ue(function (e) {
                          (n.disconnectedMatch = y.call(e, "*")), y.call(e, "[s!='']:x"), v.push("!=", z);
                      }),
                  (g = g.length && new RegExp(g.join("|"))),
                  (v = v.length && new RegExp(v.join("|"))),
                  (t = Y.test(h.compareDocumentPosition)),
                  (b =
                      t || Y.test(h.contains)
                          ? function (e, t) {
                                var n = 9 === e.nodeType ? e.documentElement : e,
                                    r = t && t.parentNode;
                                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                            }
                          : function (e, t) {
                                if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                return !1;
                            }),
                  (S = t
                      ? function (e, t) {
                            if (e === t) return (d = !0), 0;
                            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return (
                                r ||
                                (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!n.sortDetached && t.compareDocumentPosition(e) === r)
                                    ? e === p || (e.ownerDocument === x && b(x, e))
                                        ? -1
                                        : t === p || (t.ownerDocument === x && b(x, t))
                                        ? 1
                                        : l
                                        ? j(l, e) - j(l, t)
                                        : 0
                                    : 4 & r
                                    ? -1
                                    : 1)
                            );
                        }
                      : function (e, t) {
                            if (e === t) return (d = !0), 0;
                            var n,
                                r = 0,
                                i = e.parentNode,
                                o = t.parentNode,
                                s = [e],
                                a = [t];
                            if (!i || !o) return e === p ? -1 : t === p ? 1 : i ? -1 : o ? 1 : l ? j(l, e) - j(l, t) : 0;
                            if (i === o) return le(e, t);
                            for (n = e; (n = n.parentNode); ) s.unshift(n);
                            for (n = t; (n = n.parentNode); ) a.unshift(n);
                            for (; s[r] === a[r]; ) r++;
                            return r ? le(s[r], a[r]) : s[r] === x ? -1 : a[r] === x ? 1 : 0;
                        }),
                  p)
                : p;
        }),
        (oe.matches = function (e, t) {
            return oe(e, null, null, t);
        }),
        (oe.matchesSelector = function (e, t) {
            if (((e.ownerDocument || e) !== p && f(e), (t = t.replace(W, "='$1']")), n.matchesSelector && m && !k[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))))
                try {
                    var r = y.call(e, t);
                    if (r || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return r;
                } catch (e) {}
            return oe(t, p, null, [e]).length > 0;
        }),
        (oe.contains = function (e, t) {
            return (e.ownerDocument || e) !== p && f(e), b(e, t);
        }),
        (oe.attr = function (e, t) {
            (e.ownerDocument || e) !== p && f(e);
            var i = r.attrHandle[t.toLowerCase()],
                o = i && A.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !m) : void 0;
            return void 0 !== o ? o : n.attributes || !m ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
        }),
        (oe.escape = function (e) {
            return (e + "").replace(te, ne);
        }),
        (oe.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (oe.uniqueSort = function (e) {
            var t,
                r = [],
                i = 0,
                o = 0;
            if (((d = !n.detectDuplicates), (l = !n.sortStable && e.slice(0)), e.sort(S), d)) {
                for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
                for (; i--; ) e.splice(r[i], 1);
            }
            return (l = null), e;
        }),
        (i = oe.getText = function (e) {
            var t,
                n = "",
                r = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
            } else for (; (t = e[r++]); ) n += i(t);
            return n;
        }),
        ((r = oe.selectors = {
            cacheLength: 50,
            createPseudo: ae,
            match: Q,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: {
                ATTR: function (e) {
                    return (e[1] = e[1].replace(Z, ee)), (e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function (e) {
                    return (
                        (e[1] = e[1].toLowerCase()),
                        "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && oe.error(e[0]),
                        e
                    );
                },
                PSEUDO: function (e) {
                    var t,
                        n = !e[6] && e[2];
                    return Q.CHILD.test(e[0])
                        ? null
                        : (e[3] ? (e[2] = e[4] || e[5] || "") : n && U.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                },
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e
                        ? function () {
                              return !0;
                          }
                        : function (e) {
                              return e.nodeName && e.nodeName.toLowerCase() === t;
                          };
                },
                CLASS: function (e) {
                    var t = E[e + " "];
                    return (
                        t ||
                        ((t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) &&
                            E(e, function (e) {
                                return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                            }))
                    );
                },
                ATTR: function (e, t, n) {
                    return function (r) {
                        var i = oe.attr(r, e);
                        return null == i
                            ? "!=" === t
                            : !t ||
                                  ((i += ""),
                                  "=" === t
                                      ? i === n
                                      : "!=" === t
                                      ? i !== n
                                      : "^=" === t
                                      ? n && 0 === i.indexOf(n)
                                      : "*=" === t
                                      ? n && i.indexOf(n) > -1
                                      : "$=" === t
                                      ? n && i.slice(-n.length) === n
                                      : "~=" === t
                                      ? (" " + i.replace(B, " ") + " ").indexOf(n) > -1
                                      : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
                    };
                },
                CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === r && 0 === i
                        ? function (e) {
                              return !!e.parentNode;
                          }
                        : function (t, n, u) {
                              var c,
                                  l,
                                  d,
                                  f,
                                  p,
                                  h,
                                  m = o !== s ? "nextSibling" : "previousSibling",
                                  g = t.parentNode,
                                  v = a && t.nodeName.toLowerCase(),
                                  y = !u && !a,
                                  b = !1;
                              if (g) {
                                  if (o) {
                                      for (; m; ) {
                                          for (f = t; (f = f[m]); ) if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                          h = m = "only" === e && !h && "nextSibling";
                                      }
                                      return !0;
                                  }
                                  if (((h = [s ? g.firstChild : g.lastChild]), s && y)) {
                                      for (
                                          b = (p = (c = (l = (d = (f = g)[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === C && c[1]) && c[2], f = p && g.childNodes[p];
                                          (f = (++p && f && f[m]) || (b = p = 0) || h.pop());

                                      )
                                          if (1 === f.nodeType && ++b && f === t) {
                                              l[e] = [C, p, b];
                                              break;
                                          }
                                  } else if ((y && (b = p = (c = (l = (d = (f = t)[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === C && c[1]), !1 === b))
                                      for (
                                          ;
                                          (f = (++p && f && f[m]) || (b = p = 0) || h.pop()) &&
                                          ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && ((l = (d = f[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [C, b]), f !== t));

                                      );
                                  return (b -= i) === r || (b % r == 0 && b / r >= 0);
                              }
                          };
                },
                PSEUDO: function (e, t) {
                    var n,
                        i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return i[w]
                        ? i(t)
                        : i.length > 1
                        ? ((n = [e, e, "", t]),
                          r.setFilters.hasOwnProperty(e.toLowerCase())
                              ? ae(function (e, n) {
                                    for (var r, o = i(e, t), s = o.length; s--; ) e[(r = j(e, o[s]))] = !(n[r] = o[s]);
                                })
                              : function (e) {
                                    return i(e, 0, n);
                                })
                        : i;
                },
            },
            pseudos: {
                not: ae(function (e) {
                    var t = [],
                        n = [],
                        r = a(e.replace(F, "$1"));
                    return r[w]
                        ? ae(function (e, t, n, i) {
                              for (var o, s = r(e, null, i, []), a = e.length; a--; ) (o = s[a]) && (e[a] = !(t[a] = o));
                          })
                        : function (e, i, o) {
                              return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop();
                          };
                }),
                has: ae(function (e) {
                    return function (t) {
                        return oe(e, t).length > 0;
                    };
                }),
                contains: ae(function (e) {
                    return (
                        (e = e.replace(Z, ee)),
                        function (t) {
                            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
                        }
                    );
                }),
                lang: ae(function (e) {
                    return (
                        V.test(e || "") || oe.error("unsupported lang: " + e),
                        (e = e.replace(Z, ee).toLowerCase()),
                        function (t) {
                            var n;
                            do {
                                if ((n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1;
                        }
                    );
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                },
                root: function (e) {
                    return e === h;
                },
                focus: function (e) {
                    return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: pe(!1),
                disabled: pe(!0),
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function (e) {
                    return !r.pseudos.empty(e);
                },
                header: function (e) {
                    return G.test(e.nodeName);
                },
                input: function (e) {
                    return X.test(e.nodeName);
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && "button" === e.type) || "button" === t;
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: he(function () {
                    return [0];
                }),
                last: he(function (e, t) {
                    return [t - 1];
                }),
                eq: he(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                }),
                even: he(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: he(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                    return e;
                }),
                gt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                }),
            },
        }).pseudos.nth = r.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            r.pseudos[t] = de(t);
        for (t in { submit: !0, reset: !0 }) r.pseudos[t] = fe(t);
        function ge() {}
        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
        }
        function ye(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                s = n && "parentNode" === o,
                a = _++;
            return t.first
                ? function (t, n, i) {
                      for (; (t = t[r]); ) if (1 === t.nodeType || s) return e(t, n, i);
                      return !1;
                  }
                : function (t, n, u) {
                      var c,
                          l,
                          d,
                          f = [C, a];
                      if (u) {
                          for (; (t = t[r]); ) if ((1 === t.nodeType || s) && e(t, n, u)) return !0;
                      } else
                          for (; (t = t[r]); )
                              if (1 === t.nodeType || s)
                                  if (((l = (d = t[w] || (t[w] = {}))[t.uniqueID] || (d[t.uniqueID] = {})), i && i === t.nodeName.toLowerCase())) t = t[r] || t;
                                  else {
                                      if ((c = l[o]) && c[0] === C && c[1] === a) return (f[2] = c[2]);
                                      if (((l[o] = f), (f[2] = e(t, n, u)))) return !0;
                                  }
                      return !1;
                  };
        }
        function be(e) {
            return e.length > 1
                ? function (t, n, r) {
                      for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                      return !0;
                  }
                : e[0];
        }
        function we(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, c = null != t; a < u; a++) (o = e[a]) && ((n && !n(o, r, i)) || (s.push(o), c && t.push(a)));
            return s;
        }
        function xe(e, t, n, r, i, o) {
            return (
                r && !r[w] && (r = xe(r)),
                i && !i[w] && (i = xe(i, o)),
                ae(function (o, s, a, u) {
                    var c,
                        l,
                        d,
                        f = [],
                        p = [],
                        h = s.length,
                        m =
                            o ||
                            (function (e, t, n) {
                                for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
                                return n;
                            })(t || "*", a.nodeType ? [a] : a, []),
                        g = !e || (!o && t) ? m : we(m, f, e, a, u),
                        v = n ? (i || (o ? e : h || r) ? [] : s) : g;
                    if ((n && n(g, v, a, u), r)) for (c = we(v, p), r(c, [], a, u), l = c.length; l--; ) (d = c[l]) && (v[p[l]] = !(g[p[l]] = d));
                    if (o) {
                        if (i || e) {
                            if (i) {
                                for (c = [], l = v.length; l--; ) (d = v[l]) && c.push((g[l] = d));
                                i(null, (v = []), c, u);
                            }
                            for (l = v.length; l--; ) (d = v[l]) && (c = i ? j(o, d) : f[l]) > -1 && (o[c] = !(s[c] = d));
                        }
                    } else (v = we(v === s ? v.splice(h, v.length) : v)), i ? i(null, s, v, u) : D.apply(s, v);
                })
            );
        }
        function Ce(e) {
            for (
                var t,
                    n,
                    i,
                    o = e.length,
                    s = r.relative[e[0].type],
                    a = s || r.relative[" "],
                    u = s ? 1 : 0,
                    l = ye(
                        function (e) {
                            return e === t;
                        },
                        a,
                        !0
                    ),
                    d = ye(
                        function (e) {
                            return j(t, e) > -1;
                        },
                        a,
                        !0
                    ),
                    f = [
                        function (e, n, r) {
                            var i = (!s && (r || n !== c)) || ((t = n).nodeType ? l(e, n, r) : d(e, n, r));
                            return (t = null), i;
                        },
                    ];
                u < o;
                u++
            )
                if ((n = r.relative[e[u].type])) f = [ye(be(f), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[w]) {
                        for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                        return xe(u > 1 && be(f), u > 1 && ve(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(F, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce((e = e.slice(i))), i < o && ve(e));
                    }
                    f.push(n);
                }
            return be(f);
        }
        function _e(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                o = function (o, s, a, u, l) {
                    var d,
                        h,
                        g,
                        v = 0,
                        y = "0",
                        b = o && [],
                        w = [],
                        x = c,
                        _ = o || (i && r.find.TAG("*", l)),
                        E = (C += null == x ? 1 : Math.random() || 0.1),
                        T = _.length;
                    for (l && (c = s === p || s || l); y !== T && null != (d = _[y]); y++) {
                        if (i && d) {
                            for (h = 0, s || d.ownerDocument === p || (f(d), (a = !m)); (g = e[h++]); )
                                if (g(d, s || p, a)) {
                                    u.push(d);
                                    break;
                                }
                            l && (C = E);
                        }
                        n && ((d = !g && d) && v--, o && b.push(d));
                    }
                    if (((v += y), n && y !== v)) {
                        for (h = 0; (g = t[h++]); ) g(b, w, s, a);
                        if (o) {
                            if (v > 0) for (; y--; ) b[y] || w[y] || (w[y] = q.call(u));
                            w = we(w);
                        }
                        D.apply(u, w), l && !o && w.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
                    }
                    return l && ((C = E), (c = x)), b;
                };
            return n ? ae(o) : o;
        }
        return (
            (ge.prototype = r.filters = r.pseudos),
            (r.setFilters = new ge()),
            (s = oe.tokenize = function (e, t) {
                var n,
                    i,
                    o,
                    s,
                    a,
                    u,
                    c,
                    l = T[e + " "];
                if (l) return t ? 0 : l.slice(0);
                for (a = e, u = [], c = r.preFilter; a; ) {
                    for (s in ((n && !(i = $.exec(a))) || (i && (a = a.slice(i[0].length) || a), u.push((o = []))),
                    (n = !1),
                    (i = H.exec(a)) && ((n = i.shift()), o.push({ value: n, type: i[0].replace(F, " ") }), (a = a.slice(n.length))),
                    r.filter))
                        !(i = Q[s].exec(a)) || (c[s] && !(i = c[s](i))) || ((n = i.shift()), o.push({ value: n, type: s, matches: i }), (a = a.slice(n.length)));
                    if (!n) break;
                }
                return t ? a.length : a ? oe.error(e) : T(e, u).slice(0);
            }),
            (a = oe.compile = function (e, t) {
                var n,
                    r = [],
                    i = [],
                    o = k[e + " "];
                if (!o) {
                    for (t || (t = s(e)), n = t.length; n--; ) (o = Ce(t[n]))[w] ? r.push(o) : i.push(o);
                    (o = k(e, _e(i, r))).selector = e;
                }
                return o;
            }),
            (u = oe.select = function (e, t, n, i) {
                var o,
                    u,
                    c,
                    l,
                    d,
                    f = "function" == typeof e && e,
                    p = !i && s((e = f.selector || e));
                if (((n = n || []), 1 === p.length)) {
                    if ((u = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = u[0]).type && 9 === t.nodeType && m && r.relative[u[1].type]) {
                        if (!(t = (r.find.ID(c.matches[0].replace(Z, ee), t) || [])[0])) return n;
                        f && (t = t.parentNode), (e = e.slice(u.shift().value.length));
                    }
                    for (o = Q.needsContext.test(e) ? 0 : u.length; o-- && ((c = u[o]), !r.relative[(l = c.type)]); )
                        if ((d = r.find[l]) && (i = d(c.matches[0].replace(Z, ee), (J.test(u[0].type) && me(t.parentNode)) || t))) {
                            if ((u.splice(o, 1), !(e = i.length && ve(u)))) return D.apply(n, i), n;
                            break;
                        }
                }
                return (f || a(e, p))(i, t, !m, n, !t || (J.test(e) && me(t.parentNode)) || t), n;
            }),
            (n.sortStable = w.split("").sort(S).join("") === w),
            (n.detectDuplicates = !!d),
            f(),
            (n.sortDetached = ue(function (e) {
                return 1 & e.compareDocumentPosition(p.createElement("fieldset"));
            })),
            ue(function (e) {
                return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
            }) ||
                ce("type|href|height|width", function (e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                }),
            (n.attributes &&
                ue(function (e) {
                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                })) ||
                ce("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                }),
            ue(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
                ce(N, function (e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                }),
            oe
        );
    })(e);
    (w.find = _), (w.expr = _.selectors), (w.expr[":"] = w.expr.pseudos), (w.uniqueSort = w.unique = _.uniqueSort), (w.text = _.getText), (w.isXMLDoc = _.isXML), (w.contains = _.contains), (w.escapeSelector = _.escape);
    var E = function (e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (i && w(e).is(n)) break;
                    r.push(e);
                }
            return r;
        },
        T = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
        k = w.expr.match.needsContext;
    function S(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function L(e, t, n) {
        return m(t)
            ? w.grep(e, function (e, r) {
                  return !!t.call(e, r, e) !== n;
              })
            : t.nodeType
            ? w.grep(e, function (e) {
                  return (e === t) !== n;
              })
            : "string" != typeof t
            ? w.grep(e, function (e) {
                  return u.call(t, e) > -1 !== n;
              })
            : w.filter(t, e, n);
    }
    (w.filter = function (e, t, n) {
        var r = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
                ? w.find.matchesSelector(r, e)
                    ? [r]
                    : []
                : w.find.matches(
                      e,
                      w.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        w.fn.extend({
            find: function (e) {
                var t,
                    n,
                    r = this.length,
                    i = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        w(e).filter(function () {
                            for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
                return r > 1 ? w.uniqueSort(n) : n;
            },
            filter: function (e) {
                return this.pushStack(L(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(L(this, e || [], !0));
            },
            is: function (e) {
                return !!L(this, "string" == typeof e && k.test(e) ? w(e) : e || [], !1).length;
            },
        });
    var q,
        P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((w.fn.init = function (e, t, n) {
        var i, o;
        if (!e) return this;
        if (((n = n || q), "string" == typeof e)) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : P.exec(e)) || (!i[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (((t = t instanceof w ? t[0] : t), w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t))) for (i in t) m(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
            }
            return (o = r.getElementById(i[2])) && ((this[0] = o), (this.length = 1)), this;
        }
        return e.nodeType ? ((this[0] = e), (this.length = 1), this) : m(e) ? (void 0 !== n.ready ? n.ready(e) : e(w)) : w.makeArray(e, this);
    }).prototype = w.fn),
        (q = w(r));
    var D = /^(?:parents|prev(?:Until|All))/,
        I = { children: !0, contents: !0, next: !0, prev: !0 };
    function j(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
    }
    w.fn.extend({
        has: function (e) {
            var t = w(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var n,
                r = 0,
                i = this.length,
                o = [],
                s = "string" != typeof e && w(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            o.push(n);
                            break;
                        }
            return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
        },
        index: function (e) {
            return e ? ("string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        },
    }),
        w.each(
            {
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                    return E(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                    return E(e, "parentNode", n);
                },
                next: function (e) {
                    return j(e, "nextSibling");
                },
                prev: function (e) {
                    return j(e, "previousSibling");
                },
                nextAll: function (e) {
                    return E(e, "nextSibling");
                },
                prevAll: function (e) {
                    return E(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                    return E(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                    return E(e, "previousSibling", n);
                },
                siblings: function (e) {
                    return T((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return T(e.firstChild);
                },
                contents: function (e) {
                    return S(e, "iframe") ? e.contentDocument : (S(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
                },
            },
            function (e, t) {
                w.fn[e] = function (n, r) {
                    var i = w.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (I[e] || w.uniqueSort(i), D.test(e) && i.reverse()), this.pushStack(i);
                };
            }
        );
    var N = /[^\x20\t\r\n\f]+/g;
    function O(e) {
        return e;
    }
    function R(e) {
        throw e;
    }
    function M(e, t, n, r) {
        var i;
        try {
            e && m((i = e.promise)) ? i.call(e).done(t).fail(n) : e && m((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    (w.Callbacks = function (e) {
        e =
            "string" == typeof e
                ? (function (e) {
                      var t = {};
                      return (
                          w.each(e.match(N) || [], function (e, n) {
                              t[n] = !0;
                          }),
                          t
                      );
                  })(e)
                : w.extend({}, e);
        var t,
            n,
            r,
            i,
            o = [],
            s = [],
            a = -1,
            u = function () {
                for (i = i || e.once, r = t = !0; s.length; a = -1) for (n = s.shift(); ++a < o.length; ) !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && ((a = o.length), (n = !1));
                e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
            },
            c = {
                add: function () {
                    return (
                        o &&
                            (n && !t && ((a = o.length - 1), s.push(n)),
                            (function t(n) {
                                w.each(n, function (n, r) {
                                    m(r) ? (e.unique && c.has(r)) || o.push(r) : r && r.length && "string" !== b(r) && t(r);
                                });
                            })(arguments),
                            n && !t && u()),
                        this
                    );
                },
                remove: function () {
                    return (
                        w.each(arguments, function (e, t) {
                            for (var n; (n = w.inArray(t, o, n)) > -1; ) o.splice(n, 1), n <= a && a--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? w.inArray(e, o) > -1 : o.length > 0;
                },
                empty: function () {
                    return o && (o = []), this;
                },
                disable: function () {
                    return (i = s = []), (o = n = ""), this;
                },
                disabled: function () {
                    return !o;
                },
                lock: function () {
                    return (i = s = []), n || t || (o = n = ""), this;
                },
                locked: function () {
                    return !!i;
                },
                fireWith: function (e, n) {
                    return i || ((n = [e, (n = n || []).slice ? n.slice() : n]), s.push(n), t || u()), this;
                },
                fire: function () {
                    return c.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!r;
                },
            };
        return c;
    }),
        w.extend({
            Deferred: function (t) {
                var n = [
                        ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                        ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"],
                    ],
                    r = "pending",
                    i = {
                        state: function () {
                            return r;
                        },
                        always: function () {
                            return o.done(arguments).fail(arguments), this;
                        },
                        catch: function (e) {
                            return i.then(null, e);
                        },
                        pipe: function () {
                            var e = arguments;
                            return w
                                .Deferred(function (t) {
                                    w.each(n, function (n, r) {
                                        var i = m(e[r[4]]) && e[r[4]];
                                        o[r[1]](function () {
                                            var e = i && i.apply(this, arguments);
                                            e && m(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
                                        });
                                    }),
                                        (e = null);
                                })
                                .promise();
                        },
                        then: function (t, r, i) {
                            var o = 0;
                            function s(t, n, r, i) {
                                return function () {
                                    var a = this,
                                        u = arguments,
                                        c = function () {
                                            var e, c;
                                            if (!(t < o)) {
                                                if ((e = r.apply(a, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                (c = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                                    m(c)
                                                        ? i
                                                            ? c.call(e, s(o, n, O, i), s(o, n, R, i))
                                                            : (o++, c.call(e, s(o, n, O, i), s(o, n, R, i), s(o, n, O, n.notifyWith)))
                                                        : (r !== O && ((a = void 0), (u = [e])), (i || n.resolveWith)(a, u));
                                            }
                                        },
                                        l = i
                                            ? c
                                            : function () {
                                                  try {
                                                      c();
                                                  } catch (e) {
                                                      w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, l.stackTrace), t + 1 >= o && (r !== R && ((a = void 0), (u = [e])), n.rejectWith(a, u));
                                                  }
                                              };
                                    t ? l() : (w.Deferred.getStackHook && (l.stackTrace = w.Deferred.getStackHook()), e.setTimeout(l));
                                };
                            }
                            return w
                                .Deferred(function (e) {
                                    n[0][3].add(s(0, e, m(i) ? i : O, e.notifyWith)), n[1][3].add(s(0, e, m(t) ? t : O)), n[2][3].add(s(0, e, m(r) ? r : R));
                                })
                                .promise();
                        },
                        promise: function (e) {
                            return null != e ? w.extend(e, i) : i;
                        },
                    },
                    o = {};
                return (
                    w.each(n, function (e, t) {
                        var s = t[2],
                            a = t[5];
                        (i[t[1]] = s.add),
                            a &&
                                s.add(
                                    function () {
                                        r = a;
                                    },
                                    n[3 - e][2].disable,
                                    n[3 - e][3].disable,
                                    n[0][2].lock,
                                    n[0][3].lock
                                ),
                            s.add(t[3].fire),
                            (o[t[0]] = function () {
                                return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
                            }),
                            (o[t[0] + "With"] = s.fireWith);
                    }),
                    i.promise(o),
                    t && t.call(o, o),
                    o
                );
            },
            when: function (e) {
                var t = arguments.length,
                    n = t,
                    r = Array(n),
                    i = o.call(arguments),
                    s = w.Deferred(),
                    a = function (e) {
                        return function (n) {
                            (r[e] = this), (i[e] = arguments.length > 1 ? o.call(arguments) : n), --t || s.resolveWith(r, i);
                        };
                    };
                if (t <= 1 && (M(e, s.done(a(n)).resolve, s.reject, !t), "pending" === s.state() || m(i[n] && i[n].then))) return s.then();
                for (; n--; ) M(i[n], a(n), s.reject);
                return s.promise();
            },
        });
    var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (w.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && z.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }),
        (w.readyException = function (t) {
            e.setTimeout(function () {
                throw t;
            });
        });
    var B = w.Deferred();
    function F() {
        r.removeEventListener("DOMContentLoaded", F), e.removeEventListener("load", F), w.ready();
    }
    (w.fn.ready = function (e) {
        return (
            B.then(e).catch(function (e) {
                w.readyException(e);
            }),
            this
        );
    }),
        w.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --w.readyWait : w.isReady) || ((w.isReady = !0), (!0 !== e && --w.readyWait > 0) || B.resolveWith(r, [w]));
            },
        }),
        (w.ready.then = B.then),
        "complete" === r.readyState || ("loading" !== r.readyState && !r.documentElement.doScroll) ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", F), e.addEventListener("load", F));
    var $ = function (e, t, n, r, i, o, s) {
            var a = 0,
                u = e.length,
                c = null == n;
            if ("object" === b(n)) for (a in ((i = !0), n)) $(e, t, a, n[a], !0, o, s);
            else if (
                void 0 !== r &&
                ((i = !0),
                m(r) || (s = !0),
                c &&
                    (s
                        ? (t.call(e, r), (t = null))
                        : ((c = t),
                          (t = function (e, t, n) {
                              return c.call(w(e), n);
                          }))),
                t)
            )
                for (; a < u; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
            return i ? e : c ? t.call(e) : u ? t(e[0], n) : o;
        },
        H = /^-ms-/,
        W = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase();
    }
    function V(e) {
        return e.replace(H, "ms-").replace(W, U);
    }
    var Q = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function X() {
        this.expando = w.expando + X.uid++;
    }
    (X.uid = 1),
        (X.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || ((t = {}), Q(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
            },
            set: function (e, t, n) {
                var r,
                    i = this.cache(e);
                if ("string" == typeof t) i[V(t)] = n;
                else for (r in t) i[V(r)] = t[r];
                return i;
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
            },
            access: function (e, t, n) {
                return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(N) || []).length;
                        for (; n--; ) delete r[t[n]];
                    }
                    (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !w.isEmptyObject(t);
            },
        });
    var G = new X(),
        Y = new X(),
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;
    function Z(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (((r = "data-" + t.replace(J, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
                try {
                    n = (function (e) {
                        return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : K.test(e) ? JSON.parse(e) : e));
                    })(n);
                } catch (e) {}
                Y.set(e, t, n);
            } else n = void 0;
        return n;
    }
    w.extend({
        hasData: function (e) {
            return Y.hasData(e) || G.hasData(e);
        },
        data: function (e, t, n) {
            return Y.access(e, t, n);
        },
        removeData: function (e, t) {
            Y.remove(e, t);
        },
        _data: function (e, t, n) {
            return G.access(e, t, n);
        },
        _removeData: function (e, t) {
            G.remove(e, t);
        },
    }),
        w.fn.extend({
            data: function (e, t) {
                var n,
                    r,
                    i,
                    o = this[0],
                    s = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && ((i = Y.get(o)), 1 === o.nodeType && !G.get(o, "hasDataAttrs"))) {
                        for (n = s.length; n--; ) s[n] && 0 === (r = s[n].name).indexOf("data-") && ((r = V(r.slice(5))), Z(o, r, i[r]));
                        G.set(o, "hasDataAttrs", !0);
                    }
                    return i;
                }
                return "object" == typeof e
                    ? this.each(function () {
                          Y.set(this, e);
                      })
                    : $(
                          this,
                          function (t) {
                              var n;
                              if (o && void 0 === t) {
                                  if (void 0 !== (n = Y.get(o, e))) return n;
                                  if (void 0 !== (n = Z(o, e))) return n;
                              } else
                                  this.each(function () {
                                      Y.set(this, e, t);
                                  });
                          },
                          null,
                          t,
                          arguments.length > 1,
                          null,
                          !0
                      );
            },
            removeData: function (e) {
                return this.each(function () {
                    Y.remove(this, e);
                });
            },
        }),
        w.extend({
            queue: function (e, t, n) {
                var r;
                if (e) return (t = (t || "fx") + "queue"), (r = G.get(e, t)), n && (!r || Array.isArray(n) ? (r = G.access(e, t, w.makeArray(n))) : r.push(n)), r || [];
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = w.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = w._queueHooks(e, t);
                "inprogress" === i && ((i = n.shift()), r--),
                    i &&
                        ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        i.call(
                            e,
                            function () {
                                w.dequeue(e, t);
                            },
                            o
                        )),
                    !r && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    G.get(e, n) ||
                    G.access(e, n, {
                        empty: w.Callbacks("once memory").add(function () {
                            G.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        w.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return (
                    "string" != typeof e && ((t = e), (e = "fx"), n--),
                    arguments.length < n
                        ? w.queue(this[0], e)
                        : void 0 === t
                        ? this
                        : this.each(function () {
                              var n = w.queue(this, e, t);
                              w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    w.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                var n,
                    r = 1,
                    i = w.Deferred(),
                    o = this,
                    s = this.length,
                    a = function () {
                        --r || i.resolveWith(o, [o]);
                    };
                for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; s--; ) (n = G.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
                return a(), i.promise(t);
            },
        });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = function (e, t) {
            return "none" === (e = t || e).style.display || ("" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display"));
        },
        ie = function (e, t, n, r) {
            var i,
                o,
                s = {};
            for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
            for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = s[o];
            return i;
        };
    function oe(e, t, n, r) {
        var i,
            o,
            s = 20,
            a = r
                ? function () {
                      return r.cur();
                  }
                : function () {
                      return w.css(e, t, "");
                  },
            u = a(),
            c = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
            l = (w.cssNumber[t] || ("px" !== c && +u)) && te.exec(w.css(e, t));
        if (l && l[3] !== c) {
            for (u /= 2, c = c || l[3], l = +u || 1; s--; ) w.style(e, t, l + c), (1 - o) * (1 - (o = a() / u || 0.5)) <= 0 && (s = 0), (l /= o);
            (l *= 2), w.style(e, t, l + c), (n = n || []);
        }
        return n && ((l = +l || +u || 0), (i = n[1] ? l + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = c), (r.start = l), (r.end = i))), i;
    }
    var se = {};
    function ae(e) {
        var t,
            n = e.ownerDocument,
            r = e.nodeName,
            i = se[r];
        return i || ((t = n.body.appendChild(n.createElement(r))), (i = w.css(t, "display")), t.parentNode.removeChild(t), "none" === i && (i = "block"), (se[r] = i), i);
    }
    function ue(e, t) {
        for (var n, r, i = [], o = 0, s = e.length; o < s; o++)
            (r = e[o]).style &&
                ((n = r.style.display),
                t ? ("none" === n && ((i[o] = G.get(r, "display") || null), i[o] || (r.style.display = "")), "" === r.style.display && re(r) && (i[o] = ae(r))) : "none" !== n && ((i[o] = "none"), G.set(r, "display", n)));
        for (o = 0; o < s; o++) null != i[o] && (e[o].style.display = i[o]);
        return e;
    }
    w.fn.extend({
        show: function () {
            return ue(this, !0);
        },
        hide: function () {
            return ue(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      re(this) ? w(this).show() : w(this).hide();
                  });
        },
    });
    var ce = /^(?:checkbox|radio)$/i,
        le = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        de = /^$|^module$|\/(?:java|ecma)script/i,
        fe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
        };
    function pe(e, t) {
        var n;
        return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && S(e, t)) ? w.merge([e], n) : n;
    }
    function he(e, t) {
        for (var n = 0, r = e.length; n < r; n++) G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"));
    }
    (fe.optgroup = fe.option), (fe.tbody = fe.tfoot = fe.colgroup = fe.caption = fe.thead), (fe.th = fe.td);
    var me = /<|&#?\w+;/;
    function ge(e, t, n, r, i) {
        for (var o, s, a, u, c, l, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === b(o)) w.merge(f, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    for (s = s || d.appendChild(t.createElement("div")), a = (le.exec(o) || ["", ""])[1].toLowerCase(), u = fe[a] || fe._default, s.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], l = u[0]; l--; ) s = s.lastChild;
                    w.merge(f, s.childNodes), ((s = d.firstChild).textContent = "");
                } else f.push(t.createTextNode(o));
        for (d.textContent = "", p = 0; (o = f[p++]); )
            if (r && w.inArray(o, r) > -1) i && i.push(o);
            else if (((c = w.contains(o.ownerDocument, o)), (s = pe(d.appendChild(o), "script")), c && he(s), n)) for (l = 0; (o = s[l++]); ) de.test(o.type || "") && n.push(o);
        return d;
    }
    !(function () {
        var e = r.createDocumentFragment().appendChild(r.createElement("div")),
            t = r.createElement("input");
        t.setAttribute("type", "radio"),
            t.setAttribute("checked", "checked"),
            t.setAttribute("name", "t"),
            e.appendChild(t),
            (h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (e.innerHTML = "<textarea>x</textarea>"),
            (h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
    })();
    var ve = r.documentElement,
        ye = /^key/,
        be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        we = /^([^.]*)(?:\.(.+)|)/;
    function xe() {
        return !0;
    }
    function Ce() {
        return !1;
    }
    function _e() {
        try {
            return r.activeElement;
        } catch (e) {}
    }
    function Ee(e, t, n, r, i, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in ("string" != typeof n && ((r = r || n), (n = void 0)), t)) Ee(e, a, n, r, t[a], o);
            return e;
        }
        if ((null == r && null == i ? ((i = n), (r = n = void 0)) : null == i && ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))), !1 === i)) i = Ce;
        else if (!i) return e;
        return (
            1 === o &&
                ((s = i),
                ((i = function (e) {
                    return w().off(e), s.apply(this, arguments);
                }).guid = s.guid || (s.guid = w.guid++))),
            e.each(function () {
                w.event.add(this, t, i, r, n);
            })
        );
    }
    (w.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o,
                s,
                a,
                u,
                c,
                l,
                d,
                f,
                p,
                h,
                m,
                g = G.get(e);
            if (g)
                for (
                    n.handler && ((n = (o = n).handler), (i = o.selector)),
                        i && w.find.matchesSelector(ve, i),
                        n.guid || (n.guid = w.guid++),
                        (u = g.events) || (u = g.events = {}),
                        (s = g.handle) ||
                            (s = g.handle = function (t) {
                                return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
                            }),
                        c = (t = (t || "").match(N) || [""]).length;
                    c--;

                )
                    (p = m = (a = we.exec(t[c]) || [])[1]),
                        (h = (a[2] || "").split(".").sort()),
                        p &&
                            ((d = w.event.special[p] || {}),
                            (p = (i ? d.delegateType : d.bindType) || p),
                            (d = w.event.special[p] || {}),
                            (l = w.extend({ type: p, origType: m, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && w.expr.match.needsContext.test(i), namespace: h.join(".") }, o)),
                            (f = u[p]) || (((f = u[p] = []).delegateCount = 0), (d.setup && !1 !== d.setup.call(e, r, h, s)) || (e.addEventListener && e.addEventListener(p, s))),
                            d.add && (d.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)),
                            i ? f.splice(f.delegateCount++, 0, l) : f.push(l),
                            (w.event.global[p] = !0));
        },
        remove: function (e, t, n, r, i) {
            var o,
                s,
                a,
                u,
                c,
                l,
                d,
                f,
                p,
                h,
                m,
                g = G.hasData(e) && G.get(e);
            if (g && (u = g.events)) {
                for (c = (t = (t || "").match(N) || [""]).length; c--; )
                    if (((p = m = (a = we.exec(t[c]) || [])[1]), (h = (a[2] || "").split(".").sort()), p)) {
                        for (d = w.event.special[p] || {}, f = u[(p = (r ? d.delegateType : d.bindType) || p)] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length; o--; )
                            (l = f[o]),
                                (!i && m !== l.origType) ||
                                    (n && n.guid !== l.guid) ||
                                    (a && !a.test(l.namespace)) ||
                                    (r && r !== l.selector && ("**" !== r || !l.selector)) ||
                                    (f.splice(o, 1), l.selector && f.delegateCount--, d.remove && d.remove.call(e, l));
                        s && !f.length && ((d.teardown && !1 !== d.teardown.call(e, h, g.handle)) || w.removeEvent(e, p, g.handle), delete u[p]);
                    } else for (p in u) w.event.remove(e, p + t[c], n, r, !0);
                w.isEmptyObject(u) && G.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            var t,
                n,
                r,
                i,
                o,
                s,
                a = w.event.fix(e),
                u = new Array(arguments.length),
                c = (G.get(this, "events") || {})[a.type] || [],
                l = w.event.special[a.type] || {};
            for (u[0] = a, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (((a.delegateTarget = this), !l.preDispatch || !1 !== l.preDispatch.call(this, a))) {
                for (s = w.event.handlers.call(this, a, c), t = 0; (i = s[t++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                        (a.rnamespace && !a.rnamespace.test(o.namespace)) ||
                            ((a.handleObj = o), (a.data = o.data), void 0 !== (r = ((w.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (a.result = r) && (a.preventDefault(), a.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function (e, t) {
            var n,
                r,
                i,
                o,
                s,
                a = [],
                u = t.delegateCount,
                c = e.target;
            if (u && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (o = [], s = {}, n = 0; n < u; n++) void 0 === s[(i = (r = t[n]).selector + " ")] && (s[i] = r.needsContext ? w(i, this).index(c) > -1 : w.find(i, this, null, [c]).length), s[i] && o.push(r);
                        o.length && a.push({ elem: c, handlers: o });
                    }
            return (c = this), u < t.length && a.push({ elem: c, handlers: t.slice(u) }), a;
        },
        addProp: function (e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: m(t)
                    ? function () {
                          if (this.originalEvent) return t(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[e];
                      },
                set: function (t) {
                    Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                },
            });
        },
        fix: function (e) {
            return e[w.expando] ? e : new w.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    if (this !== _e() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin",
            },
            blur: {
                trigger: function () {
                    if (this === _e() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout",
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && S(this, "input")) return this.click(), !1;
                },
                _default: function (e) {
                    return S(e.target, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (w.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (w.Event = function (e, t) {
            if (!(this instanceof w.Event)) return new w.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? xe : Ce),
                  (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && w.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[w.expando] = !0);
        }),
        (w.Event.prototype = {
            constructor: w.Event,
            isDefaultPrevented: Ce,
            isPropagationStopped: Ce,
            isImmediatePropagationStopped: Ce,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = xe), e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = xe), e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = xe), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        w.each(
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
                which: function (e) {
                    var t = e.button;
                    return null == e.which && ye.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && be.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                },
            },
            w.event.addProp
        ),
        w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
            w.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var n,
                        r = e.relatedTarget,
                        i = e.handleObj;
                    return (r && (r === this || w.contains(this, r))) || ((e.type = i.origType), (n = i.handler.apply(this, arguments)), (e.type = t)), n;
                },
            };
        }),
        w.fn.extend({
            on: function (e, t, n, r) {
                return Ee(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
                return Ee(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this;
                }
                return (
                    (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                    !1 === n && (n = Ce),
                    this.each(function () {
                        w.event.remove(this, e, n, t);
                    })
                );
            },
        });
    var Te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        ke = /<script|<style|<link/i,
        Se = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Le(e, t) {
        return (S(e, "table") && S(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0]) || e;
    }
    function qe(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function Pe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
    }
    function De(e, t) {
        var n, r, i, o, s, a, u, c;
        if (1 === t.nodeType) {
            if (G.hasData(e) && ((o = G.access(e)), (s = G.set(t, o)), (c = o.events))) for (i in (delete s.handle, (s.events = {}), c)) for (n = 0, r = c[i].length; n < r; n++) w.event.add(t, i, c[i][n]);
            Y.hasData(e) && ((a = Y.access(e)), (u = w.extend({}, a)), Y.set(t, u));
        }
    }
    function Ie(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ce.test(e.type) ? (t.checked = e.checked) : ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue);
    }
    function je(e, t, n, r) {
        t = s.apply([], t);
        var i,
            o,
            a,
            u,
            c,
            l,
            d = 0,
            f = e.length,
            p = f - 1,
            g = t[0],
            v = m(g);
        if (v || (f > 1 && "string" == typeof g && !h.checkClone && Se.test(g)))
            return e.each(function (i) {
                var o = e.eq(i);
                v && (t[0] = g.call(this, i, o.html())), je(o, t, n, r);
            });
        if (f && ((o = (i = ge(t, e[0].ownerDocument, !1, e, r)).firstChild), 1 === i.childNodes.length && (i = o), o || r)) {
            for (u = (a = w.map(pe(i, "script"), qe)).length; d < f; d++) (c = i), d !== p && ((c = w.clone(c, !0, !0)), u && w.merge(a, pe(c, "script"))), n.call(e[d], c, d);
            if (u)
                for (l = a[a.length - 1].ownerDocument, w.map(a, Pe), d = 0; d < u; d++)
                    (c = a[d]), de.test(c.type || "") && !G.access(c, "globalEval") && w.contains(l, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(c.src) : y(c.textContent.replace(Ae, ""), l, c));
        }
        return e;
    }
    function Ne(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(pe(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && he(pe(r, "script")), r.parentNode.removeChild(r));
        return e;
    }
    w.extend({
        htmlPrefilter: function (e) {
            return e.replace(Te, "<$1></$2>");
        },
        clone: function (e, t, n) {
            var r,
                i,
                o,
                s,
                a = e.cloneNode(!0),
                u = w.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || w.isXMLDoc(e))) for (s = pe(a), r = 0, i = (o = pe(e)).length; r < i; r++) Ie(o[r], s[r]);
            if (t)
                if (n) for (o = o || pe(e), s = s || pe(a), r = 0, i = o.length; r < i; r++) De(o[r], s[r]);
                else De(e, a);
            return (s = pe(a, "script")).length > 0 && he(s, !u && pe(e, "script")), a;
        },
        cleanData: function (e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Q(n)) {
                    if ((t = n[G.expando])) {
                        if (t.events) for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        n[G.expando] = void 0;
                    }
                    n[Y.expando] && (n[Y.expando] = void 0);
                }
        },
    }),
        w.fn.extend({
            detach: function (e) {
                return Ne(this, e, !0);
            },
            remove: function (e) {
                return Ne(this, e);
            },
            text: function (e) {
                return $(
                    this,
                    function (e) {
                        return void 0 === e
                            ? w.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                              });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return je(this, arguments, function (e) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Le(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return je(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Le(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return je(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return je(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(pe(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return w.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return $(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !ke.test(e) && !fe[(le.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = w.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(pe(t, !1)), (t.innerHTML = e));
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
                var e = [];
                return je(
                    this,
                    arguments,
                    function (t) {
                        var n = this.parentNode;
                        w.inArray(this, e) < 0 && (w.cleanData(pe(this)), n && n.replaceChild(t, this));
                    },
                    e
                );
            },
        }),
        w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
            w.fn[e] = function (e) {
                for (var n, r = [], i = w(e), o = i.length - 1, s = 0; s <= o; s++) (n = s === o ? this : this.clone(!0)), w(i[s])[t](n), a.apply(r, n.get());
                return this.pushStack(r);
            };
        });
    var Oe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Re = function (t) {
            var n = t.ownerDocument.defaultView;
            return (n && n.opener) || (n = e), n.getComputedStyle(t);
        },
        Me = new RegExp(ne.join("|"), "i");
    function ze(e, t, n) {
        var r,
            i,
            o,
            s,
            a = e.style;
        return (
            (n = n || Re(e)) &&
                ("" !== (s = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (s = w.style(e, t)),
                !h.pixelBoxStyles() && Oe.test(s) && Me.test(t) && ((r = a.width), (i = a.minWidth), (o = a.maxWidth), (a.minWidth = a.maxWidth = a.width = s), (s = n.width), (a.width = r), (a.minWidth = i), (a.maxWidth = o))),
            void 0 !== s ? s + "" : s
        );
    }
    function Be(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    !(function () {
        function t() {
            if (l) {
                (c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    ve.appendChild(c).appendChild(l);
                var t = e.getComputedStyle(l);
                (i = "1%" !== t.top),
                    (u = 12 === n(t.marginLeft)),
                    (l.style.right = "60%"),
                    (a = 36 === n(t.right)),
                    (o = 36 === n(t.width)),
                    (l.style.position = "absolute"),
                    (s = 36 === l.offsetWidth || "absolute"),
                    ve.removeChild(c),
                    (l = null);
            }
        }
        function n(e) {
            return Math.round(parseFloat(e));
        }
        var i,
            o,
            s,
            a,
            u,
            c = r.createElement("div"),
            l = r.createElement("div");
        l.style &&
            ((l.style.backgroundClip = "content-box"),
            (l.cloneNode(!0).style.backgroundClip = ""),
            (h.clearCloneStyle = "content-box" === l.style.backgroundClip),
            w.extend(h, {
                boxSizingReliable: function () {
                    return t(), o;
                },
                pixelBoxStyles: function () {
                    return t(), a;
                },
                pixelPosition: function () {
                    return t(), i;
                },
                reliableMarginLeft: function () {
                    return t(), u;
                },
                scrollboxSize: function () {
                    return t(), s;
                },
            }));
    })();
    var Fe = /^(none|table(?!-c[ea]).+)/,
        $e = /^--/,
        He = { position: "absolute", visibility: "hidden", display: "block" },
        We = { letterSpacing: "0", fontWeight: "400" },
        Ue = ["Webkit", "Moz", "ms"],
        Ve = r.createElement("div").style;
    function Qe(e) {
        var t = w.cssProps[e];
        return (
            t ||
                (t = w.cssProps[e] =
                    (function (e) {
                        if (e in Ve) return e;
                        for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--; ) if ((e = Ue[n] + t) in Ve) return e;
                    })(e) || e),
            t
        );
    }
    function Xe(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function Ge(e, t, n, r, i, o) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; s < 4; s += 2)
            "margin" === n && (u += w.css(e, n + ne[s], !0, i)),
                r
                    ? ("content" === n && (u -= w.css(e, "padding" + ne[s], !0, i)), "margin" !== n && (u -= w.css(e, "border" + ne[s] + "Width", !0, i)))
                    : ((u += w.css(e, "padding" + ne[s], !0, i)), "padding" !== n ? (u += w.css(e, "border" + ne[s] + "Width", !0, i)) : (a += w.css(e, "border" + ne[s] + "Width", !0, i)));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - a - 0.5))), u;
    }
    function Ye(e, t, n) {
        var r = Re(e),
            i = ze(e, t, r),
            o = "border-box" === w.css(e, "boxSizing", !1, r),
            s = o;
        if (Oe.test(i)) {
            if (!n) return i;
            i = "auto";
        }
        return (
            (s = s && (h.boxSizingReliable() || i === e.style[t])),
            ("auto" === i || (!parseFloat(i) && "inline" === w.css(e, "display", !1, r))) && ((i = e["offset" + t[0].toUpperCase() + t.slice(1)]), (s = !0)),
            (i = parseFloat(i) || 0) + Ge(e, t, n || (o ? "border" : "content"), s, r, i) + "px"
        );
    }
    function Ke(e, t, n, r, i) {
        return new Ke.prototype.init(e, t, n, r, i);
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = ze(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                },
            },
        },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    o,
                    s,
                    a = V(t),
                    u = $e.test(t),
                    c = e.style;
                if ((u || (t = Qe(a)), (s = w.cssHooks[t] || w.cssHooks[a]), void 0 === n)) return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : c[t];
                "string" == (o = typeof n) && (i = te.exec(n)) && i[1] && ((n = oe(e, t, i)), (o = "number")),
                    null != n &&
                        n == n &&
                        ("number" === o && (n += (i && i[3]) || (w.cssNumber[a] ? "" : "px")),
                        h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                        (s && "set" in s && void 0 === (n = s.set(e, n, r))) || (u ? c.setProperty(t, n) : (c[t] = n)));
            }
        },
        css: function (e, t, n, r) {
            var i,
                o,
                s,
                a = V(t);
            return (
                $e.test(t) || (t = Qe(a)),
                (s = w.cssHooks[t] || w.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)),
                void 0 === i && (i = ze(e, t, r)),
                "normal" === i && t in We && (i = We[t]),
                "" === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
            );
        },
    }),
        w.each(["height", "width"], function (e, t) {
            w.cssHooks[t] = {
                get: function (e, n, r) {
                    if (n)
                        return !Fe.test(w.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                            ? Ye(e, t, r)
                            : ie(e, He, function () {
                                  return Ye(e, t, r);
                              });
                },
                set: function (e, n, r) {
                    var i,
                        o = Re(e),
                        s = "border-box" === w.css(e, "boxSizing", !1, o),
                        a = r && Ge(e, t, r, s, o);
                    return (
                        s && h.scrollboxSize() === o.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ge(e, t, "border", !1, o) - 0.5)),
                        a && (i = te.exec(n)) && "px" !== (i[3] || "px") && ((e.style[t] = n), (n = w.css(e, t))),
                        Xe(0, n, a)
                    );
                },
            };
        }),
        (w.cssHooks.marginLeft = Be(h.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(ze(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                            ie(e, { marginLeft: 0 }, function () {
                                return e.getBoundingClientRect().left;
                            })) + "px"
                );
        })),
        w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            (w.cssHooks[e + t] = {
                expand: function (n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ne[r] + t] = o[r] || o[r - 2] || o[0];
                    return i;
                },
            }),
                "margin" !== e && (w.cssHooks[e + t].set = Xe);
        }),
        w.fn.extend({
            css: function (e, t) {
                return $(
                    this,
                    function (e, t, n) {
                        var r,
                            i,
                            o = {},
                            s = 0;
                        if (Array.isArray(t)) {
                            for (r = Re(e), i = t.length; s < i; s++) o[t[s]] = w.css(e, t[s], !1, r);
                            return o;
                        }
                        return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
                    },
                    e,
                    t,
                    arguments.length > 1
                );
            },
        }),
        (w.Tween = Ke),
        (Ke.prototype = {
            constructor: Ke,
            init: function (e, t, n, r, i, o) {
                (this.elem = e), (this.prop = n), (this.easing = i || w.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit = o || (w.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = Ke.propHooks[this.prop];
                return e && e.get ? e.get(this) : Ke.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    n = Ke.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : Ke.propHooks._default.set(this),
                    this
                );
            },
        }),
        (Ke.prototype.init.prototype = Ke.prototype),
        (Ke.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                },
                set: function (e) {
                    w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop]) ? (e.elem[e.prop] = e.now) : w.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }),
        (Ke.propHooks.scrollTop = Ke.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
        }),
        (w.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (w.fx = Ke.prototype.init),
        (w.fx.step = {});
    var Je,
        Ze,
        et = /^(?:toggle|show|hide)$/,
        tt = /queueHooks$/;
    function nt() {
        Ze && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(nt) : e.setTimeout(nt, w.fx.interval), w.fx.tick());
    }
    function rt() {
        return (
            e.setTimeout(function () {
                Je = void 0;
            }),
            (Je = Date.now())
        );
    }
    function it(e, t) {
        var n,
            r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function ot(e, t, n) {
        for (var r, i = (st.tweeners[t] || []).concat(st.tweeners["*"]), o = 0, s = i.length; o < s; o++) if ((r = i[o].call(n, t, e))) return r;
    }
    function st(e, t, n) {
        var r,
            i,
            o = 0,
            s = st.prefilters.length,
            a = w.Deferred().always(function () {
                delete u.elem;
            }),
            u = function () {
                if (i) return !1;
                for (var t = Je || rt(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) c.tweens[o].run(r);
                return a.notifyWith(e, [c, r, n]), r < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1);
            },
            c = a.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Je || rt(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = w.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(r), r;
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? c.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) c.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this;
                },
            }),
            l = c.props;
        for (
            (function (e, t) {
                var n, r, i, o, s;
                for (n in e)
                    if (((i = t[(r = V(n))]), (o = e[n]), Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])), n !== r && ((e[r] = o), delete e[n]), (s = w.cssHooks[r]) && ("expand" in s)))
                        for (n in ((o = s.expand(o)), delete e[r], o)) (n in e) || ((e[n] = o[n]), (t[n] = i));
                    else t[r] = i;
            })(l, c.opts.specialEasing);
            o < s;
            o++
        )
            if ((r = st.prefilters[o].call(c, e, l, c.opts))) return m(r.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)), r;
        return (
            w.map(l, ot, c),
            m(c.opts.start) && c.opts.start.call(e, c),
            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
            w.fx.timer(w.extend(u, { elem: e, anim: c, queue: c.opts.queue })),
            c
        );
    }
    (w.Animation = w.extend(st, {
        tweeners: {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return oe(n.elem, e, te.exec(t), n), n;
                },
            ],
        },
        tweener: function (e, t) {
            m(e) ? ((t = e), (e = ["*"])) : (e = e.match(N));
            for (var n, r = 0, i = e.length; r < i; r++) (n = e[r]), (st.tweeners[n] = st.tweeners[n] || []), st.tweeners[n].unshift(t);
        },
        prefilters: [
            function (e, t, n) {
                var r,
                    i,
                    o,
                    s,
                    a,
                    u,
                    c,
                    l,
                    d = "width" in t || "height" in t,
                    f = this,
                    p = {},
                    h = e.style,
                    m = e.nodeType && re(e),
                    g = G.get(e, "fxshow");
                for (r in (n.queue ||
                    (null == (s = w._queueHooks(e, "fx")).unqueued &&
                        ((s.unqueued = 0),
                        (a = s.empty.fire),
                        (s.empty.fire = function () {
                            s.unqueued || a();
                        })),
                    s.unqueued++,
                    f.always(function () {
                        f.always(function () {
                            s.unqueued--, w.queue(e, "fx").length || s.empty.fire();
                        });
                    })),
                t))
                    if (((i = t[r]), et.test(i))) {
                        if ((delete t[r], (o = o || "toggle" === i), i === (m ? "hide" : "show"))) {
                            if ("show" !== i || !g || void 0 === g[r]) continue;
                            m = !0;
                        }
                        p[r] = (g && g[r]) || w.style(e, r);
                    }
                if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(p))
                    for (r in (d &&
                        1 === e.nodeType &&
                        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                        null == (c = g && g.display) && (c = G.get(e, "display")),
                        "none" === (l = w.css(e, "display")) && (c ? (l = c) : (ue([e], !0), (c = e.style.display || c), (l = w.css(e, "display")), ue([e]))),
                        ("inline" === l || ("inline-block" === l && null != c)) &&
                            "none" === w.css(e, "float") &&
                            (u ||
                                (f.done(function () {
                                    h.display = c;
                                }),
                                null == c && ((l = h.display), (c = "none" === l ? "" : l))),
                            (h.display = "inline-block"))),
                    n.overflow &&
                        ((h.overflow = "hidden"),
                        f.always(function () {
                            (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                        })),
                    (u = !1),
                    p))
                        u ||
                            (g ? "hidden" in g && (m = g.hidden) : (g = G.access(e, "fxshow", { display: c })),
                            o && (g.hidden = !m),
                            m && ue([e], !0),
                            f.done(function () {
                                for (r in (m || ue([e]), G.remove(e, "fxshow"), p)) w.style(e, r, p[r]);
                            })),
                            (u = ot(m ? g[r] : 0, r, f)),
                            r in g || ((g[r] = u.start), m && ((u.end = u.start), (u.start = 0)));
            },
        ],
        prefilter: function (e, t) {
            t ? st.prefilters.unshift(e) : st.prefilters.push(e);
        },
    })),
        (w.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? w.extend({}, e) : { complete: n || (!n && t) || (m(e) && e), duration: e, easing: (n && t) || (t && !m(t) && t) };
            return (
                w.fx.off ? (r.duration = 0) : "number" != typeof r.duration && (r.duration in w.fx.speeds ? (r.duration = w.fx.speeds[r.duration]) : (r.duration = w.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                    m(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
                }),
                r
            );
        }),
        w.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(re).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
            },
            animate: function (e, t, n, r) {
                var i = w.isEmptyObject(e),
                    o = w.speed(t, n, r),
                    s = function () {
                        var t = st(this, w.extend({}, e), o);
                        (i || G.get(this, "finish")) && t.stop(!0);
                    };
                return (s.finish = s), i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
            },
            stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n);
                };
                return (
                    "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                    t && !1 !== e && this.queue(e || "fx", []),
                    this.each(function () {
                        var t = !0,
                            i = null != e && e + "queueHooks",
                            o = w.timers,
                            s = G.get(this);
                        if (i) s[i] && s[i].stop && r(s[i]);
                        else for (i in s) s[i] && s[i].stop && tt.test(i) && r(s[i]);
                        for (i = o.length; i--; ) o[i].elem !== this || (null != e && o[i].queue !== e) || (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                        (!t && n) || w.dequeue(this, e);
                    })
                );
            },
            finish: function (e) {
                return (
                    !1 !== e && (e = e || "fx"),
                    this.each(function () {
                        var t,
                            n = G.get(this),
                            r = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            o = w.timers,
                            s = r ? r.length : 0;
                        for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish;
                    })
                );
            },
        }),
        w.each(["toggle", "show", "hide"], function (e, t) {
            var n = w.fn[t];
            w.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(it(t, !0), e, r, i);
            };
        }),
        w.each({ slideDown: it("show"), slideUp: it("hide"), slideToggle: it("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
            w.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r);
            };
        }),
        (w.timers = []),
        (w.fx.tick = function () {
            var e,
                t = 0,
                n = w.timers;
            for (Je = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || w.fx.stop(), (Je = void 0);
        }),
        (w.fx.timer = function (e) {
            w.timers.push(e), w.fx.start();
        }),
        (w.fx.interval = 13),
        (w.fx.start = function () {
            Ze || ((Ze = !0), nt());
        }),
        (w.fx.stop = function () {
            Ze = null;
        }),
        (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (w.fn.delay = function (t, n) {
            return (
                (t = (w.fx && w.fx.speeds[t]) || t),
                (n = n || "fx"),
                this.queue(n, function (n, r) {
                    var i = e.setTimeout(n, t);
                    r.stop = function () {
                        e.clearTimeout(i);
                    };
                })
            );
        }),
        (function () {
            var e = r.createElement("input"),
                t = r.createElement("select").appendChild(r.createElement("option"));
            (e.type = "checkbox"), (h.checkOn = "" !== e.value), (h.optSelected = t.selected), ((e = r.createElement("input")).value = "t"), (e.type = "radio"), (h.radioValue = "t" === e.value);
        })();
    var at,
        ut = w.expr.attrHandle;
    w.fn.extend({
        attr: function (e, t) {
            return $(this, w.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
            return this.each(function () {
                w.removeAttr(this, e);
            });
        },
    }),
        w.extend({
            attr: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return void 0 === e.getAttribute
                        ? w.prop(e, t, n)
                        : ((1 === o && w.isXMLDoc(e)) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? at : void 0)),
                          void 0 !== n
                              ? null === n
                                  ? void w.removeAttr(e, t)
                                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                                  ? r
                                  : (e.setAttribute(t, n + ""), n)
                              : i && "get" in i && null !== (r = i.get(e, t))
                              ? r
                              : null == (r = w.find.attr(e, t))
                              ? void 0
                              : r);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!h.radioValue && "radio" === t && S(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t;
                        }
                    },
                },
            },
            removeAttr: function (e, t) {
                var n,
                    r = 0,
                    i = t && t.match(N);
                if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
            },
        }),
        (at = {
            set: function (e, t, n) {
                return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = ut[t] || w.find.attr;
            ut[t] = function (e, t, r) {
                var i,
                    o,
                    s = t.toLowerCase();
                return r || ((o = ut[s]), (ut[s] = i), (i = null != n(e, t, r) ? s : null), (ut[s] = o)), i;
            };
        });
    var ct = /^(?:input|select|textarea|button)$/i,
        lt = /^(?:a|area)$/i;
    function dt(e) {
        return (e.match(N) || []).join(" ");
    }
    function ft(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function pt(e) {
        return Array.isArray(e) ? e : ("string" == typeof e && e.match(N)) || [];
    }
    w.fn.extend({
        prop: function (e, t) {
            return $(this, w.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[w.propFix[e] || e];
            });
        },
    }),
        w.extend({
            prop: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && w.isXMLDoc(e)) || ((t = w.propFix[t] || t), (i = w.propHooks[t])),
                        void 0 !== n ? (i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)) : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = w.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : ct.test(e.nodeName) || (lt.test(e.nodeName) && e.href) ? 0 : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        h.optSelected ||
            (w.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                },
            }),
        w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            w.propFix[this.toLowerCase()] = this;
        }),
        w.fn.extend({
            addClass: function (e) {
                var t,
                    n,
                    r,
                    i,
                    o,
                    s,
                    a,
                    u = 0;
                if (m(e))
                    return this.each(function (t) {
                        w(this).addClass(e.call(this, t, ft(this)));
                    });
                if ((t = pt(e)).length)
                    for (; (n = this[u++]); )
                        if (((i = ft(n)), (r = 1 === n.nodeType && " " + dt(i) + " "))) {
                            for (s = 0; (o = t[s++]); ) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                            i !== (a = dt(r)) && n.setAttribute("class", a);
                        }
                return this;
            },
            removeClass: function (e) {
                var t,
                    n,
                    r,
                    i,
                    o,
                    s,
                    a,
                    u = 0;
                if (m(e))
                    return this.each(function (t) {
                        w(this).removeClass(e.call(this, t, ft(this)));
                    });
                if (!arguments.length) return this.attr("class", "");
                if ((t = pt(e)).length)
                    for (; (n = this[u++]); )
                        if (((i = ft(n)), (r = 1 === n.nodeType && " " + dt(i) + " "))) {
                            for (s = 0; (o = t[s++]); ) for (; r.indexOf(" " + o + " ") > -1; ) r = r.replace(" " + o + " ", " ");
                            i !== (a = dt(r)) && n.setAttribute("class", a);
                        }
                return this;
            },
            toggleClass: function (e, t) {
                var n = typeof e,
                    r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r
                    ? t
                        ? this.addClass(e)
                        : this.removeClass(e)
                    : m(e)
                    ? this.each(function (n) {
                          w(this).toggleClass(e.call(this, n, ft(this), t), t);
                      })
                    : this.each(function () {
                          var t, i, o, s;
                          if (r) for (i = 0, o = w(this), s = pt(e); (t = s[i++]); ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                          else (void 0 !== e && "boolean" !== n) || ((t = ft(this)) && G.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : G.get(this, "__className__") || ""));
                      });
            },
            hasClass: function (e) {
                var t,
                    n,
                    r = 0;
                for (t = " " + e + " "; (n = this[r++]); ) if (1 === n.nodeType && (" " + dt(ft(n)) + " ").indexOf(t) > -1) return !0;
                return !1;
            },
        });
    var ht = /\r/g;
    w.fn.extend({
        val: function (e) {
            var t,
                n,
                r,
                i = this[0];
            return arguments.length
                ? ((r = m(e)),
                  this.each(function (n) {
                      var i;
                      1 === this.nodeType &&
                          (null == (i = r ? e.call(this, n, w(this).val()) : e)
                              ? (i = "")
                              : "number" == typeof i
                              ? (i += "")
                              : Array.isArray(i) &&
                                (i = w.map(i, function (e) {
                                    return null == e ? "" : e + "";
                                })),
                          ((t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value")) || (this.value = i));
                  }))
                : i
                ? (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value"))
                    ? n
                    : "string" == typeof (n = i.value)
                    ? n.replace(ht, "")
                    : null == n
                    ? ""
                    : n
                : void 0;
        },
    }),
        w.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = w.find.attr(e, "value");
                        return null != t ? t : dt(w.text(e));
                    },
                },
                select: {
                    get: function (e) {
                        var t,
                            n,
                            r,
                            i = e.options,
                            o = e.selectedIndex,
                            s = "select-one" === e.type,
                            a = s ? null : [],
                            u = s ? o + 1 : i.length;
                        for (r = o < 0 ? u : s ? o : 0; r < u; r++)
                            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))) {
                                if (((t = w(n).val()), s)) return t;
                                a.push(t);
                            }
                        return a;
                    },
                    set: function (e, t) {
                        for (var n, r, i = e.options, o = w.makeArray(t), s = i.length; s--; ) ((r = i[s]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), o;
                    },
                },
            },
        }),
        w.each(["radio", "checkbox"], function () {
            (w.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return (e.checked = w.inArray(w(e).val(), t) > -1);
                },
            }),
                h.checkOn ||
                    (w.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value") ? "on" : e.value;
                    });
        }),
        (h.focusin = "onfocusin" in e);
    var mt = /^(?:focusinfocus|focusoutblur)$/,
        gt = function (e) {
            e.stopPropagation();
        };
    w.extend(w.event, {
        trigger: function (t, n, i, o) {
            var s,
                a,
                u,
                c,
                l,
                f,
                p,
                h,
                v = [i || r],
                y = d.call(t, "type") ? t.type : t,
                b = d.call(t, "namespace") ? t.namespace.split(".") : [];
            if (
                ((a = h = u = i = i || r),
                3 !== i.nodeType &&
                    8 !== i.nodeType &&
                    !mt.test(y + w.event.triggered) &&
                    (y.indexOf(".") > -1 && ((y = (b = y.split(".")).shift()), b.sort()),
                    (l = y.indexOf(":") < 0 && "on" + y),
                    ((t = t[w.expando] ? t : new w.Event(y, "object" == typeof t && t)).isTrigger = o ? 2 : 3),
                    (t.namespace = b.join(".")),
                    (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (t.result = void 0),
                    t.target || (t.target = i),
                    (n = null == n ? [t] : w.makeArray(n, [t])),
                    (p = w.event.special[y] || {}),
                    o || !p.trigger || !1 !== p.trigger.apply(i, n)))
            ) {
                if (!o && !p.noBubble && !g(i)) {
                    for (c = p.delegateType || y, mt.test(c + y) || (a = a.parentNode); a; a = a.parentNode) v.push(a), (u = a);
                    u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e);
                }
                for (s = 0; (a = v[s++]) && !t.isPropagationStopped(); )
                    (h = a),
                        (t.type = s > 1 ? c : p.bindType || y),
                        (f = (G.get(a, "events") || {})[t.type] && G.get(a, "handle")) && f.apply(a, n),
                        (f = l && a[l]) && f.apply && Q(a) && ((t.result = f.apply(a, n)), !1 === t.result && t.preventDefault());
                return (
                    (t.type = y),
                    o ||
                        t.isDefaultPrevented() ||
                        (p._default && !1 !== p._default.apply(v.pop(), n)) ||
                        !Q(i) ||
                        (l &&
                            m(i[y]) &&
                            !g(i) &&
                            ((u = i[l]) && (i[l] = null),
                            (w.event.triggered = y),
                            t.isPropagationStopped() && h.addEventListener(y, gt),
                            i[y](),
                            t.isPropagationStopped() && h.removeEventListener(y, gt),
                            (w.event.triggered = void 0),
                            u && (i[l] = u))),
                    t.result
                );
            }
        },
        simulate: function (e, t, n) {
            var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
            w.event.trigger(r, null, t);
        },
    }),
        w.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    w.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return w.event.trigger(e, t, n, !0);
            },
        }),
        h.focusin ||
            w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                    w.event.simulate(t, e.target, w.event.fix(e));
                };
                w.event.special[t] = {
                    setup: function () {
                        var r = this.ownerDocument || this,
                            i = G.access(r, t);
                        i || r.addEventListener(e, n, !0), G.access(r, t, (i || 0) + 1);
                    },
                    teardown: function () {
                        var r = this.ownerDocument || this,
                            i = G.access(r, t) - 1;
                        i ? G.access(r, t, i) : (r.removeEventListener(e, n, !0), G.remove(r, t));
                    },
                };
            });
    var vt = e.location,
        yt = Date.now(),
        bt = /\?/;
    w.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (e) {
            n = void 0;
        }
        return (n && !n.getElementsByTagName("parsererror").length) || w.error("Invalid XML: " + t), n;
    };
    var wt = /\[\]$/,
        xt = /\r?\n/g,
        Ct = /^(?:submit|button|image|reset|file)$/i,
        _t = /^(?:input|select|textarea|keygen)/i;
    function Et(e, t, n, r) {
        var i;
        if (Array.isArray(t))
            w.each(t, function (t, i) {
                n || wt.test(e) ? r(e, i) : Et(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
            });
        else if (n || "object" !== b(t)) r(e, t);
        else for (i in t) Et(e + "[" + i + "]", t[i], n, r);
    }
    (w.param = function (e, t) {
        var n,
            r = [],
            i = function (e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
            };
        if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
            w.each(e, function () {
                i(this.name, this.value);
            });
        else for (n in e) Et(n, e[n], t, i);
        return r.join("&");
    }),
        w.fn.extend({
            serialize: function () {
                return w.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = w.prop(this, "elements");
                    return e ? w.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return this.name && !w(this).is(":disabled") && _t.test(this.nodeName) && !Ct.test(e) && (this.checked || !ce.test(e));
                    })
                    .map(function (e, t) {
                        var n = w(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                            ? w.map(n, function (e) {
                                  return { name: t.name, value: e.replace(xt, "\r\n") };
                              })
                            : { name: t.name, value: n.replace(xt, "\r\n") };
                    })
                    .get();
            },
        });
    var Tt = /%20/g,
        kt = /#.*$/,
        St = /([?&])_=[^&]*/,
        At = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Lt = /^(?:GET|HEAD)$/,
        qt = /^\/\//,
        Pt = {},
        Dt = {},
        It = "*/".concat("*"),
        jt = r.createElement("a");
    function Nt(e) {
        return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var r,
                i = 0,
                o = t.toLowerCase().match(N) || [];
            if (m(n)) for (; (r = o[i++]); ) "+" === r[0] ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        };
    }
    function Ot(e, t, n, r) {
        var i = {},
            o = e === Dt;
        function s(a) {
            var u;
            return (
                (i[a] = !0),
                w.each(e[a] || [], function (e, a) {
                    var c = a(t, n, r);
                    return "string" != typeof c || o || i[c] ? (o ? !(u = c) : void 0) : (t.dataTypes.unshift(c), s(c), !1);
                }),
                u
            );
        }
        return s(t.dataTypes[0]) || (!i["*"] && s("*"));
    }
    function Rt(e, t) {
        var n,
            r,
            i = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r), e;
    }
    (jt.href = vt.href),
        w.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: vt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(vt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: { "*": It, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
                return t ? Rt(Rt(e, w.ajaxSettings), t) : Rt(w.ajaxSettings, e);
            },
            ajaxPrefilter: Nt(Pt),
            ajaxTransport: Nt(Dt),
            ajax: function (t, n) {
                "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
                var i,
                    o,
                    s,
                    a,
                    u,
                    c,
                    l,
                    d,
                    f,
                    p,
                    h = w.ajaxSetup({}, n),
                    m = h.context || h,
                    g = h.context && (m.nodeType || m.jquery) ? w(m) : w.event,
                    v = w.Deferred(),
                    y = w.Callbacks("once memory"),
                    b = h.statusCode || {},
                    x = {},
                    C = {},
                    _ = "canceled",
                    E = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (l) {
                                if (!a) for (a = {}; (t = At.exec(s)); ) a[t[1].toLowerCase()] = t[2];
                                t = a[e.toLowerCase()];
                            }
                            return null == t ? null : t;
                        },
                        getAllResponseHeaders: function () {
                            return l ? s : null;
                        },
                        setRequestHeader: function (e, t) {
                            return null == l && ((e = C[e.toLowerCase()] = C[e.toLowerCase()] || e), (x[e] = t)), this;
                        },
                        overrideMimeType: function (e) {
                            return null == l && (h.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (l) E.always(e[E.status]);
                                else for (t in e) b[t] = [b[t], e[t]];
                            return this;
                        },
                        abort: function (e) {
                            var t = e || _;
                            return i && i.abort(t), T(0, t), this;
                        },
                    };
                if (
                    (v.promise(E),
                    (h.url = ((t || h.url || vt.href) + "").replace(qt, vt.protocol + "//")),
                    (h.type = n.method || n.type || h.method || h.type),
                    (h.dataTypes = (h.dataType || "*").toLowerCase().match(N) || [""]),
                    null == h.crossDomain)
                ) {
                    c = r.createElement("a");
                    try {
                        (c.href = h.url), (c.href = c.href), (h.crossDomain = jt.protocol + "//" + jt.host != c.protocol + "//" + c.host);
                    } catch (e) {
                        h.crossDomain = !0;
                    }
                }
                if ((h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), Ot(Pt, h, n, E), l)) return E;
                for (f in ((d = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"),
                (h.type = h.type.toUpperCase()),
                (h.hasContent = !Lt.test(h.type)),
                (o = h.url.replace(kt, "")),
                h.hasContent
                    ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Tt, "+"))
                    : ((p = h.url.slice(o.length)),
                      h.data && (h.processData || "string" == typeof h.data) && ((o += (bt.test(o) ? "&" : "?") + h.data), delete h.data),
                      !1 === h.cache && ((o = o.replace(St, "$1")), (p = (bt.test(o) ? "&" : "?") + "_=" + yt++ + p)),
                      (h.url = o + p)),
                h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])),
                ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) && E.setRequestHeader("Content-Type", h.contentType),
                E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + It + "; q=0.01" : "") : h.accepts["*"]),
                h.headers))
                    E.setRequestHeader(f, h.headers[f]);
                if (h.beforeSend && (!1 === h.beforeSend.call(m, E, h) || l)) return E.abort();
                if (((_ = "abort"), y.add(h.complete), E.done(h.success), E.fail(h.error), (i = Ot(Dt, h, n, E)))) {
                    if (((E.readyState = 1), d && g.trigger("ajaxSend", [E, h]), l)) return E;
                    h.async &&
                        h.timeout > 0 &&
                        (u = e.setTimeout(function () {
                            E.abort("timeout");
                        }, h.timeout));
                    try {
                        (l = !1), i.send(x, T);
                    } catch (e) {
                        if (l) throw e;
                        T(-1, e);
                    }
                } else T(-1, "No Transport");
                function T(t, n, r, a) {
                    var c,
                        f,
                        p,
                        x,
                        C,
                        _ = n;
                    l ||
                        ((l = !0),
                        u && e.clearTimeout(u),
                        (i = void 0),
                        (s = a || ""),
                        (E.readyState = t > 0 ? 4 : 0),
                        (c = (t >= 200 && t < 300) || 304 === t),
                        r &&
                            (x = (function (e, t, n) {
                                for (var r, i, o, s, a = e.contents, u = e.dataTypes; "*" === u[0]; ) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (r)
                                    for (i in a)
                                        if (a[i] && a[i].test(r)) {
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
                                        s || (s = i);
                                    }
                                    o = o || s;
                                }
                                if (o) return o !== u[0] && u.unshift(o), n[o];
                            })(h, E, r)),
                        (x = (function (e, t, n, r) {
                            var i,
                                o,
                                s,
                                a,
                                u,
                                c = {},
                                l = e.dataTypes.slice();
                            if (l[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                            for (o = l.shift(); o; )
                                if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (u = o), (o = l.shift())))
                                    if ("*" === o) o = u;
                                    else if ("*" !== u && u !== o) {
                                        if (!(s = c[u + " " + o] || c["* " + o]))
                                            for (i in c)
                                                if ((a = i.split(" "))[1] === o && (s = c[u + " " + a[0]] || c["* " + a[0]])) {
                                                    !0 === s ? (s = c[i]) : !0 !== c[i] && ((o = a[0]), l.unshift(a[1]));
                                                    break;
                                                }
                                        if (!0 !== s)
                                            if (s && e.throws) t = s(t);
                                            else
                                                try {
                                                    t = s(t);
                                                } catch (e) {
                                                    return { state: "parsererror", error: s ? e : "No conversion from " + u + " to " + o };
                                                }
                                    }
                            return { state: "success", data: t };
                        })(h, x, E, c)),
                        c
                            ? (h.ifModified && ((C = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = C), (C = E.getResponseHeader("etag")) && (w.etag[o] = C)),
                              204 === t || "HEAD" === h.type ? (_ = "nocontent") : 304 === t ? (_ = "notmodified") : ((_ = x.state), (f = x.data), (c = !(p = x.error))))
                            : ((p = _), (!t && _) || ((_ = "error"), t < 0 && (t = 0))),
                        (E.status = t),
                        (E.statusText = (n || _) + ""),
                        c ? v.resolveWith(m, [f, _, E]) : v.rejectWith(m, [E, _, p]),
                        E.statusCode(b),
                        (b = void 0),
                        d && g.trigger(c ? "ajaxSuccess" : "ajaxError", [E, h, c ? f : p]),
                        y.fireWith(m, [E, _]),
                        d && (g.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")));
                }
                return E;
            },
            getJSON: function (e, t, n) {
                return w.get(e, t, n, "json");
            },
            getScript: function (e, t) {
                return w.get(e, void 0, t, "script");
            },
        }),
        w.each(["get", "post"], function (e, t) {
            w[t] = function (e, n, r, i) {
                return m(n) && ((i = i || r), (r = n), (n = void 0)), w.ajax(w.extend({ url: e, type: t, dataType: i, data: n, success: r }, w.isPlainObject(e) && e));
            };
        }),
        (w._evalUrl = function (e) {
            return w.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
        }),
        w.fn.extend({
            wrapAll: function (e) {
                var t;
                return (
                    this[0] &&
                        (m(e) && (e = e.call(this[0])),
                        (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                            .map(function () {
                                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (e) {
                return m(e)
                    ? this.each(function (t) {
                          w(this).wrapInner(e.call(this, t));
                      })
                    : this.each(function () {
                          var t = w(this),
                              n = t.contents();
                          n.length ? n.wrapAll(e) : t.append(e);
                      });
            },
            wrap: function (e) {
                var t = m(e);
                return this.each(function (n) {
                    w(this).wrapAll(t ? e.call(this, n) : e);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not("body")
                        .each(function () {
                            w(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (w.expr.pseudos.hidden = function (e) {
            return !w.expr.pseudos.visible(e);
        }),
        (w.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (w.ajaxSettings.xhr = function () {
            try {
                return new e.XMLHttpRequest();
            } catch (e) {}
        });
    var Mt = { 0: 200, 1223: 204 },
        zt = w.ajaxSettings.xhr();
    (h.cors = !!zt && "withCredentials" in zt),
        (h.ajax = zt = !!zt),
        w.ajaxTransport(function (t) {
            var n, r;
            if (h.cors || (zt && !t.crossDomain))
                return {
                    send: function (i, o) {
                        var s,
                            a = t.xhr();
                        if ((a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (s in t.xhrFields) a[s] = t.xhrFields[s];
                        for (s in (t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i)) a.setRequestHeader(s, i[s]);
                        (n = function (e) {
                            return function () {
                                n &&
                                    ((n = r = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                                    "abort" === e
                                        ? a.abort()
                                        : "error" === e
                                        ? "number" != typeof a.status
                                            ? o(0, "error")
                                            : o(a.status, a.statusText)
                                        : o(Mt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders()));
                            };
                        }),
                            (a.onload = n()),
                            (r = a.onerror = a.ontimeout = n("error")),
                            void 0 !== a.onabort
                                ? (a.onabort = r)
                                : (a.onreadystatechange = function () {
                                      4 === a.readyState &&
                                          e.setTimeout(function () {
                                              n && r();
                                          });
                                  }),
                            (n = n("abort"));
                        try {
                            a.send((t.hasContent && t.data) || null);
                        } catch (e) {
                            if (n) throw e;
                        }
                    },
                    abort: function () {
                        n && n();
                    },
                };
        }),
        w.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        w.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (e) {
                    return w.globalEval(e), e;
                },
            },
        }),
        w.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
        }),
        w.ajaxTransport("script", function (e) {
            var t, n;
            if (e.crossDomain)
                return {
                    send: function (i, o) {
                        (t = w("<script>")
                            .prop({ charset: e.scriptCharset, src: e.url })
                            .on(
                                "load error",
                                (n = function (e) {
                                    t.remove(), (n = null), e && o("error" === e.type ? 404 : 200, e.type);
                                })
                            )),
                            r.head.appendChild(t[0]);
                    },
                    abort: function () {
                        n && n();
                    },
                };
        });
    var Bt = [],
        Ft = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Bt.pop() || w.expando + "_" + yt++;
            return (this[e] = !0), e;
        },
    }),
        w.ajaxPrefilter("json jsonp", function (t, n, r) {
            var i,
                o,
                s,
                a = !1 !== t.jsonp && (Ft.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ft.test(t.data) && "data");
            if (a || "jsonp" === t.dataTypes[0])
                return (
                    (i = t.jsonpCallback = m(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                    a ? (t[a] = t[a].replace(Ft, "$1" + i)) : !1 !== t.jsonp && (t.url += (bt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                    (t.converters["script json"] = function () {
                        return s || w.error(i + " was not called"), s[0];
                    }),
                    (t.dataTypes[0] = "json"),
                    (o = e[i]),
                    (e[i] = function () {
                        s = arguments;
                    }),
                    r.always(function () {
                        void 0 === o ? w(e).removeProp(i) : (e[i] = o), t[i] && ((t.jsonpCallback = n.jsonpCallback), Bt.push(i)), s && m(o) && o(s[0]), (s = o = void 0);
                    }),
                    "script"
                );
        }),
        (h.createHTMLDocument = (function () {
            var e = r.implementation.createHTMLDocument("").body;
            return (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length;
        })()),
        (w.parseHTML = function (e, t, n) {
            return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t || (h.createHTMLDocument ? (((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href), t.head.appendChild(i)) : (t = r)),
                  (s = !n && []),
                  (o = A.exec(e)) ? [t.createElement(o[1])] : ((o = ge([e], t, s)), s && s.length && w(s).remove(), w.merge([], o.childNodes)));
            var i, o, s;
        }),
        (w.fn.load = function (e, t, n) {
            var r,
                i,
                o,
                s = this,
                a = e.indexOf(" ");
            return (
                a > -1 && ((r = dt(e.slice(a))), (e = e.slice(0, a))),
                m(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
                s.length > 0 &&
                    w
                        .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                        .done(function (e) {
                            (o = arguments), s.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
                        })
                        .always(
                            n &&
                                function (e, t) {
                                    s.each(function () {
                                        n.apply(this, o || [e.responseText, t, e]);
                                    });
                                }
                        ),
                this
            );
        }),
        w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            w.fn[t] = function (e) {
                return this.on(t, e);
            };
        }),
        (w.expr.pseudos.animated = function (e) {
            return w.grep(w.timers, function (t) {
                return e === t.elem;
            }).length;
        }),
        (w.offset = {
            setOffset: function (e, t, n) {
                var r,
                    i,
                    o,
                    s,
                    a,
                    u,
                    c = w.css(e, "position"),
                    l = w(e),
                    d = {};
                "static" === c && (e.style.position = "relative"),
                    (a = l.offset()),
                    (o = w.css(e, "top")),
                    (u = w.css(e, "left")),
                    ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1 ? ((s = (r = l.position()).top), (i = r.left)) : ((s = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                    m(t) && (t = t.call(e, n, w.extend({}, a))),
                    null != t.top && (d.top = t.top - a.top + s),
                    null != t.left && (d.left = t.left - a.left + i),
                    "using" in t ? t.using.call(e, d) : l.css(d);
            },
        }),
        w.fn.extend({
            offset: function (e) {
                if (arguments.length)
                    return void 0 === e
                        ? this
                        : this.each(function (t) {
                              w.offset.setOffset(this, e, t);
                          });
                var t,
                    n,
                    r = this[0];
                return r ? (r.getClientRects().length ? ((t = r.getBoundingClientRect()), (n = r.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n,
                        r = this[0],
                        i = { top: 0, left: 0 };
                    if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position"); ) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && (((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0)), (i.left += w.css(e, "borderLeftWidth", !0)));
                    }
                    return { top: t.top - i.top - w.css(r, "marginTop", !0), left: t.left - i.left - w.css(r, "marginLeft", !0) };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && "static" === w.css(e, "position"); ) e = e.offsetParent;
                    return e || ve;
                });
            },
        }),
        w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
            var n = "pageYOffset" === t;
            w.fn[e] = function (r) {
                return $(
                    this,
                    function (e, r, i) {
                        var o;
                        if ((g(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === i)) return o ? o[t] : e[r];
                        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : (e[r] = i);
                    },
                    e,
                    r,
                    arguments.length
                );
            };
        }),
        w.each(["top", "left"], function (e, t) {
            w.cssHooks[t] = Be(h.pixelPosition, function (e, n) {
                if (n) return (n = ze(e, t)), Oe.test(n) ? w(e).position()[t] + "px" : n;
            });
        }),
        w.each({ Height: "height", Width: "width" }, function (e, t) {
            w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
                w.fn[r] = function (i, o) {
                    var s = arguments.length && (n || "boolean" != typeof i),
                        a = n || (!0 === i || !0 === o ? "margin" : "border");
                    return $(
                        this,
                        function (t, n, i) {
                            var o;
                            return g(t)
                                ? 0 === r.indexOf("outer")
                                    ? t["inner" + e]
                                    : t.document.documentElement["client" + e]
                                : 9 === t.nodeType
                                ? ((o = t.documentElement), Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e]))
                                : void 0 === i
                                ? w.css(t, n, a)
                                : w.style(t, n, i, a);
                        },
                        t,
                        s ? i : void 0,
                        s
                    );
                };
            });
        }),
        w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
            w.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
            };
        }),
        w.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        w.fn.extend({
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
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            },
        }),
        (w.proxy = function (e, t) {
            var n, r, i;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
                return (
                    (r = o.call(arguments, 2)),
                    ((i = function () {
                        return e.apply(t || this, r.concat(o.call(arguments)));
                    }).guid = e.guid = e.guid || w.guid++),
                    i
                );
        }),
        (w.holdReady = function (e) {
            e ? w.readyWait++ : w.ready(!0);
        }),
        (w.isArray = Array.isArray),
        (w.parseJSON = JSON.parse),
        (w.nodeName = S),
        (w.isFunction = m),
        (w.isWindow = g),
        (w.camelCase = V),
        (w.type = b),
        (w.now = Date.now),
        (w.isNumeric = function (e) {
            var t = w.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        }),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return w;
            });
    var $t = e.jQuery,
        Ht = e.$;
    return (
        (w.noConflict = function (t) {
            return e.$ === w && (e.$ = Ht), t && e.jQuery === w && (e.jQuery = $t), w;
        }),
        t || (e.jQuery = e.$ = w),
        w
    );
}),
    (function (e, t, n, r) {
        "use strict";
        function i(t, n) {
            (this.name = "dropdown"),
                (this.defaults = u),
                (this.objects = o),
                (this.elem = t),
                (this.$elem = e(t)),
                (this.elems = {}),
                (this.opt = e.extend(!0, {}, u, n, e(t).data("dropdown"))),
                (this._tpl = s),
                (this.tpl = e.extend(!0, {}, this._tpl, this.opt.templates)),
                (this._cls = a),
                (this.cls = this._mergeClasses()),
                (this.inst = {
                    uid: this.id(),
                    menu: null,
                    menuMain: null,
                    menus: {},
                    items: {},
                    value: null,
                    selected: null,
                    focused: null,
                    open: !1,
                    opening: !1,
                    closing: !1,
                    animating: !1,
                    resizing: !1,
                    resetting: !1,
                    resizeTimeout: null,
                    above: !1,
                }),
                this.init();
        }
        e.extend(i.prototype, {
            init: function () {
                var t = this;
                t._supportsTransitions() || (t.opt.speed = 0),
                    t._build(),
                    t._populate(),
                    t._bind(),
                    t.opt.keyboard && t._bindKeyboard(),
                    t.opt.multi && ((t.inst.selected = []), (t.inst.value = [])),
                    e.isEmptyObject(t.inst.items) ||
                        e.each(t.inst.items, function (e) {
                            (e = t.getItem(e)).selected && !e.children.items && t.select(e);
                        }),
                    t.$elem.trigger(t.name + ".init", t);
            },
            select: function (e) {
                var n = this,
                    r = n.opt,
                    i = n.inst;
                if (!(e = n.getItem(e))) return !1;
                if (r.nested && e.children.menu) return n.openMenu(e.children.menu);
                if (r.multi && e.selected) return n.deselect(e);
                var o = !1;
                if (
                    (i.selected && (r.multi || (o = n.getItem(i.selected)), o.uid == e.uid && (o = !1)),
                    n._beforeSelect(e, o),
                    (e.url && !r.selectLinks) ||
                        (o && !r.multi && n.deselect(o),
                        (e.selected = !0),
                        e.elem.addClass(n.cls.selected),
                        r.multi ? (-1 === i.selected.indexOf(e.uid) && i.selected.push(e.uid), -1 === i.value.indexOf(e.value) && i.value.push(e.value)) : ((i.selected = e.uid), (i.value = e.value)),
                        n.selectParent(e)),
                    r.autoToggle && (!e.url || r.autoToggleLink || null === r.autoToggleLink))
                )
                    if (i.selected && i.selected.length) {
                        var s = e.text;
                        r.autoToggleHTML && e.html && (s = e.html), r.multi ? n.toggleTextMulti(s) : n.toggleText(s);
                    } else r.multi ? n.toggleTextMulti() : n.toggleText();
                return (
                    (r.autoClose || (!r.multi && r.autoCloseLink)) &&
                        (r.multi ? r.autoCloseMax && r.maxSelect && i.selected.length === r.maxSelect && n.close() : (!e.url || r.autoCloseLink || (r.autoClose && null == r.autoCloseLink)) && n.close()),
                    n._afterSelect(e, o),
                    !e.url || !r.followLinks || ((t.location.href = e.url), !0)
                );
            },
            selectValue: function (t, n) {
                var r = this,
                    i = r.inst;
                for (var o in (t || (t = []), Array.isArray(t) || (t = [t]), n && r.deselect(), i.items))
                    e.each(t, function (e, t) {
                        r.value(o) === t && r.select(o);
                    });
                return !0;
            },
            deselect: function (e) {
                var t = this,
                    n = t.opt,
                    r = t.inst,
                    i = t.cls;
                if (!e) {
                    if (!r.selected || !r.selected.length) return !1;
                    if (n.multi) for (var o in r.selected) t.deselect(o);
                    else t.deselect(r.selected);
                    return !0;
                }
                if (!(e = t.getItem(e))) return !1;
                if ((t._beforeDeselect(e), (e.selected = !1), e.elem.removeClass(i.selected), r.selected))
                    if (n.multi) {
                        var s = r.selected.indexOf(e.uid);
                        -1 !== s && r.selected.splice(s, 1),
                            (r.value = jQuery.grep(r.value, function (t) {
                                return t != e.value;
                            }));
                    } else (r.selected = null), r.value === e.value && (r.value = null);
                return n.autoToggle && (n.multi ? t.toggleTextMulti(e.text) : t.toggleText()), t.selectParent(e), t._afterDeselect(e), !0;
            },
            selectParent: function (t) {
                var n = this;
                if ((n.opt, n.inst, !t.parent)) return !1;
                var r = n.getItem(t.parent);
                if (!r) return !1;
                if (t.selected) (r.selected = !0), r.elem && r.elem.addClass(n.cls.selected);
                else {
                    var i = 0;
                    e.each(r.children.items, function (e, t) {
                        var r = n.getItem(t);
                        r && r.selected && i++;
                    }),
                        i ? ((r.selected = !0), r.elem && r.elem.addClass(n.cls.selected)) : ((r.selected = !1), r.elem && r.elem.removeClass(n.cls.selected));
                }
                return r.parent && n.selectParent(r), !0;
            },
            open: function (e) {
                var t = this,
                    n = t.opt,
                    r = t.inst,
                    i = t.elems;
                if (r.open || r.opening) return !1;
                if (e) return t.openMenu(e);
                t._beforeOpen();
                var o = { opacity: 0, y: -i.toggleButton.outerHeight() / 2 };
                return (
                    r.above && (o.y = i.toggleButton.outerHeight() / 2),
                    i.menuWrapper
                        .show()
                        .css(o)
                        .transition({ opacity: 1, y: 0 }, n.speed, n.easing, function () {
                            t._afterOpen();
                        }),
                    !0
                );
            },
            close: function (e) {
                var t = this,
                    n = t.opt,
                    r = t.inst,
                    i = t.elems;
                if (!r.open || r.closing) return !1;
                if (e) return t.closeMenu(e);
                t._beforeClose();
                var o = { opacity: 0, y: -i.toggleButton.outerHeight() / 2 };
                return (
                    t.inst.above && (o.y = i.toggleButton.outerHeight() / 2),
                    i.menuWrapper
                        .show()
                        .css({ opacity: 1, y: 0 })
                        .transition(o, n.speed, n.easing, function () {
                            i.menuWrapper.hide(), t._afterClose();
                        }),
                    !0
                );
            },
            openMenu: function (e, t) {
                var n = this,
                    r = n.opt,
                    i = n.inst;
                if (i.opening) return !1;
                if (!(e = n.getMenu(e))) return !1;
                var o = !!i.menu && n.getMenu();
                if (o && o.uid == e.uid) return !1;
                var s = t ? 0 : r.speed;
                n._beforeOpenMenu(e, o);
                e.elem.show().css({ x: "100%" }), o && o.elem.css({ x: 0 });
                return (
                    o && o.elem.transition({ x: "-100%" }, s),
                    e.elem.transition({ x: 0 }, s, r.easing, function () {
                        n._afterOpenMenu(e, o);
                    }),
                    !0
                );
            },
            closeMenu: function (e, t) {
                var n = this,
                    r = n.opt;
                if (n.inst.closing) return !1;
                if (!(e = n.getMenu(e))) return !1;
                var i = !!e.parent && n.getMenu(e.parent);
                if (i && i.uid == e.uid) return !1;
                if (!i) return n.close();
                var o = t ? 0 : n.opt.speed;
                n._beforeCloseMenu(e, i);
                e.elem.css({ x: 0 }), i.elem.show().css({ x: "-100%" });
                i.elem.transition({ x: 0 }, o),
                    e.elem.transition({ x: "100%" }, o, r.easing, function () {
                        return n._afterCloseMenu(e, i), !0;
                    });
            },
            resize: function (n, r) {
                var i = this,
                    o = i.opt,
                    s = i.inst,
                    a = i.elems.menuWrapper;
                if (s.resizing) return !1;
                if (!(n = i.getMenu(n))) return !1;
                var u = e.extend(!0, {}, i.objects.resize);
                i._beforeResize(n, u),
                    (u.viewport.width = e(t).width()),
                    (u.viewport.height = e(t).height()),
                    s.open || a.show().css({ opacity: 0 }),
                    (u.wrapper.width = a.outerWidth(!0)),
                    (u.wrapper.height = a.outerHeight(!0)),
                    (u.wrapper.diff.width = u.wrapper.width - a.width()),
                    (u.wrapper.diff.height = u.wrapper.height - a.height()),
                    n.elem.show().css({ opacity: 0, position: "fixed", height: "", width: "" });
                var c = n.elem.children("." + i._cls.menuList).eq(0);
                c.css({ height: "", width: "" }),
                    (u.list.width = c.width()),
                    (u.list.height = c.height()),
                    (u.menu.width = n.elem.outerWidth(!0)),
                    (u.menu.height = n.elem.outerHeight(!0)),
                    (u = i._collisionValues(n, u)),
                    c.css({ height: u.collision.list.height }),
                    i.inst.open || a.css({ display: "", opacity: "" }),
                    n.elem.css({ display: "", opacity: "", position: "" });
                var l = r ? 0 : i.opt.speed;
                return (
                    a.transition({ height: u.collision.menu.height }, l, o.easing, function () {
                        return i._afterResize(n, u), u;
                    }),
                    u
                );
            },
            focus: function (e) {
                var t = this,
                    n = (t.opt, t.inst),
                    r = t.cls;
                n.focused && (t.getItem(n.focused).elem.removeClass(r.focused), (n.focused = null));
                (e = t.getItem(e)) && (e.elem.addClass(r.focused), e.elem.children("." + r.core.menuLink).focus(), (n.focused = e.uid));
            },
            reset: function (e) {
                var t = this,
                    n = (t.inst, t.opt, t.elem, t.cls, t.getMenu("main")),
                    r = t.getMenu();
                t._beforeReset(e, n, r), e && t.deselect(), t._afterReset(e, n, r);
            },
            selected: function (e) {
                var t = this.inst.selected;
                if (!t || !t.length) return !1;
                if (!e) return t;
                for (var n in (Array.isArray(t) || (t = [t]), (e = {}), t)) e[n] = this.getItem(n);
                return e;
            },
            value: function (e) {
                return e ? ((e = this.getItem(e)) ? e.value : null) : this.inst.value;
            },
            text: function (e) {
                return !!e && ((e = this.getItem(e)) ? e.text : null);
            },
            getMenu: function (e) {
                var t = this,
                    n = t.inst,
                    r = t.inst,
                    i = t.getItem(e);
                if (
                    (i && (e = i.menu),
                    e || (e = n.menu ? n.menu : n.menuMain),
                    "string" == typeof e && ("main" == e ? (e = n.menus[n.menuMain]) : n.menus[e] ? (e = n.menus[e]) : r.dropdown.find("#" + e) && (e = r.dropdown.find("#" + e))),
                    !e)
                )
                    return !1;
                if (e.jquery) {
                    var o = e.data("dropdown-uid");
                    return !(!o || !n.menus[o]) && n.menus[o];
                }
                return "object" == typeof e && e;
            },
            addMenu: function (t) {
                var n = this,
                    r = n.opt,
                    i = n.inst,
                    o = n.cls;
                if (((t = e.extend(!0, {}, n.objects.menu, t)).uid || (t.uid = n.id()), (i.menus[t.uid] = t), i.menuMain || (i.menuMain = t.uid), !t.title && ((t.title = r.titleText), r.autoTitle && t.parent))) {
                    var s = n.getItem(t.parent);
                    s && (t.title = s.text);
                }
                return (t.elem = n._buildMenu(t)), i.menuMain == t.uid && t.elem.addClass(o.menuMain), t.items && n.addItems(t.items, t.uid), t;
            },
            getItem: function (e) {
                var t = this.inst,
                    n = this.elems;
                if (("string" == typeof e && (t.items[e] ? (e = t.items[e]) : n.dropdown.find("#" + e) && (e = n.dropdown.find("#" + e))), !e)) return !1;
                if (e.jquery) {
                    var r = e.data("dropdown-uid");
                    return !(!r || !t.items[r]) && t.items[r];
                }
                return "object" == typeof e && e;
            },
            addItems: function (t, n) {
                var r = this;
                return (
                    !!Array.isArray(t) &&
                    void e.each(t, function (e, t) {
                        r.addItem(t, n);
                    })
                );
            },
            addItem: function (t, n) {
                var r = this,
                    i = r.opt,
                    o = r.inst;
                if (
                    ((n = i.nested ? r.getMenu(n) : r.getMenu()),
                    ((t = e.extend(!0, {}, r.objects.item, t)).id = t.uid ? t.uid : r.id()),
                    (t.menu = t.menu ? t.menu : n.uid),
                    null == t.divider && t.label && (t.divider = "top"),
                    (o.items[t.uid] = t),
                    t.children.items && t.children.items.length)
                ) {
                    if (i.nested) {
                        if (!t.children.menu) {
                            var s = r.addMenu({ parent: t.uid, title: t.children.title });
                            t.children.menu = s.uid;
                        }
                    } else t.children.menu = n;
                    if (t.value || t.url || i.selectParents) {
                        var a = e.extend(!0, {}, r.objects.item, { uid: !1, menu: !1, parent: t.uid, children: {} });
                        t.children.items.unshift(a);
                    } else i.nested || t.children.items[0].label || (t.children.items[0].label = t.text);
                    var u = r.addItems(t.children.items, t.children.menu);
                    (t.children.items = []),
                        e.each(u, function (e, n) {
                            (o.items[n.uid].parent = t.uid), t.children.items.push(n.uid), n.selected && (t.selected = !0);
                        }),
                        i.nested && (t.elem = r._buildItem(t));
                } else t.elem = r._buildItem(t);
                return t;
            },
            toggleText: function (e) {
                var t = this.elems,
                    n = t.toggleButton,
                    r = t.toggleText;
                return n.data("dropdown-text") || n.data("dropdown-text", r.html()), e ? (r.html(e), !0) : (r.html(n.data("dropdown-text")), !0);
            },
            toggleTextMulti: function (e) {
                var t = this.elems,
                    n = t.toggleButton,
                    r = t.toggleText;
                if ((n.data("dropdown-text") || n.data("dropdown-text", r.html()), !e)) return n.data("dropdown-text-multi", []), r.html(n.data("dropdown-text")), !0;
                var i = n.data("dropdown-text-multi"),
                    o = (i = i || []).indexOf(e);
                -1 !== o ? i.splice(o, 1) : i.push(e);
                var s = n.data("dropdown-text");
                i.length && (s = i.join(", ")), n.data("dropdown-text-multi", i), r.html(s);
            },
            id: function () {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                    var t = (16 * Math.random()) | 0;
                    return ("x" == e ? t : (3 & t) | 8).toString(16);
                });
            },
            _collisionValues: function (t, r) {
                var i = this,
                    o = i.opt,
                    s = i.inst,
                    a = i.elems,
                    u = e.extend(!0, {}, i.objects.collision, r);
                (u.scrolled = { x: e(n).scrollLeft(), y: e(n).scrollTop() }),
                    (u.position = { x: "left", y: s.above ? "top" : "bottom" }),
                    (u.offset = { x: a.dropdown.offset().left, y: a.dropdown.offset().top }),
                    (u.space = {
                        top: u.offset.y - u.scrolled.y,
                        bottom: r.viewport.height + u.scrolled.y - u.offset.y - a.toggleButton.outerHeight(!0),
                        left: u.offset.x - u.scrolled.x,
                        right: r.viewport.width + u.scrolled.x - u.offset.x,
                    }),
                    o.margin &&
                        e.each(u.space, function (e, t) {
                            u.space[e] = t - o.margin;
                        });
                var c = "fixed" == a.menuWrapper.css("position");
                if (((u.height = r.menu.height + r.wrapper.diff.height), c)) r.menu.height > r.wrapper.height && (u.menu.height = r.wrapper.height - r.wrapper.diff.height);
                else if (o.collision) {
                    var l = 0;
                    s.above
                        ? u.height > u.space.top && ((l = u.space.top), u.space.bottom > u.space.top && ((u.position.y = "bottom"), (l = u.space.bottom)))
                        : u.height > u.space.bottom && ((l = u.space.bottom), u.space.top > u.space.bottom && ((u.position.y = "top"), (l = u.space.top))),
                        l && u.height > l && (u.menu.height = l - u.wrapper.diff.height);
                }
                return (u.list.height = u.menu.height - (r.menu.height - r.list.height)), (r.collision = u), r;
            },
            _bind: function () {
                var r = this,
                    i = r.inst,
                    o = r.opt,
                    s = r.elems;
                s.dropdown.on("click", "." + r._cls.menuItem, function (t) {
                    t.preventDefault(), r.select(e(this).data("dropdown-uid"));
                }),
                    s.toggleButton.on("click", function (e) {
                        e.preventDefault(), i.open ? r.close() : r.open();
                    }),
                    s.dropdown.on("dropdown.open", function () {
                        r.open();
                    }),
                    s.dropdown.on("dropdown.close", function () {
                        r.close();
                    }),
                    s.dropdown.on("click", "." + r._cls.closeButton, function (e) {
                        e.preventDefault(), r.close();
                    }),
                    r.$elem.on("change", function () {
                        r.selectValue(r.$elem.val(), !0);
                    }),
                    s.dropdown.on("click", "." + r._cls.backButton, function (e) {
                        e.preventDefault(), r.closeMenu();
                    }),
                    o.autoClose &&
                        e(n).on("mousedown", function (t) {
                            var n = e(t.target).parents("." + r._cls.dropdown);
                            (n.length && n.data("uid") == i.uid) || r.close();
                        }),
                    o.autoResize &&
                        e(t).resize(function () {
                            i.resizeTimeout && clearTimeout(i.resizeTimeout),
                                (i.resizeTimeout = setTimeout(function () {
                                    r._autoResize();
                                }, o.autoResize));
                        });
            },
            _bindKeyboard: function () {
                var t = this,
                    r = t.inst,
                    i = (t.opt, t.elems),
                    o = t.cls;
                e(n).on("keypress", function (e) {
                    var n = r.focused ? t.getItem(r.focused) : null;
                    if (r.open || i.toggleButton.is(":focus"))
                        switch (e.keyCode ? e.keyCode : e.which) {
                            case 9:
                                i.toggleButton.is(":focus") && r.open && (e.preventDefault(), t.close());
                                break;
                            case 13:
                                if ((e.preventDefault(), r.open && n)) {
                                    if (n.children.menu) {
                                        var s = (a = t.getMenu(n.children.menu)).elem.find("." + o.core.menuItem);
                                        return a.elem.find("." + o.core.selected).length && (s = a.elem.find("." + o.core.selected)), t.focus(s.eq(0)), void t.openMenu(n.children.menu);
                                    }
                                    return void t.select(n);
                                }
                                if (i.toggleButton.is(":focus")) return void (r.open ? t.close() : t.open());
                                break;
                            case 27:
                                if (r.open) return void t.close();
                                break;
                            case 38:
                                if (!r.open) return;
                                if ((e.preventDefault(), !n)) return;
                                if (!n.elem.prev().length) return t.focus(!1), void i.toggleButton.focus();
                                t.focus(n.elem.prev());
                                break;
                            case 40:
                                e.preventDefault();
                                var a = t.getMenu();
                                if (i.toggleButton.is(":focus")) {
                                    r.open || t.open();
                                    s = a.elem.find("." + o.core.menuItem);
                                    return void t.focus(s.eq(0));
                                }
                                if (!n) {
                                    s = a.elem.find("." + o.core.menuItem);
                                    return a.elem.find("." + o.core.selected).length && (s = a.elem.find("." + o.core.selected)).next().length && (s = s.next()), void t.focus(s.eq(0));
                                }
                                n.elem.next().length && t.focus(n.elem.next());
                                break;
                            case 37:
                                if (!r.open) return;
                                if (r.menuMain == r.menu) return;
                                e.preventDefault();
                                a = t.getMenu();
                                var u = t.getItem(a.parent);
                                t.closeMenu(a), t.focus(u);
                                break;
                            case 39:
                                if (!r.open || !n) return;
                                if (!n.children.menu) return;
                                e.preventDefault();
                                s = (a = t.getMenu(n.children.menu)).elem.find("." + o.core.menuItem);
                                a.elem.find("." + o.core.selected).length && (s = a.elem.find("." + o.core.selected)), t.focus(s.eq(0)), t.openMenu(n.children.menu);
                        }
                });
            },
            _build: function () {
                var t = this,
                    n = t.opt,
                    r = t.elems,
                    i = t.cls;
                e.each(t.tpl, function (t, n) {
                    (r[t] = e(n)), i[t] && r[t].addClass(i[t]);
                }),
                    r.overlay.appendTo(r.dropdown),
                    r.menuWrapper.appendTo(r.dropdown),
                    r.menuContainer.appendTo(r.menuWrapper),
                    r.toggleButton.prependTo(r.dropdown),
                    r.toggleText.appendTo(r.toggleButton),
                    r.toggleIcon.appendTo(r.toggleButton),
                    r.toggleText.text(n.toggleText),
                    r.dropdown.data({ uid: t.inst.uid, target: t.$elem }),
                    t.$elem.hide().after(r.dropdown),
                    t.addMenu(),
                    t.openMenu(!1, !0);
            },
            _buildMenu: function (t) {
                var n = this,
                    r = {},
                    i = n.opt,
                    o = n.tpl,
                    s = n.cls;
                e.each(["menuObject", "menuHeader", "menuTitle", "menuList", "menuMask", "closeButton", "closeText", "closeIcon", "backButton", "backText", "backIcon"], function (t, n) {
                    o[n] && ((r[n] = e(o[n])), s[n] && r[n].addClass(s[n]));
                });
                var a = r.menuObject.clone();
                return (
                    r.menuHeader.appendTo(a),
                    r.menuTitle.appendTo(r.menuHeader),
                    r.closeButton.appendTo(r.menuHeader),
                    r.closeIcon.appendTo(r.closeButton),
                    r.closeText.appendTo(r.closeButton),
                    r.backButton.prependTo(r.menuHeader),
                    r.backIcon.appendTo(r.backButton),
                    r.backText.appendTo(r.backButton),
                    r.menuList.appendTo(a),
                    r.menuMask.appendTo(a),
                    a.data("dropdown-uid", t.uid),
                    r.menuTitle.text(t.title),
                    r.closeText.text(i.closeText),
                    r.backText.text(i.backText),
                    n.elems.menuContainer.append(a),
                    a
                );
            },
            _buildItem: function (t) {
                var n = this,
                    r = n.tpl,
                    i = n.cls,
                    o = n.getMenu(t.menu);
                if (!o) return !1;
                var s = o.elem.children("." + n._cls.menuList),
                    a = {};
                e.each(["menuItem", "menuLink", "menuText", "menuDivider", "menuLabel"], function (t, n) {
                    r[n] && ((a[n] = e(r[n])), i[n] && a[n].addClass(i[n]));
                });
                var u = a.menuItem.clone();
                t.children.items && u.addClass(i.menuParent), u.data("dropdown-uid", t.uid);
                if (t.html) u.children("a").length ? ((a.menuLink = u.children("a")), u.children("a").addClass(i.menuLink), !0) : a.menuLink.appendTo(u), a.menuLink.html(t.html);
                else {
                    var c = a.menuText.clone();
                    a.menuLink.appendTo(u), c.appendTo(a.menuLink), c.html(t.text);
                }
                if ((t.url && a.menuLink.attr("href", t.url), ("both" != t.divider && "top" != t.divider) || a.menuDivider.clone().appendTo(s), t.label)) {
                    var l = a.menuLabel.clone(),
                        d = a.menuText.clone();
                    d.appendTo(l), d.html(t.label), s.append(l);
                }
                return s.append(u), ("both" != t.divider && "bottom" != t.divider) || a.menuDivider.clone().appendTo(s), u;
            },
            _populate: function () {
                var e = this;
                if (!e.$elem.children().length) return !1;
                var t = e.$elem.prop("tagName");
                return "SELECT" == t ? (e.$elem.attr("multiple") && (e.opt.multi = !0), e._populateSelect()) : ("UL" == t || "OL" == t) && e._populateList();
            },
            _populateSelect: function (t) {
                var n = this,
                    r = !!t;
                if ((t || (t = n.$elem), !t.length)) return !1;
                null == n.opt.multi && t.is("[multiple]") && (n.opt.multi = !0);
                n = this;
                var i = [];
                return (
                    t.children().each(function () {
                        var t = e(this),
                            r = e.extend(!0, {}, n.objects.item, { uid: n.id() }, e(this).data("dropdown"));
                        if ((t.data("dropdown-uid") && (r.uid = t.data("dropdown-uid")), "OPTGROUP" == t.prop("tagName"))) {
                            r.text = t.prop("label");
                            var o = n._populateSelect(t);
                            (r.children.items = []),
                                e.each(o, function (t, n) {
                                    r.children.items.push(e.extend({}, n, { parent: r.uid }));
                                });
                        } else (r.text = t.text()), (r.value = t.attr("value")), r.value || "0" === r.value || (r.value = r.text), t.is(":selected") && (r.selected = !0);
                        i.push(r);
                    }),
                    r ? i : void n.addItems(i)
                );
            },
            _populateList: function (t) {
                var n = this,
                    r = !!t;
                if ((t || (t = n.$elem), !t.length)) return !1;
                n = this;
                var i = [];
                return (
                    t.children().each(function () {
                        var t = e(this),
                            r = e.extend(!0, {}, n.objects.item, { uid: n.id() }, e(this).data("dropdown"));
                        if ((t.data("dropdown-uid") && (r.uid = t.data("dropdown-uid")), t.children("ul, ol").length)) {
                            (r.text = t.data("dropdown-text")),
                                r.text ||
                                    (t.children("a").length ? (r.text = t.children("a").eq(0).text()) : t.children("span").length && (r.text = t.children("span").eq(0).text()),
                                    r.text ||
                                        (r.text = t
                                            .contents()
                                            .filter(function () {
                                                return 1 !== this.nodeType;
                                            })
                                            .text()));
                            var o = n._populateList(t.children("ul, ol"));
                            (r.children.items = []),
                                e.each(o, function (t, n) {
                                    r.children.items.push(e.extend({}, n, { parent: r.uid }));
                                });
                        } else
                            (r.text = t.text()),
                                (r.value = t.data("dropdown-value")),
                                t.data("dropdown-text") && (r.text = t.data("dropdown-text")),
                                r.value || "0" === r.value || (r.value = r.text),
                                t.children().length && ((r.html = t.html()), t.children("a").length && (r.url = t.children("a").eq(0).attr("href"))),
                                t.data("dropdown-url") && (r.url = t.data("dropdown-url")),
                                (t.data("dropdown-selected") || t.hasClass(n._cls.selected)) && (r.selected = !0);
                        i.push(r);
                    }),
                    r ? i : void n.addItems(i)
                );
            },
            _beforeOpen: function () {
                var e = this,
                    t = e.opt,
                    n = e.inst,
                    r = e.elems;
                (n.opening = !0), (n.animating = !0), r.dropdown.addClass(e.cls.opening), r.dropdown.addClass(e.cls.animating);
                var i = e.resize(!1, !0);
                t.collision
                    ? "top" == i.collision.position.y
                        ? (r.dropdown.removeClass(e.cls.below), r.dropdown.addClass(e.cls.above), (e.inst.above = !0))
                        : (r.dropdown.removeClass(e.cls.above), r.dropdown.addClass(e.cls.below), (e.inst.above = !1))
                    : r.dropdown.hasClass("." + e._cls.below) || r.dropdown.hasClass("." + e._cls.above) || r.dropdown.addClass(e.cls.below),
                    t.scrollSelected && e._scrollSelected(!1, i),
                    e.$elem.trigger(e.name + ".open:before", this);
            },
            _afterOpen: function () {
                var e = this,
                    t = e.inst,
                    n = e.elems,
                    r = e.cls;
                (t.open = !0), (t.opening = !1), (t.animating = !1), n.dropdown.addClass(r.open), n.dropdown.removeClass(r.opening), n.dropdown.removeClass(r.animating), e.$elem.trigger(e.name + ".open", this);
            },
            _beforeClose: function () {
                var e = this,
                    t = e.inst,
                    n = e.elems,
                    r = e.cls;
                (t.closing = !0), (t.animating = !0), n.dropdown.addClass(r.animating), n.dropdown.addClass(r.closing), e.focus(!1), e.$elem.trigger(e.name + ".close:before", this);
            },
            _afterClose: function () {
                var e = this,
                    t = e.opt,
                    n = e.inst,
                    r = e.elems,
                    i = e.cls;
                (n.open = !1),
                    (n.closing = !1),
                    (n.animating = !1),
                    (n.above = !1),
                    r.dropdown.removeClass(i.animating),
                    r.dropdown.removeClass(i.closing),
                    r.dropdown.removeClass(i.open),
                    t.closeReset && e.reset(),
                    e.$elem.trigger(e.name + ".close", this);
            },
            _beforeOpenMenu: function (e, t) {
                var n = this,
                    r = n.opt,
                    i = n.inst,
                    o = n.elems,
                    s = n.cls;
                (i.opening = e.uid), (i.animating = !0), o.dropdown.addClass(s.animating), e.elem.addClass(s.animating), t && t.elem.addClass(s.animating);
                var a = n.resize(e.uid);
                r.scrollSelected && n._scrollSelected(e.uid, a), n.$elem.trigger(n.name + ".open.menu:before", [e, t, this]);
            },
            _afterOpenMenu: function (e, t) {
                var n = this,
                    r = n.inst,
                    i = n.elems,
                    o = n.cls;
                (r.opening = !1),
                    (r.animating = !1),
                    (r.menu = e.uid),
                    i.dropdown.removeClass(o.animating),
                    e.elem.addClass(o.menuOpen),
                    e.elem.removeClass(o.animating),
                    t && (t.elem.removeClass(o.menuOpen), t.elem.removeClass(o.animating)),
                    n.$elem.trigger(n.name + ".open.menu", [e, t, this]);
            },
            _beforeCloseMenu: function (e, t) {
                var n = this,
                    r = n.inst,
                    i = n.elems,
                    o = n.cls;
                (r.closing = e.uid), (r.animating = !0), i.dropdown.addClass(o.animating), e.elem.addClass(o.animating), t && (t.elem.addClass(o.animating), n.resize(t.uid)), n.$elem.trigger(n.name + ".close.menu:before", [e, t, this]);
            },
            _afterCloseMenu: function (e, t) {
                var n = this,
                    r = n.inst,
                    i = n.elems,
                    o = n.cls;
                (r.closing = !1),
                    (r.animating = !1),
                    (r.menu = !!t && t.uid),
                    i.dropdown.removeClass(o.animating),
                    e.elem.removeClass(o.menuOpen),
                    e.elem.removeClass(o.animating),
                    t && (t.elem.addClass(o.menuOpen), t.elem.removeClass(o.animating)),
                    n.$elem.trigger(n.name + ".close.menu", [e, t, this]);
            },
            _beforeResize: function (e) {
                var t = this,
                    n = t.inst,
                    r = t.elems,
                    i = t.cls;
                (n.resizing = !0), r.dropdown.addClass(i.resizing), t.$elem.trigger(t.name + ".resize:before", [e, this]);
            },
            _afterResize: function (e) {
                var t = this,
                    n = t.inst,
                    r = t.elems,
                    i = t.cls;
                (n.resizing = !1), r.dropdown.removeClass(i.resizing), t.$elem.trigger(t.name + ".resize", [e, this]);
            },
            _beforeSelect: function (e, t) {
                this.$elem.trigger(this.name + ".select:before", [e, t, this]);
            },
            _afterSelect: function (e, t) {
                var n = this;
                "SELECT" == n.$elem.prop("tagName") && n.$elem.val(n.inst.value), n.$elem.trigger(n.name + ".select", [e, t, this]);
            },
            _beforeDeselect: function (e) {
                this.$elem.trigger(this.name + ".deselect:before", [e, this]);
            },
            _afterDeselect: function (e) {
                var t = this;
                "SELECT" == t.$elem.prop("tagName") && t.$elem.val(t.inst.value), t.$elem.trigger(t.name + ".deselect", [e, this]);
            },
            _beforeReset: function (e, t, n) {
                var r = this;
                (r.inst.resetting = !0), r.$elem.trigger(r.name + ".reset:before", [e, t, n, r]);
            },
            _afterReset: function (e, t, n) {
                var r = this,
                    i = r.inst,
                    o = r.elems,
                    s = r.cls;
                (i.resetting = !1),
                    (i.opening = !1),
                    (i.closing = !1),
                    (i.animating = !1),
                    (n.open = !1),
                    (t.open = !0),
                    (i.menu = t.uid),
                    t.elem.removeClass(s.menuOpening),
                    n.elem.removeClass(s.menuClosing),
                    n.elem.removeClass(s.menuOpen),
                    t.elem.addClass(s.menuOpen),
                    o.menuWrapper.css({ x: 0, y: 0 }),
                    n.elem.css({ x: "-100%" }),
                    t.elem.css({ x: 0 }),
                    o.menuWrapper.css({ height: "" }),
                    n.elem
                        .find("." + s.core.menuList)
                        .eq(0)
                        .css({ height: "" }),
                    r.$elem.trigger(r.name + ".reset", [e, t, n, r]);
            },
            _autoResize: function () {
                this.inst.open && this.resize(!1, !0);
            },
            _scrollSelected: function (e, t) {
                var n = this,
                    r = n.inst,
                    i = (n.opt, n.elems),
                    o = n.cls;
                if ((e = n.getMenu(e))) {
                    r.open || i.menuWrapper.show().css({ opacity: 0 }), e.open || e.elem.show().css({ opacity: 0 });
                    var s = e.elem.children("." + o.core.menuList).eq(0),
                        a = 0,
                        u = e.elem.find("." + o.core.selected).eq(0);
                    u.length && (((a = u.position().top) < 0 || a > t.collision.list.height) && (a += s.scrollTop()), (a -= t.collision.menu.height - t.collision.list.height)),
                        s.animate({ scrollTop: a }, 1),
                        r.open || i.menuWrapper.css({ display: "", opacity: "" }),
                        e.open || e.elem.css({ display: "", opacity: "" });
                }
            },
            _mergeClasses: function () {
                var t = this.opt.classes,
                    n = e.extend(!0, {}, this._cls),
                    r = {};
                return (
                    e.each(n, function (e, n) {
                        r.core || (r.core = {}), (r.core[e] = n);
                        var i = n;
                        t[e] && ((i += " "), (i += t[e])), (r[e] = i);
                    }),
                    r
                );
            },
            _supportsTransitions: function () {
                var e = n.createElement("p").style;
                return "transition" in e || "WebkitTransition" in e || "MozTransition" in e || "msTransition" in e || "OTransition" in e;
            },
        });
        var o = {
                menu: { id: null, uid: null, parent: !1, items: null },
                item: { id: null, uid: null, text: "", value: null, url: null, html: null, menu: !1, parent: !1, label: "", divider: null, children: { menu: !1, title: "", items: !1 }, selected: !1, selectable: !0 },
                resize: { viewport: { width: 0, height: 0 }, wrapper: { width: 0, height: 0, diff: { width: 0, height: 0 } }, menu: { width: 0, height: 0 }, list: { width: 0, height: 0 } },
                collision: { width: 0, height: 0, scrolled: { x: 0, y: 0 }, position: { x: 0, y: 0 }, offset: { x: 0, y: 0 }, space: { top: 0, right: 0, bottom: 0, left: 0 } },
            },
            s = {
                dropdown: "<div />",
                overlay: "<div />",
                menuWrapper: "<nav />",
                menuContainer: "<div />",
                menuObject: "<div />",
                menuMask: "<div />",
                menuHeader: "<header />",
                menuTitle: "<h5 />",
                menuList: '<ul role="menu" />',
                menuItem: "<li />",
                menuLink: '<a href="#" role="menuitem" />',
                menuText: "<span />",
                menuDivider: '<li role="presentation" />',
                menuLabel: '<li role="presentation" />',
                toggleButton: '<a href="#" />',
                toggleText: "<div />",
                toggleIcon: "<i />",
                closeButton: '<a href="#" />',
                closeText: "<span />",
                closeIcon: "<i />",
                backButton: '<a href="#" />',
                backText: "<span />",
                backIcon: "<i />",
            },
            a = {
                dropdown: "dropdown",
                overlay: "dropdown-overlay",
                menuMain: "dropdown-menu-main",
                menuOpen: "dropdown-menu-open",
                menuWrapper: "dropdown-menu-wrapper",
                menuContainer: "dropdown-menu-container",
                menuObject: "dropdown-menu",
                menuMask: "dropdown-mask",
                menuHeader: "dropdown-header",
                menuTitle: "dropdown-title",
                menuList: "dropdown-list",
                menuItem: "dropdown-item",
                menuLink: "dropdown-link",
                menuText: "dropdown-text",
                menuParent: "dropdown-parent",
                menuDivider: "dropdown-divider",
                menuLabel: "dropdown-label",
                toggleButton: "dropdown-toggle",
                toggleText: "dropdown-text",
                toggleIcon: "dropdown-icon",
                closeButton: "dropdown-close",
                closeText: "dropdown-text",
                closeIcon: "dropdown-icon",
                backButton: "dropdown-back",
                backText: "dropdown-text",
                backIcon: "dropdown-icon",
                open: "dropdown-open",
                opening: "dropdown-opening",
                closing: "dropdown-closing",
                focused: "dropdown-focused",
                animating: "dropdown-animating",
                resizing: "dropdown-resizing",
                selected: "dropdown-selected",
                selectedParent: "dropdown-parent-selected",
                above: "dropdown-above",
                below: "dropdown-below",
            },
            u = {
                speed: 200,
                easing: "easeInOutCirc",
                margin: 20,
                collision: !0,
                autoResize: 200,
                scrollSelected: !0,
                keyboard: !0,
                nested: !0,
                selectParents: !1,
                multi: !1,
                maxSelect: !1,
                minSelect: !1,
                selectLinks: !1,
                followLinks: !0,
                closeText: "Close",
                autoClose: !0,
                autoCloseMax: !0,
                autoCloseLink: !0,
                closeReset: !0,
                backText: "Back",
                toggleText: "Please select",
                autoToggle: !0,
                autoToggleLink: !1,
                autoToggleHTML: !1,
                titleText: "Please select",
                autoTitle: !0,
                classes: {},
                templates: {},
            };
        e.fn.dropdown = function (t) {
            var n,
                o = arguments;
            return t === r || "object" == typeof t
                ? this.each(function () {
                      e.data(this, "plugin.dropdown") || e.data(this, "plugin.dropdown", new i(this, t));
                  })
                : "string" == typeof t && "_" !== t[0] && "init" !== t
                ? (this.each(function () {
                      var r = e.data(this, "plugin.dropdown");
                      r instanceof dropdown && "function" == typeof r[t] && (n = r[t].apply(r, Array.prototype.slice.call(o, 1))), "destroy" === t && e.data(this, "plugin.dropdown", null);
                  }),
                  n !== r ? n : this)
                : void 0;
        };
    })(jQuery, window, document),
    (function (e, t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? (module.exports = t(require("jquery"))) : t(e.jQuery);
    })(this, function (e) {
        e.transit = {
            version: "0.9.12",
            propertyMap: { marginLeft: "margin", marginRight: "margin", marginBottom: "margin", marginTop: "margin", paddingLeft: "padding", paddingRight: "padding", paddingBottom: "padding", paddingTop: "padding" },
            enabled: !0,
            useTransitionEnd: !1,
        };
        var t = document.createElement("div"),
            n = {};
        function r(e) {
            if (e in t.style) return e;
            for (var n = ["Moz", "Webkit", "O", "ms"], r = e.charAt(0).toUpperCase() + e.substr(1), i = 0; i < n.length; ++i) {
                var o = n[i] + r;
                if (o in t.style) return o;
            }
        }
        var i = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
        (n.transition = r("transition")),
            (n.transitionDelay = r("transitionDelay")),
            (n.transform = r("transform")),
            (n.transformOrigin = r("transformOrigin")),
            (n.filter = r("Filter")),
            (n.transform3d = ((t.style[n.transform] = ""), (t.style[n.transform] = "rotateY(90deg)"), "" !== t.style[n.transform]));
        var o = (n.transitionEnd = { transition: "transitionend", MozTransition: "transitionend", OTransition: "oTransitionEnd", WebkitTransition: "webkitTransitionEnd", msTransition: "MSTransitionEnd" }[n.transition] || null);
        for (var s in n) n.hasOwnProperty(s) && void 0 === e.support[s] && (e.support[s] = n[s]);
        function a(e) {
            return "string" == typeof e && this.parse(e), this;
        }
        function u(e, t, n) {
            !0 === t
                ? e.queue(n)
                : t
                ? e.queue(t, n)
                : e.each(function () {
                      n.call(this);
                  });
        }
        function c(t) {
            var r = [];
            return (
                e.each(t, function (t) {
                    (t = e.camelCase(t)), (t = f((t = e.transit.propertyMap[t] || e.cssProps[t] || t))), n[t] && (t = f(n[t])), -1 === e.inArray(t, r) && r.push(t);
                }),
                r
            );
        }
        function l(t, n, r, i) {
            var o = c(t);
            e.cssEase[r] && (r = e.cssEase[r]);
            var s = h(n) + " " + r;
            parseInt(i, 10) > 0 && (s += " " + h(i));
            var a = [];
            return (
                e.each(o, function (e, t) {
                    a.push(t + " " + s);
                }),
                a.join(", ")
            );
        }
        function d(t, r) {
            r || (e.cssNumber[t] = !0),
                (e.transit.propertyMap[t] = n.transform),
                (e.cssHooks[t] = {
                    get: function (n) {
                        return e(n).css("transit:transform").get(t);
                    },
                    set: function (n, r) {
                        var i = e(n).css("transit:transform");
                        i.setFromString(t, r), e(n).css({ "transit:transform": i });
                    },
                });
        }
        function f(e) {
            return e.replace(/([A-Z])/g, function (e) {
                return "-" + e.toLowerCase();
            });
        }
        function p(e, t) {
            return "string" != typeof e || e.match(/^[\-0-9\.]+$/) ? "" + e + t : e;
        }
        function h(t) {
            var n = t;
            return "string" != typeof n || n.match(/^[\-0-9\.]+/) || (n = e.fx.speeds[n] || e.fx.speeds._default), p(n, "ms");
        }
        return (
            (t = null),
            (e.cssEase = {
                _default: "ease",
                in: "ease-in",
                out: "ease-out",
                "in-out": "ease-in-out",
                snap: "cubic-bezier(0,1,.5,1)",
                easeInCubic: "cubic-bezier(.550,.055,.675,.190)",
                easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
                easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
                easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
                easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
                easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
                easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
                easeOutExpo: "cubic-bezier(.19,1,.22,1)",
                easeInOutExpo: "cubic-bezier(1,0,0,1)",
                easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
                easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
                easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
                easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
                easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
                easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
                easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
                easeOutQuint: "cubic-bezier(.23,1,.32,1)",
                easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
                easeInSine: "cubic-bezier(.47,0,.745,.715)",
                easeOutSine: "cubic-bezier(.39,.575,.565,1)",
                easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
                easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
                easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
                easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)",
            }),
            (e.cssHooks["transit:transform"] = {
                get: function (t) {
                    return e(t).data("transform") || new a();
                },
                set: function (t, r) {
                    var o = r;
                    o instanceof a || (o = new a(o)), "WebkitTransform" !== n.transform || i ? (t.style[n.transform] = o.toString()) : (t.style[n.transform] = o.toString(!0)), e(t).data("transform", o);
                },
            }),
            (e.cssHooks.transform = { set: e.cssHooks["transit:transform"].set }),
            (e.cssHooks.filter = {
                get: function (e) {
                    return e.style[n.filter];
                },
                set: function (e, t) {
                    e.style[n.filter] = t;
                },
            }),
            e.fn.jquery < "1.8" &&
                ((e.cssHooks.transformOrigin = {
                    get: function (e) {
                        return e.style[n.transformOrigin];
                    },
                    set: function (e, t) {
                        e.style[n.transformOrigin] = t;
                    },
                }),
                (e.cssHooks.transition = {
                    get: function (e) {
                        return e.style[n.transition];
                    },
                    set: function (e, t) {
                        e.style[n.transition] = t;
                    },
                })),
            d("scale"),
            d("scaleX"),
            d("scaleY"),
            d("translate"),
            d("rotate"),
            d("rotateX"),
            d("rotateY"),
            d("rotate3d"),
            d("perspective"),
            d("skewX"),
            d("skewY"),
            d("x", !0),
            d("y", !0),
            (a.prototype = {
                setFromString: function (e, t) {
                    var n = "string" == typeof t ? t.split(",") : t.constructor === Array ? t : [t];
                    n.unshift(e), a.prototype.set.apply(this, n);
                },
                set: function (e) {
                    var t = Array.prototype.slice.apply(arguments, [1]);
                    this.setter[e] ? this.setter[e].apply(this, t) : (this[e] = t.join(","));
                },
                get: function (e) {
                    return this.getter[e] ? this.getter[e].apply(this) : this[e] || 0;
                },
                setter: {
                    rotate: function (e) {
                        this.rotate = p(e, "deg");
                    },
                    rotateX: function (e) {
                        this.rotateX = p(e, "deg");
                    },
                    rotateY: function (e) {
                        this.rotateY = p(e, "deg");
                    },
                    scale: function (e, t) {
                        void 0 === t && (t = e), (this.scale = e + "," + t);
                    },
                    skewX: function (e) {
                        this.skewX = p(e, "deg");
                    },
                    skewY: function (e) {
                        this.skewY = p(e, "deg");
                    },
                    perspective: function (e) {
                        this.perspective = p(e, "px");
                    },
                    x: function (e) {
                        this.set("translate", e, null);
                    },
                    y: function (e) {
                        this.set("translate", null, e);
                    },
                    translate: function (e, t) {
                        void 0 === this._translateX && (this._translateX = 0),
                            void 0 === this._translateY && (this._translateY = 0),
                            null != e && (this._translateX = p(e, "px")),
                            null != t && (this._translateY = p(t, "px")),
                            (this.translate = this._translateX + "," + this._translateY);
                    },
                },
                getter: {
                    x: function () {
                        return this._translateX || 0;
                    },
                    y: function () {
                        return this._translateY || 0;
                    },
                    scale: function () {
                        var e = (this.scale || "1,1").split(",");
                        return e[0] && (e[0] = parseFloat(e[0])), e[1] && (e[1] = parseFloat(e[1])), e[0] === e[1] ? e[0] : e;
                    },
                    rotate3d: function () {
                        for (var e = (this.rotate3d || "0,0,0,0deg").split(","), t = 0; t <= 3; ++t) e[t] && (e[t] = parseFloat(e[t]));
                        return e[3] && (e[3] = p(e[3], "deg")), e;
                    },
                },
                parse: function (e) {
                    var t = this;
                    e.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function (e, n, r) {
                        t.setFromString(n, r);
                    });
                },
                toString: function (e) {
                    var t = [];
                    for (var r in this)
                        if (this.hasOwnProperty(r)) {
                            if (!n.transform3d && ("rotateX" === r || "rotateY" === r || "perspective" === r || "transformOrigin" === r)) continue;
                            "_" !== r[0] && (e && "scale" === r ? t.push(r + "3d(" + this[r] + ",1)") : e && "translate" === r ? t.push(r + "3d(" + this[r] + ",0)") : t.push(r + "(" + this[r] + ")"));
                        }
                    return t.join(" ");
                },
            }),
            (e.fn.transition = e.fn.transit = function (t, r, i, s) {
                var a = this,
                    c = 0,
                    d = !0,
                    f = e.extend(!0, {}, t);
                "function" == typeof r && ((s = r), (r = void 0)),
                    "object" == typeof r && ((i = r.easing), (c = r.delay || 0), (d = void 0 === r.queue || r.queue), (s = r.complete), (r = r.duration)),
                    "function" == typeof i && ((s = i), (i = void 0)),
                    void 0 !== f.easing && ((i = f.easing), delete f.easing),
                    void 0 !== f.duration && ((r = f.duration), delete f.duration),
                    void 0 !== f.complete && ((s = f.complete), delete f.complete),
                    void 0 !== f.queue && ((d = f.queue), delete f.queue),
                    void 0 !== f.delay && ((c = f.delay), delete f.delay),
                    void 0 === r && (r = e.fx.speeds._default),
                    void 0 === i && (i = e.cssEase._default),
                    (r = h(r));
                var p = l(f, r, i, c),
                    m = e.transit.enabled && n.transition ? parseInt(r, 10) + parseInt(c, 10) : 0;
                if (0 === m) {
                    return (
                        u(a, d, function (e) {
                            a.css(f), s && s.apply(a), e && e();
                        }),
                        a
                    );
                }
                var g = {},
                    v = function (t) {
                        var r = !1,
                            i = function () {
                                r && a.unbind(o, i),
                                    m > 0 &&
                                        a.each(function () {
                                            this.style[n.transition] = g[this] || null;
                                        }),
                                    "function" == typeof s && s.apply(a),
                                    "function" == typeof t && t();
                            };
                        m > 0 && o && e.transit.useTransitionEnd ? ((r = !0), a.bind(o, i)) : window.setTimeout(i, m),
                            a.each(function () {
                                m > 0 && (this.style[n.transition] = p), e(this).css(f);
                            });
                    };
                return (
                    u(a, d, function (e) {
                        this.offsetWidth, v(e);
                    }),
                    this
                );
            }),
            (e.transit.getTransitionValue = l),
            e
        );
    });
const defaultSettings = { quoteFont: "Source Serif Pro", authorFont: "Source Sans Pro", alwaysShowTopSites: !1, showBackgroundImage: !0, autoRefreshQuote: !1, backgroundColor: "#34495e", fontColor: "#ecf0f1" },
    defaultFonts = ["Arial", "Source Serif Pro", "Source Sans Pro"],
    offlineQuotes = [
        {
            quote: "Worst Case Time Complexity of Counting Sort is when data is skewed and range is large.",
            topics: "Complexity Analysis, Counting Sort, Non-Comparison based sorting",
            url: "https://iq.opengenus.org/time-and-space-complexity-of-counting-sort/",
        },
        {
            quote: "We can sort data in linear time. For example, if we have Integer data (32 bits), we can sort in O(N) time using Counting Sort.",
            topics: "Complexity Analysis, Counting Sort, Non-Comparison based sorting",
            url: "https://iq.opengenus.org/time-and-space-complexity-of-counting-sort/",
        },
        {
            quote: "Idea of Counting Sort is to keep count of each element in a particular index of an array. C[i] = number of elements < i.",
            topics: "Counting Sort, Non-Comparison based sorting",
            url: "https://iq.opengenus.org/time-and-space-complexity-of-counting-sort/",
        },
        { quote: "Did you know the Undo feature in MS Word uses Linked List?", topics: "Linked List, Algorithm Application", url: "https://iq.opengenus.org/singly-linked-list/" },
        {
            quote: "For Big Integer (like 10^9 digits) arithmetic, you cannot use standard data types. The solution is to use Singly Linked List.",
            topics: "Linked List, Algorithm Application",
            url: "https://iq.opengenus.org/singly-linked-list/",
        },
        { quote: "The way to find size of array in C/ C++ is [sizeof(array) / sizeof(data type used)].", topics: "Array, C, C++", url: "https://iq.opengenus.org/length-of-array-in-c/" },
        { quote: "Do you know how to implement Linked List without using NULL?", topics: "Linked List, Implementation", url: "https://iq.opengenus.org/linked-list-with-no-nulls/" },
        { quote: "Searching in Linked List takes linear time. This is improved using Skip List (a Linked List variant).", topics: "Linked List", url: "https://iq.opengenus.org/skip-list/" },
        { quote: "Doubly Linked List has a memory overhead. XOR Linked List improves over it.", topics: "Linked List", url: "https://iq.opengenus.org/xor-linked-list/" },
        { quote: "Can you do Binary Search in Linked List? as we need random access to middle element.", topics: "Linked List", url: "https://iq.opengenus.org/binary-search-in-linked-list/" },
        { quote: "We need 3 pointers (current, previous, next) to reverse a Linked List. Can we do it using 2 pointers?", topics: "Linked List", url: "https://iq.opengenus.org/reverse-linked-list-using-2-pointers-xor/" },
        { quote: "There are 2 main algorithms to detect Cycle in a Linked List. Do you know?", topics: "Cycle Detection Algorithm", url: "https://iq.opengenus.org/cycle-detection-algorithms/" },
        { quote: "Can you detect a loop in Linked List? There are 3 different methods.", topics: "Linked List", url: "https://iq.opengenus.org/detect-loop-in-linked-list/" },
        { quote: "Sorting takes O(N logN). If elements are sorted in absolute values, we can sort in O(N).", topics: "Linked List, Sorting", url: "https://iq.opengenus.org/sort-a-linked-list-already-sorted-on-absolute-values/" },
        { quote: "Memory of Linked List is allocated at run-time.", topics: "Linked List", url: "https://iq.opengenus.org/array-vs-linked-list/" },
        { quote: "Memory of array is allocated at compile-time.", topics: "Array", url: "https://iq.opengenus.org/array-vs-linked-list/" },
        { quote: "Array is an index based data structure like B Tree which are used in Database.", topics: "Array", url: "https://iq.opengenus.org/array-vs-linked-list/" },
        { quote: "The previous and next page feature in browser uses Doubly Linked List.", topics: "Doubly Linked List", url: "https://iq.opengenus.org/doubly-linked-list/" },
        { quote: "To detect loop in Linked List, use two pointers: one moves one step at a time and the other moves two steps at a time.", topics: "Linked List", url: "https://iq.opengenus.org/detect-loop-in-linked-list/" },
        { quote: "To flatten a 2D Linked List where each element is a sorted LL in O(N), we use Merge function of Merge Sort.", topics: "Linked List", url: "https://iq.opengenus.org/flattening-a-linked-list/" },
        { quote: "By just traversing a Circular Linked List, we are not sure of the end but it can be detected in O(N) time.", topics: "Circular Linked List", url: "https://iq.opengenus.org/check-if-linked-list-is-circular/" },
        { quote: "In Singly Linked List (LL), it is not possible to go from last node to first node. The solution is Circular LL.", topics: "Circular Linked List", url: "https://iq.opengenus.org/circular-linked-list/" },
        { quote: "Going from last node to first node takes O(N) in Doubly Linked List (LL) and O(1) in Circular LL.", topics: "Linked List", url: "https://iq.opengenus.org/circular-linked-list/" },
        { quote: "Reversing Linked List (LL) takes O(N) and so does reversing groups of K nodes in LL.", topics: "Linked List", url: "https://iq.opengenus.org/reverse-linked-list-alternative-k-nodes/" },
        { quote: "Deleting element in array takes O(N) not O(1) when we want to keep all element together.", topics: "Array", url: "https://iq.opengenus.org/array-vs-linked-list/" },
        { quote: "Idea of Skip List is to maintain a list of Linked Lists and each skips a certain number of elements to aid fast search.", topics: "Skip List", url: "https://iq.opengenus.org/skip-list/" },
        { quote: "The space complexity of Skip List (a variant of Linked List) is O(N logN).", topics: "Skip List", url: "https://iq.opengenus.org/skip-list/" },
        { quote: "The Time Complexity of Search in Skip List is O(1/p * log_(1/p) (N)) = O(logN) where p is constant.", topics: "Skip List", url: "https://iq.opengenus.org/skip-list/" },
        { quote: "Skip List is a Probabilistic Data Structure. This means searching an element can give wrong answers with a small probability.", topics: "Skip List", url: "https://iq.opengenus.org/skip-list/" },
        { quote: "Worst Case Time Complexity of search in Skip List is O(N) same as Linked List.", topics: "Skip List", url: "https://iq.opengenus.org/skip-list/" },
        { quote: "The basic idea of XOR Linked List is: current_node(link) = addr(previous_node) ⊕ addr(next_node)", topics: "XOR Linked List", url: "https://iq.opengenus.org/xor-linked-list/" },
        { quote: "If nodes are B -> C -> D in XOR Linked List, addr(D) ⊕ link(C) = addr(B).", topics: "XOR Linked List", url: "https://iq.opengenus.org/xor-linked-list/" },
        { quote: "XOR Linked List reduces memory consumption by half compared to Doubly Linked List.", topics: "XOR Linked List", url: "https://iq.opengenus.org/xor-linked-list/" },
        { quote: "XOR Linked List is used in implementing the backward and forward navigation of visited web pages.", topics: "XOR Linked List", url: "https://iq.opengenus.org/xor-linked-list/" },
        { quote: "To find Longest Decreasing Subsequence, DP[i] = Longest Decreasing Subsequence with last element as A[i], is used.", topics: "Dynamic Programming", url: "https://iq.opengenus.org/longest-decreasing-subsequence-dp/" },
        { quote: "To find Longest Decreasing Subsequence, the DP relation is: DP[i] = MAX(DP[j]) + 1 where array[i] < array[j].", topics: "Dynamic Programming", url: "https://iq.opengenus.org/longest-decreasing-subsequence-dp/" },
        { quote: "Finding Longest Decreasing Subsequence using Dynamic Programming takes O(N^2) time.", topics: "Dynamic Programming", url: "https://iq.opengenus.org/longest-decreasing-subsequence-dp/" },
        { quote: "The Brute force approach to find Longest Decreasing Subsequence takes O(N * 2^N) time.", topics: "Dynamic Programming", url: "https://iq.opengenus.org/longest-decreasing-subsequence-dp/" },
        { quote: "Best Time Complexity to find Longest Common Increasing Subsequence and Longest Increasing Subsequence is same.", topics: "Dynamic Programming", url: "https://iq.opengenus.org/longest-common-increasing-subsequence/" },
        { quote: "Finding Longest Common Increasing Subsequence using Dynamic Programming takes O(N^2) time.", topics: "Dynamic Programming", url: "https://iq.opengenus.org/longest-common-increasing-subsequence/" },
        {
            quote: "To find Longest Common Increasing Subsequence, DP[i] = Longest Common Increasing Subsequence with last element as A2[i]",
            topics: "Dynamic Programming",
            url: "https://iq.opengenus.org/longest-common-increasing-subsequence/",
        },
        {
            quote: "To find Longest Common Increasing Subsequence, If A1[i] > A2[j], C = MAX(C, DP[j]) and If A1[i] == A2[j], DP[j] = MAX(C + 1, DP[j])",
            topics: "Dynamic Programming",
            url: "https://iq.opengenus.org/longest-common-increasing-subsequence/",
        },
        { quote: "Time Complexity of Longest Increasing Odd Even Subsequence using DP is O(N^2).", topics: "Dynamic Programming", url: "https://iq.opengenus.org/longest-increasing-odd-even-subsequence/" },
        {
            quote: "To find Longest Increasing Odd Even Subsequence: DP[i] = Longest Increasing Odd Even Subsequence with last element as A[i].",
            topics: "Dynamic Programming",
            url: "https://iq.opengenus.org/longest-increasing-odd-even-subsequence/",
        },
        { quote: "Longest Increasing Odd Even Subsequence: DP[i] = MAX(DP[j] + 1) if arr[i] > arr[j] and (arr[i]+arr[j]) % 2 != 0", topics: "Dynamic Programming", url: "https://iq.opengenus.org/longest-increasing-odd-even-subsequence/" },
        { quote: "Time Complexity of Shortest Common SuperSequence using DP is O(N x M).", topics: "Dynamic Programming", url: "https://iq.opengenus.org/shortest-common-supersequence/" },
        { quote: "To find Shortest Common SuperSequence, DP[i][j] = Shortest Common SuperSequence till S1[i] and S2[j].", topics: "Dynamic Programming", url: "https://iq.opengenus.org/shortest-common-supersequence/" },
        { quote: "Shortest Common SuperSequence: DP[i][j] = 1 + MIN(DP[i - 1][j], DP[i][j - 1])", topics: "Dynamic Programming", url: "https://iq.opengenus.org/shortest-common-supersequence/" },
        {
            quote: "To find Maximum Sum Increasing Subsequence, we use DP[i] = Maximum Sum Increasing Subsequence with a[i] as last element.",
            topics: "Dynamic Programming",
            url: "https://iq.opengenus.org/maximum-sum-increasing-subsequence/",
        },
        { quote: "To find Maximum Sum Increasing Subsequence, DP[i] = MAXIMUM_SUM(DP[j]) + array[i]", topics: "Dynamic Programming", url: "https://iq.opengenus.org/maximum-sum-increasing-subsequence/" },
        { quote: "Time Complexity to find Maximum Sum Increasing Subsequence using DP is O(N^2).", topics: "Dynamic Programming", url: "https://iq.opengenus.org/maximum-sum-increasing-subsequence/" },
        {
            quote: "Longest Alternating Subsequence: DP[i][0] = LAS ending at index i and last element greater than its previous element; DP[i][1] = LAS ending at index i and last element smaller than previous element.",
            topics: "Dynamic Programming",
            url: "https://iq.opengenus.org/longest-alternating-subsequence/",
        },
        { quote: "Longest Alternating Subsequence: DP[i][0] = MAX(DP[i][0], DP[j][1] + 1); DP[i][1] = MAX(DP[i][1], DP[j][0] + 1);", topics: "Dynamic Programming", url: "https://iq.opengenus.org/longest-alternating-subsequence/" },
        { quote: "We can find Longest Alternating Subsequence using DP in O(N) time.", topics: "Dynamic Programming", url: "https://iq.opengenus.org/longest-alternating-subsequence/" },
        { quote: "Using DP, we can find Longest Common Subsequence & Longest Common Substring in O(N x M) time.", topics: "Dynamic Programming", url: "https://iq.opengenus.org/longest-common-subsequence/" },
        { quote: "Longest Common Subsequence: DP[i][j] = max(DP[i][j-1], DP[i-1][j])", topics: "Dynamic Programming", url: "https://iq.opengenus.org/longest-common-subsequence/" },
        { quote: "Longest Common Subsequence (LCS): DP[i][j] is LCS till S1[0 to i] and S2[0 to j]", topics: "Dynamic Programming", url: "https://iq.opengenus.org/longest-common-subsequence/" },
        { quote: "Brute force approach to find Longest Common Substring takes O(N^2 x M) time.", topics: "Dynamic Programming", url: "https://iq.opengenus.org/longest-common-substring/" },
        { quote: "Longest Common Substring: DP[i][j] = length of longest substring in first i characters of S1 and first j characters of S2.", topics: "Dynamic Programming", url: "https://iq.opengenus.org/longest-common-substring/" },
        { quote: "Longest Common Substring: DP[i][j] = DP[i-1][j-1] + 1 if S1[i-1] == S2[j-1]", topics: "Dynamic Programming", url: "https://iq.opengenus.org/longest-common-substring/" },
        { quote: "Longest palindromic substring using DP takes O(N^2) time and using Palindromic Tree takes O(N) time.", topics: "Data Structure", url: "https://iq.opengenus.org/longest-palindromic-substring-using-palindromic-tree/" },
        { quote: "Main idea of Palindromic Tree is a palindrome is a palindrome with a character added before and after it", topics: "Data Structure", url: "https://iq.opengenus.org/longest-palindromic-substring-using-palindromic-tree/" },
        { quote: "Brute force approach to find Longest palindromic substring takes O(N^3) time.", topics: "Dynamic Programming", url: "https://iq.opengenus.org/longest-palindromic-substring-dp/" },
        { quote: "Longest palindromic substring: DP[i][j] = whether the substring from index i to j is a palindrome or not", topics: "Dynamic Programming", url: "https://iq.opengenus.org/longest-palindromic-substring-dp/" },
        { quote: "Longest palindromic substring: DP[i][j] = DP[i+1][j-1] if S[i] == S[j]", topics: "Dynamic Programming", url: "https://iq.opengenus.org/longest-palindromic-substring-dp/" },
        { quote: "Worst case of Selection Sort is when array is already sorted expect the smallest element is swapped with last element.", topics: "Sorting Algorithm", url: "https://iq.opengenus.org/time-complexity-of-selection-sort/" },
        { quote: "Best case of Selection Sort is when the array is already sorted: O(N^2) time with 0 swaps.", topics: "Sorting Algorithm", url: "https://iq.opengenus.org/time-complexity-of-selection-sort/" },
        { quote: "On average, Selection Sort does O(N) swaps.", topics: "Sorting Algorithm", url: "https://iq.opengenus.org/time-complexity-of-selection-sort/" },
        { quote: "Worst Case Time Complexity of Bubble Sort is when array is reverse sort O(N²) comparisons and swaps.", topics: "Sorting Algorithm", url: "https://iq.opengenus.org/time-space-complexity-bubble-sort/" },
        { quote: "Best Case Time Complexity of Bubble Sort is when array is already sort O(N) comparisons and O(1) swaps.", topics: "Sorting Algorithm", url: "https://iq.opengenus.org/time-space-complexity-bubble-sort/" },
        { quote: "Average Case Time Complexity of Bubble Sort involves O(N²) comparisons and O(N²) swaps.", topics: "Sorting Algorithm", url: "https://iq.opengenus.org/time-space-complexity-bubble-sort/" },
        { quote: "Average Case Time Complexity of Bucket Sort is O(n + N²/k + k).", topics: "Sorting Algorithm", url: "https://iq.opengenus.org/time-and-space-complexity-of-bucket-sort/" },
        { quote: "Best Case of Bucket Sort is when number of elements spread across in each bucket is equal.", topics: "Sorting Algorithm", url: "https://iq.opengenus.org/time-and-space-complexity-of-bucket-sort/" },
        { quote: "Best Case of Bucket Sort is when every element is stored in the same bucket.", topics: "Sorting Algorithm", url: "https://iq.opengenus.org/time-and-space-complexity-of-bucket-sort/" },
        { quote: "Minimum Comparisons to find Second Largest Element is N + logN - 2 comparisons", topics: "Complexity Analysis", url: "https://iq.opengenus.org/minimum-comparisons-to-find-second-largest-element/" },
        { quote: "Divide and conquer approach to find 2nd Largest element makes 3n/2 - 2 comparisons (not optimal).", topics: "Complexity Analysis", url: "https://iq.opengenus.org/minimum-comparisons-to-find-second-largest-element/" },
        {
            quote: "If you have found the Largest element, you can find the 2nd Largest element is logN - 1 more comparisons.",
            topics: "Complexity Analysis",
            url: "https://iq.opengenus.org/minimum-comparisons-to-find-second-largest-element/",
        },
        { quote: "Cuckoo filter is a Probabilistic Data Structure used to test whether an element is member of a set or not.", topics: "Probabilistic Data Structure", url: "https://iq.opengenus.org/cuckoo-filter/" },
        { quote: "Cuckoo filter requires (log(1/ϵ) + 2)/α bits of space per inserted key (irrespective of key datatype).", topics: "Probabilistic Data Structure", url: "https://iq.opengenus.org/cuckoo-filter/" },
        { quote: "If false positive rate is 3% and the load factor is 95.5%, then Cuckoo filter takes 7 bits per key.", topics: "Probabilistic Data Structure", url: "https://iq.opengenus.org/cuckoo-filter/" },
        { quote: "Delete, Lookup and Insertion in Cuckoo Filter is done in O(1) time.", topics: "Probabilistic Data Structure", url: "https://iq.opengenus.org/cuckoo-filter/" },
        { quote: "Cuckoo filter uses Cuckoo hashing to resolve collisions in Hash table.", topics: "Probabilistic Data Structure", url: "https://iq.opengenus.org/cuckoo-filter/" },
        { quote: "Bloom Filter is a Probabilistic Data Structure used to determine whether an element is present in a list.", topics: "Probabilistic Data Structure", url: "https://iq.opengenus.org/bloom-filter/" },
        { quote: "Deletion is not possible in the Bloom Filter as it may delete multiple elements at a time.", topics: "Probabilistic Data Structure", url: "https://iq.opengenus.org/bloom-filter/" },
        { quote: "Bloom Filter is used for Weak password detection and Safe browsing in Google Chrome.", topics: "Probabilistic Data Structure", url: "https://iq.opengenus.org/applications-of-bloom-filter/" },
        { quote: "Bloom Filter is used in Cyber security like virus scanning, DDoS prevention and Risky URL detection.", topics: "Probabilistic Data Structure", url: "https://iq.opengenus.org/applications-of-bloom-filter/" },
        { quote: "Merkle Tree is a USPTO patented Data Structure. Hence, you cannot use it in production without permission.", topics: "Data Structure", url: "https://iq.opengenus.org/merkle-tree/" },
        { quote: "Merkle Tree: non-leaf nodes are hash of its child nodes and leaf nodes are hash of a block of data.", topics: "Data Structure", url: "https://iq.opengenus.org/merkle-tree/" },
        { quote: "Merkle Tree is used in Apache Cassandra to detect inconsistencies and Git to store data.", topics: "Data Structure", url: "https://iq.opengenus.org/merkle-tree/" },
        { quote: "Merkle Patricia Trie (variant of Merkle Tree) is used in Ethereum.", topics: "Data Structure", url: "https://iq.opengenus.org/merkle-tree/" },
        { quote: "To convert Binary Tree to its mirror tree in O(N) time, we need a Queue data structure (not a stack).", topics: "Data Structure", url: "https://iq.opengenus.org/binary-tree-into-mirror-tree/" },
        { quote: "We can find Median in Running stream of Integers in O(log N) time using Heap or Ordered Multiset.", topics: "Algorithm", url: "https://iq.opengenus.org/median-of-stream-integers/" },
        { quote: "To find Median in Running stream of Integers, we need 2 Priority Heaps.", topics: "Algorithm", url: "https://iq.opengenus.org/median-of-stream-integers/" },
        { quote: "Inserting element at bottom of Stack takes O(N) time.", topics: "Algorithm", url: "https://iq.opengenus.org/insert-element-at-bottom-of-stack/" },
        { quote: "Brute force approach to find Number of palindromic substrings takes O(N^3) time.", topics: "Algorithm", url: "https://iq.opengenus.org/number-of-palindromic-substrings/" },
        { quote: "Efficient approach to find Number of palindromic substrings takes O(N^2) time.", topics: "Algorithm", url: "https://iq.opengenus.org/number-of-palindromic-substrings/" },
        { quote: "Topological Sort is used in cycle in graph, OS deadlock detection and dependency resolution.", topics: "Algorithm", url: "https://iq.opengenus.org/applications-of-topological-sort/" },
        { quote: "Galactic algorithm is an algorithm that is theoretically optimal but practically slow or unusable.", topics: "Algorithm", url: "https://iq.opengenus.org/galactic-algorithm/" },
        { quote: "Examples of Galactic algorithm: Integer Multiplication by Harvey, Traveling Salesman Problem by Karlin and more.", topics: "Algorithm", url: "https://iq.opengenus.org/galactic-algorithm/" },
        { quote: "Brute Force algorithm to multiple two N-bit numbers takes O(N^2) time.", topics: "Algorithm", url: "https://iq.opengenus.org/evolution-of-integer-multiplication/" },
        { quote: "First improvement over Brute force Multiplication algorithm is Karatsuba algorithm in 1960 with O(N^1.58) time.", topics: "Algorithm", url: "https://iq.opengenus.org/evolution-of-integer-multiplication/" },
        { quote: "Most optimal Multiplication algorithm is by Harvey and van der Hoeven in 2019 with O(N logN) time.", topics: "Algorithm", url: "https://iq.opengenus.org/evolution-of-integer-multiplication/" },
        { quote: "In practice, Toom Cook multiplication algorithm is used for large numbers.", topics: "Algorithm", url: "https://iq.opengenus.org/evolution-of-integer-multiplication/" },
        {
            quote: "The Time Complexity of Counting Sort algorithm is O(N+K) where N is the number of elements in the array and K is the range of the elements.",
            topics: "Complexity Analysis, Counting Sort, Non-Comparison based sorting",
            url: "https://iq.opengenus.org/time-and-space-complexity-of-counting-sort/",
        },
    ],
    fonts = [
        { name: "Abril Fatface", value: "Abril Fatface" },
        { name: "Alegreya", value: "Alegreya" },
        { name: "Alegreya Sans", value: "Alegreya Sans" },
        { name: "Anonymous Pro", value: "Anonymous Pro" },
        { name: "Archivo Narrow", value: "Archivo Narrow" },
        { name: "Arial", value: "Arial" },
        { name: "Arvo", value: "Arvo" },
        { name: "Bitter", value: "Bitter" },
        { name: "Cabin", value: "Cabin" },
        { name: "Cardo", value: "Cardo" },
        { name: "Chivo", value: "Chivo" },
        { name: "Cormorant", value: "Cormorant" },
        { name: "Crimson Text", value: "Crimson Text" },
        { name: "Domine", value: "Domine" },
        { name: "Eczar", value: "Eczar" },
        { name: "Fira Sans", value: "Fira Sans" },
        { name: "Inconsolata", value: "Inconsolata" },
        { name: "Karla", value: "Karla" },
        { name: "Libre Baskerville", value: "Libre Baskerville" },
        { name: "Libre Franklin", value: "Libre Franklin" },
        { name: "Lato", value: "Lato" },
        { name: "Lora", value: "Lora" },
        { name: "Merriweather", value: "Merriweather" },
        { name: "Montserrat", value: "Montserrat" },
        { name: "Neuton", value: "Neuton" },
        { name: "Open Sans", value: "Open Sans" },
        { name: "Playfair Display", value: "Playfair Display" },
        { name: "Poppins", value: "Poppins" },
        { name: "Proza Libre", value: "Proza Libre" },
        { name: "PT Sans", value: "PT Sans" },
        { name: "PT Serif", value: "PT Serif" },
        { name: "Source Sans Pro", value: "Source Sans Pro" },
        { name: "Source Serif Pro", value: "Source Serif Pro" },
        { name: "Space Mono", value: "Space Mono" },
        { name: "Spectral", value: "Spectral" },
        { name: "Raleway", value: "Raleway" },
        { name: "Roboto", value: "Roboto" },
        { name: "Roboto Slab", value: "Roboto Slab" },
        { name: "Rubik", value: "Rubik" },
        { name: "Work Sans", value: "Work Sans" },
    ],
    colors = ["#2ecc71", "#3498db", "#9b59b6", "#f1c40f", "#e67e22", "#e74c3c", "#ecf0f1", "#34495e", "#333333"];
function populateDOM() {
    populateColors(), populateDropdowns();
}
function populateColors() {
    let e = $(".color-row"),
        t = e[0],
        n = e[1];
    for (let e of colors) (t.innerHTML += '<div class="color" data-color="' + e + '" data-context="background-color"></div>'), (n.innerHTML += '<div class="color" data-color="' + e + '" data-context="font-color"></div>');
}
function populateDropdowns() {
    let e = $("select#quote-font-select"),
        t = $("select#author-font-select");
    for (let n of fonts) e.append('<option value="' + n.value + '">' + n.name + "</option>"), t.append('<option value="' + n.value + '">' + n.name + "</option>");
}
function checkSettings() {
    var e = localStorage.getItem("settings");
    e || (storeSettings(defaultSettings), (e = localStorage.getItem("settings"))),
        e &&
            (setFont((e = JSON.parse(e)).quoteFont, "quote"),
            $("#quote-font-select").val(e.quoteFont),
            setFont(e.authorFont, "author"),
            $("#author-font-select").val(e.authorFont),
            document.documentElement.style.setProperty("--background-color", e.backgroundColor),
            $("#background-color-list .color").removeClass("selected"),
            $("#background-color-list .color[data-color='" + e.backgroundColor + "']").addClass("selected"),
            document.documentElement.style.setProperty("--font-color", e.fontColor),
            $("#font-color-list .color").removeClass("selected"),
            $("#font-color-list .color[data-color='" + e.fontColor + "']").addClass("selected"),
            !0 === e.alwaysShowTopSites &&
                ($("#quote-wrapper").toggleClass("top-sites-active"),
                setTimeout(function () {
                    $("#top-sites").toggleClass("active"), $("#grid-btn").toggleClass("active");
                }, 1e3),
                $("#top-sites-toggle").prop("checked", !0)),
            !1 === e.showBackgroundImage
                ? ($("#background-image").removeClass("show"), $("#background-toggle").prop("checked", !1))
                : $("#background-image-loader").on("load", function () {
                      var e = $("#background-image-loader").attr("src");
                      $("#background-image").css("background-image", "url(" + e + ")"), $("#background-image").css("opacity", "0.25");
                  }),
            !0 === e.autoRefreshQuote ? $("#auto-refresh-quote-toggle").prop("checked", !0) : $("#auto-refresh-quote-toggle").prop("checked", !1));
}
function storeSettings(e) {
    (settings = e || new Object({})),
        (quoteFont = settings.quoteFont || $("#quote-font-select option:selected").val()),
        (authorFont = settings.authorFont || $("#author-font-select option:selected").val()),
        (alwaysShowTopSites = settings.alwaysShowTopSites || $("#top-sites-toggle").is(":checked")),
        (showBackgroundImage = settings.showBackgroundImage || $("#background-toggle").is(":checked")),
        (autoRefreshQuote = settings.autoRefreshQuote || $("#auto-refresh-quote-toggle").is(":checked")),
        (backgroundColor = settings.backgroundColor || $("#background-color-list").find(".selected").attr("data-color")),
        (fontColor = settings.fontColor || $("#font-color-list").find(".selected").attr("data-color"));
    var t = { quoteFont: quoteFont, authorFont: authorFont, alwaysShowTopSites: alwaysShowTopSites, showBackgroundImage: showBackgroundImage, autoRefreshQuote: autoRefreshQuote, backgroundColor: backgroundColor, fontColor: fontColor };
    localStorage.setItem("settings", JSON.stringify(t));
}
function fetchQuote() {
    fetchOfflineQuote();
}
function fetchOfflineQuote() {
    var e = offlineQuotes[Math.floor(Math.random() * offlineQuotes.length)];
    $("#quote").html(e.quote),
        $("#author").html(e.topics),
        $("#url").html('<a href="' + e.url + '"> Explore this idea deeper. </a>'),
        setTimeout(function () {
            $("#quote, #author").css("opacity", "1");
        }, 250),
        $("#twitter").attr("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + e.quote + " ") + " &via=OpenGenus"),
        $("#facebook").attr("href", "https://www.facebook.com/sharer.php?quote=" + encodeURIComponent('"' + e.quote + '" – ' + e.topics) + " &via=@OpenGenus");
}
function showBackgroundWhenLoaded() {
    $("#background-image-loader")
        .one("load", function () {
            var e = $("#background-image-loader").attr("src");
            $("#background-image").css("background-image", "url(" + e + ")"), $("#background-image").css("opacity", "0.25");
        })
        .each(function () {
            this.complete && $(this).load();
        });
}
function loadFont(e, t) {
    WebFont.load({
        google: { families: [e] },
        classes: !1,
        active: function () {
            "quote" === t ? document.documentElement.style.setProperty("--quote-font", e) : "author" === t && document.documentElement.style.setProperty("--author-font", e);
        },
    });
}
function setFont(e, t) {
    -1 !== defaultFonts.indexOf(e) ? ("quote" === t ? document.documentElement.style.setProperty("--quote-font", e) : "author" === t && document.documentElement.style.setProperty("--author-font", e)) : loadFont(e, t);
}
function convertAuthorName(e) {
    return e
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[, .]+/g, "");
}
$(document).ready(function () {
    if ((populateDOM(), fetchQuote(), checkSettings(), $("select").dropdown(), $("#auto-refresh-quote-toggle").is(":checked")))
        var e = setInterval(function () {
            $("#quote, #author, #suggestor").css("opacity", "0"), setTimeout(fetchQuote, 300);
        }, 15e3);
    $("#new-quote").click(function () {
        $("#quote, #author, #suggestor").css("opacity", "0"), setTimeout(fetchQuote, 300);
    }),
        $(".popup-toggle").click(function () {
            var e = $(this).attr("data-popup");
            $(".popup-toggle").not(this).removeClass("active"), $(this).toggleClass("active"), $(".popup:not(#" + e + ")").removeClass("active"), $("#" + e).toggleClass("active");
        }),
        $("#grid-btn").click(function () {
            $("#top-sites").toggleClass("active"), $("#grid-btn").toggleClass("active"), $("#quote-wrapper").toggleClass("top-sites-active");
        }),
        $("#facebook").click(function (e) {
            return (
                e.preventDefault(),
                window.open(
                    $(this).attr("href"),
                    "fbShareWindow",
                    "height=450, width=550, top=" + ($(window).height() / 2 - 275) + ", left=" + ($(window).width() / 2 - 225) + ", toolbar=0, location=0, menubar=0, directories=0, scrollbars=0"
                ),
                !1
            );
        }),
        $(".settings-toggle").change(function () {
            var t = $(this).attr("data-context");
            $("#" + t).toggleClass("active"),
                "top-sites" === t && ($("#grid-btn").toggleClass("active"), $("#quote-wrapper").toggleClass("top-sites-active")),
                "background" === t && $("#background-image").toggleClass("show"),
                "auto-refresh" === t &&
                    ($("#auto-refresh-quote-toggle").is(":checked")
                        ? (e = setInterval(function () {
                              $("#quote, #author, #suggestor").css("opacity", "0"), setTimeout(fetchQuote, 300);
                          }, 15e3))
                        : clearInterval(e)),
                storeSettings();
        }),
        $(".color").click(function () {
            var e = $(this).attr("data-context"),
                t = $(this).attr("data-color");
            $("#" + e + "-list .color").removeClass("selected"),
                $(this).addClass("selected"),
                "background-color" === e ? document.documentElement.style.setProperty("--background-color", t) : "font-color" === e && document.documentElement.style.setProperty("--font-color", t),
                storeSettings();
        }),
        $(".dropdown-link").click(function () {
            var e = $(this).parent().parent().parent().parent().parent().parent().prev("select").attr("data-context"),
                t = $(this).find("span").text(),
                n = [];
            "quote" === e ? (setFont(t, e), (n.quoteFont = t)) : "author" === e && (setFont(t, e), (n.authorFont = t)), storeSettings(n);
        }),
        $(".color").each(function () {
            var e = $(this).attr("data-color");
            $(this).css("background", e);
        });
}),
    $(document).mouseup(function (e) {
        var t = $("#info-popup"),
            n = $("#info-btn"),
            r = $("#settings-popup"),
            i = $("#settings-btn");
        t.is(e.target) || n.is(e.target) || 0 !== t.has(e.target).length || 0 !== n.has(e.target).length || (t.removeClass("active"), n.removeClass("active")),
            r.is(e.target) || i.is(e.target) || 0 !== r.has(e.target).length || 0 !== i.has(e.target).length || (r.removeClass("active"), i.removeClass("active"));
    });
var availableLogotypes = [
    "4chan",
    "aftonbladet",
    "allabolag",
    "amazon",
    "apple",
    "baidu",
    "bankofamerica",
    "bbc",
    "behance",
    "bing",
    "blogger",
    "blogspot",
    "bootstrap",
    "buzzfeed",
    "change",
    "chase",
    "cnn",
    "codepen",
    "craigslist",
    "deviantart",
    "diply",
    "dribbble",
    "dropbox",
    "ebay",
    "espn",
    "expressen",
    "facebook",
    "flashback",
    "flickr",
    "flipkart",
    "getbootstrap",
    "github",
    "godaddy",
    "google",
    "hitta",
    "hotstar",
    "hulu",
    "imdb",
    "imgur",
    "indiatimes",
    "instagram",
    "intuit",
    "irctc",
    "jimdo",
    "jsfiddle",
    "kickstarter",
    "last",
    "lifedaily",
    "linkedin",
    "live",
    "microsoft",
    "microsoftonline",
    "msn",
    "mozilla",
    "myspace",
    "nasa",
    "netflix",
    "nih",
    "nytimes",
    "office",
    "ok",
    "one",
    "onlinesbi",
    "outlook",
    "paypal",
    "pinterest",
    "qq",
    "quora",
    "reddit",
    "samsung",
    "sbi",
    "shopify",
    "skype",
    "stackoverflow",
    "soundcloud",
    "spotify",
    "steam",
    "swedbank",
    "ted",
    "theguardian",
    "theweathercompany",
    "tumblr",
    "twitch",
    "twitter",
    "w3",
    "walmart",
    "weather",
    "webmd",
    "weebly",
    "wellsfargo",
    "whatsapp",
    "wikia",
    "wikipedia",
    "viaplay",
    "vimeo",
    "vk",
    "wordpress",
    "wp",
    "yahoo",
    "yandex",
    "yelp",
    "youtube",
    "zillow",
];
Function &&
    Function.prototype &&
    Function.prototype.bind &&
    (/MSIE [678]/.test(navigator.userAgent) ||
        (window.__twttr && window.__twttr.widgets && window.__twttr.widgets.loaded && window.twttr.widgets.load && window.twttr.widgets.load(),
        (window.__twttr && window.__twttr.widgets && window.__twttr.widgets.init) ||
            (function (e) {
                function t(n) {
                    if (r[n]) return r[n].exports;
                    var i = (r[n] = { exports: {}, id: n, loaded: !1 });
                    return e[n].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports;
                }
                var n = window.__twttrll;
                window.__twttrll = function (r, o) {
                    for (var s, a, u = 0, c = []; u < r.length; u++) (a = r[u]), i[a] && c.push.apply(c, i[a]), (i[a] = 0);
                    for (s in o) e[s] = o[s];
                    for (n && n(r, o); c.length; ) c.shift().call(null, null, t);
                };
                var r = {},
                    i = { 0: 0 };
                (t.e = function (e, t) {}),
                    (t.e = function (e, n) {
                        if (0 === i[e]) return n.call(null, null, t);
                        if (void 0 !== i[e]) i[e].push(n);
                        else {
                            i[e] = [n];
                            var r = document.getElementsByTagName("head")[0],
                                o = document.createElement("script");
                            (o.type = "text/javascript"),
                                (o.charset = "utf-8"),
                                (o.async = !0),
                                (o.onerror = function () {
                                    var t = i[e];
                                    for (o.onerror = null, delete i[e]; t.length; ) t.shift().call(null, new Error("failed to load chunk"));
                                }),
                                (o.src =
                                    t.p +
                                    "js/" +
                                    ({ 1: "dm_button", 2: "button", 3: "grid", 4: "moment", 5: "periscope_on_air", 6: "timeline", 7: "tweet" }[e] || e) +
                                    "." +
                                    {
                                        1: "c6be4b2e80c5f8e8ea3a14f6031d5829",
                                        2: "5f64a1a5864e1229f84c8defd65341b4",
                                        3: "28ed9083c7eb70add286e541edcb7ac7",
                                        4: "82306bfd82e986c393a514bd23f90dd6",
                                        5: "0cdb0ae4b31c4540cd5320b38ab17c3f",
                                        6: "25e3f797ea5047ab5a8d06fd6ee7f701",
                                        7: "3f0c77e9c86dd5bae672ba9948814692",
                                    }[e] +
                                    ".js"),
                                r.appendChild(o);
                        }
                    }),
                    (t.m = e),
                    (t.c = r),
                    (t.p = "https://platform.twitter.com/"),
                    t(0);
            })([
                function (e, t, n) {
                    var r,
                        i = n(1),
                        o = n(9),
                        s = n(14),
                        a = n(16),
                        u = n(18),
                        c = n(19),
                        l = n(30),
                        d = n(32),
                        f = n(261),
                        p = n(272),
                        h = n(273),
                        m = n(240);
                    n(274),
                        m.emitter.trigger(m.START),
                        u.set("widgets.init", !0),
                        a.set("init", !0),
                        h(),
                        (r = new i()),
                        s.exposeReadyPromise(r.promise, a.base, "_e"),
                        a.set("widgets", f),
                        a.set("widgets.load", d.load),
                        a.set("events", l),
                        p(function () {
                            r.resolve(a.base), c.attachTo(o), d.loadPage();
                        });
                },
                function (e, t, n) {
                    var r = n(2);
                    e.exports = function () {
                        var e = this;
                        this.promise = new r(function (t, n) {
                            (e.resolve = t), (e.reject = n);
                        });
                    };
                },
                function (e, t, n) {
                    var r = n(3).Promise,
                        i = n(7),
                        o = n(8);
                    e.exports = o.hasPromiseSupport() ? i.Promise : r;
                },
                function (e, t, n) {
                    var r;
                    (function (e) {
                        (function () {
                            "use strict";
                            function i(e) {
                                return "function" == typeof e;
                            }
                            function o() {
                                return function () {
                                    setTimeout(s, 1);
                                };
                            }
                            function s() {
                                for (var e = 0; e < _; e += 2) (0, q[e])(q[e + 1]), (q[e] = void 0), (q[e + 1] = void 0);
                                _ = 0;
                            }
                            function a() {}
                            function u(e, t) {
                                if (t.constructor === e.constructor)
                                    !(function (e, t) {
                                        t._state === D
                                            ? d(e, t._result)
                                            : t._state === I
                                            ? f(e, t._result)
                                            : p(
                                                  t,
                                                  void 0,
                                                  function (t) {
                                                      c(e, t);
                                                  },
                                                  function (t) {
                                                      f(e, t);
                                                  }
                                              );
                                    })(e, t);
                                else {
                                    var n = (function (e) {
                                        try {
                                            return e.then;
                                        } catch (e) {
                                            return (j.error = e), j;
                                        }
                                    })(t);
                                    n === j
                                        ? f(e, j.error)
                                        : void 0 === n
                                        ? d(e, t)
                                        : i(n)
                                        ? (function (e, t, n) {
                                              E(function (e) {
                                                  var r = !1,
                                                      i = (function (e, t, n, r) {
                                                          try {
                                                              e.call(t, n, r);
                                                          } catch (e) {
                                                              return e;
                                                          }
                                                      })(
                                                          n,
                                                          t,
                                                          function (n) {
                                                              r || ((r = !0), t !== n ? c(e, n) : d(e, n));
                                                          },
                                                          function (t) {
                                                              r || ((r = !0), f(e, t));
                                                          },
                                                          e._label
                                                      );
                                                  !r && i && ((r = !0), f(e, i));
                                              }, e);
                                          })(e, t, n)
                                        : d(e, t);
                                }
                            }
                            function c(e, t) {
                                e === t
                                    ? f(e, new TypeError("You cannot resolve a promise with itself"))
                                    : (function (e) {
                                          return "function" == typeof e || ("object" == typeof e && null !== e);
                                      })(t)
                                    ? u(e, t)
                                    : d(e, t);
                            }
                            function l(e) {
                                e._onerror && e._onerror(e._result), h(e);
                            }
                            function d(e, t) {
                                e._state === P && ((e._result = t), (e._state = D), 0 !== e._subscribers.length && E(h, e));
                            }
                            function f(e, t) {
                                e._state === P && ((e._state = I), (e._result = t), E(l, e));
                            }
                            function p(e, t, n, r) {
                                var i = e._subscribers,
                                    o = i.length;
                                (e._onerror = null), (i[o] = t), (i[o + D] = n), (i[o + I] = r), 0 === o && e._state && E(h, e);
                            }
                            function h(e) {
                                var t = e._subscribers,
                                    n = e._state;
                                if (0 !== t.length) {
                                    for (var r, i, o = e._result, s = 0; s < t.length; s += 3) (r = t[s]), (i = t[s + n]), r ? g(n, r, i, o) : i(o);
                                    e._subscribers.length = 0;
                                }
                            }
                            function m() {
                                this.error = null;
                            }
                            function g(e, t, n, r) {
                                var o,
                                    s,
                                    a,
                                    u,
                                    l = i(n);
                                if (l) {
                                    if (
                                        ((o = (function (e, t) {
                                            try {
                                                return e(t);
                                            } catch (e) {
                                                return (N.error = e), N;
                                            }
                                        })(n, r)) === N
                                            ? ((u = !0), (s = o.error), (o = null))
                                            : (a = !0),
                                        t === o)
                                    )
                                        return void f(t, new TypeError("A promises callback cannot return that same promise."));
                                } else (o = r), (a = !0);
                                t._state !== P || (l && a ? c(t, o) : u ? f(t, s) : e === D ? d(t, o) : e === I && f(t, o));
                            }
                            function v(e, t) {
                                var n = this;
                                (n._instanceConstructor = e),
                                    (n.promise = new e(a)),
                                    n._validateInput(t)
                                        ? ((n._input = t),
                                          (n.length = t.length),
                                          (n._remaining = t.length),
                                          n._init(),
                                          0 === n.length ? d(n.promise, n._result) : ((n.length = n.length || 0), n._enumerate(), 0 === n._remaining && d(n.promise, n._result)))
                                        : f(n.promise, n._validationError());
                            }
                            function y(e) {
                                (this._id = F++),
                                    (this._state = void 0),
                                    (this._result = void 0),
                                    (this._subscribers = []),
                                    a !== e &&
                                        (i(e) ||
                                            (function () {
                                                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                                            })(),
                                        this instanceof y ||
                                            (function () {
                                                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                                            })(),
                                        (function (e, t) {
                                            try {
                                                t(
                                                    function (t) {
                                                        c(e, t);
                                                    },
                                                    function (t) {
                                                        f(e, t);
                                                    }
                                                );
                                            } catch (t) {
                                                f(e, t);
                                            }
                                        })(this, e));
                            }
                            var b,
                                w,
                                x,
                                C = Array.isArray
                                    ? Array.isArray
                                    : function (e) {
                                          return "[object Array]" === Object.prototype.toString.call(e);
                                      },
                                _ = 0,
                                E = function (e, t) {
                                    (q[_] = e), (q[_ + 1] = t), 2 === (_ += 2) && (w ? w(s) : x());
                                },
                                T = "undefined" != typeof window ? window : void 0,
                                k = T || {},
                                S = k.MutationObserver || k.WebKitMutationObserver,
                                A = "undefined" != typeof process && "[object process]" === {}.toString.call(process),
                                L = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                                q = new Array(1e3);
                            x = A
                                ? (function () {
                                      var e = process.nextTick,
                                          t = process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);
                                      return (
                                          Array.isArray(t) && "0" === t[1] && "10" === t[2] && (e = setImmediate),
                                          function () {
                                              e(s);
                                          }
                                      );
                                  })()
                                : S
                                ? (function () {
                                      var e = 0,
                                          t = new S(s),
                                          n = document.createTextNode("");
                                      return (
                                          t.observe(n, { characterData: !0 }),
                                          function () {
                                              n.data = e = ++e % 2;
                                          }
                                      );
                                  })()
                                : L
                                ? (function () {
                                      var e = new MessageChannel();
                                      return (
                                          (e.port1.onmessage = s),
                                          function () {
                                              e.port2.postMessage(0);
                                          }
                                      );
                                  })()
                                : void 0 === T
                                ? (function () {
                                      try {
                                          var e = n(5);
                                          return (
                                              (b = e.runOnLoop || e.runOnContext),
                                              function () {
                                                  b(s);
                                              }
                                          );
                                      } catch (e) {
                                          return o();
                                      }
                                  })()
                                : o();
                            var P = void 0,
                                D = 1,
                                I = 2,
                                j = new m(),
                                N = new m();
                            (v.prototype._validateInput = function (e) {
                                return C(e);
                            }),
                                (v.prototype._validationError = function () {
                                    return new Error("Array Methods must be provided an Array");
                                }),
                                (v.prototype._init = function () {
                                    this._result = new Array(this.length);
                                });
                            var O = v;
                            (v.prototype._enumerate = function () {
                                for (var e = this, t = e.length, n = e.promise, r = e._input, i = 0; n._state === P && i < t; i++) e._eachEntry(r[i], i);
                            }),
                                (v.prototype._eachEntry = function (e, t) {
                                    var n = this,
                                        r = n._instanceConstructor;
                                    !(function (e) {
                                        return "object" == typeof e && null !== e;
                                    })(e)
                                        ? (n._remaining--, (n._result[t] = e))
                                        : e.constructor === r && e._state !== P
                                        ? ((e._onerror = null), n._settledAt(e._state, t, e._result))
                                        : n._willSettleAt(r.resolve(e), t);
                                }),
                                (v.prototype._settledAt = function (e, t, n) {
                                    var r = this,
                                        i = r.promise;
                                    i._state === P && (r._remaining--, e === I ? f(i, n) : (r._result[t] = n)), 0 === r._remaining && d(i, r._result);
                                }),
                                (v.prototype._willSettleAt = function (e, t) {
                                    var n = this;
                                    p(
                                        e,
                                        void 0,
                                        function (e) {
                                            n._settledAt(D, t, e);
                                        },
                                        function (e) {
                                            n._settledAt(I, t, e);
                                        }
                                    );
                                });
                            var R = function (e) {
                                    return new O(this, e).promise;
                                },
                                M = function (e) {
                                    function t(e) {
                                        c(r, e);
                                    }
                                    function n(e) {
                                        f(r, e);
                                    }
                                    var r = new this(a);
                                    if (!C(e)) return f(r, new TypeError("You must pass an array to race.")), r;
                                    for (var i = e.length, o = 0; r._state === P && o < i; o++) p(this.resolve(e[o]), void 0, t, n);
                                    return r;
                                },
                                z = function (e) {
                                    if (e && "object" == typeof e && e.constructor === this) return e;
                                    var t = new this(a);
                                    return c(t, e), t;
                                },
                                B = function (e) {
                                    var t = new this(a);
                                    return f(t, e), t;
                                },
                                F = 0,
                                $ = y;
                            (y.all = R),
                                (y.race = M),
                                (y.resolve = z),
                                (y.reject = B),
                                (y._setScheduler = function (e) {
                                    w = e;
                                }),
                                (y._setAsap = function (e) {
                                    E = e;
                                }),
                                (y._asap = E),
                                (y.prototype = {
                                    constructor: y,
                                    then: function (e, t) {
                                        var n = this,
                                            r = n._state;
                                        if ((r === D && !e) || (r === I && !t)) return this;
                                        var i = new this.constructor(a),
                                            o = n._result;
                                        if (r) {
                                            var s = arguments[r - 1];
                                            E(function () {
                                                g(r, i, s, o);
                                            });
                                        } else p(n, i, e, t);
                                        return i;
                                    },
                                    catch: function (e) {
                                        return this.then(null, e);
                                    },
                                });
                            var H = {
                                Promise: $,
                                polyfill: function () {
                                    var e;
                                    if ("undefined" != typeof global) e = global;
                                    else if ("undefined" != typeof self) e = self;
                                    else
                                        try {
                                            e = Function("return this")();
                                        } catch (e) {
                                            throw new Error("polyfill failed because global object is unavailable in this environment");
                                        }
                                    var t = e.Promise;
                                    (t && "[object Promise]" === Object.prototype.toString.call(t.resolve()) && !t.cast) || (e.Promise = $);
                                },
                            };
                            n(6).amd
                                ? void 0 ===
                                      (r = function () {
                                          return H;
                                      }.call(t, n, t, e)) || (e.exports = r)
                                : void 0 !== e && e.exports && (e.exports = H);
                        }.call(this));
                    }.call(t, n(4)(e)));
                },
                function (e, t) {
                    e.exports = function (e) {
                        return e.webpackPolyfill || ((e.deprecate = function () {}), (e.paths = []), (e.children = []), (e.webpackPolyfill = 1)), e;
                    };
                },
                function (e, t) {},
                function (e, t) {
                    e.exports = function () {
                        throw new Error("define cannot be used indirect");
                    };
                },
                function (e, t) {
                    e.exports = window;
                },
                function (e, t, n) {
                    function r(e) {
                        return /(Trident|MSIE|Edge[\/ ]?\d)/.test((e = e || u));
                    }
                    var i = n(9),
                        o = (n(10), n(13)),
                        s = n(7),
                        a = n(12),
                        u = o.userAgent;
                    e.exports = {
                        retina: function (e) {
                            return (e = e || s).devicePixelRatio ? e.devicePixelRatio >= 1.5 : !!e.matchMedia && e.matchMedia("only screen and (min-resolution: 144dpi)").matches;
                        },
                        anyIE: r,
                        ie9: function (e) {
                            return /MSIE 9/.test((e = e || u));
                        },
                        ie10: function (e) {
                            return /MSIE 10/.test((e = e || u));
                        },
                        ios: function (e) {
                            return /(iPad|iPhone|iPod)/.test((e = e || u));
                        },
                        android: function (e) {
                            return /^Mozilla\/5\.0 \(Linux; (U; )?Android/.test((e = e || u));
                        },
                        canPostMessage: function (e, t) {
                            return (t = t || u), (e = e || s).postMessage && !(r(t) && e.opener);
                        },
                        touch: function (e, t, n) {
                            return (t = t || o), (n = n || u), "ontouchstart" in (e = e || s) || /Opera Mini/.test(n) || t.msMaxTouchPoints > 0;
                        },
                        cssTransitions: function () {
                            var e = i.body.style;
                            return void 0 !== e.transition || void 0 !== e.webkitTransition || void 0 !== e.mozTransition || void 0 !== e.oTransition || void 0 !== e.msTransition;
                        },
                        hasPromiseSupport: function () {
                            return !!(
                                s.Promise &&
                                s.Promise.resolve &&
                                s.Promise.reject &&
                                s.Promise.all &&
                                s.Promise.race &&
                                (new s.Promise(function (t) {
                                    e = t;
                                }),
                                a.isType("function", e))
                            );
                            var e;
                        },
                        hasIntersectionObserverSupport: function () {
                            return !!s.IntersectionObserver;
                        },
                        hasPerformanceInformation: function () {
                            return s.performance && s.performance.getEntriesByType;
                        },
                        hasLocalStorageSupport: function () {
                            try {
                                return s.localStorage.setItem("local_storage_support_test", "true"), void 0 !== s.localStorage;
                            } catch (e) {
                                return !1;
                            }
                        },
                    };
                },
                function (e, t) {
                    e.exports = document;
                },
                function (e, t, n) {
                    function r() {
                        s("info", c.toRealArray(arguments));
                    }
                    function i() {
                        s("error", c.toRealArray(arguments));
                    }
                    function o() {
                        return (u.performance && +u.performance.now()) || +new Date();
                    }
                    function s(e, t) {
                        if (u[l] && u[l][e])
                            switch (t.length) {
                                case 1:
                                    u[l][e](t[0]);
                                    break;
                                case 2:
                                    u[l][e](t[0], t[1]);
                                    break;
                                case 3:
                                    u[l][e](t[0], t[1], t[2]);
                                    break;
                                case 4:
                                    u[l][e](t[0], t[1], t[2], t[3]);
                                    break;
                                case 5:
                                    u[l][e](t[0], t[1], t[2], t[3], t[4]);
                                    break;
                                default:
                                    0 !== t.length && u[l].warn && u[l].warn("too many params passed to logger." + e);
                            }
                    }
                    var a = n(11),
                        u = n(7),
                        c = n(12),
                        l = ["con", "sole"].join(""),
                        d = {},
                        f = c.contains(a.href, "tw_debug=true");
                    e.exports = {
                        info: r,
                        warn: function () {
                            s("warn", c.toRealArray(arguments));
                        },
                        error: i,
                        time: function (e) {
                            f && (d[e] = o());
                        },
                        timeEnd: function (e) {
                            f && (d[e] ? r("_twitter", e, o() - d[e]) : i("timeEnd() called before time() for id: ", e));
                        },
                    };
                },
                function (e, t) {
                    e.exports = location;
                },
                function (e, t, n) {
                    function r(e, t) {
                        var n;
                        for (n in e) (e.hasOwnProperty && !e.hasOwnProperty(n)) || t(n, e[n]);
                        return e;
                    }
                    function i(e) {
                        return {}.toString
                            .call(e)
                            .match(/\s([a-zA-Z]+)/)[1]
                            .toLowerCase();
                    }
                    function o(e) {
                        return e === Object(e);
                    }
                    function s(e) {
                        var t;
                        if (!o(e)) return !1;
                        if (Object.keys) return !Object.keys(e).length;
                        for (t in e) if (e.hasOwnProperty(t)) return !1;
                        return !0;
                    }
                    function a(e) {
                        return e ? Array.prototype.slice.call(e) : [];
                    }
                    var u = n(7);
                    e.exports = {
                        aug: function (e) {
                            return (
                                a(arguments)
                                    .slice(1)
                                    .forEach(function (t) {
                                        r(t, function (t, n) {
                                            e[t] = n;
                                        });
                                    }),
                                e
                            );
                        },
                        async: function (e, t) {
                            u.setTimeout(function () {
                                e.call(t || null);
                            }, 0);
                        },
                        compact: function e(t) {
                            return (
                                r(t, function (n, r) {
                                    o(r) && (e(r), s(r) && delete t[n]), (null != r && "" !== r) || delete t[n];
                                }),
                                t
                            );
                        },
                        contains: function (e, t) {
                            return !(!e || !e.indexOf) && e.indexOf(t) > -1;
                        },
                        forIn: r,
                        isObject: o,
                        isEmptyObject: s,
                        toType: i,
                        isType: function (e, t) {
                            return e == i(t);
                        },
                        toRealArray: a,
                    };
                },
                function (e, t) {
                    e.exports = navigator;
                },
                function (e, t, n) {
                    var r = n(15);
                    e.exports = {
                        exposeReadyPromise: function (e, t, n) {
                            (t.ready = r(e.then, e)), n && Array.isArray(t[n]) && (t[n].forEach(r(e.then, e)), delete t[n]);
                        },
                    };
                },
                function (e, t, n) {
                    var r = n(12);
                    e.exports = function (e, t) {
                        var n = Array.prototype.slice.call(arguments, 2);
                        return function () {
                            var i = r.toRealArray(arguments);
                            return e.apply(t, n.concat(i));
                        };
                    };
                },
                function (e, t, n) {
                    var r = n(17);
                    e.exports = new r("twttr");
                },
                function (e, t, n) {
                    function r(e) {
                        return a.isType("string", e) ? e.split(".") : a.isType("array", e) ? e : [];
                    }
                    function i(e, t) {
                        var n = r(t).slice(0, -1);
                        return n.reduce(function (e, t, r) {
                            if (((e[t] = e[t] || {}), !a.isObject(e[t]))) throw new Error(n.slice(0, r + 1).join(".") + " is already defined with a value.");
                            return e[t];
                        }, e);
                    }
                    function o(e, t) {
                        ((t = t || s)[e] = t[e] || {}), Object.defineProperty(this, "base", { value: t[e] }), Object.defineProperty(this, "name", { value: e });
                    }
                    var s = n(7),
                        a = n(12);
                    a.aug(o.prototype, {
                        get: function (e) {
                            return r(e).reduce(function (e, t) {
                                if (a.isObject(e)) return e[t];
                            }, this.base);
                        },
                        set: function (e, t, n) {
                            var o = r(e),
                                s = i(this.base, e),
                                a = o.slice(-1);
                            return n && a in s ? s[a] : (s[a] = t);
                        },
                        init: function (e, t) {
                            return this.set(e, t, !0);
                        },
                        unset: function (e) {
                            var t = r(e),
                                n = this.get(t.slice(0, -1));
                            n && delete n[t.slice(-1)];
                        },
                        aug: function (e) {
                            var t = this.get(e),
                                n = a.toRealArray(arguments).slice(1);
                            if (((t = void 0 !== t ? t : {}), n.unshift(t), !n.every(a.isObject))) throw new Error("Cannot augment non-object.");
                            return this.set(e, a.aug.apply(null, n));
                        },
                        call: function (e) {
                            var t = this.get(e),
                                n = a.toRealArray(arguments).slice(1);
                            if (!a.isType("function", t)) throw new Error("Function " + e + "does not exist.");
                            return t.apply(null, n);
                        },
                        fullPath: function (e) {
                            var t = r(e);
                            return t.unshift(this.name), t.join(".");
                        },
                    }),
                        (e.exports = o);
                },
                function (e, t, n) {
                    var r = n(17);
                    e.exports = new r("__twttr");
                },
                function (e, t, n) {
                    function r(e) {
                        var t, n;
                        e.altKey ||
                            e.metaKey ||
                            e.shiftKey ||
                            ((t = s.closest(function (e) {
                                return "A" === e.tagName || "AREA" === e.tagName;
                            }, e.target)) &&
                                u.isIntentURL(t.href) &&
                                ((n = (n = (n = (function (e) {
                                    return [e, "original_referer=" + i.href].join(-1 == e.indexOf("?") ? "?" : "&");
                                })(t.href)).replace(/^http[:]/, "https:")).replace(/^\/\//, "https://")),
                                a.open(n, t),
                                o.preventDefault(e)));
                    }
                    var i = n(11),
                        o = n(20),
                        s = n(22),
                        a = n(23),
                        u = n(24);
                    e.exports = {
                        attachTo: function (e) {
                            e.addEventListener("click", r, !1);
                        },
                    };
                },
                function (e, t, n) {
                    function r(e) {
                        var t = e.getAttribute("data-twitter-event-id");
                        return t || (e.setAttribute("data-twitter-event-id", ++d), d);
                    }
                    function i(e, t, n) {
                        var r = 0,
                            i = (e && e.length) || 0;
                        for (r = 0; r < i; r++) if ((e[r].call(t, n, t), n.ceaseImmediately)) return !1;
                    }
                    function o(e, t, n) {
                        for (
                            var r = n || e.target || e.srcElement,
                                s = c
                                    .list(r)
                                    .map(function (e) {
                                        return "." + e;
                                    })
                                    .concat(r.tagName),
                                a = 0,
                                u = s.length;
                            a < u;
                            a++
                        )
                            if (!1 === i(t[s[a]], r, e)) return;
                        e.cease || (r !== this && o.call(this, e, t, r.parentElement || r.parentNode));
                    }
                    function s(e, t, n, r) {
                        function i(r) {
                            o.call(e, r, n[t]);
                        }
                        (function (e, t, n, r) {
                            e.id && ((f[e.id] = f[e.id] || []), f[e.id].push({ el: e, listener: t, type: n, rootId: r }));
                        })(e, i, t, r),
                            e.addEventListener(t, i, !1);
                    }
                    function a(e) {
                        e && e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
                    }
                    function u(e) {
                        e && (e.cease = !0) && e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
                    }
                    var c = n(21),
                        l = {},
                        d = -1,
                        f = {};
                    e.exports = {
                        stop: function (e) {
                            return u(e), a(e), !1;
                        },
                        stopPropagation: u,
                        stopImmediatePropagation: function (e) {
                            e && ((e.ceaseImmediately = !0), u(e), e.stopImmediatePropagation());
                        },
                        preventDefault: a,
                        delegate: function (e, t, n, i) {
                            var o = r(e);
                            (l[o] = l[o] || {}), l[o][t] || ((l[o][t] = {}), s(e, t, l[o], o)), (l[o][t][n] = l[o][t][n] || []), l[o][t][n].push(i);
                        },
                        simulate: function (e, t, n) {
                            var i = r(t),
                                s = l[i] && l[i];
                            o.call(t, { target: n }, s[e]);
                        },
                        removeDelegatesForWidget: function (e) {
                            var t = f[e];
                            t &&
                                (t.forEach(function (e) {
                                    e.el.removeEventListener(e.type, e.listener, !1), delete l[e.rootId];
                                }),
                                delete f[e]);
                        },
                    };
                },
                function (e, t, n) {
                    function r(e) {
                        return new RegExp("\\b" + e + "\\b", "g");
                    }
                    function i(e, t) {
                        return e.classList ? void e.classList.add(t) : void (r(t).test(e.className) || (e.className += " " + t));
                    }
                    function o(e, t) {
                        return e.classList ? void e.classList.remove(t) : void (e.className = e.className.replace(r(t), " "));
                    }
                    function s(e, t) {
                        return e.classList ? e.classList.contains(t) : u.contains(a(e), t);
                    }
                    function a(e) {
                        return u.toRealArray(e.classList ? e.classList : e.className.match(c));
                    }
                    var u = n(12),
                        c = /\b([\w-_]+)\b/g;
                    e.exports = {
                        add: i,
                        remove: o,
                        replace: function (e, t, n) {
                            return e.classList && s(e, t) ? (o(e, t), void i(e, n)) : void (e.className = e.className.replace(r(t), n));
                        },
                        toggle: function (e, t, n) {
                            return void 0 === n && e.classList && e.classList.toggle ? e.classList.toggle(t, n) : (n ? i(e, t) : o(e, t), n);
                        },
                        present: s,
                        list: a,
                    };
                },
                function (e, t, n) {
                    var r = n(12);
                    e.exports = {
                        closest: function e(t, n, i) {
                            var o;
                            if (n)
                                return (
                                    (i = i || (n && n.ownerDocument)),
                                    (o = r.isType("function", t)
                                        ? t
                                        : (function (e) {
                                              var t = e.charAt(0);
                                              return "." === t
                                                  ? function (t) {
                                                        var n = t.className ? t.className.split(/\s+/) : [];
                                                        return r.contains(n, e.slice(1));
                                                    }
                                                  : "#" === t
                                                  ? function (t) {
                                                        return t.id === e.slice(1);
                                                    }
                                                  : function (t) {
                                                        return t.tagName === e.toUpperCase();
                                                    };
                                          })(t)),
                                    n === i ? (o(n) ? n : void 0) : o(n) ? n : e(o, n.parentNode, i)
                                );
                        },
                    };
                },
                function (e, t, n) {
                    function r(e, t) {
                        var n = u.decodeURL(t);
                        switch (e) {
                            case "favorite":
                            case "like":
                                return { tweet_id: n.tweet_id };
                            case "follow":
                                return { screen_name: n.screen_name, user_id: n.user_id };
                            case "retweet":
                                return { source_tweet_id: n.tweet_id };
                            default:
                                return {};
                        }
                    }
                    function i(e) {
                        (this.srcEl = []), (this.element = e);
                    }
                    var o = n(24),
                        s = n(27),
                        a = n(30),
                        u = n(25),
                        c = { favorite: ["favorite", "like"], follow: ["follow"], like: ["favorite", "like"], retweet: ["retweet"], tweet: ["tweet"] };
                    (i.open = function (e, t, n) {
                        var i = (o.intentType(e) || "").toLowerCase();
                        o.isTwitterURL(e) &&
                            ((function (e, t) {
                                s.open(e, {}, t);
                            })(e, n),
                            t && a.trigger("click", { target: t, region: "intent", type: "click", data: {} }),
                            t &&
                                c[i] &&
                                c[i].forEach(function (n) {
                                    a.trigger(n, { target: t, region: "intent", type: n, data: r(i, e) });
                                }));
                    }),
                        (e.exports = i);
                },
                function (e, t, n) {
                    function r(e) {
                        return "string" == typeof e && c.test(e) && RegExp.$1.length <= 20;
                    }
                    function i(e) {
                        if (r(e)) return RegExp.$1;
                    }
                    function o(e, t) {
                        var n = u.decodeURL(e);
                        if (((t = t || !1), (n.screen_name = i(e)), n.screen_name)) return u.url("https://twitter.com/intent/" + (t ? "follow" : "user"), n);
                    }
                    function s(e) {
                        return "string" == typeof e && p.test(e);
                    }
                    function a(e) {
                        return "string" == typeof e && l.test(e);
                    }
                    var u = n(25),
                        c = /(?:^|(?:https?:)?\/\/(?:www\.)?twitter\.com(?::\d+)?(?:\/intent\/(?:follow|user)\/?\?screen_name=|(?:\/#!)?\/))@?([\w]+)(?:\?|&|$)/i,
                        l = /(?:^|(?:https?:)?\/\/(?:www\.)?twitter\.com(?::\d+)?\/(?:#!\/)?[\w_]+\/status(?:es)?\/)(\d+)/i,
                        d = /^http(s?):\/\/(\w+\.)*twitter\.com([:\/]|$)/i,
                        f = /^http(s?):\/\/pbs\.twimg\.com\//,
                        p = /^#?([^.,<>!\s\/#\-()'"]+)$/,
                        h = /twitter\.com(?::\d{2,4})?\/intent\/(\w+)/,
                        m = /^https?:\/\/(?:www\.)?twitter\.com\/\w+\/timelines\/(\d+)/i,
                        g = /^https?:\/\/(?:www\.)?twitter\.com\/i\/moments\/(\d+)/i,
                        v = /^https?:\/\/(?:www\.)?twitter\.com\/(\w+)\/(?:likes|favorites)/i,
                        y = /^https?:\/\/(?:www\.)?twitter\.com\/(\w+)\/lists\/([\w-]+)/i,
                        b = /^https?:\/\/(?:www\.)?twitter\.com\/(\w+)\/([\w-]+)/i,
                        w = /^https?:\/\/(?:www\.)?twitter\.com\/hashtag\/([\w-]+)/i,
                        x = /^https?:\/\/(?:www\.)?twitter\.com\/search/i,
                        C = /^https?:\/\/(?:www\.)?twitter\.com\/i\/live\/(\d+)/i,
                        _ = /^https?:\/\/syndication\.twitter\.com\/settings/i,
                        E = /^https?:\/\/(localhost|platform)\.twitter\.com(?::\d+)?\/widgets\/widget_iframe\.(.+)/i;
                    e.exports = {
                        isHashTag: s,
                        hashTag: function (e, t) {
                            if (((t = void 0 === t || t), s(e))) return (t ? "#" : "") + RegExp.$1;
                        },
                        isSearchUrl: function (e) {
                            return w.test(e) || x.test(e);
                        },
                        isScreenName: r,
                        screenName: i,
                        isStatus: a,
                        status: function (e) {
                            return a(e) && RegExp.$1;
                        },
                        intentForProfileURL: o,
                        intentForFollowURL: function (e) {
                            return o(e, !0);
                        },
                        isTwitterURL: function (e) {
                            return d.test(e);
                        },
                        isTwimgURL: function (e) {
                            return f.test(e);
                        },
                        isIntentURL: function (e) {
                            return h.test(e);
                        },
                        isSettingsURL: function (e) {
                            return _.test(e);
                        },
                        isWidgetIframeURL: function (e) {
                            return E.test(e);
                        },
                        regexen: { profile: c },
                        momentId: function (e) {
                            return g.test(e) && RegExp.$1;
                        },
                        collectionId: function (e) {
                            return m.test(e) && RegExp.$1;
                        },
                        intentType: function (e) {
                            return h.test(e) && RegExp.$1;
                        },
                        likesScreenName: function (e) {
                            return v.test(e) && RegExp.$1;
                        },
                        listScreenNameAndSlug: function (e) {
                            return !!y.test(e) && { ownerScreenName: RegExp.$1, slug: RegExp.$2 };
                        },
                        listLegacyScreenNameAndSlug: function (e) {
                            return !!b.test(e) && { ownerScreenName: RegExp.$1, slug: RegExp.$2 };
                        },
                        eventId: function (e) {
                            return C.test(e) && RegExp.$1;
                        },
                    };
                },
                function (e, t, n) {
                    function r(e) {
                        return encodeURIComponent(e).replace(/\+/g, "%2B").replace(/'/g, "%27");
                    }
                    function i(e) {
                        return decodeURIComponent(e);
                    }
                    function o(e) {
                        var t = [];
                        return (
                            u.forIn(e, function (e, n) {
                                var i = r(e);
                                u.isType("array", n) || (n = [n]),
                                    n.forEach(function (e) {
                                        a.hasValue(e) && t.push(i + "=" + r(e));
                                    });
                            }),
                            t.sort().join("&")
                        );
                    }
                    function s(e) {
                        var t = {};
                        return e
                            ? (e.split("&").forEach(function (e) {
                                  var n = e.split("="),
                                      r = i(n[0]),
                                      o = i(n[1]);
                                  if (2 == n.length) return u.isType("array", t[r]) ? void t[r].push(o) : r in t ? ((t[r] = [t[r]]), void t[r].push(o)) : void (t[r] = o);
                              }),
                              t)
                            : {};
                    }
                    var a = n(26),
                        u = n(12);
                    e.exports = {
                        url: function (e, t) {
                            return o(t).length > 0 ? (u.contains(e, "?") ? e + "&" + o(t) : e + "?" + o(t)) : e;
                        },
                        decodeURL: function (e) {
                            var t = e && e.split("?");
                            return 2 == t.length ? s(t[1]) : {};
                        },
                        decode: s,
                        encode: o,
                        encodePart: r,
                        decodePart: i,
                    };
                },
                function (e, t, n) {
                    function r(e) {
                        return null != e && "" !== e;
                    }
                    function i(e) {
                        return s(e) && e % 1 == 0;
                    }
                    function o(e) {
                        return s(e) && !i(e);
                    }
                    function s(e) {
                        return r(e) && !isNaN(e);
                    }
                    function a(e) {
                        return c.contains(d, e);
                    }
                    function u(e) {
                        return c.contains(l, e);
                    }
                    var c = n(12),
                        l = [!0, 1, "1", "on", "ON", "true", "TRUE", "yes", "YES"],
                        d = [!1, 0, "0", "off", "OFF", "false", "FALSE", "no", "NO"];
                    e.exports = {
                        hasValue: r,
                        isInt: i,
                        isFloat: o,
                        isNumber: s,
                        isString: function (e) {
                            return "string" === c.toType(e);
                        },
                        isArray: function (e) {
                            return r(e) && "array" == c.toType(e);
                        },
                        isTruthValue: u,
                        isFalseValue: a,
                        asInt: function (e) {
                            if (i(e)) return parseInt(e, 10);
                        },
                        asFloat: function (e) {
                            if (o(e)) return e;
                        },
                        asNumber: function (e) {
                            if (s(e)) return e;
                        },
                        asBoolean: function (e) {
                            return !(!r(e) || (!u(e) && (a(e) || !e)));
                        },
                    };
                },
                function (e, t, n) {
                    function r(e, t) {
                        function n(e) {
                            return Math.round(e / 2);
                        }
                        return e > t ? { coordinate: 0, size: t } : { coordinate: n(t) - n(e), size: e };
                    }
                    function i(e, t, n) {
                        var i, s;
                        (n = n || {}),
                            (i = r((t = o.parse(t)).width, n.width || m)),
                            (t.left = i.coordinate),
                            (t.width = i.size),
                            (s = r(t.height, n.height || g)),
                            (t.top = s.coordinate),
                            (t.height = s.size),
                            (this.win = e),
                            (this.features = (function (e) {
                                var t = [];
                                return (
                                    p.forIn(e, function (e, n) {
                                        t.push(e + "=" + n);
                                    }),
                                    t.join(",")
                                );
                            })(t));
                    }
                    var o,
                        s = n(7),
                        a = n(28),
                        u = n(20),
                        c = n(22),
                        l = n(8),
                        d = n(24),
                        f = n(29),
                        p = n(12),
                        h = "intent_",
                        m = s.screen.width,
                        g = s.screen.height;
                    (o = new a().defaults({ width: 550, height: 520, personalbar: "0", toolbar: "0", location: "1", scrollbars: "1", resizable: "1" })),
                        (i.prototype.open = function (e, t) {
                            var n = t && "click" == t.type && c.closest("a", t.target),
                                r = t && (t.altKey || t.metaKey || t.shiftKey),
                                i = n && (l.ios() || l.android());
                            if (d.isTwitterURL(e)) return r || i ? this : ((this.name = h + f.generate()), (this.popup = this.win.open(e, this.name, this.features)), t && u.preventDefault(t), this);
                        }),
                        (i.open = function (e, t, n) {
                            return new i(s, t).open(e, n);
                        }),
                        (e.exports = i);
                },
                function (e, t, n) {
                    function r() {
                        (this.assertions = []), (this._defaults = {});
                    }
                    var i = n(26),
                        o = n(12);
                    (r.prototype.assert = function (e, t) {
                        return this.assertions.push({ fn: e, msg: t || "assertion failed" }), this;
                    }),
                        (r.prototype.defaults = function (e) {
                            return (this._defaults = e || this._defaults), this;
                        }),
                        (r.prototype.require = function (e) {
                            var t = this;
                            return (
                                (e = Array.isArray(e) ? e : o.toRealArray(arguments)).forEach(function (e) {
                                    t.assert(
                                        (function (e) {
                                            return function (t) {
                                                return i.hasValue(t[e]);
                                            };
                                        })(e),
                                        "required: " + e
                                    );
                                }),
                                this
                            );
                        }),
                        (r.prototype.parse = function (e) {
                            var t, n;
                            if (
                                ((t = o.aug({}, this._defaults, e || {})),
                                (n = this.assertions.reduce(function (e, n) {
                                    return n.fn(t) || e.push(n.msg), e;
                                }, [])).length > 0)
                            )
                                throw new Error(n.join("\n"));
                            return t;
                        }),
                        (e.exports = r);
                },
                function (e, t) {
                    var n = "i",
                        r = 0,
                        i = 0;
                    e.exports = {
                        generate: function () {
                            return n + String(+new Date()) + Math.floor(1e5 * Math.random()) + r++;
                        },
                        deterministic: function () {
                            return n + String(i++);
                        },
                    };
                },
                function (e, t, n) {
                    var r = n(16),
                        i = n(31),
                        o = n(12);
                    e.exports = o.aug(r.get("events") || {}, i.Emitter);
                },
                function (e, t, n) {
                    var r = n(12),
                        i = n(15),
                        o = {
                            bind: function (e, t) {
                                return (this._handlers = this._handlers || {}), (this._handlers[e] = this._handlers[e] || []), this._handlers[e].push(t);
                            },
                            unbind: function (e, t) {
                                var n;
                                this._handlers && this._handlers[e] && (t ? (n = this._handlers[e].indexOf(t)) >= 0 && this._handlers[e].splice(n, 1) : (this._handlers[e] = []));
                            },
                            trigger: function (e, t) {
                                var n = this._handlers && this._handlers[e];
                                ((t = t || {}).type = e),
                                    n &&
                                        n.forEach(function (e) {
                                            r.async(i(e, this, t));
                                        });
                            },
                        };
                    e.exports = {
                        Emitter: o,
                        makeEmitter: function () {
                            return r.aug(function () {}, o);
                        },
                    };
                },
                function (e, t, n) {
                    function r() {
                        var e = c.val("widgets:autoload") || !0;
                        return !p.isFalseValue(e) && (p.isTruthValue(e) ? o.body : o.querySelectorAll(e));
                    }
                    function i(e) {
                        var t;
                        return (
                            (e = (e = e || o.body).length ? h.toRealArray(e) : [e]),
                            d.pause(),
                            (t = a
                                .allResolved(
                                    (function (e) {
                                        return e.reduce(function (e, t) {
                                            return e.concat(
                                                g.reduce(function (e, n) {
                                                    return e.concat(n(t));
                                                }, [])
                                            );
                                        }, []);
                                    })(e).map(function (e) {
                                        return u.addWidget(e);
                                    })
                                )
                                .then(function (e) {
                                    f.trigger("loaded", { widgets: e }), v.emitter.trigger(v.ALL_WIDGETS_RENDERED, { widgets: e });
                                })),
                            a.always(t, function () {
                                d.resume();
                            }),
                            t
                        );
                    }
                    var o = n(9),
                        s = n(2),
                        a = n(33),
                        u = n(34),
                        c = n(41),
                        l = n(18),
                        d = n(42),
                        f = n(30),
                        p = n(26),
                        h = n(12),
                        m = n(73),
                        g = n(78),
                        v = n(240);
                    e.exports = {
                        load: i,
                        loadPage: function () {
                            var e = r();
                            return m.load(), !1 === e ? s.resolve() : (l.set("widgets.loaded", !0), i(e));
                        },
                        _getPageLoadTarget: r,
                    };
                },
                function (e, t, n) {
                    function r(e, t) {
                        return e.then(t, t);
                    }
                    function i(e) {
                        return e instanceof o;
                    }
                    var o = n(2),
                        s = n(1);
                    e.exports = {
                        always: r,
                        allResolved: function (e) {
                            var t;
                            return void 0 === e
                                ? o.reject(new Error("undefined is not an object"))
                                : Array.isArray(e)
                                ? (t = e.length)
                                    ? new o(function (n, r) {
                                          function o() {
                                              (a += 1) === t && (0 === u.length ? r() : n(u));
                                          }
                                          function s(e) {
                                              u.push(e), o();
                                          }
                                          var a = 0,
                                              u = [];
                                          e.forEach(function (e) {
                                              i(e) ? e.then(s, o) : s(e);
                                          });
                                      })
                                    : o.resolve([])
                                : o.reject(new Error("Type error"));
                        },
                        some: function (e) {
                            var t;
                            return (
                                (t = (e = e || []).length),
                                (e = e.filter(i)),
                                t
                                    ? t !== e.length
                                        ? o.reject("non-Promise passed to .some")
                                        : new o(function (t, n) {
                                              function r() {
                                                  (i += 1) === e.length && n();
                                              }
                                              var i = 0;
                                              e.forEach(function (e) {
                                                  e.then(t, r);
                                              });
                                          })
                                    : o.reject("no promises passed to .some")
                            );
                        },
                        isPromise: i,
                        allSettled: function (e) {
                            function t() {}
                            return o.all(
                                (e || []).map(function (e) {
                                    return r(e, t);
                                })
                            );
                        },
                        timeout: function (e, t) {
                            var n = new s();
                            return (
                                setTimeout(function () {
                                    n.reject(new Error("Promise timed out"));
                                }, t),
                                e.then(
                                    function (e) {
                                        n.resolve(e);
                                    },
                                    function (e) {
                                        n.reject(e);
                                    }
                                ),
                                n.promise
                            );
                        },
                    };
                },
                function (e, t, n) {
                    var r = n(35),
                        i = n(39),
                        o = n(2),
                        s = n(33),
                        a = n(15),
                        u = n(12),
                        c = new i(function (e) {
                            var t = (function (e) {
                                return e.reduce(function (e, t) {
                                    return (e[t.className] = e[t.className] || []), e[t.className].push(t), e;
                                }, {});
                            })(e.map(r.fromRawTask));
                            u.forIn(t, function (e, t) {
                                s.allSettled(
                                    t.map(function (e) {
                                        return e.initialize();
                                    })
                                ).then(function () {
                                    t.forEach(function (e) {
                                        o.all([e.hydrate(), e.insertIntoDom()]).then(a(e.render, e)).then(a(e.success, e), a(e.fail, e));
                                    });
                                });
                            });
                        });
                    e.exports = {
                        addWidget: function (e) {
                            return c.add(e);
                        },
                    };
                },
                function (e, t, n) {
                    function r(e, t) {
                        (this._widget = null),
                            (this._sandbox = null),
                            (this._hydrated = !1),
                            (this._insertedIntoDom = !1),
                            (this._Sandbox = e.Sandbox),
                            (this._factory = e.factory),
                            (this._widgetParams = e.parameters),
                            (this._resolve = t),
                            (this._className = e.className),
                            (this._renderedClassName = e.className + "-rendered"),
                            (this._errorClassName = e.className + "-error"),
                            (this._srcEl = e.srcEl),
                            (this._targetGlobal = (function (e) {
                                return (e.srcEl || e.targetEl).ownerDocument.defaultView;
                            })(e)),
                            (this._insertionStrategy = function (t) {
                                var n = e.srcEl,
                                    r = e.targetEl;
                                n ? r.insertBefore(t, n) : r.appendChild(t);
                            });
                    }
                    var i = n(21),
                        o = n(36),
                        s = n(30),
                        a = n(38),
                        u = n(2),
                        c = n(33);
                    (r.fromRawTask = function (e) {
                        return new r(e.input, e.taskDoneDeferred.resolve);
                    }),
                        (r.prototype.initialize = function () {
                            var e = this,
                                t = new this._Sandbox(this._targetGlobal);
                            return this._factory(this._widgetParams, t).then(function (n) {
                                return (e._widget = n), (e._sandbox = t), n;
                            });
                        }),
                        (r.prototype.insertIntoDom = function () {
                            var e = this;
                            return this._widget
                                ? this._sandbox.insert(this._widget.id, { class: [this._className, this._renderedClassName].join(" ") }, null, this._insertionStrategy).then(function () {
                                      e._insertedIntoDom = !0;
                                  })
                                : u.reject(new Error("cannot insert widget into DOM before it is initialized"));
                        }),
                        (r.prototype.hydrate = function () {
                            var e = this;
                            return this._widget
                                ? this._widget.hydrate().then(function () {
                                      e._hydrated = !0;
                                  })
                                : u.reject(new Error("cannot hydrate widget before it is initialized"));
                        }),
                        (r.prototype.render = function () {
                            function e(e) {
                                return a(t._sandbox.sandboxEl).then(function () {
                                    return u.reject(e);
                                });
                            }
                            var t = this;
                            return this._hydrated
                                ? this._insertedIntoDom
                                    ? t._widget
                                          .render(t._sandbox)
                                          .then(function () {
                                              return (
                                                  t._sandbox.onResize(function () {
                                                      return t._widget.resize().then(function () {
                                                          s.trigger("resize", { target: t._sandbox.sandboxEl });
                                                      });
                                                  }),
                                                  t._widget.show()
                                              );
                                          })
                                          .then(function () {
                                              return a(t._srcEl).then(function () {
                                                  return t._sandbox.sandboxEl;
                                              });
                                          }, e)
                                    : e(new Error("cannot render widget before DOM insertion"))
                                : e(new Error("cannot render widget before hydration"));
                        }),
                        (r.prototype.fail = function () {
                            var e = this;
                            return this._srcEl
                                ? c.always(
                                      o.write(function () {
                                          i.add(e._srcEl, e._errorClassName);
                                      }),
                                      function () {
                                          s.trigger("rendered", { target: e._srcEl }), e._resolve(e._srcEl);
                                      }
                                  )
                                : (e._resolve(), u.resolve());
                        }),
                        (r.prototype.success = function () {
                            s.trigger("rendered", { target: this._sandbox.sandboxEl }), this._resolve(this._sandbox.sandboxEl);
                        }),
                        (e.exports = r);
                },
                function (e, t, n) {
                    function r(e, t) {
                        return function () {
                            try {
                                t.resolve(e.call(this));
                            } catch (e) {
                                t.reject(e);
                            }
                        };
                    }
                    var i = n(37),
                        o = n(1),
                        s = n(12);
                    e.exports = {
                        sync: function (e, t) {
                            e.call(t);
                        },
                        read: function (e, t) {
                            var n = new o();
                            return i.read(r(e, n), t), n.promise;
                        },
                        write: function (e, t) {
                            var n = new o();
                            return i.write(r(e, n), t), n.promise;
                        },
                        defer: function (e, t, n) {
                            var a = new o();
                            return s.isType("function", e) && ((n = t), (t = e), (e = 1)), i.defer(e, r(t, a), n), a.promise;
                        },
                    };
                },
                function (e, t, n) {
                    var r;
                    !(function () {
                        "use strict";
                        function i() {
                            (this.frames = []), (this.lastId = 0), (this.raf = o), (this.batch = { hash: {}, read: [], write: [], mode: null });
                        }
                        var o =
                            window.requestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.msRequestAnimationFrame ||
                            function (e) {
                                return window.setTimeout(e, 1e3 / 60);
                            };
                        (i.prototype.read = function (e, t) {
                            var n = this.add("read", e, t),
                                r = n.id;
                            return this.batch.read.push(n.id), "reading" === this.batch.mode || this.batch.scheduled ? r : (this.scheduleBatch(), r);
                        }),
                            (i.prototype.write = function (e, t) {
                                var n = this.add("write", e, t),
                                    r = this.batch.mode,
                                    i = n.id;
                                return this.batch.write.push(n.id), "writing" === r || "reading" === r || this.batch.scheduled ? i : (this.scheduleBatch(), i);
                            }),
                            (i.prototype.defer = function (e, t, n) {
                                "function" == typeof e && ((n = t), (t = e), (e = 1));
                                var r = this,
                                    i = e - 1;
                                return this.schedule(i, function () {
                                    r.run({ fn: t, ctx: n });
                                });
                            }),
                            (i.prototype.clear = function (e) {
                                if ("function" == typeof e) return this.clearFrame(e);
                                e = Number(e);
                                var t = this.batch.hash[e];
                                if (t) {
                                    var n = this.batch[t.type],
                                        r = n.indexOf(e);
                                    delete this.batch.hash[e], ~r && n.splice(r, 1);
                                }
                            }),
                            (i.prototype.clearFrame = function (e) {
                                var t = this.frames.indexOf(e);
                                ~t && this.frames.splice(t, 1);
                            }),
                            (i.prototype.scheduleBatch = function () {
                                var e = this;
                                this.schedule(0, function () {
                                    (e.batch.scheduled = !1), e.runBatch();
                                }),
                                    (this.batch.scheduled = !0);
                            }),
                            (i.prototype.uniqueId = function () {
                                return ++this.lastId;
                            }),
                            (i.prototype.flush = function (e) {
                                for (var t; (t = e.shift()); ) this.run(this.batch.hash[t]);
                            }),
                            (i.prototype.runBatch = function () {
                                try {
                                    (this.batch.mode = "reading"), this.flush(this.batch.read), (this.batch.mode = "writing"), this.flush(this.batch.write), (this.batch.mode = null);
                                } catch (e) {
                                    throw (this.runBatch(), e);
                                }
                            }),
                            (i.prototype.add = function (e, t, n) {
                                var r = this.uniqueId();
                                return (this.batch.hash[r] = { id: r, fn: t, ctx: n, type: e });
                            }),
                            (i.prototype.run = function (e) {
                                var t = e.ctx || this,
                                    n = e.fn;
                                if ((delete this.batch.hash[e.id], !this.onError)) return n.call(t);
                                try {
                                    n.call(t);
                                } catch (e) {
                                    this.onError(e);
                                }
                            }),
                            (i.prototype.loop = function () {
                                function e() {
                                    var t = n.frames.shift();
                                    n.frames.length ? r(e) : (n.looping = !1), t && t();
                                }
                                var t,
                                    n = this,
                                    r = this.raf,
                                    i = !1;
                                this.looping ||
                                    ((t = setTimeout(function () {
                                        (i = !0), e();
                                    }, 500)),
                                    r(function () {
                                        i || (clearTimeout(t), e());
                                    }),
                                    (this.looping = !0));
                            }),
                            (i.prototype.schedule = function (e, t) {
                                return this.frames[e] ? this.schedule(e + 1, t) : (this.loop(), (this.frames[e] = t));
                            });
                        var s = new i();
                        void 0 !== e && e.exports
                            ? (e.exports = s)
                            : void 0 ===
                                  (r = function () {
                                      return s;
                                  }.call(t, n, t, e)) || (e.exports = r);
                    })();
                },
                function (e, t, n) {
                    var r = n(36);
                    e.exports = function (e) {
                        return r.write(function () {
                            e && e.parentNode && e.parentNode.removeChild(e);
                        });
                    };
                },
                function (e, t, n) {
                    function r(e) {
                        (this._inputsQueue = []), (this._task = e), (this._hasFlushBeenScheduled = !1);
                    }
                    var i = n(1),
                        o = n(40),
                        s = n(15);
                    (r.prototype.add = function (e) {
                        var t = new i();
                        return this._inputsQueue.push({ input: e, taskDoneDeferred: t }), this._hasFlushBeenScheduled || ((this._hasFlushBeenScheduled = !0), o(s(this._flush, this))), t.promise;
                    }),
                        (r.prototype._flush = function () {
                            try {
                                this._task.call(null, this._inputsQueue);
                            } catch (e) {
                                this._inputsQueue.forEach(function (t) {
                                    t.taskDoneDeferred.reject(e);
                                });
                            }
                            (this._inputsQueue = []), (this._hasFlushBeenScheduled = !1);
                        }),
                        (e.exports = r);
                },
                function (e, t, n) {
                    var r = n(3).Promise;
                    e.exports = r._asap;
                },
                function (e, t, n) {
                    function r(e) {
                        var t,
                            n,
                            r,
                            s = 0;
                        for (i = {}, t = (e = e || o).getElementsByTagName("meta"); t[s]; s++) (n = t[s]), /^twitter:/.test(n.name) && ((r = n.name.replace(/^twitter:/, "")), (i[r] = n.content));
                    }
                    var i,
                        o = n(9);
                    r(),
                        (e.exports = {
                            init: r,
                            val: function (e) {
                                return i[e];
                            },
                        });
                },
                function (e, t, n) {
                    function r(e) {
                        e.forEach(function (e) {
                            var t = e.input.namespace,
                                n = e.input.data,
                                r = e.input.offsite,
                                i = e.input.version;
                            s.clientEvent(t, n, r, i), e.taskDoneDeferred.resolve();
                        });
                    }
                    var i = n(43),
                        o = n(44),
                        s = n(71),
                        a = n(50),
                        u = new (n(72))(function (e) {
                            var t, n, s;
                            if (0 !== e.length) {
                                if (1 === e.length) return r(e);
                                (n = (t = i(e, function (e) {
                                    return a.noticeSeen(e.input.namespace);
                                })).true),
                                    (s = t.false),
                                    n && n.length > 0 && r(n.slice(0, 1)),
                                    s &&
                                        (1 === s.length
                                            ? r
                                            : function (e) {
                                                  o.init(),
                                                      e.forEach(function (e) {
                                                          var t = e.input.namespace,
                                                              n = e.input.data,
                                                              r = e.input.offsite,
                                                              i = e.input.version;
                                                          o.clientEvent(t, n, r, i);
                                                      }),
                                                      o.flush().then(
                                                          function () {
                                                              e.forEach(function (e) {
                                                                  e.taskDoneDeferred.resolve();
                                                              });
                                                          },
                                                          function () {
                                                              e.forEach(function (e) {
                                                                  e.taskDoneDeferred.reject();
                                                              });
                                                          }
                                                      );
                                              })(s);
                            }
                        });
                    e.exports = {
                        scribe: function (e, t, n, r) {
                            return u.add({ namespace: e, data: t, offsite: n, version: r });
                        },
                        pause: function () {
                            u.pause();
                        },
                        resume: function () {
                            u.resume();
                        },
                    };
                },
                function (e, t) {
                    e.exports = function (e, t) {
                        return e.reduce(function (e, n) {
                            var r = t(n);
                            return (e[r] = e[r] || []), e[r].push(n), e;
                        }, {});
                    };
                },
                function (e, t, n) {
                    function r() {
                        var e = a.createElement("form"),
                            t = a.createElement("input"),
                            n = a.createElement("input");
                        return (
                            x++,
                            (e.action = h.CLIENT_EVENT_ENDPOINT),
                            (e.method = "POST"),
                            (e.target = b + x),
                            (e.id = w + x),
                            (t.type = "hidden"),
                            (t.name = "dnt"),
                            (t.value = d.enabled()),
                            (n.type = "hidden"),
                            (n.name = "tfw_redirect"),
                            (n.value = h.RUFOUS_REDIRECT),
                            e.appendChild(t),
                            e.appendChild(n),
                            e
                        );
                    }
                    function i() {
                        var e = b + x;
                        return l({ id: e, name: e, width: 0, height: 0, border: 0 }, { display: "none" }, a.doc);
                    }
                    var o,
                        s,
                        a,
                        u = n(9),
                        c = n(7),
                        l = n(45),
                        d = n(46),
                        f = n(1),
                        p = n(2),
                        h = n(50),
                        m = n(12),
                        g = n(53),
                        v = n(18).get("scribeCallback"),
                        y = Math.floor(1e3 * Math.random()) + "_",
                        b = "rufous-frame-" + y + "-",
                        w = "rufous-form-" + y + "-",
                        x = 0,
                        C = !1,
                        _ = new f();
                    e.exports = {
                        clientEvent: function (e, t, n, r) {
                            (function (e, t) {
                                var n = !m.isObject(e),
                                    r = !!t && !m.isObject(t);
                                return n || r;
                            })(e, t) ||
                                (v && v(arguments),
                                _.promise.then(function () {
                                    !(function (e, t) {
                                        var n, r, i;
                                        m.isObject(e) &&
                                            m.isObject(t) &&
                                            ((i = h.flattenClientEventPayload(e, t)),
                                            ((n = o.firstChild).value = +(+n.value || i.dnt || 0)),
                                            ((r = a.createElement("input")).type = "hidden"),
                                            (r.name = "l"),
                                            (r.value = h.stringify(i)),
                                            o.appendChild(r));
                                    })(h.formatClientEventNamespace(e), h.formatClientEventData(t, n, r));
                                }));
                        },
                        flush: function () {
                            return _.promise.then(function () {
                                var e;
                                return o.children.length <= 2
                                    ? p.reject()
                                    : ((e = p.all([a.doc.body.appendChild(o), a.doc.body.appendChild(s)]).then(function (e) {
                                          var t = e[0],
                                              n = e[1];
                                          return (
                                              n.addEventListener("load", function () {
                                                  !(function (e, t) {
                                                      return function () {
                                                          var n = e.parentNode;
                                                          n && (n.removeChild(e), n.removeChild(t));
                                                      };
                                                  })(t, n)();
                                              }),
                                              t.submit(),
                                              e
                                          );
                                      })),
                                      (o = r()),
                                      (s = i()),
                                      e);
                            });
                        },
                        init: function () {
                            return C
                                ? _.promise
                                : ((a = new g(c))
                                      .insert("rufous-sandbox", null, { display: "none" }, function (e) {
                                          u.body.appendChild(e);
                                      })
                                      .then(function () {
                                          a.setTitle("Twitter analytics iframe"), (o = r()), (s = i()), _.resolve([o, s]);
                                      }),
                                  (C = !0),
                                  _.promise);
                        },
                    };
                },
                function (e, t, n) {
                    var r = n(9),
                        i = n(12);
                    e.exports = function (e, t, n) {
                        var o;
                        if (((n = n || r), (t = t || {}), (e = e || {}).name)) {
                            try {
                                o = n.createElement('<iframe name="' + e.name + '"></iframe>');
                            } catch (t) {
                                (o = n.createElement("iframe")).name = e.name;
                            }
                            delete e.name;
                        } else o = n.createElement("iframe");
                        return (
                            e.id && ((o.id = e.id), delete e.id),
                            (o.allowtransparency = "true"),
                            (o.scrolling = "no"),
                            o.setAttribute("frameBorder", 0),
                            o.setAttribute("allowTransparency", !0),
                            i.forIn(e, function (e, t) {
                                o.setAttribute(e, t);
                            }),
                            i.forIn(t, function (e, t) {
                                o.style[e] = t;
                            }),
                            o
                        );
                    };
                },
                function (e, t, n) {
                    var r = n(9),
                        i = n(11),
                        o = n(47),
                        s = n(49),
                        a = n(26),
                        u = n(41),
                        c = !1,
                        l = /https?:\/\/([^\/]+).*/i;
                    e.exports = {
                        setOn: function () {
                            c = !0;
                        },
                        enabled: function (e, t) {
                            return !!(
                                c ||
                                a.asBoolean(u.val("dnt")) ||
                                s.isUrlSensitive(t || i.host) ||
                                (o.isFramed() && s.isUrlSensitive(o.rootDocumentLocation())) ||
                                ((e = l.test(e || r.referrer) && RegExp.$1), e && s.isUrlSensitive(e))
                            );
                        },
                    };
                },
                function (e, t, n) {
                    var r = n(11),
                        i = n(48),
                        o = n(12),
                        s = i.getCanonicalURL() || r.href,
                        a = s;
                    e.exports = {
                        isFramed: function () {
                            return s !== a;
                        },
                        rootDocumentLocation: function (e) {
                            return e && o.isType("string", e) && (s = e), s;
                        },
                        currentDocumentLocation: function () {
                            return a;
                        },
                    };
                },
                function (e, t, n) {
                    function r(e, t) {
                        var n, r;
                        return (
                            (t = t || o),
                            /^https?:\/\//.test(e)
                                ? e
                                : /^\/\//.test(e)
                                ? t.protocol + e
                                : ((n = t.host + (t.port.length ? ":" + t.port : "")), 0 !== e.indexOf("/") && ((r = t.pathname.split("/")).pop(), r.push(e), (e = "/" + r.join("/"))), [t.protocol, "//", n, e].join(""))
                        );
                    }
                    var i = n(9),
                        o = n(11),
                        s = n(24);
                    e.exports = {
                        absolutize: r,
                        getCanonicalURL: function () {
                            for (var e, t = i.getElementsByTagName("link"), n = 0; t[n]; n++) if ("canonical" == (e = t[n]).rel) return r(e.href);
                        },
                        getScreenNameFromPage: function () {
                            for (var e, t, n, r = [i.getElementsByTagName("a"), i.getElementsByTagName("link")], o = 0, a = 0, u = /\bme\b/; (e = r[o]); o++)
                                for (a = 0; (t = e[a]); a++) if (u.test(t.rel) && (n = s.screenName(t.href))) return n;
                        },
                    };
                },
                function (e, t, n) {
                    function r(e) {
                        return e in s ? s[e] : (s[e] = o.test(e));
                    }
                    var i = n(11),
                        o = /^[^#?]*\.(gov|mil)(:\d+)?([#?].*)?$/i,
                        s = {};
                    e.exports = {
                        isUrlSensitive: r,
                        isHostPageSensitive: function () {
                            return r(i.host);
                        },
                    };
                },
                function (e, t, n) {
                    function r(e) {
                        return u.aug({ client: "tfw" }, e || {});
                    }
                    function i(e, t, n) {
                        return (t = t || {}), u.aug({}, t, { _category_: e, triggered_on: t.triggered_on || +new Date(), dnt: a.enabled(n) });
                    }
                    var o = n(9),
                        s = n(51),
                        a = n(46),
                        u = n(12),
                        c = n(52),
                        l = n(18),
                        d = c.version,
                        f = l.get("clientEventEndpoint") || "https://syndication.twitter.com/i/jot",
                        p = 1;
                    e.exports = {
                        extractTermsFromDOM: function e(t, n) {
                            var r;
                            return (
                                (n = n || {}),
                                t && t.nodeType === Node.ELEMENT_NODE
                                    ? ((r = t.getAttribute("data-scribe")) &&
                                          r.split(" ").forEach(function (e) {
                                              var t = e.trim().split(":"),
                                                  r = t[0],
                                                  i = t[1];
                                              r && i && !n[r] && (n[r] = i);
                                          }),
                                      e(t.parentNode, n))
                                    : n
                            );
                        },
                        flattenClientEventPayload: function (e, t) {
                            return u.aug({}, t, { event_namespace: e });
                        },
                        formatGenericEventData: i,
                        formatClientEventData: function (e, t, n) {
                            var r = (e && e.widget_origin) || o.referrer;
                            return ((e = i("tfw_client_event", e, r)).client_version = d), (e.format_version = void 0 !== n ? n : 1), t || (e.widget_origin = r), e;
                        },
                        formatClientEventNamespace: r,
                        formatTweetAssociation: function (e, t) {
                            var n = {};
                            return ((t = t || {}).association_namespace = r(e)), (n[p] = t), n;
                        },
                        noticeSeen: function (e) {
                            return "notice" === e.element && "seen" === e.action;
                        },
                        splitLogEntry: function (e) {
                            var t, n, r, i, o;
                            return e.item_ids && e.item_ids.length > 1
                                ? ((t = Math.floor(e.item_ids.length / 2)),
                                  (n = e.item_ids.slice(0, t)),
                                  (r = {}),
                                  (i = e.item_ids.slice(t)),
                                  (o = {}),
                                  n.forEach(function (t) {
                                      r[t] = e.item_details[t];
                                  }),
                                  i.forEach(function (t) {
                                      o[t] = e.item_details[t];
                                  }),
                                  [u.aug({}, e, { item_ids: n, item_details: r }), u.aug({}, e, { item_ids: i, item_details: o })])
                                : [e];
                        },
                        stringify: function (e) {
                            var t,
                                n = Array.prototype.toJSON;
                            return delete Array.prototype.toJSON, (t = s.stringify(e)), n && (Array.prototype.toJSON = n), t;
                        },
                        AUDIENCE_ENDPOINT: "https://syndication.twitter.com/i/jot/syndication",
                        CLIENT_EVENT_ENDPOINT: f,
                        RUFOUS_REDIRECT: "https://platform.twitter.com/jot.html",
                    };
                },
                function (e, t, n) {
                    var r = n(7).JSON;
                    e.exports = { stringify: r.stringify || r.encode, parse: r.parse || r.decode };
                },
                function (e, t) {
                    e.exports = { version: "85b189a:1517984532609" };
                },
                function (e, t, n) {
                    var r = n(54),
                        i = n(63);
                    e.exports = r.build([i]);
                },
                function (e, t, n) {
                    var r = n(55),
                        i = n(58),
                        o = n(15);
                    ((r = Object.create(r)).build = o(r.build, null, i)), (e.exports = r);
                },
                function (e, t, n) {
                    var r = n(56),
                        i = n(57),
                        o = n(12);
                    e.exports = {
                        couple: function () {
                            return o.toRealArray(arguments);
                        },
                        build: function (e, t, n) {
                            var o = new e();
                            return (
                                (t = i(r(t || []))).forEach(function (e) {
                                    e.call(null, o);
                                }),
                                o.build(n)
                            );
                        },
                    };
                },
                function (e, t, n) {
                    var r = n(12);
                    e.exports = function e(t) {
                        var n = [];
                        return (
                            t.forEach(function (t) {
                                var i = r.isType("array", t) ? e(t) : [t];
                                n = n.concat(i);
                            }),
                            n
                        );
                    };
                },
                function (e, t) {
                    e.exports = function (e) {
                        return e.filter(function (t, n) {
                            return e.indexOf(t) === n;
                        });
                    };
                },
                function (e, t, n) {
                    function r() {
                        i.apply(this, arguments);
                    }
                    var i = n(59),
                        o = n(12),
                        s = n(62);
                    (r.prototype = Object.create(i.prototype)), o.aug(r.prototype, { factory: s }), (e.exports = r);
                },
                function (e, t, n) {
                    function r() {
                        (this.Component = this.factory()), (this._adviceArgs = []), (this._lastArgs = []);
                    }
                    var i = n(60),
                        o = n(12),
                        s = n(61);
                    o.aug(r.prototype, {
                        factory: s,
                        build: function (e) {
                            var t = this;
                            return (
                                this.Component,
                                o.aug(this.Component.prototype.boundParams, e),
                                this._adviceArgs.concat(this._lastArgs).forEach(function (e) {
                                    (function (e, t, n) {
                                        var r = this[t];
                                        if (!r) throw new Error(t + " does not exist");
                                        this[t] = e(r, n);
                                    }.apply(t.Component.prototype, e));
                                }),
                                delete this._lastArgs,
                                delete this._adviceArgs,
                                this.Component
                            );
                        },
                        params: function (e) {
                            var t = this.Component.prototype.paramConfigs;
                            (e = e || {}), (this.Component.prototype.paramConfigs = o.aug({}, e, t));
                        },
                        define: function (e, t) {
                            if (e in this.Component.prototype) throw new Error(e + " has previously been defined");
                            this.override(e, t);
                        },
                        defineStatic: function (e, t) {
                            this.Component[e] = t;
                        },
                        override: function (e, t) {
                            this.Component.prototype[e] = t;
                        },
                        defineProperty: function (e, t) {
                            if (e in this.Component.prototype) throw new Error(e + " has previously been defined");
                            this.overrideProperty(e, t);
                        },
                        overrideProperty: function (e, t) {
                            var n = o.aug({ configurable: !0 }, t);
                            Object.defineProperty(this.Component.prototype, e, n);
                        },
                        before: function (e, t) {
                            this._adviceArgs.push([i.before, e, t]);
                        },
                        after: function (e, t) {
                            this._adviceArgs.push([i.after, e, t]);
                        },
                        around: function (e, t) {
                            this._adviceArgs.push([i.around, e, t]);
                        },
                        last: function (e, t) {
                            this._lastArgs.push([i.after, e, t]);
                        },
                    }),
                        (e.exports = r);
                },
                function (e, t, n) {
                    var r = n(33),
                        i = n(12),
                        o = n(15);
                    e.exports = {
                        before: function (e, t) {
                            return function () {
                                var n,
                                    i = this,
                                    o = arguments;
                                return (
                                    (n = t.apply(this, arguments)),
                                    r.isPromise(n)
                                        ? n.then(function () {
                                              return e.apply(i, o);
                                          })
                                        : e.apply(this, arguments)
                                );
                            };
                        },
                        after: function (e, t) {
                            return function () {
                                function n(e, t) {
                                    return r.isPromise(t)
                                        ? t.then(function () {
                                              return e;
                                          })
                                        : e;
                                }
                                var i,
                                    o = this,
                                    s = arguments;
                                return (
                                    (i = e.apply(this, arguments)),
                                    r.isPromise(i)
                                        ? i.then(function (e) {
                                              return n(e, t.apply(o, s));
                                          })
                                        : n(i, t.apply(this, arguments))
                                );
                            };
                        },
                        around: function (e, t) {
                            return function () {
                                var n = i.toRealArray(arguments);
                                return n.unshift(o(e, this)), t.apply(this, n);
                            };
                        },
                    };
                },
                function (e, t, n) {
                    function r() {
                        return !0;
                    }
                    function i(e) {
                        return e;
                    }
                    function o(e, t, n) {
                        var r = null;
                        return (
                            e.some(function (e) {
                                if (((e = s.isType("function", e) ? e() : e), t(e))) return (r = n(e)), !0;
                            }),
                            r
                        );
                    }
                    var s = n(12);
                    e.exports = function () {
                        function e(e) {
                            var t = this;
                            (e = e || {}),
                                (this.params = Object.keys(this.paramConfigs).reduce(function (n, s) {
                                    var a = [],
                                        u = t.boundParams,
                                        c = t.paramConfigs[s],
                                        l = c.validate || r,
                                        d = c.transform || i;
                                    if ((s in u && a.push(u[s]), s in e && a.push(e[s]), (a = "fallback" in c ? a.concat(c.fallback) : a), (n[s] = o(a, l, d)), c.required && null == n[s])) throw new Error(s + " is a required parameter");
                                    return n;
                                }, {})),
                                this.initialize();
                        }
                        return s.aug(e.prototype, { paramConfigs: {}, boundParams: {}, initialize: function () {} }), e;
                    };
                },
                function (e, t, n) {
                    var r = n(21),
                        i = n(36),
                        o = n(61),
                        s = n(2),
                        a = n(12);
                    e.exports = function () {
                        function e(e) {
                            t.apply(this, arguments), Object.defineProperty(this, "targetGlobal", { value: e });
                        }
                        var t = o();
                        return (
                            (e.prototype = Object.create(t.prototype)),
                            a.aug(e.prototype, {
                                id: null,
                                initialized: !1,
                                width: 0,
                                height: 0,
                                sandboxEl: null,
                                insert: function () {
                                    return s.reject();
                                },
                                onResize: function () {},
                                addClass: function (e) {
                                    var t = this.sandboxEl;
                                    return (
                                        (e = Array.isArray(e) ? e : [e]),
                                        i.write(function () {
                                            e.forEach(function (e) {
                                                r.add(t, e);
                                            });
                                        })
                                    );
                                },
                                removeClass: function (e) {
                                    var t = this.sandboxEl;
                                    return (
                                        (e = Array.isArray(e) ? e : [e]),
                                        i.write(function () {
                                            e.forEach(function (e) {
                                                r.remove(t, e);
                                            });
                                        })
                                    );
                                },
                                styleSelf: function (e) {
                                    var t = this;
                                    return i.write(function () {
                                        a.forIn(e, function (e, n) {
                                            t.sandboxEl.style[e] = n;
                                        });
                                    });
                                },
                            }),
                            e
                        );
                    };
                },
                function (e, t, n) {
                    function r(e, t, n, r) {
                        return (t = v.aug({ id: e }, x, t)), (n = v.aug({}, C, n)), p(t, n, r);
                    }
                    function i(e, t, n, i, s) {
                        var u = new m(),
                            c = b.generate(),
                            l = r(e, t, n, s);
                        return (
                            y.set(["sandbox", c], function () {
                                var e = l.contentWindow.document;
                                a.write(function () {
                                    e.write("<!DOCTYPE html><html><head></head><body></body></html>");
                                }).then(function () {
                                    e.close(), u.resolve(l);
                                });
                            }),
                            (l.src = ["javascript:", 'document.write("");', "try { window.parent.document; }", 'catch (e) { document.domain="' + o.domain + '"; }', "window.parent." + y.fullPath(["sandbox", c]) + "();"].join("")),
                            l.addEventListener("error", u.reject, !1),
                            a.write(function () {
                                i.parentNode.replaceChild(l, i);
                            }),
                            u.promise
                        );
                    }
                    var o = n(9),
                        s = n(21),
                        a = n(36),
                        u = n(64),
                        c = n(54),
                        l = n(65),
                        d = n(66),
                        f = n(67),
                        p = n(45),
                        h = (n(10), n(68)),
                        m = n(1),
                        g = n(2),
                        v = n(12),
                        y = n(18),
                        b = n(29),
                        w = n(15),
                        x = { allowfullscreen: "true" },
                        C = { position: "absolute", visibility: "hidden", display: "block", width: "0px", height: "0px", padding: "0", border: "none" },
                        _ = { position: "static", visibility: "visible" },
                        E = "SandboxRoot",
                        T = ".SandboxRoot { display: none; }",
                        k = 50;
                    e.exports = c.couple(n(69), function (e) {
                        e.overrideProperty("id", {
                            get: function () {
                                return this.sandboxEl && this.sandboxEl.id;
                            },
                        }),
                            e.overrideProperty("initialized", {
                                get: function () {
                                    return !!this.win;
                                },
                            }),
                            e.overrideProperty("width", {
                                get: function () {
                                    return this._width;
                                },
                            }),
                            e.overrideProperty("height", {
                                get: function () {
                                    return this._height;
                                },
                            }),
                            e.overrideProperty("sandboxEl", {
                                get: function () {
                                    return this.iframeEl;
                                },
                            }),
                            e.defineProperty("iframeEl", {
                                get: function () {
                                    return this._iframe;
                                },
                            }),
                            e.defineProperty("rootEl", {
                                get: function () {
                                    return this.doc && this.doc.documentElement;
                                },
                            }),
                            e.defineProperty("widgetEl", {
                                get: function () {
                                    return this.doc && this.doc.body.firstElementChild;
                                },
                            }),
                            e.defineProperty("win", {
                                get: function () {
                                    return this.iframeEl && this.iframeEl.contentWindow;
                                },
                            }),
                            e.defineProperty("doc", {
                                get: function () {
                                    return this.win && this.win.document;
                                },
                            }),
                            e.define("_updateCachedDimensions", function () {
                                var e = this;
                                return a.read(function () {
                                    var t,
                                        n = h(e.sandboxEl);
                                    "visible" == e.sandboxEl.style.visibility ? (e._width = n.width) : ((t = h(e.sandboxEl.parentElement).width), (e._width = Math.min(n.width, t))), (e._height = n.height);
                                });
                            }),
                            e.define("_setTargetToBlank", function () {
                                var e = this.createElement("base");
                                (e.target = "_blank"), this.doc.head.appendChild(e);
                            }),
                            e.define("_didResize", function () {
                                var e = this,
                                    t = this._resizeHandlers.slice(0);
                                return this._updateCachedDimensions().then(function () {
                                    t.forEach(function (t) {
                                        t(e);
                                    });
                                });
                            }),
                            e.define("setTitle", function (e) {
                                this.iframeEl.title = e;
                            }),
                            e.override("createElement", function (e) {
                                return this.doc.createElement(e);
                            }),
                            e.override("createFragment", function () {
                                return this.doc.createDocumentFragment();
                            }),
                            e.override("htmlToElement", function (e) {
                                var t;
                                return ((t = this.createElement("div")).innerHTML = e), t.firstElementChild;
                            }),
                            e.override("hasSelectedText", function () {
                                return !!u.getSelectedText(this.win);
                            }),
                            e.override("addRootClass", function (e) {
                                var t = this.rootEl;
                                return (
                                    (e = Array.isArray(e) ? e : [e]),
                                    this.initialized
                                        ? a.write(function () {
                                              e.forEach(function (e) {
                                                  s.add(t, e);
                                              });
                                          })
                                        : g.reject(new Error("sandbox not initialized"))
                                );
                            }),
                            e.override("removeRootClass", function (e) {
                                var t = this.rootEl;
                                return (
                                    (e = Array.isArray(e) ? e : [e]),
                                    this.initialized
                                        ? a.write(function () {
                                              e.forEach(function (e) {
                                                  s.remove(t, e);
                                              });
                                          })
                                        : g.reject(new Error("sandbox not initialized"))
                                );
                            }),
                            e.override("hasRootClass", function (e) {
                                return s.present(this.rootEl, e);
                            }),
                            e.define("addStyleSheet", function (e, t) {
                                var n,
                                    r = new m();
                                return this.initialized
                                    ? (((n = this.createElement("link")).type = "text/css"),
                                      (n.rel = "stylesheet"),
                                      (n.href = e),
                                      n.addEventListener("load", r.resolve, !1),
                                      n.addEventListener("error", r.reject, !1),
                                      a.write(w(t, null, n)).then(function () {
                                          return l(e).then(r.resolve, r.reject), r.promise;
                                      }))
                                    : g.reject(new Error("sandbox not initialized"));
                            }),
                            e.override("prependStyleSheet", function (e) {
                                var t = this.doc;
                                return this.addStyleSheet(e, function (e) {
                                    var n = t.head.firstElementChild;
                                    return n ? t.head.insertBefore(e, n) : t.head.appendChild(e);
                                });
                            }),
                            e.override("appendStyleSheet", function (e) {
                                var t = this.doc;
                                return this.addStyleSheet(e, function (e) {
                                    return t.head.appendChild(e);
                                });
                            }),
                            e.define("addCss", function (e, t) {
                                var n;
                                return d.inlineStyle() ? (((n = this.createElement("style")).type = "text/css"), n.appendChild(this.doc.createTextNode(e)), a.write(w(t, null, n))) : g.resolve();
                            }),
                            e.override("prependCss", function (e) {
                                var t = this.doc;
                                return this.addCss(e, function (e) {
                                    var n = t.head.firstElementChild;
                                    return n ? t.head.insertBefore(e, n) : t.head.appendChild(e);
                                });
                            }),
                            e.override("appendCss", function (e) {
                                var t = this.doc;
                                return this.addCss(e, function (e) {
                                    return t.head.appendChild(e);
                                });
                            }),
                            e.override("makeVisible", function () {
                                var e = this;
                                return this.styleSelf(_).then(function () {
                                    e._updateCachedDimensions();
                                });
                            }),
                            e.override("injectWidgetEl", function (e) {
                                var t = this;
                                return this.initialized
                                    ? this.widgetEl
                                        ? g.reject(new Error("widget already injected"))
                                        : a.write(function () {
                                              t.doc.body.appendChild(e);
                                          })
                                    : g.reject(new Error("sandbox not initialized"));
                            }),
                            e.override("matchHeightToContent", function () {
                                var e,
                                    t = this;
                                return (
                                    a.read(function () {
                                        e = t.widgetEl ? h(t.widgetEl).height : 0;
                                    }),
                                    a
                                        .write(function () {
                                            t.sandboxEl.style.height = e + "px";
                                        })
                                        .then(function () {
                                            return t._updateCachedDimensions();
                                        })
                                );
                            }),
                            e.override("matchWidthToContent", function () {
                                var e,
                                    t = this;
                                return (
                                    a.read(function () {
                                        e = t.widgetEl ? h(t.widgetEl).width : 0;
                                    }),
                                    a
                                        .write(function () {
                                            t.sandboxEl.style.width = e + "px";
                                        })
                                        .then(function () {
                                            return t._updateCachedDimensions();
                                        })
                                );
                            }),
                            e.after("initialize", function () {
                                (this._iframe = null), (this._width = this._height = 0), (this._resizeHandlers = []);
                            }),
                            e.override("insert", function (e, t, n, o) {
                                var s = this,
                                    u = new m(),
                                    c = this.targetGlobal.document,
                                    l = r(e, t, n, c);
                                return (
                                    a.write(w(o, null, l)),
                                    l.addEventListener(
                                        "load",
                                        function () {
                                            (function (e) {
                                                try {
                                                    e.contentWindow.document;
                                                } catch (e) {
                                                    return g.reject(e);
                                                }
                                                return g.resolve(e);
                                            })(l)
                                                .then(null, w(i, null, e, t, n, l, c))
                                                .then(u.resolve, u.reject);
                                        },
                                        !1
                                    ),
                                    l.addEventListener("error", u.reject, !1),
                                    u.promise.then(function (e) {
                                        var t = f(s._didResize, k, s);
                                        return (s._iframe = e), s.win.addEventListener("resize", t, !1), g.all([s._setTargetToBlank(), s.addRootClass(E), s.prependCss(T)]);
                                    })
                                );
                            }),
                            e.override("onResize", function (e) {
                                this._resizeHandlers.push(e);
                            }),
                            e.after("styleSelf", function () {
                                return this._updateCachedDimensions();
                            });
                    });
                },
                function (e, t, n) {
                    function r(e) {
                        return (e = e || i).getSelection && e.getSelection();
                    }
                    var i = n(7);
                    e.exports = {
                        getSelection: r,
                        getSelectedText: function (e) {
                            var t = r(e);
                            return t ? t.toString() : "";
                        },
                    };
                },
                function (e, t, n) {
                    var r = n(9),
                        i = n(7),
                        o = n(1),
                        s = 2e4;
                    e.exports = function (e) {
                        var t = new o(),
                            n = r.createElement("img");
                        return (
                            (n.onload = n.onerror = function () {
                                i.setTimeout(t.resolve, 50);
                            }),
                            (n.src = e),
                            i.setTimeout(t.reject, s),
                            t.promise
                        );
                    };
                },
                function (e, t, n) {
                    var r,
                        i = n(21),
                        o = n(9),
                        s = n(7),
                        a = n(41),
                        u = n(38),
                        c = n(26),
                        l = n(29),
                        d = "csptest";
                    e.exports = {
                        inlineStyle: function () {
                            var e = d + l.generate(),
                                t = o.createElement("div"),
                                n = o.createElement("style"),
                                f = "." + e + " { visibility: hidden; }";
                            return (
                                !!o.body &&
                                (c.asBoolean(a.val("widgets:csp")) && (r = !1),
                                void 0 !== r
                                    ? r
                                    : ((t.style.display = "none"),
                                      i.add(t, e),
                                      (n.type = "text/css"),
                                      n.appendChild(o.createTextNode(f)),
                                      o.body.appendChild(n),
                                      o.body.appendChild(t),
                                      (r = "hidden" === s.getComputedStyle(t).visibility),
                                      u(t),
                                      u(n),
                                      r))
                            );
                        },
                    };
                },
                function (e, t, n) {
                    var r = n(7);
                    e.exports = function (e, t, n) {
                        var i,
                            o = 0;
                        return (
                            (n = n || null),
                            function s() {
                                var a = n || this,
                                    u = arguments,
                                    c = +new Date();
                                return (
                                    r.clearTimeout(i),
                                    c - o > t
                                        ? ((o = c), void e.apply(a, u))
                                        : void (i = r.setTimeout(function () {
                                              s.apply(a, u);
                                          }, t))
                                );
                            }
                        );
                    };
                },
                function (e, t) {
                    e.exports = function (e) {
                        var t = e.getBoundingClientRect();
                        return { width: t.width, height: t.height };
                    };
                },
                function (e, t, n) {
                    var r = n(70);
                    e.exports = function (e) {
                        e.define("createElement", r),
                            e.define("createFragment", r),
                            e.define("htmlToElement", r),
                            e.define("hasSelectedText", r),
                            e.define("addRootClass", r),
                            e.define("removeRootClass", r),
                            e.define("hasRootClass", r),
                            e.define("prependStyleSheet", r),
                            e.define("appendStyleSheet", r),
                            e.define("prependCss", r),
                            e.define("appendCss", r),
                            e.define("makeVisible", r),
                            e.define("injectWidgetEl", r),
                            e.define("matchHeightToContent", r),
                            e.define("matchWidthToContent", r);
                    };
                },
                function (e, t) {
                    e.exports = function () {
                        throw new Error("unimplemented method");
                    };
                },
                function (e, t, n) {
                    function r(e, t, n, r) {
                        var o = !f.isObject(e),
                            s = !!t && !f.isObject(t);
                        o || s || (p && p(arguments), i(d.formatClientEventNamespace(e), d.formatClientEventData(t, n, r), d.CLIENT_EVENT_ENDPOINT));
                    }
                    function i(e, t, n) {
                        var r, i;
                        n && f.isObject(e) && f.isObject(t) && ((r = d.flattenClientEventPayload(e, t)), (i = { l: d.stringify(r) }), d.noticeSeen(e) && (i.notice_seen = !0), r.dnt && (i.dnt = 1), u(l.url(n, i)));
                    }
                    function o(e, t, n, r) {
                        var i = !f.isObject(e),
                            o = !!t && !f.isObject(t);
                        if (!i && !o) return s(d.flattenClientEventPayload(d.formatClientEventNamespace(e), d.formatClientEventData(t, n, r)));
                    }
                    function s(e) {
                        return m.push(e), m;
                    }
                    function a(e) {
                        return encodeURIComponent(e).length + 3;
                    }
                    function u(e) {
                        return (new Image().src = e);
                    }
                    var c = n(46),
                        l = n(25),
                        d = n(50),
                        f = n(12),
                        p = n(18).get("scribeCallback"),
                        h = 2083,
                        m = [],
                        g = l.url(d.CLIENT_EVENT_ENDPOINT, { dnt: 0, l: "" }),
                        v = encodeURIComponent(g).length;
                    e.exports = {
                        _enqueueRawObject: s,
                        scribe: i,
                        clientEvent: r,
                        clientEvent2: function (e, t, n) {
                            return r(e, t, n, 2);
                        },
                        enqueueClientEvent: o,
                        flushClientEvents: function () {
                            var e;
                            return (
                                m.length > 1 && o({ page: "widgets_js", component: "scribe_pixel", action: "batch_log" }, {}),
                                (e = m),
                                (m = []),
                                e
                                    .reduce(function (t, n, r) {
                                        var i = t.length,
                                            o = i && t[i - 1];
                                        return (
                                            r + 1 == e.length && n.event_namespace && "batch_log" == n.event_namespace.action && (n.message = ["entries:" + r, "requests:" + i].join("/")),
                                            (function e(t) {
                                                return (
                                                    Array.isArray(t) || (t = [t]),
                                                    t.reduce(function (t, n) {
                                                        var r,
                                                            i = d.stringify(n),
                                                            o = a(i);
                                                        return v + o < h ? (t = t.concat(i)) : (r = d.splitLogEntry(n)).length > 1 && (t = t.concat(e(r))), t;
                                                    }, [])
                                                );
                                            })(n).forEach(function (e) {
                                                var n = a(e);
                                                (!o || o.urlLength + n > h) && ((o = { urlLength: v, items: [] }), t.push(o)), (o.urlLength += n), o.items.push(e);
                                            }),
                                            t
                                        );
                                    }, [])
                                    .map(function (e) {
                                        var t = { l: e.items };
                                        return c.enabled() && (t.dnt = 1), u(l.url(d.CLIENT_EVENT_ENDPOINT, t));
                                    })
                            );
                        },
                        interaction: function (e, t, n, i) {
                            var o = d.extractTermsFromDOM(e.target || e.srcElement);
                            (o.action = i || "click"), r(o, t, n);
                        },
                    };
                },
                function (e, t, n) {
                    function r(e, t) {
                        (this._inputsQueue = []), (this._task = e), (this._isPaused = !1), (this._flushDelay = (t && t.flushDelay) || s), (this._pauseLength = (t && t.pauseLength) || a), (this._flushTimeout = void 0);
                    }
                    var i = n(1),
                        o = n(15),
                        s = 100,
                        a = 3e3;
                    (r.prototype.add = function (e) {
                        var t = new i();
                        return this._inputsQueue.push({ input: e, taskDoneDeferred: t }), this._scheduleFlush(), t.promise;
                    }),
                        (r.prototype._scheduleFlush = function () {
                            this._isPaused || (clearTimeout(this._flushTimeout), (this._flushTimeout = setTimeout(o(this._flush, this), this._flushDelay)));
                        }),
                        (r.prototype._flush = function () {
                            try {
                                this._task.call(null, this._inputsQueue);
                            } catch (e) {
                                this._inputsQueue.forEach(function (t) {
                                    t.taskDoneDeferred.reject(e);
                                });
                            }
                            (this._inputsQueue = []), (this._flushTimeout = void 0);
                        }),
                        (r.prototype.pause = function (e) {
                            clearTimeout(this._flushTimeout), (this._isPaused = !0), !e && this._pauseLength && setTimeout(o(this.resume, this), this._pauseLength);
                        }),
                        (r.prototype.resume = function () {
                            (this._isPaused = !1), this._scheduleFlush();
                        }),
                        (e.exports = r);
                },
                function (e, t, n) {
                    function r(e) {
                        return o.settingsLoaded().then(function (t) {
                            return t[e];
                        });
                    }
                    function i() {
                        return r("experiments");
                    }
                    var o = n(74);
                    e.exports = {
                        isBucketed: function () {
                            return r("isBucketed");
                        },
                        shouldObtainCookieConsent: function () {
                            return r("shouldObtainCookieConsent");
                        },
                        getExperiments: i,
                        getExperiment: function (e) {
                            return i().then(function (t) {
                                if (!t[e]) throw new Error("Experiment not found");
                                return t[e];
                            });
                        },
                        getExperimentKeys: function () {
                            return i().then(function (e) {
                                return Object.keys(e);
                            });
                        },
                        load: function () {
                            o.load();
                        },
                    };
                },
                function (e, t, n) {
                    function r(e) {
                        var t = e || { is_bucketed: !1, should_obtain_cookie_consent: !0, experiments: {} };
                        return new m(t.is_bucketed, t.should_obtain_cookie_consent, t.experiments);
                    }
                    var i,
                        o = n(45),
                        s = n(1),
                        a = n(9),
                        u = n(51),
                        c = n(11),
                        l = n(25),
                        d = n(7),
                        f = n(8),
                        p = n(75),
                        h = n(76),
                        m = (n(10), n(77));
                    e.exports = {
                        load: function () {
                            var e, t, n, m;
                            return (
                                (i = new s()),
                                f.ie9() || f.ie10() || ("http:" !== c.protocol && "https:" !== c.protocol)
                                    ? void i.resolve(r())
                                    : ((e = { origin: c.origin }),
                                      (t = l.url(p.resourceBaseUrl + p.widgetIframeHtmlPath, e)),
                                      (n = function (e) {
                                          var n;
                                          if (t.substr(0, e.origin.length) === e.origin)
                                              try {
                                                  (n = u.parse(e.data)).namespace === h.settings && i.resolve(r(n.settings));
                                              } catch (e) {}
                                      }),
                                      d.addEventListener("message", n),
                                      (m = o({ src: t }, { display: "none" })),
                                      void a.body.appendChild(m))
                            );
                        },
                        settingsLoaded: function () {
                            var e = new s();
                            return (
                                i.promise
                                    .then(function (t) {
                                        e.resolve(t);
                                    })
                                    .catch(function (t) {
                                        e.reject(t);
                                    }),
                                e.promise
                            );
                        },
                    };
                },
                function (e, t) {
                    e.exports = {
                        tweetButtonHtmlPath: "/widgets/tweet_button.36c0c29c73929bf937f4c70adb1a29e4.{{lang}}.html",
                        followButtonHtmlPath: "/widgets/follow_button.36c0c29c73929bf937f4c70adb1a29e4.{{lang}}.html",
                        hubHtmlPath: "/widgets/hub.html",
                        widgetIframeHtmlPath: "/widgets/widget_iframe.36c0c29c73929bf937f4c70adb1a29e4.html",
                        resourceBaseUrl: "https://platform.twitter.com",
                    };
                },
                function (e, t) {
                    e.exports = { settings: "twttr.settings" };
                },
                function (e, t) {
                    e.exports = function (e, t, n) {
                        (this.isBucketed = e), (this.shouldObtainCookieConsent = t), (this.experiments = n || {});
                    };
                },
                function (e, t, n) {
                    e.exports = [n(79), n(112), n(127), n(161), n(172), n(178), n(223), n(242), n(247)];
                },
                function (e, t, n) {
                    var r = n(25),
                        i = n(26),
                        o = n(12),
                        s = n(80),
                        a = n(82)(),
                        u = n(85),
                        c = "a.twitter-dm-button";
                    e.exports = function (e) {
                        return a(e, c).map(function (e) {
                            return u(
                                (function (e) {
                                    var t = e.getAttribute("data-show-screen-name"),
                                        n = s(e),
                                        a = e.getAttribute("href"),
                                        u = e.getAttribute("data-screen-name"),
                                        c = t ? i.asBoolean(t) : null,
                                        l = e.getAttribute("data-size"),
                                        d = r.decodeURL(a),
                                        f = d.recipient_id,
                                        p = e.getAttribute("data-text") || d.text,
                                        h = e.getAttribute("data-welcome-message-id") || d.welcomeMessageId;
                                    return o.aug(n, { screenName: u, showScreenName: c, size: l, text: p, userId: f, welcomeMessageId: h });
                                })(e),
                                e.parentNode,
                                e
                            );
                        });
                    };
                },
                function (e, t, n) {
                    var r = n(46),
                        i = n(26),
                        o = n(25),
                        s = n(12),
                        a = n(81);
                    e.exports = function (e) {
                        var t = e.href && e.href.split("?")[1],
                            n = t ? o.decode(t) : {},
                            u = {
                                lang: a(e),
                                width: e.getAttribute("data-width") || e.getAttribute("width"),
                                height: e.getAttribute("data-height") || e.getAttribute("height"),
                                related: e.getAttribute("data-related"),
                                partner: e.getAttribute("data-partner"),
                            };
                        return (
                            i.asBoolean(e.getAttribute("data-dnt")) && r.setOn(),
                            s.forIn(u, function (e, t) {
                                var r = n[e];
                                n[e] = i.hasValue(r) ? r : t;
                            }),
                            s.compact(n)
                        );
                    };
                },
                function (e, t, n) {
                    var r = n(12);
                    e.exports = function e(t) {
                        var n;
                        if (t) return (n = t.lang || t.getAttribute("data-lang")), r.isType("string", n) ? n : e(t.parentElement);
                    };
                },
                function (e, t, n) {
                    var r = n(83),
                        i = n(29);
                    e.exports = function () {
                        var e = "data-twitter-extracted-" + i.generate();
                        return function (t, n) {
                            return r(t, n)
                                .filter(function (t) {
                                    return !t.hasAttribute(e);
                                })
                                .map(function (t) {
                                    return t.setAttribute(e, "true"), t;
                                });
                        };
                    };
                },
                function (e, t, n) {
                    var r = n(12),
                        i = n(84);
                    e.exports = function (e, t) {
                        return i(e, t) ? [e] : r.toRealArray(e.querySelectorAll(t));
                    };
                },
                function (e, t, n) {
                    var r = n(7).HTMLElement,
                        i = r.prototype.matches || r.prototype.matchesSelector || r.prototype.webkitMatchesSelector || r.prototype.mozMatchesSelector || r.prototype.msMatchesSelector || r.prototype.oMatchesSelector;
                    e.exports = function (e, t) {
                        if (i) return i.call(e, t);
                    };
                },
                function (e, t, n) {
                    var r = n(86),
                        i = n(87),
                        o = n(108);
                    e.exports = function (e, t, n) {
                        return new r(i, o, "twitter-dm-button", e, t, n);
                    };
                },
                function (e, t) {
                    function n(e, t, n, r, i, o) {
                        (this.factory = e), (this.Sandbox = t), (this.srcEl = o), (this.targetEl = i), (this.parameters = r), (this.className = n);
                    }
                    (n.prototype.destroy = function () {
                        this.srcEl = this.targetEl = null;
                    }),
                        (e.exports = n);
                },
                function (e, t, n) {
                    var r = n(1);
                    e.exports = function (e, t) {
                        var i = new r();
                        return (
                            n.e(1, function (r, o) {
                                var s;
                                if (r) return i.reject(r);
                                try {
                                    (s = n(88)), i.resolve(new s(e, t));
                                } catch (e) {
                                    i.reject(e);
                                }
                            }),
                            i.promise
                        );
                    };
                },
                ,
                function (e, t, n) {
                    var r = n(55),
                        i = n(90),
                        o = n(15);
                    ((r = Object.create(r)).build = o(r.build, null, i)), (e.exports = r);
                },
                function (e, t, n) {
                    function r() {
                        i.apply(this, arguments), (this.Widget = this.Component);
                    }
                    var i = n(59),
                        o = n(12),
                        s = n(91);
                    (r.prototype = Object.create(i.prototype)),
                        o.aug(r.prototype, {
                            factory: s,
                            build: function () {
                                return i.prototype.build.apply(this, arguments);
                            },
                            selectors: function (e) {
                                var t = this.Widget.prototype.selectors;
                                (e = e || {}), (this.Widget.prototype.selectors = o.aug({}, e, t));
                            },
                        }),
                        (e.exports = r);
                },
                function (e, t, n) {
                    var r = n(2),
                        i = n(20),
                        o = n(61),
                        s = n(12),
                        a = n(15),
                        u = n(92),
                        c = "twitter-widget-";
                    e.exports = function () {
                        function e(e, n) {
                            t.apply(this, arguments), (this.id = c + u()), (this.sandbox = n);
                        }
                        var t = o();
                        return (
                            (e.prototype = Object.create(t.prototype)),
                            s.aug(e.prototype, {
                                selectors: {},
                                hydrate: function () {
                                    return r.resolve();
                                },
                                prepForInsertion: function () {},
                                render: function () {
                                    return r.resolve();
                                },
                                show: function () {
                                    return r.resolve();
                                },
                                resize: function () {
                                    return r.resolve();
                                },
                                select: function (e, t) {
                                    return 1 === arguments.length && ((t = e), (e = this.el)), e ? ((t = this.selectors[t] || t), s.toRealArray(e.querySelectorAll(t))) : [];
                                },
                                selectOne: function () {
                                    return this.select.apply(this, arguments)[0];
                                },
                                selectLast: function () {
                                    return this.select.apply(this, arguments).pop();
                                },
                                on: function (e, t, n) {
                                    var r,
                                        o = this.el;
                                    this.el &&
                                        ((e = (e || "").split(/\s+/)),
                                        2 === arguments.length ? (n = t) : (r = t),
                                        (r = this.selectors[r] || r),
                                        (n = a(n, this)),
                                        e.forEach(
                                            r
                                                ? function (e) {
                                                      i.delegate(o, e, r, n);
                                                  }
                                                : function (e) {
                                                      o.addEventListener(e, n, !1);
                                                  }
                                        ));
                                },
                            }),
                            e
                        );
                    };
                },
                function (e, t) {
                    var n = 0;
                    e.exports = function () {
                        return String(n++);
                    };
                },
                ,
                function (e, t, n) {
                    function r(e, t, n) {
                        var r, s;
                        return (
                            (n = (function (e) {
                                return "dark" === e ? "dark" : "light";
                            })(n)),
                            (r = i.isRtlLang(t) ? "rtl" : "ltr"),
                            (s = [e, o.css, n, r, "css"].join(".")),
                            a.resourceBaseUrl + "/css/" + s
                        );
                    }
                    var i = n(95),
                        o = n(98),
                        s = n(15),
                        a = n(75);
                    e.exports = {
                        dmButton: function () {
                            return a.resourceBaseUrl + "/css/" + ["dm_button", o.css, "css"].join(".");
                        },
                        tweet: s(r, null, "tweet"),
                        timeline: s(r, null, "timeline"),
                        video: s(r, null, "video"),
                        moment: s(r, null, "moment"),
                        grid: s(r, null, "grid"),
                        periscopeOnAir: function () {
                            return a.resourceBaseUrl + "/css/" + ["periscope_on_air", o.css, "css"].join(".");
                        },
                    };
                },
                function (e, t, n) {
                    var r = n(12),
                        i = n(96),
                        o = ["ar", "fa", "he", "ur"];
                    e.exports = {
                        isRtlLang: function (e) {
                            return (e = String(e).toLowerCase()), r.contains(o, e);
                        },
                        matchLanguage: function (e) {
                            return (e = (e = (e || "").toLowerCase()).replace("_", "-")), i(e) ? e : ((e = e.replace(/-.*/, "")), i(e) ? e : "en");
                        },
                    };
                },
                function (e, t, n) {
                    var r = n(12),
                        i = n(97);
                    e.exports = function (e) {
                        return "en" === e || r.contains(i, e);
                    };
                },
                function (e, t) {
                    e.exports = [
                        "hi",
                        "zh-cn",
                        "fr",
                        "zh-tw",
                        "msa",
                        "fil",
                        "fi",
                        "sv",
                        "pl",
                        "ja",
                        "ko",
                        "de",
                        "it",
                        "pt",
                        "es",
                        "ru",
                        "id",
                        "tr",
                        "da",
                        "no",
                        "nl",
                        "hu",
                        "fa",
                        "ar",
                        "ur",
                        "he",
                        "th",
                        "cs",
                        "uk",
                        "vi",
                        "ro",
                        "bn",
                        "el",
                        "en-gb",
                        "gu",
                        "kn",
                        "mr",
                        "ta",
                        "bg",
                        "ca",
                        "hr",
                        "sr",
                        "sk",
                    ];
                },
                function (e, t) {
                    e.exports = { css: "b7949fc5ae6443c45d48eb17624f02ee" };
                },
                ,
                function (e, t, n) {
                    var r = n(101),
                        i = n(24),
                        o = "data-url-ref-attrs-injected";
                    e.exports = function (e) {
                        e.define("injectRefUrlParams", function (e) {
                            e.getAttribute(o) || (e.setAttribute(o, !0), (e.href = r(e.href)));
                        }),
                            e.after("render", function () {
                                this.on("click", "A", function (e, t) {
                                    i.isTwitterURL(t.href) && this.injectRefUrlParams(t);
                                });
                            });
                    };
                },
                function (e, t, n) {
                    var r = n(25),
                        i = n(47),
                        o = "twsrc^tfw";
                    e.exports = function (e) {
                        return r.url(e, { ref_src: o, ref_url: i.rootDocumentLocation() });
                    };
                },
                function (e, t, n) {
                    var r = n(42),
                        i = n(50),
                        o = n(47),
                        s = n(12),
                        a = n(15),
                        u = n(41),
                        c = n(26),
                        l = n(103);
                    e.exports = function (e) {
                        e.params({ partner: { fallback: a(u.val, u, "partner") } }),
                            e.define("scribeItems", function () {
                                return {};
                            }),
                            e.define("scribeNamespace", function () {
                                return { client: "tfw" };
                            }),
                            e.define("scribeData", function () {
                                return {
                                    widget_origin: o.rootDocumentLocation(),
                                    widget_frame: o.isFramed() && o.currentDocumentLocation(),
                                    widget_partner: this.params.partner,
                                    widget_site_screen_name: l(u.val("site")),
                                    widget_site_user_id: c.asNumber(u.val("site:id")),
                                    widget_creator_screen_name: l(u.val("creator")),
                                    widget_creator_user_id: c.asNumber(u.val("creator:id")),
                                };
                            }),
                            e.define("scribe", function (e, t, n) {
                                (e = s.aug(this.scribeNamespace(), e || {})), (t = s.aug(this.scribeData(), t || {})), r.scribe(e, t, !1, n);
                            }),
                            e.define("scribeInteraction", function (e, t, n) {
                                var r = i.extractTermsFromDOM(e.target);
                                (r.action = e.type), this.scribe(r, t, n);
                            });
                    };
                },
                function (e, t) {
                    e.exports = function (e) {
                        return e && "@" === e[0] ? e.substr(1) : e;
                    };
                },
                ,
                function (e, t, n) {
                    var r = n(22),
                        i = n(89),
                        o = n(106);
                    e.exports = i.couple(n(102), function (e) {
                        e.selectors({ tweetIdInfo: ".js-tweetIdInfo" }),
                            e.define("scribeClickInteraction", function (e, t) {
                                var n = r.closest(this.selectors.tweetIdInfo, t, this.el);
                                this.scribeInteraction(
                                    e,
                                    (function (e) {
                                        var t;
                                        if (e) return (t = o([e])), { item_ids: Object.keys(t), item_details: t };
                                    })(n)
                                );
                            }),
                            e.after("render", function () {
                                this.on("click", "A", this.scribeClickInteraction), this.on("click", "BUTTON", this.scribeClickInteraction);
                            });
                    });
                },
                function (e, t, n) {
                    var r = n(107);
                    e.exports = function (e) {
                        return e
                            ? (e = Array.isArray(e) ? e : [e]).reduce(function (e, t) {
                                  var n = t.getAttribute("data-tweet-id"),
                                      i = t.getAttribute("data-rendered-tweet-id") || n;
                                  return n === i ? (e[i] = { item_type: r.TWEET }) : n && (e[i] = { item_type: r.RETWEET, target_type: r.TWEET, target_id: n }), e;
                              }, {})
                            : {};
                    };
                },
                function (e, t) {
                    e.exports = { TWEET: 0, RETWEET: 10, CUSTOM_TIMELINE: 17, LIVE_VIDEO_EVENT: 28 };
                },
                function (e, t, n) {
                    var r = n(109),
                        i = n(53);
                    e.exports = r.isSupported() ? r : i;
                },
                function (e, t, n) {
                    var r = n(54),
                        i = n(110);
                    e.exports = r.build([i]);
                },
                function (e, t, n) {
                    var r = n(111),
                        i = n(7),
                        o = n(21),
                        s = n(20),
                        a = n(36),
                        u = n(64),
                        c = n(54),
                        l = n(65),
                        d = n(66),
                        f = n(8),
                        p = n(68),
                        h = n(15),
                        m = n(67),
                        g = n(2),
                        v = n(12),
                        y = 50,
                        b = { position: "absolute", visibility: "hidden", display: "block", transform: "rotate(0deg)" },
                        w = { position: "static", visibility: "visible" },
                        x = "twitterwidget",
                        C = "SandboxRoot",
                        _ = ".SandboxRoot { display: none; }";
                    e.exports = c.couple(n(69), function (e) {
                        e.defineStatic("isSupported", function () {
                            return !!i.HTMLElement.prototype.createShadowRoot && d.inlineStyle() && !f.android();
                        }),
                            e.overrideProperty("id", {
                                get: function () {
                                    return this.sandboxEl && this.sandboxEl.id;
                                },
                            }),
                            e.overrideProperty("initialized", {
                                get: function () {
                                    return !!this._shadowHost;
                                },
                            }),
                            e.overrideProperty("width", {
                                get: function () {
                                    return this._width;
                                },
                            }),
                            e.overrideProperty("height", {
                                get: function () {
                                    return this._height;
                                },
                            }),
                            e.overrideProperty("sandboxEl", {
                                get: function () {
                                    return this._shadowHost;
                                },
                            }),
                            e.define("_updateCachedDimensions", function () {
                                var e = this;
                                return a.read(function () {
                                    var t,
                                        n = p(e.sandboxEl);
                                    "visible" == e.sandboxEl.style.visibility ? (e._width = n.width) : ((t = p(e.sandboxEl.parentElement).width), (e._width = Math.min(n.width, t))), (e._height = n.height);
                                });
                            }),
                            e.define("_didResize", function () {
                                var e = this,
                                    t = this._resizeHandlers.slice(0);
                                return this._updateCachedDimensions().then(function () {
                                    t.forEach(function (t) {
                                        t(e);
                                    });
                                });
                            }),
                            e.override("createElement", function (e) {
                                return this.targetGlobal.document.createElement(e);
                            }),
                            e.override("createFragment", function () {
                                return this.targetGlobal.document.createDocumentFragment();
                            }),
                            e.override("htmlToElement", function (e) {
                                var t;
                                return ((t = this.createElement("div")).innerHTML = e), t.firstElementChild;
                            }),
                            e.override("hasSelectedText", function () {
                                return !!u.getSelectedText(this.targetGlobal);
                            }),
                            e.override("addRootClass", function (e) {
                                var t = this._shadowRootBody;
                                return (
                                    (e = Array.isArray(e) ? e : [e]),
                                    this.initialized
                                        ? a.write(function () {
                                              e.forEach(function (e) {
                                                  o.add(t, e);
                                              });
                                          })
                                        : g.reject(new Error("sandbox not initialized"))
                                );
                            }),
                            e.override("removeRootClass", function (e) {
                                var t = this._shadowRootBody;
                                return (
                                    (e = Array.isArray(e) ? e : [e]),
                                    this.initialized
                                        ? a.write(function () {
                                              e.forEach(function (e) {
                                                  o.remove(t, e);
                                              });
                                          })
                                        : g.reject(new Error("sandbox not initialized"))
                                );
                            }),
                            e.override("hasRootClass", function (e) {
                                return o.present(this._shadowRootBody, e);
                            }),
                            e.override("addStyleSheet", function (e, t) {
                                return this.addCss('@import url("' + e + '");', t).then(function () {
                                    return l(e);
                                });
                            }),
                            e.override("prependStyleSheet", function (e) {
                                var t = this._shadowRoot;
                                return this.addStyleSheet(e, function (e) {
                                    var n = t.firstElementChild;
                                    return n ? t.insertBefore(e, n) : t.appendChild(e);
                                });
                            }),
                            e.override("appendStyleSheet", function (e) {
                                var t = this._shadowRoot;
                                return this.addStyleSheet(e, function (e) {
                                    return t.appendChild(e);
                                });
                            }),
                            e.override("addCss", function (e, t) {
                                var n;
                                return this.initialized
                                    ? d.inlineStyle()
                                        ? (((n = this.createElement("style")).type = "text/css"), n.appendChild(this.targetGlobal.document.createTextNode(e)), a.write(h(t, null, n)))
                                        : g.resolve()
                                    : g.reject(new Error("sandbox not initialized"));
                            }),
                            e.override("prependCss", function (e) {
                                var t = this._shadowRoot;
                                return this.addCss(e, function (e) {
                                    var n = t.firstElementChild;
                                    return n ? t.insertBefore(e, n) : t.appendChild(e);
                                });
                            }),
                            e.override("appendCss", function (e) {
                                var t = this._shadowRoot;
                                return this.addCss(e, function (e) {
                                    return t.appendChild(e);
                                });
                            }),
                            e.override("makeVisible", function () {
                                return this.styleSelf(w);
                            }),
                            e.override("injectWidgetEl", function (e) {
                                var t = this;
                                return this.initialized
                                    ? this._shadowRootBody.firstElementChild
                                        ? g.reject(new Error("widget already injected"))
                                        : a
                                              .write(function () {
                                                  t._shadowRootBody.appendChild(e);
                                              })
                                              .then(function () {
                                                  return t._updateCachedDimensions();
                                              })
                                              .then(function () {
                                                  var e = m(t._didResize, y, t);
                                                  new r(t._shadowRootBody, e);
                                              })
                                    : g.reject(new Error("sandbox not initialized"));
                            }),
                            e.override("matchHeightToContent", function () {
                                return g.resolve();
                            }),
                            e.override("matchWidthToContent", function () {
                                return g.resolve();
                            }),
                            e.override("insert", function (e, t, n, r) {
                                var i = this.targetGlobal.document,
                                    o = (this._shadowHost = i.createElement(x)),
                                    u = (this._shadowRoot = o.createShadowRoot()),
                                    c = (this._shadowRootBody = i.createElement("div"));
                                return (
                                    v.forIn(t || {}, function (e, t) {
                                        o.setAttribute(e, t);
                                    }),
                                    (o.id = e),
                                    u.appendChild(c),
                                    s.delegate(c, "click", "A", function (e, t) {
                                        t.hasAttribute("target") || t.setAttribute("target", "_blank");
                                    }),
                                    g.all([this.styleSelf(b), this.addRootClass(C), this.prependCss(_), a.write(r.bind(null, o))])
                                );
                            }),
                            e.override("onResize", function (e) {
                                this._resizeHandlers.push(e);
                            }),
                            e.after("initialize", function () {
                                (this._shadowHost = this._shadowRoot = this._shadowRootBody = null), (this._width = this._height = 0), (this._resizeHandlers = []);
                            }),
                            e.after("styleSelf", function () {
                                return this._updateCachedDimensions();
                            });
                    });
                },
                function (e, t) {
                    !(function () {
                        var t = function (e, n) {
                            function r() {
                                var e, t;
                                (this.q = []),
                                    (this.add = function (e) {
                                        this.q.push(e);
                                    }),
                                    (this.call = function () {
                                        for (e = 0, t = this.q.length; e < t; e++) this.q[e].call();
                                    });
                            }
                            function i(e, t) {
                                if (e.resizedAttached) {
                                    if (e.resizedAttached) return void e.resizedAttached.add(t);
                                } else (e.resizedAttached = new r()), e.resizedAttached.add(t);
                                (e.resizeSensor = document.createElement("div")), (e.resizeSensor.className = "resize-sensor");
                                var n = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",
                                    i = "position: absolute; left: 0; top: 0; transition: 0s;";
                                (e.resizeSensor.style.cssText = n),
                                    (e.resizeSensor.innerHTML =
                                        '<div class="resize-sensor-expand" style="' +
                                        n +
                                        '"><div style="' +
                                        i +
                                        '"></div></div><div class="resize-sensor-shrink" style="' +
                                        n +
                                        '"><div style="' +
                                        i +
                                        ' width: 200%; height: 200%"></div></div>'),
                                    e.appendChild(e.resizeSensor),
                                    { fixed: 1, absolute: 1 }[
                                        (function (e, t) {
                                            return e.currentStyle ? e.currentStyle[t] : window.getComputedStyle ? window.getComputedStyle(e, null).getPropertyValue(t) : e.style[t];
                                        })(e, "position")
                                    ] || (e.style.position = "relative");
                                var o,
                                    s,
                                    a = e.resizeSensor.childNodes[0],
                                    u = a.childNodes[0],
                                    c = e.resizeSensor.childNodes[1],
                                    l =
                                        (c.childNodes[0],
                                        function () {
                                            (u.style.width = a.offsetWidth + 10 + "px"),
                                                (u.style.height = a.offsetHeight + 10 + "px"),
                                                (a.scrollLeft = a.scrollWidth),
                                                (a.scrollTop = a.scrollHeight),
                                                (c.scrollLeft = c.scrollWidth),
                                                (c.scrollTop = c.scrollHeight),
                                                (o = e.offsetWidth),
                                                (s = e.offsetHeight);
                                        });
                                l();
                                var d = function (e, t, n) {
                                        e.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener(t, n);
                                    },
                                    f = function () {
                                        (e.offsetWidth == o && e.offsetHeight == s) || (e.resizedAttached && e.resizedAttached.call()), l();
                                    };
                                d(a, "scroll", f), d(c, "scroll", f);
                            }
                            var o = Object.prototype.toString.call(e),
                                s =
                                    "[object Array]" === o ||
                                    "[object NodeList]" === o ||
                                    "[object HTMLCollection]" === o ||
                                    ("undefined" != typeof jQuery && e instanceof jQuery) ||
                                    ("undefined" != typeof Elements && e instanceof Elements);
                            if (s) for (var a = 0, u = e.length; a < u; a++) i(e[a], n);
                            else i(e, n);
                            this.detach = function () {
                                if (s) for (var n = 0, r = e.length; n < r; n++) t.detach(e[n]);
                                else t.detach(e);
                            };
                        };
                        (t.detach = function (e) {
                            e.resizeSensor && (e.removeChild(e.resizeSensor), delete e.resizeSensor, delete e.resizedAttached);
                        }),
                            void 0 !== e && void 0 !== e.exports ? (e.exports = t) : (window.ResizeSensor = t);
                    })();
                },
                function (e, t, n) {
                    var r = n(24),
                        i = n(12),
                        o = n(80),
                        s = n(82)(),
                        a = n(113),
                        u = n(26),
                        c = "a.twitter-follow-button";
                    e.exports = function (e) {
                        return s(e, c).map(function (e) {
                            return a(
                                (function (e) {
                                    var t = o(e),
                                        n = {
                                            screenName: r.screenName(e.href),
                                            showScreenName: "false" !== e.getAttribute("data-show-screen-name"),
                                            showCount: "false" !== e.getAttribute("data-show-count"),
                                            size: e.getAttribute("data-size"),
                                            count: e.getAttribute("data-count"),
                                            preview: e.getAttribute("data-preview"),
                                        };
                                    return (
                                        i.forIn(n, function (e, n) {
                                            var r = t[e];
                                            t[e] = u.hasValue(r) ? r : n;
                                        }),
                                        (t.screenName = t.screenName || t.screen_name),
                                        t
                                    );
                                })(e),
                                e.parentNode,
                                e
                            );
                        });
                    };
                },
                function (e, t, n) {
                    var r = n(86),
                        i = n(114),
                        o = n(119);
                    e.exports = function (e, t, n) {
                        return new r(i, o, "twitter-follow-button", e, t, n);
                    };
                },
                function (e, t, n) {
                    var r = n(1);
                    e.exports = function (e, t) {
                        var i = new r();
                        return (
                            n.e(2, function (r, o) {
                                var s;
                                if (r) return i.reject(r);
                                try {
                                    (s = n(115)), i.resolve(new s(e, t));
                                } catch (e) {
                                    i.reject(e);
                                }
                            }),
                            i.promise
                        );
                    };
                },
                ,
                ,
                ,
                function (e, t, n) {
                    var r = n(26),
                        i = n(12);
                    e.exports = function (e) {
                        e.define("widgetDataAttributes", function () {
                            return {};
                        }),
                            e.define("setDataAttributes", function () {
                                var e = this.sandbox.sandboxEl;
                                i.forIn(this.widgetDataAttributes(), function (t, n) {
                                    r.hasValue(n) && e.setAttribute("data-" + t, n);
                                });
                            }),
                            e.after("render", function () {
                                this.setDataAttributes();
                            });
                    };
                },
                function (e, t, n) {
                    var r = n(54),
                        i = n(120);
                    e.exports = r.build([i]);
                },
                function (e, t, n) {
                    var r = n(36),
                        i = n(121),
                        o = n(126),
                        s = n(45),
                        a = n(1),
                        u = n(2),
                        c = n(15),
                        l = n(12),
                        d = { position: "absolute", visibility: "hidden", width: "0px", height: "0px" },
                        f = { position: "static", visibility: "visible" },
                        p = {};
                    i(function (e, t, n) {
                        var r = p[e];
                        if (r)
                            return (
                                (t = t || 1),
                                (n = n || 1),
                                r.styleSelf({ width: t + "px", height: n + "px" }).then(function () {
                                    r.didResize();
                                })
                            );
                    }),
                        (e.exports = function (e) {
                            e.overrideProperty("id", {
                                get: function () {
                                    return this.sandboxEl && this.sandboxEl.id;
                                },
                            }),
                                e.overrideProperty("initialized", {
                                    get: function () {
                                        return !!this.iframeEl;
                                    },
                                }),
                                e.overrideProperty("width", {
                                    get: function () {
                                        return this._width;
                                    },
                                }),
                                e.overrideProperty("height", {
                                    get: function () {
                                        return this._height;
                                    },
                                }),
                                e.overrideProperty("sandboxEl", {
                                    get: function () {
                                        return this.iframeEl;
                                    },
                                }),
                                e.defineProperty("iframeEl", {
                                    get: function () {
                                        return this._iframe;
                                    },
                                }),
                                e.define("updateCachedDimensions", function () {
                                    var e = this;
                                    return this.initialized
                                        ? r.read(function () {
                                              (e._width = e.sandboxEl.offsetWidth), (e._height = e.sandboxEl.offsetHeight);
                                          })
                                        : u.resolve();
                                }),
                                e.define("setTitle", function (e) {
                                    this.iframeEl.title = e;
                                }),
                                e.define("makeVisible", function () {
                                    return this.styleSelf(f);
                                }),
                                e.define("didResize", function () {
                                    var e = this,
                                        t = e._resizeHandlers.length > 0;
                                    return this.updateCachedDimensions().then(function () {
                                        t &&
                                            e._resizeHandlers.forEach(function (t) {
                                                t(e);
                                            });
                                    });
                                }),
                                e.define("loadDocument", function (e) {
                                    var t = new a();
                                    return this.initialized
                                        ? this.iframeEl.src
                                            ? u.reject(new Error("widget already loaded"))
                                            : (this.iframeEl.addEventListener("load", t.resolve, !1), this.iframeEl.addEventListener("error", t.reject, !1), (this.iframeEl.src = e), t.promise)
                                        : u.reject(new Error("sandbox not initialized"));
                                }),
                                e.after("initialize", function () {
                                    (this._iframe = null), (this._width = this._height = 0), (this._resizeHandlers = []);
                                }),
                                e.override("insert", function (e, t, n, i) {
                                    var a = this;
                                    return (
                                        (t = l.aug({ id: e }, t)),
                                        (n = l.aug({}, d, n)),
                                        (this._iframe = s(t, n)),
                                        (p[e] = this),
                                        this.onResize(
                                            o(function () {
                                                a.makeVisible();
                                            })
                                        ),
                                        r.write(c(i, null, this._iframe))
                                    );
                                }),
                                e.override("onResize", function (e) {
                                    this._resizeHandlers.push(e);
                                }),
                                e.after("styleSelf", function () {
                                    return this.updateCachedDimensions();
                                });
                        });
                },
                function (e, t, n) {
                    var r = n(7),
                        i = n(122),
                        o = n(124),
                        s = n(30),
                        a = n(26),
                        u = n(125);
                    e.exports = function (e) {
                        new i()
                            .attachReceiver(new o.Receiver(r, "twttr.button"))
                            .bind("twttr.private.trigger", function (e, t) {
                                var n = u(this);
                                s.trigger(e, { target: n, region: t, type: e, data: {} });
                            })
                            .bind("twttr.private.resizeButton", function (t) {
                                var n = u(this),
                                    r = n && n.id,
                                    i = a.asInt(t.width),
                                    o = a.asInt(t.height);
                                r && void 0 !== i && void 0 !== o && e(r, i, o);
                            });
                    };
                },
                function (e, t, n) {
                    function r(e) {
                        this.registry = e || {};
                    }
                    function i(e) {
                        var t, n;
                        return (t = u.isType("string", e)), (n = u.isType("number", e)), t || n || null === e;
                    }
                    function o(e, t) {
                        return { jsonrpc: d, id: i(e) ? e : null, error: t };
                    }
                    var s = n(51),
                        a = n(123),
                        u = n(12),
                        c = n(2),
                        l = n(33),
                        d = "2.0";
                    (r.prototype._invoke = function (e, t) {
                        var n, r, i;
                        (n = this.registry[e.method]), (r = e.params || []), (r = u.isType("array", r) ? r : [r]);
                        try {
                            i = n.apply(t.source || null, r);
                        } catch (e) {
                            i = c.reject(e.message);
                        }
                        return l.isPromise(i) ? i : c.resolve(i);
                    }),
                        (r.prototype._processRequest = function (e, t) {
                            var n;
                            return (function (e) {
                                var t, n, r;
                                return !!u.isObject(e) && ((t = e.jsonrpc === d), (n = u.isType("string", e.method)), (r = !("id" in e) || i(e.id)), t && n && r);
                            })(e)
                                ? ((n =
                                      "params" in e &&
                                      !(function (e) {
                                          return u.isObject(e) && !u.isType("function", e);
                                      })(e.params)
                                          ? c.resolve(o(e.id, a.INVALID_PARAMS))
                                          : this.registry[e.method]
                                          ? this._invoke(e, { source: t }).then(
                                                function (t) {
                                                    return (function (e, t) {
                                                        return { jsonrpc: d, id: e, result: t };
                                                    })(e.id, t);
                                                },
                                                function () {
                                                    return o(e.id, a.INTERNAL_ERROR);
                                                }
                                            )
                                          : c.resolve(o(e.id, a.METHOD_NOT_FOUND))),
                                  null != e.id ? n : c.resolve())
                                : c.resolve(o(e.id, a.INVALID_REQUEST));
                        }),
                        (r.prototype.attachReceiver = function (e) {
                            return e.attachTo(this), this;
                        }),
                        (r.prototype.bind = function (e, t) {
                            return (this.registry[e] = t), this;
                        }),
                        (r.prototype.receive = function (e, t) {
                            var n,
                                r,
                                i = this;
                            try {
                                e = (function (e) {
                                    return u.isType("string", e) ? s.parse(e) : e;
                                })(e);
                            } catch (e) {
                                return c.resolve(o(null, a.PARSE_ERROR));
                            }
                            return (
                                (t = t || null),
                                (r = ((n = u.isType("array", e)) ? e : [e]).map(function (e) {
                                    return i._processRequest(e, t);
                                })),
                                n
                                    ? (function (e) {
                                          return c.all(e).then(function (e) {
                                              return (e = e.filter(function (e) {
                                                  return void 0 !== e;
                                              })).length
                                                  ? e
                                                  : void 0;
                                          });
                                      })(r)
                                    : r[0]
                            );
                        }),
                        (e.exports = r);
                },
                function (e, t) {
                    e.exports = {
                        PARSE_ERROR: { code: -32700, message: "Parse error" },
                        INVALID_REQUEST: { code: -32600, message: "Invalid Request" },
                        INVALID_PARAMS: { code: -32602, message: "Invalid params" },
                        METHOD_NOT_FOUND: { code: -32601, message: "Method not found" },
                        INTERNAL_ERROR: { code: -32603, message: "Internal error" },
                    };
                },
                function (e, t, n) {
                    function r(e, t, n) {
                        var r;
                        e && e.postMessage && (g ? (r = (n || "") + l.stringify(t)) : n ? ((r = {})[n] = t) : (r = t), e.postMessage(r, "*"));
                    }
                    function i(e) {
                        return p.isType("string", e) ? e : "JSONRPC";
                    }
                    function o(e, t) {
                        return t ? (p.isType("string", e) && 0 === e.indexOf(t) ? e.substring(t.length) : e[t] ? e[t] : void 0) : e;
                    }
                    function s(e, t) {
                        var n = e.document;
                        (this.filter = i(t)), (this.server = null), (this.isTwitterFrame = h.isTwitterURL(n.location.href)), e.addEventListener("message", m(this._onMessage, this), !1);
                    }
                    function a(e, t) {
                        (this.pending = {}), (this.target = e), (this.isTwitterHost = h.isTwitterURL(u.href)), (this.filter = i(t)), c.addEventListener("message", m(this._onMessage, this), !1);
                    }
                    var u = n(11),
                        c = n(7),
                        l = n(51),
                        d = n(1),
                        f = n(8),
                        p = n(12),
                        h = n(24),
                        m = n(15),
                        g = f.ie9();
                    p.aug(s.prototype, {
                        _onMessage: function (e) {
                            var t,
                                n = this;
                            this.server &&
                                ((this.isTwitterFrame && !h.isTwitterURL(e.origin)) ||
                                    ((t = o(e.data, this.filter)) &&
                                        this.server.receive(t, e.source).then(function (t) {
                                            t && r(e.source, t, n.filter);
                                        })));
                        },
                        attachTo: function (e) {
                            this.server = e;
                        },
                        detach: function () {
                            this.server = null;
                        },
                    }),
                        p.aug(a.prototype, {
                            _processResponse: function (e) {
                                var t = this.pending[e.id];
                                t && (t.resolve(e), delete this.pending[e.id]);
                            },
                            _onMessage: function (e) {
                                var t;
                                if ((!this.isTwitterHost || h.isTwitterURL(e.origin)) && (t = o(e.data, this.filter))) {
                                    if (p.isType("string", t))
                                        try {
                                            t = l.parse(t);
                                        } catch (e) {
                                            return;
                                        }
                                    (t = p.isType("array", t) ? t : [t]).forEach(m(this._processResponse, this));
                                }
                            },
                            send: function (e) {
                                var t = new d();
                                return e.id ? (this.pending[e.id] = t) : t.resolve(), r(this.target, e, this.filter), t.promise;
                            },
                        }),
                        (e.exports = {
                            Receiver: s,
                            Dispatcher: a,
                            _stringifyPayload: function (e) {
                                return arguments.length > 0 && (g = !!e), g;
                            },
                        });
                },
                function (e, t, n) {
                    var r = n(9);
                    e.exports = function (e) {
                        for (var t, n = r.getElementsByTagName("iframe"), i = 0; n[i]; i++) if ((t = n[i]).contentWindow === e) return t;
                    };
                },
                function (e, t) {
                    e.exports = function (e) {
                        var t,
                            n = !1;
                        return function () {
                            return n ? t : ((n = !0), (t = e.apply(this, arguments)));
                        };
                    };
                },
                function (e, t, n) {
                    var r = n(26),
                        i = n(12),
                        o = n(24),
                        s = n(80),
                        a = n(82)(),
                        u = n(128),
                        c = "a.twitter-grid";
                    e.exports = function (e) {
                        return a(e, c).map(function (e) {
                            return u(
                                (function (e) {
                                    var t = s(e),
                                        n = { collectionId: o.collectionId(e.href), chrome: e.getAttribute("data-chrome"), limit: e.getAttribute("data-limit") };
                                    return (
                                        i.forIn(n, function (e, n) {
                                            var i = t[e];
                                            t[e] = r.hasValue(i) ? i : n;
                                        }),
                                        t
                                    );
                                })(e),
                                e.parentNode,
                                e
                            );
                        });
                    };
                },
                function (e, t, n) {
                    var r = n(86),
                        i = n(129),
                        o = n(53);
                    e.exports = function (e, t, n) {
                        return new r(i, o, "twitter-grid", e, t, n);
                    };
                },
                function (e, t, n) {
                    var r = n(1);
                    e.exports = function (e, t) {
                        var i = new r();
                        return (
                            n.e(3, function (r, o) {
                                var s;
                                if (r) return i.reject(r);
                                try {
                                    (s = n(130)), i.resolve(new s(e, t));
                                } catch (e) {
                                    i.reject(e);
                                }
                            }),
                            i.promise
                        );
                    };
                },
                ,
                ,
                ,
                function (e, t, n) {
                    function r() {
                        return c + l++;
                    }
                    var i = n(9),
                        o = n(18),
                        s = n(1),
                        a = n(12),
                        u = n(25),
                        c = "cb",
                        l = 0;
                    e.exports = {
                        fetch: function (e, t, n, c) {
                            var l, d, f;
                            return (
                                (c = (function (e) {
                                    if (e) return e.replace(/[^\w$]/g, "_");
                                })(c || r())),
                                (l = o.fullPath(["callbacks", c])),
                                (d = i.createElement("script")),
                                (f = new s()),
                                (t = a.aug({}, t, { callback: l, suppress_response_codes: !0 })),
                                o.set(["callbacks", c], function (e) {
                                    var t;
                                    (e = (t = n(e || !1)).resp), t.success ? f.resolve(e) : f.reject(e), (d.onload = d.onreadystatechange = null), d.parentNode && d.parentNode.removeChild(d), o.unset(["callbacks", c]);
                                }),
                                (d.onerror = function () {
                                    f.reject(new Error("failed to fetch " + d.src));
                                }),
                                (d.src = u.url(e, t)),
                                (d.async = "async"),
                                i.body.appendChild(d),
                                f.promise
                            );
                        },
                    };
                },
                function (e, t, n) {
                    var r = n(10);
                    e.exports = function (e) {
                        var t, n;
                        return (t = e.headers && e.headers.status), !(n = e && !e.error && 200 === t) && e.headers && e.headers.message && r.warn(e.headers.message), { success: n, resp: e };
                    };
                },
                function (e, t) {
                    e.exports = {
                        getTimezoneOffset: function () {
                            var e = new Date().toString().match(/(GMT[+-]?\d+)/);
                            return (e && e[0]) || "GMT";
                        },
                    };
                },
                function (e, t) {
                    e.exports = function () {
                        return Math.floor(+new Date() / 9e5);
                    };
                },
                function (e, t, n) {
                    function r(e, t) {
                        var n = [e];
                        return (
                            t.forEach(function (e) {
                                n.push(
                                    (function (e) {
                                        var t = (e || "").toString(),
                                            n = (function (e) {
                                                return "/" === e.slice(0, 1);
                                            })(t)
                                                ? 1
                                                : 0,
                                            r = (function (e) {
                                                return "/" === e.slice(-1);
                                            })(t)
                                                ? -1
                                                : void 0;
                                        return t.slice(n, r);
                                    })(e)
                                );
                            }),
                            n.join("/")
                        );
                    }
                    var i = n(18),
                        o = "https://syndication.twitter.com",
                        s = function () {
                            return i.get("backendHost") || "https://cdn.syndication.twimg.com";
                        },
                        a = function () {
                            return i.get("settingsSvcHost") || o;
                        };
                    e.exports = {
                        cookieConsent: function (e) {
                            var t = e || [];
                            return t.unshift("cookie/consent"), r(a(), t);
                        },
                        disableCDN: function () {
                            i.init("backendHost", o);
                        },
                        enableCDN: function () {
                            i.unset("backendHost", o);
                        },
                        eventVideo: function (e) {
                            var t = e || [];
                            return t.unshift("video/event"), r(s(), t);
                        },
                        grid: function (e) {
                            var t = e || [];
                            return t.unshift("grid/collection"), r(s(), t);
                        },
                        moment: function (e) {
                            var t = e || [];
                            return t.unshift("moments"), r(s(), t);
                        },
                        settings: function (e) {
                            var t = e || [];
                            return t.unshift("settings"), r(a(), t);
                        },
                        timeline: function (e) {
                            var t = e || [];
                            return t.unshift("timeline"), r(s(), t);
                        },
                        timelinePreconfigured: function (e) {
                            var t = e || [];
                            return t.unshift("widgets/timelines"), r(s(), t);
                        },
                        tweetBatch: function (e) {
                            var t = e || [];
                            return t.unshift("tweets.json"), r(s(), t);
                        },
                        video: function (e) {
                            var t = e || [];
                            return t.unshift("widgets/video"), r(s(), t);
                        },
                    };
                },
                function (e, t, n) {
                    var r = n(9),
                        i = n(26),
                        o = r.createElement("div");
                    e.exports = function (e) {
                        return i.isNumber(e) && (e += "px"), (o.style.width = ""), (o.style.width = e), o.style.width || null;
                    };
                },
                function (e, t, n) {
                    var r = n(36),
                        i = n(140),
                        o = 375;
                    e.exports = function (e) {
                        e.after("prepForInsertion", function (e) {
                            i.sizeIframes(e, this.sandbox.width, o, r.sync);
                        }),
                            e.after("resize", function () {
                                i.sizeIframes(this.el, this.sandbox.width, o, r.write);
                            });
                    };
                },
                function (e, t, n) {
                    function r(e, t) {
                        e.getAttribute("data-image") ? s(e, t) : u(e, t);
                    }
                    function i(e) {
                        var t = e.split(" ");
                        (this.url = decodeURIComponent(t[0].trim())), (this.width = +t[1].replace(/w$/, "").trim());
                    }
                    function o(e, t, n) {
                        var r, o, s, u, c;
                        if (
                            ((o = a(e)),
                            (s = t.split(",").map(function (e) {
                                return new i(e.trim());
                            })),
                            n)
                        )
                            for (c = 0; c < s.length; c++) s[c].url === n && (r = s[c]);
                        return (
                            (u = s.reduce(function (e, t) {
                                return t.width < e.width && t.width >= o ? t : e;
                            }, s[0])),
                            r && r.width > u.width ? r : u
                        );
                    }
                    function s(e, t) {
                        var n, r, i, o;
                        ((n = g.decodeURL(e.src).name) &&
                            v(k, function (e) {
                                if (T[e] === n) return e;
                            })) >= (i = a(t) || 680) ||
                            ((r = e.getAttribute("data-image")),
                            (o =
                                v(k, function (e) {
                                    if (e >= i) return e;
                                }) || 4096),
                            (e.src = g.url(r, { format: "jpg", name: T[o] })));
                    }
                    function a(e) {
                        return p.devicePixelRatio ? e * p.devicePixelRatio : e;
                    }
                    function u(e, t) {
                        var n,
                            r = e.getAttribute("data-srcset"),
                            i = e.src;
                        r && ((n = o(t, r, i)), (e.src = n.url));
                    }
                    function c(e, t, n) {
                        e &&
                            (h.toRealArray(e.querySelectorAll(".NaturalImage-image")).forEach(function (e) {
                                n(function () {
                                    r(e, t);
                                });
                            }),
                            h.toRealArray(e.querySelectorAll(".CroppedImage-image")).forEach(function (e) {
                                n(function () {
                                    r(e, t / 2);
                                });
                            }),
                            h.toRealArray(e.querySelectorAll("img.autosized-media")).forEach(function (e) {
                                n(function () {
                                    r(e, t), e.removeAttribute("width"), e.removeAttribute("height");
                                });
                            }));
                    }
                    function l(e, t, n, r) {
                        e &&
                            h.toRealArray(e.querySelectorAll("iframe.autosized-media, .wvp-player-container")).forEach(function (e) {
                                var i = d(e.getAttribute("data-width"), e.getAttribute("data-height"), b.effectiveWidth(e.parentElement) || t, n);
                                r(function () {
                                    e.setAttribute("width", i.width),
                                        e.setAttribute("height", i.height),
                                        w.present(e, "wvp-player-container") ? ((e.style.width = i.width), (e.style.height = i.height)) : ((e.width = i.width), (e.height = i.height));
                                });
                            });
                    }
                    function d(e, t, n, r, i, o) {
                        return (
                            (r = r || t),
                            e > (n = n || e) && ((t *= n / e), (e = n)),
                            t > r && ((e *= r / t), (t = r)),
                            e < (i = i || 0) && ((t *= i / e), (e = i)),
                            t < (o = o || 0) && ((e *= o / t), (t = o)),
                            { width: Math.floor(e), height: Math.floor(t) }
                        );
                    }
                    function f(e, t, n, r) {
                        h.toRealArray(e.querySelectorAll(t)).forEach(function (e) {
                            var t = e.getAttribute("style") || e.getAttribute("data-style"),
                                i = r.test(t) && RegExp.$1;
                            i && (e.setAttribute("data-csp-fix", !0), (e.style[n] = i));
                        });
                    }
                    var p = n(7),
                        h = n(12),
                        m = n(66),
                        g = n(25),
                        v = n(141),
                        y = n(8),
                        b = n(142),
                        w = n(21),
                        x = /max-width:\s*([\d.]+px)/,
                        C = /top:\s*(-?[\d.]+%)/,
                        _ = /left:\s*(-?[\d.]+%)/,
                        E = /padding-bottom:\s*([\d.]+%)/,
                        T = { 64: "tiny", 120: "120x120", 240: "240x240", 360: "360x360", 680: "small", 900: "900x900", 1200: "medium", 2048: "large", 4096: "4096x4096" },
                        k = Object.keys(T).sort(function (e, t) {
                            return e - t;
                        });
                    e.exports = {
                        scaleDimensions: d,
                        retinize: function (e, t) {
                            (t = void 0 !== t ? !!t : y.retina()),
                                h.toRealArray(e.getElementsByTagName("IMG")).forEach(function (e) {
                                    var n = e.getAttribute("data-src-1x") || e.getAttribute("src"),
                                        r = e.getAttribute("data-src-2x");
                                    t && r ? (e.src = r) : n && (e.src = n);
                                });
                        },
                        setSrcForImgs: c,
                        sizeIframes: l,
                        constrainMedia: function (e, t, n, r) {
                            c(e, t, r), l(e, t, n, r);
                        },
                        fixMediaCardLayout: function (e) {
                            m.inlineStyle() || (f(e, ".MediaCard-widthConstraint", "maxWidth", x), f(e, ".MediaCard-mediaContainer", "paddingBottom", E), f(e, ".CroppedImage-image", "top", C), f(e, ".CroppedImage-image", "left", _));
                        },
                        __setSrcFromSet: u,
                        __setSrcFromImage: s,
                        __setImageSrc: r,
                    };
                },
                function (e, t) {
                    e.exports = function (e, t, n) {
                        for (var r, i = 0; i < e.length; i++) if ((r = t.call(n, e[i], i, e))) return r;
                    };
                },
                function (e, t) {
                    e.exports = {
                        effectiveWidth: function e(t) {
                            return t && 1 === t.nodeType ? t.offsetWidth || e(t.parentNode) : 0;
                        },
                    };
                },
                function (e, t, n) {
                    function r(e) {
                        var t = (function (e) {
                            return (e || "").split(";").reduce(function (e, t) {
                                var n, r;
                                return (
                                    s.test(t.trim()) &&
                                        ((n = RegExp.$1),
                                        (r = RegExp.$2),
                                        (e[
                                            (function (e) {
                                                return e.replace(/-(.)/g, function (e, t) {
                                                    return t.toUpperCase();
                                                });
                                            })(n)
                                        ] = r)),
                                    e
                                );
                            }, {});
                        })(e.getAttribute("data-style"));
                        0 !== Object.keys(t).length &&
                            (e.setAttribute("data-csp-fix", "true"),
                            o.forIn(t, function (t, n) {
                                e.style[t] = n;
                            }));
                    }
                    var i = n(66),
                        o = (n(10), n(12)),
                        s = /^([a-zA-Z-]+):\s*(.+)$/;
                    e.exports = function (e) {
                        e.selectors({ cspForcedStyle: ".js-cspForcedStyle" }),
                            e.after("prepForInsertion", function (e) {
                                i.inlineStyle() || this.select(e, "cspForcedStyle").forEach(r);
                            });
                    };
                },
                function (e, t, n) {
                    var r = n(140);
                    e.exports = function (e) {
                        e.after("prepForInsertion", function (e) {
                            r.retinize(e);
                        });
                    };
                },
                function (e, t, n) {
                    var r = n(36),
                        i = n(140);
                    e.exports = function (e) {
                        e.after("prepForInsertion", function (e) {
                            i.setSrcForImgs(e, this.sandbox.width, r.sync);
                        }),
                            e.after("resize", function () {
                                i.setSrcForImgs(this.el, this.sandbox.width, r.write);
                            });
                    };
                },
                function (e, t) {
                    var n = "data-iframe-title";
                    e.exports = function (e) {
                        e.after("render", function () {
                            var e = this.el.getAttribute(n);
                            e && this.sandbox.setTitle && this.sandbox.setTitle(e);
                        });
                    };
                },
                function (e, t, n) {
                    function r(e) {
                        return e.every(s.isInt);
                    }
                    function i(e) {
                        var t = e
                            .map(function (e) {
                                return { size: +e, className: a + e };
                            })
                            .sort(function (e, t) {
                                return e.size - t.size;
                            });
                        return t.unshift({ size: 0, className: u }), t;
                    }
                    var o = n(2),
                        s = n(26),
                        a = "env-bp-",
                        u = a + "min";
                    e.exports = function (e) {
                        e.params({ breakpoints: { required: !0, validate: r, transform: i } }),
                            e.define("getClassForWidth", function (e) {
                                var t, n, r;
                                for (n = this.params.breakpoints.length - 1; n >= 0; n--)
                                    if (e > (r = this.params.breakpoints[n]).size) {
                                        t = r.className;
                                        break;
                                    }
                                return t;
                            }),
                            e.after("initialize", function () {
                                this.allBreakpoints = this.params.breakpoints.map(function (e) {
                                    return e.className;
                                });
                            }),
                            e.define("recalculateBreakpoints", function () {
                                var e = this.getClassForWidth(this.sandbox.width);
                                return e && this.sandbox.hasRootClass(e) ? o.resolve() : o.all([this.sandbox.removeRootClass(this.allBreakpoints), this.sandbox.addRootClass(e)]);
                            }),
                            e.after("render", function () {
                                return this.recalculateBreakpoints();
                            }),
                            e.after("resize", function () {
                                return this.recalculateBreakpoints();
                            });
                    };
                },
                ,
                function (e, t, n) {
                    function r(e, t) {
                        var n, r;
                        if (
                            ((r = {
                                scribeContext: (t = t || {}).scribeContext || { client: "tfw" },
                                languageCode: t.languageCode,
                                hideControls: t.hideControls || !1,
                                addTwitterBranding: t.addBranding || !1,
                                widgetOrigin: t.widgetOrigin,
                                borderRadius: t.borderRadius,
                            }),
                            (n = o(e, ".wvp-player-container")).length > 0)
                        )
                            return a && s.setBaseUrl(a), { element: n[0], options: r };
                    }
                    var i = n(1),
                        o = n(83),
                        s = n(150),
                        a = null;
                    e.exports = {
                        insertForTweet: function (e, t, n) {
                            var o,
                                a = new i(),
                                u = r(e, n);
                            if (u) return (o = s.createPlayerForTweet(u.element, t, u.options)) ? (a.resolve(o), a.promise) : a.reject(new Error("unable to create tweet video player"));
                        },
                        insertForEvent: function (e, t, n) {
                            var o,
                                a = new i(),
                                u = r(e, n);
                            return u
                                ? ((o = s.createPlayerForLiveVideo(u.element, t, u.options)).on("ready", function () {
                                      o.playPreview(), a.resolve(o);
                                  }),
                                  a.promise)
                                : a.reject(new Error("unable to initialize event video player"));
                        },
                        remove: function (e) {
                            var t = e.querySelector(".wvp-player-container"),
                                n = t && s.findPlayerForElement(t);
                            if (n) return n.teardown();
                        },
                        find: function (e) {
                            return s.findPlayerForElement(e);
                        },
                    };
                },
                function (e, t, n) {
                    var r, i;
                    (i = this),
                        void 0 ===
                            (r = function () {
                                return (i.TwitterVideoPlayer = (function () {
                                    function e(e) {
                                        if (e && e.data && e.data.params && e.data.params[0]) {
                                            var t = e.data.params[0],
                                                n = e.data.id;
                                            if (t && t.context && "TwitterVideoPlayer" === t.context) {
                                                var r = t.playerId;
                                                delete t.playerId, delete t.context;
                                                var i = s[r];
                                                i && i.processMessage(e.data.method, t, n);
                                            }
                                        }
                                    }
                                    function t(t, r, i, a, u) {
                                        var c = t.ownerDocument,
                                            l = c.defaultView;
                                        l.addEventListener("message", e), (this.playerId = o++);
                                        var d = { embed_source: "clientlib", player_id: this.playerId, rpc_init: 1 };
                                        if (((this.scribeParams = {}), (this.scribeParams.suppressScribing = a && a.suppressScribing), !this.scribeParams.suppressScribing)) {
                                            if (!a.scribeContext) throw "video_player: Missing scribe context";
                                            if (!a.scribeContext.client) throw "video_player: Scribe context missing client property";
                                            (this.scribeParams.client = a.scribeContext.client),
                                                (this.scribeParams.page = a.scribeContext.page),
                                                (this.scribeParams.section = a.scribeContext.section),
                                                (this.scribeParams.component = a.scribeContext.component);
                                        }
                                        (this.scribeParams.debugScribe = a && a.scribeContext && a.scribeContext.debugScribing),
                                            (this.scribeParams.scribeUrl = a && a.scribeContext && a.scribeContext.scribeUrl),
                                            (this.promotedLogParams = a.promotedContext),
                                            (this.adRequestCallback = a.adRequestCallback),
                                            a.languageCode && (d.language_code = a.languageCode),
                                            "tfw" === this.scribeParams.client && (d.use_syndication_guest_id = !0);
                                        var f = (function (e, t, n) {
                                            var r = Object.keys(n)
                                                .filter(function (e) {
                                                    return null != n[e];
                                                })
                                                .map(function (e) {
                                                    var t = n[e];
                                                    return encodeURIComponent(e) + "=" + encodeURIComponent(t);
                                                })
                                                .join("&");
                                            return r && (r = "?" + r), e + t + r;
                                        })(n, r, d);
                                        return (
                                            (this.videoIframe = document.createElement("iframe")),
                                            this.videoIframe.setAttribute("src", f),
                                            this.videoIframe.setAttribute("allowfullscreen", ""),
                                            this.videoIframe.setAttribute("id", i),
                                            this.videoIframe.setAttribute("style", "width: 100%; height: 100%; position: absolute; top: 0; left: 0;"),
                                            (this.domElement = t),
                                            this.domElement.appendChild(this.videoIframe),
                                            (s[this.playerId] = this),
                                            (this.eventCallbacks = {}),
                                            (this.emitEvent = function (e, t) {
                                                var n = this.eventCallbacks[e];
                                                void 0 !== n &&
                                                    n.forEach(
                                                        function (e) {
                                                            e.apply(this.playerInterface, [t]);
                                                        }.bind(this)
                                                    );
                                            }),
                                            (this.jsonRpc = function (e) {
                                                var t = this.videoIframe.contentWindow;
                                                (e.jsonrpc = "2.0"), t && t.postMessage && t.postMessage(JSON.stringify(e), "*");
                                            }),
                                            (this.jsonRpcCall = function (e, t) {
                                                this.jsonRpc({ method: e, params: t });
                                            }),
                                            (this.jsonRpcResult = function (e, t) {
                                                this.jsonRpc({ result: e, id: t });
                                            }),
                                            (this.processMessage = function (e, t, n) {
                                                switch (e) {
                                                    case "requestPlayerConfig":
                                                        this.jsonRpcResult(
                                                            {
                                                                scribeParams: this.scribeParams,
                                                                promotedLogParams: this.promotedLogParams,
                                                                squareCorners: a.squareCorners,
                                                                borderRadius: a.borderRadius,
                                                                hideControls: a.hideControls,
                                                                embedded: a.addTwitterBranding,
                                                                widgetOrigin: a.widgetOrigin,
                                                                ignoreFineGrainGeoblocking: a.ignoreFineGrainGeoblocking,
                                                            },
                                                            n
                                                        );
                                                        break;
                                                    case "videoPlayerAdStart":
                                                        this.emitEvent("adStart", t);
                                                        break;
                                                    case "videoPlayerAdEnd":
                                                        this.emitEvent("adEnd", t);
                                                        break;
                                                    case "videoPlayerPlay":
                                                        this.emitEvent("play", t);
                                                        break;
                                                    case "videoPlayerPause":
                                                        this.emitEvent("pause", t);
                                                        break;
                                                    case "videoPlayerMute":
                                                        this.emitEvent("mute", t);
                                                        break;
                                                    case "videoPlayerUnmute":
                                                        this.emitEvent("unmute", t);
                                                        break;
                                                    case "videoPlayerPlaybackComplete":
                                                        this.emitEvent("playbackComplete", t);
                                                        break;
                                                    case "videoPlayerReady":
                                                        this.emitEvent("ready", t);
                                                        break;
                                                    case "videoView":
                                                        this.emitEvent("view", t);
                                                        break;
                                                    case "debugLoggingEvent":
                                                        this.emitEvent("logged", t);
                                                        break;
                                                    case "requestDynamicAd":
                                                        "function" == typeof this.adRequestCallback ? this.jsonRpcResult(this.adRequestCallback(), n) : this.jsonRpcResult({}, n);
                                                        break;
                                                    case "videoPlayerError":
                                                        t && "NO_COOKIES_ERROR" === t.error_category ? this.emitEvent("noCookiesError", t) : t && "GEOBLOCK_ERROR" === t.error_category && this.emitEvent("geoblockError", t);
                                                }
                                            }),
                                            (this.playerInterface = {
                                                on: function (e, t) {
                                                    return void 0 === this.eventCallbacks[e] && (this.eventCallbacks[e] = []), this.eventCallbacks[e].push(t), this.playerInterface;
                                                }.bind(this),
                                                off: function (e, t) {
                                                    if (void 0 === t) delete this.eventCallbacks[e];
                                                    else {
                                                        var n = this.eventCallbacks[e];
                                                        if (void 0 !== n) {
                                                            var r = n.indexOf(t);
                                                            r > -1 && n.splice(r, 1);
                                                        }
                                                    }
                                                    return this.playerInterface;
                                                }.bind(this),
                                                play: function () {
                                                    return this.jsonRpcCall("play"), this.playerInterface;
                                                }.bind(this),
                                                pause: function () {
                                                    return this.jsonRpcCall("pause"), this.playerInterface;
                                                }.bind(this),
                                                mute: function () {
                                                    return this.jsonRpcCall("mute"), this.playerInterface;
                                                }.bind(this),
                                                unmute: function () {
                                                    return this.jsonRpcCall("unmute"), this.playerInterface;
                                                }.bind(this),
                                                playPreview: function () {
                                                    return this.jsonRpcCall("autoPlayPreview"), this.playerInterface;
                                                }.bind(this),
                                                pausePreview: function () {
                                                    return this.jsonRpcCall("autoPlayPreviewStop"), this.playerInterface;
                                                }.bind(this),
                                                updatePosition: function (e) {
                                                    return this.jsonRpcCall("updatePosition", [e]), this.playerInterface;
                                                }.bind(this),
                                                updateLayoutBreakpoint: function (e) {
                                                    return this.jsonRpcCall("updateLayoutBreakpoint", [e]), this.playerInterface;
                                                }.bind(this),
                                                enterFullScreen: function () {
                                                    return this.jsonRpcCall("enterFullScreen"), this.playerInterface;
                                                }.bind(this),
                                                exitFullScreen: function () {
                                                    return this.jsonRpcCall("exitFullScreen"), this.playerInterface;
                                                }.bind(this),
                                                teardown: function () {
                                                    (this.eventCallbacks = {}), t.removeChild(this.videoIframe), (this.videoIframe = void 0), delete s[this.playerId];
                                                }.bind(this),
                                            }),
                                            this.playerInterface
                                        );
                                    }
                                    var n = "https://twitter.com",
                                        r = /^https?:\/\/([a-zA-Z0-9]+\.)*twitter.com(:\d+)?$/,
                                        i = { suppressScribing: !1, squareCorners: !1, hideControls: !1, addTwitterBranding: !1 },
                                        o = 0,
                                        s = {};
                                    return {
                                        setBaseUrl: function (e) {
                                            r.test(e) ? (n = e) : window.console.error("newBaseUrl " + e + " not allowed");
                                        },
                                        createPlayerForTweet: function (e, n, r) {
                                            var o = "/i/videos/tweet/" + n,
                                                s = "player_tweet_" + n;
                                            return new t(e, o, s, r || i);
                                        },
                                        createPlayerForDm: function (e, n, r) {
                                            var o = "/i/videos/dm/" + n,
                                                s = "player_dm_" + n;
                                            return new t(e, o, s, r || i);
                                        },
                                        createPlayerForLiveVideo: function (e, n, r) {
                                            var o = "/i/videos/live_video/" + n,
                                                s = "player_live_video_" + n;
                                            return new t(e, o, s, r || i);
                                        },
                                        findPlayerForElement: function (e) {
                                            for (var t in s)
                                                if (s.hasOwnProperty(t)) {
                                                    var n = s[t];
                                                    if (n && n.domElement === e) return n.playerInterface;
                                                }
                                            return null;
                                        },
                                    };
                                })());
                            }.call(t, n, t, e)) || (e.exports = r);
                },
                function (e, t, n) {
                    var r = n(22),
                        i = n(152),
                        o = n(89),
                        s = n(50),
                        a = "data-click-to-open-target";
                    e.exports = o.couple(n(102), function (e) {
                        e.selectors({ clickToOpen: ".js-clickToOpenTarget" }),
                            e.define("shouldOpenTarget", function (e) {
                                var t = r.closest("A", e.target, this.el),
                                    n = r.closest("BUTTON", e.target, this.el),
                                    i = this.sandbox.hasSelectedText();
                                return !t && !n && !i;
                            }),
                            e.define("openTarget", function (e, t) {
                                var n = t && t.getAttribute(a);
                                n && (i(n), this.scribeOpenClick(e));
                            }),
                            e.define("attemptToOpenTarget", function (e, t) {
                                this.shouldOpenTarget(e) && this.openTarget(e, t);
                            }),
                            e.define("scribeOpenClick", function (e) {
                                var t = s.extractTermsFromDOM(e.target),
                                    n = { associations: s.formatTweetAssociation(t) };
                                this.scribe({ section: "chrome", action: "click" }, n);
                            }),
                            e.after("render", function () {
                                this.on("click", "clickToOpen", this.attemptToOpenTarget);
                            });
                    });
                },
                function (e, t, n) {
                    var r = n(7),
                        i = n(101),
                        o = n(24);
                    e.exports = function (e) {
                        o.isTwitterURL(e) && (e = i(e)), r.open(e);
                    };
                },
                function (e, t, n) {
                    var r = n(22),
                        i = n(41),
                        o = n(23),
                        s = n(47),
                        a = n(25),
                        u = n(24),
                        c = n(15),
                        l = "data-url-params-injected";
                    e.exports = function (e) {
                        e.params({ productName: { required: !0 }, dataSource: { required: !1 }, related: { required: !1 }, partner: { fallback: c(i.val, i, "partner") } }),
                            e.selectors({ timeline: ".timeline", tweetIdInfo: ".js-tweetIdInfo" }),
                            e.define("injectWebIntentParams", function (e) {
                                var t = r.closest(this.selectors.timeline, e, this.el),
                                    n = r.closest(this.selectors.tweetIdInfo, e, this.el);
                                e.getAttribute(l) ||
                                    (e.setAttribute(l, !0),
                                    (e.href = a.url(e.href, {
                                        tw_w: this.params.dataSource && this.params.dataSource.id,
                                        tw_i: n && n.getAttribute("data-tweet-id"),
                                        tw_p: this.params.productName,
                                        related: this.params.related,
                                        partner: this.params.partner,
                                        query: t && t.getAttribute("data-search-query"),
                                        profile_id: t && t.getAttribute("data-profile-id"),
                                        original_referer: s.rootDocumentLocation(),
                                    })));
                            }),
                            e.after("render", function () {
                                this.on("click", "A", function (e, t) {
                                    u.isIntentURL(t.href) && (this.injectWebIntentParams(t), o.open(t.href, this.sandbox.sandboxEl, e));
                                });
                            });
                    };
                },
                function (e, t, n) {
                    var r = n(8);
                    e.exports = function (e) {
                        e.before("render", function () {
                            r.ios() && this.sandbox.addRootClass("env-ios"), r.ie9() && this.sandbox.addRootClass("ie9"), r.touch() && this.sandbox.addRootClass("is-touch");
                        });
                    };
                },
                function (e, t, n) {
                    var r = n(156);
                    e.exports = function (e) {
                        e.params({ pageForAudienceImpression: { required: !0 } }),
                            e.before("hydrate", function () {
                                r.scribeAudienceImpression(this.params.pageForAudienceImpression);
                            });
                    };
                },
                function (e, t, n) {
                    function r(e) {
                        s.isHostPageSensitive() || a[e] || ((a[e] = !0), i.scribe(o.formatClientEventNamespace({ page: e, action: "impression" }), o.formatGenericEventData("syndicated_impression", {}), o.AUDIENCE_ENDPOINT));
                    }
                    var i = n(71),
                        o = n(50),
                        s = n(49),
                        a = {};
                    e.exports = {
                        scribeAudienceImpression: r,
                        scribePartnerTweetAudienceImpression: function () {
                            r("partnertweet");
                        },
                        scribeTweetAudienceImpression: function () {
                            r("tweet");
                        },
                        scribeTimelineAudienceImpression: function () {
                            r("timeline");
                        },
                        scribeVideoAudienceImpression: function () {
                            r("video");
                        },
                    };
                },
                function (e, t, n) {
                    var r = n(89),
                        i = n(158),
                        o = 1;
                    e.exports = r.couple(n(102), function (e) {
                        var t = { action: "dimensions" },
                            n = new i(o);
                        e.after("show", function () {
                            var e;
                            n.nextBoolean() && ((e = { widget_width: this.sandbox.width, widget_height: this.sandbox.height }), this.scribe(t, e));
                        });
                    });
                },
                function (e, t) {
                    function n(e) {
                        this.percentage = e;
                    }
                    (n.prototype.nextBoolean = function () {
                        return 100 * Math.random() < this.percentage;
                    }),
                        (e.exports = n);
                },
                ,
                function (e, t, n) {
                    var r = n(12);
                    e.exports = function (e) {
                        var t = { transparent: !1, hideBorder: !1, hideHeader: !1, hideFooter: !1, hideScrollBar: !1 };
                        return (
                            (e = e || ""),
                            r.contains(e, "transparent") && (t.transparent = !0),
                            r.contains(e, "noborders") && (t.hideBorder = !0),
                            r.contains(e, "noheader") && (t.hideHeader = !0),
                            r.contains(e, "nofooter") && (t.hideFooter = !0),
                            r.contains(e, "noscrollbar") && (t.hideScrollBar = !0),
                            t
                        );
                    };
                },
                function (e, t, n) {
                    var r = n(26),
                        i = n(12),
                        o = n(24),
                        s = n(80),
                        a = n(82)(),
                        u = n(162),
                        c = "a.twitter-moment";
                    e.exports = function (e) {
                        return a(e, c).map(function (e) {
                            return u(
                                (function (e) {
                                    var t = s(e),
                                        n = { momentId: o.momentId(e.href), chrome: e.getAttribute("data-chrome"), limit: e.getAttribute("data-limit") };
                                    return (
                                        i.forIn(n, function (e, n) {
                                            var i = t[e];
                                            t[e] = r.hasValue(i) ? i : n;
                                        }),
                                        t
                                    );
                                })(e),
                                e.parentNode,
                                e
                            );
                        });
                    };
                },
                function (e, t, n) {
                    var r = n(86),
                        i = n(163),
                        o = n(53);
                    e.exports = function (e, t, n) {
                        return new r(i, o, "twitter-moment", e, t, n);
                    };
                },
                function (e, t, n) {
                    var r = n(1);
                    e.exports = function (e, t) {
                        var i = new r();
                        return (
                            n.e(4, function (r, o) {
                                var s;
                                if (r) return i.reject(r);
                                try {
                                    (s = n(164)), i.resolve(new s(e, t));
                                } catch (e) {
                                    i.reject(e);
                                }
                            }),
                            i.promise
                        );
                    };
                },
                ,
                ,
                ,
                function (e, t, n) {
                    var r = n(50),
                        i = n(89),
                        o = n(52),
                        s = n(168);
                    e.exports = i.couple(n(102), function (e) {
                        e.selectors({ inViewportMarker: ".js-inViewportScribingTarget" }),
                            e.define("scribeInViewportSeen", function (e, t) {
                                var n = r.extractTermsFromDOM(e);
                                (n.action = "seen"), this.scribe(n, t, o.version);
                            }),
                            e.after("show", function () {
                                var e = this.selectors.inViewportMarker;
                                this.select(e).forEach(function (e) {
                                    e &&
                                        s.inViewportOnce(
                                            e,
                                            this.sandbox.sandboxEl,
                                            function () {
                                                this.scribeInViewportSeen(e, this.scribeItems());
                                            }.bind(this)
                                        );
                                }, this);
                            });
                    });
                },
                function (e, t, n) {
                    var r = n(169),
                        i = n(67),
                        o = n(170),
                        s = n(7),
                        a = n(8),
                        u = function (e) {
                            return (
                                s.requestIdleCallback ||
                                s.requestAnimationFrame ||
                                function (e) {
                                    e();
                                }
                            )(e);
                        },
                        c = function () {
                            this.observers = [];
                        };
                    (c.prototype._register = function (e, t, n) {
                        var i,
                            c = this;
                        return a.hasIntersectionObserverSupport()
                            ? ((i = new s.IntersectionObserver(
                                  function (e) {
                                      e.forEach(function (e) {
                                          e.intersectionRatio >= 1 && (u(n), c._unregister(i));
                                      });
                                  },
                                  { threshold: 1 }
                              )).observe(e),
                              i)
                            : ((i = {
                                  update: function (o, s) {
                                      r(e, { viewportWidth: o, viewportHeight: s, sandboxEl: t }) && (n(), c._unregister(i));
                                  },
                              }),
                              this.observers.push(i),
                              1 === this.observers.length && (this.unlisten = o.addScrollListener(this._onViewportChange.bind(this))),
                              this._onViewportChange(),
                              i);
                    }),
                        (c.prototype._unregister = function (e) {
                            var t;
                            a.hasIntersectionObserverSupport() && e instanceof s.IntersectionObserver
                                ? e.disconnect()
                                : (t = this.observers.indexOf(e)) > -1 && (this.observers.splice(t, 1), 0 === this.observers.length && this.unlisten && this.unlisten());
                        }),
                        (c.prototype._onViewportChange = function () {
                            i(
                                u(
                                    function () {
                                        this._notify(o.getWidth(), o.getHeight());
                                    }.bind(this)
                                ),
                                50,
                                this
                            );
                        }),
                        (c.prototype._notify = function (e, t) {
                            this.observers.forEach(function (n) {
                                n.update(e, t);
                            });
                        }),
                        (c.prototype.inViewportOnce = function (e, t, n) {
                            return this._register(e, t, n);
                        }),
                        (e.exports = new c());
                },
                function (e, t, n) {
                    var r = n(9),
                        i = n(7);
                    e.exports = function (e, t) {
                        var n, o, s, a;
                        return (
                            (o = (t = t || {}).viewportWidth || i.innerWidth),
                            (n = t.viewportHeight || i.innerHeight),
                            (s = e.getBoundingClientRect()),
                            e.ownerDocument !== r && t.sandboxEl && ((a = t.sandboxEl.getBoundingClientRect()), (s = { top: s.top + a.top, bottom: s.bottom + a.top, left: s.left + a.left, right: s.right + a.left })),
                            s.top >= 0 && s.left >= 0 && s.bottom <= n && s.right <= o
                        );
                    };
                },
                function (e, t, n) {
                    var r = n(7),
                        i = {
                            _addListener: function (e, t) {
                                var n = function () {
                                    t();
                                };
                                return (
                                    r.addEventListener(e, n),
                                    function () {
                                        r.removeEventListener(e, n);
                                    }
                                );
                            },
                            addScrollListener: function (e) {
                                return this._addListener("scroll", e);
                            },
                            getHeight: function () {
                                return r.innerHeight;
                            },
                            getWidth: function () {
                                return r.innerWidth;
                            },
                        };
                    e.exports = i;
                },
                ,
                function (e, t, n) {
                    var r = n(12),
                        i = n(80),
                        o = n(82)(),
                        s = n(173),
                        a = "a.periscope-on-air",
                        u = /^https?:\/\/(?:www\.)?(?:periscope|pscp)\.tv\/@?([a-zA-Z0-9_]+)\/?$/i;
                    e.exports = function (e) {
                        return o(e, a).map(function (e) {
                            return s(
                                (function (e) {
                                    var t = i(e),
                                        n = e.getAttribute("href"),
                                        o = e.getAttribute("data-size"),
                                        s = u.exec(n)[1];
                                    return r.aug(t, { username: s, size: o });
                                })(e),
                                e.parentNode,
                                e
                            );
                        });
                    };
                },
                function (e, t, n) {
                    var r = n(86),
                        i = n(174),
                        o = n(53);
                    e.exports = function (e, t, n) {
                        return new r(i, o, "periscope-on-air", e, t, n);
                    };
                },
                function (e, t, n) {
                    var r = n(1);
                    e.exports = function (e, t) {
                        var i = new r();
                        return (
                            n.e(5, function (r, o) {
                                var s;
                                if (r) return i.reject(r);
                                try {
                                    (s = n(175)), i.resolve(new s(e, t));
                                } catch (e) {
                                    i.reject(e);
                                }
                            }),
                            i.promise
                        );
                    };
                },
                ,
                ,
                ,
                function (e, t, n) {
                    var r = n(26),
                        i = n(12),
                        o = n(179),
                        s = n(194),
                        a = n(80),
                        u = n(82)(),
                        c = n(196),
                        l = "a.twitter-timeline,div.twitter-timeline";
                    e.exports = function (e) {
                        return u(e, l).map(function (e) {
                            return c(
                                (function (e) {
                                    var t = a(e),
                                        n = e.getAttribute("data-show-replies"),
                                        u = {
                                            widgetId: e.getAttribute("data-widget-id"),
                                            chrome: e.getAttribute("data-chrome"),
                                            tweetLimit: e.getAttribute("data-tweet-limit"),
                                            ariaLive: e.getAttribute("data-aria-polite"),
                                            theme: e.getAttribute("data-theme"),
                                            linkColor: e.getAttribute("data-link-color"),
                                            borderColor: e.getAttribute("data-border-color"),
                                            showReplies: n ? r.asBoolean(n) : null,
                                            profileScreenName: e.getAttribute("data-screen-name"),
                                            profileUserId: e.getAttribute("data-user-id"),
                                            favoritesScreenName: e.getAttribute("data-favorites-screen-name"),
                                            favoritesUserId: e.getAttribute("data-favorites-user-id"),
                                            likesScreenName: e.getAttribute("data-likes-screen-name"),
                                            likesUserId: e.getAttribute("data-likes-user-id"),
                                            listOwnerScreenName: e.getAttribute("data-list-owner-screen-name"),
                                            listOwnerUserId: e.getAttribute("data-list-owner-id"),
                                            listId: e.getAttribute("data-list-id"),
                                            listSlug: e.getAttribute("data-list-slug"),
                                            customTimelineId: e.getAttribute("data-custom-timeline-id"),
                                            staticContent: e.getAttribute("data-static-content"),
                                            url: e.href,
                                        };
                                    return ((u = i.aug(u, t)).dataSource = o(u)), (u.useLegacyDefaults = u.dataSource instanceof s), u;
                                })(e),
                                e.parentNode,
                                e
                            );
                        });
                    };
                },
                function (e, t, n) {
                    function r(e) {
                        return i(p, function (t) {
                            try {
                                return new t(e);
                            } catch (e) {}
                        });
                    }
                    var i = n(141),
                        o = n(180),
                        s = n(184),
                        a = n(186),
                        u = n(188),
                        c = n(190),
                        l = n(192),
                        d = n(194),
                        f = { collection: o, event: s, likes: a, list: u, profile: l, widget: d, url: r },
                        p = [d, l, a, o, u, s, c];
                    e.exports = function (e) {
                        return e
                            ? (function (e) {
                                  var t, n;
                                  return (t = (e.sourceType + "").toLowerCase()), (n = f[t]) ? new n(e) : null;
                              })(e) || r(e)
                            : null;
                    };
                },
                function (e, t, n) {
                    var r = n(181);
                    e.exports = r.build([n(182), n(183)]);
                },
                function (e, t, n) {
                    var r = n(55),
                        i = n(59),
                        o = n(15);
                    ((r = Object.create(r)).build = o(r.build, null, i)), (e.exports = r);
                },
                function (e, t, n) {
                    function r(e) {
                        if (!e || !e.headers) throw new Error("unexpected response schema");
                        return { html: e.body, config: e.config, pollInterval: 1e3 * parseInt(e.headers.xPolling, 10) || null, maxCursorPosition: e.headers.maxPosition, minCursorPosition: e.headers.minPosition };
                    }
                    function i(e) {
                        if (e && e.headers) throw new Error(e.headers.status);
                        throw e instanceof Error ? e : new Error(e);
                    }
                    var o = n(136),
                        s = n(133),
                        a = n(134),
                        u = n(11),
                        c = n(95),
                        l = n(135),
                        d = n(46),
                        f = n(26),
                        p = n(29),
                        h = n(12);
                    e.exports = function (e) {
                        e.params({ instanceId: { required: !0, fallback: p.deterministic }, lang: { required: !0, transform: c.matchLanguage, fallback: "en" }, tweetLimit: { transform: f.asInt } }),
                            e.defineProperty("endpoint", {
                                get: function () {
                                    throw new Error("endpoint not specified");
                                },
                            }),
                            e.defineProperty("pollEndpoint", {
                                get: function () {
                                    return this.endpoint;
                                },
                            }),
                            e.define("cbId", function (e) {
                                var t = e ? "_new" : "_old";
                                return "tl_" + this.params.instanceId + "_" + this.id + t;
                            }),
                            e.define("queryParams", function () {
                                return { lang: this.params.lang, tz: l.getTimezoneOffset(), t: o(), domain: u.host, tweet_limit: this.params.tweetLimit, dnt: d.enabled() };
                            }),
                            e.define("fetch", function () {
                                return s.fetch(this.endpoint, this.queryParams(), a, this.cbId()).then(r, i);
                            }),
                            e.define("poll", function (e, t) {
                                var n, o;
                                return (
                                    (n = { since_id: (e = e || {}).sinceId, max_id: e.maxId, min_position: e.minPosition, max_position: e.maxPosition }),
                                    (o = h.aug(this.queryParams(), n)),
                                    s.fetch(this.pollEndpoint, o, a, this.cbId(t)).then(r, i)
                                );
                            });
                    };
                },
                function (e, t, n) {
                    function r(e, t) {
                        return i.collectionId(e) || t;
                    }
                    var i = n(24),
                        o = n(12),
                        s = n(137),
                        a = "collection:";
                    e.exports = function (e) {
                        e.params({ id: {}, url: {} }),
                            e.overrideProperty("id", {
                                get: function () {
                                    var e = r(this.params.url, this.params.id);
                                    return a + e;
                                },
                            }),
                            e.overrideProperty("endpoint", {
                                get: function () {
                                    return s.timeline(["collection"]);
                                },
                            }),
                            e.around("queryParams", function (e) {
                                return o.aug(e(), { collection_id: r(this.params.url, this.params.id) });
                            }),
                            e.before("initialize", function () {
                                if (!r(this.params.url, this.params.id)) throw new Error("one of url or id is required");
                            });
                    };
                },
                function (e, t, n) {
                    var r = n(181);
                    e.exports = r.build([n(182), n(185)]);
                },
                function (e, t, n) {
                    function r(e, t) {
                        return i.eventId(e) || t;
                    }
                    var i = n(24),
                        o = n(12),
                        s = n(137),
                        a = "event:";
                    e.exports = function (e) {
                        e.params({ id: {}, url: {} }),
                            e.overrideProperty("id", {
                                get: function () {
                                    var e = r(this.params.url, this.params.id);
                                    return a + e;
                                },
                            }),
                            e.overrideProperty("endpoint", {
                                get: function () {
                                    return s.timeline(["event"]);
                                },
                            }),
                            e.around("queryParams", function (e) {
                                return o.aug(e(), { event_id: r(this.params.url, this.params.id) });
                            }),
                            e.before("initialize", function () {
                                if (!r(this.params.url, this.params.id)) throw new Error("one of url or id is required");
                            });
                    };
                },
                function (e, t, n) {
                    var r = n(181);
                    e.exports = r.build([n(182), n(187)]);
                },
                function (e, t, n) {
                    function r(e) {
                        return i.likesScreenName(e.url) || e.screenName;
                    }
                    var i = n(24),
                        o = n(12),
                        s = n(137),
                        a = "likes:";
                    e.exports = function (e) {
                        e.params({ screenName: {}, userId: {}, url: {} }),
                            e.overrideProperty("id", {
                                get: function () {
                                    var e = r(this.params) || this.params.userId;
                                    return a + e;
                                },
                            }),
                            e.overrideProperty("endpoint", {
                                get: function () {
                                    return s.timeline(["likes"]);
                                },
                            }),
                            e.define("_getLikesQueryParam", function () {
                                var e = r(this.params);
                                return e ? { screen_name: e } : { user_id: this.params.userId };
                            }),
                            e.around("queryParams", function (e) {
                                return o.aug(e(), this._getLikesQueryParam());
                            }),
                            e.before("initialize", function () {
                                if (!r(this.params) && !this.params.userId) throw new Error("screen name or user id is required");
                            });
                    };
                },
                function (e, t, n) {
                    var r = n(181);
                    e.exports = r.build([n(182), n(189)]);
                },
                function (e, t, n) {
                    function r(e) {
                        var t = i.listScreenNameAndSlug(e.url) || e;
                        return o.compact({ screen_name: t.ownerScreenName, user_id: t.ownerUserId, list_slug: t.slug });
                    }
                    var i = n(24),
                        o = n(12),
                        s = n(137),
                        a = "list:";
                    e.exports = function (e) {
                        e.params({ id: {}, ownerScreenName: {}, ownerUserId: {}, slug: {}, url: {} }),
                            e.overrideProperty("id", {
                                get: function () {
                                    var e, t, n;
                                    return this.params.id ? a + this.params.id : ((t = (e = r(this.params)) && e.list_slug.replace(/-/g, "_")), (n = e && (e.screen_name || e.user_id)), a + (n + ":") + t);
                                },
                            }),
                            e.overrideProperty("endpoint", {
                                get: function () {
                                    return s.timeline(["list"]);
                                },
                            }),
                            e.define("_getListQueryParam", function () {
                                return this.params.id ? { list_id: this.params.id } : r(this.params);
                            }),
                            e.around("queryParams", function (e) {
                                return o.aug(e(), this._getListQueryParam());
                            }),
                            e.before("initialize", function () {
                                var e = r(this.params);
                                if (o.isEmptyObject(e) && !this.params.id) throw new Error("qualified slug or list id required");
                            });
                    };
                },
                function (e, t, n) {
                    var r = n(181);
                    e.exports = r.build([n(182), n(191)]);
                },
                function (e, t, n) {
                    var r = n(26),
                        i = n(137);
                    e.exports = function (e) {
                        e.params({ previewParams: { required: !0, validate: r.isObject } }),
                            e.overrideProperty("id", {
                                get: function () {
                                    return "preview";
                                },
                            }),
                            e.overrideProperty("endpoint", {
                                get: function () {
                                    return i.timelinePreconfigured(["preview"]);
                                },
                            }),
                            e.override("queryParams", function () {
                                return this.params.previewParams;
                            });
                    };
                },
                function (e, t, n) {
                    var r = n(181);
                    e.exports = r.build([n(182), n(193)]);
                },
                function (e, t, n) {
                    function r(e, t) {
                        return i.screenName(e) || t;
                    }
                    var i = n(24),
                        o = n(26),
                        s = n(12),
                        a = n(137),
                        u = "profile:";
                    e.exports = function (e) {
                        e.params({ showReplies: { fallback: !1, transform: o.asBoolean }, screenName: {}, userId: {}, url: {} }),
                            e.overrideProperty("id", {
                                get: function () {
                                    var e = r(this.params.url, this.params.screenName);
                                    return u + (e || this.params.userId);
                                },
                            }),
                            e.overrideProperty("endpoint", {
                                get: function () {
                                    return a.timeline(["profile"]);
                                },
                            }),
                            e.define("_getProfileQueryParam", function () {
                                var e = r(this.params.url, this.params.screenName),
                                    t = e ? { screen_name: e } : { user_id: this.params.userId };
                                return s.aug(t, { with_replies: this.params.showReplies ? "true" : "false" });
                            }),
                            e.around("queryParams", function (e) {
                                return s.aug(e(), this._getProfileQueryParam());
                            }),
                            e.before("initialize", function () {
                                if (!r(this.params.url, this.params.screenName) && !this.params.userId) throw new Error("screen name or user id is required");
                            });
                    };
                },
                function (e, t, n) {
                    var r = n(181);
                    e.exports = r.build([n(182), n(195)]);
                },
                function (e, t, n) {
                    var r = n(26),
                        i = n(12),
                        o = n(137);
                    e.exports = function (e) {
                        e.params({
                            widgetId: { required: !0 },
                            profileShowReplies: { fallback: !1, transform: r.asBoolean },
                            showReplies: { fallback: !1, transform: r.asBoolean },
                            profileScreenName: {},
                            screenName: {},
                            profileUserId: {},
                            userId: {},
                            favoritesScreenName: {},
                            favoritesUserId: {},
                            listOwnerScreenName: {},
                            listOwnerUserId: {},
                            listOwnerId: {},
                            listId: {},
                            listSlug: {},
                            customTimelineId: {},
                            previewParams: {},
                        }),
                            e.overrideProperty("id", {
                                get: function () {
                                    return this.params.widgetId;
                                },
                            }),
                            e.overrideProperty("endpoint", {
                                get: function () {
                                    return o.timelinePreconfigured([this.params.widgetId]);
                                },
                            }),
                            e.overrideProperty("pollEndpoint", {
                                get: function () {
                                    return o.timelinePreconfigured(["paged", this.params.widgetId]);
                                },
                            }),
                            e.define("_getWidgetQueryParams", function () {
                                var e = this.params.profileScreenName || this.params.screenName,
                                    t = this.params.profileUserId || this.params.userId,
                                    n = this.params.profileShowReplies || this.params.showReplies,
                                    r = this.params.listOwnerUserId || this.params.listOwnerId;
                                return e || t
                                    ? { override_type: "user", override_id: t, override_name: e, with_replies: n ? "true" : "false" }
                                    : this.params.favoritesScreenName || this.params.favoritesUserId
                                    ? { override_type: "favorites", override_id: this.params.favoritesUserId, override_name: this.params.favoritesScreenName }
                                    : this.params.listOwnerScreenName || r || this.params.listId || this.params.listSlug
                                    ? { override_type: "list", override_owner_id: r, override_owner_name: this.params.listOwnerScreenName, override_id: this.params.listId, override_name: this.params.listSlug }
                                    : this.params.customTimelineId
                                    ? { override_type: "custom", override_id: this.params.customTimelineId }
                                    : void 0;
                            }),
                            e.around("queryParams", function (e) {
                                return i.aug(e(), this._getWidgetQueryParams());
                            });
                    };
                },
                function (e, t, n) {
                    var r = n(86),
                        i = n(197),
                        o = n(53);
                    e.exports = function (e, t, n) {
                        return new r(i, o, "twitter-timeline", e, t, n);
                    };
                },
                function (e, t, n) {
                    var r = n(1);
                    e.exports = function (e, t) {
                        var i = new r();
                        return (
                            n.e(6, function (r, o) {
                                var s;
                                if (r) return i.reject(r);
                                try {
                                    (s = n(198)), i.resolve(new s(e, t));
                                } catch (e) {
                                    i.reject(e);
                                }
                            }),
                            i.promise
                        );
                    };
                },
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                function (e, t, n) {
                    var r = n(21),
                        i = n(24),
                        o = n(12),
                        s = n(80),
                        a = n(82)(),
                        u = n(224),
                        c = "blockquote.twitter-tweet",
                        l = /\btw-align-(left|right|center)\b/;
                    e.exports = function (e) {
                        return a(e, c).map(function (e) {
                            return u(
                                (function (e) {
                                    var t = s(e),
                                        n = e.getElementsByTagName("A"),
                                        a = n && n[n.length - 1],
                                        u = a && i.status(a.href),
                                        c = e.getAttribute("data-conversation"),
                                        d = "none" == c || "hidden" == c || r.present(e, "tw-hide-thread"),
                                        f = e.getAttribute("data-cards"),
                                        p = "none" == f || "hidden" == f || r.present(e, "tw-hide-media"),
                                        h = e.getAttribute("data-align") || e.getAttribute("align"),
                                        m = e.getAttribute("data-link-color"),
                                        g = e.getAttribute("data-theme");
                                    return !h && l.test(e.className) && (h = RegExp.$1), o.aug(t, { tweetId: u, hideThread: d, hideCard: p, align: h, linkColor: m, theme: g });
                                })(e),
                                e.parentNode,
                                e
                            );
                        });
                    };
                },
                function (e, t, n) {
                    var r = n(86),
                        i = n(225),
                        o = n(108);
                    e.exports = function (e, t, n) {
                        return new r(i, o, "twitter-tweet", e, t, n);
                    };
                },
                function (e, t, n) {
                    var r = n(1);
                    e.exports = function (e, t) {
                        var i = new r();
                        return (
                            n.e(7, function (r, o) {
                                var s;
                                if (r) return i.reject(r);
                                try {
                                    (s = n(226)), i.resolve(new s(e, t));
                                } catch (e) {
                                    i.reject(e);
                                }
                            }),
                            i.promise
                        );
                    };
                },
                ,
                ,
                ,
                ,
                function (e, t, n) {
                    function r(e) {
                        return e.input.lang || m;
                    }
                    function i(e, t) {
                        e.forEach(function (e) {
                            var n = t[e.input.id];
                            n ? e.taskDoneDeferred.resolve(n) : e.taskDoneDeferred.reject(new Error("not found"));
                        });
                    }
                    function o(e) {
                        e.forEach(function (e) {
                            e.taskDoneDeferred.reject(new Error("request failed"));
                        });
                    }
                    function s(e, t) {
                        var n = l(t, r);
                        p.forIn(n, function (t, n) {
                            var r = (function (e, t) {
                                    var n = { ids: [], lang: e, tz: f.getTimezoneOffset() };
                                    return (
                                        ((n = t.reduce(function (e, t) {
                                            return e.ids.push(t.input.id), e;
                                        }, n)).ids = n.ids.sort().join(",")),
                                        n
                                    );
                                })(t, n),
                                s = h(i, null, n),
                                a = h(o, null, n);
                            c.fetch(e, r, u).then(s, a);
                        });
                    }
                    function a(e) {
                        this.requestQueue = new d(h(s, null, e));
                    }
                    var u = n(231),
                        c = n(133),
                        l = n(43),
                        d = n(39),
                        f = n(135),
                        p = n(12),
                        h = n(15),
                        m = "en";
                    (a.prototype.fetch = function (e, t) {
                        return this.requestQueue.add({ id: e, lang: t });
                    }),
                        (e.exports = a);
                },
                function (e, t) {
                    e.exports = function (e) {
                        return { success: !0, resp: e };
                    };
                },
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                function (e, t, n) {
                    function r() {
                        i && i.length === s && (o.emitter.trigger(o.ALL_WIDGETS_AND_IMAGES_LOADED, i), (i = null));
                    }
                    var i,
                        o = n(240),
                        s = 0;
                    o.emitter.bind(o.ALL_WIDGETS_RENDERED, function (e) {
                        (i = e.widgets), r();
                    }),
                        (e.exports = {
                            reportImagesLoadForAWidget: function () {
                                s++, r();
                            },
                        });
                },
                function (e, t, n) {
                    var r = n(31).makeEmitter();
                    e.exports = { emitter: r, START: "start", ALL_WIDGETS_RENDERED: "all_widgets_rendered", ALL_WIDGETS_AND_IMAGES_LOADED: "all_widgets_and_images_loaded" };
                },
                ,
                function (e, t, n) {
                    var r = n(21),
                        i = n(12),
                        o = n(80),
                        s = n(82)(),
                        a = n(243),
                        u = n(26),
                        c = "a.twitter-share-button, a.twitter-mention-button, a.twitter-hashtag-button",
                        l = "twitter-hashtag-button",
                        d = "twitter-mention-button";
                    e.exports = function (e) {
                        return s(e, c).map(function (e) {
                            return a(
                                (function (e) {
                                    var t = o(e),
                                        n = {
                                            screenName: e.getAttribute("data-button-screen-name"),
                                            text: e.getAttribute("data-text"),
                                            type: e.getAttribute("data-type"),
                                            size: e.getAttribute("data-size"),
                                            url: e.getAttribute("data-url"),
                                            hashtags: e.getAttribute("data-hashtags"),
                                            via: e.getAttribute("data-via"),
                                            buttonHashtag: e.getAttribute("data-button-hashtag"),
                                        };
                                    return (
                                        i.forIn(n, function (e, n) {
                                            var r = t[e];
                                            t[e] = u.hasValue(r) ? r : n;
                                        }),
                                        (t.screenName = t.screenName || t.screen_name),
                                        (t.buttonHashtag = t.buttonHashtag || t.button_hashtag || t.hashtag),
                                        r.present(e, l) && (t.type = "hashtag"),
                                        r.present(e, d) && (t.type = "mention"),
                                        t
                                    );
                                })(e),
                                e.parentNode,
                                e
                            );
                        });
                    };
                },
                function (e, t, n) {
                    var r = n(86),
                        i = n(244),
                        o = n(119);
                    e.exports = function (e, t, n) {
                        var s = (e && e.type) || "share";
                        return new r(i, o, "hashtag" == s ? "twitter-hashtag-button" : "mention" == s ? "twitter-mention-button" : "twitter-share-button", e, t, n);
                    };
                },
                function (e, t, n) {
                    var r = n(1);
                    e.exports = function (e, t) {
                        var i = new r();
                        return (
                            n.e(2, function (r, o) {
                                var s;
                                if (r) return i.reject(r);
                                try {
                                    (s = n(245)), i.resolve(new s(e, t));
                                } catch (e) {
                                    i.reject(e);
                                }
                            }),
                            i.promise
                        );
                    };
                },
                ,
                ,
                function (e, t, n) {
                    var r = n(12),
                        i = n(80),
                        o = n(82)(),
                        s = n(248),
                        a = n(253),
                        u = "blockquote.twitter-video";
                    e.exports = function (e) {
                        return o(e, u).map(function (e) {
                            return s(
                                (function (e) {
                                    var t = i(e),
                                        n = e.getElementsByTagName("A"),
                                        o = { url: (n && n[n.length - 1]).href };
                                    return ((o = r.aug({}, o, r.compact(t))).dataSource = a(o)), o;
                                })(e),
                                e.parentNode,
                                e
                            );
                        });
                    };
                },
                function (e, t, n) {
                    var r = n(86),
                        i = n(249),
                        o = n(252);
                    e.exports = function (e, t, n) {
                        return new r(i, o, "twitter-video", e, t, n);
                    };
                },
                function (e, t, n) {
                    var r = n(1);
                    e.exports = function (e, t) {
                        var i = new r();
                        return (
                            n.e(7, function (r, o) {
                                var s;
                                if (r) return i.reject(r);
                                try {
                                    (s = n(250)), i.resolve(new s(e, t));
                                } catch (e) {
                                    i.reject(e);
                                }
                            }),
                            i.promise
                        );
                    };
                },
                ,
                ,
                function (e, t, n) {
                    var r = n(36),
                        i = n(54),
                        o = n(63),
                        s = 320,
                        a = 500,
                        u = "10px 0px";
                    e.exports = i.build([
                        o,
                        function (e) {
                            e.overrideProperty("sandboxEl", {
                                get: function () {
                                    return this._constrainingWrapper;
                                },
                            }),
                                e.override("makeVisible", function () {
                                    var e = this.iframeEl;
                                    return r.write(function () {
                                        e.style.visibility = "visible";
                                    });
                                }),
                                e.define("setWrapperSize", function (e, t) {
                                    var n = this,
                                        i = e / t,
                                        o = 100 / i + "%",
                                        s = a * i + "px";
                                    return r.write(function () {
                                        (n._constrainingWrapper.style.maxWidth = s), (n._iframeWrapper.style.paddingBottom = o);
                                    });
                                }),
                                e.after("initialize", function () {
                                    this._constrainingWrapper = this._iframeWrapper = null;
                                }),
                                e.around("insert", function (e, t, n, r, i) {
                                    var o = this.targetGlobal.document,
                                        a = (this._constrainingWrapper = o.createElement("div")),
                                        c = (this._iframeWrapper = o.createElement("div"));
                                    return (
                                        (a.id = t),
                                        (a.className = (n || {}).class),
                                        (a.style.minWidth = s + "px"),
                                        (a.style.position = "relative"),
                                        (a.style.margin = u),
                                        (c.style.position = "relative"),
                                        (c.style.height = "0px"),
                                        a.appendChild(c),
                                        e(void 0, null, null, function (e) {
                                            (e.style.position = "absolute"), (e.style.top = "0px"), (e.style.bottom = "0px"), (e.style.width = "100%"), (e.style.height = "100%"), c.appendChild(e), i(a);
                                        })
                                    );
                                });
                        },
                    ]);
                },
                function (e, t, n) {
                    var r = n(141),
                        i = n(254);
                    e.exports = function (e) {
                        return e
                            ? (function (e) {
                                  var t, n;
                                  return (t = (e.sourceType + "").toLowerCase()), (n = i[t]) ? new n(e) : null;
                              })(e) ||
                                  (function (e) {
                                      return r(Object.keys(i), function (t) {
                                          var n = i[t];
                                          try {
                                              return new n(e);
                                          } catch (e) {}
                                      });
                                  })(e)
                            : null;
                    };
                },
                function (e, t, n) {
                    var r = n(255),
                        i = n(258);
                    e.exports = { tweet: r, event: i };
                },
                function (e, t, n) {
                    var r = n(181);
                    e.exports = r.build([n(256), n(257)]);
                },
                function (e, t, n) {
                    var r = n(95);
                    e.exports = function (e) {
                        e.params({ lang: { required: !0, transform: r.matchLanguage, fallback: "en" } }),
                            e.defineProperty("identifier", {
                                get: function () {
                                    throw new Error("identifier not specified");
                                },
                            }),
                            e.defineProperty("name", {
                                get: function () {
                                    throw new Error("name not specified");
                                },
                            }),
                            e.defineProperty("scribeItemType", {
                                get: function () {
                                    throw new Error("scribeItemType not specified");
                                },
                            }),
                            e.define("fetch", function () {
                                throw new Error("fetch not specified");
                            });
                    };
                },
                function (e, t, n) {
                    function r(e, t) {
                        return t || i.status(e);
                    }
                    var i = n(24),
                        o = n(137),
                        s = new (n(230))(o.video()),
                        a = n(107);
                    e.exports = function (e) {
                        e.params({ id: {}, url: {} }),
                            e.overrideProperty("identifier", {
                                get: function () {
                                    return r(this.params.url, this.params.id);
                                },
                            }),
                            e.override("fetch", function () {
                                return s.fetch(this.identifier, this.params.lang);
                            }),
                            e.overrideProperty("scribeItemType", {
                                get: function () {
                                    return a.TWEET;
                                },
                            }),
                            e.overrideProperty("name", {
                                get: function () {
                                    return "tweet";
                                },
                            }),
                            e.before("initialize", function () {
                                if (!r(this.params.url, this.params.id)) throw new Error("one of url or id is required");
                            });
                    };
                },
                function (e, t, n) {
                    var r = n(181);
                    e.exports = r.build([n(256), n(259)]);
                },
                function (e, t, n) {
                    function r(e, t) {
                        return i.eventId(e) || t;
                    }
                    var i = n(24),
                        o = n(260),
                        s = n(137),
                        a = n(107);
                    e.exports = function (e) {
                        e.params({ id: {}, url: {} }),
                            e.overrideProperty("identifier", {
                                get: function () {
                                    return r(this.params.url, this.params.id);
                                },
                            }),
                            e.override("fetch", function () {
                                var e = { lang: this.params.lang, event_id: this.identifier };
                                return o.fetch(s.eventVideo(), e);
                            }),
                            e.overrideProperty("scribeItemType", {
                                get: function () {
                                    return a.LIVE_VIDEO_EVENT;
                                },
                            }),
                            e.overrideProperty("name", {
                                get: function () {
                                    return "event";
                                },
                            }),
                            e.before("initialize", function () {
                                if (!r(this.params.url, this.params.id)) throw new Error("one of url or id is required");
                            });
                    };
                },
                function (e, t, n) {
                    function r(e) {
                        return { success: !e.error, resp: e };
                    }
                    function i(e) {
                        return e.data.html;
                    }
                    function o(e) {
                        return a.reject(e.error.detail);
                    }
                    var s = n(133),
                        a = n(2);
                    e.exports = {
                        fetch: function (e, t) {
                            return s.fetch(e, t, r).then(i, o);
                        },
                    };
                },
                function (e, t, n) {
                    var r = n(12);
                    e.exports = r.aug({}, n(262), n(264), n(265), n(266), n(267), n(268), n(269), n(270), n(271));
                },
                function (e, t, n) {
                    var r = n(85),
                        i = n(263)(["userId"], {}, r);
                    e.exports = { createDMButton: i };
                },
                function (e, t, n) {
                    var r = n(2),
                        i = n(34),
                        o = n(46),
                        s = n(26),
                        a = n(12);
                    e.exports = function (e, t, n) {
                        var u;
                        return (
                            (t = t || {}),
                            (u = "ƒ(" + (e = e || []).join(", ") + ", target, [options]);"),
                            function () {
                                var c,
                                    l,
                                    d,
                                    f,
                                    p = Array.prototype.slice.apply(arguments, [0, e.length]),
                                    h = Array.prototype.slice.apply(arguments, [e.length]);
                                return (
                                    h.forEach(function (e) {
                                        if (e) return e.nodeType === Node.ELEMENT_NODE ? void (d = e) : a.isType("function", e) ? void (c = e) : void (a.isType("object", e) && (l = e));
                                    }),
                                    p.length !== e.length || 0 === h.length
                                        ? (c &&
                                              a.async(function () {
                                                  c(!1);
                                              }),
                                          r.reject(new Error("Not enough parameters. Expected: " + u)))
                                        : d
                                        ? ((l = a.aug({}, l || {}, t)),
                                          e.forEach(function (e) {
                                              l[e] = p.shift();
                                          }),
                                          s.asBoolean(l.dnt) && o.setOn(),
                                          (f = i.addWidget(n(l, d))),
                                          c &&
                                              f.then(c, function () {
                                                  c(!1);
                                              }),
                                          f)
                                        : (c &&
                                              a.async(function () {
                                                  c(!1);
                                              }),
                                          r.reject(new Error("No target element specified. Expected: " + u)))
                                );
                            }
                        );
                    };
                },
                function (e, t, n) {
                    var r = n(113),
                        i = n(263)(["screenName"], {}, r);
                    e.exports = { createFollowButton: i };
                },
                function (e, t, n) {
                    var r = n(128),
                        i = n(263)(["collectionId"], {}, r);
                    e.exports = { createGridFromCollection: i };
                },
                function (e, t, n) {
                    var r = n(162),
                        i = n(263)(["momentId"], {}, r);
                    e.exports = { createMoment: i };
                },
                function (e, t, n) {
                    var r = n(173),
                        i = n(263)(["username"], {}, r);
                    e.exports = { createPeriscopeOnAirButton: i };
                },
                function (e, t, n) {
                    var r = n(11),
                        i = n(24),
                        o = n(12),
                        s = n(26),
                        a = n(179),
                        u = n(194),
                        c = n(196),
                        l = n(263)([], {}, c),
                        d = n(2),
                        f = {
                            createTimeline: function (e) {
                                var t,
                                    n = o.toRealArray(arguments).slice(1);
                                return o.isObject(e) || s.isString(e)
                                    ? ((e = e || {}),
                                      n.forEach(function (e) {
                                          o.isType("object", e) &&
                                              (function (e) {
                                                  e.ariaLive = e.ariaPolite;
                                              })((t = e));
                                      }),
                                      t || ((t = {}), n.push(t)),
                                      s.isString(e) && (e = o.aug({}, t, { sourceType: "widget", widgetId: e })),
                                      (e.lang = t.lang),
                                      (e.tweetLimit = t.tweetLimit),
                                      (e.showReplies = t.showReplies),
                                      (t.dataSource = a(e)),
                                      (t.useLegacyDefaults = t.dataSource instanceof u),
                                      l.apply(this, n))
                                    : d.reject("data source must be a string or an object.");
                            },
                        };
                    i.isTwitterURL(r.href) &&
                        (f.createTimelinePreview = function (e, t, n) {
                            var r = { previewParams: e, useLegacyDefaults: !0, isPreviewTimeline: !0 };
                            return (r.dataSource = a(r)), l(t, r, n);
                        }),
                        (e.exports = f);
                },
                function (e, t, n) {
                    var r = n(12),
                        i = n(224),
                        o = (function (e) {
                            return function () {
                                return (
                                    r
                                        .toRealArray(arguments)
                                        .slice(1)
                                        .forEach(function (e) {
                                            r.isType("object", e) && ((e.hideCard = "none" == e.cards || "hidden" == e.cards), (e.hideThread = "none" == e.conversation || "hidden" == e.conversation));
                                        }),
                                    e.apply(this, arguments)
                                );
                            };
                        })(n(263)(["tweetId"], {}, i));
                    e.exports = { createTweet: o, createTweetEmbed: o };
                },
                function (e, t, n) {
                    function r(e) {
                        return function () {
                            return (
                                i
                                    .toRealArray(arguments)
                                    .slice(1)
                                    .forEach(function (e) {
                                        i.isType("object", e) && ((e.screenName = e.screenName || e.screen_name), (e.buttonHashtag = e.buttonHashtag || e.button_hashtag || e.hashtag));
                                    }),
                                e.apply(this, arguments)
                            );
                        };
                    }
                    var i = n(12),
                        o = n(243),
                        s = n(263),
                        a = s(["url"], { type: "share" }, o),
                        u = s(["buttonHashtag"], { type: "hashtag" }, o),
                        c = s(["screenName"], { type: "mention" }, o);
                    e.exports = { createShareButton: r(a), createHashtagButton: r(u), createMentionButton: r(c) };
                },
                function (e, t, n) {
                    var r = n(248),
                        i = n(263),
                        o = n(12),
                        s = n(26),
                        a = n(253),
                        u = i([], {}, r);
                    e.exports = {
                        createVideo: function (e) {
                            var t,
                                n = o.toRealArray(arguments).slice(1),
                                r = e || {};
                            return (
                                n.forEach(function (e) {
                                    o.isType("object", e) && (t = e);
                                }),
                                t || ((t = {}), n.push(t)),
                                (s.isString(e) || s.isNumber(e)) && (r = { sourceType: "tweet", id: e }),
                                (r.lang = t.lang),
                                (t.dataSource = a(r)),
                                u.apply(this, n)
                            );
                        },
                    };
                },
                function (e, t, n) {
                    function r() {
                        var e, t;
                        for (c = 1, e = 0, t = l.length; e < t; e++) l[e]();
                    }
                    var i,
                        o,
                        s,
                        a = n(9),
                        u = n(7),
                        c = 0,
                        l = [],
                        d = a.createElement("a");
                    /^loade|c/.test(a.readyState) && (c = 1),
                        a.addEventListener &&
                            a.addEventListener(
                                "DOMContentLoaded",
                                (o = function () {
                                    a.removeEventListener("DOMContentLoaded", o, !1), r();
                                }),
                                !1
                            ),
                        d.doScroll &&
                            a.attachEvent(
                                "onreadystatechange",
                                (i = function () {
                                    /^c/.test(a.readyState) && (a.detachEvent("onreadystatechange", i), r());
                                })
                            ),
                        (s = d.doScroll
                            ? function (e) {
                                  u.self != u.top
                                      ? c
                                          ? e()
                                          : l.push(e)
                                      : (function () {
                                            try {
                                                d.doScroll("left");
                                            } catch (t) {
                                                return setTimeout(function () {
                                                    s(e);
                                                }, 50);
                                            }
                                            e();
                                        })();
                              }
                            : function (e) {
                                  c ? e() : l.push(e);
                              }),
                        (e.exports = s);
                },
                function (e, t, n) {
                    var r = n(52),
                        i = n(18);
                    e.exports = function () {
                        i.set("buildVersion", r.version);
                    };
                },
                function (e, t, n) {
                    n(275), n(239), n(279);
                },
                function (e, t, n) {
                    var r = n(276),
                        i = n(240),
                        o = n(278),
                        s = new r();
                    i.emitter.bind(i.START, function () {
                        s.start();
                    }),
                        i.emitter.bind(i.ALL_WIDGETS_RENDERED, function () {
                            s.end(), o(s.duration(), { action: "render" });
                        });
                },
                function (e, t, n) {
                    function r() {}
                    var i = n(277);
                    (r.prototype.start = function () {
                        this._startTime = i();
                    }),
                        (r.prototype.end = function () {
                            this._duration = i() - this._startTime;
                        }),
                        (r.prototype.duration = function () {
                            return this._duration;
                        }),
                        (e.exports = r);
                },
                function (e, t, n) {
                    var r = n(7);
                    e.exports = function () {
                        return r.performance && r.performance.now ? r.performance.now() : Date.now();
                    };
                },
                function (e, t, n) {
                    var r = n(42),
                        i = n(47),
                        o = n(12);
                    e.exports = function (e, t) {
                        var n = { widget_origin: i.rootDocumentLocation(), widget_frame: i.isFramed() ? i.currentDocumentLocation() : null, duration_ms: e },
                            s = o.aug(t, { page: "page", component: "performance" });
                        r.scribe(s, n);
                    };
                },
                function (e, t, n) {
                    function r(e) {
                        return e.performance
                            .getEntriesByType("resource")
                            .filter(function (e) {
                                return a.isTwimgURL(e.name) || a.isTwitterURL(e.name);
                            })
                            .reduce(function (e, t) {
                                return (e[t.name] = t.duration), e;
                            }, {});
                    }
                    var i = n(240),
                        o = n(278),
                        s = n(280),
                        a = n(24),
                        u = n(7),
                        c = n(12),
                        l = n(8),
                        d = n(109);
                    i.emitter.bind(i.ALL_WIDGETS_AND_IMAGES_LOADED, function (e) {
                        var t,
                            n,
                            i = [];
                        l.hasPerformanceInformation() &&
                            ((t = r(u)),
                            d.isSupported() ||
                                (i = (function (e) {
                                    return e.reduce(function (e, t) {
                                        return c.aug(e, r(t.contentDocument.defaultView));
                                    }, {});
                                })(e)),
                            (n = c.aug({}, t, i)),
                            Object.keys(s).forEach(function (e) {
                                !(function (e, t, n) {
                                    var r = Object.keys(e).reduce(function (t, r) {
                                        return n(r) ? t + e[r] : t;
                                    }, 0);
                                    o(r, { element: t, action: "resource" });
                                })(n, e, s[e]);
                            }));
                    });
                },
                function (e, t, n) {
                    var r = n(24),
                        i = {
                            all: function () {
                                return !0;
                            },
                            image: function (e) {
                                return r.isTwimgURL(e);
                            },
                            settings: function (e) {
                                return r.isSettingsURL(e);
                            },
                            widget_iframe: function (e) {
                                return r.isWidgetIframeURL(e);
                            },
                        };
                    e.exports = i;
                },
            ]))),
    (function () {
        function e(e, t, n) {
            return e.call.apply(e.bind, arguments);
        }
        function t(e, t, n) {
            if (!e) throw Error();
            if (2 < arguments.length) {
                var r = Array.prototype.slice.call(arguments, 2);
                return function () {
                    var n = Array.prototype.slice.call(arguments);
                    return Array.prototype.unshift.apply(n, r), e.apply(t, n);
                };
            }
            return function () {
                return e.apply(t, arguments);
            };
        }
        function n(r, i, o) {
            return (n = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? e : t).apply(null, arguments);
        }
        var r =
            Date.now ||
            function () {
                return +new Date();
            };
        function i(e, t) {
            (this.a = e), (this.m = t || e), (this.c = this.m.document);
        }
        var o = !!window.FontFace;
        function s(e, t, n, r) {
            if (((t = e.c.createElement(t)), n)) for (var i in n) n.hasOwnProperty(i) && ("style" == i ? (t.style.cssText = n[i]) : t.setAttribute(i, n[i]));
            return r && t.appendChild(e.c.createTextNode(r)), t;
        }
        function a(e, t, n) {
            (e = e.c.getElementsByTagName(t)[0]) || (e = document.documentElement), e.insertBefore(n, e.lastChild);
        }
        function u(e) {
            e.parentNode && e.parentNode.removeChild(e);
        }
        function c(e, t, n) {
            (t = t || []), (n = n || []);
            for (var r = e.className.split(/\s+/), i = 0; i < t.length; i += 1) {
                for (var o = !1, s = 0; s < r.length; s += 1)
                    if (t[i] === r[s]) {
                        o = !0;
                        break;
                    }
                o || r.push(t[i]);
            }
            for (t = [], i = 0; i < r.length; i += 1) {
                for (o = !1, s = 0; s < n.length; s += 1)
                    if (r[i] === n[s]) {
                        o = !0;
                        break;
                    }
                o || t.push(r[i]);
            }
            e.className = t
                .join(" ")
                .replace(/\s+/g, " ")
                .replace(/^\s+|\s+$/, "");
        }
        function l(e, t) {
            for (var n = e.className.split(/\s+/), r = 0, i = n.length; r < i; r++) if (n[r] == t) return !0;
            return !1;
        }
        function d(e) {
            if ("string" == typeof e.f) return e.f;
            var t = e.m.location.protocol;
            return "about:" == t && (t = e.a.location.protocol), "https:" == t ? "https:" : "http:";
        }
        function f(e, t, n) {
            function r() {
                l && i && u && (l(c), (l = null));
            }
            t = s(e, "link", { rel: "stylesheet", href: t, media: "all" });
            var i = !1,
                u = !0,
                c = null,
                l = n || null;
            o
                ? ((t.onload = function () {
                      (i = !0), r();
                  }),
                  (t.onerror = function () {
                      (i = !0), (c = Error("Stylesheet failed to load")), r();
                  }))
                : setTimeout(function () {
                      (i = !0), r();
                  }, 0),
                a(e, "head", t);
        }
        function p(e, t, n, r) {
            var i = e.c.getElementsByTagName("head")[0];
            if (i) {
                var o = s(e, "script", { src: t }),
                    a = !1;
                return (
                    (o.onload = o.onreadystatechange = function () {
                        a || (this.readyState && "loaded" != this.readyState && "complete" != this.readyState) || ((a = !0), n && n(null), (o.onload = o.onreadystatechange = null), "HEAD" == o.parentNode.tagName && i.removeChild(o));
                    }),
                    i.appendChild(o),
                    setTimeout(function () {
                        a || ((a = !0), n && n(Error("Script load timeout")));
                    }, r || 5e3),
                    o
                );
            }
            return null;
        }
        function h() {
            (this.a = 0), (this.c = null);
        }
        function m(e) {
            return (
                e.a++,
                function () {
                    e.a--, v(e);
                }
            );
        }
        function g(e, t) {
            (e.c = t), v(e);
        }
        function v(e) {
            0 == e.a && e.c && (e.c(), (e.c = null));
        }
        function y(e) {
            this.a = e || "-";
        }
        function b(e, t) {
            (this.c = e), (this.f = 4), (this.a = "n");
            var n = (t || "n4").match(/^([nio])([1-9])$/i);
            n && ((this.a = n[1]), (this.f = parseInt(n[2], 10)));
        }
        function w(e) {
            var t = [];
            e = e.split(/,\s*/);
            for (var n = 0; n < e.length; n++) {
                var r = e[n].replace(/['"]/g, "");
                -1 != r.indexOf(" ") || /^\d/.test(r) ? t.push("'" + r + "'") : t.push(r);
            }
            return t.join(",");
        }
        function x(e) {
            return e.a + e.f;
        }
        function C(e) {
            var t = "normal";
            return "o" === e.a ? (t = "oblique") : "i" === e.a && (t = "italic"), t;
        }
        function _(e) {
            var t = 4,
                n = "n",
                r = null;
            return (
                e &&
                    ((r = e.match(/(normal|oblique|italic)/i)) && r[1] && (n = r[1].substr(0, 1).toLowerCase()),
                    (r = e.match(/([1-9]00|normal|bold)/i)) && r[1] && (/bold/i.test(r[1]) ? (t = 7) : /[1-9]00/.test(r[1]) && (t = parseInt(r[1].substr(0, 1), 10)))),
                n + t
            );
        }
        function E(e, t) {
            (this.c = e), (this.f = e.m.document.documentElement), (this.h = t), (this.a = new y("-")), (this.j = !1 !== t.events), (this.g = !1 !== t.classes);
        }
        function T(e) {
            if (e.g) {
                var t = l(e.f, e.a.c("wf", "active")),
                    n = [],
                    r = [e.a.c("wf", "loading")];
                t || n.push(e.a.c("wf", "inactive")), c(e.f, n, r);
            }
            k(e, "inactive");
        }
        function k(e, t, n) {
            e.j && e.h[t] && (n ? e.h[t](n.c, x(n)) : e.h[t]());
        }
        function S() {
            this.c = {};
        }
        function A(e, t) {
            (this.c = e), (this.f = t), (this.a = s(this.c, "span", { "aria-hidden": "true" }, this.f));
        }
        function L(e) {
            a(e.c, "body", e.a);
        }
        function q(e) {
            return (
                "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" +
                w(e.c) +
                ";font-style:" +
                C(e) +
                ";font-weight:" +
                e.f +
                "00;"
            );
        }
        function P(e, t, n, r, i, o) {
            (this.g = e), (this.j = t), (this.a = r), (this.c = n), (this.f = i || 3e3), (this.h = o || void 0);
        }
        function D(e, t, n, r, i, o, s) {
            (this.v = e),
                (this.B = t),
                (this.c = n),
                (this.a = r),
                (this.s = s || "BESbswy"),
                (this.f = {}),
                (this.w = i || 3e3),
                (this.u = o || null),
                (this.o = this.j = this.h = this.g = null),
                (this.g = new A(this.c, this.s)),
                (this.h = new A(this.c, this.s)),
                (this.j = new A(this.c, this.s)),
                (this.o = new A(this.c, this.s)),
                (e = q((e = new b(this.a.c + ",serif", x(this.a))))),
                (this.g.a.style.cssText = e),
                (e = q((e = new b(this.a.c + ",sans-serif", x(this.a))))),
                (this.h.a.style.cssText = e),
                (e = q((e = new b("serif", x(this.a))))),
                (this.j.a.style.cssText = e),
                (e = q((e = new b("sans-serif", x(this.a))))),
                (this.o.a.style.cssText = e),
                L(this.g),
                L(this.h),
                L(this.j),
                L(this.o);
        }
        (y.prototype.c = function (e) {
            for (var t = [], n = 0; n < arguments.length; n++) t.push(arguments[n].replace(/[\W_]+/g, "").toLowerCase());
            return t.join(this.a);
        }),
            (P.prototype.start = function () {
                var e = this.c.m.document,
                    t = this,
                    n = r(),
                    i = new Promise(function (i, o) {
                        !(function s() {
                            r() - n >= t.f
                                ? o()
                                : e.fonts
                                      .load(
                                          (function (e) {
                                              return C(e) + " " + e.f + "00 300px " + w(e.c);
                                          })(t.a),
                                          t.h
                                      )
                                      .then(
                                          function (e) {
                                              1 <= e.length ? i() : setTimeout(s, 25);
                                          },
                                          function () {
                                              o();
                                          }
                                      );
                        })();
                    }),
                    o = new Promise(function (e, n) {
                        setTimeout(n, t.f);
                    });
                Promise.race([o, i]).then(
                    function () {
                        t.g(t.a);
                    },
                    function () {
                        t.j(t.a);
                    }
                );
            });
        var I = { D: "serif", C: "sans-serif" },
            j = null;
        function N() {
            if (null === j) {
                var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                j = !!e && (536 > parseInt(e[1], 10) || (536 === parseInt(e[1], 10) && 11 >= parseInt(e[2], 10)));
            }
            return j;
        }
        function O(e, t, n) {
            for (var r in I) if (I.hasOwnProperty(r) && t === e.f[I[r]] && n === e.f[I[r]]) return !0;
            return !1;
        }
        function R(e) {
            var t,
                i = e.g.a.offsetWidth,
                o = e.h.a.offsetWidth;
            (t = i === e.f.serif && o === e.f["sans-serif"]) || (t = N() && O(e, i, o)),
                t
                    ? r() - e.A >= e.w
                        ? N() && O(e, i, o) && (null === e.u || e.u.hasOwnProperty(e.a.c))
                            ? M(e, e.v)
                            : M(e, e.B)
                        : (function (e) {
                              setTimeout(
                                  n(function () {
                                      R(this);
                                  }, e),
                                  50
                              );
                          })(e)
                    : M(e, e.v);
        }
        function M(e, t) {
            setTimeout(
                n(function () {
                    u(this.g.a), u(this.h.a), u(this.j.a), u(this.o.a), t(this.a);
                }, e),
                0
            );
        }
        function z(e, t, n) {
            (this.c = e), (this.a = t), (this.f = 0), (this.o = this.j = !1), (this.s = n);
        }
        D.prototype.start = function () {
            (this.f.serif = this.j.a.offsetWidth), (this.f["sans-serif"] = this.o.a.offsetWidth), (this.A = r()), R(this);
        };
        var B = null;
        function F(e) {
            0 == --e.f && e.j && (e.o ? ((e = e.a).g && c(e.f, [e.a.c("wf", "active")], [e.a.c("wf", "loading"), e.a.c("wf", "inactive")]), k(e, "active")) : T(e.a));
        }
        function $(e) {
            (this.j = e), (this.a = new S()), (this.h = 0), (this.f = this.g = !0);
        }
        function H(e, t, r, i, o) {
            var s = 0 == --e.h;
            (e.f || e.g) &&
                setTimeout(function () {
                    var e = o || null,
                        a = i || {};
                    if (0 === r.length && s) T(t.a);
                    else {
                        (t.f += r.length), s && (t.j = s);
                        var u,
                            l = [];
                        for (u = 0; u < r.length; u++) {
                            var d = r[u],
                                f = a[d.c],
                                p = t.a,
                                h = d;
                            p.g && c(p.f, [p.a.c("wf", h.c, x(h).toString(), "loading")]),
                                k(p, "fontloading", h),
                                (p = null),
                                null === B && (B = !!window.FontFace && (!(h = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent)) || 42 < parseInt(h[1], 10))),
                                (p = B ? new P(n(t.g, t), n(t.h, t), t.c, d, t.s, f) : new D(n(t.g, t), n(t.h, t), t.c, d, t.s, e, f)),
                                l.push(p);
                        }
                        for (u = 0; u < l.length; u++) l[u].start();
                    }
                }, 0);
        }
        function W(e, t) {
            (this.c = e), (this.a = t);
        }
        function U(e, t) {
            (this.c = e), (this.a = t);
        }
        function V(e, t, n) {
            (this.c = e || t + Q), (this.a = []), (this.f = []), (this.g = n || "");
        }
        (z.prototype.g = function (e) {
            var t = this.a;
            t.g && c(t.f, [t.a.c("wf", e.c, x(e).toString(), "active")], [t.a.c("wf", e.c, x(e).toString(), "loading"), t.a.c("wf", e.c, x(e).toString(), "inactive")]), k(t, "fontactive", e), (this.o = !0), F(this);
        }),
            (z.prototype.h = function (e) {
                var t = this.a;
                if (t.g) {
                    var n = l(t.f, t.a.c("wf", e.c, x(e).toString(), "active")),
                        r = [],
                        i = [t.a.c("wf", e.c, x(e).toString(), "loading")];
                    n || r.push(t.a.c("wf", e.c, x(e).toString(), "inactive")), c(t.f, r, i);
                }
                k(t, "fontinactive", e), F(this);
            }),
            ($.prototype.load = function (e) {
                (this.c = new i(this.j, e.context || this.j)),
                    (this.g = !1 !== e.events),
                    (this.f = !1 !== e.classes),
                    (function (e, t, n) {
                        var r = [],
                            i = n.timeout;
                        !(function (e) {
                            e.g && c(e.f, [e.a.c("wf", "loading")]), k(e, "loading");
                        })(t);
                        var r = (function (e, t, n) {
                                var r,
                                    i = [];
                                for (r in t)
                                    if (t.hasOwnProperty(r)) {
                                        var o = e.c[r];
                                        o && i.push(o(t[r], n));
                                    }
                                return i;
                            })(e.a, n, e.c),
                            o = new z(e.c, t, i);
                        for (e.h = r.length, t = 0, n = r.length; t < n; t++)
                            r[t].load(function (t, n, r) {
                                H(e, o, t, n, r);
                            });
                    })(this, new E(this.c, e), e);
            }),
            (W.prototype.load = function (e) {
                var t = this,
                    n = t.a.projectId,
                    r = t.a.version;
                if (n) {
                    var i = t.c.m;
                    p(
                        this.c,
                        (function (e, t, n) {
                            return d(e.c) + "//" + (e = (e.a.api || "fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/, "")) + "/" + t + ".js" + (n ? "?v=" + n : "");
                        })(t, n, r),
                        function (r) {
                            r
                                ? e([])
                                : ((i["__MonotypeConfiguration__" + n] = function () {
                                      return t.a;
                                  }),
                                  (function t() {
                                      if (i["__mti_fntLst" + n]) {
                                          var r,
                                              o = i["__mti_fntLst" + n](),
                                              s = [];
                                          if (o)
                                              for (var a = 0; a < o.length; a++) {
                                                  var u = o[a].fontfamily;
                                                  null != o[a].fontStyle && null != o[a].fontWeight ? ((r = o[a].fontStyle + o[a].fontWeight), s.push(new b(u, r))) : s.push(new b(u));
                                              }
                                          e(s);
                                      } else
                                          setTimeout(function () {
                                              t();
                                          }, 50);
                                  })());
                        }
                    ).id = "__MonotypeAPIScript__" + n;
                } else e([]);
            }),
            (U.prototype.load = function (e) {
                var t,
                    n,
                    r = this.a.urls || [],
                    i = this.a.families || [],
                    o = this.a.testStrings || {},
                    s = new h();
                for (t = 0, n = r.length; t < n; t++) f(this.c, r[t], m(s));
                var a = [];
                for (t = 0, n = i.length; t < n; t++)
                    if ((r = i[t].split(":"))[1]) for (var u = r[1].split(","), c = 0; c < u.length; c += 1) a.push(new b(r[0], u[c]));
                    else a.push(new b(r[0]));
                g(s, function () {
                    e(a, o);
                });
            });
        var Q = "//fonts.googleapis.com/css";
        function X(e) {
            (this.f = e), (this.a = []), (this.c = {});
        }
        var G = { latin: "BESbswy", "latin-ext": "çöüğş", cyrillic: "йяЖ", greek: "αβΣ", khmer: "កខគ", Hanuman: "កខគ" },
            Y = {
                thin: "1",
                extralight: "2",
                "extra-light": "2",
                ultralight: "2",
                "ultra-light": "2",
                light: "3",
                regular: "4",
                book: "4",
                medium: "5",
                "semi-bold": "6",
                semibold: "6",
                "demi-bold": "6",
                demibold: "6",
                bold: "7",
                "extra-bold": "8",
                extrabold: "8",
                "ultra-bold": "8",
                ultrabold: "8",
                black: "9",
                heavy: "9",
                l: "3",
                r: "4",
                b: "7",
            },
            K = { i: "i", italic: "i", n: "n", normal: "n" },
            J = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
        function Z(e, t) {
            (this.c = e), (this.a = t);
        }
        var ee = { Arimo: !0, Cousine: !0, Tinos: !0 };
        function te(e, t) {
            (this.c = e), (this.a = t);
        }
        function ne(e, t) {
            (this.c = e), (this.f = t), (this.a = []);
        }
        (Z.prototype.load = function (e) {
            var t = new h(),
                n = this.c,
                r = new V(this.a.api, d(n), this.a.text),
                i = this.a.families;
            !(function (e, t) {
                for (var n = t.length, r = 0; r < n; r++) {
                    var i = t[r].split(":");
                    3 == i.length && e.f.push(i.pop());
                    var o = "";
                    2 == i.length && "" != i[1] && (o = ":"), e.a.push(i.join(o));
                }
            })(r, i);
            var o = new X(i);
            !(function (e) {
                for (var t = e.f.length, n = 0; n < t; n++) {
                    var r = e.f[n].split(":"),
                        i = r[0].replace(/\+/g, " "),
                        o = ["n4"];
                    if (2 <= r.length) {
                        var s;
                        if (((s = []), (a = r[1])))
                            for (var a, u = (a = a.split(",")).length, c = 0; c < u; c++) {
                                var l;
                                if ((l = a[c]).match(/^[\w-]+$/))
                                    if (null == (f = J.exec(l.toLowerCase()))) l = "";
                                    else {
                                        if (((l = null == (l = f[2]) || "" == l ? "n" : K[l]), null == (f = f[1]) || "" == f)) f = "4";
                                        else
                                            var d = Y[f],
                                                f = d || (isNaN(f) ? "4" : f.substr(0, 1));
                                        l = [l, f].join("");
                                    }
                                else l = "";
                                l && s.push(l);
                            }
                        0 < s.length && (o = s), 3 == r.length && ((s = []), 0 < (r = (r = r[2]) ? r.split(",") : s).length && (r = G[r[0]]) && (e.c[i] = r));
                    }
                    for (e.c[i] || ((r = G[i]) && (e.c[i] = r)), r = 0; r < o.length; r += 1) e.a.push(new b(i, o[r]));
                }
            })(o),
                f(
                    n,
                    (function (e) {
                        if (0 == e.a.length) throw Error("No fonts to load!");
                        if (-1 != e.c.indexOf("kit=")) return e.c;
                        for (var t = e.a.length, n = [], r = 0; r < t; r++) n.push(e.a[r].replace(/ /g, "+"));
                        return (t = e.c + "?family=" + n.join("%7C")), 0 < e.f.length && (t += "&subset=" + e.f.join(",")), 0 < e.g.length && (t += "&text=" + encodeURIComponent(e.g)), t;
                    })(r),
                    m(t)
                ),
                g(t, function () {
                    e(o.a, o.c, ee);
                });
        }),
            (te.prototype.load = function (e) {
                var t = this.a.id,
                    n = this.c.m;
                t
                    ? p(
                          this.c,
                          (this.a.api || "https://use.typekit.net") + "/" + t + ".js",
                          function (t) {
                              if (t) e([]);
                              else if (n.Typekit && n.Typekit.config && n.Typekit.config.fn) {
                                  t = n.Typekit.config.fn;
                                  for (var r = [], i = 0; i < t.length; i += 2) for (var o = t[i], s = t[i + 1], a = 0; a < s.length; a++) r.push(new b(o, s[a]));
                                  try {
                                      n.Typekit.load({ events: !1, classes: !1, async: !0 });
                                  } catch (e) {}
                                  e(r);
                              }
                          },
                          2e3
                      )
                    : e([]);
            }),
            (ne.prototype.load = function (e) {
                var t = this.f.id,
                    n = this.c.m,
                    r = this;
                t
                    ? (n.__webfontfontdeckmodule__ || (n.__webfontfontdeckmodule__ = {}),
                      (n.__webfontfontdeckmodule__[t] = function (t, n) {
                          for (var i = 0, o = n.fonts.length; i < o; ++i) {
                              var s = n.fonts[i];
                              r.a.push(new b(s.name, _("font-weight:" + s.weight + ";font-style:" + s.style)));
                          }
                          e(r.a);
                      }),
                      p(
                          this.c,
                          d(this.c) +
                              (this.f.api || "//f.fontdeck.com/s/css/js/") +
                              (function (e) {
                                  return e.m.location.hostname || e.a.location.hostname;
                              })(this.c) +
                              "/" +
                              t +
                              ".js",
                          function (t) {
                              t && e([]);
                          }
                      ))
                    : e([]);
            });
        var re = new $(window);
        (re.a.c.custom = function (e, t) {
            return new U(t, e);
        }),
            (re.a.c.fontdeck = function (e, t) {
                return new ne(t, e);
            }),
            (re.a.c.monotype = function (e, t) {
                return new W(t, e);
            }),
            (re.a.c.typekit = function (e, t) {
                return new te(t, e);
            }),
            (re.a.c.google = function (e, t) {
                return new Z(t, e);
            });
        var ie = { load: n(re.load, re) };
        "function" == typeof define && define.amd
            ? define(function () {
                  return ie;
              })
            : "undefined" != typeof module && module.exports
            ? (module.exports = ie)
            : ((window.WebFont = ie), window.WebFontConfig && re.load(window.WebFontConfig));
    })();
