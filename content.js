// Función para copiar el número de teléfono
function abrirContactos() {
  // Seleccionar el elemento span que contiene el número de teléfono
  var spanElement = document.querySelector(
    "#main > header > div.x78zum5.xdt5ytf.x1iyjqo2.xl56j7k.xeuugli > div > div > div > div > span"
  );
  // Verificar si se encontró el elemento
  if (spanElement) {
    // Crear un elemento de texto temporal
    var tempElement = document.createElement("textarea");
    // Establecer el valor del elemento de texto con el contenido del span (el número de teléfono)
    tempElement.value = spanElement.innerText;
    // Agregar el elemento de texto al documento
    document.body.appendChild(tempElement);
    // Seleccionar el texto dentro del elemento de texto
    tempElement.select();
    // Copiar el texto seleccionado al portapapeles
    document.execCommand("copy");
    // Eliminar el elemento de texto temporal
    document.body.removeChild(tempElement);

    // Verificar si el texto copiado es un número de teléfono o un nombre
    var searchText = tempElement.value.trim();
    if (/^\+\d{1,3}\s?\d{1,5}(\s?\d+)+$/.test(searchText)) {
      // Si es un número de teléfono, abrir el enlace para añadir un nuevo contacto en otra pestaña
      window.open("https://contacts.google.com/new", "_blank");
    } else {
      // Si es un nombre, abrir el enlace para buscar contactos en otra pestaña
      window.open(
        "https://contacts.google.com/search/" + encodeURIComponent(searchText),
        "_blank"
      );
    }
  } else {
    // Si no se encuentra el elemento, mostrar alerta de que no se encontró el número de teléfono
    console.log("No se encontró el número de teléfono.");
  }
}

abrirContactos();
