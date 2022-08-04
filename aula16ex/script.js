let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
var array = []

function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    } 
}

function inList(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }   
}

function adicionar() {
    if(isNumber(num.value) && !inList(num.value, array)) {
        array.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
        
    } else{
        window.alert('Valor inválido ou já encontrado na lista')
    }    
    num.value = ''
    num.focus() 
}  

    function finalizar() {
        if (array.length == 0) {
            window.alert('Adicione valores para analisar.')
        } else {
            let total = array.length
            let maior = array[0]
            let menor = array[0]
            let soma = 0
            let media = 0
            for(let pos in array) {
                soma += array[pos]
                if(array[pos] > maior)
                maior = array[pos]
                if(array[pos] < menor)
                menor = array[pos]
            }
            media = soma / total 
            res.innerHTML = ''
            res.innerHTML += `<p> Temos ${total} números cadastrados.</p>`
            res.innerHTML += `<p> O maior valor informado é: ${maior}</p>`
            res.innerHTML += `<p> O menor valor informado é: ${menor}</p>`
            res.innerHTML += `<p> A soma dos valores informados é: ${soma}</p>`
            res.innerHTML += `<p>A média dos valores informados é: ${media}</p>`
        }
        
    }


