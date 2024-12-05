/* JQUERY */
$(document).ready(function () {
    
    function tiempo(){
        var dataAtual = new Date();
        var horaAtual = dataAtual.getHours();
        var minutoAtual = dataAtual.getMinutes();
        var segundos = dataAtual.getSeconds();
        var tarde = "am";
        if (horaAtual >= 13){
            horaAtual = horaAtual - 12;
            tarde = "pm";
        }
        if (segundos <= 9){
            segundos = "0" + segundos;
        }
        $(".hora").text(horaAtual + ":" + minutoAtual + ":" + segundos + " " + tarde);
    }

    tiempo();
    setInterval(function () {
        tiempo();
    }, 1000);

});