import { $ } from '../../../scripts/global/selector';
import { ACTIVE } from '../../../scripts/global/const';
import onEsc from '../../../scripts/global/onEsc';

const mainNav = $('.header__main-nav');
const btnOpen = $('.header__open-nav');
// const btnClose = $('.header__close-nav');

const open = () => {
  mainNav.classList.toggle(ACTIVE);
  btnOpen.classList.toggle(ACTIVE);
};

const close = () => mainNav.classList.remove(ACTIVE);

const onBtnOpenClick = e => {
  e.preventDefault();
  open();
};

// const onBtnCloseClick = e => {
//   e.preventDefault();
//   close();
// };

const closeOnDoc = e => {
  const target = e.target;
  const nav = target == mainNav || mainNav.contains(target);
  // const btn = target == btnNav || btnNav.contains(target);
  const active = mainNav.classList.contains(ACTIVE);
  if (!nav && active) {
    close();
  }
};

const onDocClick = e => {
  e.preventDefault();
  closeOnDoc(e);
};

const onEscKeyup = e => {
  e.preventDefault();
  onEsc(e, close());
};

btnOpen.addEventListener('click', onBtnOpenClick);
// btnClose.addEventListener('click', onBtnCloseClick);
document.addEventListener('mouseup', onDocClick);
document.addEventListener('keyup', onEscKeyup);
