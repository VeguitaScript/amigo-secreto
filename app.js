// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array que almacena los nombres de los amigos
let amigos = [];

// Función para añadir un amigo
function agregarAmigo() {
  const input = document.getElementById("nombreAmigo");
  const nombre = input.value.trim();
  const resultado = document.getElementById("resultadoSorteo");

  // Ocultamos el mensaje de un sorteo anterior
  resultado.style.display = "none";
  resultado.innerHTML = "";

  // Validar que el campo no esté vacío
  if (!nombre) {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Agregar el nombre al array
  amigos.push(nombre);

  // Limpiar el campo de entrada
  input.value = "";

  // Actualizar la lista en pantalla
  actualizarLista();
}

// Función para mostrar la lista de amigos en el HTML
function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  // Convertimos cada nombre en un <li>
  lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join("");
}

// Función para sortear un amigo
function sortearAmigo() {
  // Validar que haya al menos un amigo en la lista
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  // Generar un índice aleatorio
  const indice = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indice];

  // Mostramos el recuadro y colocamos el texto
  const resultado = document.getElementById("resultadoSorteo");
  resultado.style.display = "block";  // Lo mostramos
  resultado.innerHTML = `El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>`;

  // Limpiamos el array y la lista para un nuevo sorteo
  amigos = [];
  actualizarLista();
}