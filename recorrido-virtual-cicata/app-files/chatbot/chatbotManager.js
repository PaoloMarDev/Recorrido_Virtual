import chatbotHTMLTemplate from './chatbotHTMLTemplate.js';
import chatbotSidebar from './chatbotSidebar.js';
import chatbotPopUp from './chatbotPopUp.js';

const chatbotManager = {
    injectHTML: function() {
        document.body.insertAdjacentHTML('beforeend', chatbotHTMLTemplate);
    },
    init: function() {
        this.injectHTML();
        chatbotSidebar.init();
        chatbotPopUp.init();
    }
};

document.addEventListener("DOMContentLoaded", () => {
    chatbotManager.init();
});

export default chatbotManager;
