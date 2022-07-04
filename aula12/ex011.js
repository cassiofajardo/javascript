var idade = 70
if (idade > 18 && idade < 65) {
    console.log('Voto Obrigatório')
} else if (idade >= 16 || idade > 65) {
    console.log('Voto Opcional')    
} else if (idade < 16) {
    console.log('Não Vota')
}