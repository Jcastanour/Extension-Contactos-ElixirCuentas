# Extensión: Copiar número de WhatsApp

Una extensión para **Google Chrome (Manifest V3)** que permite copiar de forma rápida el **número o nombre de contacto** desde **WhatsApp Web**, abrirlo en **Google Contacts** o simplemente guardarlo en el portapapeles.  
Además, puedes activar estas funciones mediante **atajos de teclado personalizados**.

---

## Características principales

- Copia automáticamente el **número de teléfono** visible en el chat de WhatsApp Web.
- Copia el **nombre del contacto** cuando no hay número disponible.
- Abre el contacto directamente en [Google Contacts](https://contacts.google.com/).
- Incluye **atajos de teclado configurables** (por defecto):
  - `Ctrl + Espacio` → Abre el popup de la extensión.
  - `Ctrl + Shift + 1` → Copia el número automáticamente sin abrir el popup.
  - `Ctrl + Shift + X` → Ejecuta el script `content.js` (abrir panel de contactos).

---

## Estructura del proyecto

```
sCopiar-numero-WhatsApp
├── background.js       # Service Worker: escucha los comandos y ejecuta los scripts
├── content.js          # Abre Google Contacts con el número/nombre del chat
├── copynumber.js       # Copia automáticamente el número del contacto
├── copyname.js         # Copia el nombre del contacto
├── popup.html          # Interfaz visual con botones para ejecutar las funciones
├── popup.js            # Lógica de los botones del popup
├── logo.png            # Icono de la extensión
└── manifest.json       # Configuración del Manifest V3
```

---

## Atajos de teclado (commands)

Definidos en el `manifest.json`:

```json
"commands": {
  "_execute_action": {
    "suggested_key": { "default": "Ctrl+Space" }
  },
  "copiar-numero-auto": {
    "suggested_key": { "default": "Ctrl+Shift+1" },
    "description": "Copiar número automáticamente en la pestaña activa"
  },
  "abrir-contactos": {
    "suggested_key": { "default": "Ctrl+Shift+X" },
    "description": "Ejecutar content.js para abrir Google Contacts"
  }
}
```

> Si algún atajo aparece como _“No está configurado”_, se debe asignar manualmente desde  
> `chrome://extensions/shortcuts`.

---

## Instalación manual

1. Descarga o clona este repositorio:
   ```bash
   git clone https://github.com/tuusuario/copiar-numero-whatsapp.git
   ```
2. Abre Chrome y entra en `chrome://extensions/`.
3. Activa el **Modo desarrollador** (esquina superior derecha).
4. Haz clic en **“Cargar sin empaquetar”** y selecciona la carpeta del proyecto.
5. Listo ✅
   - Verás el icono de la extensión en la barra.
   - Puedes probarla directamente en [web.whatsapp.com](https://web.whatsapp.com).

---

## Cómo usarla

- Abre un chat en **WhatsApp Web**.
- Usa alguno de los métodos:
  - **Desde el popup:** haz clic en “Copiar número”, “Copiar nombre” o “Abrir contactos”.
  - **Desde el teclado:**
    - `Ctrl + Shift + 1` → Copia automáticamente el número.
    - `Ctrl + Shift + X` → Abre el contacto en Google Contacts.
    - `Ctrl + Espacio` → Abre el popup manual.

---

## Notas técnicas

- La extensión usa `chrome.scripting.executeScript` para inyectar los scripts en WhatsApp Web.
- Se ejecuta bajo Manifest V3 con un **Service Worker** (`background.js`).
- No recolecta ni transmite datos personales. Todo se procesa localmente en el navegador.
- Compatible con **Windows, macOS y Linux**.

---

## Autor

**Juan Pablo Castaño Uribe**  
_Extensión creada como utilidad personal para automatizar la gestión de contactos desde WhatsApp Web._

---

## Licencia

Este proyecto se distribuye bajo la licencia **MIT**.  
Puedes usarlo, modificarlo y compartirlo libremente siempre que se mantenga la atribución al autor original.
