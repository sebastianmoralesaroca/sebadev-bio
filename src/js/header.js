// header.js - Header con imagen de fondo

export function createHeader() {
    const header = document.createElement('header');
    header.className = 'w-full fixed top-0 left-0';
    header.style.height = '580px';
    header.style.zIndex = '5';

    header.innerHTML = `
        <!-- Imagen de fondo -->
        <div class="w-full h-full relative">
            <img
                src="/public/me.jpg"
                alt="Background"
                class="w-full h-full object-cover"
            />
            <!-- Overlay oscuro -->
            <div class="absolute inset-0 bg-black opacity-30"></div>
        </div>
    `;

    return header;
}
