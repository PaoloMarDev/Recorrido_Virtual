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
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" stroke-width="2" style="flex-shrink:0;"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
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
        btn.innerHTML = `<div class="faq-icon-circle">?</div> ${faq.title}`;
        btn.onclick = () => chatbotPopUp.openFAQModal(index);
        this.faqMenu.appendChild(btn);
      });
    }
  },
};

export default chatbotSidebar;
