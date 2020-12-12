function carregar() {

var msg =document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 6
msg.innerHTML = `<strong>agora são ${hora} horas<strong>`
if (hora > 0 && hora < 12){
  img.src='Manha.jpg'
document.body.style.background = "pink"
  //bom dia 
}else if (hora > 12 && hora < 18){
 // boa tarde 
  img.src='Tarde.jpg'
  document.body.style.background="#D1C7CE"
}else {
  img.src='Noite.jpg'
  document.body.style.background= 
 "#525661"
 // boa noite 
}

}