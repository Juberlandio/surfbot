import ativarItens from './modules/ativarItens.js';
import initMenuMobile from './modules/menu-mobile.js';
import initscrollsuave from './modules/scroll-suave.js';
import initAnimeScroll from './modules/scroll-animacao.js';
import Functionamento from './modules/funcionamento.js';

ativarItens();
initMenuMobile();
initscrollsuave();
initAnimeScroll()

const funcionamento = new Functionamento('[data-semana]', 'aberto');
funcionamento.init();