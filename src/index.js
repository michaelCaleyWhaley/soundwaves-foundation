import "./index.scss";
import PDFMerger from "pdf-merger-js";

var merger = new PDFMerger();

const pdf1 = document.getElementById("pdf1");
const pdf2 = document.getElementById("pdf2");

const form = document.getElementById("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  console.log("pdf1.value: ", pdf1.value);
  console.log("pdf2.value: ", pdf2.value);

  await merger.add(pdf1.value);
  await merger.add(pdf2.value);
  await merger.save("merged.pdf");
});

// var pdfBtns = document.getElementsByClassName("pdf-btn");
// for (var i = 0; i < pdfBtns.length; i++) {
//   pdfBtns[i].addEventListener("click", function (e) {
//     e.target.classList.toggle("pdf-btn__active");
//   });
// }


