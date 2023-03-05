function carregar (){
    var msg1 = window.document.getElementById('msg1')
    var msg2 = window.document.getElementById('msg2')
    var img = window.document.getElementById('imagem')
    var data = new Date ()
    var hora = data.getHours()
    var mins = data.getMinutes()
    msg1.innerHTML = `São ${hora} horas e ${mins} minutos.`
    if (hora >= 0 && hora < 12){
        // BOM DIA!
        msg2.innerHTML = `Bom Dia!`
        
    } else if (hora >= 12 && hora < 18){
        // BOA TARDE!
        img.src = 'imagens2/boa-tarde.png'
        document.body.style.background = '#7C87AB'
        msg2.innerHTML = `Boa Tarde!`
    } else {
        // BOA NOITE!
        img.src = 'imagens2/boa-noite.png'
        document.body.style.background = '#2B2B35'
        document.getElementById('titulo').style.color = 'white'
        document.getElementById('rodape').style.color = "white"
        msg2.innerHTML = `Boa Noite!`
    }
}