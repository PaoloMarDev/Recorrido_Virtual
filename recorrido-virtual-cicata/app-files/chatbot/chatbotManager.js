import chatbotHTMLTemplate from './chatbotHTMLTemplate.js';
import chatbotSidebar from './chatbotSidebar.js';
import chatbotPopUp from './chatbotPopUp.js';

const chatbotManager = {
    injectHTML: function() {
        document.body.insertAdjacentHTML('beforeend', chatbotHTMLTemplate);
    }
};

// Inyectar una vez que termine de cargar la vista
document.addEventListener("DOMContentLoaded", () => {
    chatbotManager.injectHTML();
    chatbotSidebar.init();
    chatbotPopUp.init();
});

export default chatbotManager;
