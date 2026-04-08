import chatbotData from './chatbotData.js';
import chatbotPopUp from './chatbotPopUp.js';

const chatbotSidebar = {
  isSidebarOpen: false,

  init() {
    this.sidebar = document.getElementById("chatbot-sidebar");
    this.toggleBtn = document.getElementById("chatbot-toggle-btn");
    this.mainMenu = document.getElementById("main-menu");
    this.faqMenu = document.getElementById("faq-menu");
    this.habitacionesMenu = document.getElementById("habitaciones-menu");
    this.headerTitle = document.getElementById("sidebar-header-title");
    this.helpBubble = document.getElementById("help-bubble-text");

    if (this.toggleBtn) {
      this.toggleBtn.onclick = () => {
        this.isSidebarOpen = !this.isSidebarOpen;
        // Abrir sidebar
        if (this.isSidebarOpen) {
          this.sidebar.classList.remove("sidebar-hidden");
          if (this.helpBubble) this.helpBubble.style.display = 'none';
          this.showMainMenu();
        } 
        // Cerrar sidebar
        else {
          this.sidebar.classList.add("sidebar-hidden");
          if (this.helpBubble) this.helpBubble.style.display = 'block';
        }
      };
    }

    const btnHabitaciones = document.getElementById("btn-habitaciones");
    if (btnHabitaciones) btnHabitaciones.onclick = () => this.openHabitacionesMenu();

    const btnFaq = document.getElementById("btn-faq");
    if (btnFaq) btnFaq.onclick = () => this.openFAQMenu();

    const btnPaginaOficial = document.getElementById("btn-pagina-oficial");
    if (btnPaginaOficial) btnPaginaOficial.onclick = () => window.open('https://www.cicatamorelos.ipn.mx/', '_blank');

    const btnUbicacion = document.getElementById("btn-ubicacion");
    if (btnUbicacion) btnUbicacion.onclick = () => chatbotPopUp.showContent(chatbotData.ubicacion.title, chatbotData.ubicacion.answer);

    const btnContactos = document.getElementById("btn-contactos");
    if (btnContactos) btnContactos.onclick = () => chatbotPopUp.showContent(chatbotData.contactos.title, chatbotData.contactos.answer);
  },

  showMainMenu() {
    this.mainMenu.style.display = "flex";
    this.faqMenu.style.display = "none";
    this.habitacionesMenu.style.display = "none";
    this.headerTitle.innerHTML = "Menú Principal";
  },

  openHabitacionesMenu() {
    this.mainMenu.style.display = "none";
    this.faqMenu.style.display = "none";
    this.habitacionesMenu.style.display = "flex";

    this.headerTitle.innerHTML = "";
    const backBtn = document.createElement("span");
    backBtn.className = "back-btn";
    backBtn.innerHTML = "&#10094;";
    backBtn.onclick = () => this.showMainMenu();
    this.headerTitle.appendChild(backBtn);
    this.headerTitle.append(" Habitaciones");

    if (this.habitacionesMenu.children.length === 0 && window.APP_DATA && window.APP_DATA.scenes) {
      window.APP_DATA.scenes.forEach(scene => {
        const btn = document.createElement("button");
        btn.className = "menu-item";
        btn.innerHTML = `
          <svg viewBox="0 0 16 16" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0;">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.37892 10.2236L8 16L12.6211 10.2236C13.5137 9.10788 14 7.72154 14 6.29266V6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6V6.29266C2 7.72154 2.4863 9.10788 3.37892 10.2236ZM8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z" fill="white"></path>
          </svg>
          ${scene.name}
        `;
        btn.onclick = () => {
          const nativo = document.querySelector('#sceneList .scene[data-id="' + scene.id + '"]');
          if (nativo) nativo.click();
          if (document.body.classList.contains('mobile')) this.toggleBtn.click();
        };
        this.habitacionesMenu.appendChild(btn);
      });
    }
  },

  openFAQMenu() {
    this.mainMenu.style.display = "none";
    this.habitacionesMenu.style.display = "none";
    this.faqMenu.style.display = "flex";

    this.headerTitle.innerHTML = "";
    const backBtn = document.createElement("span");
    backBtn.className = "back-btn";
    backBtn.innerHTML = "&#10094;";
    backBtn.onclick = () => this.showMainMenu();
    this.headerTitle.appendChild(backBtn);
    this.headerTitle.append(" Preguntas Frecuentes");

    if (this.faqMenu.children.length === 0 && chatbotData) {
      chatbotData.faqData.forEach((faq, index) => {
        const btn = document.createElement("button");
        btn.className = "faq-item menu-item";
        btn.innerHTML = `
          <svg viewBox="0 0 16 16" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0;">
            <path d="M5.5 5.5C5.5 4.11929 6.61929 3 8 3C9.38071 3 10.5 4.11929 10.5 5.5C10.5 6.88071 9.38071 8 8 8H7V11H8C11.0376 11 13.5 8.53757 13.5 5.5C13.5 2.46243 11.0376 0 8 0C4.96243 0 2.5 2.46243 2.5 5.5H5.5Z" fill="white"></path>
            <path d="M10 13H7V16H10V13Z" fill="white"></path>
          </svg>
          ${faq.title}
        `;
        btn.onclick = () => chatbotPopUp.openFAQModal(index);
        this.faqMenu.appendChild(btn);
      });
    }
  },
};

export default chatbotSidebar;
