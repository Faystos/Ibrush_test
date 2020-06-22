const selectInp = document.querySelector('.block_inp__sel');

selectInp.addEventListener('click', evt => {
toggleClassSel(evt.target)

});

function toggleClassSel (target) {
  target.classList.toggle('block_inp__sel--open');
  target.classList.toggle('block_inp__sel--close');
}