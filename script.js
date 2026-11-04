//ELEMENTOS bASE
var jogada = document.getElementById("jogada");
var jogador = document.getElementById("jogador");
var maquina = document.getElementById("maquina");
var botao = document.getElementById("botao");
var AreaEscolha = document.getElementById("area-escolha");
var AreaResultado = document.getElementById("area-resultado");
//IMAGENS USADAS

var imagnes_jogador = ["img/pedra.png", "img/tesoura.png", "img/papel.png"];
var imagnes_maquina = [
  "img/pedraDireita.png",
  "img/tesouraDireita.png",
  "img/papelDireita.png",
];

//INDICE

var index = 0;

//FUNÇAO PARA OS EFEITOS

function efeitoImagem() {
  jogador.src = imagnes_jogador[index];
  maquina.src = imagnes_maquina[index];

  index++;
  if (index === 3) {
    index = 0;
  }
}

//CHAMADA DO EFEITO
var efeito = setInterval(efeitoImagem, 130);

function select(escolhaDoJogador) {
  //ESCONDER AREA DE ESCOLHA
  AreaEscolha.style.display = "none";

  //MOSTRA A AREA DE ANIMAÇAO
  AreaResultado.style.display = "block";

  //CONTADOR
  jogada.textContent = "3";

  //ATIVAR
  var tempo = setInterval(() => {
    var cronometro = parseInt(jogada.textContent);
    cronometro--;
    jogada.textContent = cronometro;

    //PARA EM 0
    if (cronometro === 0) {
      clearInterval(tempo);
      clearInterval(efeito);
    }
  }, 1000);

  //REGRAS
  setTimeout(() => {
    var escolhaMaquina = Math.floor(Math.random() * 3);

    //MOTRAS ESCOLHA DA MAQUINA
    maquina.src = imagnes_maquina[escolhaMaquina];

    //MOSTRAS ESCOLHA JOGADOR
    jogador.src = imagnes_jogador[escolhaDoJogador];

    //VERIFICAAR EMPATE
    if (escolhaDoJogador === escolhaMaquina) {
      jogada.textContent = "empate!!!";
      botao.style.display = "block";
      return false;
    }

    //VERIFICAR VITORIA
    switch (escolhaDoJogador) {
      case 0: // PEDRA
        escolhaMaquina === 2
          ? (jogada.textContent = "Jogador venceu!")
          : (jogada.textContent = "voce perdeu!!");
        botao.style.display = "block";
        break;
      case 1: // Papel
        escolhaMaquina === 0
          ? (jogada.textContent = "Jogador venceu!")
          : (jogada.textContent = "voce perdeu!!");
        botao.style.display = "block";
        break;
      case 2: // Papel
        escolhaMaquina === 1
          ? (jogada.textContent = "Jogador venceu!")
          : (jogada.textContent = "voce perdeu!!");
        botao.style.display = "block";
        break;
      default:
        alert("Escolha invalida!");
    }
  }, 3000);
}
