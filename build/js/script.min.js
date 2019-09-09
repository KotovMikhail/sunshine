// window.addEventListener('load', function () {
//   window.imgSrc = document.querySelector(`.gallery__img`);
//   window.currentImg = document.querySelector(`.gallery__img--big`);


//   if (window.imgSrc) {
//     localStorage.setItem('test', window.imgSrc.src)
//   }

//   if (window.currentImg) {
//     console.log(localStorage.getItem('test'))
//     window.currentImg.src = localStorage.getItem('test')
//   }
// })



// let field2;

// localStorage.setItem('test', window.imgSrc.src);

// field2 = document.getElementById(`field2`);
// field2.value = localStorage.getItem('test');

// console.log(localStorage)


// const slides = document.querySelectorAll(`.slider__item`);
// const prevBtn = document.querySelector(`.left-btn`);
// const nextBtn = document.querySelector(`.right-btn`);

// console.log(slides)
// let slideIndex = 1;

// const showSlides = (n) => {

//   if (n < 1) {
//     slideIndex = slides.length;
//   } else if (n > slides.length) {
//     slideIndex = 1;
//   }

//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = `none`;
//   }

//   slides[slideIndex - 1].style.display = `block`;

// };

// const plusSlides = (n) => {
//   showSlides(slideIndex += n);
// };

// prevBtn.addEventListener(`click`, () => {
//   plusSlides(-1);

// });

// nextBtn.addEventListener(`click`, () => {
//   plusSlides(1);
// });


// showSlides(slideIndex);

// const prevBtn = document.querySelector(`.left-btn`);
// const slides = document.querySelector(`.slider__slides`);
// let left = -780;
// let timer;
// let counter = 1;

// const autoSlider = () => {

//   timer = setTimeout(() => {
//     left = left - 1350;
//     debugger
//     counter++
//     if (left < -4840) {
//       left = -780;
//       counter = 1;
//       clearTimeout(timer);
//     }

//     slides.style.left = left + `px`;
//     autoSlider();

//   }, 1000);
// };

// prevBtn.addEventListener(`click`, () => {
//   sliderLeft();
// });

// autoSlider();


let slides = Array.from(document.querySelectorAll(`.slider__item`));
let slider = [];

for (let i = 0; i < slides.length; i++) {
  slides[i].setAttribute(`data-src`, `slide-${i}`);
}

for (let i = 0; i < slides.length; i++) {
  slider[i] = slides[i].getAttribute(`data-src`);
  slides[i].remove();
}

let step = 0;
let offset = 0;

function draw() {
  let item = document.createElement(`li`);
  item.classList.add(`gallery__item`, `slider__item`);

  let link = document.createElement(`a`);
  link.classList.add(`gallery__link`);
  link.setAttribute(`title`, `Ссылка`);


  item.appendChild(link);

  return item;


}

console.log(draw())

console.log(slider);
