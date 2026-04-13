import chatbotData from './chatbotData.js';
import chatbotPopUp from './chatbotPopUp.js';

const chatbotSidebar = {
  isSidebarOpen: false,

  init() {
    this.sidebar = document.getElementById("chatbot-sidebar");
    this.toggleBtn = document.getElementById("chatbot-toggle-btn");
    this.helpBubble = document.getElementById("help-bubble-text");
    this.chatMessages = document.getElementById("chat-messages");
    this.closeBtn = document.getElementById("sidebar-close-btn");

    if (this.toggleBtn) {
      this.toggleBtn.onclick = () => {
        this.isSidebarOpen = !this.isSidebarOpen;
        if (this.isSidebarOpen) {
          this.sidebar.classList.remove("sidebar-hidden");
          if (this.helpBubble) this.helpBubble.style.display = 'none';
          this.startWelcomeFlow();
        } 
        else {
          this.sidebar.classList.add("sidebar-hidden");
          if (this.helpBubble) this.helpBubble.style.display = 'block';
        }
      };
    }

    if (this.closeBtn) {
        this.closeBtn.onclick = () => {
            this.isSidebarOpen = false;
            this.sidebar.classList.add("sidebar-hidden");
            if (this.helpBubble) this.helpBubble.style.display = 'block';
        };
    }
  },

  startWelcomeFlow() {
    this.chatMessages.innerHTML = ""; // Limpiar chat previo
    
    // Simular que el bot está escribiendo
    this.showTypingIndicator();

    setTimeout(() => {
        this.hideTypingIndicator();
        this.addBotMessage("¡Hola! Soy CICATA bot, tu asesor virtual.");
        
        this.showTypingIndicator();
        setTimeout(() => {
            this.hideTypingIndicator();
            this.addBotMessage("¿En qué puedo ayudarte hoy? Selecciona una de las siguientes opciones:");
            this.addBotOptions([
                { text: "🏢 Lista de habitaciones", action: () => this.handleHabitaciones() },
                { text: "❓ Preguntas Frecuentes", action: () => this.handleFAQ() },
                { text: "🌐 Página Oficial", action: () => {
                    this.addBotMessage(`Puedes visitar nuestra página oficial aquí:\nhttps://www.cicatamorelos.ipn.mx/`);
                    this.addReturnOption();
                }},
                { text: "📍 Ubicación", action: () => this.handlePopUp("ubicacion") },
                { text: "📞 Contactos", action: () => this.handlePopUp("contactos") }
            ]);
        }, 1200);
    }, 800);
  },

  showTypingIndicator() {
      const indicator = document.createElement("div");
      indicator.className = "bot-message typing-indicator";
      indicator.id = "typing-indicator";
      indicator.innerHTML = `<span></span><span></span><span></span>`;
      this.chatMessages.appendChild(indicator);
      this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
  },

  hideTypingIndicator() {
      const indicator = document.getElementById("typing-indicator");
      if (indicator) indicator.remove();
  },

  addBotMessage(text) {
      const msg = document.createElement("div");
      msg.className = "bot-message";
      msg.innerText = text;
      this.chatMessages.appendChild(msg);
      this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
  },

  addUserMessage(text) {
      const msg = document.createElement("div");
      msg.className = "user-message";
      msg.innerText = text;
      this.chatMessages.appendChild(msg);
      this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
  },

  addBotOptions(options, showUserMsg = true) {
      const container = document.createElement("div");
      container.className = "bot-message options-container";
      
      options.forEach(opt => {
          const btn = document.createElement("button");
          btn.className = "option-button";
          btn.innerText = opt.text;
          btn.onclick = () => {
              if (showUserMsg) this.addUserMessage(opt.text);
              opt.action();
          };
          container.appendChild(btn);
      });

      this.chatMessages.appendChild(container);
      this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
  },

  handlePopUp(key) {
      const data = chatbotData[key];
      if (data) {
          this.showTypingIndicator();
          setTimeout(() => {
              this.hideTypingIndicator();
              this.addBotMessage(`${data.title}:\n${data.answer}`);
              this.addReturnOption();
          }, 1500);
      }
  },

  handleHabitaciones() {
    this.showTypingIndicator();
    setTimeout(() => {
        this.hideTypingIndicator();
        this.addBotMessage("Estas son las áreas disponibles en el recorrido. Haz clic en una para teletransportarte:");
        
        const scenes = (window.APP_DATA && window.APP_DATA.scenes) ? window.APP_DATA.scenes : [];
        const options = scenes.map(scene => ({
            text: `🏢 ${scene.name}`,
            action: () => {
                const nativo = document.querySelector('#sceneList .scene[data-id="' + scene.id + '"]');
                if (nativo) nativo.click();
            }
        }));
        
        this.addBotOptions(options);
        this.addReturnOption();
    }, 1200);
  },

  handleFAQ() {
    this.showTypingIndicator();
    setTimeout(() => {
        this.hideTypingIndicator();
        this.addBotMessage("Selecciona una pregunta para ver la respuesta:");
        
        const options = chatbotData.faqData.map((faq, index) => ({
            text: `❓ ${faq.title}`,
            action: () => {
                this.showTypingIndicator();
                setTimeout(() => {
                    this.hideTypingIndicator();
                    this.addBotMessage(`${faq.title}:\n${faq.answer}`);
                    this.addReturnOption();
                }, 1000);
            }
        }));
        
        this.addBotOptions(options);
        this.addReturnOption();
    }, 1200);
  },

  addReturnOption() {
      setTimeout(() => {
          this.addBotOptions([
              { text: "⬅️ Volver al menú principal", action: () => this.startWelcomeFlow() }
          ], false);
      }, 1000);
  }
};

export default chatbotSidebar;
