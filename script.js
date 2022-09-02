console.log(window.location.href);

var widthPagina = window.innerWidth;
var heightPagina = window.innerHeight;

let widthTela = screen.width;
let heightTela = screen.height;

const titulo = document.title;

document.getElementById(
  "div-page"
).innerHTML = `largura da pagina: ${widthPagina}
altura da pagina: ${heightPagina}
largura da tela: ${widthTela}
altura da tela: ${heightTela}
titulo da pagina: ${titulo}
ultima modificação: ${document.lastModified}`;

let rolagem = document.documentElement.scrollTop;

alert(`A posição da barra de rolagem é ${rolagem} pixels`);

if (document.getElementById("btn-voltar") !== null) {
  document.getElementById("btn-voltar").onclick = function () {
    window.history.back();
  };
}

const posicionarY = () => {
  let posicaoY = prompt("quer posicionar a rolagem y em quantos px?");
  while (isNaN(parseInt(posicaoY))) {
    alert("digite um numero valido");
    posicaoY = prompt("quer posicionar a rolagem y em quantos px?");
  }
  window.scrollTo(0, parseInt(posicaoY));
  return;
};

document.getElementById("btn-y").onclick = posicionarY;

const irParaSiteUtfpr = () => {
  let confirma = confirm("Quer mesmo ir para a pagina ?");
  if (confirma) {
    window.open("http://semana.tsi.gp.utfpr.edu.br");
  } else {
  }
};

document.getElementById("site-utfpr").onclick = irParaSiteUtfpr;
