var numApostar;
var tresPerdidas = 0;
var creditos = 100;

function asignarNumSeleccionado(numSeleccionado){
  numApostar = numSeleccionado;
  document.getElementById("numElegido").textContent=numApostar;
}

function jugar(){
  var numRandom;
  if (numApostar == null)
    alert("No eligio ningun numero");
  else
    if (creditos == 0)
      alert("No puedes jugar sin creditos, por favor recarga")
    else {
      numRandom = Math.floor(Math.random() * 10);
      document.getElementById("numGanador").textContent=numRandom;
      if (numRandom == numApostar){
        creditos = creditos + 10;
        tresPerdidas = 0;
      }
      else {
        tresPerdidas = tresPerdidas + 1;
        if (tresPerdidas == 3){
          creditos = creditos - 2;
          tresPerdidas = 0;
        }
        else
          creditos = creditos - 1;
      }
      document.getElementById("cantCreditos").textContent=creditos;
    }
}
