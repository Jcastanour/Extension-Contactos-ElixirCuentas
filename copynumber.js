var Button_X =
  "#app > div._aiwn._aiwm.app-wrapper-web.font-fix.os-win.x1px0edx.xoeyzqq > div > div.x78zum5.xdt5ytf.x5yr21d > div > div._aig-._as6h.x9f619.x1n2onr6.x5yr21d.x6ikm8r.x10wlt62.x17dzmu4.x1i1dayz.x2ipvbc.xjdofhw.xpilrb4.x1t7ytsu.x1vb5itz.x1c4vz4f.x2lah0s.x1oy9qf3.xwfak60.x5hsz1j.x17dq4o0.x10e4vud > span > div > span > div > header > div > div:nth-child(1) > div > span > div > div > div.html-div.xdj266r.x14z9mp.xat24cr.x1lziwak.xexx8yu.xyri2b.x18d9i69.x1c1uobl.x78zum5.xl56j7k.x1ejq31n.x18oe1m7.x1sy0etr.xstzfhl.x1so62im.x1syfmzz.x1ja2u2z.x1s928wv.x1j6awrg.x4eaejv.x1wsn0xg.x1r0yslu.x2q1x1w.xapdjt.xr6f91l.x5rv0tg.x1akc3lz.xikp0eg.x1xl5mkn.x1mfml39.x1l5mzlr.xgmdoj8.x1f1wgk5.x1x3ic1u.xjbqb8w.xuwfzo9.x1i0h74e.xy0j11r.xg268so.x1b4bgnk.x1wb366y.xgqtt45.x9f619.xt8t1vi.x1xc408v.x129tdwq.x15urzxu.x1vqgdyp.x100vrsf > div:nth-child(1) > span";

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

        "/html/body/div[1]/div/div/div[1]/div/div[3]/div/div[5]/span/div/span/div/div/section/div[1]/div[2]/div[2]/span/div",
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
          "#app > div._aiwn._aiwm.app-wrapper-web.font-fix.os-win.x1px0edx.xoeyzqq > div > div.x78zum5.xdt5ytf.x5yr21d > div > div._aig-._as6h.x9f619.x1n2onr6.x5yr21d.x6ikm8r.x10wlt62.x17dzmu4.x1i1dayz.x2ipvbc.xjdofhw.xpilrb4.x1t7ytsu.x1vb5itz.x1c4vz4f.x2lah0s.x1oy9qf3.xwfak60.x5hsz1j.x17dq4o0.x10e4vud > span > div > span > div > div > section > div:nth-child(13) > div.x1c1uobl._ajxt > div > div > span > span"
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
