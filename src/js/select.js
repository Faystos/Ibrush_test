'use strict';

(function () {
  // const selectInp = document.querySelector('.block_inp__sel');
  // const selectBlockOptions = document.querySelector('.block_inp__block_options');

  // selectInp.addEventListener('click', evt => {
  //   const target = evt.target;
  //   getToggleSelect(target);
  // });

  // selectBlockOptions.addEventListener('click', evt => {
  //   const target = evt.target;
  //   if (!target.classList.contains('block_options__option')) {
  //     return
  //   }
  //   toggleValueSelect(selectInp, target);
  //   getToggleSelect(selectInp);
    
  // });

  // function toggleClassSel (target) {
  //   target.classList.toggle('block_inp__sel--open');
  //   target.classList.toggle('block_inp__sel--close');  
  // }

  // function toggleClassOpt () {
  //   selectBlockOptions.classList.toggle('block_inp__block_options--close');
  //   selectBlockOptions.classList.toggle('block_inp__block_options--active');
  // }

  // function toggleValueSelect (target, select) {
  //   [select.textContent, target.textContent] = [target.textContent, select.textContent];
  // }

  // function getToggleSelect (target) {
  //   toggleClassSel(target);
  //   toggleClassOpt();
  // }
})()

class Select {
  constructor(selectorInp, selectorBlockOpt) {
    this.selectInp = document.querySelector(selectorInp);
    this.selectBlockOptions = document.querySelector(selectorBlockOpt);
    this.selectInit();   
  }

  selectInit() {
    this.selectInp.addEventListener('click', this.hendlerSelectInp.bind(this));
    this.selectBlockOptions.addEventListener('click', this.hendlerSelectBlockOptions.bind(this));
  }

  // Обработчики событий
  hendlerSelectInp({ target }) {    
    this.getToggleSelect(target);
  }

  hendlerSelectBlockOptions({ target }) {
    if (!target.classList.contains('block_options__option')) return;
    this.toggleValueSelect(this.selectInp, target);
    this.getToggleSelect(this.selectInp);
  }

  // Вспомогательные функции
  getToggleSelect(target) {   
   this.toggleClassSel(target);
   this.toggleClassOpt();
  }

  toggleClassSel (target) {
    target.classList.toggle('block_inp__sel--open');
    target.classList.toggle('block_inp__sel--close');  
  }

  toggleClassOpt () {
    this.selectBlockOptions.classList.toggle('block_inp__block_options--close');
    this.selectBlockOptions.classList.toggle('block_inp__block_options--active');
  }

  toggleValueSelect (target, select) {
    [select.textContent, target.textContent] = [target.textContent, select.textContent];
  }
}

const select = new Select('.block_inp__sel', '.block_inp__block_options');

