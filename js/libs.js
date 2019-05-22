!function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    "use strict";
    var i = [], n = t.document, s = Object.getPrototypeOf, o = i.slice, r = i.concat, a = i.push, l = i.indexOf, h = {},
        c = h.toString, u = h.hasOwnProperty, d = u.toString, p = d.call(Object), f = {};

    function m(t, e) {
        var i = (e = e || n).createElement("script");
        i.text = t, e.head.appendChild(i).parentNode.removeChild(i)
    }

    var g = "3.1.1", v = function (t, e) {
        return new v.fn.init(t, e)
    }, y = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, _ = /^-ms-/, b = /-([a-z])/g, x = function (t, e) {
        return e.toUpperCase()
    };

    function w(t) {
        var e = !!t && "length" in t && t.length, i = v.type(t);
        return "function" !== i && !v.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    v.fn = v.prototype = {
        jquery: g, constructor: v, length: 0, toArray: function () {
            return o.call(this)
        }, get: function (t) {
            return null == t ? o.call(this) : t < 0 ? this[t + this.length] : this[t]
        }, pushStack: function (t) {
            var e = v.merge(this.constructor(), t);
            return e.prevObject = this, e
        }, each: function (t) {
            return v.each(this, t)
        }, map: function (t) {
            return this.pushStack(v.map(this, function (e, i) {
                return t.call(e, i, e)
            }))
        }, slice: function () {
            return this.pushStack(o.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (t) {
            var e = this.length, i = +t + (t < 0 ? e : 0);
            return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: a, sort: i.sort, splice: i.splice
    }, v.extend = v.fn.extend = function () {
        var t, e, i, n, s, o, r = arguments[0] || {}, a = 1, l = arguments.length, h = !1;
        for ("boolean" == typeof r && (h = r, r = arguments[a] || {}, a++), "object" == typeof r || v.isFunction(r) || (r = {}), a === l && (r = this, a--); a < l; a++) if (null != (t = arguments[a])) for (e in t) i = r[e], n = t[e], r !== n && (h && n && (v.isPlainObject(n) || (s = v.isArray(n))) ? (s ? (s = !1, o = i && v.isArray(i) ? i : []) : o = i && v.isPlainObject(i) ? i : {}, r[e] = v.extend(h, o, n)) : void 0 !== n && (r[e] = n));
        return r
    }, v.extend({
        expando: "jQuery" + (g + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
            throw new Error(t)
        }, noop: function () {
        }, isFunction: function (t) {
            return "function" === v.type(t)
        }, isArray: Array.isArray, isWindow: function (t) {
            return null != t && t === t.window
        }, isNumeric: function (t) {
            var e = v.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        }, isPlainObject: function (t) {
            var e, i;
            return !(!t || "[object Object]" !== c.call(t) || (e = s(t)) && (i = u.call(e, "constructor") && e.constructor, "function" != typeof i || d.call(i) !== p))
        }, isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        }, type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? h[c.call(t)] || "object" : typeof t
        }, globalEval: function (t) {
            m(t)
        }, camelCase: function (t) {
            return t.replace(_, "ms-").replace(b, x)
        }, nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }, each: function (t, e) {
            var i, n = 0;
            if (w(t)) for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++) ; else for (n in t) if (!1 === e.call(t[n], n, t[n])) break;
            return t
        }, trim: function (t) {
            return null == t ? "" : (t + "").replace(y, "")
        }, makeArray: function (t, e) {
            var i = e || [];
            return null != t && (w(Object(t)) ? v.merge(i, "string" == typeof t ? [t] : t) : a.call(i, t)), i
        }, inArray: function (t, e, i) {
            return null == e ? -1 : l.call(e, t, i)
        }, merge: function (t, e) {
            for (var i = +e.length, n = 0, s = t.length; n < i; n++) t[s++] = e[n];
            return t.length = s, t
        }, grep: function (t, e, i) {
            for (var n, s = [], o = 0, r = t.length, a = !i; o < r; o++) n = !e(t[o], o), n !== a && s.push(t[o]);
            return s
        }, map: function (t, e, i) {
            var n, s, o = 0, a = [];
            if (w(t)) for (n = t.length; o < n; o++) s = e(t[o], o, i), null != s && a.push(s); else for (o in t) s = e(t[o], o, i), null != s && a.push(s);
            return r.apply([], a)
        }, guid: 1, proxy: function (t, e) {
            var i, n, s;
            if ("string" == typeof e && (i = t[e], e = t, t = i), v.isFunction(t)) return n = o.call(arguments, 2), s = function () {
                return t.apply(e || this, n.concat(o.call(arguments)))
            }, s.guid = t.guid = t.guid || v.guid++, s
        }, now: Date.now, support: f
    }), "function" == typeof Symbol && (v.fn[Symbol.iterator] = i[Symbol.iterator]), v.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        h["[object " + e + "]"] = e.toLowerCase()
    });
    var $ = function (t) {
        var e, i, n, s, o, r, a, l, h, c, u, d, p, f, m, g, v, y, _, b = "sizzle" + 1 * new Date, x = t.document, w = 0,
            $ = 0, C = rt(), k = rt(), T = rt(), E = function (t, e) {
                return t === e && (u = !0), 0
            }, S = {}.hasOwnProperty, O = [], D = O.pop, M = O.push, z = O.push, N = O.slice, A = function (t, e) {
                for (var i = 0, n = t.length; i < n; i++) if (t[i] === e) return i;
                return -1
            },
            j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]", F = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            P = "\\[" + L + "*(" + F + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + L + "*\\]",
            H = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
            W = new RegExp(L + "+", "g"), I = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"), q = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            B = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), X = new RegExp(H),
            V = new RegExp("^" + F + "$"), Y = {
                ID: new RegExp("^#(" + F + ")"),
                CLASS: new RegExp("^\\.(" + F + ")"),
                TAG: new RegExp("^(" + F + "|[*])"),
                ATTR: new RegExp("^" + P),
                PSEUDO: new RegExp("^" + H),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + j + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            }, U = /^(?:input|select|textarea|button)$/i, G = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/,
            K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Z = /[+~]/,
            J = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), tt = function (t, e, i) {
                var n = "0x" + e - 65536;
                return n != n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            }, et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, it = function (t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            }, nt = function () {
                d()
            }, st = yt(function (t) {
                return !0 === t.disabled && ("form" in t || "label" in t)
            }, {dir: "parentNode", next: "legend"});
        try {
            z.apply(O = N.call(x.childNodes), x.childNodes), O[x.childNodes.length].nodeType
        } catch (t) {
            z = {
                apply: O.length ? function (t, e) {
                    M.apply(t, N.call(e))
                } : function (t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];) ;
                    t.length = i - 1
                }
            }
        }

        function ot(t, e, n, s) {
            var o, a, h, c, u, f, v, y = e && e.ownerDocument, w = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== w && 9 !== w && 11 !== w) return n;
            if (!s && ((e ? e.ownerDocument || e : x) !== p && d(e), e = e || p, m)) {
                if (11 !== w && (u = K.exec(t))) if (o = u[1]) {
                    if (9 === w) {
                        if (!(h = e.getElementById(o))) return n;
                        if (h.id === o) return n.push(h), n
                    } else if (y && (h = y.getElementById(o)) && _(e, h) && h.id === o) return n.push(h), n
                } else {
                    if (u[2]) return z.apply(n, e.getElementsByTagName(t)), n;
                    if ((o = u[3]) && i.getElementsByClassName && e.getElementsByClassName) return z.apply(n, e.getElementsByClassName(o)), n
                }
                if (i.qsa && !T[t + " "] && (!g || !g.test(t))) {
                    if (1 !== w) y = e, v = t; else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((c = e.getAttribute("id")) ? c = c.replace(et, it) : e.setAttribute("id", c = b), a = (f = r(t)).length; a--;) f[a] = "#" + c + " " + vt(f[a]);
                        v = f.join(","), y = Z.test(t) && mt(e.parentNode) || e
                    }
                    if (v) try {
                        return z.apply(n, y.querySelectorAll(v)), n
                    } catch (t) {
                    } finally {
                        c === b && e.removeAttribute("id")
                    }
                }
            }
            return l(t.replace(I, "$1"), e, n, s)
        }

        function rt() {
            var t = [];
            return function e(i, s) {
                return t.push(i + " ") > n.cacheLength && delete e[t.shift()], e[i + " "] = s
            }
        }

        function at(t) {
            return t[b] = !0, t
        }

        function lt(t) {
            var e = p.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function ht(t, e) {
            for (var i = t.split("|"), s = i.length; s--;) n.attrHandle[i[s]] = e
        }

        function ct(t, e) {
            var i = e && t, n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (n) return n;
            if (i) for (; i = i.nextSibling;) if (i === e) return -1;
            return t ? 1 : -1
        }

        function ut(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function dt(t) {
            return function (e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }

        function pt(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && st(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ft(t) {
            return at(function (e) {
                return e = +e, at(function (i, n) {
                    for (var s, o = t([], i.length, e), r = o.length; r--;) i[s = o[r]] && (i[s] = !(n[s] = i[s]))
                })
            })
        }

        function mt(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }

        i = ot.support = {}, o = ot.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, d = ot.setDocument = function (t) {
            var e, s, r = t ? t.ownerDocument || t : x;
            return r !== p && 9 === r.nodeType && r.documentElement ? (f = (p = r).documentElement, m = !o(p), x !== p && (s = p.defaultView) && s.top !== s && (s.addEventListener ? s.addEventListener("unload", nt, !1) : s.attachEvent && s.attachEvent("onunload", nt)), i.attributes = lt(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), i.getElementsByTagName = lt(function (t) {
                return t.appendChild(p.createComment("")), !t.getElementsByTagName("*").length
            }), i.getElementsByClassName = Q.test(p.getElementsByClassName), i.getById = lt(function (t) {
                return f.appendChild(t).id = b, !p.getElementsByName || !p.getElementsByName(b).length
            }), i.getById ? (n.filter.ID = function (t) {
                var e = t.replace(J, tt);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }, n.find.ID = function (t, e) {
                if (void 0 !== e.getElementById && m) {
                    var i = e.getElementById(t);
                    return i ? [i] : []
                }
            }) : (n.filter.ID = function (t) {
                var e = t.replace(J, tt);
                return function (t) {
                    var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }, n.find.ID = function (t, e) {
                if (void 0 !== e.getElementById && m) {
                    var i, n, s, o = e.getElementById(t);
                    if (o) {
                        if ((i = o.getAttributeNode("id")) && i.value === t) return [o];
                        for (s = e.getElementsByName(t), n = 0; o = s[n++];) if (i = o.getAttributeNode("id"), i && i.value === t) return [o]
                    }
                    return []
                }
            }), n.find.TAG = i.getElementsByTagName ? function (t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : i.qsa ? e.querySelectorAll(t) : void 0
            } : function (t, e) {
                var i, n = [], s = 0, o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = o[s++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return o
            }, n.find.CLASS = i.getElementsByClassName && function (t, e) {
                if (void 0 !== e.getElementsByClassName && m) return e.getElementsByClassName(t)
            }, v = [], g = [], (i.qsa = Q.test(p.querySelectorAll)) && (lt(function (t) {
                f.appendChild(t).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + L + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + L + "*(?:value|" + j + ")"), t.querySelectorAll("[id~=" + b + "-]").length || g.push("~="), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + b + "+*").length || g.push(".#.+[+~]")
            }), lt(function (t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = p.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + L + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), f.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:")
            })), (i.matchesSelector = Q.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && lt(function (t) {
                i.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), v.push("!=", H)
            }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), e = Q.test(f.compareDocumentPosition), _ = e || Q.test(f.contains) ? function (t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t, n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            } : function (t, e) {
                if (e) for (; e = e.parentNode;) if (e === t) return !0;
                return !1
            }, E = e ? function (t, e) {
                if (t === e) return u = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !i.sortDetached && e.compareDocumentPosition(t) === n ? t === p || t.ownerDocument === x && _(x, t) ? -1 : e === p || e.ownerDocument === x && _(x, e) ? 1 : c ? A(c, t) - A(c, e) : 0 : 4 & n ? -1 : 1)
            } : function (t, e) {
                if (t === e) return u = !0, 0;
                var i, n = 0, s = t.parentNode, o = e.parentNode, r = [t], a = [e];
                if (!s || !o) return t === p ? -1 : e === p ? 1 : s ? -1 : o ? 1 : c ? A(c, t) - A(c, e) : 0;
                if (s === o) return ct(t, e);
                for (i = t; i = i.parentNode;) r.unshift(i);
                for (i = e; i = i.parentNode;) a.unshift(i);
                for (; r[n] === a[n];) n++;
                return n ? ct(r[n], a[n]) : r[n] === x ? -1 : a[n] === x ? 1 : 0
            }, p) : p
        }, ot.matches = function (t, e) {
            return ot(t, null, null, e)
        }, ot.matchesSelector = function (t, e) {
            if ((t.ownerDocument || t) !== p && d(t), e = e.replace(B, "='$1']"), i.matchesSelector && m && !T[e + " "] && (!v || !v.test(e)) && (!g || !g.test(e))) try {
                var n = y.call(t, e);
                if (n || i.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
            } catch (t) {
            }
            return ot(e, p, null, [t]).length > 0
        }, ot.contains = function (t, e) {
            return (t.ownerDocument || t) !== p && d(t), _(t, e)
        }, ot.attr = function (t, e) {
            (t.ownerDocument || t) !== p && d(t);
            var s = n.attrHandle[e.toLowerCase()],
                o = s && S.call(n.attrHandle, e.toLowerCase()) ? s(t, e, !m) : void 0;
            return void 0 !== o ? o : i.attributes || !m ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
        }, ot.escape = function (t) {
            return (t + "").replace(et, it)
        }, ot.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, ot.uniqueSort = function (t) {
            var e, n = [], s = 0, o = 0;
            if (u = !i.detectDuplicates, c = !i.sortStable && t.slice(0), t.sort(E), u) {
                for (; e = t[o++];) e === t[o] && (s = n.push(o));
                for (; s--;) t.splice(n[s], 1)
            }
            return c = null, t
        }, s = ot.getText = function (t) {
            var e, i = "", n = 0, o = t.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += s(t)
                } else if (3 === o || 4 === o) return t.nodeValue
            } else for (; e = t[n++];) i += s(e);
            return i
        }, (n = ot.selectors = {
            cacheLength: 50,
            createPseudo: at,
            match: Y,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(J, tt), t[3] = (t[3] || t[4] || t[5] || "").replace(J, tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                }, CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]), t
                }, PSEUDO: function (t) {
                    var e, i = !t[6] && t[2];
                    return Y.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && X.test(i) && (e = r(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace(J, tt).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                }, CLASS: function (t) {
                    var e = C[t + " "];
                    return e || (e = new RegExp("(^|" + L + ")" + t + "(" + L + "|$)")) && C(t, function (t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                    })
                }, ATTR: function (t, e, i) {
                    return function (n) {
                        var s = ot.attr(n, t);
                        return null == s ? "!=" === e : !e || (s += "", "=" === e ? s === i : "!=" === e ? s !== i : "^=" === e ? i && 0 === s.indexOf(i) : "*=" === e ? i && s.indexOf(i) > -1 : "$=" === e ? i && s.slice(-i.length) === i : "~=" === e ? (" " + s.replace(W, " ") + " ").indexOf(i) > -1 : "|=" === e && (s === i || s.slice(0, i.length + 1) === i + "-"))
                    }
                }, CHILD: function (t, e, i, n, s) {
                    var o = "nth" !== t.slice(0, 3), r = "last" !== t.slice(-4), a = "of-type" === e;
                    return 1 === n && 0 === s ? function (t) {
                        return !!t.parentNode
                    } : function (e, i, l) {
                        var h, c, u, d, p, f, m = o !== r ? "nextSibling" : "previousSibling", g = e.parentNode,
                            v = a && e.nodeName.toLowerCase(), y = !l && !a, _ = !1;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (d = e; d = d[m];) if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    f = m = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [r ? g.firstChild : g.lastChild], r && y) {
                                for (_ = (p = (h = (c = (u = (d = g)[b] || (d[b] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] || [])[0] === w && h[1]) && h[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (_ = p = 0) || f.pop();) if (1 === d.nodeType && ++_ && d === e) {
                                    c[t] = [w, p, _];
                                    break
                                }
                            } else if (y && (d = e, u = d[b] || (d[b] = {}), c = u[d.uniqueID] || (u[d.uniqueID] = {}), h = c[t] || [], p = h[0] === w && h[1], _ = p), !1 === _) for (; (d = ++p && d && d[m] || (_ = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++_ || (y && (u = d[b] || (d[b] = {}), c = u[d.uniqueID] || (u[d.uniqueID] = {}), c[t] = [w, _]), d !== e));) ;
                            return (_ -= s) === n || _ % n == 0 && _ / n >= 0
                        }
                    }
                }, PSEUDO: function (t, e) {
                    var i, s = n.pseudos[t] || n.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t);
                    return s[b] ? s(e) : s.length > 1 ? (i = [t, t, "", e], n.setFilters.hasOwnProperty(t.toLowerCase()) ? at(function (t, i) {
                        for (var n, o = s(t, e), r = o.length; r--;) n = A(t, o[r]), t[n] = !(i[n] = o[r])
                    }) : function (t) {
                        return s(t, 0, i)
                    }) : s
                }
            },
            pseudos: {
                not: at(function (t) {
                    var e = [], i = [], n = a(t.replace(I, "$1"));
                    return n[b] ? at(function (t, e, i, s) {
                        for (var o, r = n(t, null, s, []), a = t.length; a--;) (o = r[a]) && (t[a] = !(e[a] = o))
                    }) : function (t, s, o) {
                        return e[0] = t, n(e, null, o, i), e[0] = null, !i.pop()
                    }
                }), has: at(function (t) {
                    return function (e) {
                        return ot(t, e).length > 0
                    }
                }), contains: at(function (t) {
                    return t = t.replace(J, tt), function (e) {
                        return (e.textContent || e.innerText || s(e)).indexOf(t) > -1
                    }
                }), lang: at(function (t) {
                    return V.test(t || "") || ot.error("unsupported lang: " + t), t = t.replace(J, tt).toLowerCase(), function (e) {
                        var i;
                        do {
                            if (i = m ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }), target: function (e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                }, root: function (t) {
                    return t === f
                }, focus: function (t) {
                    return t === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                }, enabled: pt(!1), disabled: pt(!0), checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                }, selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                }, empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                    return !0
                }, parent: function (t) {
                    return !n.pseudos.empty(t)
                }, header: function (t) {
                    return G.test(t.nodeName)
                }, input: function (t) {
                    return U.test(t.nodeName)
                }, button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                }, text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                }, first: ft(function () {
                    return [0]
                }), last: ft(function (t, e) {
                    return [e - 1]
                }), eq: ft(function (t, e, i) {
                    return [i < 0 ? i + e : i]
                }), even: ft(function (t, e) {
                    for (var i = 0; i < e; i += 2) t.push(i);
                    return t
                }), odd: ft(function (t, e) {
                    for (var i = 1; i < e; i += 2) t.push(i);
                    return t
                }), lt: ft(function (t, e, i) {
                    for (var n = i < 0 ? i + e : i; --n >= 0;) t.push(n);
                    return t
                }), gt: ft(function (t, e, i) {
                    for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                    return t
                })
            }
        }).pseudos.nth = n.pseudos.eq;
        for (e in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) n.pseudos[e] = ut(e);
        for (e in{submit: !0, reset: !0}) n.pseudos[e] = dt(e);

        function gt() {
        }

        function vt(t) {
            for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
            return n
        }

        function yt(t, e, i) {
            var n = e.dir, s = e.next, o = s || n, r = i && "parentNode" === o, a = $++;
            return e.first ? function (e, i, s) {
                for (; e = e[n];) if (1 === e.nodeType || r) return t(e, i, s);
                return !1
            } : function (e, i, l) {
                var h, c, u, d = [w, a];
                if (l) {
                    for (; e = e[n];) if ((1 === e.nodeType || r) && t(e, i, l)) return !0
                } else for (; e = e[n];) if (1 === e.nodeType || r) if (u = e[b] || (e[b] = {}), c = u[e.uniqueID] || (u[e.uniqueID] = {}), s && s === e.nodeName.toLowerCase()) e = e[n] || e; else {
                    if ((h = c[o]) && h[0] === w && h[1] === a) return d[2] = h[2];
                    if (c[o] = d, d[2] = t(e, i, l)) return !0
                }
                return !1
            }
        }

        function _t(t) {
            return t.length > 1 ? function (e, i, n) {
                for (var s = t.length; s--;) if (!t[s](e, i, n)) return !1;
                return !0
            } : t[0]
        }

        function bt(t, e, i, n, s) {
            for (var o, r = [], a = 0, l = t.length, h = null != e; a < l; a++) (o = t[a]) && (i && !i(o, n, s) || (r.push(o), h && e.push(a)));
            return r
        }

        function xt(t, e, i, n, s, o) {
            return n && !n[b] && (n = xt(n)), s && !s[b] && (s = xt(s, o)), at(function (o, r, a, l) {
                var h, c, u, d = [], p = [], f = r.length, m = o || function (t, e, i) {
                        for (var n = 0, s = e.length; n < s; n++) ot(t, e[n], i);
                        return i
                    }(e || "*", a.nodeType ? [a] : a, []), g = !t || !o && e ? m : bt(m, d, t, a, l),
                    v = i ? s || (o ? t : f || n) ? [] : r : g;
                if (i && i(g, v, a, l), n) for (h = bt(v, p), n(h, [], a, l), c = h.length; c--;) (u = h[c]) && (v[p[c]] = !(g[p[c]] = u));
                if (o) {
                    if (s || t) {
                        if (s) {
                            for (h = [], c = v.length; c--;) (u = v[c]) && h.push(g[c] = u);
                            s(null, v = [], h, l)
                        }
                        for (c = v.length; c--;) (u = v[c]) && (h = s ? A(o, u) : d[c]) > -1 && (o[h] = !(r[h] = u))
                    }
                } else v = bt(v === r ? v.splice(f, v.length) : v), s ? s(null, r, v, l) : z.apply(r, v)
            })
        }

        function wt(t) {
            for (var e, i, s, o = t.length, r = n.relative[t[0].type], a = r || n.relative[" "], l = r ? 1 : 0, c = yt(function (t) {
                return t === e
            }, a, !0), u = yt(function (t) {
                return A(e, t) > -1
            }, a, !0), d = [function (t, i, n) {
                var s = !r && (n || i !== h) || ((e = i).nodeType ? c(t, i, n) : u(t, i, n));
                return e = null, s
            }]; l < o; l++) if (i = n.relative[t[l].type]) d = [yt(_t(d), i)]; else {
                if ((i = n.filter[t[l].type].apply(null, t[l].matches))[b]) {
                    for (s = ++l; s < o && !n.relative[t[s].type]; s++) ;
                    return xt(l > 1 && _t(d), l > 1 && vt(t.slice(0, l - 1).concat({value: " " === t[l - 2].type ? "*" : ""})).replace(I, "$1"), i, l < s && wt(t.slice(l, s)), s < o && wt(t = t.slice(s)), s < o && vt(t))
                }
                d.push(i)
            }
            return _t(d)
        }

        return gt.prototype = n.filters = n.pseudos, n.setFilters = new gt, r = ot.tokenize = function (t, e) {
            var i, s, o, r, a, l, h, c = k[t + " "];
            if (c) return e ? 0 : c.slice(0);
            for (a = t, l = [], h = n.preFilter; a;) {
                i && !(s = R.exec(a)) || (s && (a = a.slice(s[0].length) || a), l.push(o = [])), i = !1, (s = q.exec(a)) && (i = s.shift(), o.push({
                    value: i,
                    type: s[0].replace(I, " ")
                }), a = a.slice(i.length));
                for (r in n.filter) !(s = Y[r].exec(a)) || h[r] && !(s = h[r](s)) || (i = s.shift(), o.push({
                    value: i,
                    type: r,
                    matches: s
                }), a = a.slice(i.length));
                if (!i) break
            }
            return e ? a.length : a ? ot.error(t) : k(t, l).slice(0)
        }, a = ot.compile = function (t, e) {
            var i, s, o, a, l, c, u = [], f = [], g = T[t + " "];
            if (!g) {
                for (e || (e = r(t)), i = e.length; i--;) g = wt(e[i]), g[b] ? u.push(g) : f.push(g);
                (g = T(t, (s = f, a = (o = u).length > 0, l = s.length > 0, c = function (t, e, i, r, c) {
                    var u, f, g, v = 0, y = "0", _ = t && [], b = [], x = h, $ = t || l && n.find.TAG("*", c),
                        C = w += null == x ? 1 : Math.random() || .1, k = $.length;
                    for (c && (h = e === p || e || c); y !== k && null != (u = $[y]); y++) {
                        if (l && u) {
                            for (f = 0, e || u.ownerDocument === p || (d(u), i = !m); g = s[f++];) if (g(u, e || p, i)) {
                                r.push(u);
                                break
                            }
                            c && (w = C)
                        }
                        a && ((u = !g && u) && v--, t && _.push(u))
                    }
                    if (v += y, a && y !== v) {
                        for (f = 0; g = o[f++];) g(_, b, e, i);
                        if (t) {
                            if (v > 0) for (; y--;) _[y] || b[y] || (b[y] = D.call(r));
                            b = bt(b)
                        }
                        z.apply(r, b), c && !t && b.length > 0 && v + o.length > 1 && ot.uniqueSort(r)
                    }
                    return c && (w = C, h = x), _
                }, a ? at(c) : c))).selector = t
            }
            return g
        }, l = ot.select = function (t, e, i, s) {
            var o, l, h, c, u, d = "function" == typeof t && t, p = !s && r(t = d.selector || t);
            if (i = i || [], 1 === p.length) {
                if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (h = l[0]).type && 9 === e.nodeType && m && n.relative[l[1].type]) {
                    if (!(e = (n.find.ID(h.matches[0].replace(J, tt), e) || [])[0])) return i;
                    d && (e = e.parentNode), t = t.slice(l.shift().value.length)
                }
                for (o = Y.needsContext.test(t) ? 0 : l.length; o-- && (h = l[o], !n.relative[c = h.type]);) if ((u = n.find[c]) && (s = u(h.matches[0].replace(J, tt), Z.test(l[0].type) && mt(e.parentNode) || e))) {
                    if (l.splice(o, 1), !(t = s.length && vt(l))) return z.apply(i, s), i;
                    break
                }
            }
            return (d || a(t, p))(s, e, !m, i, !e || Z.test(t) && mt(e.parentNode) || e), i
        }, i.sortStable = b.split("").sort(E).join("") === b, i.detectDuplicates = !!u, d(), i.sortDetached = lt(function (t) {
            return 1 & t.compareDocumentPosition(p.createElement("fieldset"))
        }), lt(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || ht("type|href|height|width", function (t, e, i) {
            if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), i.attributes && lt(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || ht("value", function (t, e, i) {
            if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), lt(function (t) {
            return null == t.getAttribute("disabled")
        }) || ht(j, function (t, e, i) {
            var n;
            if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), ot
    }(t);
    v.find = $, v.expr = $.selectors, v.expr[":"] = v.expr.pseudos, v.uniqueSort = v.unique = $.uniqueSort, v.text = $.getText, v.isXMLDoc = $.isXML, v.contains = $.contains, v.escapeSelector = $.escape;
    var C = function (t, e, i) {
            for (var n = [], s = void 0 !== i; (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
                if (s && v(t).is(i)) break;
                n.push(t)
            }
            return n
        }, k = function (t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        }, T = v.expr.match.needsContext, E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        S = /^.[^:#\[\.,]*$/;

    function O(t, e, i) {
        return v.isFunction(e) ? v.grep(t, function (t, n) {
            return !!e.call(t, n, t) !== i
        }) : e.nodeType ? v.grep(t, function (t) {
            return t === e !== i
        }) : "string" != typeof e ? v.grep(t, function (t) {
            return l.call(e, t) > -1 !== i
        }) : S.test(e) ? v.filter(e, t, i) : (e = v.filter(e, t), v.grep(t, function (t) {
            return l.call(e, t) > -1 !== i && 1 === t.nodeType
        }))
    }

    v.filter = function (t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? v.find.matchesSelector(n, t) ? [n] : [] : v.find.matches(t, v.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, v.fn.extend({
        find: function (t) {
            var e, i, n = this.length, s = this;
            if ("string" != typeof t) return this.pushStack(v(t).filter(function () {
                for (e = 0; e < n; e++) if (v.contains(s[e], this)) return !0
            }));
            for (i = this.pushStack([]), e = 0; e < n; e++) v.find(t, s[e], i);
            return n > 1 ? v.uniqueSort(i) : i
        }, filter: function (t) {
            return this.pushStack(O(this, t || [], !1))
        }, not: function (t) {
            return this.pushStack(O(this, t || [], !0))
        }, is: function (t) {
            return !!O(this, "string" == typeof t && T.test(t) ? v(t) : t || [], !1).length
        }
    });
    var D, M = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (v.fn.init = function (t, e, i) {
        var s, o;
        if (!t) return this;
        if (i = i || D, "string" == typeof t) {
            if (!(s = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : M.exec(t)) || !s[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            if (s[1]) {
                if (e = e instanceof v ? e[0] : e, v.merge(this, v.parseHTML(s[1], e && e.nodeType ? e.ownerDocument || e : n, !0)), E.test(s[1]) && v.isPlainObject(e)) for (s in e) v.isFunction(this[s]) ? this[s](e[s]) : this.attr(s, e[s]);
                return this
            }
            return (o = n.getElementById(s[2])) && (this[0] = o, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : v.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(v) : v.makeArray(t, this)
    }).prototype = v.fn, D = v(n);
    var z = /^(?:parents|prev(?:Until|All))/, N = {children: !0, contents: !0, next: !0, prev: !0};

    function A(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType;) ;
        return t
    }

    v.fn.extend({
        has: function (t) {
            var e = v(t, this), i = e.length;
            return this.filter(function () {
                for (var t = 0; t < i; t++) if (v.contains(this, e[t])) return !0
            })
        }, closest: function (t, e) {
            var i, n = 0, s = this.length, o = [], r = "string" != typeof t && v(t);
            if (!T.test(t)) for (; n < s; n++) for (i = this[n]; i && i !== e; i = i.parentNode) if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && v.find.matchesSelector(i, t))) {
                o.push(i);
                break
            }
            return this.pushStack(o.length > 1 ? v.uniqueSort(o) : o)
        }, index: function (t) {
            return t ? "string" == typeof t ? l.call(v(t), this[0]) : l.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (t, e) {
            return this.pushStack(v.uniqueSort(v.merge(this.get(), v(t, e))))
        }, addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), v.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        }, parents: function (t) {
            return C(t, "parentNode")
        }, parentsUntil: function (t, e, i) {
            return C(t, "parentNode", i)
        }, next: function (t) {
            return A(t, "nextSibling")
        }, prev: function (t) {
            return A(t, "previousSibling")
        }, nextAll: function (t) {
            return C(t, "nextSibling")
        }, prevAll: function (t) {
            return C(t, "previousSibling")
        }, nextUntil: function (t, e, i) {
            return C(t, "nextSibling", i)
        }, prevUntil: function (t, e, i) {
            return C(t, "previousSibling", i)
        }, siblings: function (t) {
            return k((t.parentNode || {}).firstChild, t)
        }, children: function (t) {
            return k(t.firstChild)
        }, contents: function (t) {
            return t.contentDocument || v.merge([], t.childNodes)
        }
    }, function (t, e) {
        v.fn[t] = function (i, n) {
            var s = v.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = v.filter(n, s)), this.length > 1 && (N[t] || v.uniqueSort(s), z.test(t) && s.reverse()), this.pushStack(s)
        }
    });
    var j = /[^\x20\t\r\n\f]+/g;

    function L(t) {
        return t
    }

    function F(t) {
        throw t
    }

    function P(t, e, i) {
        var n;
        try {
            t && v.isFunction(n = t.promise) ? n.call(t).done(e).fail(i) : t && v.isFunction(n = t.then) ? n.call(t, e, i) : e.call(void 0, t)
        } catch (t) {
            i.call(void 0, t)
        }
    }

    v.Callbacks = function (t) {
        var e, i;
        t = "string" == typeof t ? (e = t, i = {}, v.each(e.match(j) || [], function (t, e) {
            i[e] = !0
        }), i) : v.extend({}, t);
        var n, s, o, r, a = [], l = [], h = -1, c = function () {
            for (r = t.once, o = n = !0; l.length; h = -1) for (s = l.shift(); ++h < a.length;) !1 === a[h].apply(s[0], s[1]) && t.stopOnFalse && (h = a.length, s = !1);
            t.memory || (s = !1), n = !1, r && (a = s ? [] : "")
        }, u = {
            add: function () {
                return a && (s && !n && (h = a.length - 1, l.push(s)), function e(i) {
                    v.each(i, function (i, n) {
                        v.isFunction(n) ? t.unique && u.has(n) || a.push(n) : n && n.length && "string" !== v.type(n) && e(n)
                    })
                }(arguments), s && !n && c()), this
            }, remove: function () {
                return v.each(arguments, function (t, e) {
                    for (var i; (i = v.inArray(e, a, i)) > -1;) a.splice(i, 1), i <= h && h--
                }), this
            }, has: function (t) {
                return t ? v.inArray(t, a) > -1 : a.length > 0
            }, empty: function () {
                return a && (a = []), this
            }, disable: function () {
                return r = l = [], a = s = "", this
            }, disabled: function () {
                return !a
            }, lock: function () {
                return r = l = [], s || n || (a = s = ""), this
            }, locked: function () {
                return !!r
            }, fireWith: function (t, e) {
                return r || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), n || c()), this
            }, fire: function () {
                return u.fireWith(this, arguments), this
            }, fired: function () {
                return !!o
            }
        };
        return u
    }, v.extend({
        Deferred: function (e) {
            var i = [["notify", "progress", v.Callbacks("memory"), v.Callbacks("memory"), 2], ["resolve", "done", v.Callbacks("once memory"), v.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", v.Callbacks("once memory"), v.Callbacks("once memory"), 1, "rejected"]],
                n = "pending", s = {
                    state: function () {
                        return n
                    }, always: function () {
                        return o.done(arguments).fail(arguments), this
                    }, catch: function (t) {
                        return s.then(null, t)
                    }, pipe: function () {
                        var t = arguments;
                        return v.Deferred(function (e) {
                            v.each(i, function (i, n) {
                                var s = v.isFunction(t[n[4]]) && t[n[4]];
                                o[n[1]](function () {
                                    var t = s && s.apply(this, arguments);
                                    t && v.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[n[0] + "With"](this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    }, then: function (e, n, s) {
                        var o = 0;

                        function r(e, i, n, s) {
                            return function () {
                                var a = this, l = arguments, h = function () {
                                    var t, h;
                                    if (!(e < o)) {
                                        if ((t = n.apply(a, l)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                        h = t && ("object" == typeof t || "function" == typeof t) && t.then, v.isFunction(h) ? s ? h.call(t, r(o, i, L, s), r(o, i, F, s)) : (o++, h.call(t, r(o, i, L, s), r(o, i, F, s), r(o, i, L, i.notifyWith))) : (n !== L && (a = void 0, l = [t]), (s || i.resolveWith)(a, l))
                                    }
                                }, c = s ? h : function () {
                                    try {
                                        h()
                                    } catch (t) {
                                        v.Deferred.exceptionHook && v.Deferred.exceptionHook(t, c.stackTrace), e + 1 >= o && (n !== F && (a = void 0, l = [t]), i.rejectWith(a, l))
                                    }
                                };
                                e ? c() : (v.Deferred.getStackHook && (c.stackTrace = v.Deferred.getStackHook()), t.setTimeout(c))
                            }
                        }

                        return v.Deferred(function (t) {
                            i[0][3].add(r(0, t, v.isFunction(s) ? s : L, t.notifyWith)), i[1][3].add(r(0, t, v.isFunction(e) ? e : L)), i[2][3].add(r(0, t, v.isFunction(n) ? n : F))
                        }).promise()
                    }, promise: function (t) {
                        return null != t ? v.extend(t, s) : s
                    }
                }, o = {};
            return v.each(i, function (t, e) {
                var r = e[2], a = e[5];
                s[e[1]] = r.add, a && r.add(function () {
                    n = a
                }, i[3 - t][2].disable, i[0][2].lock), r.add(e[3].fire), o[e[0]] = function () {
                    return o[e[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[e[0] + "With"] = r.fireWith
            }), s.promise(o), e && e.call(o, o), o
        }, when: function (t) {
            var e = arguments.length, i = e, n = Array(i), s = o.call(arguments), r = v.Deferred(), a = function (t) {
                return function (i) {
                    n[t] = this, s[t] = arguments.length > 1 ? o.call(arguments) : i, --e || r.resolveWith(n, s)
                }
            };
            if (e <= 1 && (P(t, r.done(a(i)).resolve, r.reject), "pending" === r.state() || v.isFunction(s[i] && s[i].then))) return r.then();
            for (; i--;) P(s[i], a(i), r.reject);
            return r.promise()
        }
    });
    var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    v.Deferred.exceptionHook = function (e, i) {
        t.console && t.console.warn && e && H.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i)
    }, v.readyException = function (e) {
        t.setTimeout(function () {
            throw e
        })
    };
    var W = v.Deferred();

    function I() {
        n.removeEventListener("DOMContentLoaded", I), t.removeEventListener("load", I), v.ready()
    }

    v.fn.ready = function (t) {
        return W.then(t).catch(function (t) {
            v.readyException(t)
        }), this
    }, v.extend({
        isReady: !1, readyWait: 1, holdReady: function (t) {
            t ? v.readyWait++ : v.ready(!0)
        }, ready: function (t) {
            (!0 === t ? --v.readyWait : v.isReady) || (v.isReady = !0, !0 !== t && --v.readyWait > 0 || W.resolveWith(n, [v]))
        }
    }), v.ready.then = W.then, "complete" === n.readyState || "loading" !== n.readyState && !n.documentElement.doScroll ? t.setTimeout(v.ready) : (n.addEventListener("DOMContentLoaded", I), t.addEventListener("load", I));
    var R = function (t, e, i, n, s, o, r) {
        var a = 0, l = t.length, h = null == i;
        if ("object" === v.type(i)) {
            s = !0;
            for (a in i) R(t, e, a, i[a], !0, o, r)
        } else if (void 0 !== n && (s = !0, v.isFunction(n) || (r = !0), h && (r ? (e.call(t, n), e = null) : (h = e, e = function (t, e, i) {
            return h.call(v(t), i)
        })), e)) for (; a < l; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
        return s ? t : h ? e.call(t) : l ? e(t[0], i) : o
    }, q = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };

    function B() {
        this.expando = v.expando + B.uid++
    }

    B.uid = 1, B.prototype = {
        cache: function (t) {
            var e = t[this.expando];
            return e || (e = {}, q(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        }, set: function (t, e, i) {
            var n, s = this.cache(t);
            if ("string" == typeof e) s[v.camelCase(e)] = i; else for (n in e) s[v.camelCase(n)] = e[n];
            return s
        }, get: function (t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][v.camelCase(e)]
        }, access: function (t, e, i) {
            return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
        }, remove: function (t, e) {
            var i, n = t[this.expando];
            if (void 0 !== n) {
                if (void 0 !== e) {
                    v.isArray(e) ? e = e.map(v.camelCase) : e = (e = v.camelCase(e)) in n ? [e] : e.match(j) || [], i = e.length;
                    for (; i--;) delete n[e[i]]
                }
                (void 0 === e || v.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        }, hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !v.isEmptyObject(e)
        }
    };
    var X = new B, V = new B, Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, U = /[A-Z]/g;

    function G(t, e, i) {
        var n, s;
        if (void 0 === i && 1 === t.nodeType) if (n = "data-" + e.replace(U, "-$&").toLowerCase(), i = t.getAttribute(n), "string" == typeof i) {
            try {
                i = "true" === (s = i) || "false" !== s && ("null" === s ? null : s === +s + "" ? +s : Y.test(s) ? JSON.parse(s) : s)
            } catch (t) {
            }
            V.set(t, e, i)
        } else i = void 0;
        return i
    }

    v.extend({
        hasData: function (t) {
            return V.hasData(t) || X.hasData(t)
        }, data: function (t, e, i) {
            return V.access(t, e, i)
        }, removeData: function (t, e) {
            V.remove(t, e)
        }, _data: function (t, e, i) {
            return X.access(t, e, i)
        }, _removeData: function (t, e) {
            X.remove(t, e)
        }
    }), v.fn.extend({
        data: function (t, e) {
            var i, n, s, o = this[0], r = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (s = V.get(o), 1 === o.nodeType && !X.get(o, "hasDataAttrs"))) {
                    for (i = r.length; i--;) r[i] && (n = r[i].name, 0 === n.indexOf("data-") && (n = v.camelCase(n.slice(5)), G(o, n, s[n])));
                    X.set(o, "hasDataAttrs", !0)
                }
                return s
            }
            return "object" == typeof t ? this.each(function () {
                V.set(this, t)
            }) : R(this, function (e) {
                var i;
                if (o && void 0 === e) {
                    if (void 0 !== (i = V.get(o, t))) return i;
                    if (void 0 !== (i = G(o, t))) return i
                } else this.each(function () {
                    V.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        }, removeData: function (t) {
            return this.each(function () {
                V.remove(this, t)
            })
        }
    }), v.extend({
        queue: function (t, e, i) {
            var n;
            if (t) return e = (e || "fx") + "queue", n = X.get(t, e), i && (!n || v.isArray(i) ? n = X.access(t, e, v.makeArray(i)) : n.push(i)), n || []
        }, dequeue: function (t, e) {
            e = e || "fx";
            var i = v.queue(t, e), n = i.length, s = i.shift(), o = v._queueHooks(t, e);
            "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, function () {
                v.dequeue(t, e)
            }, o)), !n && o && o.empty.fire()
        }, _queueHooks: function (t, e) {
            var i = e + "queueHooks";
            return X.get(t, i) || X.access(t, i, {
                empty: v.Callbacks("once memory").add(function () {
                    X.remove(t, [e + "queue", i])
                })
            })
        }
    }), v.fn.extend({
        queue: function (t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? v.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var i = v.queue(this, t, e);
                v._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && v.dequeue(this, t)
            })
        }, dequeue: function (t) {
            return this.each(function () {
                v.dequeue(this, t)
            })
        }, clearQueue: function (t) {
            return this.queue(t || "fx", [])
        }, promise: function (t, e) {
            var i, n = 1, s = v.Deferred(), o = this, r = this.length, a = function () {
                --n || s.resolveWith(o, [o])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;) i = X.get(o[r], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
            return a(), s.promise(e)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, K = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
        Z = ["Top", "Right", "Bottom", "Left"], J = function (t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && v.contains(t.ownerDocument, t) && "none" === v.css(t, "display")
        }, tt = function (t, e, i, n) {
            var s, o, r = {};
            for (o in e) r[o] = t.style[o], t.style[o] = e[o];
            s = i.apply(t, n || []);
            for (o in e) t.style[o] = r[o];
            return s
        };

    function et(t, e, i, n) {
        var s, o = 1, r = 20, a = n ? function () {
                return n.cur()
            } : function () {
                return v.css(t, e, "")
            }, l = a(), h = i && i[3] || (v.cssNumber[e] ? "" : "px"),
            c = (v.cssNumber[e] || "px" !== h && +l) && K.exec(v.css(t, e));
        if (c && c[3] !== h) {
            h = h || c[3], i = i || [], c = +l || 1;
            do {
                o = o || ".5", c /= o, v.style(t, e, c + h)
            } while (o !== (o = a() / l) && 1 !== o && --r)
        }
        return i && (c = +c || +l || 0, s = i[1] ? c + (i[1] + 1) * i[2] : +i[2], n && (n.unit = h, n.start = c, n.end = s)), s
    }

    var it = {};

    function nt(t, e) {
        for (var i, n, s = [], o = 0, r = t.length; o < r; o++) n = t[o], n.style && (i = n.style.display, e ? ("none" === i && (s[o] = X.get(n, "display") || null, s[o] || (n.style.display = "")), "" === n.style.display && J(n) && (s[o] = (a = n, l = void 0, h = void 0, void 0, u = void 0, h = a.ownerDocument, c = a.nodeName, u = it[c], u || (l = h.body.appendChild(h.createElement(c)), u = v.css(l, "display"), l.parentNode.removeChild(l), "none" === u && (u = "block"), it[c] = u, u)))) : "none" !== i && (s[o] = "none", X.set(n, "display", i)));
        var a, l, h, c, u;
        for (o = 0; o < r; o++) null != s[o] && (t[o].style.display = s[o]);
        return t
    }

    v.fn.extend({
        show: function () {
            return nt(this, !0)
        }, hide: function () {
            return nt(this)
        }, toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                J(this) ? v(this).show() : v(this).hide()
            })
        }
    });
    var st = /^(?:checkbox|radio)$/i, ot = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, rt = /^$|\/(?:java|ecma)script/i, at = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function lt(t, e) {
        var i;
        return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && v.nodeName(t, e) ? v.merge([t], i) : i
    }

    function ht(t, e) {
        for (var i = 0, n = t.length; i < n; i++) X.set(t[i], "globalEval", !e || X.get(e[i], "globalEval"))
    }

    at.optgroup = at.option, at.tbody = at.tfoot = at.colgroup = at.caption = at.thead, at.th = at.td;
    var ct, ut, dt = /<|&#?\w+;/;

    function pt(t, e, i, n, s) {
        for (var o, r, a, l, h, c, u = e.createDocumentFragment(), d = [], p = 0, f = t.length; p < f; p++) if (o = t[p], o || 0 === o) if ("object" === v.type(o)) v.merge(d, o.nodeType ? [o] : o); else if (dt.test(o)) {
            for (r = r || u.appendChild(e.createElement("div")), a = (ot.exec(o) || ["", ""])[1].toLowerCase(), l = at[a] || at._default, r.innerHTML = l[1] + v.htmlPrefilter(o) + l[2], c = l[0]; c--;) r = r.lastChild;
            v.merge(d, r.childNodes), (r = u.firstChild).textContent = ""
        } else d.push(e.createTextNode(o));
        for (u.textContent = "", p = 0; o = d[p++];) if (n && v.inArray(o, n) > -1) s && s.push(o); else if (h = v.contains(o.ownerDocument, o), r = lt(u.appendChild(o), "script"), h && ht(r), i) for (c = 0; o = r[c++];) rt.test(o.type || "") && i.push(o);
        return u
    }

    ct = n.createDocumentFragment().appendChild(n.createElement("div")), (ut = n.createElement("input")).setAttribute("type", "radio"), ut.setAttribute("checked", "checked"), ut.setAttribute("name", "t"), ct.appendChild(ut), f.checkClone = ct.cloneNode(!0).cloneNode(!0).lastChild.checked, ct.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!ct.cloneNode(!0).lastChild.defaultValue;
    var ft = n.documentElement, mt = /^key/, gt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        vt = /^([^.]*)(?:\.(.+)|)/;

    function yt() {
        return !0
    }

    function _t() {
        return !1
    }

    function bt() {
        try {
            return n.activeElement
        } catch (t) {
        }
    }

    function xt(t, e, i, n, s, o) {
        var r, a;
        if ("object" == typeof e) {
            "string" != typeof i && (n = n || i, i = void 0);
            for (a in e) xt(t, a, i, n, e[a], o);
            return t
        }
        if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, n = void 0) : (s = n, n = i, i = void 0)), !1 === s) s = _t; else if (!s) return t;
        return 1 === o && (r = s, (s = function (t) {
            return v().off(t), r.apply(this, arguments)
        }).guid = r.guid || (r.guid = v.guid++)), t.each(function () {
            v.event.add(this, e, s, n, i)
        })
    }

    v.event = {
        global: {}, add: function (t, e, i, n, s) {
            var o, r, a, l, h, c, u, d, p, f, m, g = X.get(t);
            if (g) for (i.handler && (i = (o = i).handler, s = o.selector), s && v.find.matchesSelector(ft, s), i.guid || (i.guid = v.guid++), (l = g.events) || (l = g.events = {}), (r = g.handle) || (r = g.handle = function (e) {
                return void 0 !== v && v.event.triggered !== e.type ? v.event.dispatch.apply(t, arguments) : void 0
            }), h = (e = (e || "").match(j) || [""]).length; h--;) a = vt.exec(e[h]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p && (u = v.event.special[p] || {}, p = (s ? u.delegateType : u.bindType) || p, u = v.event.special[p] || {}, c = v.extend({
                type: p,
                origType: m,
                data: n,
                handler: i,
                guid: i.guid,
                selector: s,
                needsContext: s && v.expr.match.needsContext.test(s),
                namespace: f.join(".")
            }, o), (d = l[p]) || (d = l[p] = [], d.delegateCount = 0, u.setup && !1 !== u.setup.call(t, n, f, r) || t.addEventListener && t.addEventListener(p, r)), u.add && (u.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, c) : d.push(c), v.event.global[p] = !0)
        }, remove: function (t, e, i, n, s) {
            var o, r, a, l, h, c, u, d, p, f, m, g = X.hasData(t) && X.get(t);
            if (g && (l = g.events)) {
                for (h = (e = (e || "").match(j) || [""]).length; h--;) if (a = vt.exec(e[h]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p) {
                    for (u = v.event.special[p] || {}, d = l[p = (n ? u.delegateType : u.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = o = d.length; o--;) c = d[o], !s && m !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, u.remove && u.remove.call(t, c));
                    r && !d.length && (u.teardown && !1 !== u.teardown.call(t, f, g.handle) || v.removeEvent(t, p, g.handle), delete l[p])
                } else for (p in l) v.event.remove(t, p + e[h], i, n, !0);
                v.isEmptyObject(l) && X.remove(t, "handle events")
            }
        }, dispatch: function (t) {
            var e, i, n, s, o, r, a = v.event.fix(t), l = new Array(arguments.length),
                h = (X.get(this, "events") || {})[a.type] || [], c = v.event.special[a.type] || {};
            for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
            if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                for (r = v.event.handlers.call(this, a, h), e = 0; (s = r[e++]) && !a.isPropagationStopped();) for (a.currentTarget = s.elem, i = 0; (o = s.handlers[i++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, n = ((v.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, l), void 0 !== n && !1 === (a.result = n) && (a.preventDefault(), a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result
            }
        }, handlers: function (t, e) {
            var i, n, s, o, r, a = [], l = e.delegateCount, h = t.target;
            if (l && h.nodeType && !("click" === t.type && t.button >= 1)) for (; h !== this; h = h.parentNode || this) if (1 === h.nodeType && ("click" !== t.type || !0 !== h.disabled)) {
                for (o = [], r = {}, i = 0; i < l; i++) n = e[i], s = n.selector + " ", void 0 === r[s] && (r[s] = n.needsContext ? v(s, this).index(h) > -1 : v.find(s, this, null, [h]).length), r[s] && o.push(n);
                o.length && a.push({elem: h, handlers: o})
            }
            return h = this, l < e.length && a.push({elem: h, handlers: e.slice(l)}), a
        }, addProp: function (t, e) {
            Object.defineProperty(v.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: v.isFunction(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function (e) {
                    Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                }
            })
        }, fix: function (t) {
            return t[v.expando] ? t : new v.Event(t)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== bt() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === bt() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && v.nodeName(this, "input")) return this.click(), !1
                }, _default: function (t) {
                    return v.nodeName(t.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, v.removeEvent = function (t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
    }, v.Event = function (t, e) {
        return this instanceof v.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? yt : _t, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && v.extend(this, e), this.timeStamp = t && t.timeStamp || v.now(), void (this[v.expando] = !0)) : new v.Event(t, e)
    }, v.Event.prototype = {
        constructor: v.Event,
        isDefaultPrevented: _t,
        isPropagationStopped: _t,
        isImmediatePropagationStopped: _t,
        isSimulated: !1,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = yt, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = yt, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = yt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, v.each({
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
        which: function (t) {
            var e = t.button;
            return null == t.which && mt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && gt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, v.event.addProp), v.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, e) {
        v.event.special[t] = {
            delegateType: e, bindType: e, handle: function (t) {
                var i, n = t.relatedTarget, s = t.handleObj;
                return n && (n === this || v.contains(this, n)) || (t.type = s.origType, i = s.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), v.fn.extend({
        on: function (t, e, i, n) {
            return xt(this, t, e, i, n)
        }, one: function (t, e, i, n) {
            return xt(this, t, e, i, n, 1)
        }, off: function (t, e, i) {
            var n, s;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, v(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (s in t) this.off(s, e, t[s]);
                return this
            }
            return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = _t), this.each(function () {
                v.event.remove(this, t, i, e)
            })
        }
    });
    var wt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        $t = /<script|<style|<link/i, Ct = /checked\s*(?:[^=]|=\s*.checked.)/i, kt = /^true\/(.*)/,
        Tt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Et(t, e) {
        return v.nodeName(t, "table") && v.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") && t.getElementsByTagName("tbody")[0] || t
    }

    function St(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function Ot(t) {
        var e = kt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function Dt(t, e) {
        var i, n, s, o, r, a, l, h;
        if (1 === e.nodeType) {
            if (X.hasData(t) && (o = X.access(t), r = X.set(e, o), h = o.events)) {
                delete r.handle, r.events = {};
                for (s in h) for (i = 0, n = h[s].length; i < n; i++) v.event.add(e, s, h[s][i])
            }
            V.hasData(t) && (a = V.access(t), l = v.extend({}, a), V.set(e, l))
        }
    }

    function Mt(t, e, i, n) {
        e = r.apply([], e);
        var s, o, a, l, h, c, u = 0, d = t.length, p = d - 1, g = e[0], y = v.isFunction(g);
        if (y || d > 1 && "string" == typeof g && !f.checkClone && Ct.test(g)) return t.each(function (s) {
            var o = t.eq(s);
            y && (e[0] = g.call(this, s, o.html())), Mt(o, e, i, n)
        });
        if (d && (o = (s = pt(e, t[0].ownerDocument, !1, t, n)).firstChild, 1 === s.childNodes.length && (s = o), o || n)) {
            for (l = (a = v.map(lt(s, "script"), St)).length; u < d; u++) h = s, u !== p && (h = v.clone(h, !0, !0), l && v.merge(a, lt(h, "script"))), i.call(t[u], h, u);
            if (l) for (c = a[a.length - 1].ownerDocument, v.map(a, Ot), u = 0; u < l; u++) h = a[u], rt.test(h.type || "") && !X.access(h, "globalEval") && v.contains(c, h) && (h.src ? v._evalUrl && v._evalUrl(h.src) : m(h.textContent.replace(Tt, ""), c))
        }
        return t
    }

    function zt(t, e, i) {
        for (var n, s = e ? v.filter(e, t) : t, o = 0; null != (n = s[o]); o++) i || 1 !== n.nodeType || v.cleanData(lt(n)), n.parentNode && (i && v.contains(n.ownerDocument, n) && ht(lt(n, "script")), n.parentNode.removeChild(n));
        return t
    }

    v.extend({
        htmlPrefilter: function (t) {
            return t.replace(wt, "<$1></$2>")
        }, clone: function (t, e, i) {
            var n, s, o, r, a, l, h, c = t.cloneNode(!0), u = v.contains(t.ownerDocument, t);
            if (!(f.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || v.isXMLDoc(t))) for (r = lt(c), o = lt(t), n = 0, s = o.length; n < s; n++) a = o[n], l = r[n], void 0, h = l.nodeName.toLowerCase(), "input" === h && st.test(a.type) ? l.checked = a.checked : "input" !== h && "textarea" !== h || (l.defaultValue = a.defaultValue);
            if (e) if (i) for (o = o || lt(t), r = r || lt(c), n = 0, s = o.length; n < s; n++) Dt(o[n], r[n]); else Dt(t, c);
            return (r = lt(c, "script")).length > 0 && ht(r, !u && lt(t, "script")), c
        }, cleanData: function (t) {
            for (var e, i, n, s = v.event.special, o = 0; void 0 !== (i = t[o]); o++) if (q(i)) {
                if (e = i[X.expando]) {
                    if (e.events) for (n in e.events) s[n] ? v.event.remove(i, n) : v.removeEvent(i, n, e.handle);
                    i[X.expando] = void 0
                }
                i[V.expando] && (i[V.expando] = void 0)
            }
        }
    }), v.fn.extend({
        detach: function (t) {
            return zt(this, t, !0)
        }, remove: function (t) {
            return zt(this, t)
        }, text: function (t) {
            return R(this, function (t) {
                return void 0 === t ? v.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        }, append: function () {
            return Mt(this, arguments, function (t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Et(this, t).appendChild(t)
            })
        }, prepend: function () {
            return Mt(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = Et(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        }, before: function () {
            return Mt(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        }, after: function () {
            return Mt(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        }, empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (v.cleanData(lt(t, !1)), t.textContent = "");
            return this
        }, clone: function (t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function () {
                return v.clone(this, t, e)
            })
        }, html: function (t) {
            return R(this, function (t) {
                var e = this[0] || {}, i = 0, n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !$t.test(t) && !at[(ot.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = v.htmlPrefilter(t);
                    try {
                        for (; i < n; i++) e = this[i] || {}, 1 === e.nodeType && (v.cleanData(lt(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {
                    }
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        }, replaceWith: function () {
            var t = [];
            return Mt(this, arguments, function (e) {
                var i = this.parentNode;
                v.inArray(this, t) < 0 && (v.cleanData(lt(this)), i && i.replaceChild(e, this))
            }, t)
        }
    }), v.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        v.fn[t] = function (t) {
            for (var i, n = [], s = v(t), o = s.length - 1, r = 0; r <= o; r++) i = r === o ? this : this.clone(!0), v(s[r])[e](i), a.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var Nt = /^margin/, At = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"), jt = function (e) {
        var i = e.ownerDocument.defaultView;
        return i && i.opener || (i = t), i.getComputedStyle(e)
    };

    function Lt(t, e, i) {
        var n, s, o, r, a = t.style;
        return (i = i || jt(t)) && ("" !== (r = i.getPropertyValue(e) || i[e]) || v.contains(t.ownerDocument, t) || (r = v.style(t, e)), !f.pixelMarginRight() && At.test(r) && Nt.test(e) && (n = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = s, a.maxWidth = o)), void 0 !== r ? r + "" : r
    }

    function Ft(t, e) {
        return {
            get: function () {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    !function () {
        function e() {
            if (l) {
                l.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", l.innerHTML = "", ft.appendChild(a);
                var e = t.getComputedStyle(l);
                i = "1%" !== e.top, r = "2px" === e.marginLeft, s = "4px" === e.width, l.style.marginRight = "50%", o = "4px" === e.marginRight, ft.removeChild(a), l = null
            }
        }

        var i, s, o, r, a = n.createElement("div"), l = n.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === l.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(l), v.extend(f, {
            pixelPosition: function () {
                return e(), i
            }, boxSizingReliable: function () {
                return e(), s
            }, pixelMarginRight: function () {
                return e(), o
            }, reliableMarginLeft: function () {
                return e(), r
            }
        }))
    }();
    var Pt = /^(none|table(?!-c[ea]).+)/, Ht = {position: "absolute", visibility: "hidden", display: "block"},
        Wt = {letterSpacing: "0", fontWeight: "400"}, It = ["Webkit", "Moz", "ms"], Rt = n.createElement("div").style;

    function qt(t) {
        if (t in Rt) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), i = It.length; i--;) if (t = It[i] + e, t in Rt) return t
    }

    function Bt(t, e, i) {
        var n = K.exec(e);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
    }

    function Xt(t, e, i, n, s) {
        var o, r = 0;
        for (o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0; o < 4; o += 2) "margin" === i && (r += v.css(t, i + Z[o], !0, s)), n ? ("content" === i && (r -= v.css(t, "padding" + Z[o], !0, s)), "margin" !== i && (r -= v.css(t, "border" + Z[o] + "Width", !0, s))) : (r += v.css(t, "padding" + Z[o], !0, s), "padding" !== i && (r += v.css(t, "border" + Z[o] + "Width", !0, s)));
        return r
    }

    function Vt(t, e, i) {
        var n, s = !0, o = jt(t), r = "border-box" === v.css(t, "boxSizing", !1, o);
        if (t.getClientRects().length && (n = t.getBoundingClientRect()[e]), n <= 0 || null == n) {
            if (((n = Lt(t, e, o)) < 0 || null == n) && (n = t.style[e]), At.test(n)) return n;
            s = r && (f.boxSizingReliable() || n === t.style[e]), n = parseFloat(n) || 0
        }
        return n + Xt(t, e, i || (r ? "border" : "content"), s, o) + "px"
    }

    function Yt(t, e, i, n, s) {
        return new Yt.prototype.init(t, e, i, n, s)
    }

    v.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var i = Lt(t, "opacity");
                        return "" === i ? "1" : i
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
        cssProps: {float: "cssFloat"},
        style: function (t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, o, r, a = v.camelCase(e), l = t.style;
                return e = v.cssProps[a] || (v.cssProps[a] = qt(a) || a), r = v.cssHooks[e] || v.cssHooks[a], void 0 === i ? r && "get" in r && void 0 !== (s = r.get(t, !1, n)) ? s : l[e] : ("string" === (o = typeof i) && (s = K.exec(i)) && s[1] && (i = et(t, e, s), o = "number"), void (null != i && i == i && ("number" === o && (i += s && s[3] || (v.cssNumber[a] ? "" : "px")), f.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), r && "set" in r && void 0 === (i = r.set(t, i, n)) || (l[e] = i))))
            }
        },
        css: function (t, e, i, n) {
            var s, o, r, a = v.camelCase(e);
            return e = v.cssProps[a] || (v.cssProps[a] = qt(a) || a), (r = v.cssHooks[e] || v.cssHooks[a]) && "get" in r && (s = r.get(t, !0, i)), void 0 === s && (s = Lt(t, e, n)), "normal" === s && e in Wt && (s = Wt[e]), "" === i || i ? (o = parseFloat(s), !0 === i || isFinite(o) ? o || 0 : s) : s
        }
    }), v.each(["height", "width"], function (t, e) {
        v.cssHooks[e] = {
            get: function (t, i, n) {
                if (i) return !Pt.test(v.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Vt(t, e, n) : tt(t, Ht, function () {
                    return Vt(t, e, n)
                })
            }, set: function (t, i, n) {
                var s, o = n && jt(t), r = n && Xt(t, e, n, "border-box" === v.css(t, "boxSizing", !1, o), o);
                return r && (s = K.exec(i)) && "px" !== (s[3] || "px") && (t.style[e] = i, i = v.css(t, e)), Bt(0, i, r)
            }
        }
    }), v.cssHooks.marginLeft = Ft(f.reliableMarginLeft, function (t, e) {
        if (e) return (parseFloat(Lt(t, "marginLeft")) || t.getBoundingClientRect().left - tt(t, {marginLeft: 0}, function () {
            return t.getBoundingClientRect().left
        })) + "px"
    }), v.each({margin: "", padding: "", border: "Width"}, function (t, e) {
        v.cssHooks[t + e] = {
            expand: function (i) {
                for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) s[t + Z[n] + e] = o[n] || o[n - 2] || o[0];
                return s
            }
        }, Nt.test(t) || (v.cssHooks[t + e].set = Bt)
    }), v.fn.extend({
        css: function (t, e) {
            return R(this, function (t, e, i) {
                var n, s, o = {}, r = 0;
                if (v.isArray(e)) {
                    for (n = jt(t), s = e.length; r < s; r++) o[e[r]] = v.css(t, e[r], !1, n);
                    return o
                }
                return void 0 !== i ? v.style(t, e, i) : v.css(t, e)
            }, t, e, arguments.length > 1)
        }
    }), v.Tween = Yt, Yt.prototype = {
        constructor: Yt, init: function (t, e, i, n, s, o) {
            this.elem = t, this.prop = i, this.easing = s || v.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (v.cssNumber[i] ? "" : "px")
        }, cur: function () {
            var t = Yt.propHooks[this.prop];
            return t && t.get ? t.get(this) : Yt.propHooks._default.get(this)
        }, run: function (t) {
            var e, i = Yt.propHooks[this.prop];
            return this.options.duration ? this.pos = e = v.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Yt.propHooks._default.set(this), this
        }
    }, Yt.prototype.init.prototype = Yt.prototype, Yt.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = v.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            }, set: function (t) {
                v.fx.step[t.prop] ? v.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[v.cssProps[t.prop]] && !v.cssHooks[t.prop] ? t.elem[t.prop] = t.now : v.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, Yt.propHooks.scrollTop = Yt.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, v.easing = {
        linear: function (t) {
            return t
        }, swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }, _default: "swing"
    }, v.fx = Yt.prototype.init, v.fx.step = {};
    var Ut, Gt, Qt, Kt, Zt = /^(?:toggle|show|hide)$/, Jt = /queueHooks$/;

    function te() {
        Gt && (t.requestAnimationFrame(te), v.fx.tick())
    }

    function ee() {
        return t.setTimeout(function () {
            Ut = void 0
        }), Ut = v.now()
    }

    function ie(t, e) {
        var i, n = 0, s = {height: t};
        for (e = e ? 1 : 0; n < 4; n += 2 - e) i = Z[n], s["margin" + i] = s["padding" + i] = t;
        return e && (s.opacity = s.width = t), s
    }

    function ne(t, e, i) {
        for (var n, s = (se.tweeners[e] || []).concat(se.tweeners["*"]), o = 0, r = s.length; o < r; o++) if (n = s[o].call(i, e, t)) return n
    }

    function se(t, e, i) {
        var n, s, o = 0, r = se.prefilters.length, a = v.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (s) return !1;
            for (var e = Ut || ee(), i = Math.max(0, h.startTime + h.duration - e), n = 1 - (i / h.duration || 0), o = 0, r = h.tweens.length; o < r; o++) h.tweens[o].run(n);
            return a.notifyWith(t, [h, n, i]), n < 1 && r ? i : (a.resolveWith(t, [h]), !1)
        }, h = a.promise({
            elem: t,
            props: v.extend({}, e),
            opts: v.extend(!0, {specialEasing: {}, easing: v.easing._default}, i),
            originalProperties: e,
            originalOptions: i,
            startTime: Ut || ee(),
            duration: i.duration,
            tweens: [],
            createTween: function (e, i) {
                var n = v.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
                return h.tweens.push(n), n
            },
            stop: function (e) {
                var i = 0, n = e ? h.tweens.length : 0;
                if (s) return this;
                for (s = !0; i < n; i++) h.tweens[i].run(1);
                return e ? (a.notifyWith(t, [h, 1, 0]), a.resolveWith(t, [h, e])) : a.rejectWith(t, [h, e]), this
            }
        }), c = h.props;
        for (function (t, e) {
            var i, n, s, o, r;
            for (i in t) if (n = v.camelCase(i), s = e[n], o = t[i], v.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), r = v.cssHooks[n], r && "expand" in r) {
                o = r.expand(o), delete t[n];
                for (i in o) i in t || (t[i] = o[i], e[i] = s)
            } else e[n] = s
        }(c, h.opts.specialEasing); o < r; o++) if (n = se.prefilters[o].call(h, t, c, h.opts)) return v.isFunction(n.stop) && (v._queueHooks(h.elem, h.opts.queue).stop = v.proxy(n.stop, n)), n;
        return v.map(c, ne, h), v.isFunction(h.opts.start) && h.opts.start.call(t, h), v.fx.timer(v.extend(l, {
            elem: t,
            anim: h,
            queue: h.opts.queue
        })), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
    }

    v.Animation = v.extend(se, {
        tweeners: {
            "*": [function (t, e) {
                var i = this.createTween(t, e);
                return et(i.elem, t, K.exec(e), i), i
            }]
        }, tweener: function (t, e) {
            v.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(j);
            for (var i, n = 0, s = t.length; n < s; n++) i = t[n], se.tweeners[i] = se.tweeners[i] || [], se.tweeners[i].unshift(e)
        }, prefilters: [function (t, e, i) {
            var n, s, o, r, a, l, h, c, u = "width" in e || "height" in e, d = this, p = {}, f = t.style,
                m = t.nodeType && J(t), g = X.get(t, "fxshow");
            i.queue || (null == (r = v._queueHooks(t, "fx")).unqueued && (r.unqueued = 0, a = r.empty.fire, r.empty.fire = function () {
                r.unqueued || a()
            }), r.unqueued++, d.always(function () {
                d.always(function () {
                    r.unqueued--, v.queue(t, "fx").length || r.empty.fire()
                })
            }));
            for (n in e) if (s = e[n], Zt.test(s)) {
                if (delete e[n], o = o || "toggle" === s, s === (m ? "hide" : "show")) {
                    if ("show" !== s || !g || void 0 === g[n]) continue;
                    m = !0
                }
                p[n] = g && g[n] || v.style(t, n)
            }
            if ((l = !v.isEmptyObject(e)) || !v.isEmptyObject(p)) {
                u && 1 === t.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (h = g && g.display) && (h = X.get(t, "display")), "none" === (c = v.css(t, "display")) && (h ? c = h : (nt([t], !0), h = t.style.display || h, c = v.css(t, "display"), nt([t]))), ("inline" === c || "inline-block" === c && null != h) && "none" === v.css(t, "float") && (l || (d.done(function () {
                    f.display = h
                }), null == h && (c = f.display, h = "none" === c ? "" : c)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", d.always(function () {
                    f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
                })), l = !1;
                for (n in p) l || (g ? "hidden" in g && (m = g.hidden) : g = X.access(t, "fxshow", {display: h}), o && (g.hidden = !m), m && nt([t], !0), d.done(function () {
                    m || nt([t]), X.remove(t, "fxshow");
                    for (n in p) v.style(t, n, p[n])
                })), l = ne(m ? g[n] : 0, n, d), n in g || (g[n] = l.start, m && (l.end = l.start, l.start = 0))
            }
        }], prefilter: function (t, e) {
            e ? se.prefilters.unshift(t) : se.prefilters.push(t)
        }
    }), v.speed = function (t, e, i) {
        var s = t && "object" == typeof t ? v.extend({}, t) : {
            complete: i || !i && e || v.isFunction(t) && t,
            duration: t,
            easing: i && e || e && !v.isFunction(e) && e
        };
        return v.fx.off || n.hidden ? s.duration = 0 : "number" != typeof s.duration && (s.duration in v.fx.speeds ? s.duration = v.fx.speeds[s.duration] : s.duration = v.fx.speeds._default), null != s.queue && !0 !== s.queue || (s.queue = "fx"), s.old = s.complete, s.complete = function () {
            v.isFunction(s.old) && s.old.call(this), s.queue && v.dequeue(this, s.queue)
        }, s
    }, v.fn.extend({
        fadeTo: function (t, e, i, n) {
            return this.filter(J).css("opacity", 0).show().end().animate({opacity: e}, t, i, n)
        }, animate: function (t, e, i, n) {
            var s = v.isEmptyObject(t), o = v.speed(e, i, n), r = function () {
                var e = se(this, v.extend({}, t), o);
                (s || X.get(this, "finish")) && e.stop(!0)
            };
            return r.finish = r, s || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
        }, stop: function (t, e, i) {
            var n = function (t) {
                var e = t.stop;
                delete t.stop, e(i)
            };
            return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function () {
                var e = !0, s = null != t && t + "queueHooks", o = v.timers, r = X.get(this);
                if (s) r[s] && r[s].stop && n(r[s]); else for (s in r) r[s] && r[s].stop && Jt.test(s) && n(r[s]);
                for (s = o.length; s--;) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(i), e = !1, o.splice(s, 1));
                !e && i || v.dequeue(this, t)
            })
        }, finish: function (t) {
            return !1 !== t && (t = t || "fx"), this.each(function () {
                var e, i = X.get(this), n = i[t + "queue"], s = i[t + "queueHooks"], o = v.timers, r = n ? n.length : 0;
                for (i.finish = !0, v.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete i.finish
            })
        }
    }), v.each(["toggle", "show", "hide"], function (t, e) {
        var i = v.fn[e];
        v.fn[e] = function (t, n, s) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(ie(e, !0), t, n, s)
        }
    }), v.each({
        slideDown: ie("show"),
        slideUp: ie("hide"),
        slideToggle: ie("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (t, e) {
        v.fn[t] = function (t, i, n) {
            return this.animate(e, t, i, n)
        }
    }), v.timers = [], v.fx.tick = function () {
        var t, e = 0, i = v.timers;
        for (Ut = v.now(); e < i.length; e++) t = i[e], t() || i[e] !== t || i.splice(e--, 1);
        i.length || v.fx.stop(), Ut = void 0
    }, v.fx.timer = function (t) {
        v.timers.push(t), t() ? v.fx.start() : v.timers.pop()
    }, v.fx.interval = 13, v.fx.start = function () {
        Gt || (Gt = t.requestAnimationFrame ? t.requestAnimationFrame(te) : t.setInterval(v.fx.tick, v.fx.interval))
    }, v.fx.stop = function () {
        t.cancelAnimationFrame ? t.cancelAnimationFrame(Gt) : t.clearInterval(Gt), Gt = null
    }, v.fx.speeds = {slow: 600, fast: 200, _default: 400}, v.fn.delay = function (e, i) {
        return e = v.fx && v.fx.speeds[e] || e, i = i || "fx", this.queue(i, function (i, n) {
            var s = t.setTimeout(i, e);
            n.stop = function () {
                t.clearTimeout(s)
            }
        })
    }, Qt = n.createElement("input"), Kt = n.createElement("select").appendChild(n.createElement("option")), Qt.type = "checkbox", f.checkOn = "" !== Qt.value, f.optSelected = Kt.selected, (Qt = n.createElement("input")).value = "t", Qt.type = "radio", f.radioValue = "t" === Qt.value;
    var oe, re = v.expr.attrHandle;
    v.fn.extend({
        attr: function (t, e) {
            return R(this, v.attr, t, e, arguments.length > 1)
        }, removeAttr: function (t) {
            return this.each(function () {
                v.removeAttr(this, t)
            })
        }
    }), v.extend({
        attr: function (t, e, i) {
            var n, s, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? v.prop(t, e, i) : (1 === o && v.isXMLDoc(t) || (s = v.attrHooks[e.toLowerCase()] || (v.expr.match.bool.test(e) ? oe : void 0)), void 0 !== i ? null === i ? void v.removeAttr(t, e) : s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : s && "get" in s && null !== (n = s.get(t, e)) ? n : (n = v.find.attr(t, e), null == n ? void 0 : n))
        }, attrHooks: {
            type: {
                set: function (t, e) {
                    if (!f.radioValue && "radio" === e && v.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        }, removeAttr: function (t, e) {
            var i, n = 0, s = e && e.match(j);
            if (s && 1 === t.nodeType) for (; i = s[n++];) t.removeAttribute(i)
        }
    }), oe = {
        set: function (t, e, i) {
            return !1 === e ? v.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, v.each(v.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var i = re[e] || v.find.attr;
        re[e] = function (t, e, n) {
            var s, o, r = e.toLowerCase();
            return n || (o = re[r], re[r] = s, s = null != i(t, e, n) ? r : null, re[r] = o), s
        }
    });
    var ae = /^(?:input|select|textarea|button)$/i, le = /^(?:a|area)$/i;

    function he(t) {
        return (t.match(j) || []).join(" ")
    }

    function ce(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    v.fn.extend({
        prop: function (t, e) {
            return R(this, v.prop, t, e, arguments.length > 1)
        }, removeProp: function (t) {
            return this.each(function () {
                delete this[v.propFix[t] || t]
            })
        }
    }), v.extend({
        prop: function (t, e, i) {
            var n, s, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && v.isXMLDoc(t) || (e = v.propFix[e] || e, s = v.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]
        }, propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = v.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ae.test(t.nodeName) || le.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), f.optSelected || (v.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }, set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), v.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        v.propFix[this.toLowerCase()] = this
    }), v.fn.extend({
        addClass: function (t) {
            var e, i, n, s, o, r, a, l = 0;
            if (v.isFunction(t)) return this.each(function (e) {
                v(this).addClass(t.call(this, e, ce(this)))
            });
            if ("string" == typeof t && t) for (e = t.match(j) || []; i = this[l++];) if (s = ce(i), n = 1 === i.nodeType && " " + he(s) + " ") {
                for (r = 0; o = e[r++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                s !== (a = he(n)) && i.setAttribute("class", a)
            }
            return this
        }, removeClass: function (t) {
            var e, i, n, s, o, r, a, l = 0;
            if (v.isFunction(t)) return this.each(function (e) {
                v(this).removeClass(t.call(this, e, ce(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t) for (e = t.match(j) || []; i = this[l++];) if (s = ce(i), n = 1 === i.nodeType && " " + he(s) + " ") {
                for (r = 0; o = e[r++];) for (; n.indexOf(" " + o + " ") > -1;) n = n.replace(" " + o + " ", " ");
                s !== (a = he(n)) && i.setAttribute("class", a)
            }
            return this
        }, toggleClass: function (t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : v.isFunction(t) ? this.each(function (i) {
                v(this).toggleClass(t.call(this, i, ce(this), e), e)
            }) : this.each(function () {
                var e, n, s, o;
                if ("string" === i) for (n = 0, s = v(this), o = t.match(j) || []; e = o[n++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e); else void 0 !== t && "boolean" !== i || (e = ce(this), e && X.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : X.get(this, "__className__") || ""))
            })
        }, hasClass: function (t) {
            var e, i, n = 0;
            for (e = " " + t + " "; i = this[n++];) if (1 === i.nodeType && (" " + he(ce(i)) + " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var ue = /\r/g;
    v.fn.extend({
        val: function (t) {
            var e, i, n, s = this[0];
            return arguments.length ? (n = v.isFunction(t), this.each(function (i) {
                var s;
                1 === this.nodeType && (null == (s = n ? t.call(this, i, v(this).val()) : t) ? s = "" : "number" == typeof s ? s += "" : v.isArray(s) && (s = v.map(s, function (t) {
                    return null == t ? "" : t + ""
                })), (e = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
            })) : s ? (e = v.valHooks[s.type] || v.valHooks[s.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : "string" == typeof (i = s.value) ? i.replace(ue, "") : null == i ? "" : i : void 0
        }
    }), v.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = v.find.attr(t, "value");
                    return null != e ? e : he(v.text(t))
                }
            }, select: {
                get: function (t) {
                    var e, i, n, s = t.options, o = t.selectedIndex, r = "select-one" === t.type, a = r ? null : [],
                        l = r ? o + 1 : s.length;
                    for (n = o < 0 ? l : r ? o : 0; n < l; n++) if (i = s[n], (i.selected || n === o) && !i.disabled && (!i.parentNode.disabled || !v.nodeName(i.parentNode, "optgroup"))) {
                        if (e = v(i).val(), r) return e;
                        a.push(e)
                    }
                    return a
                }, set: function (t, e) {
                    for (var i, n, s = t.options, o = v.makeArray(e), r = s.length; r--;) n = s[r], (n.selected = v.inArray(v.valHooks.option.get(n), o) > -1) && (i = !0);
                    return i || (t.selectedIndex = -1), o
                }
            }
        }
    }), v.each(["radio", "checkbox"], function () {
        v.valHooks[this] = {
            set: function (t, e) {
                if (v.isArray(e)) return t.checked = v.inArray(v(t).val(), e) > -1
            }
        }, f.checkOn || (v.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var de = /^(?:focusinfocus|focusoutblur)$/;
    v.extend(v.event, {
        trigger: function (e, i, s, o) {
            var r, a, l, h, c, d, p, f = [s || n], m = u.call(e, "type") ? e.type : e,
                g = u.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = l = s = s || n, 3 !== s.nodeType && 8 !== s.nodeType && !de.test(m + v.event.triggered) && (m.indexOf(".") > -1 && (m = (g = m.split(".")).shift(), g.sort()), c = m.indexOf(":") < 0 && "on" + m, (e = e[v.expando] ? e : new v.Event(m, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = g.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = s), i = null == i ? [e] : v.makeArray(i, [e]), p = v.event.special[m] || {}, o || !p.trigger || !1 !== p.trigger.apply(s, i))) {
                if (!o && !p.noBubble && !v.isWindow(s)) {
                    for (h = p.delegateType || m, de.test(h + m) || (a = a.parentNode); a; a = a.parentNode) f.push(a), l = a;
                    l === (s.ownerDocument || n) && f.push(l.defaultView || l.parentWindow || t)
                }
                for (r = 0; (a = f[r++]) && !e.isPropagationStopped();) e.type = r > 1 ? h : p.bindType || m, d = (X.get(a, "events") || {})[e.type] && X.get(a, "handle"), d && d.apply(a, i), d = c && a[c], d && d.apply && q(a) && (e.result = d.apply(a, i), !1 === e.result && e.preventDefault());
                return e.type = m, o || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(f.pop(), i) || !q(s) || c && v.isFunction(s[m]) && !v.isWindow(s) && ((l = s[c]) && (s[c] = null), v.event.triggered = m, s[m](), v.event.triggered = void 0, l && (s[c] = l)), e.result
            }
        }, simulate: function (t, e, i) {
            var n = v.extend(new v.Event, i, {type: t, isSimulated: !0});
            v.event.trigger(n, null, e)
        }
    }), v.fn.extend({
        trigger: function (t, e) {
            return this.each(function () {
                v.event.trigger(t, e, this)
            })
        }, triggerHandler: function (t, e) {
            var i = this[0];
            if (i) return v.event.trigger(t, e, i, !0)
        }
    }), v.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
        v.fn[e] = function (t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), v.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), f.focusin = "onfocusin" in t, f.focusin || v.each({focus: "focusin", blur: "focusout"}, function (t, e) {
        var i = function (t) {
            v.event.simulate(e, t.target, v.event.fix(t))
        };
        v.event.special[e] = {
            setup: function () {
                var n = this.ownerDocument || this, s = X.access(n, e);
                s || n.addEventListener(t, i, !0), X.access(n, e, (s || 0) + 1)
            }, teardown: function () {
                var n = this.ownerDocument || this, s = X.access(n, e) - 1;
                s ? X.access(n, e, s) : (n.removeEventListener(t, i, !0), X.remove(n, e))
            }
        }
    });
    var pe = t.location, fe = v.now(), me = /\?/;
    v.parseXML = function (e) {
        var i;
        if (!e || "string" != typeof e) return null;
        try {
            i = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (t) {
            i = void 0
        }
        return i && !i.getElementsByTagName("parsererror").length || v.error("Invalid XML: " + e), i
    };
    var ge = /\[\]$/, ve = /\r?\n/g, ye = /^(?:submit|button|image|reset|file)$/i,
        _e = /^(?:input|select|textarea|keygen)/i;

    function be(t, e, i, n) {
        var s;
        if (v.isArray(e)) v.each(e, function (e, s) {
            i || ge.test(t) ? n(t, s) : be(t + "[" + ("object" == typeof s && null != s ? e : "") + "]", s, i, n)
        }); else if (i || "object" !== v.type(e)) n(t, e); else for (s in e) be(t + "[" + s + "]", e[s], i, n)
    }

    v.param = function (t, e) {
        var i, n = [], s = function (t, e) {
            var i = v.isFunction(e) ? e() : e;
            n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
        };
        if (v.isArray(t) || t.jquery && !v.isPlainObject(t)) v.each(t, function () {
            s(this.name, this.value)
        }); else for (i in t) be(i, t[i], e, s);
        return n.join("&")
    }, v.fn.extend({
        serialize: function () {
            return v.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var t = v.prop(this, "elements");
                return t ? v.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !v(this).is(":disabled") && _e.test(this.nodeName) && !ye.test(t) && (this.checked || !st.test(t))
            }).map(function (t, e) {
                var i = v(this).val();
                return null == i ? null : v.isArray(i) ? v.map(i, function (t) {
                    return {name: e.name, value: t.replace(ve, "\r\n")}
                }) : {name: e.name, value: i.replace(ve, "\r\n")}
            }).get()
        }
    });
    var xe = /%20/g, we = /#.*$/, $e = /([?&])_=[^&]*/, Ce = /^(.*?):[ \t]*([^\r\n]*)$/gm, ke = /^(?:GET|HEAD)$/,
        Te = /^\/\//, Ee = {}, Se = {}, Oe = "*/".concat("*"), De = n.createElement("a");

    function Me(t) {
        return function (e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, s = 0, o = e.toLowerCase().match(j) || [];
            if (v.isFunction(i)) for (; n = o[s++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function ze(t, e, i, n) {
        var s = {}, o = t === Se;

        function r(a) {
            var l;
            return s[a] = !0, v.each(t[a] || [], function (t, a) {
                var h = a(e, i, n);
                return "string" != typeof h || o || s[h] ? o ? !(l = h) : void 0 : (e.dataTypes.unshift(h), r(h), !1)
            }), l
        }

        return r(e.dataTypes[0]) || !s["*"] && r("*")
    }

    function Ne(t, e) {
        var i, n, s = v.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]);
        return n && v.extend(!0, t, n), t
    }

    De.href = pe.href, v.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: pe.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(pe.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Oe,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": v.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (t, e) {
            return e ? Ne(Ne(t, v.ajaxSettings), e) : Ne(v.ajaxSettings, t)
        },
        ajaxPrefilter: Me(Ee),
        ajaxTransport: Me(Se),
        ajax: function (e, i) {
            "object" == typeof e && (i = e, e = void 0), i = i || {};
            var s, o, r, a, l, h, c, u, d, p, f = v.ajaxSetup({}, i), m = f.context || f,
                g = f.context && (m.nodeType || m.jquery) ? v(m) : v.event, y = v.Deferred(),
                _ = v.Callbacks("once memory"), b = f.statusCode || {}, x = {}, w = {}, $ = "canceled", C = {
                    readyState: 0, getResponseHeader: function (t) {
                        var e;
                        if (c) {
                            if (!a) for (a = {}; e = Ce.exec(r);) a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    }, getAllResponseHeaders: function () {
                        return c ? r : null
                    }, setRequestHeader: function (t, e) {
                        return null == c && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t, x[t] = e), this
                    }, overrideMimeType: function (t) {
                        return null == c && (f.mimeType = t), this
                    }, statusCode: function (t) {
                        var e;
                        if (t) if (c) C.always(t[C.status]); else for (e in t) b[e] = [b[e], t[e]];
                        return this
                    }, abort: function (t) {
                        var e = t || $;
                        return s && s.abort(e), k(0, e), this
                    }
                };
            if (y.promise(C), f.url = ((e || f.url || pe.href) + "").replace(Te, pe.protocol + "//"), f.type = i.method || i.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(j) || [""], null == f.crossDomain) {
                h = n.createElement("a");
                try {
                    h.href = f.url, h.href = h.href, f.crossDomain = De.protocol + "//" + De.host != h.protocol + "//" + h.host
                } catch (t) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = v.param(f.data, f.traditional)), ze(Ee, f, i, C), c) return C;
            (u = v.event && f.global) && 0 == v.active++ && v.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !ke.test(f.type), o = f.url.replace(we, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(xe, "+")) : (p = f.url.slice(o.length), f.data && (o += (me.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (o = o.replace($e, "$1"), p = (me.test(o) ? "&" : "?") + "_=" + fe++ + p), f.url = o + p), f.ifModified && (v.lastModified[o] && C.setRequestHeader("If-Modified-Since", v.lastModified[o]), v.etag[o] && C.setRequestHeader("If-None-Match", v.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || i.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Oe + "; q=0.01" : "") : f.accepts["*"]);
            for (d in f.headers) C.setRequestHeader(d, f.headers[d]);
            if (f.beforeSend && (!1 === f.beforeSend.call(m, C, f) || c)) return C.abort();
            if ($ = "abort", _.add(f.complete), C.done(f.success), C.fail(f.error), s = ze(Se, f, i, C)) {
                if (C.readyState = 1, u && g.trigger("ajaxSend", [C, f]), c) return C;
                f.async && f.timeout > 0 && (l = t.setTimeout(function () {
                    C.abort("timeout")
                }, f.timeout));
                try {
                    c = !1, s.send(x, k)
                } catch (t) {
                    if (c) throw t;
                    k(-1, t)
                }
            } else k(-1, "No Transport");

            function k(e, i, n, a) {
                var h, d, p, x, w, $ = i;
                c || (c = !0, l && t.clearTimeout(l), s = void 0, r = a || "", C.readyState = e > 0 ? 4 : 0, h = e >= 200 && e < 300 || 304 === e, n && (x = function (t, e, i) {
                    for (var n, s, o, r, a = t.contents, l = t.dataTypes; "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (n) for (s in a) if (a[s] && a[s].test(n)) {
                        l.unshift(s);
                        break
                    }
                    if (l[0] in i) o = l[0]; else {
                        for (s in i) {
                            if (!l[0] || t.converters[s + " " + l[0]]) {
                                o = s;
                                break
                            }
                            r || (r = s)
                        }
                        o = o || r
                    }
                    if (o) return o !== l[0] && l.unshift(o), i[o]
                }(f, C, n)), x = function (t, e, i, n) {
                    var s, o, r, a, l, h = {}, c = t.dataTypes.slice();
                    if (c[1]) for (r in t.converters) h[r.toLowerCase()] = t.converters[r];
                    for (o = c.shift(); o;) if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
                        if (!(r = h[l + " " + o] || h["* " + o])) for (s in h) if (a = s.split(" "), a[1] === o && (r = h[l + " " + a[0]] || h["* " + a[0]])) {
                            !0 === r ? r = h[s] : !0 !== h[s] && (o = a[0], c.unshift(a[1]));
                            break
                        }
                        if (!0 !== r) if (r && t.throws) e = r(e); else try {
                            e = r(e)
                        } catch (t) {
                            return {state: "parsererror", error: r ? t : "No conversion from " + l + " to " + o}
                        }
                    }
                    return {state: "success", data: e}
                }(f, x, C, h), h ? (f.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (v.lastModified[o] = w), (w = C.getResponseHeader("etag")) && (v.etag[o] = w)), 204 === e || "HEAD" === f.type ? $ = "nocontent" : 304 === e ? $ = "notmodified" : ($ = x.state, d = x.data, h = !(p = x.error))) : (p = $, !e && $ || ($ = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (i || $) + "", h ? y.resolveWith(m, [d, $, C]) : y.rejectWith(m, [C, $, p]), C.statusCode(b), b = void 0, u && g.trigger(h ? "ajaxSuccess" : "ajaxError", [C, f, h ? d : p]), _.fireWith(m, [C, $]), u && (g.trigger("ajaxComplete", [C, f]), --v.active || v.event.trigger("ajaxStop")))
            }

            return C
        },
        getJSON: function (t, e, i) {
            return v.get(t, e, i, "json")
        },
        getScript: function (t, e) {
            return v.get(t, void 0, e, "script")
        }
    }), v.each(["get", "post"], function (t, e) {
        v[e] = function (t, i, n, s) {
            return v.isFunction(i) && (s = s || n, n = i, i = void 0), v.ajax(v.extend({
                url: t,
                type: e,
                dataType: s,
                data: i,
                success: n
            }, v.isPlainObject(t) && t))
        }
    }), v._evalUrl = function (t) {
        return v.ajax({url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
    }, v.fn.extend({
        wrapAll: function (t) {
            var e;
            return this[0] && (v.isFunction(t) && (t = t.call(this[0])), e = v(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        }, wrapInner: function (t) {
            return v.isFunction(t) ? this.each(function (e) {
                v(this).wrapInner(t.call(this, e))
            }) : this.each(function () {
                var e = v(this), i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        }, wrap: function (t) {
            var e = v.isFunction(t);
            return this.each(function (i) {
                v(this).wrapAll(e ? t.call(this, i) : t)
            })
        }, unwrap: function (t) {
            return this.parent(t).not("body").each(function () {
                v(this).replaceWith(this.childNodes)
            }), this
        }
    }), v.expr.pseudos.hidden = function (t) {
        return !v.expr.pseudos.visible(t)
    }, v.expr.pseudos.visible = function (t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, v.ajaxSettings.xhr = function () {
        try {
            return new t.XMLHttpRequest
        } catch (t) {
        }
    };
    var Ae = {0: 200, 1223: 204}, je = v.ajaxSettings.xhr();
    f.cors = !!je && "withCredentials" in je, f.ajax = je = !!je, v.ajaxTransport(function (e) {
        var i, n;
        if (f.cors || je && !e.crossDomain) return {
            send: function (s, o) {
                var r, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (r in e.xhrFields) a[r] = e.xhrFields[r];
                e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest");
                for (r in s) a.setRequestHeader(r, s[r]);
                i = function (t) {
                    return function () {
                        i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Ae[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))
                    }
                }, a.onload = i(), n = a.onerror = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function () {
                    4 === a.readyState && t.setTimeout(function () {
                        i && n()
                    })
                }, i = i("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (t) {
                    if (i) throw t
                }
            }, abort: function () {
                i && i()
            }
        }
    }), v.ajaxPrefilter(function (t) {
        t.crossDomain && (t.contents.script = !1)
    }), v.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (t) {
                return v.globalEval(t), t
            }
        }
    }), v.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), v.ajaxTransport("script", function (t) {
        var e, i;
        if (t.crossDomain) return {
            send: function (s, o) {
                e = v("<script>").prop({charset: t.scriptCharset, src: t.url}).on("load error", i = function (t) {
                    e.remove(), i = null, t && o("error" === t.type ? 404 : 200, t.type)
                }), n.head.appendChild(e[0])
            }, abort: function () {
                i && i()
            }
        }
    });
    var Le, Fe = [], Pe = /(=)\?(?=&|$)|\?\?/;

    function He(t) {
        return v.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }

    v.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var t = Fe.pop() || v.expando + "_" + fe++;
            return this[t] = !0, t
        }
    }), v.ajaxPrefilter("json jsonp", function (e, i, n) {
        var s, o, r,
            a = !1 !== e.jsonp && (Pe.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Pe.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return s = e.jsonpCallback = v.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Pe, "$1" + s) : !1 !== e.jsonp && (e.url += (me.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function () {
            return r || v.error(s + " was not called"), r[0]
        }, e.dataTypes[0] = "json", o = t[s], t[s] = function () {
            r = arguments
        }, n.always(function () {
            void 0 === o ? v(t).removeProp(s) : t[s] = o, e[s] && (e.jsonpCallback = i.jsonpCallback, Fe.push(s)), r && v.isFunction(o) && o(r[0]), r = o = void 0
        }), "script"
    }), f.createHTMLDocument = ((Le = n.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Le.childNodes.length), v.parseHTML = function (t, e, i) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = !1), e || (f.createHTMLDocument ? ((s = (e = n.implementation.createHTMLDocument("")).createElement("base")).href = n.location.href, e.head.appendChild(s)) : e = n), o = E.exec(t), r = !i && [], o ? [e.createElement(o[1])] : (o = pt([t], e, r), r && r.length && v(r).remove(), v.merge([], o.childNodes)));
        var s, o, r
    }, v.fn.load = function (t, e, i) {
        var n, s, o, r = this, a = t.indexOf(" ");
        return a > -1 && (n = he(t.slice(a)), t = t.slice(0, a)), v.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (s = "POST"), r.length > 0 && v.ajax({
            url: t,
            type: s || "GET",
            dataType: "html",
            data: e
        }).done(function (t) {
            o = arguments, r.html(n ? v("<div>").append(v.parseHTML(t)).find(n) : t)
        }).always(i && function (t, e) {
            r.each(function () {
                i.apply(this, o || [t.responseText, e, t])
            })
        }), this
    }, v.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        v.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), v.expr.pseudos.animated = function (t) {
        return v.grep(v.timers, function (e) {
            return t === e.elem
        }).length
    }, v.offset = {
        setOffset: function (t, e, i) {
            var n, s, o, r, a, l, h = v.css(t, "position"), c = v(t), u = {};
            "static" === h && (t.style.position = "relative"), a = c.offset(), o = v.css(t, "top"), l = v.css(t, "left"), ("absolute" === h || "fixed" === h) && (o + l).indexOf("auto") > -1 ? (r = (n = c.position()).top, s = n.left) : (r = parseFloat(o) || 0, s = parseFloat(l) || 0), v.isFunction(e) && (e = e.call(t, i, v.extend({}, a))), null != e.top && (u.top = e.top - a.top + r), null != e.left && (u.left = e.left - a.left + s), "using" in e ? e.using.call(t, u) : c.css(u)
        }
    }, v.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                v.offset.setOffset(this, t, e)
            });
            var e, i, n, s, o = this[0];
            return o ? o.getClientRects().length ? (n = o.getBoundingClientRect()).width || n.height ? (i = He(s = o.ownerDocument), e = s.documentElement, {
                top: n.top + i.pageYOffset - e.clientTop,
                left: n.left + i.pageXOffset - e.clientLeft
            }) : n : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var t, e, i = this[0], n = {top: 0, left: 0};
                return "fixed" === v.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), v.nodeName(t[0], "html") || (n = t.offset()), n = {
                    top: n.top + v.css(t[0], "borderTopWidth", !0),
                    left: n.left + v.css(t[0], "borderLeftWidth", !0)
                }), {top: e.top - n.top - v.css(i, "marginTop", !0), left: e.left - n.left - v.css(i, "marginLeft", !0)}
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && "static" === v.css(t, "position");) t = t.offsetParent;
                return t || ft
            })
        }
    }), v.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
        var i = "pageYOffset" === e;
        v.fn[t] = function (n) {
            return R(this, function (t, n, s) {
                var o = He(t);
                return void 0 === s ? o ? o[e] : t[n] : void (o ? o.scrollTo(i ? o.pageXOffset : s, i ? s : o.pageYOffset) : t[n] = s)
            }, t, n, arguments.length)
        }
    }), v.each(["top", "left"], function (t, e) {
        v.cssHooks[e] = Ft(f.pixelPosition, function (t, i) {
            if (i) return i = Lt(t, e), At.test(i) ? v(t).position()[e] + "px" : i
        })
    }), v.each({Height: "height", Width: "width"}, function (t, e) {
        v.each({padding: "inner" + t, content: e, "": "outer" + t}, function (i, n) {
            v.fn[n] = function (s, o) {
                var r = arguments.length && (i || "boolean" != typeof s),
                    a = i || (!0 === s || !0 === o ? "margin" : "border");
                return R(this, function (e, i, s) {
                    var o;
                    return v.isWindow(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === s ? v.css(e, i, a) : v.style(e, i, s, a)
                }, e, r ? s : void 0, r)
            }
        })
    }), v.fn.extend({
        bind: function (t, e, i) {
            return this.on(t, null, e, i)
        }, unbind: function (t, e) {
            return this.off(t, null, e)
        }, delegate: function (t, e, i, n) {
            return this.on(e, t, i, n)
        }, undelegate: function (t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    }), v.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
        return v
    });
    var We = t.jQuery, Ie = t.$;
    return v.noConflict = function (e) {
        return t.$ === v && (t.$ = Ie), e && t.jQuery === v && (t.jQuery = We), v
    }, e || (t.jQuery = t.$ = v), v
});
var Event = function () {
    "use strict";
    this.attach = function (t, e, i, n) {
        var s = "", o = void 0 === n || n, r = null;
        return void 0 === window.addEventListener ? (s = "on" + t, r = function (t, i) {
            return e.attachEvent(t, i), i
        }) : (s = t, r = function (t, i, n) {
            return e.addEventListener(t, i, n), i
        }), r.apply(e, [s, function (t) {
            var e = t || event, n = e.srcElement || e.target;
            i(e, n)
        }, o])
    }, this.detach = function (t, e, i, n) {
        var s = "", o = void 0 === n || n;
        void 0 === window.removeEventListener ? (s = "on" + t, e.detachEvent(s, i)) : (s = t, e.removeEventListener(s, i, o))
    }, this.stop = function (t) {
        t.cancelBubble = !0, t.stopPropagation && t.stopPropagation()
    }, this.prevent = function (t) {
        t.preventDefault ? t.preventDefault() : t.returnValue = !1
    }
};
!function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], function (e) {
        return t(e, document, window, navigator)
    }) : "object" == typeof exports ? t(require("jquery"), document, window, navigator) : t(jQuery, document, window, navigator)
}(function (t, e, i, n, s) {
    var o, r, a = 0,
        l = (o = n.userAgent, r = /msie\s\d+/i, 0 < o.search(r) && 9 > (o = (o = r.exec(o).toString()).split(" ")[1]) && (t("html").addClass("lt-ie9"), !0));
    Function.prototype.bind || (Function.prototype.bind = function (t) {
        var e = this, i = [].slice;
        if ("function" != typeof e) throw new TypeError;
        var n = i.call(arguments, 1), s = function () {
            if (this instanceof s) {
                (o = function () {
                }).prototype = e.prototype;
                var o = new o, r = e.apply(o, n.concat(i.call(arguments)));
                return Object(r) === r ? r : o
            }
            return e.apply(t, n.concat(i.call(arguments)))
        };
        return s
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function (t, e) {
        if (null == this) throw new TypeError('"this" is null or not defined');
        var i = Object(this), n = i.length >>> 0;
        if (0 === n) return -1;
        var s = +e || 0;
        if (1 / 0 === Math.abs(s) && (s = 0), s >= n) return -1;
        for (s = Math.max(0 <= s ? s : n - Math.abs(s), 0); s < n;) {
            if (s in i && i[s] === t) return s;
            s++
        }
        return -1
    });
    var h = function (n, o, r) {
        this.VERSION = "2.2.0", this.input = n, this.plugin_count = r, this.old_to = this.old_from = this.update_tm = this.calc_count = this.current_plugin = 0, this.raf_id = this.old_min_interval = null, this.no_diapason = this.force_redraw = this.dragging = !1, this.has_tab_index = !0, this.is_update = this.is_key = !1, this.is_start = !0, this.is_click = this.is_resize = this.is_active = this.is_finish = !1, o = o || {}, this.$cache = {
            win: t(i),
            body: t(e.body),
            input: t(n),
            cont: null,
            rs: null,
            min: null,
            max: null,
            from: null,
            to: null,
            single: null,
            bar: null,
            line: null,
            s_single: null,
            s_from: null,
            s_to: null,
            shad_single: null,
            shad_from: null,
            shad_to: null,
            edge: null,
            grid: null,
            grid_labels: []
        }, this.coords = {
            x_gap: 0,
            x_pointer: 0,
            w_rs: 0,
            w_rs_old: 0,
            w_handle: 0,
            p_gap: 0,
            p_gap_left: 0,
            p_gap_right: 0,
            p_step: 0,
            p_pointer: 0,
            p_handle: 0,
            p_single_fake: 0,
            p_single_real: 0,
            p_from_fake: 0,
            p_from_real: 0,
            p_to_fake: 0,
            p_to_real: 0,
            p_bar_x: 0,
            p_bar_w: 0,
            grid_gap: 0,
            big_num: 0,
            big: [],
            big_w: [],
            big_p: [],
            big_x: []
        }, this.labels = {
            w_min: 0,
            w_max: 0,
            w_from: 0,
            w_to: 0,
            w_single: 0,
            p_min: 0,
            p_max: 0,
            p_from_fake: 0,
            p_from_left: 0,
            p_to_fake: 0,
            p_to_left: 0,
            p_single_fake: 0,
            p_single_left: 0
        };
        var a, l = this.$cache.input;
        n = l.prop("value"), r = {
            type: "single",
            min: 10,
            max: 100,
            from: null,
            to: null,
            step: 1,
            min_interval: 0,
            max_interval: 0,
            drag_interval: !1,
            values: [],
            p_values: [],
            from_fixed: !1,
            from_min: null,
            from_max: null,
            from_shadow: !1,
            to_fixed: !1,
            to_min: null,
            to_max: null,
            to_shadow: !1,
            prettify_enabled: !0,
            prettify_separator: " ",
            prettify: null,
            force_edges: !1,
            keyboard: !0,
            grid: !1,
            grid_margin: !0,
            grid_num: 4,
            grid_snap: !1,
            hide_min_max: !1,
            hide_from_to: !1,
            prefix: "",
            postfix: "",
            max_postfix: "",
            decorate_both: !0,
            values_separator: " — ",
            input_values_separator: ";",
            disable: !1,
            block: !1,
            extra_classes: "",
            scope: null,
            onStart: null,
            onChange: null,
            onFinish: null,
            onUpdate: null
        }, "INPUT" !== l[0].nodeName && console && console.warn && console.warn("Base element should be <input>!", l[0]), (l = {
            type: l.data("type"),
            min: l.data("min"),
            max: l.data("max"),
            from: l.data("from"),
            to: l.data("to"),
            step: l.data("step"),
            min_interval: l.data("minInterval"),
            max_interval: l.data("maxInterval"),
            drag_interval: l.data("dragInterval"),
            values: l.data("values"),
            from_fixed: l.data("fromFixed"),
            from_min: l.data("fromMin"),
            from_max: l.data("fromMax"),
            from_shadow: l.data("fromShadow"),
            to_fixed: l.data("toFixed"),
            to_min: l.data("toMin"),
            to_max: l.data("toMax"),
            to_shadow: l.data("toShadow"),
            prettify_enabled: l.data("prettifyEnabled"),
            prettify_separator: l.data("prettifySeparator"),
            force_edges: l.data("forceEdges"),
            keyboard: l.data("keyboard"),
            grid: l.data("grid"),
            grid_margin: l.data("gridMargin"),
            grid_num: l.data("gridNum"),
            grid_snap: l.data("gridSnap"),
            hide_min_max: l.data("hideMinMax"),
            hide_from_to: l.data("hideFromTo"),
            prefix: l.data("prefix"),
            postfix: l.data("postfix"),
            max_postfix: l.data("maxPostfix"),
            decorate_both: l.data("decorateBoth"),
            values_separator: l.data("valuesSeparator"),
            input_values_separator: l.data("inputValuesSeparator"),
            disable: l.data("disable"),
            block: l.data("block"),
            extra_classes: l.data("extraClasses")
        }).values = l.values && l.values.split(",");
        for (a in l) l.hasOwnProperty(a) && (l[a] !== s && "" !== l[a] || delete l[a]);
        n !== s && "" !== n && ((n = n.split(l.input_values_separator || o.input_values_separator || ";"))[0] && n[0] == +n[0] && (n[0] = +n[0]), n[1] && n[1] == +n[1] && (n[1] = +n[1]), o && o.values && o.values.length ? (r.from = n[0] && o.values.indexOf(n[0]), r.to = n[1] && o.values.indexOf(n[1])) : (r.from = n[0] && +n[0], r.to = n[1] && +n[1])), t.extend(r, o), t.extend(r, l), this.options = r, this.update_check = {}, this.validate(), this.result = {
            input: this.$cache.input,
            slider: null,
            min: this.options.min,
            max: this.options.max,
            from: this.options.from,
            from_percent: 0,
            from_value: null,
            to: this.options.to,
            to_percent: 0,
            to_value: null
        }, this.init()
    };
    h.prototype = {
        init: function (t) {
            this.no_diapason = !1, this.coords.p_step = this.convertToPercent(this.options.step, !0), this.target = "base", this.toggleInput(), this.append(), this.setMinMax(), t ? (this.force_redraw = !0, this.calc(!0), this.callOnUpdate()) : (this.force_redraw = !0, this.calc(!0), this.callOnStart()), this.updateScene()
        }, append: function () {
            this.$cache.input.before('<span class="irs js-irs-' + this.plugin_count + " " + this.options.extra_classes + '"></span>'), this.$cache.input.prop("readonly", !0), this.$cache.cont = this.$cache.input.prev(), this.result.slider = this.$cache.cont, this.$cache.cont.html('<span class="irs"><span class="irs-line" tabindex="0"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span><span class="irs-bar"></span>'), this.$cache.rs = this.$cache.cont.find(".irs"), this.$cache.min = this.$cache.cont.find(".irs-min"), this.$cache.max = this.$cache.cont.find(".irs-max"), this.$cache.from = this.$cache.cont.find(".irs-from"), this.$cache.to = this.$cache.cont.find(".irs-to"), this.$cache.single = this.$cache.cont.find(".irs-single"), this.$cache.bar = this.$cache.cont.find(".irs-bar"), this.$cache.line = this.$cache.cont.find(".irs-line"), this.$cache.grid = this.$cache.cont.find(".irs-grid"), "single" === this.options.type ? (this.$cache.cont.append('<span class="irs-bar-edge"></span><span class="irs-shadow shadow-single"></span><span class="irs-slider single"></span>'), this.$cache.edge = this.$cache.cont.find(".irs-bar-edge"), this.$cache.s_single = this.$cache.cont.find(".single"), this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.shad_single = this.$cache.cont.find(".shadow-single")) : (this.$cache.cont.append('<span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>'), this.$cache.s_from = this.$cache.cont.find(".from"), this.$cache.s_to = this.$cache.cont.find(".to"), this.$cache.shad_from = this.$cache.cont.find(".shadow-from"), this.$cache.shad_to = this.$cache.cont.find(".shadow-to"), this.setTopHandler()), this.options.hide_from_to && (this.$cache.from[0].style.display = "none", this.$cache.to[0].style.display = "none", this.$cache.single[0].style.display = "none"), this.appendGrid(), this.options.disable ? (this.appendDisableMask(), this.$cache.input[0].disabled = !0) : (this.$cache.input[0].disabled = !1, this.removeDisableMask(), this.bindEvents()), this.options.disable || (this.options.block ? this.appendDisableMask() : this.removeDisableMask()), this.options.drag_interval && (this.$cache.bar[0].style.cursor = "ew-resize")
        }, setTopHandler: function () {
            var t = this.options.max, e = this.options.to;
            this.options.from > this.options.min && e === t ? this.$cache.s_from.addClass("type_last") : e < t && this.$cache.s_to.addClass("type_last")
        }, changeLevel: function (t) {
            switch (t) {
                case"single":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake), this.$cache.s_single.addClass("state_hover");
                    break;
                case"from":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.$cache.s_from.addClass("state_hover"), this.$cache.s_from.addClass("type_last"), this.$cache.s_to.removeClass("type_last");
                    break;
                case"to":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake), this.$cache.s_to.addClass("state_hover"), this.$cache.s_to.addClass("type_last"), this.$cache.s_from.removeClass("type_last");
                    break;
                case"both":
                    this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer), this.$cache.s_to.removeClass("type_last"), this.$cache.s_from.removeClass("type_last")
            }
        }, appendDisableMask: function () {
            this.$cache.cont.append('<span class="irs-disable-mask"></span>'), this.$cache.cont.addClass("irs-disabled")
        }, removeDisableMask: function () {
            this.$cache.cont.remove(".irs-disable-mask"), this.$cache.cont.removeClass("irs-disabled")
        }, remove: function () {
            this.$cache.cont.remove(), this.$cache.cont = null, this.$cache.line.off("keydown.irs_" + this.plugin_count), this.$cache.body.off("touchmove.irs_" + this.plugin_count), this.$cache.body.off("mousemove.irs_" + this.plugin_count), this.$cache.win.off("touchend.irs_" + this.plugin_count), this.$cache.win.off("mouseup.irs_" + this.plugin_count), l && (this.$cache.body.off("mouseup.irs_" + this.plugin_count), this.$cache.body.off("mouseleave.irs_" + this.plugin_count)), this.$cache.grid_labels = [], this.coords.big = [], this.coords.big_w = [], this.coords.big_p = [], this.coords.big_x = [], cancelAnimationFrame(this.raf_id)
        }, bindEvents: function () {
            this.no_diapason || (this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("focus.irs_" + this.plugin_count, this.pointerFocus.bind(this)), this.options.drag_interval && "double" === this.options.type ? (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"))) : (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), "single" === this.options.type ? (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))) : (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), this.options.keyboard && this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard")), l && (this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this))))
        }, pointerFocus: function (t) {
            if (!this.target) {
                var e = "single" === this.options.type ? this.$cache.single : this.$cache.from;
                t = e.offset().left, t += e.width() / 2 - 1, this.pointerClick("single", {
                    preventDefault: function () {
                    }, pageX: t
                })
            }
        }, pointerMove: function (t) {
            this.dragging && (this.coords.x_pointer = (t.pageX || t.originalEvent.touches && t.originalEvent.touches[0].pageX) - this.coords.x_gap, this.calc())
        }, pointerUp: function (e) {
            this.current_plugin === this.plugin_count && this.is_active && (this.is_active = !1, this.$cache.cont.find(".state_hover").removeClass("state_hover"), this.force_redraw = !0, l && t("*").prop("unselectable", !1), this.updateScene(), this.restoreOriginalMinInterval(), (t.contains(this.$cache.cont[0], e.target) || this.dragging) && this.callOnFinish(), this.dragging = !1)
        }, pointerDown: function (e, i) {
            i.preventDefault();
            var n = i.pageX || i.originalEvent.touches && i.originalEvent.touches[0].pageX;
            2 !== i.button && ("both" === e && this.setTempMinInterval(), e || (e = this.target || "from"), this.current_plugin = this.plugin_count, this.target = e, this.dragging = this.is_active = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = n - this.coords.x_gap, this.calcPointerPercent(), this.changeLevel(e), l && t("*").prop("unselectable", !0), this.$cache.line.trigger("focus"), this.updateScene())
        }, pointerClick: function (t, e) {
            e.preventDefault();
            var i = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
            2 !== e.button && (this.current_plugin = this.plugin_count, this.target = t, this.is_click = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = +(i - this.coords.x_gap).toFixed(), this.force_redraw = !0, this.calc(), this.$cache.line.trigger("focus"))
        }, key: function (t, e) {
            if (!(this.current_plugin !== this.plugin_count || e.altKey || e.ctrlKey || e.shiftKey || e.metaKey)) {
                switch (e.which) {
                    case 83:
                    case 65:
                    case 40:
                    case 37:
                        e.preventDefault(), this.moveByKey(!1);
                        break;
                    case 87:
                    case 68:
                    case 38:
                    case 39:
                        e.preventDefault(), this.moveByKey(!0)
                }
                return !0
            }
        }, moveByKey: function (t) {
            var e = this.coords.p_pointer, i = (this.options.max - this.options.min) / 100;
            i = this.options.step / i;
            this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * (t ? e + i : e - i)), this.is_key = !0, this.calc()
        }, setMinMax: function () {
            if (this.options) if (this.options.hide_min_max) this.$cache.min[0].style.display = "none", this.$cache.max[0].style.display = "none"; else {
                if (this.options.values.length) this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])), this.$cache.max.html(this.decorate(this.options.p_values[this.options.max])); else {
                    var t = this._prettify(this.options.min), e = this._prettify(this.options.max);
                    this.result.min_pretty = t, this.result.max_pretty = e, this.$cache.min.html(this.decorate(t, this.options.min)), this.$cache.max.html(this.decorate(e, this.options.max))
                }
                this.labels.w_min = this.$cache.min.outerWidth(!1), this.labels.w_max = this.$cache.max.outerWidth(!1)
            }
        }, setTempMinInterval: function () {
            var t = this.result.to - this.result.from;
            null === this.old_min_interval && (this.old_min_interval = this.options.min_interval), this.options.min_interval = t
        }, restoreOriginalMinInterval: function () {
            null !== this.old_min_interval && (this.options.min_interval = this.old_min_interval, this.old_min_interval = null)
        }, calc: function (t) {
            if (this.options && (this.calc_count++, (10 === this.calc_count || t) && (this.calc_count = 0, this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.calcHandlePercent()), this.coords.w_rs)) {
                switch (this.calcPointerPercent(), t = this.getHandleX(), "both" === this.target && (this.coords.p_gap = 0, t = this.getHandleX()), "click" === this.target && (this.coords.p_gap = this.coords.p_handle / 2, t = this.getHandleX(), this.target = this.options.drag_interval ? "both_one" : this.chooseHandle(t)), this.target) {
                    case"base":
                        var e = (this.options.max - this.options.min) / 100;
                        t = (this.result.from - this.options.min) / e, e = (this.result.to - this.options.min) / e, this.coords.p_single_real = this.toFixed(t), this.coords.p_from_real = this.toFixed(t), this.coords.p_to_real = this.toFixed(e), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real), this.target = null;
                        break;
                    case"single":
                        if (this.options.from_fixed) break;
                        this.coords.p_single_real = this.convertToRealPercent(t), this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
                        break;
                    case"from":
                        if (this.options.from_fixed) break;
                        this.coords.p_from_real = this.convertToRealPercent(t), this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real > this.coords.p_to_real && (this.coords.p_from_real = this.coords.p_to_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
                        break;
                    case"to":
                        if (this.options.to_fixed) break;
                        this.coords.p_to_real = this.convertToRealPercent(t), this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real < this.coords.p_from_real && (this.coords.p_to_real = this.coords.p_from_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                        break;
                    case"both":
                        if (this.options.from_fixed || this.options.to_fixed) break;
                        t = this.toFixed(t + .001 * this.coords.p_handle), this.coords.p_from_real = this.convertToRealPercent(t) - this.coords.p_gap_left, this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.convertToRealPercent(t) + this.coords.p_gap_right, this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                        break;
                    case"both_one":
                        if (!this.options.from_fixed && !this.options.to_fixed) {
                            var i = this.convertToRealPercent(t),
                                n = (t = this.result.to_percent - this.result.from_percent) / 2;
                            e = i - n, i = i + n;
                            0 > e && (i = (e = 0) + t), 100 < i && (e = (i = 100) - t), this.coords.p_from_real = this.calcWithStep(e), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.calcWithStep(i), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real)
                        }
                }
                "single" === this.options.type ? (this.coords.p_bar_x = this.coords.p_handle / 2, this.coords.p_bar_w = this.coords.p_single_fake, this.result.from_percent = this.coords.p_single_real, this.result.from = this.convertToValue(this.coords.p_single_real), this.result.from_pretty = this._prettify(this.result.from), this.options.values.length && (this.result.from_value = this.options.values[this.result.from])) : (this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2), this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake), this.result.from_percent = this.coords.p_from_real, this.result.from = this.convertToValue(this.coords.p_from_real), this.result.from_pretty = this._prettify(this.result.from), this.result.to_percent = this.coords.p_to_real, this.result.to = this.convertToValue(this.coords.p_to_real), this.result.to_pretty = this._prettify(this.result.to), this.options.values.length && (this.result.from_value = this.options.values[this.result.from], this.result.to_value = this.options.values[this.result.to])), this.calcMinMax(), this.calcLabels()
            }
        }, calcPointerPercent: function () {
            this.coords.w_rs ? (0 > this.coords.x_pointer || isNaN(this.coords.x_pointer) ? this.coords.x_pointer = 0 : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs), this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100)) : this.coords.p_pointer = 0
        }, convertToRealPercent: function (t) {
            return t / (100 - this.coords.p_handle) * 100
        }, convertToFakePercent: function (t) {
            return t / 100 * (100 - this.coords.p_handle)
        }, getHandleX: function () {
            var t = 100 - this.coords.p_handle, e = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
            return 0 > e ? e = 0 : e > t && (e = t), e
        }, calcHandlePercent: function () {
            this.coords.w_handle = "single" === this.options.type ? this.$cache.s_single.outerWidth(!1) : this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100)
        }, chooseHandle: function (t) {
            return "single" === this.options.type ? "single" : t >= this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2 ? this.options.to_fixed ? "from" : "to" : this.options.from_fixed ? "to" : "from"
        }, calcMinMax: function () {
            this.coords.w_rs && (this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100, this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100)
        }, calcLabels: function () {
            this.coords.w_rs && !this.options.hide_from_to && ("single" === this.options.type ? (this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2) : (this.labels.w_from = this.$cache.from.outerWidth(!1), this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs * 100, this.labels.p_from_left = this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2, this.labels.p_from_left = this.toFixed(this.labels.p_from_left), this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake), this.labels.w_to = this.$cache.to.outerWidth(!1), this.labels.p_to_fake = this.labels.w_to / this.coords.w_rs * 100, this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2, this.labels.p_to_left = this.toFixed(this.labels.p_to_left), this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake), this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2, this.labels.p_single_left = this.toFixed(this.labels.p_single_left)), this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake))
        }, updateScene: function () {
            this.raf_id && (cancelAnimationFrame(this.raf_id), this.raf_id = null), clearTimeout(this.update_tm), this.update_tm = null, this.options && (this.drawHandles(), this.is_active ? this.raf_id = requestAnimationFrame(this.updateScene.bind(this)) : this.update_tm = setTimeout(this.updateScene.bind(this), 300))
        }, drawHandles: function () {
            this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_rs !== this.coords.w_rs_old && (this.target = "base", this.is_resize = !0), (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) && (this.setMinMax(), this.calc(!0), this.drawLabels(), this.options.grid && (this.calcGridMargin(), this.calcGridLabels()), this.force_redraw = !0, this.coords.w_rs_old = this.coords.w_rs, this.drawShadow()), this.coords.w_rs && (this.dragging || this.force_redraw || this.is_key) && ((this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) && (this.drawLabels(), this.$cache.bar[0].style.left = this.coords.p_bar_x + "%", this.$cache.bar[0].style.width = this.coords.p_bar_w + "%", "single" === this.options.type ? this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%" : (this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%", this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%", (this.old_from !== this.result.from || this.force_redraw) && (this.$cache.from[0].style.left = this.labels.p_from_left + "%"), (this.old_to !== this.result.to || this.force_redraw) && (this.$cache.to[0].style.left = this.labels.p_to_left + "%")), this.$cache.single[0].style.left = this.labels.p_single_left + "%", this.writeToInput(), this.old_from === this.result.from && this.old_to === this.result.to || this.is_start || (this.$cache.input.trigger("change"), this.$cache.input.trigger("input")), this.old_from = this.result.from, this.old_to = this.result.to, this.is_resize || this.is_update || this.is_start || this.is_finish || this.callOnChange(), (this.is_key || this.is_click) && (this.is_click = this.is_key = !1, this.callOnFinish()), this.is_finish = this.is_resize = this.is_update = !1), this.force_redraw = this.is_click = this.is_key = this.is_start = !1))
        }, drawLabels: function () {
            if (this.options) {
                var t = this.options.values.length, e = this.options.p_values;
                if (!this.options.hide_from_to) if ("single" === this.options.type) {
                    if (t) t = this.decorate(e[this.result.from]); else {
                        var i = this._prettify(this.result.from);
                        t = this.decorate(i, this.result.from)
                    }
                    this.$cache.single.html(t), this.calcLabels(), this.$cache.min[0].style.visibility = this.labels.p_single_left < this.labels.p_min + 1 ? "hidden" : "visible", this.$cache.max[0].style.visibility = this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1 ? "hidden" : "visible"
                } else {
                    t ? (this.options.decorate_both ? (t = this.decorate(e[this.result.from]), t += this.options.values_separator, t += this.decorate(e[this.result.to])) : t = this.decorate(e[this.result.from] + this.options.values_separator + e[this.result.to]), i = this.decorate(e[this.result.from]), e = this.decorate(e[this.result.to])) : (i = this._prettify(this.result.from), e = this._prettify(this.result.to), this.options.decorate_both ? (t = this.decorate(i, this.result.from), t += this.options.values_separator, t += this.decorate(e, this.result.to)) : t = this.decorate(i + this.options.values_separator + e, this.result.to), i = this.decorate(i, this.result.from), e = this.decorate(e, this.result.to)), this.$cache.single.html(t), this.$cache.from.html(i), this.$cache.to.html(e), this.calcLabels(), t = Math.min(this.labels.p_single_left, this.labels.p_from_left), i = this.labels.p_single_left + this.labels.p_single_fake;
                    e = this.labels.p_to_left + this.labels.p_to_fake;
                    var n = Math.max(i, e);
                    this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left ? (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", this.result.from === this.result.to ? ("from" === this.target ? this.$cache.from[0].style.visibility = "visible" : "to" === this.target ? this.$cache.to[0].style.visibility = "visible" : this.target || (this.$cache.from[0].style.visibility = "visible"), this.$cache.single[0].style.visibility = "hidden", n = e) : (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", n = Math.max(i, e))) : (this.$cache.from[0].style.visibility = "visible", this.$cache.to[0].style.visibility = "visible", this.$cache.single[0].style.visibility = "hidden"), this.$cache.min[0].style.visibility = t < this.labels.p_min + 1 ? "hidden" : "visible", this.$cache.max[0].style.visibility = n > 100 - this.labels.p_max - 1 ? "hidden" : "visible"
                }
            }
        }, drawShadow: function () {
            var t = this.options, e = this.$cache, i = "number" == typeof t.from_min && !isNaN(t.from_min),
                n = "number" == typeof t.from_max && !isNaN(t.from_max),
                s = "number" == typeof t.to_min && !isNaN(t.to_min),
                o = "number" == typeof t.to_max && !isNaN(t.to_max);
            "single" === t.type ? t.from_shadow && (i || n) ? (i = this.convertToPercent(i ? t.from_min : t.min), n = this.convertToPercent(n ? t.from_max : t.max) - i, i = this.toFixed(i - this.coords.p_handle / 100 * i), n = this.toFixed(n - this.coords.p_handle / 100 * n), i += this.coords.p_handle / 2, e.shad_single[0].style.display = "block", e.shad_single[0].style.left = i + "%", e.shad_single[0].style.width = n + "%") : e.shad_single[0].style.display = "none" : (t.from_shadow && (i || n) ? (i = this.convertToPercent(i ? t.from_min : t.min), n = this.convertToPercent(n ? t.from_max : t.max) - i, i = this.toFixed(i - this.coords.p_handle / 100 * i), n = this.toFixed(n - this.coords.p_handle / 100 * n), i += this.coords.p_handle / 2, e.shad_from[0].style.display = "block", e.shad_from[0].style.left = i + "%", e.shad_from[0].style.width = n + "%") : e.shad_from[0].style.display = "none", t.to_shadow && (s || o) ? (s = this.convertToPercent(s ? t.to_min : t.min), t = this.convertToPercent(o ? t.to_max : t.max) - s, s = this.toFixed(s - this.coords.p_handle / 100 * s), t = this.toFixed(t - this.coords.p_handle / 100 * t), s += this.coords.p_handle / 2, e.shad_to[0].style.display = "block", e.shad_to[0].style.left = s + "%", e.shad_to[0].style.width = t + "%") : e.shad_to[0].style.display = "none")
        }, writeToInput: function () {
            "single" === this.options.type ? (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value) : this.$cache.input.prop("value", this.result.from), this.$cache.input.data("from", this.result.from)) : (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value) : this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to), this.$cache.input.data("from", this.result.from), this.$cache.input.data("to", this.result.to))
        }, callOnStart: function () {
            this.writeToInput(), this.options.onStart && "function" == typeof this.options.onStart && (this.options.scope ? this.options.onStart.call(this.options.scope, this.result) : this.options.onStart(this.result))
        }, callOnChange: function () {
            this.writeToInput(), this.options.onChange && "function" == typeof this.options.onChange && (this.options.scope ? this.options.onChange.call(this.options.scope, this.result) : this.options.onChange(this.result))
        }, callOnFinish: function () {
            this.writeToInput(), this.options.onFinish && "function" == typeof this.options.onFinish && (this.options.scope ? this.options.onFinish.call(this.options.scope, this.result) : this.options.onFinish(this.result))
        }, callOnUpdate: function () {
            this.writeToInput(), this.options.onUpdate && "function" == typeof this.options.onUpdate && (this.options.scope ? this.options.onUpdate.call(this.options.scope, this.result) : this.options.onUpdate(this.result))
        }, toggleInput: function () {
            this.$cache.input.toggleClass("irs-hidden-input"), this.has_tab_index ? this.$cache.input.prop("tabindex", -1) : this.$cache.input.removeProp("tabindex"), this.has_tab_index = !this.has_tab_index
        }, convertToPercent: function (t, e) {
            var i = this.options.max - this.options.min;
            return i ? this.toFixed((e ? t : t - this.options.min) / (i / 100)) : (this.no_diapason = !0, 0)
        }, convertToValue: function (t) {
            var e, i, n = this.options.min, s = this.options.max, o = n.toString().split(".")[1],
                r = s.toString().split(".")[1], a = 0, l = 0;
            return 0 === t ? this.options.min : 100 === t ? this.options.max : (o && (a = e = o.length), r && (a = i = r.length), e && i && (a = e >= i ? e : i), 0 > n && (n = +(n + (l = Math.abs(n))).toFixed(a), s = +(s + l).toFixed(a)), t = (s - n) / 100 * t + n, (n = this.options.step.toString().split(".")[1]) ? t = +t.toFixed(n.length) : (t /= this.options.step, t = +(t *= this.options.step).toFixed(0)), l && (t -= l), (l = n ? +t.toFixed(n.length) : this.toFixed(t)) < this.options.min ? l = this.options.min : l > this.options.max && (l = this.options.max), l)
        }, calcWithStep: function (t) {
            var e = Math.round(t / this.coords.p_step) * this.coords.p_step;
            return 100 < e && (e = 100), 100 === t && (e = 100), this.toFixed(e)
        }, checkMinInterval: function (t, e, i) {
            var n = this.options;
            return n.min_interval ? (t = this.convertToValue(t), e = this.convertToValue(e), "from" === i ? e - t < n.min_interval && (t = e - n.min_interval) : t - e < n.min_interval && (t = e + n.min_interval), this.convertToPercent(t)) : t
        }, checkMaxInterval: function (t, e, i) {
            var n = this.options;
            return n.max_interval ? (t = this.convertToValue(t), e = this.convertToValue(e), "from" === i ? e - t > n.max_interval && (t = e - n.max_interval) : t - e > n.max_interval && (t = e + n.max_interval), this.convertToPercent(t)) : t
        }, checkDiapason: function (t, e, i) {
            t = this.convertToValue(t);
            var n = this.options;
            return "number" != typeof e && (e = n.min), "number" != typeof i && (i = n.max), t < e && (t = e), t > i && (t = i), this.convertToPercent(t)
        }, toFixed: function (t) {
            return +(t = t.toFixed(20))
        }, _prettify: function (t) {
            return this.options.prettify_enabled ? this.options.prettify && "function" == typeof this.options.prettify ? this.options.prettify(t) : this.prettify(t) : t
        }, prettify: function (t) {
            return t.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator)
        }, checkEdges: function (t, e) {
            return this.options.force_edges ? (0 > t ? t = 0 : t > 100 - e && (t = 100 - e), this.toFixed(t)) : this.toFixed(t)
        }, validate: function () {
            var t, e = this.options, i = this.result, n = e.values, s = n.length;
            if ("string" == typeof e.min && (e.min = +e.min), "string" == typeof e.max && (e.max = +e.max), "string" == typeof e.from && (e.from = +e.from), "string" == typeof e.to && (e.to = +e.to), "string" == typeof e.step && (e.step = +e.step), "string" == typeof e.from_min && (e.from_min = +e.from_min), "string" == typeof e.from_max && (e.from_max = +e.from_max), "string" == typeof e.to_min && (e.to_min = +e.to_min), "string" == typeof e.to_max && (e.to_max = +e.to_max), "string" == typeof e.grid_num && (e.grid_num = +e.grid_num), e.max < e.min && (e.max = e.min), s) for (e.p_values = [], e.min = 0, e.max = s - 1, e.step = 1, e.grid_num = e.max, e.grid_snap = !0, t = 0; t < s; t++) {
                var o = +n[t];
                isNaN(o) ? o = n[t] : (n[t] = o, o = this._prettify(o)), e.p_values.push(o)
            }
            ("number" != typeof e.from || isNaN(e.from)) && (e.from = e.min), ("number" != typeof e.to || isNaN(e.to)) && (e.to = e.max), "single" === e.type ? (e.from < e.min && (e.from = e.min), e.from > e.max && (e.from = e.max)) : (e.from < e.min && (e.from = e.min), e.from > e.max && (e.from = e.max), e.to < e.min && (e.to = e.min), e.to > e.max && (e.to = e.max), this.update_check.from && (this.update_check.from !== e.from && e.from > e.to && (e.from = e.to), this.update_check.to !== e.to && e.to < e.from && (e.to = e.from)), e.from > e.to && (e.from = e.to), e.to < e.from && (e.to = e.from)), ("number" != typeof e.step || isNaN(e.step) || !e.step || 0 > e.step) && (e.step = 1), "number" == typeof e.from_min && e.from < e.from_min && (e.from = e.from_min), "number" == typeof e.from_max && e.from > e.from_max && (e.from = e.from_max), "number" == typeof e.to_min && e.to < e.to_min && (e.to = e.to_min), "number" == typeof e.to_max && e.from > e.to_max && (e.to = e.to_max), i && (i.min !== e.min && (i.min = e.min), i.max !== e.max && (i.max = e.max), (i.from < i.min || i.from > i.max) && (i.from = e.from), (i.to < i.min || i.to > i.max) && (i.to = e.to)), ("number" != typeof e.min_interval || isNaN(e.min_interval) || !e.min_interval || 0 > e.min_interval) && (e.min_interval = 0), ("number" != typeof e.max_interval || isNaN(e.max_interval) || !e.max_interval || 0 > e.max_interval) && (e.max_interval = 0), e.min_interval && e.min_interval > e.max - e.min && (e.min_interval = e.max - e.min), e.max_interval && e.max_interval > e.max - e.min && (e.max_interval = e.max - e.min)
        }, decorate: function (t, e) {
            var i = "", n = this.options;
            return n.prefix && (i += n.prefix), i += t, n.max_postfix && (n.values.length && t === n.p_values[n.max] ? (i += n.max_postfix, n.postfix && (i += " ")) : e === n.max && (i += n.max_postfix, n.postfix && (i += " "))), n.postfix && (i += n.postfix), i
        }, updateFrom: function () {
            this.result.from = this.options.from, this.result.from_percent = this.convertToPercent(this.result.from), this.result.from_pretty = this._prettify(this.result.from), this.options.values && (this.result.from_value = this.options.values[this.result.from])
        }, updateTo: function () {
            this.result.to = this.options.to, this.result.to_percent = this.convertToPercent(this.result.to), this.result.to_pretty = this._prettify(this.result.to), this.options.values && (this.result.to_value = this.options.values[this.result.to])
        }, updateResult: function () {
            this.result.min = this.options.min, this.result.max = this.options.max, this.updateFrom(), this.updateTo()
        }, appendGrid: function () {
            if (this.options.grid) {
                var t, e = this.options, i = e.max - e.min, n = e.grid_num, s = 4, o = "";
                if (this.calcGridMargin(), e.grid_snap) if (50 < i) {
                    n = 50 / e.step;
                    var r = this.toFixed(e.step / .5)
                } else n = i / e.step, r = this.toFixed(e.step / (i / 100)); else r = this.toFixed(100 / n);
                for (4 < n && (s = 3), 7 < n && (s = 2), 14 < n && (s = 1), 28 < n && (s = 0), i = 0; i < n + 1; i++) {
                    var a = s, l = this.toFixed(r * i);
                    100 < l && (l = 100), this.coords.big[i] = l;
                    var h = (l - r * (i - 1)) / (a + 1);
                    for (t = 1; t <= a && 0 !== l; t++) {
                        o += '<span class="irs-grid-pol small" style="left: ' + this.toFixed(l - h * t) + '%"></span>'
                    }
                    o += '<span class="irs-grid-pol" style="left: ' + l + '%"></span>', t = this.convertToValue(l), o += '<span class="irs-grid-text js-grid-text-' + i + '" style="left: ' + l + '%">' + (t = e.values.length ? e.p_values[t] : this._prettify(t)) + "</span>"
                }
                this.coords.big_num = Math.ceil(n + 1), this.$cache.cont.addClass("irs-with-grid"), this.$cache.grid.html(o), this.cacheGridLabels()
            }
        }, cacheGridLabels: function () {
            var t, e = this.coords.big_num;
            for (t = 0; t < e; t++) {
                var i = this.$cache.grid.find(".js-grid-text-" + t);
                this.$cache.grid_labels.push(i)
            }
            this.calcGridLabels()
        }, calcGridLabels: function () {
            var t, e = [], i = [], n = this.coords.big_num;
            for (t = 0; t < n; t++) this.coords.big_w[t] = this.$cache.grid_labels[t].outerWidth(!1), this.coords.big_p[t] = this.toFixed(this.coords.big_w[t] / this.coords.w_rs * 100), this.coords.big_x[t] = this.toFixed(this.coords.big_p[t] / 2), e[t] = this.toFixed(this.coords.big[t] - this.coords.big_x[t]), i[t] = this.toFixed(e[t] + this.coords.big_p[t]);
            for (this.options.force_edges && (e[0] < -this.coords.grid_gap && (e[0] = -this.coords.grid_gap, i[0] = this.toFixed(e[0] + this.coords.big_p[0]), this.coords.big_x[0] = this.coords.grid_gap), i[n - 1] > 100 + this.coords.grid_gap && (i[n - 1] = 100 + this.coords.grid_gap, e[n - 1] = this.toFixed(i[n - 1] - this.coords.big_p[n - 1]), this.coords.big_x[n - 1] = this.toFixed(this.coords.big_p[n - 1] - this.coords.grid_gap))), this.calcGridCollision(2, e, i), this.calcGridCollision(4, e, i), t = 0; t < n; t++) e = this.$cache.grid_labels[t][0], this.coords.big_x[t] !== Number.POSITIVE_INFINITY && (e.style.marginLeft = -this.coords.big_x[t] + "%")
        }, calcGridCollision: function (t, e, i) {
            var n, s = this.coords.big_num;
            for (n = 0; n < s; n += t) {
                var o = n + t / 2;
                if (o >= s) break;
                this.$cache.grid_labels[o][0].style.visibility = i[n] <= e[o] ? "visible" : "hidden"
            }
        }, calcGridMargin: function () {
            this.options.grid_margin && (this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_handle = "single" === this.options.type ? this.$cache.s_single.outerWidth(!1) : this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100), this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - .1), this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%", this.$cache.grid[0].style.left = this.coords.grid_gap + "%"))
        }, update: function (e) {
            this.input && (this.is_update = !0, this.options.from = this.result.from, this.options.to = this.result.to, this.update_check.from = this.result.from, this.update_check.to = this.result.to, this.options = t.extend(this.options, e), this.validate(), this.updateResult(e), this.toggleInput(), this.remove(), this.init(!0))
        }, reset: function () {
            this.input && (this.updateResult(), this.update())
        }, destroy: function () {
            this.input && (this.toggleInput(), this.$cache.input.prop("readonly", !1), t.data(this.input, "ionRangeSlider", null), this.remove(), this.options = this.input = null)
        }
    }, t.fn.ionRangeSlider = function (e) {
        return this.each(function () {
            t.data(this, "ionRangeSlider") || t.data(this, "ionRangeSlider", new h(this, e, a++))
        })
    }, function () {
        for (var t = 0, e = ["ms", "moz", "webkit", "o"], n = 0; n < e.length && !i.requestAnimationFrame; ++n) i.requestAnimationFrame = i[e[n] + "RequestAnimationFrame"], i.cancelAnimationFrame = i[e[n] + "CancelAnimationFrame"] || i[e[n] + "CancelRequestAnimationFrame"];
        i.requestAnimationFrame || (i.requestAnimationFrame = function (e, n) {
            var s = (new Date).getTime(), o = Math.max(0, 16 - (s - t)), r = i.setTimeout(function () {
                e(s + o)
            }, o);
            return t = s + o, r
        }), i.cancelAnimationFrame || (i.cancelAnimationFrame = function (t) {
            clearTimeout(t)
        })
    }()
}), function (t, e, i, n) {
    function s(e, i) {
        this.settings = null, this.options = t.extend({}, s.Defaults, i), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {start: null, current: null},
            direction: null
        }, this._states = {
            current: {},
            tags: {initializing: ["busy"], animating: ["busy"], dragging: ["interacting"]}
        }, t.each(["onResize", "onThrottledResize"], t.proxy(function (e, i) {
            this._handlers[i] = t.proxy(this[i], this)
        }, this)), t.each(s.Plugins, t.proxy(function (t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
        }, this)), t.each(s.Workers, t.proxy(function (e, i) {
            this._pipe.push({filter: i.filter, run: t.proxy(i.run, this)})
        }, this)), this.setup(), this.initialize()
    }

    s.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: e,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, s.Width = {Default: "default", Inner: "inner", Outer: "outer"}, s.Type = {
        Event: "event",
        State: "state"
    }, s.Plugins = {}, s.Workers = [{
        filter: ["width", "settings"], run: function () {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"], run: function () {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            var e = this.settings.margin || "", i = !this.settings.autoWidth, n = this.settings.rtl,
                s = {width: "auto", "margin-left": n ? e : "", "margin-right": n ? "" : e};
            !i && this.$stage.children().css(s), t.css = s
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, i = null,
                n = this._items.length, s = !this.settings.autoWidth, o = [];
            for (t.items = {
                merge: !1,
                width: e
            }; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = i > 1 || t.items.merge, o[n] = s ? e * i : this._items[n].width();
            this._widths = o
        }
    }, {
        filter: ["items", "settings"], run: function () {
            var e = [], i = this._items, n = this.settings, s = Math.max(2 * n.items, 4),
                o = 2 * Math.ceil(i.length / 2), r = n.loop && i.length ? n.rewind ? s : Math.max(s, o) : 0, a = "",
                l = "";
            for (r /= 2; r > 0;) e.push(this.normalize(e.length / 2, !0)), a += i[e[e.length - 1]][0].outerHTML, e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), l = i[e[e.length - 1]][0].outerHTML + l, r -= 1;
            this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, n = 0, s = 0, o = []; ++i < e;) n = o[i - 1] || 0, s = this._widths[this.relative(i)] + this.settings.margin, o.push(n + s * t);
            this._coordinates = o
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            var t = this.settings.stagePadding, e = this._coordinates, i = {
                width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                "padding-left": t || "",
                "padding-right": t || ""
            };
            this.$stage.css(i)
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            var e = this._coordinates.length, i = !this.settings.autoWidth, n = this.$stage.children();
            if (i && t.items.merge) for (; e--;) t.css.width = this._widths[this.relative(e)], n.eq(e).css(t.css); else i && (t.css.width = t.items.width, n.css(t.css))
        }
    }, {
        filter: ["items"], run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
        }
    }, {
        filter: ["position"], run: function () {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"], run: function () {
            var t, e, i, n, s = this.settings.rtl ? 1 : -1, o = 2 * this.settings.stagePadding,
                r = this.coordinates(this.current()) + o, a = r + this.width() * s, l = [];
            for (i = 0, n = this._coordinates.length; i < n; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * s, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && l.push(i);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }], s.prototype.initializeStage = function () {
        this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ">", {class: this.settings.stageClass}).wrap(t("<div/>", {class: this.settings.stageOuterClass})), this.$element.append(this.$stage.parent()))
    }, s.prototype.initializeItems = function () {
        var e = this.$element.find(".owl-item");
        if (e.length) return this._items = e.get().map(function (e) {
            return t(e)
        }), this._mergers = this._items.map(function () {
            return 1
        }), void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
    }, s.prototype.initialize = function () {
        var t, e, i;
        (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n, i = this.$element.children(e).width(), t.length && i <= 0 && this.preloadAutoWidthImages(t));
        this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, s.prototype.isVisible = function () {
        return !this.settings.checkVisibility || this.$element.is(":visible")
    }, s.prototype.setup = function () {
        var e = this.viewport(), i = this.options.responsive, n = -1, s = null;
        i ? (t.each(i, function (t) {
            t <= e && t > n && (n = Number(t))
        }), "function" == typeof (s = t.extend({}, this.options, i[n])).stagePadding && (s.stagePadding = s.stagePadding()), delete s.responsive, s.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : s = t.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: s
            }
        }), this._breakpoint = n, this.settings = s, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, s.prototype.optionsLogic = function () {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, s.prototype.prepare = function (e) {
        var i = this.trigger("prepare", {content: e});
        return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {content: i.data}), i.data
    }, s.prototype.update = function () {
        for (var e = 0, i = this._pipe.length, n = t.proxy(function (t) {
            return this[t]
        }, this._invalidated), s = {}; e < i;) (this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(s), e++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, s.prototype.width = function (t) {
        switch (t = t || s.Width.Default) {
            case s.Width.Inner:
            case s.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, s.prototype.refresh = function () {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, s.prototype.onThrottledResize = function () {
        e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, s.prototype.onResize = function () {
        return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
    }, s.prototype.registerEventHandlers = function () {
        t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
    }, s.prototype.onDragStart = function (e) {
        var n = null;
        3 !== e.which && (t.support.transform ? n = {
            x: (n = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === n.length ? 12 : 4],
            y: n[16 === n.length ? 13 : 5]
        } : (n = this.$stage.position(), n = {
            x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left,
            y: n.top
        }), this.is("animating") && (t.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = n, this._drag.stage.current = n, this._drag.pointer = this.pointer(e), t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy(function (e) {
            var n = this.difference(this._drag.pointer, this.pointer(e));
            t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(n.x) < Math.abs(n.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, s.prototype.onDragMove = function (t) {
        var e = null, i = null, n = null, s = this.difference(this._drag.pointer, this.pointer(t)),
            o = this.difference(this._drag.stage.start, s);
        this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, o.x = ((o.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * s.x / 5 : 0, o.x = Math.max(Math.min(o.x, e + n), i + n)), this._drag.stage.current = o, this.animate(o.x))
    }, s.prototype.onDragEnd = function (e) {
        var n = this.difference(this._drag.pointer, this.pointer(e)), s = this._drag.stage.current,
            o = n.x > 0 ^ this.settings.rtl ? "left" : "right";
        t(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== n.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(s.x, 0 !== n.x ? o : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = o, (Math.abs(n.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, s.prototype.closest = function (e, i) {
        var s = -1, o = this.width(), r = this.coordinates();
        return this.settings.freeDrag || t.each(r, t.proxy(function (t, a) {
            return "left" === i && e > a - 30 && e < a + 30 ? s = t : "right" === i && e > a - o - 30 && e < a - o + 30 ? s = t + 1 : this.op(e, "<", a) && this.op(e, ">", r[t + 1] !== n ? r[t + 1] : a - o) && (s = "left" === i ? t + 1 : t), -1 === s
        }, this)), this.settings.loop || (this.op(e, ">", r[this.minimum()]) ? s = e = this.minimum() : this.op(e, "<", r[this.maximum()]) && (s = e = this.maximum())), s
    }, s.prototype.animate = function (e) {
        var i = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
        }) : i ? this.$stage.animate({left: e + "px"}, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({left: e + "px"})
    }, s.prototype.is = function (t) {
        return this._states.current[t] && this._states.current[t] > 0
    }, s.prototype.current = function (t) {
        if (t === n) return this._current;
        if (0 === this._items.length) return n;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {property: {name: "position", value: t}});
            e.data !== n && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, s.prototype.invalidate = function (e) {
        return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function (t, e) {
            return e
        })
    }, s.prototype.reset = function (t) {
        (t = this.normalize(t)) !== n && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, s.prototype.normalize = function (t, e) {
        var i = this._items.length, s = e ? 0 : this._clones.length;
        return !this.isNumeric(t) || i < 1 ? t = n : (t < 0 || t >= i + s) && (t = ((t - s / 2) % i + i) % i + s / 2), t
    }, s.prototype.relative = function (t) {
        return t -= this._clones.length / 2, this.normalize(t, !0)
    }, s.prototype.maximum = function (t) {
        var e, i, n, s = this.settings, o = this._coordinates.length;
        if (s.loop) o = this._clones.length / 2 + this._items.length - 1; else if (s.autoWidth || s.merge) {
            if (e = this._items.length) for (i = this._items[--e].width(), n = this.$element.width(); e-- && !((i += this._items[e].width() + this.settings.margin) > n);) ;
            o = e + 1
        } else o = s.center ? this._items.length - 1 : this._items.length - s.items;
        return t && (o -= this._clones.length / 2), Math.max(o, 0)
    }, s.prototype.minimum = function (t) {
        return t ? 0 : this._clones.length / 2
    }, s.prototype.items = function (t) {
        return t === n ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, s.prototype.mergers = function (t) {
        return t === n ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, s.prototype.clones = function (e) {
        var i = this._clones.length / 2, s = i + this._items.length, o = function (t) {
            return t % 2 == 0 ? s + t / 2 : i - (t + 1) / 2
        };
        return e === n ? t.map(this._clones, function (t, e) {
            return o(e)
        }) : t.map(this._clones, function (t, i) {
            return t === e ? o(i) : null
        })
    }, s.prototype.speed = function (t) {
        return t !== n && (this._speed = t), this._speed
    }, s.prototype.coordinates = function (e) {
        var i, s = 1, o = e - 1;
        return e === n ? t.map(this._coordinates, t.proxy(function (t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (this.settings.rtl && (s = -1, o = e + 1), i = this._coordinates[e], i += (this.width() - i + (this._coordinates[o] || 0)) / 2 * s) : i = this._coordinates[o] || 0, i = Math.ceil(i))
    }, s.prototype.duration = function (t, e, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, s.prototype.to = function (t, e) {
        var i = this.current(), n = null, s = t - this.relative(i), o = (s > 0) - (s < 0), r = this._items.length,
            a = this.minimum(), l = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(s) > r / 2 && (s += -1 * o * r), (n = (((t = i + s) - a) % r + r) % r + a) !== t && n - s <= l && n - s > 0 && (i = n - s, t = n, this.reset(i))) : this.settings.rewind ? t = (t % (l += 1) + l) % l : t = Math.max(a, Math.min(l, t)), this.speed(this.duration(i, t, e)), this.current(t), this.isVisible() && this.update()
    }, s.prototype.next = function (t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, s.prototype.prev = function (t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, s.prototype.onTransitionEnd = function (t) {
        if (t !== n && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, s.prototype.viewport = function () {
        var n;
        return this.options.responsiveBaseElement !== e ? n = t(this.options.responsiveBaseElement).width() : e.innerWidth ? n = e.innerWidth : i.documentElement && i.documentElement.clientWidth ? n = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), n
    }, s.prototype.replace = function (e) {
        this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function () {
            return 1 === this.nodeType
        }).each(t.proxy(function (t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, s.prototype.add = function (e, i) {
        var s = this.relative(this._current);
        i = i === n ? this._items.length : this.normalize(i, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
            content: e,
            position: i
        }), e = this.prepare(e), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[i - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(e), this._items.splice(i, 0, e), this._mergers.splice(i, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[s] && this.reset(this._items[s].index()), this.invalidate("items"), this.trigger("added", {
            content: e,
            position: i
        })
    }, s.prototype.remove = function (t) {
        (t = this.normalize(t, !0)) !== n && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, s.prototype.preloadAutoWidthImages = function (e) {
        e.each(t.proxy(function (e, i) {
            this.enter("pre-loading"), i = t(i), t(new Image).one("load", t.proxy(function (t) {
                i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
        }, this))
    }, s.prototype.destroy = function () {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(i).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize));
        for (var n in this._plugins) this._plugins[n].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, s.prototype.op = function (t, e, i) {
        var n = this.settings.rtl;
        switch (e) {
            case"<":
                return n ? t > i : t < i;
            case">":
                return n ? t < i : t > i;
            case">=":
                return n ? t <= i : t >= i;
            case"<=":
                return n ? t >= i : t <= i
        }
    }, s.prototype.on = function (t, e, i, n) {
        t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
    }, s.prototype.off = function (t, e, i, n) {
        t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
    }, s.prototype.trigger = function (e, i, n, o, r) {
        var a = {item: {count: this._items.length, index: this.current()}},
            l = t.camelCase(t.grep(["on", e, n], function (t) {
                return t
            }).join("-").toLowerCase()),
            h = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({relatedTarget: this}, a, i));
        return this._supress[e] || (t.each(this._plugins, function (t, e) {
            e.onTrigger && e.onTrigger(h)
        }), this.register({
            type: s.Type.Event,
            name: e
        }), this.$element.trigger(h), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, h)), h
    }, s.prototype.enter = function (e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function (t, e) {
            this._states.current[e] === n && (this._states.current[e] = 0), this._states.current[e]++
        }, this))
    }, s.prototype.leave = function (e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function (t, e) {
            this._states.current[e]--
        }, this))
    }, s.prototype.register = function (e) {
        if (e.type === s.Type.Event) {
            if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                var i = t.event.special[e.name]._default;
                t.event.special[e.name]._default = function (t) {
                    return !i || !i.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
                }, t.event.special[e.name].owl = !0
            }
        } else e.type === s.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function (i, n) {
            return t.inArray(i, this._states.tags[e.name]) === n
        }, this)))
    }, s.prototype.suppress = function (e) {
        t.each(e, t.proxy(function (t, e) {
            this._supress[e] = !0
        }, this))
    }, s.prototype.release = function (e) {
        t.each(e, t.proxy(function (t, e) {
            delete this._supress[e]
        }, this))
    }, s.prototype.pointer = function (t) {
        var i = {x: null, y: null};
        return (t = (t = t.originalEvent || t || e.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (i.x = t.pageX, i.y = t.pageY) : (i.x = t.clientX, i.y = t.clientY), i
    }, s.prototype.isNumeric = function (t) {
        return !isNaN(parseFloat(t))
    }, s.prototype.difference = function (t, e) {
        return {x: t.x - e.x, y: t.y - e.y}
    }, t.fn.owlCarousel = function (e) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var n = t(this), o = n.data("owl.carousel");
            o || (o = new s(this, "object" == typeof e && e), n.data("owl.carousel", o), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (e, i) {
                o.register({
                    type: s.Type.Event,
                    name: i
                }), o.$element.on(i + ".owl.carousel.core", t.proxy(function (t) {
                    t.namespace && t.relatedTarget !== this && (this.suppress([i]), o[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                }, o))
            })), "string" == typeof e && "_" !== e.charAt(0) && o[e].apply(o, i)
        })
    }, t.fn.owlCarousel.Constructor = s
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    var s = function (e) {
        this._core = e, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    s.Defaults = {autoRefresh: !0, autoRefreshInterval: 500}, s.prototype.watch = function () {
        this._interval || (this._visible = this._core.isVisible(), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, s.prototype.refresh = function () {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, s.prototype.destroy = function () {
        var t, i;
        e.clearInterval(this._interval);
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = s
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    var s = function (e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function (e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) {
                    var i = this._core.settings, n = i.center && Math.ceil(i.items / 2) || i.items,
                        s = i.center && -1 * n || 0,
                        o = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + s,
                        r = this._core.clones().length, a = t.proxy(function (t, e) {
                            this.load(e)
                        }, this);
                    for (i.lazyLoadEager > 0 && (n += i.lazyLoadEager, i.loop && (o -= i.lazyLoadEager, n++)); s++ < n;) this.load(r / 2 + this._core.relative(o)), r && t.each(this._core.clones(this._core.relative(o)), a), o++
                }
            }, this)
        }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    s.Defaults = {lazyLoad: !1, lazyLoadEager: 0}, s.prototype.load = function (i) {
        var n = this._core.$stage.children().eq(i), s = n && n.find(".owl-lazy");
        !s || t.inArray(n.get(0), this._loaded) > -1 || (s.each(t.proxy(function (i, n) {
            var s, o = t(n),
                r = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src") || o.attr("data-srcset");
            this._core.trigger("load", {
                element: o,
                url: r
            }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function () {
                o.css("opacity", 1), this._core.trigger("loaded", {element: o, url: r}, "lazy")
            }, this)).attr("src", r) : o.is("source") ? o.one("load.owl.lazy", t.proxy(function () {
                this._core.trigger("loaded", {element: o, url: r}, "lazy")
            }, this)).attr("srcset", r) : ((s = new Image).onload = t.proxy(function () {
                o.css({"background-image": 'url("' + r + '")', opacity: "1"}), this._core.trigger("loaded", {
                    element: o,
                    url: r
                }, "lazy")
            }, this), s.src = r)
        }, this)), this._loaded.push(n.get(0)))
    }, s.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = s
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    var s = function (i) {
        this._core = i, this._previousHeight = null, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && this.update()
            }, this), "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update()
            }, this), "loaded.owl.lazy": t.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
        var n = this;
        t(e).on("load", function () {
            n._core.settings.autoHeight && n.update()
        }), t(e).resize(function () {
            n._core.settings.autoHeight && (null != n._intervalId && clearTimeout(n._intervalId), n._intervalId = setTimeout(function () {
                n.update()
            }, 250))
        })
    };
    s.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}, s.prototype.update = function () {
        var e = this._core._current, i = e + this._core.settings.items, n = this._core.settings.lazyLoad,
            s = this._core.$stage.children().toArray().slice(e, i), o = [], r = 0;
        t.each(s, function (e, i) {
            o.push(t(i).height())
        }), (r = Math.max.apply(null, o)) <= 1 && n && this._previousHeight && (r = this._previousHeight), this._previousHeight = r, this._core.$stage.parent().height(r).addClass(this._core.settings.autoHeightClass)
    }, s.prototype.destroy = function () {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = s
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    var s = function (e) {
        this._core = e, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.register({type: "state", name: "playing", tags: ["interacting"]})
            }, this), "resize.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
            }, this), "refreshed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this), "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && "position" === t.property.name && this._playing && this.stop()
            }, this), "prepared.owl.carousel": t.proxy(function (e) {
                if (e.namespace) {
                    var i = t(e.content).find(".owl-video");
                    i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
                }
            }, this)
        }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function (t) {
            this.play(t)
        }, this))
    };
    s.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, s.prototype.fetch = function (t, e) {
        var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
            n = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
            s = t.attr("data-width") || this._core.settings.videoWidth,
            o = t.attr("data-height") || this._core.settings.videoHeight, r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if ((n = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) i = "youtube"; else if (n[3].indexOf("vimeo") > -1) i = "vimeo"; else {
            if (!(n[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            i = "vzaar"
        }
        n = n[6], this._videos[r] = {
            type: i,
            id: n,
            width: s,
            height: o
        }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
    }, s.prototype.thumbnail = function (e, i) {
        var n, s, o, r = i.width && i.height ? "width:" + i.width + "px;height:" + i.height + "px;" : "",
            a = e.find("img"), l = "src", h = "", c = this._core.settings, u = function (i) {
                s = '<div class="owl-video-play-icon"></div>', n = c.lazyLoad ? t("<div/>", {
                    class: "owl-video-tn " + h,
                    srcType: i
                }) : t("<div/>", {
                    class: "owl-video-tn",
                    style: "opacity:1;background-image:url(" + i + ")"
                }), e.after(n), e.after(s)
            };
        if (e.wrap(t("<div/>", {
            class: "owl-video-wrapper",
            style: r
        })), this._core.settings.lazyLoad && (l = "data-src", h = "owl-lazy"), a.length) return u(a.attr(l)), a.remove(), !1;
        "youtube" === i.type ? (o = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", u(o)) : "vimeo" === i.type ? t.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (t) {
                o = t[0].thumbnail_large, u(o)
            }
        }) : "vzaar" === i.type && t.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (t) {
                o = t.framegrab_url, u(o)
            }
        })
    }, s.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, s.prototype.play = function (e) {
        var i, n = t(e.target).closest("." + this._core.settings.itemClass), s = this._videos[n.attr("data-video")],
            o = s.width || "100%", r = s.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), n = this._core.items(this._core.relative(n.index())), this._core.reset(n.index()), (i = t('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", r), i.attr("width", o), "youtube" === s.type ? i.attr("src", "//www.youtube.com/embed/" + s.id + "?autoplay=1&rel=0&v=" + s.id) : "vimeo" === s.type ? i.attr("src", "//player.vimeo.com/video/" + s.id + "?autoplay=1") : "vzaar" === s.type && i.attr("src", "//view.vzaar.com/" + s.id + "/player?autoplay=true"), t(i).wrap('<div class="owl-video-frame" />').insertAfter(n.find(".owl-video")), this._playing = n.addClass("owl-video-playing"))
    }, s.prototype.isInFullScreen = function () {
        var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return e && t(e).parent().hasClass("owl-video-frame")
    }, s.prototype.destroy = function () {
        var t, e;
        this._core.$element.off("click.owl.video");
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Video = s
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    var s = function (e) {
        this.core = e, this.core.options = t.extend({}, s.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
            "change.owl.carousel": t.proxy(function (t) {
                t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function (t) {
                t.namespace && (this.swapping = "translated" == t.type)
            }, this), "translate.owl.carousel": t.proxy(function (t) {
                t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    s.Defaults = {animateOut: !1, animateIn: !1}, s.prototype.swap = function () {
        if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
            this.core.speed(0);
            var e, i = t.proxy(this.clear, this), n = this.core.$stage.children().eq(this.previous),
                s = this.core.$stage.children().eq(this.next), o = this.core.settings.animateIn,
                r = this.core.settings.animateOut;
            this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(t.support.animation.end, i).css({left: e + "px"}).addClass("animated owl-animated-out").addClass(r)), o && s.one(t.support.animation.end, i).addClass("animated owl-animated-in").addClass(o))
        }
    }, s.prototype.clear = function (e) {
        t(e.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, s.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Animate = s
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    var s = function (e) {
        this._core = e, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
            "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0)
            }, this), "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoplay && this.play()
            }, this), "play.owl.autoplay": t.proxy(function (t, e, i) {
                t.namespace && this.play(e, i)
            }, this), "stop.owl.autoplay": t.proxy(function (t) {
                t.namespace && this.stop()
            }, this), "mouseover.owl.autoplay": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this), "mouseleave.owl.autoplay": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this), "touchstart.owl.core": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this), "touchend.owl.core": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, s.Defaults, this._core.options)
    };
    s.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, s.prototype._next = function (n) {
        this._call = e.setTimeout(t.proxy(this._next, this, n), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || i.hidden || this._core.next(n || this._core.settings.autoplaySpeed)
    }, s.prototype.read = function () {
        return (new Date).getTime() - this._time
    }, s.prototype.play = function (i, n) {
        var s;
        this._core.is("rotating") || this._core.enter("rotating"), i = i || this._core.settings.autoplayTimeout, s = Math.min(this._time % (this._timeout || i), i), this._paused ? (this._time = this.read(), this._paused = !1) : e.clearTimeout(this._call), this._time += this.read() % i - s, this._timeout = i, this._call = e.setTimeout(t.proxy(this._next, this, n), i - s)
    }, s.prototype.stop = function () {
        this._core.is("rotating") && (this._time = 0, this._paused = !0, e.clearTimeout(this._call), this._core.leave("rotating"))
    }, s.prototype.pause = function () {
        this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, e.clearTimeout(this._call))
    }, s.prototype.destroy = function () {
        var t, e;
        this.stop();
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = s
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    "use strict";
    var s = function (e) {
        this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": t.proxy(function (e) {
                e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this), "added.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
            }, this), "remove.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this), "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && "position" == t.property.name && this.draw()
            }, this), "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this), "refreshed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = t.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    s.Defaults = {
        nav: !1,
        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
        navSpeed: !1,
        navElement: 'button type="button" role="presentation"',
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, s.prototype.initialize = function () {
        var e, i = this._core.settings;
        this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function (t) {
            this.prev(i.navSpeed)
        }, this)), this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function (t) {
            this.next(i.navSpeed)
        }, this)), i.dotsData || (this._templates = [t('<button role="button">').addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", t.proxy(function (e) {
            var n = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
            e.preventDefault(), this.to(n, i.dotsSpeed)
        }, this));
        for (e in this._overrides) this._core[e] = t.proxy(this[e], this)
    }, s.prototype.destroy = function () {
        var t, e, i, n, s;
        s = this._core.settings;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) "$relative" === e && s.navContainer ? this._controls[e].html("") : this._controls[e].remove();
        for (n in this.overides) this._core[n] = this._overrides[n];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, s.prototype.update = function () {
        var t, e, i = this._core.clones().length / 2, n = i + this._core.items().length, s = this._core.maximum(!0),
            o = this._core.settings, r = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
        if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy) for (this._pages = [], t = i, e = 0, 0; t < n; t++) {
            if (e >= r || 0 === e) {
                if (this._pages.push({start: Math.min(s, t - i), end: t - i + r - 1}), Math.min(s, t - i) === s) break;
                e = 0, 0
            }
            e += this._core.mergers(this._core.relative(t))
        }
    }, s.prototype.draw = function () {
        var e, i = this._core.settings, n = this._core.items().length <= i.items,
            s = this._core.relative(this._core.current()), o = i.loop || i.rewind;
        this._controls.$relative.toggleClass("disabled", !i.nav || n), i.nav && (this._controls.$previous.toggleClass("disabled", !o && s <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && s >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || n), i.dots && (e = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
    }, s.prototype.onTrigger = function (e) {
        var i = this._core.settings;
        e.page = {
            index: t.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
        }
    }, s.prototype.current = function () {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, t.proxy(function (t, i) {
            return t.start <= e && t.end >= e
        }, this)).pop()
    }, s.prototype.getPosition = function (e) {
        var i, n, s = this._core.settings;
        return "page" == s.slideBy ? (i = t.inArray(this.current(), this._pages), n = this._pages.length, e ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, e ? i += s.slideBy : i -= s.slideBy), i
    }, s.prototype.next = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, s.prototype.prev = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, s.prototype.to = function (e, i, n) {
        var s;
        !n && this._pages.length ? (s = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % s + s) % s].start, i)) : t.proxy(this._overrides.to, this._core)(e, i)
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = s
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    "use strict";
    var s = function (i) {
        this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": t.proxy(function (i) {
                i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
            }, this), "prepared.owl.carousel": t.proxy(function (e) {
                if (e.namespace) {
                    var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!i) return;
                    this._hashes[i] = e.content
                }
            }, this), "changed.owl.carousel": t.proxy(function (i) {
                if (i.namespace && "position" === i.property.name) {
                    var n = this._core.items(this._core.relative(this._core.current())),
                        s = t.map(this._hashes, function (t, e) {
                            return t === n ? e : null
                        }).join();
                    if (!s || e.location.hash.slice(1) === s) return;
                    e.location.hash = s
                }
            }, this)
        }, this._core.options = t.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function (t) {
            var i = e.location.hash.substring(1), n = this._core.$stage.children(),
                s = this._hashes[i] && n.index(this._hashes[i]);
            void 0 !== s && s !== this._core.current() && this._core.to(this._core.relative(s), !1, !0)
        }, this))
    };
    s.Defaults = {URLhashListener: !1}, s.prototype.destroy = function () {
        var i, n;
        t(e).off("hashchange.owl.navigation");
        for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = s
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    function s(e, i) {
        var s = !1, o = e.charAt(0).toUpperCase() + e.slice(1);
        return t.each((e + " " + a.join(o + " ") + o).split(" "), function (t, e) {
            if (r[e] !== n) return s = !i || e, !1
        }), s
    }

    function o(t) {
        return s(t, !0)
    }

    var r = t("<support>").get(0).style, a = "Webkit Moz O ms".split(" "), l = {
        transition: {
            end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }
        },
        animation: {
            end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend"
            }
        }
    }, h = function () {
        return !!s("transform")
    }, c = function () {
        return !!s("perspective")
    }, u = function () {
        return !!s("animation")
    };
    (function () {
        return !!s("transition")
    })() && (t.support.transition = new String(o("transition")), t.support.transition.end = l.transition.end[t.support.transition]), u() && (t.support.animation = new String(o("animation")), t.support.animation.end = l.animation.end[t.support.animation]), h() && (t.support.transform = new String(o("transform")), t.support.transform3d = c())
}(window.Zepto || window.jQuery, window, document), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = function (e, i) {
        return void 0 === i && (i = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), t(i), i
    } : t(jQuery)
}(function (t) {
    function e(t) {
        return 9 === t ? -1 !== navigator.appVersion.indexOf("MSIE 9.") : (userAgent = navigator.userAgent, userAgent.indexOf("MSIE ") > -1 || userAgent.indexOf("Trident/") > -1)
    }

    function i(t) {
        return parseInt(String(t).split(/%|px|em|cm|vh|vw/)[0])
    }

    var n = t(window), s = t(document), o = "iziModal",
        r = {CLOSING: "closing", CLOSED: "closed", OPENING: "opening", OPENED: "opened", DESTROYED: "destroyed"},
        a = function () {
            var t, e = document.createElement("fakeelement"), i = {
                animation: "animationend",
                OAnimation: "oAnimationEnd",
                MozAnimation: "animationend",
                WebkitAnimation: "webkitAnimationEnd"
            };
            for (t in i) if (void 0 !== e.style[t]) return i[t]
        }(), l = !!/Mobi/.test(navigator.userAgent);
    window.$iziModal = {}, window.$iziModal.autoOpen = 0, window.$iziModal.history = !1;
    var h = function (t, e) {
        this.init(t, e)
    };
    return h.prototype = {
        constructor: h, init: function (e, i) {
            var n = this;
            this.$element = t(e), void 0 !== this.$element[0].id && "" !== this.$element[0].id ? this.id = this.$element[0].id : (this.id = o + Math.floor(1e7 * Math.random() + 1), this.$element.attr("id", this.id)), this.classes = void 0 !== this.$element.attr("class") ? this.$element.attr("class") : "", this.content = this.$element.html(), this.state = r.CLOSED, this.options = i, this.width = 0, this.timer = null, this.timerTimeout = null, this.progressBar = null, this.isPaused = !1, this.isFullscreen = !1, this.headerHeight = 0, this.modalHeight = 0, this.$overlay = t('<div class="' + o + '-overlay" style="background-color:' + i.overlayColor + '"></div>'), this.$navigate = t('<div class="' + o + '-navigate"><div class="' + o + '-navigate-caption">Use</div><button class="' + o + '-navigate-prev"></button><button class="' + o + '-navigate-next"></button></div>'), this.group = {
                name: this.$element.attr("data-" + o + "-group"),
                index: null,
                ids: []
            }, this.$element.attr("aria-hidden", "true"), this.$element.attr("aria-labelledby", this.id), this.$element.attr("role", "dialog"), this.$element.hasClass("iziModal") || this.$element.addClass("iziModal"), void 0 === this.group.name && "" !== i.group && (this.group.name = i.group, this.$element.attr("data-" + o + "-group", i.group)), !0 === this.options.loop && this.$element.attr("data-" + o + "-loop", !0), t.each(this.options, function (t, e) {
                var s = n.$element.attr("data-" + o + "-" + t);
                try {
                    void 0 !== s && (i[t] = "" === s || "true" == s || "false" != s && ("function" == typeof e ? new Function(s) : s))
                } catch (t) {
                }
            }), !1 !== i.appendTo && this.$element.appendTo(i.appendTo), !0 === i.iframe ? (this.$element.html('<div class="' + o + '-wrap"><div class="' + o + '-content"><iframe class="' + o + '-iframe"></iframe>' + this.content + "</div></div>"), null !== i.iframeHeight && this.$element.find("." + o + "-iframe").css("height", i.iframeHeight)) : this.$element.html('<div class="' + o + '-wrap"><div class="' + o + '-content">' + this.content + "</div></div>"), null !== this.options.background && this.$element.css("background", this.options.background), this.$wrap = this.$element.find("." + o + "-wrap"), null === i.zindex || isNaN(parseInt(i.zindex)) || (this.$element.css("z-index", i.zindex), this.$navigate.css("z-index", i.zindex - 1), this.$overlay.css("z-index", i.zindex - 2)), "" !== i.radius && this.$element.css("border-radius", i.radius), "" !== i.padding && this.$element.find("." + o + "-content").css("padding", i.padding), "" !== i.theme && ("light" === i.theme ? this.$element.addClass(o + "-light") : this.$element.addClass(i.theme)), !0 === i.rtl && this.$element.addClass(o + "-rtl"), !0 === i.openFullscreen && (this.isFullscreen = !0, this.$element.addClass("isFullscreen")), this.createHeader(), this.recalcWidth(), this.recalcVerticalPos(), !n.options.afterRender || "function" != typeof n.options.afterRender && "object" != typeof n.options.afterRender || n.options.afterRender(n)
        }, createHeader: function () {
            this.$header = t('<div class="' + o + '-header"><h2 class="' + o + '-header-title">' + this.options.title + '</h2><p class="' + o + '-header-subtitle">' + this.options.subtitle + '</p><div class="' + o + '-header-buttons"></div></div>'), !0 === this.options.closeButton && this.$header.find("." + o + "-header-buttons").append('<a href="javascript:void(0)" class="' + o + "-button " + o + '-button-close" data-' + o + "-close></a>"), !0 === this.options.fullscreen && this.$header.find("." + o + "-header-buttons").append('<a href="javascript:void(0)" class="' + o + "-button " + o + '-button-fullscreen" data-' + o + "-fullscreen></a>"), !0 === this.options.timeoutProgressbar && this.$header.prepend('<div class="' + o + '-progressbar"><div style="background-color:' + this.options.timeoutProgressbarColor + '"></div></div>'), "" === this.options.subtitle && this.$header.addClass(o + "-noSubtitle"), "" !== this.options.title && (null !== this.options.headerColor && (!0 === this.options.borderBottom && this.$element.css("border-bottom", "3px solid " + this.options.headerColor), this.$header.css("background", this.options.headerColor)), null === this.options.icon && null === this.options.iconText || (this.$header.prepend('<i class="' + o + '-header-icon"></i>'), null !== this.options.icon && this.$header.find("." + o + "-header-icon").addClass(this.options.icon).css("color", this.options.iconColor), null !== this.options.iconText && this.$header.find("." + o + "-header-icon").html(this.options.iconText)), this.$element.css("overflow", "hidden").prepend(this.$header))
        }, setGroup: function (e) {
            var i = this, n = this.group.name || e;
            if (this.group.ids = [], void 0 !== e && e !== this.group.name && (n = e, this.group.name = n, this.$element.attr("data-" + o + "-group", n)), void 0 !== n && "" !== n) {
                var s = 0;
                t.each(t("." + o + "[data-" + o + "-group=" + n + "]"), function (e, n) {
                    i.group.ids.push(t(this)[0].id), i.id == t(this)[0].id && (i.group.index = s), s++
                })
            }
        }, toggle: function () {
            this.state == r.OPENED && this.close(), this.state == r.CLOSED && this.open()
        }, startProgress: function (t) {
            var e = this;
            this.isPaused = !1, clearTimeout(this.timerTimeout), !0 === this.options.timeoutProgressbar ? (this.progressBar = {
                hideEta: null,
                maxHideTime: null,
                currentTime: (new Date).getTime(),
                el: this.$element.find("." + o + "-progressbar > div"),
                updateProgress: function () {
                    if (!e.isPaused) {
                        e.progressBar.currentTime = e.progressBar.currentTime + 10;
                        var t = (e.progressBar.hideEta - e.progressBar.currentTime) / e.progressBar.maxHideTime * 100;
                        e.progressBar.el.width(t + "%"), t < 0 && e.close()
                    }
                }
            }, t > 0 && (this.progressBar.maxHideTime = parseFloat(t), this.progressBar.hideEta = (new Date).getTime() + this.progressBar.maxHideTime, this.timerTimeout = setInterval(this.progressBar.updateProgress, 10))) : this.timerTimeout = setTimeout(function () {
                e.close()
            }, e.options.timeout)
        }, pauseProgress: function () {
            this.isPaused = !0
        }, resumeProgress: function () {
            this.isPaused = !1
        }, resetProgress: function (t) {
            clearTimeout(this.timerTimeout), this.progressBar = {}, this.$element.find("." + o + "-progressbar > div").width("100%")
        }, open: function (e) {
            function i() {
                n.state = r.OPENED, n.$element.trigger(r.OPENED), !n.options.onOpened || "function" != typeof n.options.onOpened && "object" != typeof n.options.onOpened || n.options.onOpened(n)
            }

            var n = this;
            try {
                void 0 !== e && !1 === e.preventClose && t.each(t("." + o), function (e, i) {
                    if (void 0 !== t(i).data().iziModal) {
                        var n = t(i).iziModal("getState");
                        "opened" != n && "opening" != n || t(i).iziModal("close")
                    }
                })
            } catch (t) {
            }
            if (function () {
                if (n.options.history) {
                    var e = document.title;
                    document.title = e + " - " + n.options.title, i = "#" + n.id, s = i.replace(/^.*#/, ""), (o = t(i)).attr("id", s + "-tmp"), window.location.hash = i, o.attr("id", s), document.title = e, window.$iziModal.history = !0
                } else window.$iziModal.history = !1;
                var i, s, o
            }(), this.state == r.CLOSED) {
                if (n.$element.off("click", "[data-" + o + "-close]").on("click", "[data-" + o + "-close]", function (e) {
                    e.preventDefault();
                    var i = t(e.currentTarget).attr("data-" + o + "-transitionOut");
                    void 0 !== i ? n.close({transition: i}) : n.close()
                }), n.$element.off("click", "[data-" + o + "-fullscreen]").on("click", "[data-" + o + "-fullscreen]", function (t) {
                    t.preventDefault(), !0 === n.isFullscreen ? (n.isFullscreen = !1, n.$element.removeClass("isFullscreen")) : (n.isFullscreen = !0, n.$element.addClass("isFullscreen")), n.options.onFullscreen && "function" == typeof n.options.onFullscreen && n.options.onFullscreen(n), n.$element.trigger("fullscreen", n)
                }), n.$navigate.off("click", "." + o + "-navigate-next").on("click", "." + o + "-navigate-next", function (t) {
                    n.next(t)
                }), n.$element.off("click", "[data-" + o + "-next]").on("click", "[data-" + o + "-next]", function (t) {
                    n.next(t)
                }), n.$navigate.off("click", "." + o + "-navigate-prev").on("click", "." + o + "-navigate-prev", function (t) {
                    n.prev(t)
                }), n.$element.off("click", "[data-" + o + "-prev]").on("click", "[data-" + o + "-prev]", function (t) {
                    n.prev(t)
                }), this.setGroup(), this.state = r.OPENING, this.$element.trigger(r.OPENING), this.$element.attr("aria-hidden", "false"), !0 === this.options.timeoutProgressbar && this.$element.find("." + o + "-progressbar > div").width("100%"), !0 === this.options.iframe) {
                    this.$element.find("." + o + "-content").addClass(o + "-content-loader"), this.$element.find("." + o + "-iframe").on("load", function () {
                        t(this).parent().removeClass(o + "-content-loader")
                    });
                    var h = null;
                    try {
                        h = "" !== t(e.currentTarget).attr("href") ? t(e.currentTarget).attr("href") : null
                    } catch (t) {
                    }
                    if (null === this.options.iframeURL || null !== h && void 0 !== h || (h = this.options.iframeURL), null === h || void 0 === h) throw new Error("Failed to find iframe URL");
                    this.$element.find("." + o + "-iframe").attr("src", h)
                }
                (this.options.bodyOverflow || l) && (t("html").addClass(o + "-isOverflow"), l && t("body").css("overflow", "hidden")), this.options.onOpening && "function" == typeof this.options.onOpening && this.options.onOpening(this), function () {
                    if (n.group.ids.length > 1) {
                        n.$navigate.appendTo("body"), n.$navigate.addClass("fadeIn"), !0 === n.options.navigateCaption && n.$navigate.find("." + o + "-navigate-caption").show();
                        var s = n.$element.outerWidth();
                        !1 !== n.options.navigateArrows ? "closeScreenEdge" === n.options.navigateArrows ? (n.$navigate.find("." + o + "-navigate-prev").css("left", 0).show(), n.$navigate.find("." + o + "-navigate-next").css("right", 0).show()) : (n.$navigate.find("." + o + "-navigate-prev").css("margin-left", -(s / 2 + 84)).show(), n.$navigate.find("." + o + "-navigate-next").css("margin-right", -(s / 2 + 84)).show()) : (n.$navigate.find("." + o + "-navigate-prev").hide(), n.$navigate.find("." + o + "-navigate-next").hide()), 0 === n.group.index && (0 === t("." + o + "[data-" + o + '-group="' + n.group.name + '"][data-' + o + "-loop]").length && !1 === n.options.loop && n.$navigate.find("." + o + "-navigate-prev").hide()), n.group.index + 1 === n.group.ids.length && (0 === t("." + o + "[data-" + o + '-group="' + n.group.name + '"][data-' + o + "-loop]").length && !1 === n.options.loop && n.$navigate.find("." + o + "-navigate-next").hide())
                    }
                    !0 === n.options.overlay && (!1 === n.options.appendToOverlay ? n.$overlay.appendTo("body") : n.$overlay.appendTo(n.options.appendToOverlay)), n.options.transitionInOverlay && n.$overlay.addClass(n.options.transitionInOverlay);
                    var r = n.options.transitionIn;
                    "object" == typeof e && (void 0 === e.transition && void 0 === e.transitionIn || (r = e.transition || e.transitionIn), void 0 !== e.zindex && n.setZindex(e.zindex)), "" !== r && void 0 !== a ? (n.$element.addClass("transitionIn " + r).show(), n.$wrap.one(a, function () {
                        n.$element.removeClass(r + " transitionIn"), n.$overlay.removeClass(n.options.transitionInOverlay), n.$navigate.removeClass("fadeIn"), i()
                    })) : (n.$element.show(), i()), !0 !== n.options.pauseOnHover || !0 !== n.options.pauseOnHover || !1 === n.options.timeout || isNaN(parseInt(n.options.timeout)) || !1 === n.options.timeout || 0 === n.options.timeout || (n.$element.off("mouseenter").on("mouseenter", function (t) {
                        t.preventDefault(), n.isPaused = !0
                    }), n.$element.off("mouseleave").on("mouseleave", function (t) {
                        t.preventDefault(), n.isPaused = !1
                    }))
                }(), !1 === this.options.timeout || isNaN(parseInt(this.options.timeout)) || !1 === this.options.timeout || 0 === this.options.timeout || n.startProgress(this.options.timeout), this.options.overlayClose && !this.$element.hasClass(this.options.transitionOut) && this.$overlay.click(function () {
                    n.close()
                }), this.options.focusInput && this.$element.find(":input:not(button):enabled:visible:first").focus(), function t() {
                    n.recalcLayout(), n.timer = setTimeout(t, 300)
                }(), s.on("keydown." + o, function (t) {
                    n.options.closeOnEscape && 27 === t.keyCode && n.close()
                })
            }
        }, close: function (e) {
            function i() {
                n.state = r.CLOSED, n.$element.trigger(r.CLOSED), !0 === n.options.iframe && n.$element.find("." + o + "-iframe").attr("src", ""), (n.options.bodyOverflow || l) && (t("html").removeClass(o + "-isOverflow"), l && t("body").css("overflow", "auto")), n.options.onClosed && "function" == typeof n.options.onClosed && n.options.onClosed(n), !0 === n.options.restoreDefaultContent && n.$element.find("." + o + "-content").html(n.content), 0 === t("." + o + ":visible").length && t("html").removeClass(o + "-isAttached")
            }

            var n = this;
            if (this.state == r.OPENED || this.state == r.OPENING) {
                s.off("keydown." + o), this.state = r.CLOSING, this.$element.trigger(r.CLOSING), this.$element.attr("aria-hidden", "true"), clearTimeout(this.timer), clearTimeout(this.timerTimeout), n.options.onClosing && "function" == typeof n.options.onClosing && n.options.onClosing(this);
                var h = this.options.transitionOut;
                "object" == typeof e && (void 0 === e.transition && void 0 === e.transitionOut || (h = e.transition || e.transitionOut)), !1 === h || "" === h || void 0 === a ? (this.$element.hide(), this.$overlay.remove(), this.$navigate.remove(), i()) : (this.$element.attr("class", [this.classes, o, h, "light" == this.options.theme ? o + "-light" : this.options.theme, !0 === this.isFullscreen ? "isFullscreen" : "", this.options.rtl ? o + "-rtl" : ""].join(" ")), this.$overlay.attr("class", o + "-overlay " + this.options.transitionOutOverlay), !1 === n.options.navigateArrows || l || this.$navigate.attr("class", o + "-navigate fadeOut"), this.$element.one(a, function () {
                    n.$element.hasClass(h) && n.$element.removeClass(h + " transitionOut").hide(), n.$overlay.removeClass(n.options.transitionOutOverlay).remove(), n.$navigate.removeClass("fadeOut").remove(), i()
                }))
            }
        }, next: function (e) {
            var i = this, n = "fadeInRight", s = "fadeOutLeft", r = t("." + o + ":visible"), a = {};
            a.out = this, void 0 !== e && "object" != typeof e ? (e.preventDefault(), r = t(e.currentTarget), n = r.attr("data-" + o + "-transitionIn"), s = r.attr("data-" + o + "-transitionOut")) : void 0 !== e && (void 0 !== e.transitionIn && (n = e.transitionIn), void 0 !== e.transitionOut && (s = e.transitionOut)), this.close({transition: s}), setTimeout(function () {
                for (var e = t("." + o + "[data-" + o + '-group="' + i.group.name + '"][data-' + o + "-loop]").length, s = i.group.index + 1; s <= i.group.ids.length; s++) {
                    try {
                        a.in = t("#" + i.group.ids[s]).data().iziModal
                    } catch (t) {
                    }
                    if (void 0 !== a.in) {
                        t("#" + i.group.ids[s]).iziModal("open", {transition: n});
                        break
                    }
                    if (s == i.group.ids.length && e > 0 || !0 === i.options.loop) for (var r = 0; r <= i.group.ids.length; r++) if (a.in = t("#" + i.group.ids[r]).data().iziModal, void 0 !== a.in) {
                        t("#" + i.group.ids[r]).iziModal("open", {transition: n});
                        break
                    }
                }
            }, 200), t(document).trigger(o + "-group-change", a)
        }, prev: function (e) {
            var i = this, n = "fadeInLeft", s = "fadeOutRight", r = t("." + o + ":visible"), a = {};
            a.out = this, void 0 !== e && "object" != typeof e ? (e.preventDefault(), r = t(e.currentTarget), n = r.attr("data-" + o + "-transitionIn"), s = r.attr("data-" + o + "-transitionOut")) : void 0 !== e && (void 0 !== e.transitionIn && (n = e.transitionIn), void 0 !== e.transitionOut && (s = e.transitionOut)), this.close({transition: s}), setTimeout(function () {
                for (var e = t("." + o + "[data-" + o + '-group="' + i.group.name + '"][data-' + o + "-loop]").length, s = i.group.index; s >= 0; s--) {
                    try {
                        a.in = t("#" + i.group.ids[s - 1]).data().iziModal
                    } catch (t) {
                    }
                    if (void 0 !== a.in) {
                        t("#" + i.group.ids[s - 1]).iziModal("open", {transition: n});
                        break
                    }
                    if (0 === s && e > 0 || !0 === i.options.loop) for (var r = i.group.ids.length - 1; r >= 0; r--) if (a.in = t("#" + i.group.ids[r]).data().iziModal, void 0 !== a.in) {
                        t("#" + i.group.ids[r]).iziModal("open", {transition: n});
                        break
                    }
                }
            }, 200), t(document).trigger(o + "-group-change", a)
        }, destroy: function () {
            var e = t.Event("destroy");
            this.$element.trigger(e), s.off("keydown." + o), clearTimeout(this.timer), clearTimeout(this.timerTimeout), !0 === this.options.iframe && this.$element.find("." + o + "-iframe").remove(), this.$element.html(this.$element.find("." + o + "-content").html()), this.$element.off("click", "[data-" + o + "-close]"), this.$element.off("click", "[data-" + o + "-fullscreen]"), this.$element.off("." + o).removeData(o).attr("style", ""), this.$overlay.remove(), this.$navigate.remove(), this.$element.trigger(r.DESTROYED), this.$element = null
        }, getState: function () {
            return this.state
        }, getGroup: function () {
            return this.group
        }, setWidth: function (t) {
            this.options.width = t, this.recalcWidth();
            var e = this.$element.outerWidth();
            !0 !== this.options.navigateArrows && "closeToModal" != this.options.navigateArrows || (this.$navigate.find("." + o + "-navigate-prev").css("margin-left", -(e / 2 + 84)).show(), this.$navigate.find("." + o + "-navigate-next").css("margin-right", -(e / 2 + 84)).show())
        }, setTop: function (t) {
            this.options.top = t, this.recalcVerticalPos(!1)
        }, setBottom: function (t) {
            this.options.bottom = t, this.recalcVerticalPos(!1)
        }, setHeader: function (t) {
            t ? this.$element.find("." + o + "-header").show() : (this.headerHeight = 0, this.$element.find("." + o + "-header").hide())
        }, setTitle: function (t) {
            this.options.title = t, 0 === this.headerHeight && this.createHeader(), 0 === this.$header.find("." + o + "-header-title").length && this.$header.append('<h2 class="' + o + '-header-title"></h2>'), this.$header.find("." + o + "-header-title").html(t)
        }, setSubtitle: function (t) {
            "" === t ? (this.$header.find("." + o + "-header-subtitle").remove(), this.$header.addClass(o + "-noSubtitle")) : (0 === this.$header.find("." + o + "-header-subtitle").length && this.$header.append('<p class="' + o + '-header-subtitle"></p>'), this.$header.removeClass(o + "-noSubtitle")), this.$header.find("." + o + "-header-subtitle").html(t), this.options.subtitle = t
        }, setIcon: function (t) {
            0 === this.$header.find("." + o + "-header-icon").length && this.$header.prepend('<i class="' + o + '-header-icon"></i>'), this.$header.find("." + o + "-header-icon").attr("class", o + "-header-icon " + t), this.options.icon = t
        }, setIconText: function (t) {
            this.$header.find("." + o + "-header-icon").html(t), this.options.iconText = t
        }, setHeaderColor: function (t) {
            !0 === this.options.borderBottom && this.$element.css("border-bottom", "3px solid " + t), this.$header.css("background", t), this.options.headerColor = t
        }, setBackground: function (t) {
            !1 === t ? (this.options.background = null, this.$element.css("background", "")) : (this.$element.css("background", t), this.options.background = t)
        }, setZindex: function (t) {
            isNaN(parseInt(this.options.zindex)) || (this.options.zindex = t, this.$element.css("z-index", t), this.$navigate.css("z-index", t - 1), this.$overlay.css("z-index", t - 2))
        }, setFullscreen: function (t) {
            t ? (this.isFullscreen = !0, this.$element.addClass("isFullscreen")) : (this.isFullscreen = !1, this.$element.removeClass("isFullscreen"))
        }, setContent: function (t) {
            "object" == typeof t && (!0 === (t.default || !1) && (this.content = t.content), t = t.content);
            !1 === this.options.iframe && this.$element.find("." + o + "-content").html(t)
        }, setTransitionIn: function (t) {
            this.options.transitionIn = t
        }, setTransitionOut: function (t) {
            this.options.transitionOut = t
        }, setTimeout: function (t) {
            this.options.timeout = t
        }, resetContent: function () {
            this.$element.find("." + o + "-content").html(this.content)
        }, startLoading: function () {
            this.$element.find("." + o + "-loader").length || this.$element.append('<div class="' + o + '-loader fadeIn"></div>'), this.$element.find("." + o + "-loader").css({
                top: this.headerHeight,
                borderRadius: this.options.radius
            })
        }, stopLoading: function () {
            var t = this.$element.find("." + o + "-loader");
            t.length || (this.$element.prepend('<div class="' + o + '-loader fadeIn"></div>'), t = this.$element.find("." + o + "-loader").css("border-radius", this.options.radius)), t.removeClass("fadeIn").addClass("fadeOut"), setTimeout(function () {
                t.remove()
            }, 600)
        }, recalcWidth: function () {
            if (this.$element.css("max-width", this.options.width), e()) {
                var t = this.options.width;
                t.toString().split("%").length > 1 && (t = this.$element.outerWidth()), this.$element.css({
                    left: "50%",
                    marginLeft: -t / 2
                })
            }
        }, recalcVerticalPos: function (t) {
            null !== this.options.top && !1 !== this.options.top ? (this.$element.css("margin-top", this.options.top), 0 === this.options.top && this.$element.css({
                borderTopRightRadius: 0,
                borderTopLeftRadius: 0
            })) : !1 === t && this.$element.css({
                marginTop: "",
                borderRadius: this.options.radius
            }), null !== this.options.bottom && !1 !== this.options.bottom ? (this.$element.css("margin-bottom", this.options.bottom), 0 === this.options.bottom && this.$element.css({
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 0
            })) : !1 === t && this.$element.css({marginBottom: "", borderRadius: this.options.radius})
        }, recalcLayout: function () {
            var s = this, a = n.height(), l = this.$element.outerHeight(), h = this.$element.outerWidth(),
                c = this.$element.find("." + o + "-content")[0].scrollHeight, u = c + this.headerHeight,
                d = this.$element.innerHeight() - this.headerHeight,
                p = (parseInt(-(this.$element.innerHeight() + 1) / 2), this.$wrap.scrollTop()), f = 0;
            e() && (h >= n.width() || !0 === this.isFullscreen ? this.$element.css({
                left: "0",
                marginLeft: ""
            }) : this.$element.css({
                left: "50%",
                marginLeft: -h / 2
            })), !0 === this.options.borderBottom && "" !== this.options.title && (f = 3), this.$element.find("." + o + "-header").length && this.$element.find("." + o + "-header").is(":visible") ? (this.headerHeight = parseInt(this.$element.find("." + o + "-header").innerHeight()), this.$element.css("overflow", "hidden")) : (this.headerHeight = 0, this.$element.css("overflow", "")), this.$element.find("." + o + "-loader").length && this.$element.find("." + o + "-loader").css("top", this.headerHeight), l !== this.modalHeight && (this.modalHeight = l, this.options.onResize && "function" == typeof this.options.onResize && this.options.onResize(this)), this.state != r.OPENED && this.state != r.OPENING || (!0 === this.options.iframe && (a < this.options.iframeHeight + this.headerHeight + f || !0 === this.isFullscreen ? this.$element.find("." + o + "-iframe").css("height", a - (this.headerHeight + f)) : this.$element.find("." + o + "-iframe").css("height", this.options.iframeHeight)), l == a ? this.$element.addClass("isAttached") : this.$element.removeClass("isAttached"), !1 === this.isFullscreen && this.$element.width() >= n.width() ? this.$element.find("." + o + "-button-fullscreen").hide() : this.$element.find("." + o + "-button-fullscreen").show(), this.recalcButtons(), !1 === this.isFullscreen && (a = a - (i(this.options.top) || 0) - (i(this.options.bottom) || 0)), u > a ? (this.options.top > 0 && null === this.options.bottom && c < n.height() && this.$element.addClass("isAttachedBottom"), this.options.bottom > 0 && null === this.options.top && c < n.height() && this.$element.addClass("isAttachedTop"), 1 === t("." + o + ":visible").length && t("html").addClass(o + "-isAttached"), this.$element.css("height", a)) : (this.$element.css("height", c + (this.headerHeight + f)), this.$element.removeClass("isAttachedTop isAttachedBottom"), 1 === t("." + o + ":visible").length && t("html").removeClass(o + "-isAttached")), c > d && u > a ? (s.$element.addClass("hasScroll"), s.$wrap.css("height", l - (s.headerHeight + f))) : (s.$element.removeClass("hasScroll"), s.$wrap.css("height", "auto")), d + p < c - 30 ? s.$element.addClass("hasShadow") : s.$element.removeClass("hasShadow"))
        }, recalcButtons: function () {
            var t = this.$header.find("." + o + "-header-buttons").innerWidth() + 10;
            !0 === this.options.rtl ? this.$header.css("padding-left", t) : this.$header.css("padding-right", t)
        }
    }, n.off("load." + o).on("load." + o, function (e) {
        var i = document.location.hash;
        if (0 === window.$iziModal.autoOpen && !t("." + o).is(":visible")) try {
            var n = t(i).data();
            void 0 !== n && !1 !== n.iziModal.options.autoOpen && t(i).iziModal("open")
        } catch (t) {
        }
    }), n.off("hashchange." + o).on("hashchange." + o, function (e) {
        var i = document.location.hash;
        if ("" !== i) try {
            void 0 !== t(i).data() && "opening" !== t(i).iziModal("getState") && setTimeout(function () {
                t(i).iziModal("open", {preventClose: !1})
            }, 200)
        } catch (t) {
        } else window.$iziModal.history && t.each(t("." + o), function (e, i) {
            if (void 0 !== t(i).data().iziModal) {
                var n = t(i).iziModal("getState");
                "opened" != n && "opening" != n || t(i).iziModal("close")
            }
        })
    }), s.off("click", "[data-" + o + "-open]").on("click", "[data-" + o + "-open]", function (e) {
        e.preventDefault();
        var i = t("." + o + ":visible"), n = t(e.currentTarget).attr("data-" + o + "-open"),
            s = t(e.currentTarget).attr("data-" + o + "-preventClose"),
            r = t(e.currentTarget).attr("data-" + o + "-transitionIn"),
            a = t(e.currentTarget).attr("data-" + o + "-transitionOut"),
            l = t(e.currentTarget).attr("data-" + o + "-zindex");
        void 0 !== l && t(n).iziModal("setZindex", l), void 0 === s && (void 0 !== a ? i.iziModal("close", {transition: a}) : i.iziModal("close")), setTimeout(function () {
            void 0 !== r ? t(n).iziModal("open", {transition: r}) : t(n).iziModal("open")
        }, 200)
    }), s.off("keyup." + o).on("keyup." + o, function (e) {
        if (t("." + o + ":visible").length) {
            var i = t("." + o + ":visible")[0].id, n = t("#" + i).data().iziModal.options.arrowKeys,
                s = t("#" + i).iziModal("getGroup"), r = e || window.event, a = r.target || r.srcElement;
            void 0 === i || !n || void 0 === s.name || r.ctrlKey || r.metaKey || r.altKey || "INPUT" === a.tagName.toUpperCase() || "TEXTAREA" == a.tagName.toUpperCase() || (37 === r.keyCode ? t("#" + i).iziModal("prev", r) : 39 === r.keyCode && t("#" + i).iziModal("next", r))
        }
    }), t.fn[o] = function (e, i) {
        if (!t(this).length && "object" == typeof e) {
            var n = {$el: document.createElement("div"), id: this.selector.split("#"), class: this.selector.split(".")};
            if (n.id.length > 1) {
                try {
                    n.$el = document.createElement(id[0])
                } catch (t) {
                }
                n.$el.id = this.selector.split("#")[1].trim()
            } else if (n.class.length > 1) {
                try {
                    n.$el = document.createElement(n.class[0])
                } catch (t) {
                }
                for (var s = 1; s < n.class.length; s++) n.$el.classList.add(n.class[s].trim())
            }
            document.body.appendChild(n.$el), this.push(t(this.selector))
        }
        for (var r = 0; r < this.length; r++) {
            var a = t(this[r]), l = a.data(o), c = t.extend({}, t.fn[o].defaults, a.data(), "object" == typeof e && e);
            if (l || e && "object" != typeof e) {
                if ("string" == typeof e && void 0 !== l) return l[e].apply(l, [].concat(i))
            } else a.data(o, l = new h(a, c));
            c.autoOpen && (isNaN(parseInt(c.autoOpen)) ? !0 === c.autoOpen && l.open() : setTimeout(function () {
                l.open()
            }, c.autoOpen), window.$iziModal.autoOpen++)
        }
        return this
    }, t.fn[o].defaults = {
        title: "",
        subtitle: "",
        headerColor: "#88A0B9",
        background: null,
        theme: "",
        icon: null,
        iconText: null,
        iconColor: "",
        rtl: !1,
        width: 600,
        top: null,
        bottom: null,
        borderBottom: !0,
        padding: 0,
        radius: 3,
        zindex: 999,
        iframe: !1,
        iframeHeight: 400,
        iframeURL: null,
        focusInput: !0,
        group: "",
        loop: !1,
        arrowKeys: !0,
        navigateCaption: !0,
        navigateArrows: !0,
        history: !1,
        restoreDefaultContent: !1,
        autoOpen: 0,
        bodyOverflow: !1,
        fullscreen: !1,
        openFullscreen: !1,
        closeOnEscape: !0,
        closeButton: !0,
        appendTo: "body",
        appendToOverlay: "body",
        overlay: !0,
        overlayClose: !0,
        overlayColor: "rgba(0, 0, 0, 0.4)",
        timeout: !1,
        timeoutProgressbar: !1,
        pauseOnHover: !1,
        timeoutProgressbarColor: "rgba(255,255,255,0.5)",
        transitionIn: "comingIn",
        transitionOut: "comingOut",
        transitionInOverlay: "fadeIn",
        transitionOutOverlay: "fadeOut",
        onFullscreen: function () {
        },
        onResize: function () {
        },
        onOpening: function () {
        },
        onOpened: function () {
        },
        onClosing: function () {
        },
        onClosed: function () {
        },
        afterRender: function () {
        }
    }, t.fn[o].Constructor = h, t.fn.iziModal
}), function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.SimpleBar = e() : t.SimpleBar = e()
}(this, function () {
    return function (t) {
        function e(n) {
            if (i[n]) return i[n].exports;
            var s = i[n] = {i: n, l: !1, exports: {}};
            return t[n].call(s.exports, s, s.exports, e), s.l = !0, s.exports
        }

        var i = {};
        return e.m = t, e.c = i, e.d = function (t, i, n) {
            e.o(t, i) || Object.defineProperty(t, i, {configurable: !1, enumerable: !0, get: n})
        }, e.n = function (t) {
            var i = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return e.d(i, "a", i), i
        }, e.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 27)
    }([function (t, e, i) {
        var n = i(23)("wks"), s = i(12), o = i(1).Symbol, r = "function" == typeof o;
        (t.exports = function (t) {
            return n[t] || (n[t] = r && o[t] || (r ? o : s)("Symbol." + t))
        }).store = n
    }, function (t, e) {
        var i = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = i)
    }, function (t, e) {
        var i = {}.hasOwnProperty;
        t.exports = function (t, e) {
            return i.call(t, e)
        }
    }, function (t, e) {
        var i = t.exports = {version: "2.5.1"};
        "number" == typeof __e && (__e = i)
    }, function (t, e, i) {
        var n = i(5), s = i(11);
        t.exports = i(7) ? function (t, e, i) {
            return n.f(t, e, s(1, i))
        } : function (t, e, i) {
            return t[e] = i, t
        }
    }, function (t, e, i) {
        var n = i(6), s = i(33), o = i(34), r = Object.defineProperty;
        e.f = i(7) ? Object.defineProperty : function (t, e, i) {
            if (n(t), e = o(e, !0), n(i), s) try {
                return r(t, e, i)
            } catch (t) {
            }
            if ("get" in i || "set" in i) throw TypeError("Accessors not supported!");
            return "value" in i && (t[e] = i.value), t
        }
    }, function (t, e, i) {
        var n = i(10);
        t.exports = function (t) {
            if (!n(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }, function (t, e, i) {
        t.exports = !i(16)(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (t, e) {
        var i = Math.ceil, n = Math.floor;
        t.exports = function (t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? n : i)(t)
        }
    }, function (t, e) {
        t.exports = function (t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, function (t, e) {
        t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, function (t, e) {
        t.exports = function (t, e) {
            return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
        }
    }, function (t, e) {
        var i = 0, n = Math.random();
        t.exports = function (t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++i + n).toString(36))
        }
    }, function (t, e) {
        t.exports = {}
    }, function (t, e, i) {
        var n = i(23)("keys"), s = i(12);
        t.exports = function (t) {
            return n[t] || (n[t] = s(t))
        }
    }, function (t, e, i) {
        var n = i(1), s = i(3), o = i(4), r = i(18), a = i(19), l = function (t, e, i) {
            var h, c, u, d, p = t & l.F, f = t & l.G, m = t & l.S, g = t & l.P, v = t & l.B,
                y = f ? n : m ? n[e] || (n[e] = {}) : (n[e] || {}).prototype, _ = f ? s : s[e] || (s[e] = {}),
                b = _.prototype || (_.prototype = {});
            f && (i = e);
            for (h in i) c = !p && y && void 0 !== y[h], u = (c ? y : i)[h], d = v && c ? a(u, n) : g && "function" == typeof u ? a(Function.call, u) : u, y && r(y, h, u, t & l.U), _[h] != u && o(_, h, d), g && b[h] != u && (b[h] = u)
        };
        n.core = s, l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, t.exports = l
    }, function (t, e) {
        t.exports = function (t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function (t, e, i) {
        var n = i(10), s = i(1).document, o = n(s) && n(s.createElement);
        t.exports = function (t) {
            return o ? s.createElement(t) : {}
        }
    }, function (t, e, i) {
        var n = i(1), s = i(4), o = i(2), r = i(12)("src"), a = Function.toString, l = ("" + a).split("toString");
        i(3).inspectSource = function (t) {
            return a.call(t)
        }, (t.exports = function (t, e, i, a) {
            var h = "function" == typeof i;
            h && (o(i, "name") || s(i, "name", e)), t[e] !== i && (h && (o(i, r) || s(i, r, t[e] ? "" + t[e] : l.join(String(e)))), t === n ? t[e] = i : a ? t[e] ? t[e] = i : s(t, e, i) : (delete t[e], s(t, e, i)))
        })(Function.prototype, "toString", function () {
            return "function" == typeof this && this[r] || a.call(this)
        })
    }, function (t, e, i) {
        var n = i(35);
        t.exports = function (t, e, i) {
            if (n(t), void 0 === e) return t;
            switch (i) {
                case 1:
                    return function (i) {
                        return t.call(e, i)
                    };
                case 2:
                    return function (i, n) {
                        return t.call(e, i, n)
                    };
                case 3:
                    return function (i, n, s) {
                        return t.call(e, i, n, s)
                    }
            }
            return function () {
                return t.apply(e, arguments)
            }
        }
    }, function (t, e, i) {
        var n = i(41), s = i(9);
        t.exports = function (t) {
            return n(s(t))
        }
    }, function (t, e) {
        var i = {}.toString;
        t.exports = function (t) {
            return i.call(t).slice(8, -1)
        }
    }, function (t, e, i) {
        var n = i(8), s = Math.min;
        t.exports = function (t) {
            return t > 0 ? s(n(t), 9007199254740991) : 0
        }
    }, function (t, e, i) {
        var n = i(1), s = n["__core-js_shared__"] || (n["__core-js_shared__"] = {});
        t.exports = function (t) {
            return s[t] || (s[t] = {})
        }
    }, function (t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function (t, e, i) {
        var n = i(5).f, s = i(2), o = i(0)("toStringTag");
        t.exports = function (t, e, i) {
            t && !s(t = i ? t : t.prototype, o) && n(t, o, {configurable: !0, value: e})
        }
    }, function (t, e, i) {
        var n = i(9);
        t.exports = function (t) {
            return Object(n(t))
        }
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function s(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0, i(28);
        var o = n(i(53)), r = n(i(54)), a = n(i(56));
        i(57), Object.assign = i(58);
        var l = function () {
            function t(e, i) {
                (function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                })(this, t), this.el = e, this.flashTimeout, this.contentEl, this.scrollContentEl, this.dragOffset = {
                    x: 0,
                    y: 0
                }, this.isVisible = {x: !0, y: !0}, this.scrollOffsetAttr = {
                    x: "scrollLeft",
                    y: "scrollTop"
                }, this.sizeAttr = {x: "offsetWidth", y: "offsetHeight"}, this.scrollSizeAttr = {
                    x: "scrollWidth",
                    y: "scrollHeight"
                }, this.offsetAttr = {
                    x: "left",
                    y: "top"
                }, this.globalObserver, this.mutationObserver, this.resizeObserver, this.currentAxis, this.isRtl, this.options = Object.assign({}, t.defaultOptions, i), this.classNames = this.options.classNames, this.scrollbarWidth = (0, o.default)(), this.offsetSize = 20, this.flashScrollbar = this.flashScrollbar.bind(this), this.onDragY = this.onDragY.bind(this), this.onDragX = this.onDragX.bind(this), this.onScrollY = this.onScrollY.bind(this), this.onScrollX = this.onScrollX.bind(this), this.drag = this.drag.bind(this), this.onEndDrag = this.onEndDrag.bind(this), this.onMouseEnter = this.onMouseEnter.bind(this), this.recalculate = (0, r.default)(this.recalculate, 100, {leading: !0}), this.init()
            }

            return e = t, n = [{
                key: "initHtmlApi", value: function () {
                    this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this), "undefined" != typeof MutationObserver && (this.globalObserver = new MutationObserver(function (e) {
                        e.forEach(function (e) {
                            Array.from(e.addedNodes).forEach(function (e) {
                                1 === e.nodeType && (e.hasAttribute("data-simplebar") ? !e.SimpleBar && new t(e, t.getElOptions(e)) : Array.from(e.querySelectorAll("[data-simplebar]")).forEach(function (e) {
                                    !e.SimpleBar && new t(e, t.getElOptions(e))
                                }))
                            }), Array.from(e.removedNodes).forEach(function (t) {
                                1 === t.nodeType && (t.hasAttribute("data-simplebar") ? t.SimpleBar && t.SimpleBar.unMount() : Array.from(t.querySelectorAll("[data-simplebar]")).forEach(function (t) {
                                    t.SimpleBar && t.SimpleBar.unMount()
                                }))
                            })
                        })
                    }), this.globalObserver.observe(document, {
                        childList: !0,
                        subtree: !0
                    })), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements.bind(this)) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements))
                }
            }, {
                key: "getElOptions", value: function (e) {
                    return Object.keys(t.htmlAttributes).reduce(function (i, n) {
                        var s = t.htmlAttributes[n];
                        return e.hasAttribute(s) && (i[n] = JSON.parse(e.getAttribute(s) || !0)), i
                    }, {})
                }
            }, {
                key: "removeObserver", value: function () {
                    this.globalObserver.disconnect()
                }
            }, {
                key: "initDOMLoadedElements", value: function () {
                    document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.removeEventListener("load", this.initDOMLoadedElements), Array.from(document.querySelectorAll("[data-simplebar]")).forEach(function (e) {
                        e.SimpleBar || new t(e, t.getElOptions(e))
                    })
                }
            }, {
                key: "defaultOptions", get: function () {
                    return {
                        autoHide: !0,
                        forceVisible: !1,
                        classNames: {
                            content: "simplebar-content",
                            scrollContent: "simplebar-scroll-content",
                            scrollbar: "simplebar-scrollbar",
                            track: "simplebar-track"
                        },
                        scrollbarMinSize: 25
                    }
                }
            }, {
                key: "htmlAttributes", get: function () {
                    return {
                        autoHide: "data-simplebar-auto-hide",
                        forceVisible: "data-simplebar-force-visible",
                        scrollbarMinSize: "data-simplebar-scrollbar-min-size"
                    }
                }
            }], (i = [{
                key: "init", value: function () {
                    this.el.SimpleBar = this, this.initDOM(), this.scrollbarX = this.trackX.querySelector(".".concat(this.classNames.scrollbar)), this.scrollbarY = this.trackY.querySelector(".".concat(this.classNames.scrollbar)), this.isRtl = "rtl" === getComputedStyle(this.contentEl).direction, this.scrollContentEl.style[this.isRtl ? "paddingLeft" : "paddingRight"] = "".concat(this.scrollbarWidth || this.offsetSize, "px"), this.scrollContentEl.style.marginBottom = "-".concat(2 * this.scrollbarWidth || this.offsetSize, "px"), this.contentEl.style.paddingBottom = "".concat(this.scrollbarWidth || this.offsetSize, "px"), 0 !== this.scrollbarWidth && (this.contentEl.style[this.isRtl ? "marginLeft" : "marginRight"] = "-".concat(this.scrollbarWidth, "px")), this.recalculate(), this.initListeners()
                }
            }, {
                key: "initDOM", value: function () {
                    var t = this;
                    if (Array.from(this.el.children).filter(function (e) {
                        return e.classList.contains(t.classNames.scrollContent)
                    }).length) this.trackX = this.el.querySelector(".".concat(this.classNames.track, ".horizontal")), this.trackY = this.el.querySelector(".".concat(this.classNames.track, ".vertical")), this.scrollContentEl = this.el.querySelector(".".concat(this.classNames.scrollContent)), this.contentEl = this.el.querySelector(".".concat(this.classNames.content)); else {
                        for (this.scrollContentEl = document.createElement("div"), this.contentEl = document.createElement("div"), this.scrollContentEl.classList.add(this.classNames.scrollContent), this.contentEl.classList.add(this.classNames.content); this.el.firstChild;) this.contentEl.appendChild(this.el.firstChild);
                        this.scrollContentEl.appendChild(this.contentEl), this.el.appendChild(this.scrollContentEl)
                    }
                    if (!this.trackX || !this.trackY) {
                        var e = document.createElement("div"), i = document.createElement("div");
                        e.classList.add(this.classNames.track), i.classList.add(this.classNames.scrollbar), e.appendChild(i), this.trackX = e.cloneNode(!0), this.trackX.classList.add("horizontal"), this.trackY = e.cloneNode(!0), this.trackY.classList.add("vertical"), this.el.insertBefore(this.trackX, this.el.firstChild), this.el.insertBefore(this.trackY, this.el.firstChild)
                    }
                    this.el.setAttribute("data-simplebar", "init")
                }
            }, {
                key: "initListeners", value: function () {
                    var t = this;
                    this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter), this.scrollbarY.addEventListener("mousedown", this.onDragY), this.scrollbarX.addEventListener("mousedown", this.onDragX), this.scrollContentEl.addEventListener("scroll", this.onScrollY), this.contentEl.addEventListener("scroll", this.onScrollX), "undefined" != typeof MutationObserver && (this.mutationObserver = new MutationObserver(function (e) {
                        e.forEach(function (e) {
                            (t.isChildNode(e.target) || e.addedNodes.length) && t.recalculate()
                        })
                    }), this.mutationObserver.observe(this.el, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    })), this.resizeObserver = new a.default(this.recalculate.bind(this)), this.resizeObserver.observe(this.el)
                }
            }, {
                key: "removeListeners", value: function () {
                    this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter), this.scrollbarX.removeEventListener("mousedown", this.onDragX), this.scrollbarY.removeEventListener("mousedown", this.onDragY), this.scrollContentEl.removeEventListener("scroll", this.onScrollY), this.contentEl.removeEventListener("scroll", this.onScrollX), this.mutationObserver.disconnect(), this.resizeObserver.disconnect()
                }
            }, {
                key: "onDragX", value: function (t) {
                    this.onDrag(t, "x")
                }
            }, {
                key: "onDragY", value: function (t) {
                    this.onDrag(t, "y")
                }
            }, {
                key: "onDrag", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "y";
                    t.preventDefault();
                    var i = "y" === e ? this.scrollbarY : this.scrollbarX, n = "y" === e ? t.pageY : t.pageX;
                    this.dragOffset[e] = n - i.getBoundingClientRect()[this.offsetAttr[e]], this.currentAxis = e, document.addEventListener("mousemove", this.drag), document.addEventListener("mouseup", this.onEndDrag)
                }
            }, {
                key: "drag", value: function (t) {
                    var e, i, n;
                    t.preventDefault(), "y" === this.currentAxis ? (e = t.pageY, i = this.trackY, n = this.scrollContentEl) : (e = t.pageX, i = this.trackX, n = this.contentEl);
                    var s = (e - i.getBoundingClientRect()[this.offsetAttr[this.currentAxis]] - this.dragOffset[this.currentAxis]) / i[this.sizeAttr[this.currentAxis]] * this.contentEl[this.scrollSizeAttr[this.currentAxis]];
                    n[this.scrollOffsetAttr[this.currentAxis]] = s
                }
            }, {
                key: "onEndDrag", value: function () {
                    document.removeEventListener("mousemove", this.drag), document.removeEventListener("mouseup", this.onEndDrag)
                }
            }, {
                key: "resizeScrollbar", value: function () {
                    var t, e, i, n, s, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "y";
                    "x" === o ? (t = this.trackX, e = this.scrollbarX, i = this.contentEl[this.scrollOffsetAttr[o]], n = this.contentSizeX, s = this.scrollbarXSize) : (t = this.trackY, e = this.scrollbarY, i = this.scrollContentEl[this.scrollOffsetAttr[o]], n = this.contentSizeY, s = this.scrollbarYSize);
                    var r = s / n, a = i / (n - s), l = Math.max(~~(r * s), this.options.scrollbarMinSize),
                        h = ~~((s - l) * a);
                    this.isVisible[o] = s < n, this.isVisible[o] || this.options.forceVisible ? (t.style.visibility = "visible", this.options.forceVisible ? e.style.visibility = "hidden" : e.style.visibility = "visible", "x" === o ? (e.style.left = "".concat(h, "px"), e.style.width = "".concat(l, "px")) : (e.style.top = "".concat(h, "px"), e.style.height = "".concat(l, "px"))) : t.style.visibility = "hidden"
                }
            }, {
                key: "onScrollX", value: function () {
                    this.flashScrollbar("x")
                }
            }, {
                key: "onScrollY", value: function () {
                    this.flashScrollbar("y")
                }
            }, {
                key: "onMouseEnter", value: function () {
                    this.flashScrollbar("x"), this.flashScrollbar("y")
                }
            }, {
                key: "flashScrollbar", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "y";
                    this.resizeScrollbar(t), this.showScrollbar(t)
                }
            }, {
                key: "showScrollbar", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "y";
                    this.isVisible[t] && ("x" === t ? this.scrollbarX.classList.add("visible") : this.scrollbarY.classList.add("visible"), this.options.autoHide && ("number" == typeof this.flashTimeout && window.clearTimeout(this.flashTimeout), this.flashTimeout = window.setTimeout(this.hideScrollbar.bind(this), 1e3)))
                }
            }, {
                key: "hideScrollbar", value: function () {
                    this.scrollbarX.classList.remove("visible"), this.scrollbarY.classList.remove("visible"), "number" == typeof this.flashTimeout && window.clearTimeout(this.flashTimeout)
                }
            }, {
                key: "recalculate", value: function () {
                    this.contentSizeX = this.contentEl[this.scrollSizeAttr.x], this.contentSizeY = this.contentEl[this.scrollSizeAttr.y] - (this.scrollbarWidth || this.offsetSize), this.scrollbarXSize = this.trackX[this.sizeAttr.x], this.scrollbarYSize = this.trackY[this.sizeAttr.y], this.resizeScrollbar("x"), this.resizeScrollbar("y"), this.options.autoHide || (this.showScrollbar("x"), this.showScrollbar("y"))
                }
            }, {
                key: "getScrollElement", value: function () {
                    return "y" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "y") ? this.scrollContentEl : this.contentEl
                }
            }, {
                key: "getContentElement", value: function () {
                    return this.contentEl
                }
            }, {
                key: "unMount", value: function () {
                    this.removeListeners(), this.el.SimpleBar = null
                }
            }, {
                key: "isChildNode", value: function (t) {
                    return null !== t && (t === this.el || this.isChildNode(t.parentNode))
                }
            }]) && s(e.prototype, i), n && s(e, n), t;
            var e, i, n
        }();
        e.default = l, l.initHtmlApi()
    }, function (t, e, i) {
        i(29), i(46), t.exports = i(3).Array.from
    }, function (t, e, i) {
        "use strict";
        var n = i(30)(!0);
        i(31)(String, "String", function (t) {
            this._t = String(t), this._i = 0
        }, function () {
            var t, e = this._t, i = this._i;
            return i >= e.length ? {value: void 0, done: !0} : (t = n(e, i), this._i += t.length, {value: t, done: !1})
        })
    }, function (t, e, i) {
        var n = i(8), s = i(9);
        t.exports = function (t) {
            return function (e, i) {
                var o, r, a = String(s(e)), l = n(i), h = a.length;
                return l < 0 || l >= h ? t ? "" : void 0 : (o = a.charCodeAt(l)) < 55296 || o > 56319 || l + 1 === h || (r = a.charCodeAt(l + 1)) < 56320 || r > 57343 ? t ? a.charAt(l) : o : t ? a.slice(l, l + 2) : r - 56320 + (o - 55296 << 10) + 65536
            }
        }
    }, function (t, e, i) {
        "use strict";
        var n = i(32), s = i(15), o = i(18), r = i(4), a = i(2), l = i(13), h = i(36), c = i(25), u = i(45),
            d = i(0)("iterator"), p = !([].keys && "next" in [].keys()), f = function () {
                return this
            };
        t.exports = function (t, e, i, m, g, v, y) {
            h(i, e, m);
            var _, b, x, w = function (t) {
                    if (!p && t in T) return T[t];
                    switch (t) {
                        case"keys":
                        case"values":
                            return function () {
                                return new i(this, t)
                            }
                    }
                    return function () {
                        return new i(this, t)
                    }
                }, $ = e + " Iterator", C = "values" == g, k = !1, T = t.prototype,
                E = T[d] || T["@@iterator"] || g && T[g], S = E || w(g), O = g ? C ? w("entries") : S : void 0,
                D = "Array" == e && T.entries || E;
            if (D && (x = u(D.call(new t))) !== Object.prototype && x.next && (c(x, $, !0), n || a(x, d) || r(x, d, f)), C && E && "values" !== E.name && (k = !0, S = function () {
                return E.call(this)
            }), n && !y || !p && !k && T[d] || r(T, d, S), l[e] = S, l[$] = f, g) if (_ = {
                values: C ? S : w("values"),
                keys: v ? S : w("keys"),
                entries: O
            }, y) for (b in _) b in T || o(T, b, _[b]); else s(s.P + s.F * (p || k), e, _);
            return _
        }
    }, function (t, e) {
        t.exports = !1
    }, function (t, e, i) {
        t.exports = !i(7) && !i(16)(function () {
            return 7 != Object.defineProperty(i(17)("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (t, e, i) {
        var n = i(10);
        t.exports = function (t, e) {
            if (!n(t)) return t;
            var i, s;
            if (e && "function" == typeof (i = t.toString) && !n(s = i.call(t))) return s;
            if ("function" == typeof (i = t.valueOf) && !n(s = i.call(t))) return s;
            if (!e && "function" == typeof (i = t.toString) && !n(s = i.call(t))) return s;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function (t, e) {
        t.exports = function (t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, function (t, e, i) {
        "use strict";
        var n = i(37), s = i(11), o = i(25), r = {};
        i(4)(r, i(0)("iterator"), function () {
            return this
        }), t.exports = function (t, e, i) {
            t.prototype = n(r, {next: s(1, i)}), o(t, e + " Iterator")
        }
    }, function (t, e, i) {
        var n = i(6), s = i(38), o = i(24), r = i(14)("IE_PROTO"), a = function () {
        }, l = function () {
            var t, e = i(17)("iframe"), n = o.length;
            for (e.style.display = "none", i(44).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), l = t.F; n--;) delete l.prototype[o[n]];
            return l()
        };
        t.exports = Object.create || function (t, e) {
            var i;
            return null !== t ? (a.prototype = n(t), i = new a, a.prototype = null, i[r] = t) : i = l(), void 0 === e ? i : s(i, e)
        }
    }, function (t, e, i) {
        var n = i(5), s = i(6), o = i(39);
        t.exports = i(7) ? Object.defineProperties : function (t, e) {
            s(t);
            for (var i, r = o(e), a = r.length, l = 0; a > l;) n.f(t, i = r[l++], e[i]);
            return t
        }
    }, function (t, e, i) {
        var n = i(40), s = i(24);
        t.exports = Object.keys || function (t) {
            return n(t, s)
        }
    }, function (t, e, i) {
        var n = i(2), s = i(20), o = i(42)(!1), r = i(14)("IE_PROTO");
        t.exports = function (t, e) {
            var i, a = s(t), l = 0, h = [];
            for (i in a) i != r && n(a, i) && h.push(i);
            for (; e.length > l;) n(a, i = e[l++]) && (~o(h, i) || h.push(i));
            return h
        }
    }, function (t, e, i) {
        var n = i(21);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
            return "String" == n(t) ? t.split("") : Object(t)
        }
    }, function (t, e, i) {
        var n = i(20), s = i(22), o = i(43);
        t.exports = function (t) {
            return function (e, i, r) {
                var a, l = n(e), h = s(l.length), c = o(r, h);
                if (t && i != i) {
                    for (; h > c;) if ((a = l[c++]) != a) return !0
                } else for (; h > c; c++) if ((t || c in l) && l[c] === i) return t || c || 0;
                return !t && -1
            }
        }
    }, function (t, e, i) {
        var n = i(8), s = Math.max, o = Math.min;
        t.exports = function (t, e) {
            return (t = n(t)) < 0 ? s(t + e, 0) : o(t, e)
        }
    }, function (t, e, i) {
        var n = i(1).document;
        t.exports = n && n.documentElement
    }, function (t, e, i) {
        var n = i(2), s = i(26), o = i(14)("IE_PROTO"), r = Object.prototype;
        t.exports = Object.getPrototypeOf || function (t) {
            return t = s(t), n(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? r : null
        }
    }, function (t, e, i) {
        "use strict";
        var n = i(19), s = i(15), o = i(26), r = i(47), a = i(48), l = i(22), h = i(49), c = i(50);
        s(s.S + s.F * !i(52)(function (t) {
            Array.from(t)
        }), "Array", {
            from: function (t) {
                var e, i, s, u, d = o(t), p = "function" == typeof this ? this : Array, f = arguments.length,
                    m = f > 1 ? arguments[1] : void 0, g = void 0 !== m, v = 0, y = c(d);
                if (g && (m = n(m, f > 2 ? arguments[2] : void 0, 2)), void 0 == y || p == Array && a(y)) for (e = l(d.length), i = new p(e); e > v; v++) h(i, v, g ? m(d[v], v) : d[v]); else for (u = y.call(d), i = new p; !(s = u.next()).done; v++) h(i, v, g ? r(u, m, [s.value, v], !0) : s.value);
                return i.length = v, i
            }
        })
    }, function (t, e, i) {
        var n = i(6);
        t.exports = function (t, e, i, s) {
            try {
                return s ? e(n(i)[0], i[1]) : e(i)
            } catch (e) {
                var o = t.return;
                throw void 0 !== o && n(o.call(t)), e
            }
        }
    }, function (t, e, i) {
        var n = i(13), s = i(0)("iterator"), o = Array.prototype;
        t.exports = function (t) {
            return void 0 !== t && (n.Array === t || o[s] === t)
        }
    }, function (t, e, i) {
        "use strict";
        var n = i(5), s = i(11);
        t.exports = function (t, e, i) {
            e in t ? n.f(t, e, s(0, i)) : t[e] = i
        }
    }, function (t, e, i) {
        var n = i(51), s = i(0)("iterator"), o = i(13);
        t.exports = i(3).getIteratorMethod = function (t) {
            if (void 0 != t) return t[s] || t["@@iterator"] || o[n(t)]
        }
    }, function (t, e, i) {
        var n = i(21), s = i(0)("toStringTag"), o = "Arguments" == n(function () {
            return arguments
        }());
        t.exports = function (t) {
            var e, i, r;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (i = function (t, e) {
                try {
                    return t[e]
                } catch (t) {
                }
            }(e = Object(t), s)) ? i : o ? n(e) : "Object" == (r = n(e)) && "function" == typeof e.callee ? "Arguments" : r
        }
    }, function (t, e, i) {
        var n = i(0)("iterator"), s = !1;
        try {
            var o = [7][n]();
            o.return = function () {
                s = !0
            }, Array.from(o, function () {
                throw 2
            })
        } catch (t) {
        }
        t.exports = function (t, e) {
            if (!e && !s) return !1;
            var i = !1;
            try {
                var o = [7], r = o[n]();
                r.next = function () {
                    return {done: i = !0}
                }, o[n] = function () {
                    return r
                }, t(o)
            } catch (t) {
            }
            return i
        }
    }, function (t, e, i) {
        var n, s, o;
        s = [], void 0 !== (o = "function" == typeof (n = function () {
            "use strict";
            return function () {
                if ("undefined" == typeof document) return 0;
                var t, e = document.body, i = document.createElement("div"), n = i.style;
                return n.position = "absolute", n.top = n.left = "-9999px", n.width = n.height = "100px", n.overflow = "scroll", e.appendChild(i), t = i.offsetWidth - i.clientWidth, e.removeChild(i), t
            }
        }) ? n.apply(e, s) : n) && (t.exports = o)
    }, function (t, e, i) {
        (function (e) {
            function i(t) {
                var e = typeof t;
                return !!t && ("object" == e || "function" == e)
            }

            function n(t) {
                if ("number" == typeof t) return t;
                if ("symbol" == typeof (e = t) || (n = e) && "object" == typeof n && m.call(e) == r) return o;
                var e, n;
                if (i(t)) {
                    var s = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = i(s) ? s + "" : s
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = t.replace(a, "");
                var d = h.test(t);
                return d || c.test(t) ? u(t.slice(2), d ? 2 : 8) : l.test(t) ? o : +t
            }

            var s = "Expected a function", o = NaN, r = "[object Symbol]", a = /^\s+|\s+$/g, l = /^[-+]0x[0-9a-f]+$/i,
                h = /^0b[01]+$/i, c = /^0o[0-7]+$/i, u = parseInt,
                d = "object" == typeof e && e && e.Object === Object && e,
                p = "object" == typeof self && self && self.Object === Object && self,
                f = d || p || Function("return this")(), m = Object.prototype.toString, g = Math.max, v = Math.min,
                y = function () {
                    return f.Date.now()
                };
            t.exports = function (t, e, o) {
                function r(e) {
                    var i = u, n = d;
                    return u = d = void 0, b = e, f = t.apply(n, i)
                }

                function a(t) {
                    var i = t - _;
                    return void 0 === _ || i >= e || i < 0 || w && t - b >= p
                }

                function l() {
                    var t, i, n = y();
                    if (a(n)) return h(n);
                    m = setTimeout(l, (i = e - ((t = n) - _), w ? v(i, p - (t - b)) : i))
                }

                function h(t) {
                    return m = void 0, $ && u ? r(t) : (u = d = void 0, f)
                }

                function c() {
                    var t, i = y(), n = a(i);
                    if (u = arguments, d = this, _ = i, n) {
                        if (void 0 === m) return t = _, b = t, m = setTimeout(l, e), x ? r(t) : f;
                        if (w) return m = setTimeout(l, e), r(_)
                    }
                    return void 0 === m && (m = setTimeout(l, e)), f
                }

                var u, d, p, f, m, _, b = 0, x = !1, w = !1, $ = !0;
                if ("function" != typeof t) throw new TypeError(s);
                return e = n(e) || 0, i(o) && (x = !!o.leading, p = (w = "maxWait" in o) ? g(n(o.maxWait) || 0, e) : p, $ = "trailing" in o ? !!o.trailing : $), c.cancel = function () {
                    void 0 !== m && clearTimeout(m), b = 0, u = _ = d = m = void 0
                }, c.flush = function () {
                    return void 0 === m ? f : h(y())
                }, c
            }
        }).call(e, i(55))
    }, function (t, e) {
        var i;
        i = function () {
            return this
        }();
        try {
            i = i || Function("return this")() || (0, eval)("this")
        } catch (t) {
            "object" == typeof window && (i = window)
        }
        t.exports = i
    }, function (t, e, i) {
        "use strict";

        function n(t) {
            return parseFloat(t) || 0
        }

        function s(t) {
            return Array.prototype.slice.call(arguments, 1).reduce(function (e, i) {
                return e + n(t["border-" + i + "-width"])
            }, 0)
        }

        function o(t) {
            var e = t.clientWidth, i = t.clientHeight;
            if (!e && !i) return v;
            var o = getComputedStyle(t), r = function (t) {
                for (var e = {}, i = 0, s = ["top", "right", "bottom", "left"]; i < s.length; i += 1) {
                    var o = s[i], r = t["padding-" + o];
                    e[o] = n(r)
                }
                return e
            }(o), l = r.left + r.right, h = r.top + r.bottom, c = n(o.width), u = n(o.height);
            if ("border-box" === o.boxSizing && (Math.round(c + l) !== e && (c -= s(o, "left", "right") + l), Math.round(u + h) !== i && (u -= s(o, "top", "bottom") + h)), t !== document.documentElement) {
                var d = Math.round(c + l) - e, p = Math.round(u + h) - i;
                1 !== Math.abs(d) && (c -= d), 1 !== Math.abs(p) && (u -= p)
            }
            return a(r.left, r.top, c, u)
        }

        function r(t) {
            return h ? y(t) ? a(0, 0, (e = t.getBBox()).width, e.height) : o(t) : v;
            var e
        }

        function a(t, e, i, n) {
            return {x: t, y: e, width: i, height: n}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var l = function () {
                function t(t, e) {
                    var i = -1;
                    return t.some(function (t, n) {
                        return t[0] === e && (i = n, !0)
                    }), i
                }

                return "undefined" != typeof Map ? Map : function () {
                    function e() {
                        this.__entries__ = []
                    }

                    var i = {size: {}};
                    return i.size.get = function () {
                        return this.__entries__.length
                    }, e.prototype.get = function (e) {
                        var i = t(this.__entries__, e), n = this.__entries__[i];
                        return n && n[1]
                    }, e.prototype.set = function (e, i) {
                        var n = t(this.__entries__, e);
                        ~n ? this.__entries__[n][1] = i : this.__entries__.push([e, i])
                    }, e.prototype.delete = function (e) {
                        var i = this.__entries__, n = t(i, e);
                        ~n && i.splice(n, 1)
                    }, e.prototype.has = function (e) {
                        return !!~t(this.__entries__, e)
                    }, e.prototype.clear = function () {
                        this.__entries__.splice(0)
                    }, e.prototype.forEach = function (t, e) {
                        void 0 === e && (e = null);
                        for (var i = 0, n = this.__entries__; i < n.length; i += 1) {
                            var s = n[i];
                            t.call(e, s[1], s[0])
                        }
                    }, Object.defineProperties(e.prototype, i), e
                }()
            }(), h = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
            c = "function" == typeof requestAnimationFrame ? requestAnimationFrame : function (t) {
                return setTimeout(function () {
                    return t(Date.now())
                }, 1e3 / 60)
            }, u = 2, d = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
            p = "undefined" != typeof navigator && /Trident\/.*rv:11/.test(navigator.userAgent),
            f = "undefined" != typeof MutationObserver && !p, m = function () {
                this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function (t, e) {
                    function i() {
                        o && (o = !1, t()), r && s()
                    }

                    function n() {
                        c(i)
                    }

                    function s() {
                        var t = Date.now();
                        if (o) {
                            if (t - a < u) return;
                            r = !0
                        } else o = !0, r = !1, setTimeout(n, e);
                        a = t
                    }

                    var o = !1, r = !1, a = 0;
                    return s
                }(this.refresh.bind(this), 20)
            };
        m.prototype.addObserver = function (t) {
            ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
        }, m.prototype.removeObserver = function (t) {
            var e = this.observers_, i = e.indexOf(t);
            ~i && e.splice(i, 1), !e.length && this.connected_ && this.disconnect_()
        }, m.prototype.refresh = function () {
            this.updateObservers_() && this.refresh()
        }, m.prototype.updateObservers_ = function () {
            var t = this.observers_.filter(function (t) {
                return t.gatherActive(), t.hasActive()
            });
            return t.forEach(function (t) {
                return t.broadcastActive()
            }), t.length > 0
        }, m.prototype.connect_ = function () {
            h && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), f ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, m.prototype.disconnect_ = function () {
            h && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, m.prototype.onTransitionEnd_ = function (t) {
            var e = t.propertyName;
            d.some(function (t) {
                return !!~e.indexOf(t)
            }) && this.refresh()
        }, m.getInstance = function () {
            return this.instance_ || (this.instance_ = new m), this.instance_
        }, m.instance_ = null;
        var g = function (t, e) {
            for (var i = 0, n = Object.keys(e); i < n.length; i += 1) {
                var s = n[i];
                Object.defineProperty(t, s, {value: e[s], enumerable: !1, writable: !1, configurable: !0})
            }
            return t
        }, v = a(0, 0, 0, 0), y = "undefined" != typeof SVGGraphicsElement ? function (t) {
            return t instanceof SVGGraphicsElement
        } : function (t) {
            return t instanceof SVGElement && "function" == typeof t.getBBox
        }, _ = function (t) {
            this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = a(0, 0, 0, 0), this.target = t
        };
        _.prototype.isActive = function () {
            var t = r(this.target);
            return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
        }, _.prototype.broadcastRect = function () {
            var t = this.contentRect_;
            return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
        };
        var b = function (t, e) {
            var i, n, s, o, r, a, l,
                h = (n = (i = e).x, s = i.y, o = i.width, r = i.height, a = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, l = Object.create(a.prototype), g(l, {
                    x: n,
                    y: s,
                    width: o,
                    height: r,
                    top: s,
                    right: n + o,
                    bottom: r + s,
                    left: n
                }), l);
            g(this, {target: t, contentRect: h})
        }, x = function (t, e, i) {
            if ("function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function.");
            this.activeObservations_ = [], this.observations_ = new l, this.callback_ = t, this.controller_ = e, this.callbackCtx_ = i
        };
        x.prototype.observe = function (t) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(t instanceof Element)) throw new TypeError('parameter 1 is not of type "Element".');
                var e = this.observations_;
                e.has(t) || (e.set(t, new _(t)), this.controller_.addObserver(this), this.controller_.refresh())
            }
        }, x.prototype.unobserve = function (t) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(t instanceof Element)) throw new TypeError('parameter 1 is not of type "Element".');
                var e = this.observations_;
                e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this))
            }
        }, x.prototype.disconnect = function () {
            this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, x.prototype.gatherActive = function () {
            var t = this;
            this.clearActive(), this.observations_.forEach(function (e) {
                e.isActive() && t.activeObservations_.push(e)
            })
        }, x.prototype.broadcastActive = function () {
            if (this.hasActive()) {
                var t = this.callbackCtx_, e = this.activeObservations_.map(function (t) {
                    return new b(t.target, t.broadcastRect())
                });
                this.callback_.call(t, e, t), this.clearActive()
            }
        }, x.prototype.clearActive = function () {
            this.activeObservations_.splice(0)
        }, x.prototype.hasActive = function () {
            return this.activeObservations_.length > 0
        };
        var w = "undefined" != typeof WeakMap ? new WeakMap : new l, $ = function (t) {
            if (!(this instanceof $)) throw new TypeError("Cannot call a class as a function");
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            var e = m.getInstance(), i = new x(t, e, this);
            w.set(this, i)
        };
        ["observe", "unobserve", "disconnect"].forEach(function (t) {
            $.prototype[t] = function () {
                return (e = w.get(this))[t].apply(e, arguments);
                var e
            }
        });
        var C = "undefined" != typeof ResizeObserver ? ResizeObserver : $;
        e.default = C
    }, function (t, e) {
    }, function (t, e, i) {
        "use strict";
        var n = Object.getOwnPropertySymbols, s = Object.prototype.hasOwnProperty,
            o = Object.prototype.propertyIsEnumerable;
        t.exports = function () {
            try {
                if (!Object.assign) return !1;
                var t = new String("abc");
                if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
                if ("0123456789" !== Object.getOwnPropertyNames(e).map(function (t) {
                    return e[t]
                }).join("")) return !1;
                var n = {};
                return "abcdefghijklmnopqrst".split("").forEach(function (t) {
                    n[t] = t
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
            } catch (t) {
                return !1
            }
        }() ? Object.assign : function (t, e) {
            for (var i, r, a = function (t) {
                if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(t)
            }(t), l = 1; l < arguments.length; l++) {
                i = Object(arguments[l]);
                for (var h in i) s.call(i, h) && (a[h] = i[h]);
                if (n) {
                    r = n(i);
                    for (var c = 0; c < r.length; c++) o.call(i, r[c]) && (a[r[c]] = i[r[c]])
                }
            }
            return a
        }
    }]).default
});
var Magnifier = function (t, e) {
    "use strict";
    var i = e || {}, n = null, s = {
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            lensW: 0,
            lensH: 0,
            lensBgX: 0,
            lensBgY: 0,
            largeW: 0,
            largeH: 0,
            largeL: 0,
            largeT: 0,
            zoom: 2,
            zoomMin: 1.1,
            zoomMax: 5,
            mode: "outside",
            largeWrapperId: void 0 !== i.largeWrapper && i.largeWrapper.id || null,
            status: 0,
            zoomAttached: !1,
            zoomable: void 0 !== i.zoomable && i.zoomable,
            onthumbenter: void 0 !== i.onthumbenter ? i.onthumbenter : null,
            onthumbmove: void 0 !== i.onthumbmove ? i.onthumbmove : null,
            onthumbleave: void 0 !== i.onthumbleave ? i.onthumbleave : null,
            onzoom: void 0 !== i.onzoom ? i.onzoom : null
        }, o = {t: 0, l: 0, x: 0, y: 0}, r = 0, a = 0, l = "", h = null, c = null, u = void 0 !== i.zoom ? i.zoom : s.zoom,
        d = void 0 !== i.zoomMin ? i.zoomMin : s.zoomMin, p = void 0 !== i.zoomMax ? i.zoomMax : s.zoomMax,
        f = i.mode || s.mode, m = {}, g = !1, v = 0, y = function (t) {
            var e = "", i = t.charAt(0), n = null;
            if ("#" !== i && "." !== i || (e = t.substr(1, t.length)), "" !== e) switch (i) {
                case"#":
                    n = document.getElementById(e);
                    break;
                case".":
                    n = function (t) {
                        var e = [], i = null, n = 0, s = "", o = 0, r = 0;
                        if (document.getElementsByClassName) e = document.getElementsByClassName(t); else for (n = (i = document.getElementsByTagName("*")).length, s = new RegExp("(^|\\s)" + t + "(\\s|$)"); o < n; o += 1) s.test(i[o].className) && (e[r] = i[o], r += 1);
                        return e
                    }(e)
            }
            return n
        }, _ = function (t, e, i, n) {
            var s = y("#" + t + "-lens"), o = null;
            1 === m[t].status ? ((o = document.createElement("div")).className = "magnifier-loader-text", s.className = "magnifier-loader hidden", o.appendChild(document.createTextNode("Loading...")), s.appendChild(o)) : 2 === m[t].status && (s.className = "magnifier-lens hidden", s.removeChild(s.childNodes[0]), s.style.background = "url(" + e.src + ") no-repeat 0 0 scroll", i.id = t + "-large", i.style.width = m[t].largeW + "px", i.style.height = m[t].largeH + "px", i.className = "magnifier-large hidden", "inside" === m[t].mode ? s.appendChild(i) : n.appendChild(i)), s.style.width = m[t].lensW + "px", s.style.height = m[t].lensH + "px"
        }, b = function () {
            var t = o.x - s.x, e = o.y - s.y, i = 0, n = 0;
            g = !(t < 0 || e < 0 || t > s.w || e > s.h), n = t - s.lensW / 2, i = e - s.lensH / 2, "inside" !== s.mode && (t < s.lensW / 2 && (n = 0), e < s.lensH / 2 && (i = 0), t - s.w + s.lensW / 2 > 0 && (n = s.w - (s.lensW + 2)), e - s.h + s.lensH / 2 > 0 && (i = s.h - (s.lensH + 2))), o.l = Math.round(n), o.t = Math.round(i), s.lensBgX = o.l + 1, s.lensBgY = o.t + 1, "inside" === s.mode ? (s.largeL = Math.round(t * (s.zoom - s.lensW / s.w)), s.largeT = Math.round(e * (s.zoom - s.lensH / s.h))) : (s.largeL = Math.round(s.lensBgX * s.zoom * (s.largeWrapperW / s.w)), s.largeT = Math.round(s.lensBgY * s.zoom * (s.largeWrapperH / s.h)))
        }, x = function (t) {
            var e = t.wheelDelta > 0 || t.detail < 0 ? .1 : -.1, i = s.onzoom, r = 1, a = 0, l = 0;
            t.preventDefault && t.preventDefault(), t.returnValue = !1, s.zoom = Math.round(10 * (s.zoom + e)) / 10, s.zoom >= s.zoomMax ? s.zoom = s.zoomMax : s.zoom >= s.zoomMin ? (s.lensW = Math.round(s.w / s.zoom), s.lensH = Math.round(s.h / s.zoom), "inside" === s.mode ? (a = s.w, l = s.h) : (a = s.largeWrapperW, l = s.largeWrapperH, r = s.largeWrapperW / s.w), s.largeW = Math.round(s.zoom * a), s.largeH = Math.round(s.zoom * l), b(), h.style.left = o.l + "px", h.style.top = o.t + "px", h.style.width = s.lensW + "px", h.style.height = s.lensH + "px", h.style.backgroundPosition = "-" + s.lensBgX + "px -" + s.lensBgY + "px", c.style.left = "-" + s.largeL + "px", c.style.top = "-" + s.largeT + "px", c.style.width = s.largeW + "px", c.style.height = s.largeH + "px", null !== i && i({
                thumb: n,
                lens: h,
                large: c,
                x: o.x,
                y: o.y,
                zoom: Math.round(s.zoom * r * 10) / 10,
                w: s.lensW,
                h: s.lensH
            })) : s.zoom = s.zoomMin
        }, w = function () {
            s = m[l], h = y("#" + l + "-lens"), 2 === s.status ? (h.className = "magnifier-lens", !1 === s.zoomAttached && (void 0 !== s.zoomable && !0 === s.zoomable && (t.attach("mousewheel", h, x), window.addEventListener && h.addEventListener("DOMMouseScroll", function (t) {
                x(t)
            })), s.zoomAttached = !0), (c = y("#" + l + "-large")).className = "magnifier-large") : 1 === s.status && (h.className = "magnifier-loader")
        }, $ = function () {
            if (s.status > 0) {
                var t = s.onthumbleave;
                null !== t && t({
                    thumb: n,
                    lens: h,
                    large: c,
                    x: o.x,
                    y: o.y
                }), -1 === h.className.indexOf("hidden") && (h.className += " hidden", n.className = s.thumbCssClass, null !== c && (c.className += " hidden"))
            }
        }, C = function () {
            if (a !== s.status && w(), s.status > 0) {
                n.className = s.thumbCssClass + " opaque", 1 === s.status ? h.className = "magnifier-loader" : 2 === s.status && (h.className = "magnifier-lens", c.className = "magnifier-large", c.style.left = "-" + s.largeL + "px", c.style.top = "-" + s.largeT + "px"), h.style.left = o.l + "px", h.style.top = o.t + "px", h.style.backgroundPosition = "-" + s.lensBgX + "px -" + s.lensBgY + "px";
                var t = s.onthumbmove;
                null !== t && t({thumb: n, lens: h, large: c, x: o.x, y: o.y})
            }
            a = s.status
        }, k = function (t, e) {
            var i = t.getBoundingClientRect(), n = 0, s = 0;
            e.x = i.left, e.y = i.top, e.w = Math.round(i.right - e.x), e.h = Math.round(i.bottom - e.y), e.lensW = Math.round(e.w / e.zoom), e.lensH = Math.round(e.h / e.zoom), "inside" === e.mode ? (n = e.w, s = e.h) : (n = e.largeWrapperW, s = e.largeWrapperH), e.largeW = Math.round(e.zoom * n), e.largeH = Math.round(e.zoom * s)
        };
    this.attach = function (t) {
        if (void 0 === t.thumb) throw{
            name: "Magnifier error", message: "Please set thumbnail", toString: function () {
                return this.name + ": " + this.message
            }
        };
        var e = y(t.thumb), i = 0;
        if (void 0 !== e.length) for (; i < e.length; i += 1) t.thumb = e[i], this.set(t); else t.thumb = e, this.set(t)
    }, this.setThumb = function (t) {
        n = t
    }, this.set = function (e) {
        if (void 0 !== m[e.thumb.id]) return n = e.thumb, !1;
        var i, a, g, x = new Image, T = new Image, E = e.thumb, S = E.id, O = null, D = null,
            M = y("#" + e.largeWrapper) || y("#" + E.getAttribute("data-large-img-wrapper")) || y("#" + s.largeWrapperId),
            z = e.zoom || E.getAttribute("data-zoom") || u, N = e.zoomMin || E.getAttribute("data-zoom-min") || d,
            A = e.zoomMax || E.getAttribute("data-zoom-max") || p, j = e.mode || E.getAttribute("data-mode") || f,
            L = void 0 !== e.onthumbenter ? e.onthumbenter : s.onthumbenter,
            F = void 0 !== e.onthumbleave ? e.onthumbleave : s.onthumbleave,
            P = void 0 !== e.onthumbmove ? e.onthumbmove : s.onthumbmove, H = void 0 !== e.onzoom ? e.onzoom : s.onzoom;
        if (D = void 0 === e.large ? null !== e.thumb.getAttribute("data-large-img-url") ? e.thumb.getAttribute("data-large-img-url") : e.thumb.src : e.large, null === M && "inside" !== j) throw{
            name: "Magnifier error",
            message: "Please specify large image wrapper DOM element",
            toString: function () {
                return this.name + ": " + this.message
            }
        };
        void 0 !== e.zoomable ? O = e.zoomable : null !== E.getAttribute("data-zoomable") ? O = "true" === E.getAttribute("data-zoomable") : void 0 !== s.zoomable && (O = s.zoomable), "" === E.id && (S = E.id = "magnifier-item-" + r, r += 1), i = E, a = S, (g = document.createElement("div")).id = a + "-lens", g.className = "magnifier-loader", i.parentNode.appendChild(g), m[S] = {
            zoom: z,
            zoomMin: N,
            zoomMax: A,
            mode: j,
            zoomable: O,
            thumbCssClass: E.className,
            zoomAttached: !1,
            status: 0,
            largeUrl: D,
            largeWrapperId: "outside" === j ? M.id : null,
            largeWrapperW: "outside" === j ? M.offsetWidth : null,
            largeWrapperH: "outside" === j ? M.offsetHeight : null,
            onzoom: H,
            onthumbenter: L,
            onthumbleave: F,
            onthumbmove: P
        }, t.attach("mouseover", E, function (t, e) {
            0 !== s.status && $(), l = e.id, n = e, w(), k(n, s), o.x = t.clientX, o.y = t.clientY, b(), C();
            var i = s.onthumbenter;
            null !== i && i({thumb: n, lens: h, large: c, x: o.x, y: o.y})
        }, !1), t.attach("mousemove", E, function (t, e) {
            v = 1
        }), t.attach("load", x, function () {
            m[S].status = 1, k(E, m[S]), _(S), t.attach("load", T, function () {
                m[S].status = 2, _(S, E, T, M)
            }), T.src = m[S].largeUrl
        }), x.src = E.src
    }, t.attach("mousemove", document, function (t) {
        o.x = t.clientX, o.y = t.clientY, b(), !0 === g ? C() : (0 !== v && $(), v = 0)
    }, !1), t.attach("scroll", window, function () {
        null !== n && k(n, s)
    })
};
!function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (t) {
    var e = Array.prototype.slice, i = Array.prototype.splice, n = {
        topSpacing: 0,
        bottomSpacing: 0,
        className: "is-sticky",
        wrapperClassName: "sticky-wrapper",
        center: !1,
        getWidthFrom: "",
        widthFromWrapper: !0,
        responsiveWidth: !1,
        zIndex: "inherit"
    }, s = t(window), o = t(document), r = [], a = s.height(), l = function () {
        for (var e = s.scrollTop(), i = o.height(), n = i - a, l = e > n ? n - e : 0, h = 0, c = r.length; h < c; h++) {
            var u = r[h], d = u.stickyWrapper.offset().top - u.topSpacing - l;
            if (u.stickyWrapper.css("height", u.stickyElement.outerHeight()), e <= d) null !== u.currentTop && (u.stickyElement.css({
                width: "",
                position: "",
                top: "",
                "z-index": ""
            }), u.stickyElement.parent().removeClass(u.className), u.stickyElement.trigger("sticky-end", [u]), u.currentTop = null); else {
                var p, f = i - u.stickyElement.outerHeight() - u.topSpacing - u.bottomSpacing - e - l;
                if (f < 0 ? f += u.topSpacing : f = u.topSpacing, u.currentTop !== f) u.getWidthFrom ? (padding = u.stickyElement.innerWidth() - u.stickyElement.width(), p = t(u.getWidthFrom).width() - padding || null) : u.widthFromWrapper && (p = u.stickyWrapper.width()), null == p && (p = u.stickyElement.width()), u.stickyElement.css("width", p).css("position", "fixed").css("top", f).css("z-index", u.zIndex), u.stickyElement.parent().addClass(u.className), null === u.currentTop ? u.stickyElement.trigger("sticky-start", [u]) : u.stickyElement.trigger("sticky-update", [u]), u.currentTop === u.topSpacing && u.currentTop > f || null === u.currentTop && f < u.topSpacing ? u.stickyElement.trigger("sticky-bottom-reached", [u]) : null !== u.currentTop && f === u.topSpacing && u.currentTop < f && u.stickyElement.trigger("sticky-bottom-unreached", [u]), u.currentTop = f;
                var m = u.stickyWrapper.parent();
                u.stickyElement.offset().top + u.stickyElement.outerHeight() >= m.offset().top + m.outerHeight() && u.stickyElement.offset().top <= u.topSpacing ? u.stickyElement.css("position", "absolute").css("top", "").css("bottom", 0).css("z-index", "") : u.stickyElement.css("position", "fixed").css("top", f).css("bottom", "").css("z-index", u.zIndex)
            }
        }
    }, h = function () {
        a = s.height();
        for (var e = 0, i = r.length; e < i; e++) {
            var n = r[e], o = null;
            n.getWidthFrom ? n.responsiveWidth && (o = t(n.getWidthFrom).width()) : n.widthFromWrapper && (o = n.stickyWrapper.width()), null != o && n.stickyElement.css("width", o)
        }
    }, c = {
        init: function (e) {
            return this.each(function () {
                var i = t.extend({}, n, e), s = t(this), o = s.attr("id"),
                    a = o ? o + "-" + n.wrapperClassName : n.wrapperClassName,
                    l = t("<div></div>").attr("id", a).addClass(i.wrapperClassName);
                s.wrapAll(function () {
                    if (0 == t(this).parent("#" + a).length) return l
                });
                var h = s.parent();
                i.center && h.css({
                    width: s.outerWidth(),
                    marginLeft: "auto",
                    marginRight: "auto"
                }), "right" === s.css("float") && s.css({float: "none"}).parent().css({float: "right"}), i.stickyElement = s, i.stickyWrapper = h, i.currentTop = null, r.push(i), c.setWrapperHeight(this), c.setupChangeListeners(this)
            })
        }, setWrapperHeight: function (e) {
            var i = t(e), n = i.parent();
            n && n.css("height", i.outerHeight())
        }, setupChangeListeners: function (t) {
            window.MutationObserver ? new window.MutationObserver(function (e) {
                (e[0].addedNodes.length || e[0].removedNodes.length) && c.setWrapperHeight(t)
            }).observe(t, {
                subtree: !0,
                childList: !0
            }) : window.addEventListener ? (t.addEventListener("DOMNodeInserted", function () {
                c.setWrapperHeight(t)
            }, !1), t.addEventListener("DOMNodeRemoved", function () {
                c.setWrapperHeight(t)
            }, !1)) : window.attachEvent && (t.attachEvent("onDOMNodeInserted", function () {
                c.setWrapperHeight(t)
            }), t.attachEvent("onDOMNodeRemoved", function () {
                c.setWrapperHeight(t)
            }))
        }, update: l, unstick: function (e) {
            return this.each(function () {
                for (var e = t(this), n = -1, s = r.length; s-- > 0;) r[s].stickyElement.get(0) === this && (i.call(r, s, 1), n = s);
                -1 !== n && (e.unwrap(), e.css({width: "", position: "", top: "", float: "", "z-index": ""}))
            })
        }
    };
    window.addEventListener ? (window.addEventListener("scroll", l, !1), window.addEventListener("resize", h, !1)) : window.attachEvent && (window.attachEvent("onscroll", l), window.attachEvent("onresize", h)), t.fn.sticky = function (i) {
        return c[i] ? c[i].apply(this, e.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery.sticky") : c.init.apply(this, arguments)
    }, t.fn.unstick = function (i) {
        return c[i] ? c[i].apply(this, e.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery.sticky") : c.unstick.apply(this, arguments)
    }, t(function () {
        setTimeout(l, 0)
    })
});