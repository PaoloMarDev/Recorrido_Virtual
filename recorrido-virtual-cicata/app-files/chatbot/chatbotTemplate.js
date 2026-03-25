/* Renderiza e inyecta la estructura HTML del Chatbot al final del documento */

window.chatbotTemplate = {
    injectHTML: function() {
        const chatbotHTML = `
            <div id="chatbot-container">
                <!-- Botón flotante al lado inferior izquierdo -->
                <div id="chatbot-trigger-container">
                    <div class="help-bubble" id="help-bubble-text">¿Necesitas ayuda?</div>
                    <button id="chatbot-toggle-btn" class="robot-container">
                        <!-- Simple robot face SVG (blanco) -->
                        <svg viewBox="0 0 24 24" width="35" height="35" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="11" width="18" height="10" rx="2"></rect>
                            <circle cx="12" cy="5" r="2"></circle>
                            <path d="M12 7v4"></path>
                            <line x1="8" y1="16" x2="8" y2="16"></line>
                            <line x1="16" y1="16" x2="16" y2="16"></line>
                        </svg>
                    </button>
                </div>

                <!-- Sidebar Principal -->
                <div id="chatbot-sidebar" class="sidebar-hidden">
                    <div class="sidebar-header" id="sidebar-header-title">Menú Principal</div>
                    
                    <div class="menu-options" id="main-menu">
                        <button class="menu-item" onclick="alert('Lista de habitaciones - Próximamente')">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                            Lista de habitaciones
                        </button>
                        <button class="menu-item" onclick="window.chatbotSidebar.openFAQMenu()">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                            Preguntas Frecuentes
                        </button>
                        <button class="menu-item" onclick="window.open('https://www.cicatamorelos.ipn.mx/', '_blank')">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                            Página Oficial
                        </button>
                        <button class="menu-item" onclick="alert('Ubicación - Próximamente')">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            Ubicación
                        </button>
                        <button class="menu-item" onclick="alert('Contactos - Próximamente')">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            Contactos
                        </button>
                    </div>

                    <!-- Div dinámico para las preguntas frecuentes -->
                    <div class="menu-options" id="faq-menu" style="display: none;"></div>

                    <!-- Barra inferior visual (Footer) para que el botón no se pierda al hacer scroll -->
                    <div class="sidebar-footer"></div>
                </div>

                <!-- Modal para Respuesta de FAQ -->
                <div id="faq-modal" class="modal-hidden">
                    <div class="modal-content">
                        <button id="modal-close-btn" onclick="window.chatbotModal.closeFAQModal()">&times;</button>
                        
                        <!-- Header del popup simulando la barra original -->
                        <div class="modal-header">
                            <h2 id="modal-title">Título</h2>
                        </div>
                        
                        <div class="modal-body-container">
                            <p id="modal-body">Cuerpo de la respuesta...</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    }
};

// Inyectar una vez que termine de cargar la vista
document.addEventListener("DOMContentLoaded", () => {
    window.chatbotTemplate.injectHTML();
    
    // Iniciar controladores principales
    if(window.chatbotSidebar) window.chatbotSidebar.init();
    if(window.chatbotModal) window.chatbotModal.init();
});
