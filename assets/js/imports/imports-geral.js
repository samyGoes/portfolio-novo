import { links_nav, links_redes, telaInicial, idade, btnClicado, ultimoBtnClicado } from "../modules/script.js";

telaInicial();
idade();
btnClicado(links_nav, "pagina-atual");
btnClicado(links_redes, "link-rede-click");
ultimoBtnClicado();