var Button_X =
  "#app > div > div.x78zum5.xdt5ytf.x5yr21d > div > div._aig-._as6h.x9f619.x1n2onr6.xyw6214.x5yr21d.x6ikm8r.x10wlt62.x17dzmu4.x1i1dayz.x2ipvbc.x1w8yi2h.xpilrb4.x1t7ytsu.x1m2ixmg.x1c4vz4f.x2lah0s.xwfak60.x5hsz1j.x17dq4o0.x10e4vud > span > div > span > div > header > div > div.x1okw0bk.x1fxk84t > div > span";

function copiarNumero() {
  // Seleccionar el elemento span que contiene el número de teléfono o nombre (Parte de arriba)
  var spanElement = document.querySelector(
    "#main > header > div.x78zum5.xdt5ytf.x1iyjqo2.xl56j7k.xeuugli > div > div > div > div > span"
  );
  //console.log(spanElement);
  var searchText = spanElement.innerText.trim();
  // Verificar si el texto es un número de teléfono
  if (/^\+\d{1,3}\s\d{3}\s\d{6,}$/.test(searchText)) {
    // Si es un número de teléfono, copiar al portapapeles
    var tempElement = document.createElement("textarea");
    tempElement.value = searchText;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand("copy");
    document.body.removeChild(tempElement);
  } else {
    // Si no es un número de teléfono, hacer clic en otro elemento para intentar encontrarlo
    spanElement.click();

    setTimeout(function () {
      var newSpanElement = document.evaluate(
        //cLientes full xpath
        "/html/body/div[1]/div/div/div[3]/div/div[5]/span/div/span/div/div/section/div[1]/div[2]/div[2]/span/div",
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;
      console.log(newSpanElement);
      if (newSpanElement) {
        var newSearchText = newSpanElement.innerText.trim();
        // Verificar si el texto es un número de teléfono
        if (/^\+\d{1,3}\s?\d{1,5}(\s?\d+)+$/.test(newSearchText)) {
          // Si es un número de teléfono, copiar al portapapeles
          var tempElement = document.createElement("textarea");
          tempElement.value = newSearchText;
          document.body.appendChild(tempElement);
          tempElement.select();
          document.execCommand("copy");
          document.body.removeChild(tempElement);
          //alert('Número copiado al portapapeles: ' + newSearchText);
          document.querySelector(Button_X).click();
        } else {
          alert("No hay número que copiar");
        }
      } else {
        //Empresas js path
        var newSpanElement = document.querySelector(
          "#app > div > div.x78zum5.xdt5ytf.x5yr21d > div > div._aig-._as6h.x9f619.x1n2onr6.xyw6214.x5yr21d.x6ikm8r.x10wlt62.x17dzmu4.x1i1dayz.x2ipvbc.x1w8yi2h.xpilrb4.x1t7ytsu.x1m2ixmg.x1c4vz4f.x2lah0s.xwfak60.x5hsz1j.x17dq4o0.x10e4vud > span > div > span > div > div > section > div:nth-child(13) > div.x1c1uobl._ajxt > div > div > span > span"
        );
        console.log(newSpanElement);
        var newSearchText = newSpanElement.innerText.trim();
        // Verificar si el texto es un número de teléfono
        if (/^\+\d{1,3}\s?\d{1,5}(\s?\d+)+$/.test(newSearchText)) {
          // Si es un número de teléfono, copiar al portapapeles
          var tempElement = document.createElement("textarea");
          tempElement.value = newSearchText;
          document.body.appendChild(tempElement);
          tempElement.select();
          document.execCommand("copy");
          document.body.removeChild(tempElement);
          //alert('Número copiado al portapapeles: ' + newSearchText);
          document.querySelector(Button_X).click();
        } else {
          alert("No se encontró el número de teléfono.");
        }
      }
    }, 500); // Espera de 1 segundo
  }
}

copiarNumero();
