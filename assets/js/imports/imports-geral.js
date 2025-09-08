import { links_nav, links_redes, telaInicial, idade, btnClicado, ultimoBtnClicado, mudaTema, verificaTema } from "../modules/script.js";


verificaTema();
mudaTema();
telaInicial();
idade();
btnClicado(links_nav, "pagina-atual");
btnClicado(links_redes, "link-rede-click");
ultimoBtnClicado();