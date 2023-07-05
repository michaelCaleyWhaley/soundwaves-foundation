import './index.scss';
import PDFMerger from 'pdf-merger-js';

const merger = new PDFMerger();

const pdf1 = document.getElementById('pdf1') as HTMLButtonElement;
const pdf2 = document.getElementById('pdf2') as HTMLButtonElement;

const form: HTMLElement | null = document.getElementById('form');
form?.addEventListener('submit', async (e) => {
  e.preventDefault();

  console.log('pdf1.value: ', pdf1?.value);
  console.log('pdf2.value: ', pdf2?.value);

  await merger.add(pdf1.value);
  await merger.add(pdf2.value);
  await merger.save('merged.pdf');
});

const pdfBtns = document.getElementsByClassName('pdf-btn');
for (let i = 0; i < pdfBtns.length; i++) {
  pdfBtns[i].addEventListener('click', function (e) {
    const activeBtn = e.target as HTMLElement;
    activeBtn.classList.toggle('pdf-btn__active');
  });
}
