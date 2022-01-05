var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";



//var cauchin = new Pakiman("Cauchin", 100, 30);  opción uno
//var pokacho = new Pakiman("Pokacho", 80, 50); opción uno
//var tocinauro = new Pakiman("Tocinauro", 120, 40);  opción uno

//pokacho.mostrar(); opción uno
//cauchin.mostrar(); opción uno
//tocinauro.mostrar(); opción uno

var coleccion = [];          // segunda opción
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

for( var p of coleccion)  // in muestra el indice y of muestra la instancia
{
  p.mostrar();
}

for(var x in coleccion[0])
{
  console.log(x);
}
