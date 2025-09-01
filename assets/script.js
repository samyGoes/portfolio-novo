const links = document.querySelectorAll("nav a");


function idade()
{
    const txtIdade = document.querySelector("#idade");
    let dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();
    let idade = anoAtual - 2003;

    txtIdade.innerHTML = idade;
}


// Verifica qual botão foi clicado, seta o id para estilização e verifica quais não foram clicados no momento
// para retirar os ids de estilização
function btnClicado()
{
    for(let i = 0; i < links.length; i++)
    {
        links[i].addEventListener("click", function()
        {
            localStorage.setItem("linkClicado", links[i]);
            links[i].id = "pagina-atual";    
            
            for(let j = 0; j < links.length; j++)
            {
                if(links[j] != localStorage.getItem("linkClicado")) { links[j].id = ""; } 
            }
        });
    }
}

// Faz com que o último botão clicado permaneça com o id para ser estilizado
function ultimoBtnClicado()
{
    for(let i = 0; i < links.length; i++)
    {
        if(links[i] == localStorage.getItem("linkClicado"))
        {
            // Setando o id para estilização do botão apertado
            links[i].id = "pagina-atual";
        }     
    }    
}




idade();
btnClicado();
ultimoBtnClicado();