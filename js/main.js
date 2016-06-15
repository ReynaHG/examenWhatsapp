//Funcion que envia a la ventana de chat el mensaje del usuario//
function add() {
   var li = document.createElement('li');
   li.className = 'row';
   var msn = document.getElementById('words').value;
   li.innerHTML ='<div class= "conversaRight">'+'<h6>' + msn + '<span class="newMesaje text-muted pull-right">'+moment().format("HH:mm")+'</span>'+'</h6>'+'</div';
   document.getElementById('newInput').appendChild(li);
}
//Limpiar el imput #words cuando se envia el mensaje//
$('#send').click(function(){
   var texto = $('#words').val();
   $('#words').val('');
});
//El mensaje se envía al presional la tecla "Enter"
$('#words').keypress(function(e){
   if (e.which == 13) {   
   var texto = $('#words').val();
   console.log(texto);
   add (texto);
   $('#words').val('');
   }
}); 

//Buscar contactos //
function search(){
   var table = document.getElementById('datos');
   var searchText = document.getElementById('search').value.toLowerCase();
   var cells="";
   var found=false;
   var compareWith="";
// Recorre las filas en busca del contenido más exacto. 
   for (var i = 1; i < table.rows.length; i++){
      cells = table.rows[i].getElementsByTagName('td');
      found = false;
// Recorremos todas las celdas
   for (var j = 0; j < cells.length && !found; j++){
   compareWith = cells[j].innerHTML.toLowerCase();
// Busca el texto en el contenido de la tabla
   if (searchText.length == 0 || (compareWith.indexOf(searchText) > -1)){
      found = true;
      }
   }
   if(found){
      table.rows[i].style.display = '';
   } else {
// oculta tabla cuando no hay coincidencias con la búsqueda
      table.rows[i].style.display = 'none';
      }
   }
}

// Elimina los mensajes de conversaciones pasadas al cambiar de chat
$(".chats").click(function(){
      $(".disappear").empty();

    });

