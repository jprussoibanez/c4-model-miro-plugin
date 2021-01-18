!(function (n) {
  var r = {};
  function o(e) {
    if (r[e]) return r[e].exports;
    var t = (r[e] = { i: e, l: !1, exports: {} });
    return n[e].call(t.exports, t, t.exports, o), (t.l = !0), t.exports;
  }
  (o.m = n),
    (o.c = r),
    (o.d = function (e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
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
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          o.d(
            n,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
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
    o((o.s = 20));
})([
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.config = {
        appId: "3074457353417636788",
        baseUrl: "https://jprussoibanez.github.io/c4-model-miro-plugin/",
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.diagramStyle = {
        borderWidth: 2,
        borderStyle: 1,
        borderColor: "#000000",
        fontSize: 12,
        textAlign: "l",
        textAlignVertical: "t",
      });
  },
  function (e, t, n) {
    "use strict";
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i,
      u = n(7),
      a = n(5),
      c =
        ((i = u.Model),
        o(d, i),
        Object.defineProperty(d.prototype, "name", {
          get: function () {
            return this.parseInnerText()[0];
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(d.prototype, "linkType", {
          get: function () {
            return this.type + "-diagram";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(d.prototype, "description", {
          get: function () {
            return this.parseInnerText()[1];
          },
          enumerable: !0,
          configurable: !0,
        }),
        (d.prototype.parseInnerText = function () {
          return this.widget.plainText
            .split(this.defaultText)
            .map(function (e) {
              return e.trim();
            });
        }),
        (d.prototype.setInnerText = function (e, t) {
          var n = "";
          e && (n += "<p>" + e + "</p>"),
            (n += "<p>" + this.defaultText + "</p>"),
            t && (n += "<p><br></p><p>" + t + "</p>"),
            (this.widget.text = n);
        }),
        (d.prototype.createLinkModel = function (e) {
          return new a.DiagramModel(e);
        }),
        d);
    function d(e) {
      return i.call(this, e) || this;
    }
    t.EntityModel = c;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.toLowerCamelCase = function (e) {
        var t = e
          .split("-")
          .map(function (e) {
            return e[0].toUpperCase() + e.slice(1);
          })
          .join("");
        return t[0].toLowerCase() + t.slice(1);
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(8),
      o = n(9),
      i = n(10),
      u = n(11),
      a = n(12),
      c = n(13),
      d = n(14),
      l = n(15),
      f = n(16);
    t.widgetOptions = {
      code: r.code,
      component: o.component,
      componentDiagram: i.componentDiagram,
      container: u.container,
      containerDiagram: a.containerDiagram,
      context: c.context,
      contextDiagram: d.contextDiagram,
      externalContext: l.externalContext,
      person: f.person,
    };
  },
  function (e, t, n) {
    "use strict";
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i,
      u = n(7),
      a = n(2),
      c =
        ((i = u.Model),
        o(d, i),
        Object.defineProperty(d.prototype, "name", {
          get: function () {
            return this.widget.plainText.replace(this.defaultText, "").trim();
          },
          set: function (e) {
            this.widget.text =
              "<p>" + e + "</p><p>" + this.defaultText + "</p>";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(d.prototype, "linkType", {
          get: function () {
            return this.type.replace("-diagram", "");
          },
          enumerable: !0,
          configurable: !0,
        }),
        (d.prototype.createLinkModel = function (e) {
          return new a.EntityModel(e);
        }),
        d);
    function d(e) {
      return i.call(this, e) || this;
    }
    t.DiagramModel = c;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0);
    t.getUrl = function (e) {
      return r.config.baseUrl + e;
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = n(3),
      i = n(4),
      u = n(17),
      a =
        (Object.defineProperty(c.prototype, "meta", {
          get: function () {
            return this.widget.metadata[r.config.appId];
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(c.prototype, "type", {
          get: function () {
            return this.meta.type;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(c.prototype, "options", {
          get: function () {
            return i.widgetOptions[o.toLowerCamelCase(this.type)];
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(c.prototype, "defaultText", {
          get: function () {
            return this.options.text;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(c.prototype, "parentType", {
          get: function () {
            var e = this.type.replace("-diagram", ""),
              t = u.typeLevel.indexOf(e) - 1;
            return t < 0 ? null : u.typeLevel[t];
          },
          enumerable: !0,
          configurable: !0,
        }),
        (c.prototype.save = function () {
          return miro.board.widgets.update(this.widget);
        }),
        (c.prototype.getPossibleLinks = function () {
          var n = this;
          return miro.board.widgets.get(["type", "SHAPE"]).then(function (e) {
            return e
              .filter(function (e) {
                var t = e.metadata[r.config.appId];
                return !!t && t.type === n.linkType;
              })
              .map(function (e) {
                return n.createLinkModel(e);
              })
              .map(function (e) {
                return { id: (e = e).widget.id, name: e.name };
              })
              .filter(function (e) {
                return !!e.name;
              });
          });
        }),
        c);
    function c(e) {
      this.widget = e;
    }
    t.Model = a;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.code = {
        text: "[Code]",
        style: { borderWidth: 1, borderColor: "#000000", textColor: "#000000" },
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.component = {
        text: "[Component]",
        style: {
          borderWidth: 1,
          backgroundColor: "#86bcf0",
          borderColor: "#70a5d8",
          textColor: "#000000",
        },
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(1);
    t.componentDiagram = {
      text: "[Component Diagram]",
      width: 600,
      height: 400,
      style: r.diagramStyle,
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.container = {
        text: "[Container]",
        style: {
          borderWidth: 1,
          backgroundColor: "#438cd4",
          borderColor: "#3379bd",
          textColor: "#ffffff",
        },
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(1);
    t.containerDiagram = {
      text: "[Container Diagram]",
      width: 600,
      height: 400,
      style: r.diagramStyle,
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.context = {
        text: "[Context]",
        style: {
          borderWidth: 1,
          backgroundColor: "#1268bd",
          borderColor: "#1a61a7",
          textColor: "#ffffff",
        },
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(1);
    t.contextDiagram = {
      text: "[Context Diagram]",
      width: 600,
      height: 400,
      style: r.diagramStyle,
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.externalContext = {
        text: "[External Context]",
        style: {
          borderWidth: 1,
          backgroundColor: "#999999",
          borderColor: "#757575",
          textColor: "#ffffff",
        },
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.person = {
        text: "[Person]",
        style: {
          borderWidth: 1,
          backgroundColor: "#7ddc73",
          borderColor: "#5bc150",
          textColor: "#000000",
        },
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.typeLevel = ["context", "container", "component", "code"]);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(19),
      o = n(0),
      i = n(5),
      u = n(2);
    t.getModel = function (e) {
      return r.getWidget(e).then(function (e) {
        return e
          ? -1 !== e.metadata[o.config.appId].type.indexOf("-diagram")
            ? new i.DiagramModel(e)
            : new u.EntityModel(e)
          : null;
      });
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.getWidget = function (e) {
        return miro.board.widgets.get(["id", e]).then(function (e) {
          return e[0];
        });
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var u = n(0),
      r = n(6),
      o = n(21),
      a = n(22),
      c = n(23),
      d = n(24),
      i = n(25),
      l = n(26),
      f = n(18),
      s = n(27);
    function p() {}
    var g = new (Object.defineProperty(p.prototype, "config", {
      get: function () {
        var t = this;
        return {
          extensionPoints: {
            toolbar: {
              title: "C4 model",
              toolbarSvgIcon: i.toolbarIcon,
              librarySvgIcon: l.libraryIcon,
              onClick: function () {
                return t.openLibraryView();
              },
            },
            getWidgetMenuItems: function (e) {
              return t.getWidgetMenuItems(e);
            },
          },
        };
      },
      enumerable: !0,
      configurable: !0,
    }),
    (p.prototype.init = function () {
      var t = this;
      return new Promise(function (e) {
        miro.onReady(function () {
          return miro.initialize(t.config).then(function () {
            return e();
          });
        });
      });
    }),
    (p.prototype.addListeners = function () {
      var t = this;
      miro.addListener("WIDGETS_CREATED", function (e) {
        return t.onWidgetsCreated(e);
      }),
        miro.addListener("WIDGETS_TRANSFORMATION_UPDATED", function (e) {
          t.onWidgetsTransformationUpdated(e);
        });
    }),
    (p.prototype.openLibraryView = function () {
      return miro.board.ui.openLibrary(r.getUrl("library.html"), {
        title: "C4 model",
      });
    }),
    (p.prototype.openEditView = function (e, t) {
      var n = { width: 400, height: t ? 400 : 600 };
      return miro.board.ui.openModal(r.getUrl("edit.html?id=" + e), n);
    }),
    (p.prototype.jump = function (e) {
      return miro.board.viewport.zoomToObject(e);
    }),
    (p.prototype.getWidgetMenuItems = function (e) {
      var n = this;
      if (1 < e.length) return Promise.resolve([]);
      var t = e[0],
        r = t.metadata[u.config.appId];
      if (!r) return Promise.resolve([]);
      var o = -1 !== r.type.indexOf("-diagram"),
        i = [
          {
            tooltip: "edit C4 structure",
            svgIcon: d.editIcon,
            onClick: function () {
              return n.openEditView(t.id, o);
            },
          },
        ];
      return (r.link
        ? f.getModel(r.link).then(function (e) {
            if (e) {
              var t = "jump to " + e.defaultText;
              i.push({
                tooltip: t,
                svgIcon: o ? a.collapseIcon : c.expandIcon,
                onClick: function () {
                  return n.jump(r.link);
                },
              });
            }
          })
        : Promise.resolve()
      ).then(function () {
        return i;
      });
    }),
    (p.prototype.onWidgetsCreated = function (e) {
      e.data.forEach(function (e) {
        "SHAPE" === e.type &&
          f.getModel(e.id).then(function (e) {
            return o.BoundsValidator.validate(e);
          });
      });
    }),
    (p.prototype.onWidgetsTransformationUpdated = function (e) {
      e.data.forEach(function (e) {
        "SHAPE" === e.type &&
          f.getModel(e.id).then(function (e) {
            return o.BoundsValidator.validate(e);
          });
      });
    }),
    p)();
    g.init().then(function () {
      return s.checkAuth(function () {
        return g.addListeners();
      });
    });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var u = n(0),
      r = n(2),
      o =
        ((i.validate = function (o) {
          var i = this;
          miro.board.widgets.__getIntersectedObjects &&
            o.meta &&
            o instanceof r.EntityModel &&
            o.parentType &&
            o.options.style &&
            o.options.style.borderColor &&
            miro.board.widgets
              .__getIntersectedObjects(this.getRectFromObject(o.widget))
              .then(function (e) {
                var t = o.parentType + "-diagram",
                  n = e.find(function (e) {
                    return e.metadata[u.config.appId].type === t;
                  }),
                  r = o.options.style.borderColor;
                return (
                  (o.widget.style.borderColor = n ? r : i.errorBorderColor),
                  o.save()
                );
              });
        }),
        (i.getRectFromObject = function (e) {
          return { x: e.x, y: e.y, width: e.width, height: e.height };
        }),
        (i.errorBorderColor = "#ff0000"),
        i);
    function i() {}
    t.BoundsValidator = o;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.collapseIcon =
        '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M16 6H13.4142L17.7071 1.70711C18.0976 1.31658 18.0976 0.683418 17.7071 0.292893C17.3166 -0.0976311 16.6834 -0.0976311 16.2929 0.292893L12 4.58579V2C12 1.44772 11.5523 1 11 1C10.4477 1 10 1.44772 10 2V8H16C16.5523 8 17 7.55228 17 7C17 6.44772 16.5523 6 16 6Z" fill="#050038"/>\n<path d="M2 12H4.58579L0.292893 16.2929C-0.0976311 16.6834 -0.0976311 17.3166 0.292893 17.7071C0.683418 18.0976 1.31658 18.0976 1.70711 17.7071L6 13.4142V16C6 16.5523 6.44772 17 7 17C7.55228 17 8 16.5523 8 16V10H2C1.44772 10 1 10.4477 1 11C1 11.5523 1.44772 12 2 12Z" fill="#050038"/>\n</svg>');
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.expandIcon =
        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M15 5H17.5858L14.2929 8.29289C13.9024 8.68342 13.9024 9.31658 14.2929 9.70711C14.6834 10.0976 15.3166 10.0976 15.7071 9.70711L19 6.41421V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V3H15C14.4477 3 14 3.44772 14 4C14 4.55228 14.4477 5 15 5ZM9 19H6.41421L9.70711 15.7071C10.0976 15.3166 10.0976 14.6834 9.70711 14.2929C9.31658 13.9024 8.68342 13.9024 8.29289 14.2929L5 17.5858V15C5 14.4477 4.55228 14 4 14C3.44772 14 3 14.4477 3 15V21H9C9.55228 21 10 20.5523 10 20C10 19.4477 9.55228 19 9 19Z" fill="#050038"/>\n</svg>');
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.editIcon =
        '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M19.0858 3.58579C19.8669 4.36684 19.8669 5.63317 19.0858 6.41422L6.91426 18.5858L1.48359 19.6966C0.942509 19.8072 0.414158 19.4583 0.303486 18.9172C0.276442 18.785 0.276442 18.6487 0.303486 18.5165L1.41426 13.0858L13.5858 0.914217C14.3669 0.133168 15.6332 0.133168 16.4143 0.914217L19.0858 3.58579ZM11.4927 5.83579L14.1643 8.50736L5.92487 16.7467L2.56636 17.4337L3.2533 14.0752L11.4927 5.83579ZM15 2.32843L12.9069 4.42158L15.5785 7.09315L17.6716 5L15 2.32843Z" fill="#050038"/>\n</svg>');
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.toolbarIcon =
        '<path fill="currentColor" d="M 11.350124,6.0761814 10.357448,8.0708103 Q 9.550319,7.2636814 7.7597917,7.2636814 q -1.6977539,0 -2.7832032,1.4287109 -1.0854492,1.4194337 -1.0854492,3.5996097 0,2.180176 1.0019532,3.460449 1.0112304,1.280273 2.6904296,1.280273 1.9204102,0 3.0058599,-1.373046 l 1.122558,1.948242 q -1.475098,1.567871 -4.3232421,1.567871 -2.8481445,0 -4.4252929,-1.874024 -1.5771485,-1.874023 -1.5771485,-5.111816 0,-3.0151368 1.7441406,-5.0375977 1.753418,-2.0317383 4.4809571,-2.0317383 2.3378906,0 3.7387698,0.9555664 z" /><path fill="currentColor" d="m 21.38821,15.390635 v 3.553222 H 19.068874 V 15.390635 H 12.880885 V 14.00831 l 7.449707,-8.7114255 h 1.057618 v 8.1826175 h 1.373047 v 1.911133 z M 19.068874,9.3974705 15.580592,13.479502 h 3.488282 z" />');
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.libraryIcon =
        '<g transform="translate(0,24)"><path d="m 42.850246,6.1549655 v 7.1594315 h -4.67326 V 6.1549655 H 25.708729 V 3.3697012 L 40.719238,-14.18306 h 2.131008 V 2.3041993 h 2.76657 v 3.8507662 z m -4.67326,-12.0757033 -7.028584,8.2249371 h 7.028584 z M 22.62438,-12.612845 20.624224,-8.5938425 q -1.626294,-1.6262945 -5.234052,-1.6262945 -3.420826,0 -5.6079104,2.8787283 -2.1870859,2.8600349 -2.1870859,7.25289928 0,4.39286422 2.0188482,6.97250252 2.0375401,2.5796379 5.4209811,2.5796379 3.869459,0 6.056546,-2.7665674 l 2.261856,3.9255374 q -2.972194,3.159123 -8.710958,3.159123 -5.7387599,0 -8.9165763,-3.775995 -3.1778169,-3.7759922 -3.1778169,-10.29986237 0,-6.07523733 3.5142913,-10.15031963 3.5329843,-4.093775 9.0287369,-4.093775 4.710645,0 7.533296,1.925383 z" /></g>');
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.checkAuth = function (r) {
        function o() {
          miro.board.ui
            .openModal("not-authorized.html", { width: 300, height: 200 })
            .then(function (e) {
              "success" === e && r();
            });
        }
        miro.isAuthorized().then(function (e) {
          e
            ? miro.currentUser.getScopes().then(function (e) {
                var t = -1 !== e.indexOf("boards:read"),
                  n = -1 !== e.indexOf("boards:write");
                t && n ? r() : o();
              })
            : o();
        });
      });
  },
]);
