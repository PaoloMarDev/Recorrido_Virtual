/* Controlador del PopUp Modal de Preguntas Frecuentes FAQ */

window.chatbotModal = {
    init: function() {
        this.modal = document.getElementById("faq-modal");
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
        if (!this.modal || !window.chatbotData) return;
        
        const faq = window.chatbotData.faqData[index];
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
    },

    closeFAQModal: function() {
        if (!this.modal) return;
        
        this.modal.classList.add("modal-hidden");
        this.modal.classList.remove("modal-visible");
    }
};
