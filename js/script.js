import InitScrollAnimation from "./Modules/scroll-animation.js";
import TabNav from "./Modules/Tabnavigation.js";
import InitModal from "./Modules/modal.js";
import ToolTip from "./Modules/tooltip.js";
import DropdownMenu from "./Modules/dropdown-menu.js";
import MenuMobile from "./Modules/menu-mobile.js";
import AnimNum from "./Modules/Anima-numeros.js";
import initFuncionamento from "./Modules/funcionamento.js";
import FetchBit from "./Modules/InitFetchBitcoin.js";
import Accordion from "./Modules/Accordion.js";

const accordion = new Accordion('#faq dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li','[data-tab="content"] section');
tabNav.init();

InitScrollAnimation();
InitModal();
ToolTip();
DropdownMenu();
MenuMobile();
AnimNum();
initFuncionamento();
FetchBit();
