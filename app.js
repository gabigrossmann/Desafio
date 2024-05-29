let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora o desafio';

function verificarConsole(){
    console.log('o botao console foi clicado')
}

function verificarAlerta(){
    alert('Eu amo JS !')
}

function verificarPrompt(){
    let nomeCidade = prompt('Digite o nome da cidade no brasil que voce gosta muito');
    alert(`Estive em ${nomeCidade} e lembrei de você`);
}

function somandoDoisNumeros() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
}