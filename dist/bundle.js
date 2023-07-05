!(function () {
  for (
    var t = document.getElementsByClassName("pdf-btn"),
      e = document.getElementById("submit"),
      n = 0;
    n < t.length;
    n++
  )
    t[n].addEventListener("click", function (t) {
      t.target.classList.toggle("pdf-btn__active");
    });
  e.addEventListener("click", function () {
    for (
      var t = document.getElementsByClassName("pdf-btn__active"), e = "", n = 0;
      n < t.length;
      n++
    )
      e = e + " " + t[n].dataset.url;
    document.getElementById("output").innerHTML = e;
  });
})();
