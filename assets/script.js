function idade()
{
    const txtIdade = document.querySelector("#idade");
    let dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();
    let idade = anoAtual - 2003;

    txtIdade.innerHTML = idade;
}
idade();