const iceCountRefs = document.querySelectorAll('.ice-count');
const checkBoxesRef = document.querySelector('.check-box-wrapper');

iceCountRefs.forEach(el => el.disabled = true);

checkBoxesRef.addEventListener('click', e => {
  const inputRef = document.querySelector(`.ice-count-${e.target.name}`);
  if (e.target.classList.contains('custom-checkbox__input')) {
    if (e.target.checked) {
      inputRef.disabled = false;
      return;
    }
    inputRef.disabled = true;
  }
});


