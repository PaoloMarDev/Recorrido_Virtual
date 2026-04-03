const chatbotHTMLTemplate = `
    <div id="chatbot-container">
        <!-- Botón flotante al lado inferior izquierdo -->
        <div id="chatbot-trigger-container">
            <div class="help-bubble" id="help-bubble-text">¿Necesitas ayuda?</div>
            <button id="chatbot-toggle-btn" class="robot-container">
                <!-- Simple robot face SVG (blanco) -->
                <svg width="33" height="29" viewBox="0 0 33 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 19.5C3.25 19.5 2.1875 19.0625 1.3125 18.1875C0.4375 17.3125 0 16.25 0 15C0 13.75 0.4375 12.6875 1.3125 11.8125C2.1875 10.9375 3.25 10.5 4.5 10.5V7.5C4.5 6.675 4.79375 5.96875 5.38125 5.38125C5.96875 4.79375 6.675 4.5 7.5 4.5H12C12 3.25 12.4375 2.1875 13.3125 1.3125C14.1875 0.4375 15.25 0 16.5 0C17.75 0 18.8125 0.4375 19.6875 1.3125C20.5625 2.1875 21 3.25 21 4.5H25.5C26.325 4.5 27.0312 4.79375 27.6187 5.38125C28.2062 5.96875 28.5 6.675 28.5 7.5V10.5C29.75 10.5 30.8125 10.9375 31.6875 11.8125C32.5625 12.6875 33 13.75 33 15C33 16.25 32.5625 17.3125 31.6875 18.1875C30.8125 19.0625 29.75 19.5 28.5 19.5V25.5C28.5 26.325 28.2062 27.0312 27.6187 27.6187C27.0312 28.2062 26.325 28.5 25.5 28.5H7.5C6.675 28.5 5.96875 28.2062 5.38125 27.6187C4.79375 27.0312 4.5 26.325 4.5 25.5V19.5ZM12 16.5C12.625 16.5 13.1562 16.2812 13.5938 15.8438C14.0312 15.4062 14.25 14.875 14.25 14.25C14.25 13.625 14.0312 13.0938 13.5938 12.6562C13.1562 12.2188 12.625 12 12 12C11.375 12 10.8438 12.2188 10.4062 12.6562C9.96875 13.0938 9.75 13.625 9.75 14.25C9.75 14.875 9.96875 15.4062 10.4062 15.8438C10.8438 16.2812 11.375 16.5 12 16.5ZM21 16.5C21.625 16.5 22.1562 16.2812 22.5938 15.8438C23.0312 15.4062 23.25 14.875 23.25 14.25C23.25 13.625 23.0312 13.0938 22.5938 12.6562C22.1562 12.2188 21.625 12 21 12C20.375 12 19.8438 12.2188 19.4062 12.6562C18.9688 13.0938 18.75 13.625 18.75 14.25C18.75 14.875 18.9688 15.4062 19.4062 15.8438C19.8438 16.2812 20.375 16.5 21 16.5ZM10.5 22.5H22.5V19.5H10.5V22.5Z" fill="white"/>
                </svg>
            </button>
        </div>

        <!-- Sidebar Principal -->
        <div id="chatbot-sidebar" class="sidebar-hidden">
            <div class="sidebar-header" id="sidebar-header-title">Menú Principal</div>
            
            <div class="menu-options" id="main-menu">
                <button class="menu-item" id="btn-habitaciones">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                    Lista de habitaciones
                </button>
                <button class="menu-item" id="btn-faq">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    Preguntas Frecuentes
                </button>
                <button class="menu-item" id="btn-pagina-oficial">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                    Página Oficial
                </button>
                <button class="menu-item" id="btn-ubicacion">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    Ubicación
                </button>
                <button class="menu-item" id="btn-contactos">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    Contactos
                </button>
            </div>

            <!-- Div dinámico para las preguntas frecuentes -->
            <div class="menu-options" id="faq-menu" style="display: none;"></div>

            <!-- Div dinámico para las habitaciones de Marzipano -->
            <div class="menu-options" id="habitaciones-menu" style="display: none;"></div>

            <!-- Barra inferior visual (Footer) para que el botón no se pierda al hacer scroll -->
            <div class="sidebar-footer"></div>
        </div>

        <!-- Modal para Respuesta de FAQ -->
        <div id="faq-modal" class="modal-hidden">
            <div class="modal-content">
                <button id="modal-close-btn">&times;</button>
                
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

export default chatbotHTMLTemplate;

