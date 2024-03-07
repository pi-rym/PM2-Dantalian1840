(() => {
  var e = {
      989: (e) => {
        e.exports = (e) => {
          e.map((e) => {
            const t = document.createElement("div"),
              s = document.createElement("h3"),
              d = document.createElement("img"),
              a = document.createElement("a");
            t.classList.add("elementos"),
              t.classList.add("card"),
              t.classList.add("col"),
              t.classList.add("card-size"),
              s.classList.add("tarjeta"),
              (s.innerHTML = e.title),
              (d.src = e.poster),
              (a.href = "/front/index.html"),
              s.appendChild(a),
              t.appendChild(s),
              t.appendChild(d),
              document.getElementById("cards").appendChild(t);
          });
        };
      },
    },
    t = {};
  function s(d) {
    var a = t[d];
    if (void 0 !== a) return a.exports;
    var n = (t[d] = { exports: {} });
    return e[d](n, n.exports, s), n.exports;
  }
  (() => {
    const e = s(989);
    $.get("https://students-api.2.us-1.fl0.io/movies", (t) => {
      e(t);
    });
  })();
})();
