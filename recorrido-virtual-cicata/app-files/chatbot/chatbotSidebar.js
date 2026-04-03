/* Controlador visual de la Barra Lateral (Sidebar) y el cambio de Layout del Menú */

window.chatbotSidebar = {
    isSidebarOpen: false,

    init: function() {
        this.sidebar = document.getElementById("chatbot-sidebar");
        this.toggleBtn = document.getElementById("chatbot-toggle-btn");
        this.mainMenu = document.getElementById("main-menu");
        this.faqMenu = document.getElementById("faq-menu");
        this.habitacionesMenu = document.getElementById("habitaciones-menu"); /* <-- Menu interconectado con Marzipano */
        this.headerTitle = document.getElementById("sidebar-header-title");
        this.helpBubble = document.getElementById("help-bubble-text");

        this.bindEvents();
    },

    bindEvents: function() {
        if (!this.toggleBtn) return;
        
        this.toggleBtn.addEventListener("click", () => {
            this.isSidebarOpen = !this.isSidebarOpen;
            
            if (this.isSidebarOpen) {
                this.sidebar.classList.remove("sidebar-hidden");
                if (this.helpBubble) this.helpBubble.style.display = 'none'; 
                this.showMainMenu(); // Siempre por defecto abre el principal
            } else {
                this.sidebar.classList.add("sidebar-hidden");
                if (this.helpBubble) this.helpBubble.style.display = 'block'; 
            }
        });
    },

    showMainMenu: function() {
        if (this.mainMenu) this.mainMenu.style.display = "flex";
        if (this.faqMenu) this.faqMenu.style.display = "none";
        if (this.habitacionesMenu) this.habitacionesMenu.style.display = "none";
        
        if (this.headerTitle) {
            this.headerTitle.innerHTML = "Menú Principal"; // Texto base
        }
    },

    openFAQMenu: function() {
        if (this.mainMenu) this.mainMenu.style.display = "none";
        if (this.habitacionesMenu) this.habitacionesMenu.style.display = "none";
        if (this.faqMenu) this.faqMenu.style.display = "flex";
        
        if (this.headerTitle) {
            this.headerTitle.innerHTML = `<span class="back-btn" onclick="window.chatbotSidebar.showMainMenu()">&#10094;</span> Preguntas Frecuentes`;
        }

        // Renderiza los botones a partir de la data almacenada
        if (this.faqMenu && this.faqMenu.children.length === 0 && window.chatbotData) {
            window.chatbotData.faqData.forEach((faq, index) => {
                const btn = document.createElement("button");
                btn.className = "faq-item menu-item";
                btn.innerHTML = `
                    <div class="faq-icon-circle">?</div>
                    ${faq.title}
                `;
                btn.onclick = () => {
                    if (window.chatbotModal) window.chatbotModal.openFAQModal(index);
                };
                this.faqMenu.appendChild(btn);
            });
        }
    },

    openHabitacionesMenu: function() {
        if (this.mainMenu) this.mainMenu.style.display = "none";
        if (this.faqMenu) this.faqMenu.style.display = "none";
        if (this.habitacionesMenu) this.habitacionesMenu.style.display = "flex";
        
        if (this.headerTitle) {
            this.headerTitle.innerHTML = `<span class="back-btn" onclick="window.chatbotSidebar.showMainMenu()">&#10094;</span> Habitaciones`;
        }

        // Renderiza botones autómaticos leyendo todas las escenas de Marzipano globales (APP_DATA) instaladas
        if (this.habitacionesMenu && this.habitacionesMenu.children.length === 0 && window.APP_DATA && window.APP_DATA.scenes) {
            window.APP_DATA.scenes.forEach(scene => {
                const btn = document.createElement("button");
                btn.className = "menu-item";
                btn.innerHTML = `
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" stroke-width="2" style="flex-shrink:0;"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
                    ${scene.name}
                `;
                btn.onclick = () => {
                    const nativo = document.querySelector('#sceneList .scene[data-id="' + scene.id + '"]');
                    if (nativo) nativo.click();

                    // Solo cerrar en móvil (igual que Marzipano original)
                    if (document.body.classList.contains('mobile')) {
                        document.getElementById("chatbot-toggle-btn").click();
                    }
                };
                this.habitacionesMenu.appendChild(btn);
            });
        }
    }
};
