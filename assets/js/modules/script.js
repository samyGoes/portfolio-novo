const links_nav = document.querySelectorAll("nav a");
const links_redes = document.querySelectorAll(".link-rede");
const btn_tema = document.querySelector(".btn-tema");


// Calcula minha idade atual e adiciona ao HTML
function idade()
{
    const txtIdade = document.querySelector("#idade");
    let dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();
    let idade = anoAtual - 2003;

    txtIdade.innerHTML = idade;
}


//#region EFEITOS DE CLICK DE BOTÕES/LINKS

// Verifica qual link foi clicado, seta o id para estilização e verifica quais não foram clicados no momento
// para retirar os ids de estilização
function btnClicado(link = [], l_id = "", var_localStorage)
{
    for(let i = 0; i < link.length; i++)
    {
        link[i].addEventListener("click", function(event)
        {
            //event.preventDefault();
            localStorage.setItem(var_localStorage, link[i]);
            link[i].id = l_id;    
            
            for(let j = 0; j < link.length; j++)
            {
                if(link[j] != localStorage.getItem(var_localStorage)) { link[j].id = ""; } 
            }
        });
    }
}


// Faz com que o último link clicado permaneça com o id para ser estilizado
function ultimoBtnClicado()
{
    for(let i = 0; i < links_nav.length; i++)
    {
        if(links_nav[i] == localStorage.getItem("pag_atual"))
        {
            // Setando o id para estilização do botão apertado
            links_nav[i].id = "pagina-atual";
        }     
    }    
}


// Sempre que estiver na página inicial seta o link dela no localStorage (como quando sai do site e volta dnv, para 
// não continuar o último link q foi armazenado no localStorage)
function telaInicial()
{                      
    if(window.location.href == links_nav[0] || window.location.href + "index.html" == links_nav[0])
    {
        localStorage.setItem("pag_atual", links_nav[0]);
    }
}
//#endregion


//#region TEMA

// Trocando o tema da página
function mudaTema()
{
    if(!localStorage.getItem("tema"))
    {
        localStorage.setItem("tema", "padrão");
    }
    
    // Quando clicar no botão de tema
    btn_tema.addEventListener("click", function()
    {
        // Setar tema escuro
        if(localStorage.getItem("tema") == "padrão")
        {
            localStorage.setItem("tema", "dark");
            styleTema("btn-tema dark", "none", "block"); 
        }
        // Setar tema padrão (claro)
        else 
        { 
            localStorage.setItem("tema", "padrão");    
            styleTema("btn-tema", "block", "none");  
        }
    }); 
}


// Rodará sempre que a página for carregada para setar a estilização de cada tema
function verificaTema()
{ 
    // Setar tema padrão (claro)
    if(localStorage.getItem("tema") == "padrão") { styleTema("btn-tema", "block", "none"); }
    // Setar tema dark
    else { styleTema("btn-tema dark", "none", "block"); }
}


// Style dos temas
function styleTema(btn_class, i_lua_d, i_sol_d)
{
    const i_lua = document.querySelector(".fa-moon");
    const i_sol = document.querySelector(".fa-sun");

    btn_tema.className = btn_class;
    btn_tema.id = "btn-tema-click";
    i_lua.style.display = i_lua_d;
    i_sol.style.display = i_sol_d;

    // Efeito de "click"
    setTimeout(function() { btn_tema.id = ""; }, 400);
}
//#endregion

export { links_nav, links_redes, idade, btnClicado, ultimoBtnClicado, telaInicial, mudaTema, verificaTema };