/* Controlador visual de la Barra Lateral (Sidebar) y el cambio de Layout del Menú */

window.chatbotSidebar = {
    isSidebarOpen: false,

    init: function() {
        this.sidebar = document.getElementById("chatbot-sidebar");
        this.toggleBtn = document.getElementById("chatbot-toggle-btn");
        this.mainMenu = document.getElementById("main-menu");
        this.faqMenu = document.getElementById("faq-menu");
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
        
        if (this.headerTitle) {
            this.headerTitle.innerHTML = "Menú Principal"; // Texto base
        }
    },

    openFAQMenu: function() {
        if (this.mainMenu) this.mainMenu.style.display = "none";
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
    }
};
