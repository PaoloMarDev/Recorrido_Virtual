import { stopTouchAndScrollEventPropagation } from "./funcionesGenerales.js";

// -------- Video Hotspot START--------- //
function createVideoHotspotElement(hotspot) {
  
  // Create wrapper element to hold icon and tooltip.
  var wrapper = document.createElement('div');
  wrapper.classList.add('hotspot');
  wrapper.classList.add('info-hotspot');
  
  // Create hotspot/tooltip header.
  var header = document.createElement('div');
  header.classList.add('info-hotspot-header');
  
  // Create image element.
  var iconWrapper = document.createElement('div');
  iconWrapper.classList.add('info-hotspot-icon-wrapper');
  var icon = document.createElement('img');
  icon.src = 'img/video.png';
  icon.classList.add('info-hotspot-icon');
  iconWrapper.appendChild(icon);
  
  // Create title element.
  var titleWrapper = document.createElement('div');
  titleWrapper.classList.add('info-hotspot-title-wrapper');
  var title = document.createElement('div');
  title.classList.add('info-hotspot-title');
  title.innerHTML = hotspot.title;
  titleWrapper.appendChild(title);
  
  // Create close element.
  var closeWrapper = document.createElement('div');
  closeWrapper.classList.add('info-hotspot-close-wrapper');
  var closeIcon = document.createElement('img');
  closeIcon.src = 'img/close.png';
  closeIcon.classList.add('info-hotspot-close-icon');
  closeWrapper.appendChild(closeIcon);
  
  // Construct header element.
  header.appendChild(iconWrapper);
  header.appendChild(titleWrapper);
  header.appendChild(closeWrapper);
  
  // Create text element.
  var video = document.createElement('video');
  video.classList.add('info-hotspot-text');
  
  video.controls = true;
  video.preload = "metadata";
  video.playsInline = true;
  
  var source = document.createElement('source');
  console.log(hotspot.video)
  source.src = hotspot.video;
  source.type = "video/mp4";
  
  video.appendChild(source);
  
  // Place header and text into wrapper element.
  wrapper.appendChild(header);
  wrapper.appendChild(video);
  
  // Create a modal for the hotspot content to appear on mobile mode.
  var modal = document.createElement('div');
  modal.innerHTML = wrapper.innerHTML;
  modal.classList.add('info-hotspot-modal');
  document.body.appendChild(modal);
  
  var toggle = function() {
    wrapper.classList.toggle('visible');
    modal.classList.toggle('visible');
  };
  
  
  // Show content when hotspot is clicked.
  wrapper.querySelector('.info-hotspot-header').addEventListener('click', toggle);
  
  // Hide content when close icon is clicked.
  modal.querySelector('.info-hotspot-close-wrapper').addEventListener('click', toggle);
  
  // Prevent touch and scroll events from reaching the parent element.
  // This prevents the view control logic from interfering with the hotspot.
  stopTouchAndScrollEventPropagation(wrapper);
  
  return wrapper;
}
// -------- Video Hotspot END --------- //