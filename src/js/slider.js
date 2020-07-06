'use strict';

(function () {
  const arrBlockControlInp = document.querySelectorAll('.block_control__inp');
  const arrSliderItems = document.querySelectorAll('.block_slider__slider_item');
  
  arrBlockControlInp.forEach(el => {
    el.addEventListener('click', evt => {
      deactivateSliderItems();
      activateSliderItem(el)
    });  
  });
  
  function deactivateSliderItems () {
    arrSliderItems.forEach(el => {
      el.classList.remove('block_slider__slider_item--active');
    });
  }
  
  function activateSliderItem (it) {
    arrSliderItems.forEach(el => {
      if (it.checked && el.dataset.slideshow === it.dataset.slideshow) {      
        el.classList.add('block_slider__slider_item--active');
      }
    })
  }
})()

