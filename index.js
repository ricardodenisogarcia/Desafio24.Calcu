const operaciones = require("./operaciones");

function parsearTerminos(texto) {
  var ubicacionDelSimbolo = texto.indexOf("+");
  if (ubicacionDelSimbolo < 0) {
    var ubicacionDelSimbolo = texto.indexOf("-");
  }
  if (ubicacionDelSimbolo < 0) {
    var ubicacionDelSimbolo = texto.indexOf("/");
  }
  if (ubicacionDelSimbolo < 0) {
    var ubicacionDelSimbolo = texto.indexOf("*");
  }

  var simbolo = texto[ubicacionDelSimbolo];

  var textoParseado = texto.split(simbolo);

  var objetoOperacion = {
    primerTermino: parseInt(textoParseado[0]),
    segundoTermino: parseInt(textoParseado[1]),
    operacion: simbolo,
  };

  return objetoOperacion;
}

function ejecutarOperacion(objetoOperacion) {
  const mapa = {
    "+": operaciones.sumar,
    "-": operaciones.restar,
    "*": operaciones.multiplicar,
    "/": operaciones.dividir,
  };
  const simbolo = objetoOperacion.operacion;
  const ejecutor = mapa[simbolo];
  return ejecutor(
    objetoOperacion.primerTermino,
    objetoOperacion.segundoTermino
  );
}

function main() {
  var parseado = parsearTerminos(process.argv[2]);
  var resultado = ejecutarOperacion(parseado);
  console.log(resultado);
}
main();
