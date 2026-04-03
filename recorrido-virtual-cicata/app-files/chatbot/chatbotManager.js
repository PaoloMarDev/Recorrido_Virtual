/* Maneja la inyección del HTML e inicializa los controladores del chatbot */

window.chatbotManager = {
    injectHTML: function() {
        document.body.insertAdjacentHTML('beforeend', window.chatbotHTMLTemplate);
    }
};

// Inyectar una vez que termine de cargar la vista
document.addEventListener("DOMContentLoaded", () => {
    if(window.chatbotManager) window.chatbotManager.injectHTML();
    if(window.chatbotSidebar) window.chatbotSidebar.init();
    if(window.chatbotPopUp) window.chatbotPopUp.init();
});
