const links_nav = document.querySelectorAll("nav a");
const links_redes = document.querySelectorAll(".link-rede");


// Calcula minha idade atual e adiciona ao HTML
function idade()
{
    const txtIdade = document.querySelector("#idade");
    let dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();
    let idade = anoAtual - 2003;

    txtIdade.innerHTML = idade;
}


// Verifica qual link foi clicado, seta o id para estilização e verifica quais não foram clicados no momento
// para retirar os ids de estilização
function btnClicado(link = [], l_id = "")
{
    for(let i = 0; i < link.length; i++)
    {
        link[i].addEventListener("click", function(event)
        {
            //event.preventDefault();
            localStorage.setItem("linkClicado", link[i]);
            link[i].id = l_id;    
            
            for(let j = 0; j < link.length; j++)
            {
                if(link[j] != localStorage.getItem("linkClicado")) { link[j].id = ""; } 
            }
        });
    }
}


// Faz com que o último link clicado permaneça com o id para ser estilizado
function ultimoBtnClicado()
{
    for(let i = 0; i < links_nav.length; i++)
    {
        if(links_nav[i] == localStorage.getItem("linkClicado"))
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
        localStorage.setItem("linkClicado", links_nav[0]);
    }
}





export { links_nav, links_redes, idade, btnClicado, ultimoBtnClicado, telaInicial };