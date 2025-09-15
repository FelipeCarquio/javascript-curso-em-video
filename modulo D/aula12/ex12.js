var agora = new Date()//usado para pegar as horas, sempre usa o new Date()
var hora = agora.getHours()//para horas usa .getHours()
console.log(`Agora são ${hora}h.`)
if (hora < 12) {
    console.log('Bom dia!')
}else if (hora < 18) {
    console.log('Boa tarde!')
}else {
    console.log('Boa noite!')
}