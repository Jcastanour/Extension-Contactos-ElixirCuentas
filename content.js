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
      // Si es un nombre, necesitamos encontrar el número primero
      // 1. Hacemos clic en el nombre para abrir el panel de información
      spanElement.click();

      // 2. Esperamos un momento para que el panel cargue
      setTimeout(function () {
        // 3. Usamos nuestro XPath robusto para encontrar el elemento del número
        var numberElement = document.evaluate(
          "/html/body/div[1]/div/div/div[3]/div/div[5]/span/div/span/div/div/section/div[1]/div[2]/div[2]/span/div",
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        ).singleNodeValue;

        if (numberElement) {
          var phoneNumber = numberElement.innerText.trim();
          // 4. Abrimos Google Contacts buscando por el NÚMERO que encontramos
          window.open(
            "https://contacts.google.com/search/" +
              encodeURIComponent(phoneNumber),
            "_blank"
          );

          // Opcional: Volver a la pantalla del chat cerrando el panel de info.
          // Para esto, necesitaríamos el selector del botón de cerrar.
          // Por ejemplo: document.querySelector('span[data-icon="x-alt"]').click();
        } else {
          // Si por alguna razón no se encuentra el número, se busca por nombre como último recurso
          console.log(
            "No se pudo encontrar el número de teléfono, buscando por nombre como fallback."
          );
          window.open(
            "https://contacts.google.com/search/" +
              encodeURIComponent(searchText),
            "_blank"
          );
        }
      }, 500); // Damos 500ms de espera para que aparezca el panel
    }
  } else {
    console.log("No se encontró el número de teléfono.");
  }
}

// Ejecutar la función
abrirContactos();
