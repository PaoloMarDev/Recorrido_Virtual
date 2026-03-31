import { stopTouchAndScrollEventPropagation } from "./funcionesGenerales.js";

/* Estrucura del hotspot en data.js

"imageHotspots": [
        {
          "yaw": -2.2183552531072497,       ubicación en eje x 
          "pitch": -0.23716614446166417,    ubicación en eje y
          "title": "Title",
          "text": "Text"
          "image": "(poner la imagen subido en alguna carpeta del proyecto jijijijijijij)"
        }
    ]
*/

// -------- IMAGE Hotspot START -------- //
function createImageHotspotElement(hotspot) {

  // WRAPPER
  var wrapper = document.createElement('div');
  wrapper.classList.add('hotspot', 'image-hotspot');

  // BOTÓN (círculo)
  var header = document.createElement('div');
  header.classList.add('image-hotspot-header');

  // Create image element.
  var icon = document.createElement('img');
  icon.src = 'img/imageIcon.png';
  icon.classList.add('image-hotspot-icon');
  header.appendChild(icon);

  // -------- CONTENIDO -------- //
  var content = document.createElement('div');
  content.classList.add('image-hotspot-content');

  // CLOSE
  var close = document.createElement('div');
  close.classList.add('image-hotspot-close');
  close.innerHTML = '✕';

  // TITLE
  var title = document.createElement('div');
  title.classList.add('image-hotspot-title');
  title.innerHTML = hotspot.title || '';

  // TEXT
  var text = document.createElement('div');
  text.classList.add('image-hotspot-text');
  text.innerHTML = hotspot.text || '';

  // image CONTAINER
  var imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');

  var image = document.createElement('img');
  image.src = hotspot.image;
  image.alt = "Imagen de CICATA";

  imageContainer.appendChild(image);

  // ARMAR
  content.appendChild(close);
  content.appendChild(title);
  content.appendChild(text);
  content.appendChild(imageContainer);

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
// -------- IMAGE Hotspot END -------- //

export { createImageHotspotElement }