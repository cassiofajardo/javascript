let valores = [1, 4, 5, 9, 3, 2]

console.log(valores)
valores.sort()

//for(let pos=0; pos<valores.length; pos++) {
//    console.log(valores[pos])
//}   
//   \/ maneira ainda mais fácil \/

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}