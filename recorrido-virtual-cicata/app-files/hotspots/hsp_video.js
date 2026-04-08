import { stopTouchAndScrollEventPropagation } from "./funcionesGenerales.js";

/* Estrucura del hotspot en data.js

"videoHotspots": [
        {
          "yaw": -2.2183552531072497,       ubicación en eje x 
          "pitch": -0.23716614446166417,    ubicación en eje y
          "title": "Title",
          "text": "Text"
          "video": "(poner el video subido en alguna carpeta del proyecto jijijijijijij)"
        }
    ]
*/

// -------- Video Hotspot START -------- //
function createVideoHotspotElement(hotspot) {

  // WRAPPER
  var wrapper = document.createElement('div');
  wrapper.classList.add('hotspot', 'video-hotspot');

  // BOTÓN (círculo)
  var header = document.createElement('div');
  header.classList.add('video-hotspot-header');
  
  // Create image element.
  var icon = document.createElement('img');
  icon.src = 'img/videoIcon.png';
  icon.classList.add('video-hotspot-icon');
  header.appendChild(icon);

  // -------- CONTENIDO -------- //
  var content = document.createElement('div');
  content.classList.add('video-hotspot-content');

  // CLOSE
  var close = document.createElement('div');
  close.classList.add('video-hotspot-close');
  close.innerHTML = '✕';

  // TITLE
  var title = document.createElement('div');
  title.classList.add('video-hotspot-title');
  title.innerHTML = hotspot.title || '';

  // TEXT
  var text = document.createElement('div');
  text.classList.add('video-hotspot-text');
  text.innerHTML = hotspot.text || '';

  // VIDEO CONTAINER
  var videoContainer = document.createElement('div');
  videoContainer.classList.add('video-container');

  var video = document.createElement('video');
  video.controls = true;
  video.preload = "metadata";
  video.playsInline = true;

  var source = document.createElement('source');
  source.src = hotspot.video;
  source.type = "video/mp4";

  video.appendChild(source);
  videoContainer.appendChild(video);

  // ARMAR
  content.appendChild(close);
  content.appendChild(title);
  content.appendChild(text);
  content.appendChild(videoContainer);

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
// -------- Video Hotspot END -------- //

export { createVideoHotspotElement }