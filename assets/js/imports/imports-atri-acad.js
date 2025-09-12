import { btnClicado, ultimoBtnClicado, verificaTema } from "../modules/script.js";

verificaTema(false);

const link = [];
link[0] = document.querySelector(".btn-voltar");
btnClicado(link, "pagina-atual", "pag_atual", true);
