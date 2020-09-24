'use strict';

export default class Runner {
  constructor(selRunner, selImg) {
    this.blockRunner = document.querySelector(`.${selRunner}`);
    this.blockRunnerWidth = this.blockRunner.offsetWidth;
    this.img = document.querySelector(`.${selImg}`);
    this.runner = this.blockRunner.querySelector(`.${selRunner}__runner`);
    this.runnerWidth = this.runner.offsetWidth;
    this.startRunnerPos = 0;
    this.multiplicity = 2.19;
    this.finishRunnerPos = this.blockRunnerWidth - this.runnerWidth;    
    this.runnerInit();
  }

  runnerInit() {
    this.runner.addEventListener('mousedown', this.handlerMouseDown.bind(this));
    this.runner.addEventListener('touchstart', this.handlerTouchStart.bind(this));   
  }

   // Обработчик события мыши
  handlerMouseDown(evt) {
    evt.preventDefault();  
    let startPosition = evt.clientX;
    const calculationPos = this.calculationPos.bind(this);
    document.addEventListener('mousemove', handlerMouseMove);
    document.addEventListener('mouseup', handlerMouseUp);  
  
    function handlerMouseMove(evtMove) {    
      evtMove.preventDefault();     
      let shift = startPosition - evtMove.clientX;
      startPosition = evtMove.clientX;     
      calculationPos(shift);
    }
  
    function handlerMouseUp(evtUp) {
      evtUp.preventDefault();      
      document.removeEventListener('mousemove', handlerMouseMove);
      document.removeEventListener('mouseup', handlerMouseUp);
    }
  }
  
  //Обрабочик события мобильного тача.
  handlerTouchStart(evt) {  
    let touchObjStart = evt.changedTouches[0];
    let startPosition = touchObjStart.clientX;
    const calculationPos = this.calculationPos.bind(this);
    document.addEventListener('touchmove', handlerTouchMove);
    document.addEventListener('touchend', handlerTouchEnd);  
  
    function handlerTouchMove(evtTouchMove) { 
      let touchObjMove = evtTouchMove.changedTouches[0];
      let shift = startPosition - touchObjMove.clientX;
      startPosition = touchObjMove.clientX;
      calculationPos(shift);    
    }
  
    function handlerTouchEnd() {   
      document.removeEventListener('touchmove', handlerTouchMove);
      document.removeEventListener('touchend', handlerTouchEnd);
    }
  }

  // Задаем параметры ползунку и картинке. 
  changingSliderPosition(target, valuePosition) {
    let imgPos = valuePosition * this.multiplicity;
    target.style.left = `${valuePosition}px`; 
    this.img.style.marginLeft = `-${imgPos}px`;    
  }

  // Вычисляем координаты и задаем ограничения.
  calculationPos(shift) {   
    let newPos = this.runner.offsetLeft - shift;
    if (newPos <= this.startRunnerPos) {
      newPos = this.startRunnerPos;
    }
    if (newPos > this.finishRunnerPos) {
      newPos = this.finishRunnerPos;    
    } 
    this.changingSliderPosition(this.runner, newPos);
  }  
}

// const runner = new Runner('block_runner', 'block_img__img');