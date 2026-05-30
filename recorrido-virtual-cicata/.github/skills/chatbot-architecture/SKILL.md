---
name: chatbot-architecture
description: "Guía especializada para expandir y modificar el Chatbot de CICATA. Proporciona una visión general de la arquitectura del proyecto (Marzipano, escenas y datos) para asegurar que las nuevas funcionalidades del chatbot se integren sin obstáculos con el recorrido virtual."
argument-hint: "especifica qué funcionalidad o respuesta quieres añadir al chatbot (ej. nueva sección de ayuda, integración con escenas)"
---

# Arquitectura del Chatbot CICATA

Esta skill está diseñada para guiar la creación de nuevas funciones en el Chatbot, manteniendo siempre el contexto de la arquitectura global del recorrido virtual para evitar conflictos técnicos.

## Visión General de Integración

Para que el chatbot funcione correctamente, debe estar alineado con los datos maestros del recorrido:

### 1. El Eje Central: data.js

- **Referencia**: [app-files/data.js](../../../app-files/data.js)
- **Importancia**: Si el chatbot debe referenciar escenas o hotspots, los IDs deben coincidir exactamente con los definidos en `APP_DATA.scenes`.

### 2. Estructura del Chatbot

- **Lógica de Interacción**: [app-files/chatbot/chatbotSidebar.js](../../../app-files/chatbot/chatbotSidebar.js). Aquí se gestionan los flujos de conversación.
- **Base de Conocimientos (FAQ)**: [app-files/chatbot/chatbotData.js](../../../app-files/chatbot/chatbotData.js). Es el lugar principal para añadir nuevas respuestas.
- **Interfaz de Usuario**: [app-files/chatbot/chatbotHTMLTemplate.js](../../../app-files/chatbot/chatbotHTMLTemplate.js).
- **Estilos Visuales**: [app-files/styles/chatbot/](../../../app-files/styles/chatbot/).

### 3. Conectividad con Marzipano

- **Cambio de Escena**: Si una opción del chatbot debe teletransportar al usuario, se debe invocar la lógica de navegación definida en [app-files/index.js](../../../app-files/index.js).

## Procedimientos para el Chatbot

### Añadir una Nueva Respuesta o Categoría

1. Identificar si la respuesta requiere datos estáticos o dinámicos.
2. Actualizar `chatbotData.js` con el nuevo contenido.
3. Si la respuesta es una "acción" (ej. abrir un modal o cambiar de escena), configurar el listener en `chatbotSidebar.js`.

### Modificar el Diseño del Chatbot

1. Realizar cambios estructurales en `chatbotHTMLTemplate.js`.
2. Ajustar estilos en `chatbotSidebar.css` o `chatbotHTMLTemplate.css` dentro de `app-files/styles/chatbot/`.

### Troubleshooting de Integración

- Asegurarse de que el `chatbotManager.js` esté cargando correctamente en el `index.html`.
- Verificar que las referencias a `window.APP_DATA` no estén corruptas si el chatbot depende de información de las escenas.
