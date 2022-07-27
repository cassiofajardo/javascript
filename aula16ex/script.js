let num = document.getElementById('txtn')
let tab = document.getElementById('seltab')
function adicionar() {
    let n = Number(num.value)
    if (n < 1 || n > 100) {
        window.alert('Valor inválido ou já encontrado na lista')
    } else { 
        let item = document.createElement('option')
        item.text = n
        tab.appendChild(item) // tabuada "adicionar elemento filho" item
    }
    
}
var array = [n]