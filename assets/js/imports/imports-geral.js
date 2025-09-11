import { links_nav, links_redes, telaInicial, idade, btnClicado, ultimoBtnClicado, mudaTema, verificaTema } from "../modules/script.js";


verificaTema();
mudaTema();
telaInicial();
idade();
btnClicado(links_nav, "pagina-atual", "pag_atual");
btnClicado(links_redes, "link-rede-click", "click_link_rede");
ultimoBtnClicado();