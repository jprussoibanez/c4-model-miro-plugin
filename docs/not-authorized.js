!(function (r) {
  var n = {};
  function o(e) {
    if (n[e]) return n[e].exports;
    var t = (n[e] = { i: e, l: !1, exports: {} });
    return r[e].call(t.exports, t, t.exports, o), (t.l = !0), t.exports;
  }
  (o.m = r),
    (o.c = n),
    (o.d = function (e, t, r) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (o.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (o.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          o.d(
            r,
            n,
            function (e) {
              return t[e];
            }.bind(null, n)
          );
      return r;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = ""),
    o((o.s = 43));
})({
  0: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.config = {
        appId: "3074457353417636788",
        baseUrl: "https://jprussoibanez.github.io/",
      });
  },
  43: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(6);
    r(44),
      document.querySelector("button").addEventListener("click", function () {
        var e = {
          response_type: "token",
          scope: "boards:read boards:write",
          redirect_uri: n.getUrl("auth-success.html?hack=hack"),
        };
        miro
          .authorize(e)
          .then(function () {
            return miro.getToken();
          })
          .then(function (e) {
            e
              ? miro.board.ui.closeModal("success")
              : console.log("Something went wrong");
          });
      });
  },
  44: function (e, t, r) {},
  6: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(0);
    t.getUrl = function (e) {
      return n.config.baseUrl + e;
    };
  },
});
