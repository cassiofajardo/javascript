const calcular = document.getElementById('calcular')

function imc() {
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    if (nome !== '' && altura !== '' && peso !== '') {
        
        const valorIMC = (peso / (altura * altura)).toFixed(1)
        
        let classificacao = "";
        if (valorIMC <= 18.5) {
            classificacao = 'abaixo do peso ideal'
        }else if (valorIMC <= 24.9) {
            classificacao = 'com o peso normal'
        }else if (valorIMC <= 29.9) {
            classificacao = 'com sobrepeso'
        }else if (valorIMC <= 39.9) {
            classificacao = 'obeso'   
        }else {
            classificacao = 'com obesidade mórbida'
        }          

        resultado.textContent = `Olá ${nome}! O seu IMC resultou em ${valorIMC}. Segundo as classificações do método, você está ${classificacao}.`
    }else {
        resultado.textContent = 'Preencha todos os campos.'
    }
}
calcular.addEventListener('click', imc) //imc é o nome que dei a FUNÇÃO com este código.
 
