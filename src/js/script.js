// script.js - Orquestador principal de la aplicación

import { createHeader } from './header.js';
import { createPortada } from './portada.js';
import { createSection } from './section.js';

/**
 * Función principal que inicializa la aplicación
 * Carga: HEADER (fijo), PORTADA, SECTION
 */
function initApp() {
    const app = document.getElementById('app');

    if (!app) {
        console.error('❌ No se encontró el contenedor #app');
        return;
    }

    // Limpiar contenedor
    app.innerHTML = '';

    // Crear y agregar componentes
    const header = createHeader();
    const portada = createPortada();
    const section = createSection();

    // Agregar al DOM en orden
    app.appendChild(header);
    app.appendChild(portada);
    app.appendChild(section);

    console.log('✅ Aplicación inicializada - HEADER, PORTADA y SECTION cargados');
}

/**
 * Inicializar cuando el DOM esté listo
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// Exportar para uso en otros módulos si es necesario
export { initApp };
