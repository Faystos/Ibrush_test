'use strict';

(function () {
  const runner = document.querySelector('.block_runner__runner');
  const blockRunnerWidth = document.querySelector('.block_runner').offsetWidth;
  const img = document.querySelector('.block_img__img');
  const runnerWidth = runner.offsetWidth;
  const startRunnerPos = 0;
  const finishRunnerPos = blockRunnerWidth - runnerWidth;  
  const multiplicity = 2.19;
  
  // События.
  runner.addEventListener('mousedown', handlerMouseDown);
  runner.addEventListener('touchstart', handlerTouchStart);
  
  // Обработчик события мыши
  function handlerMouseDown (evt) {
    evt.preventDefault();  
    let startPosition = evt.clientX;
    document.addEventListener('mousemove', handlerMouseMove);
    document.addEventListener('mouseup', handlerMouseUp);  
  
    function handlerMouseMove (evtMove) {
      evtMove.preventDefault();
      let shift = startPosition - evtMove.clientX;
      startPosition = evtMove.clientX;
      calculationPos(shift);        
    }
  
    function handlerMouseUp (evtUp) {
      evtUp.preventDefault();  
      document.removeEventListener('mousemove', handlerMouseMove);
      document.removeEventListener('mousedown', handlerMouseDown);
    }
  }
  
  //Обрабочик события мобильного тача.
  function handlerTouchStart (evt) {  
    let touchObjStart = evt.changedTouches[0];
    let startPosition = touchObjStart.clientX;
    document.addEventListener('touchmove', handlerTouchMove);
    document.addEventListener('touchend', handlerTouchEnd);  
  
    function handlerTouchMove (evtTouchMove) { 
      let touchObjMove = evtTouchMove.changedTouches[0];
      let shift = startPosition - touchObjMove.clientX;
      startPosition = touchObjMove.clientX;
      calculationPos(shift);    
    }
  
    function handlerTouchEnd () {   
      document.removeEventListener('touchmove', handlerTouchMove);
      document.removeEventListener('touchend', handlerTouchEnd);
    }
  }
  
  // Задаем параметры ползунку и картинке. 
  function changingSliderPosition(target, valuePosition) {
    let imgPos = valuePosition * multiplicity;
    target.style.left = `${valuePosition}px`; 
    img.style.marginLeft = `-${imgPos}px`;
  }
  
  // Вычисляем координаты и задаем ограничения.
  function calculationPos (shift) {  
    let newPos = runner.offsetLeft - shift;
    if (newPos <= startRunnerPos) {
      newPos = startRunnerPos;
    }
    if (newPos > finishRunnerPos) {
      newPos = finishRunnerPos;    
    } 
    changingSliderPosition(runner, newPos);
  }
})()

