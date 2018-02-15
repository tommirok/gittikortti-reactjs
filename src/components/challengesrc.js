!(function(e) {
  function o(n) {
    if (t[n]) return t[n].exports;
    var r = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(r.exports, r, r.exports, o), (r.l = !0), r.exports;
  }
  var t = {};
  (o.m = e),
    (o.c = t),
    (o.d = function(e, t, n) {
      o.o(e, t) ||
        Object.defineProperty(e, t, {
          configurable: !1,
          enumerable: !0,
          get: n
        });
    }),
    (o.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function(e, o) {
      return Object.prototype.hasOwnProperty.call(e, o);
    }),
    (o.p = "/dist"),
    o((o.s = 0));
})([
  function(e, o, t) {
    e.exports = t(1);
  },
  function(e, o, t) {
    "use strict";
    t(2), t(3);
  },
  function(e, o, t) {
    "use strict";
    window.door = {
      knock: function() {
        return console.log(
          'You hear machine-like voice saying: Open the lock. Key is hidden inside the ".room"'
        );
      },
      open: function() {
        void 0 === door.locked
          ? alert("The " + door + " is locked")
          : door.locked
            ? alert("Clever")
            : "undefined" != typeof data &&
              (document.querySelector(".door").classList.add("open"),
              setTimeout(function() {
                document.querySelector(".door-frame").classList.add("goin"),
                  document.querySelector(".floor").classList.add("goin");
              }, 1e3),
              setTimeout(function() {
                document.querySelector(".room").remove(),
                  document.querySelector(".light").remove(),
                  clearInterval(light);
                for (var e = 0; e < data.length; e++) {
                  var o = document.createElement("div");
                  o.classList.add("data"),
                    (o.innerHTML = "" + data[e]),
                    document.querySelector("body").appendChild(o),
                    n(o, e);
                }
              }, 2e3));
      },
      lock: function(e) {
        return e
          ? (fetch(window.location.href + "lock", {
              headers: new Headers({ "content-type": "application/json" }),
              method: "POST",
              body: JSON.stringify({ key: e })
            }).then(function(e) {
              if (!e) return console.error("invalid key");
              e.json().then(function(e) {
                if (!e.success) return console.error("invalid key");
                door.locked = !1;
                var o = document.querySelector(".screen");
                (o.innerHTML = "unlocked"),
                  (o.style.backgroundColor = "lime"),
                  (o.style.color = "#19B419"),
                  (o.style.boxShadow = "0 0 3px 3px rgba(76,231,76,0.4)"),
                  (window.data = e.data);
              });
            }),
            "beep")
          : console.error("You can't open the lock without a key");
      }
    };
    var n = function(e, o) {
      setTimeout(function() {
        e.style.opacity = "1";
      }, 1e3 * o);
    };
    (window.closeModal = function() {
      document.querySelector(".modal").classList.add("hidden"),
        setTimeout(function() {
          return document.querySelector(".modal").remove();
        }, 1e3);
    }),
      document.addEventListener("DOMContentLoaded", function(e) {
        setTimeout(function() {
          return document.querySelector(".modal").classList.remove("hidden");
        }, 500),
          console.log(
            "%cHow did I end up in here and what the f#%@ is this door? Whats behind it? What happens if I knock it?",
            "color: blue"
          ),
          (window.light = setInterval(function() {
            var e = document.querySelector(".light");
            e &&
              (e.classList.contains("alert")
                ? e.classList.remove("alert")
                : e.classList.add("alert"));
          }, 3e3));
      });
  },
  function(e, o) {}
]);
