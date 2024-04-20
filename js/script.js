import MenuMobile from './modules/menu-mobile.js';
import initscrollsuave from './modules/scroll-suave.js';
import initAnimeScroll from './modules/scroll-animacao.js';

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

initscrollsuave();
initAnimeScroll()