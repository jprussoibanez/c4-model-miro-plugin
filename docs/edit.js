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
    o((o.s = 39));
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
      a = n(7),
      u = n(5),
      l =
        ((i = a.Model),
        o(c, i),
        Object.defineProperty(c.prototype, "name", {
          get: function () {
            return this.parseInnerText()[0];
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(c.prototype, "linkType", {
          get: function () {
            return this.type + "-diagram";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(c.prototype, "description", {
          get: function () {
            return this.parseInnerText()[1];
          },
          enumerable: !0,
          configurable: !0,
        }),
        (c.prototype.parseInnerText = function () {
          return this.widget.plainText
            .split(this.defaultText)
            .map(function (e) {
              return e.trim();
            });
        }),
        (c.prototype.setInnerText = function (e, t) {
          var n = "";
          e && (n += "<p>" + e + "</p>"),
            (n += "<p>" + this.defaultText + "</p>"),
            t && (n += "<p><br></p><p>" + t + "</p>"),
            (this.widget.text = n);
        }),
        (c.prototype.createLinkModel = function (e) {
          return new u.DiagramModel(e);
        }),
        c);
    function c(e) {
      return i.call(this, e) || this;
    }
    t.EntityModel = l;
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
      a = n(11),
      u = n(12),
      l = n(13),
      c = n(14),
      s = n(15),
      d = n(16);
    t.widgetOptions = {
      code: r.code,
      component: o.component,
      componentDiagram: i.componentDiagram,
      container: a.container,
      containerDiagram: u.containerDiagram,
      context: l.context,
      contextDiagram: c.contextDiagram,
      externalContext: s.externalContext,
      person: d.person,
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
      a = n(7),
      u = n(2),
      l =
        ((i = a.Model),
        o(c, i),
        Object.defineProperty(c.prototype, "name", {
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
        Object.defineProperty(c.prototype, "linkType", {
          get: function () {
            return this.type.replace("-diagram", "");
          },
          enumerable: !0,
          configurable: !0,
        }),
        (c.prototype.createLinkModel = function (e) {
          return new u.EntityModel(e);
        }),
        c);
    function c(e) {
      return i.call(this, e) || this;
    }
    t.DiagramModel = l;
  },
  ,
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = n(3),
      i = n(4),
      a = n(17),
      u =
        (Object.defineProperty(l.prototype, "meta", {
          get: function () {
            return this.widget.metadata[r.config.appId];
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(l.prototype, "type", {
          get: function () {
            return this.meta.type;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(l.prototype, "options", {
          get: function () {
            return i.widgetOptions[o.toLowerCamelCase(this.type)];
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(l.prototype, "defaultText", {
          get: function () {
            return this.options.text;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(l.prototype, "parentType", {
          get: function () {
            var e = this.type.replace("-diagram", ""),
              t = a.typeLevel.indexOf(e) - 1;
            return t < 0 ? null : a.typeLevel[t];
          },
          enumerable: !0,
          configurable: !0,
        }),
        (l.prototype.save = function () {
          return miro.board.widgets.update(this.widget);
        }),
        (l.prototype.getPossibleLinks = function () {
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
        l);
    function l(e) {
      this.widget = e;
    }
    t.Model = u;
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
      a = n(2);
    t.getModel = function (e) {
      return r.getWidget(e).then(function (e) {
        return e
          ? -1 !== e.metadata[o.config.appId].type.indexOf("-diagram")
            ? new i.DiagramModel(e)
            : new a.EntityModel(e)
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
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var c = n(5),
      s = n(2),
      o = n(18),
      d = n(40),
      p = n(4),
      f = n(3);
    function r() {
      var n = this,
        e = new URLSearchParams(window.location.search).get("id");
      this.ready = new Promise(function (t) {
        miro.onReady(function () {
          o.getModel(e).then(function (e) {
            (n.model = e), t();
          });
        });
      });
    }
    n(41),
      new (Object.defineProperty(r.prototype, "form", {
        get: function () {
          return document.forms.edit;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(r.prototype, "fields", {
        get: function () {
          return document.getElementById("fields");
        },
        enumerable: !0,
        configurable: !0,
      }),
      (r.prototype.init = function () {
        var t = this;
        return this.ready
          .then(function () {
            return t.createForm();
          })
          .then(function () {
            (t.form.onsubmit = function (e) {
              e.preventDefault(), t.save();
            }),
              (t.form.cancel.onclick = function () {
                return t.close();
              });
          });
      }),
      (r.prototype.getInput = function (e) {
        return this.form.elements[e];
      }),
      (r.prototype.createLinks = function () {
        var r = this;
        return this.model.getPossibleLinks().then(function (e) {
          if (!e.length) return null;
          var n = document.createElement("div");
          return (
            n.classList.add("links"),
            e.forEach(function (e) {
              var t = document.createElement("div");
              t.classList.add("link"),
                (t.innerText = e.name),
                (t.dataset.id = e.id),
                r.model.meta.link === e.id && t.classList.add("selected"),
                n.append(t);
            }),
            (n.onclick = function (e) {
              return r.onClickLink(e.target);
            }),
            n
          );
        });
      }),
      (r.prototype.createForm = function () {
        var l = this;
        return this.createLinks().then(function (e) {
          var t = new d.Field("name", "Name"),
            n = new d.Field("description", "Description", "textarea"),
            r = new d.Field("link", null, "hidden"),
            o = document.createElement("div");
          if (
            (l.model instanceof c.DiagramModel &&
              ((t.input.value = l.model.name),
              l.fields.append(t.label, t.input, r.input)),
            l.model instanceof s.EntityModel)
          ) {
            var i = l.model.parseInnerText(),
              a = i[0],
              u = i[1];
            (t.input.value = a),
              (n.input.value = u),
              l.fields.append(t.label, t.input, n.label, n.input, r.input);
          }
          (r.input.value = l.model.meta.link),
            e &&
              ((o.innerText =
                "Link to " +
                p.widgetOptions[f.toLowerCamelCase(l.model.linkType)].text),
              o.classList.add("links-title"),
              r.input.before(e),
              e.before(o));
        });
      }),
      (r.prototype.onClickLink = function (e) {
        var t = this,
          n = "selected",
          r = e.classList.contains(n);
        Array.from(document.querySelectorAll(".link")).forEach(function (e) {
          e.classList.remove(n);
        }),
          r
            ? (this.getInput("link").value = "")
            : ((this.getInput("link").value = e.dataset.id),
              e.classList.add(n)),
          o.getModel(e.dataset.id).then(function (e) {
            r || (t.getInput("name").value = e.name), (t.linkModel = e);
          });
      }),
      (r.prototype.save = function () {
        var e,
          t = this,
          n = this.getInput("link").value;
        if (
          ((this.model.meta.link = n || null),
          (e = this.linkModel
            ? ((this.linkModel.meta.link = n ? this.model.widget.id : null),
              this.linkModel.save())
            : Promise.resolve()),
          this.model instanceof s.EntityModel)
        ) {
          var r = this.getInput("name").value,
            o = this.getInput("description").value;
          this.model.setInnerText(r, o);
        }
        this.model instanceof c.DiagramModel &&
          (this.model.name = this.getInput("name").value),
          Promise.all([e, this.model.save()]).then(function () {
            return t.close();
          });
      }),
      (r.prototype.close = function () {
        miro.board.ui.closeModal();
      }),
      r)().init();
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r =
      ((o.prototype.createInput = function (e, t) {
        var n = "textarea" === t ? "textarea" : "input",
          r = document.createElement(n);
        r instanceof HTMLInputElement && (r.type = t),
          (r.name = e),
          (r.id = e),
          "hidden" !== t &&
            r.classList.add(
              this.baseInputClass,
              this.baseInputClass + this.primaryModifier
            ),
          (this.input = r);
      }),
      (o.prototype.createLabel = function (e, t) {
        var n = document.createElement("label");
        (n.htmlFor = e), (n.innerText = t), (this.label = n);
      }),
      o);
    function o(e, t, n) {
      void 0 === t && (t = null),
        void 0 === n && (n = "text"),
        (this.label = null),
        (this.baseInputClass = "miro-input"),
        (this.primaryModifier = "--primary"),
        this.createInput(e, n),
        t && this.createLabel(e, t);
    }
    t.Field = r;
  },
  function (e, t, n) {},
]);
