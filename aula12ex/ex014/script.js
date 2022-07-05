function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora > 0 && hora < 12) {
        msg.innerHTML = 'Bom Dia!'
        img.src = 'manha.png'
        document.body.style.backgroundColor = '#475830'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = 'Boa Tarde!'
        img.src = 'tarde.png'
        document.body.style.backgroundColor = '#b77a69'
    } else {
        msg.innerHTML = 'Boa Noite!'
        img.src = 'noite.png'
        document.body.style.backgroundColor = '#271f3a'
    }
}
var foto = window.document.getElementById('foto')