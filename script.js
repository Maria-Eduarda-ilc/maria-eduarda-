//window.alert('Olá pessoas!')
window.confirm('Como está o seu dia?')
window.prompt('Qual é o seu nome?')

const calcular = document.getElementById('calcular');

function Imc() {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');
    
    if (nome !== '' && altura !== '' && peso !== '') {
        window.alert('Preencha todos os campos!!!')
        return false;
    }
    const valorIMC = (peso/(altura**2)).toFixed(1);
        
        let classificacao = '';
        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'peso ideal. Parabéns!';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'obesidade grau I.';
        }else if (valorIMC < 40){
            classificacao = 'obesidade grau II.';
        }else {
            classificacao = 'obesidade grau III.';
        }

        resultado.textContent = `Olá, ${nome}! Com ${peso}kg e ${altura}m, seu IMC é ${valorIMC}. Atualmente, você está ${classificacao}`;

    {
        resultado.textContent = 'Para calcular o seu IMC , preencha todos os campos.';
    }

}
calcular.addEventListener('click', imc);
    