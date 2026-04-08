import { stopTouchAndScrollEventPropagation } from "./funcionesGenerales.js";

/* Estrucura del hotspot en data.js

"infoHotspots": [
      {
        "yaw": -0.04339730574711709, ubicación en eje x
        "pitch": 0.16778635584351953, ubicación en eje y
        "title": "Title",
        "text": "Text"
      },
    ]

*/

// ----- Hotspot de Información ----- (INICIO) //
  function createInfoHotspotElement(hotspot) {
  // WRAPPER
  var wrapper = document.createElement('div');
  wrapper.classList.add('hotspot', 'info-hotspot');

  // BOTÓN (círculo)
  var header = document.createElement('div');
  header.classList.add('info-hotspot-header');

  // Create info element.
  var icon = document.createElement('img');
  icon.src = 'img/info.png';
  icon.classList.add('info-hotspot-icon');
  header.appendChild(icon);

  // -------- CONTENIDO -------- //
  var content = document.createElement('div');
  content.classList.add('info-hotspot-content');

  // CLOSE
  var close = document.createElement('div');
  close.classList.add('info-hotspot-close');
  close.innerHTML = '✕';

  // TITLE
  var title = document.createElement('div');
  title.classList.add('info-hotspot-title');
  title.innerHTML = hotspot.title || '';

  // TEXT
  var text = document.createElement('div');
  text.classList.add('info-hotspot-text');
  text.innerHTML = hotspot.text || '';

  // ARMAR
  content.appendChild(close);
  content.appendChild(title);
  content.appendChild(text);

  wrapper.appendChild(header);
  wrapper.appendChild(content);

  // -------- EVENTOS -------- //
  var toggle = function() {
    wrapper.classList.toggle('visible');
  };

  header.addEventListener('click', toggle);
  close.addEventListener('click', toggle);

  // Evitar conflictos con el viewer (Marzipano)
  stopTouchAndScrollEventPropagation(wrapper);

  return wrapper;
  }
    // ----- Hotspot de Información ----- (FIN) //

    
export { createInfoHotspotElement }