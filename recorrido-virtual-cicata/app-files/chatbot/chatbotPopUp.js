import chatbotData from './chatbotData.js';

const chatbotPopUp = {
    init() {
        this.modal = document.getElementById("faq-modal");
        this.titleObj = document.getElementById("modal-title");
        this.bodyObj = document.getElementById("modal-body");
        this.triggerContainer = document.getElementById("chatbot-trigger-container");

        document.getElementById("modal-close-btn")?.addEventListener("click", () => this.closeFAQModal());
        this.modal?.addEventListener("click", (e) => e.target === this.modal && this.closeFAQModal());
    },

    openFAQModal(index) {
        const faq = chatbotData?.faqData[index];
        if (faq) this.showContent(faq.title, faq.answer);
    },

    showContent(title, answer) {
        if (!this.modal) return;

        if (this.titleObj) this.titleObj.innerText = title;
        if (this.bodyObj) this.bodyObj.innerHTML = answer.replace(/\\n/g, '<br><br>');
        
        this.modal.classList.replace("modal-hidden", "modal-visible");
        this.triggerContainer?.classList.add("modal-active-blur");
    },

    closeFAQModal() {
        this.modal?.classList.replace("modal-visible", "modal-hidden");
        this.triggerContainer?.classList.remove("modal-active-blur");
    }
};

export default chatbotPopUp;
