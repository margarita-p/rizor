import { $ } from '../../../scripts/global/selector';
import { ACTIVE } from '../../../scripts/global/const';
import onEsc from '../../../scripts/global/onEsc';
// import closeModalOnDock from '../../../scripts/global/closeModalOnDock';

const mainNav = $('.header__main-nav');
const btnOpen = $('.header__open-nav');
// const btnClose = $('.header__close-nav');

const toggle = () => {
  mainNav.classList.toggle(ACTIVE);
  btnOpen.classList.toggle(ACTIVE);
};

// const open = () => mainNav.classList.add(ACTIVE);
// const close = () => mainNav.classList.remove(ACTIVE);

const close = () => {
  mainNav.classList.remove(ACTIVE);
  btnOpen.classList.remove(ACTIVE);
}


const onBtnOpenClick = e => {
  e.preventDefault();
  toggle();
};

// const onBtnCloseClick = e => {
//   e.preventDefault();
//   close();
// };

// const onDocClick = e => {
//   e.preventDefault();
//   closeModalOnDock(e, mainNav, close);
// };

const onEscKeyup = e => {
  e.preventDefault();
  onEsc(e, close());
};

btnOpen.addEventListener('click', onBtnOpenClick);
// btnClose.addEventListener('click', onBtnCloseClick);
// document.addEventListener('mouseup', onDocClick);
document.addEventListener('keyup', onEscKeyup);
