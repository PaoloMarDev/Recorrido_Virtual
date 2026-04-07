import chatbotData from './chatbotData.js';

const chatbotPopUp = {
  init() {
    this.modal = document.getElementById("faq-modal");
    this.titleObj = document.getElementById("modal-title");
    this.bodyObj = document.getElementById("modal-body");
    this.triggerContainer = document.getElementById("chatbot-trigger-container");

    // Botón de cerrar
    document.getElementById("modal-close-btn").onclick = () => this.closeFAQModal();

    // Cerrar si se hace click fuera de la ventana blanca
    this.modal.onclick = (e) => {
      if (e.target === this.modal) {
        this.closeFAQModal();
      }
    };
  },

  openFAQModal(index) {
    const faq = chatbotData.faqData[index];
    this.showContent(faq.title, faq.answer);
  },

  showContent(title, answer) {
    this.titleObj.innerText = title;
    this.bodyObj.innerHTML = answer.replace(/\\n/g, '<br><br>');

    this.modal.classList.remove("modal-hidden");
    this.modal.classList.add("modal-visible");
    this.triggerContainer.classList.add("modal-active-blur");
  },

  closeFAQModal() {
    this.modal.classList.remove("modal-visible");
    this.modal.classList.add("modal-hidden");
    this.triggerContainer.classList.remove("modal-active-blur");
  }
};

export default chatbotPopUp;
