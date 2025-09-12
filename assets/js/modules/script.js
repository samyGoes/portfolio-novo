const links_nav = document.querySelectorAll("nav a");
const links_redes = document.querySelectorAll(".link-rede");
const btn_tema = document.querySelector(".btn-tema");


/** 
 * @description Calcula minha idade atual e adiciona ao HTML.
 */
function idade()
{
    const txtIdade = document.querySelector("#idade");
    let dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();
    let idade = anoAtual - 2003;

    txtIdade.innerHTML = idade;
}


//#region EFEITOS DE CLICK DE BOTÕES/LINKS

/** 
 * @description Verifica qual link foi clicado, seta o id para estilização e verifica quais não foram clicados no momento
 * para retirar os ids de estilização dos outros.
 * @param {vetor[]} link Vetor de links/botões 
 * @param {string} l_id ID para estilização do link
 * @param {string} var_localStorage Variável que será criada no LocalStorage
 * @param {boolean} regra True caso esteja usando a função para os links da nav ou outros links/botões com a mesma estilização
 */
function btnClicado(link, l_id, var_localStorage, regra)
{
    for(let i = 0; i < link.length; i++)
    {
        link[i].addEventListener("click", function()
        {
            localStorage.setItem(var_localStorage, link[i]);
            link[i].id = l_id;    

            if(regra) { styleBtnNav(link, i); }
            
            for(let j = 0; j < link.length; j++)
            {
                if(link[j] != localStorage.getItem(var_localStorage)) { link[j].id = ""; } 
            }
        });
    }
}


/** 
 * @description Faz com que o último link clicado permaneça com o id para ser estilizado.
 */
function ultimoBtnClicado()
{
    for(let i = 0; i < links_nav.length; i++)
    {
        if(links_nav[i] == localStorage.getItem("pag_atual"))
        {
            // Setando o id para estilização do botão apertado
            links_nav[i].id = "pagina-atual";

            styleBtnNav(links_nav, i);
        }     
    }    
}



/** 
 * @description Sempre que estiver na página inicial seta o link dela no localStorage (como quando sai do site e volta denovo, para 
 * não continuar o último link que foi armazenado no localStorage).
*/
function telaInicial()
{                      
    if(window.location.href == links_nav[0] || window.location.href + "index.html" == links_nav[0])
    {
        localStorage.setItem("pag_atual", links_nav[0]);
    }
}
//#endregion



//#region TEMA

/**
 * @description Chamo o método verificaTema() e de acordo com o retorno pinta o botão/link da nav.
 * @param {array} link Vetor de links/btns para que um seja estilizado
 * @param {number} i Iterador do vetor
 */
function styleBtnNav(link, i)
{
    let tema = verificaTema();
    if(tema == "padrão") { link[i].style.backgroundColor = "#ccaeff"; }
    else { link[i].style.backgroundColor = "#453068"; }
}


/** 
 * @description Troca o tema da página quando clicar no botão de tema.
 */
function mudaTema()
{
    // Quando clicar no botão de tema
    btn_tema.addEventListener("click", function()
    {    
        // Setar tema escuro
        let tema = verificaTema();
        if(tema == "padrão")
        {
            localStorage.setItem("tema", "dark");
            styleTema("btn-tema dark", "none", "block", 2, true); 
        }
        // Setar tema padrão (claro)
        else 
        { 
            localStorage.setItem("tema", "padrão");    
            styleTema("btn-tema", "block", "none", 1, true);  
        }
        ultimoBtnClicado();
    }); 
}


/**
 * @description Roda sempre que a página for carregada para setar a estilização de cada tema e retornar o tema atual.
 * @param {boolean} btn_tema True para estilização também do botão de tema 
*/
function verificaTema(btn_tema)
{ 
    // Se não tiver uma variável tema, cria ela e seta o tema padrão inicialmente
    if(!localStorage.getItem("tema")) 
    { 
        localStorage.setItem("tema", "padrão"); 
        return "padrão";
    }
    // Setar tema padrão (claro)
    else if(localStorage.getItem("tema") == "padrão") 
    { 
        styleTema("btn-tema", "block", "none", 1, btn_tema);
        return "padrão";
    }
    // Setar tema dark
    else 
    { 
        styleTema("btn-tema dark", "none", "block", 2, btn_tema); 
        return "escuro";
    }
}


/** 
 * @description Style dos temas.
 * @param {string} btn_class Classe do botão para estilização
 * @param {string} i_lua_d Display do ícone de lua (none ou block)
 * @param {string} i_sol_d Display do ícone de sol (none ou block)
 * @param {number} tema Tema: 1 = padrão/claro, 2 = escuro
 * @param {boolean} regra True para estilização também do botão de tema 
 */
function styleTema(btn_class, i_lua_d, i_sol_d, tema = 1, regra)
{
    if(regra)
    {
        const i_lua = document.querySelector(".fa-moon");
        const i_sol = document.querySelector(".fa-sun");
       

        btn_tema.className = btn_class;
        btn_tema.id = "btn-tema-click"; // para o efeito de click abaixo
        i_lua.style.display = i_lua_d;
        i_sol.style.display = i_sol_d;

        // Efeito de "click"
        setTimeout(function() { btn_tema.id = ""; }, 400);
    }

    const cores = 
    [
        ['--cor-txt-main', '--cor-txt-sec', '--cor-bg'], // VARIÁVEIS CSS
        ['#1f1f1f', '#575757', '#eaeaea'],        // TEMA PADRÃO/CLARO = 1
        ['#bdbdbd', '#818181', '#1f1f1f']         // TEMA ESCURO = 2
    ];

    // Alterando as cores das variáveis CSS dependendo do tema escolhido
    for(let i = 0; i < cores.length; i++)
    {
        document.documentElement.style.setProperty(cores[0][i], cores[tema][i]);
    }
}
//#endregion



export { links_nav, links_redes, idade, btnClicado, ultimoBtnClicado, telaInicial, mudaTema, verificaTema };