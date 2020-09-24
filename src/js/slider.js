'use strict';

export default class Slider {
  constructor(selectorBlockControlInp, selectorSliderItems) {
    this.arrBlockControlInp = document.querySelectorAll(`.${selectorBlockControlInp}`);
    this.arrSliderItems = document.querySelectorAll(`.${selectorSliderItems}`);
    this.selectorSliderItems = selectorSliderItems;
    this.sliserInit();    
  }

  sliserInit() {
    this.arrBlockControlInp.forEach(el => {
      el.addEventListener('click', evt => {
        this.deactivateSliderItems();
        this.activateSliderItem(el)
      });  
    });
  }

  deactivateSliderItems() {
    this.arrSliderItems.forEach(el => {      
      el.classList.remove(`${this.selectorSliderItems}--active`);
    });
  }

  activateSliderItem(it) {
    this.arrSliderItems.forEach(el => {
      if (it.checked && el.dataset.slideshow === it.dataset.slideshow) {      
        el.classList.add(`${this.selectorSliderItems}--active`);
      }
    })
  }
}