let num = [5, 8, 2, 9, 3]
console.log(num)
console.log(`O vetor tem ${num.length} elementos.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
num.sort() //organiza os elementos numéricos em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} elementos.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
num.push(1) // adiciona um novo elemento (1 neste caso) ao final do vetor
console.log(num) //o novo elemento foi posto ao final, para organiza-lo em ordem crescente, basta utilizar o comando num.sort() novamente ou colocar o anterior após o .push //

let pos = num.indexOf(8) // não esquecer que a posição mudou pois o vetor ficou em ordem crescente.
console.log(`O valor 8 está na posição ${pos}`)

