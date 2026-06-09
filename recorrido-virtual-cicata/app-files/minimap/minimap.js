const minimapContainer = document.getElementById('minimap-container');
const minimapOverlay = document.getElementById('minimap-overlay');

const floorDefaults = {
    "floor-0": "4-estacionamiento-interior",
    "floor-1": "13-lobby-piso-1",
    "floor-2": "30-lobby-piso-2"
};

document.querySelectorAll('.floor-label').forEach(label => {
    label.style.cursor = 'pointer';
    label.addEventListener('click', function (e) {
        e.stopPropagation(); // Evitar que el clic llegue al contenedor del minimapa o al document
        const floor = this.dataset.floor;
        const sceneId = floorDefaults[floor];
        const sceneBtn = document.querySelector(`#sceneList .scene[data-id="${sceneId}"]`);
        if (sceneBtn) {
            sceneBtn.click();
            // Cerrar minimapa tras seleccionar piso
            minimapContainer.classList.remove('is-expanded');
            minimapOverlay.style.display = 'none';
        }
    });
});

minimapContainer.addEventListener('click', function (e) {
    if (minimapContainer.classList.contains('is-expanded')) {
        // Si ya está expandido, queremos poder cerrarlo al hacer clic fuera de elementos interactivos
        // Pero el stopPropagation evita que el document listener lo cierre.
        // Si hacemos clic directamente en el container (y no en el contenido), lo cerramos.
        if (e.target === minimapContainer || e.target.id === 'minimap-content' || e.target.id === 'minimap-image') {
            minimapContainer.classList.remove('is-expanded');
            minimapOverlay.style.display = 'none';
        }
    } else {
        minimapContainer.classList.add('is-expanded');
        minimapOverlay.style.display = 'block';
    }
    e.stopPropagation();
});

minimapOverlay.addEventListener('click', function (e) {
    minimapContainer.classList.remove('is-expanded');
    minimapOverlay.style.display = 'none';
    e.stopPropagation();
});

document.addEventListener('click', function () {
    minimapContainer.classList.remove('is-expanded');
    minimapOverlay.style.display = 'none';
});