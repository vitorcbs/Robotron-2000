const controle = document.querySelectorAll("[data-controle]"); //QuerySelectorAll busca todos elementos da classe

controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(
      evento.target.dataset.controle,
      evento.target.parentNode
    ); /*parent node pega o pai do elemento, entao aqui ta passando a opercao que vai realizar e o pai do local da operacao*/
  });
});

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector("[data-contador]");

  if (operacao === "-") {
    peca.value = parseInt(peca.value) - 1; //ParseInt transforma em numero
  } else {
    peca.value = parseInt(peca.value) + 1;
  }
}
