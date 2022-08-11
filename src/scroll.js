const anchors = document.querySelectorAll('a[href*="#"]');
const mobileMenuRef = document.querySelector('[data-menu]');
const menuBtnRef = document.querySelector('[data-menu-button]');
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute('href').substr(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    if (mobileMenuRef.classList.value !== 'mobile-menu is-open') {
      return;
    }
    mobileMenuRef.classList.toggle('is-open');
    menuBtnRef.classList.toggle('is-open');
  });
}
