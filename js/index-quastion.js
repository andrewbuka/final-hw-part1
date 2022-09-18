let plusFirstString = document.querySelector('.plus-first-string');
let minusFirstString = document.querySelector('.minus-first-string');
let paragraphFirstString = document.querySelector('.paragraph-first-string');


let plusSecondString = document.querySelector('.plus-second-string');
let minusSecondString = document.querySelector('.minus-second-string');
let paragraphSecondString = document.querySelector('.paragraph-second-string');

let plusThirdString = document.querySelector('.plus-third-string');
let minusThirdString = document.querySelector('.minus-third-string');
let paragraphThirdString = document.querySelector('.paragraph-third-string');

let plusFourthString = document.querySelector('.plus-fourth-string');
let minusFourthString = document.querySelector('.minus-fourth-string');
let paragraphFourthString = document.querySelector('.paragraph-fourth-string');

plusFirstString.onclick = function() {
  paragraphFirstString.style.display = 'block';
  minusFirstString.style.display = 'block';
}
minusFirstString.onclick = function () {
  paragraphFirstString.style.display = 'none';
  minusFirstString.style.display = 'none';
}

plusSecondString.onclick = function () {
  paragraphSecondString.style.display = 'block';
  minusSecondString.style.display = 'block';
}
minusSecondString.onclick = function () {
  paragraphSecondString.style.display = 'none';
  minusSecondString.style.display = 'none';
}

plusThirdString.onclick = function () {
  paragraphThirdString.style.display = 'block';
  minusThirdString.style.display = 'block';
}
minusThirdString.onclick = function () {
  paragraphThirdString.style.display = 'none';
  minusThirdString.style.display = 'none';
}

plusFourthString.onclick = function () {
  paragraphFourthString.style.display = 'block';
  minusFourthString.style.display = 'block';
}
minusFourthString.onclick = function () {
  paragraphFourthString.style.display = 'none';
  minusFourthString.style.display = 'none';
}