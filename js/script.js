import ScrollAnimation from "./Modules/scroll-animation.js";
import TabNav from "./Modules/Tabnavigation.js";
import Modal from "./Modules/modal.js";
import ToolTip from "./Modules/tooltip.js";
import DropdownMenu from "./Modules/dropdown-menu.js";
import MenuMobile from "./Modules/menu-mobile.js";
import FetchAnimais from "./Modules/FetchAnimais";
import initFuncionamento from "./Modules/funcionamento.js";
import FetchBit from "./Modules/InitFetchBitcoin.js";
import Accordion from "./Modules/Accordion.js";


const accordion = new Accordion('#faq dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li','[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]')
modal.init();

const tooltip = new ToolTip("[data-tooltip]");
tooltip.init();

const scroll = new ScrollAnimation('[data-anime="scroll"]')
scroll.init();

const menuMobile = new MenuMobile('[data-menu="button"]','[data-menu="list"]',["click", "touchstart"])
menuMobile.init();

DropdownMenu();
FetchAnimais('.././Animais.json','.numeros-grid');
initFuncionamento();
FetchBit();
