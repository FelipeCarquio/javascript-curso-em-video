function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora}h.`
    if (hora >=0 && hora < 12) {
        img.src = 'images/manha.png'
        document.body.style.backgroundImage = 'var(--manha)'
    } else if(hora >= 12 && hora < 18) {
        img.src = 'images/tarde.png'
        document.body.style.backgroundImage = 'var(--tarde)'
    } else {
        img.src = 'images/noite.png'
        document.body.style.backgroundImage = 'var(--noite)'
    }
}