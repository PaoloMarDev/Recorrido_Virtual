import chatbotData from './chatbotData.js';

const chatbotPopUp = {
    init: function() {
        this.modal = document.getElementById("faq-modal");
        
        // Asignar evento de cierre al botón X si existe (se eliminó el onclick en el HTMLTemplate)
        const closeBtn = document.getElementById("modal-close-btn");
        if (closeBtn) {
            closeBtn.addEventListener("click", () => this.closeFAQModal());
        }

        this.bindEvents();
    },

    bindEvents: function() {
        if (!this.modal) return;
        
        // Cierra al hacer clic fuera del contenido del modal
        this.modal.addEventListener("click", (e) => {
            if (e.target === this.modal) {
                this.closeFAQModal();
            }
        });
    },

    openFAQModal: function(index) {
        if (!this.modal || !chatbotData) return;
        
        const faq = chatbotData.faqData[index];
        if (!faq) return;

        this.showContent(faq.title, faq.answer);
    },

    showContent: function(title, answer) {
        if (!this.modal) return;

        const titleObj = document.getElementById("modal-title");
        const bodyObj = document.getElementById("modal-body");

        if (titleObj) titleObj.innerText = title;
        // Permite saltos de línea legibles utilizando `<br>`
        if (bodyObj) bodyObj.innerHTML = answer.replace(/\\n/g, '<br><br>');
        
        // Transiciona la opacidad y escala para hacer el pop-up suave
        this.modal.classList.remove("modal-hidden");
        this.modal.classList.add("modal-visible");

        // Aplica el mismo blur al botón robot (fade-in)
        const triggerContainer = document.getElementById("chatbot-trigger-container");
        if (triggerContainer) triggerContainer.classList.add("modal-active-blur");
    },

    closeFAQModal: function() {
        if (!this.modal) return;
        
        this.modal.classList.add("modal-hidden");
        this.modal.classList.remove("modal-visible");

        // Quita el blur del botón robot (fade-out via CSS transition)
        const triggerContainer = document.getElementById("chatbot-trigger-container");
        if (triggerContainer) triggerContainer.classList.remove("modal-active-blur");
    }
};

export default chatbotPopUp;
