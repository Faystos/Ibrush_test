'use strict';

export default class Select {
  constructor(selectorInp, selectorBlockOpt) {
    this.selectInp = document.querySelector(`.${selectorInp}`);
    this.selectBlockOptions = document.querySelector(`.${selectorBlockOpt}`);
    this.selectorInp = selectorInp;
    this.selectorBlockOpt = selectorBlockOpt
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
    target.classList.toggle(`${this.selectorInp}--open`);
    target.classList.toggle(`${this.selectorInp}--close`);  
  }

  toggleClassOpt () {
    this.selectBlockOptions.classList.toggle(`${this.selectorBlockOpt}--close`);
    this.selectBlockOptions.classList.toggle(`${this.selectorBlockOpt}--active`);
  }

  toggleValueSelect (target, select) {
    [select.textContent, target.textContent] = [target.textContent, select.textContent];
  }
}