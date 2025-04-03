function copiarNombre() {
  // Seleccionar el elemento span que contiene el número de teléfono o nombre
  var spanElement = document.querySelector(
    "#main > header > div.x78zum5.xdt5ytf.x1iyjqo2.xl56j7k.xeuugli > div > div > div > div > span"
  );
  var searchText = spanElement.innerText.trim();
  // Verificar si el texto es un número de teléfono
  if (/^\+\d{1,3}\s\d{3}\s\d{6,}$/.test(searchText)) {
    // Si es un número de teléfono, copiar al portapapeles
    alert("Contacto sin nombre");
  } else {
    var tempElement = document.createElement("textarea");
    tempElement.value = searchText;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand("copy");
    document.body.removeChild(tempElement);
    alert("Número copiado al portapapeles: " + searchText);
  }
}
copiarNombre();
