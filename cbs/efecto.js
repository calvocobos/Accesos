/* JQUERY */
$(document).ready(function () {
    
    function tiempo(){
        var fechacompleta = new Date();

        //numero del dia
        var dia = fechacompleta.getDate();
        // Formatear el día para que tenga dos dígitos
        var diaFormateado = dia < 10 ? '0' + dia : dia;
        // Asignar el día formateado al elemento <p> con id="dia"
        $('#dia').text(diaFormateado);

        //nombre del dia
        var diaNumero = fechacompleta.getDay();
        // Crear un arreglo con los nombres de los días en español
        var diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
                // Obtener el nombre del día en español
        var diaNombre = diasSemana[diaNumero];
        // Asignar el nombre del día al <p> con id="dia"
        $('#dianom').text(diaNombre);

        //Nombre del mes
        var mesNumero = fechacompleta.getMonth();
        // Crear un arreglo con los nombres de los meses en español
        var mesesAnyo = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        // Obtener el nombre del mes en español
        var mesNombre = mesesAnyo[mesNumero];
        // Asignar el nombre del mes al <p> con id="mes"
        $('#mesnom').text(mesNombre);

        //numero de hora en 12 horas
        // Obtener la hora en formato de 24 horas
        var hora = fechacompleta.getHours();
        var minutos = fechacompleta.getMinutes();
        
        // Determinar si es AM o PM
        var ampm = hora >= 12 ? 'PM' : 'AM';
        
        // Convertir la hora a formato de 12 horas
        hora = hora % 12;
        hora = hora ? hora : 12; // Si la hora es 0 (medianoche), mostrar 12
        minutos = minutos < 10 ? '0' + minutos : minutos; // Asegurarse de que los minutos tengan dos dígitos
        
        // Formatear la hora en formato "00"
        var horaFormateada = hora < 10 ? '0' + hora : hora;

        // Asignar los valores a los elementos <p> con id="hora" y id="ampm"
        $('#hora').text(horaFormateada);
        $('#minuto').text(minutos);
        $('#ampm').text(ampm);

        //segundos
        var segundos = fechacompleta.getSeconds();
        // Formatear el segundo
        var segFormateado = segundos < 10 ? '0' + segundos : segundos;
        $('#segun').text(segFormateado);
    }

    tiempo();
    setInterval(function () {
        tiempo();
    }, 1000);

});