import ativarItens from './modules/ativarItens.js';
import menuMobile from './modules/menu-mobile.js';
import initscrollsuave from './modules/scroll-suave.js';
import initAnimeScroll from './modules/scroll-animacao.js';
import Functionamento from './modules/funcionamento.js';
import InitContador from './modules/contador.js';


ativarItens();
menuMobile();
initscrollsuave();
initAnimeScroll()
InitContador()

const funcionamento = new Functionamento('[data-semana]', 'aberto');
funcionamento.init();