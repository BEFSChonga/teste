
function caregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('idimg')
    var corpo = window.document.body;
    var data = new Date();
    var hora = data.getHours();
    var minutos =data.getMinutes();

    msg.innerHTML='Hora: '+hora;
    msg.innerHTML +=' : '+minutos;

    if(hora>=0 && hora< 12){
        corpo.style.background='green';
        img.src='img/Untitled-3.jpg';
    }else if (hora>=12 && hora <=18){
        img.src='img/Untitled-2.jpg';
        corpo.style.background='rgba(56, 112, 63, 0.651)';    
    }else{
        img.src='img/Untitled-1.jpg';
        corpo.style.background='rgb(25, 22, 70)';
    }
}
