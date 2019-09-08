window.addEventListener('load', function () {
  window.imgSrc = document.querySelector(`.gallery__img`);
  window.currentImg = document.querySelector(`.gallery__img--big`);


  if (window.imgSrc) {
    localStorage.setItem('test', window.imgSrc.src)
  }

  if (window.currentImg) {
    console.log(localStorage.getItem('test'))
    window.currentImg.src = localStorage.getItem('test')
  }
})



// let field2;

// localStorage.setItem('test', window.imgSrc.src);

// field2 = document.getElementById(`field2`);
// field2.value = localStorage.getItem('test');

// console.log(localStorage)
