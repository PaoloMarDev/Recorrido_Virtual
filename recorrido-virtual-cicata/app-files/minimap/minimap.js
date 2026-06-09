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

        // Buscar el botón nativo de la escena
        const sceneBtn = document.querySelector(`#sceneList .scene[data-id="${sceneId}"]`);
        if (sceneBtn) {
            // Detener propagación del clic simulado para evitar que el document listener lo detecte
            sceneBtn.dispatchEvent(new MouseEvent('click', {
                bubbles: false,
                cancelable: true
            }));

            // Solo en móviles se cierra al seleccionar piso
            if (window.innerWidth <= 600) {
                minimapContainer.classList.remove('is-expanded');
                minimapOverlay.style.display = 'none';
            }
        }
    });
});

minimapContainer.addEventListener('click', function (e) {
    // Solo en móviles: si el chatbot está abierto, cerrarlo y NO abrir el minimapa
    if (window.innerWidth <= 600) {
        const chatbotSidebarElem = document.getElementById('chatbot-sidebar');
        if (chatbotSidebarElem && !chatbotSidebarElem.classList.contains('sidebar-hidden')) {
            const closeBtn = document.getElementById('sidebar-close-btn');
            if (closeBtn) {
                closeBtn.click();
                return; // Detener aquí para que el minimapa no se abra en el mismo clic
            }
        }
    }

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

document.addEventListener('click', function (e) {
    // En pantallas grandes, no cerrar el minimapa si se hace clic dentro del chatbot
    if (window.innerWidth > 600) {
        const chatbotSidebarElem = document.getElementById('chatbot-sidebar');
        const chatbotToggleBtn = document.getElementById('chatbot-toggle-btn');
        if ((chatbotSidebarElem && chatbotSidebarElem.contains(e.target)) ||
            (chatbotToggleBtn && chatbotToggleBtn.contains(e.target))) {
            return;
        }
    }
    minimapContainer.classList.remove('is-expanded');
    minimapOverlay.style.display = 'none';
});