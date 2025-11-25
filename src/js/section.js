// section.js - Sección con card de proyecto

export function createSection() {
    const section = document.createElement('section');
    section.className = 'w-full min-h-screen bg-black py-20 px-6';
    section.style.marginTop = '-500px';
    section.style.position = 'relative';
    section.style.zIndex = '10';

    section.innerHTML = `
        <div class="max-w-4xl mx-auto relative">

            <!-- Servicios -->
            <a href="https://sebadev123.netlify.app/" target="_blank" class="block relative border-2 border-cyan-400 rounded-2xl p-8 hover:bg-gray-900/30 transition-all duration-300 overflow-hidden cursor-pointer">
                <!-- Imagen de fondo -->
                <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('public/services.jpeg')"></div>
                <!-- Overlay oscuro -->
                <div class="absolute inset-0 bg-black/70"></div>

                <!-- Contenido -->
                <div class="relative z-10 text-center">
                    <!-- Título -->
                    <h3 class="text-2xl font-bold text-white mb-4">
                        Servicios & Trabajos
                    </h3>

                    <!-- Descripción -->
                    <p class="text-gray-400 max-w-2xl mx-auto">
                        Explora lo que hago y en qué he trabajado. Proyectos reales y áreas en las que me especializo.
                    </p>
                </div>
            </a>

            <!-- Bnn Menu -->
            <a href="" target="_blank" class="block relative mt-6 border-2 border-cyan-400 rounded-2xl p-8 hover:bg-gray-900/30 transition-all duration-300 overflow-hidden cursor-pointer">
                <!-- Imagen de fondo -->
                <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('public/menu.jpeg')"></div>
                <!-- Overlay oscuro -->
                <div class="absolute inset-0 bg-black/70"></div>

                <!-- Contenido -->
                <div class="relative z-10 text-center">
                    <!-- Título -->
                    <h3 class="text-2xl font-bold text-white mb-4">
                        Founder Bnn Menu
                    </h3>

                    <!-- Descripción -->
                    <p class="text-gray-400 max-w-2xl mx-auto">
                        Menú digital para restaurantes. Gestiona platos, inventario y pedidos desde una app intuitiva.
                    </p>
                </div>
            </a>

            <!-- Bnn Web -->
            <a href="" target="_blank" class="block relative mt-6 border-2 border-cyan-400 rounded-2xl p-8 hover:bg-gray-900/30 transition-all duration-300 overflow-hidden cursor-pointer">
                <!-- Imagen de fondo -->
                <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('public/bnn1.jpeg')"></div>
                <!-- Overlay oscuro -->
                <div class="absolute inset-0 bg-black/70"></div>

                <!-- Contenido -->
                <div class="relative z-10 text-center">
                    <!-- Título -->
                    <h3 class="text-2xl font-bold text-white mb-4">
                        Founder Bnn Web
                    </h3>

                    <!-- Descripción -->
                    <p class="text-gray-400 max-w-2xl mx-auto">
                        Agencia de desarrollo web con planes de suscripción y soporte técnico 24/7.
                    </p>
                </div>
            </a>

            <!-- CV -->
            <a href="#" target="_blank" class="block relative mt-6 border-2 border-cyan-400 rounded-2xl p-8 hover:bg-gray-900/30 transition-all duration-300 overflow-hidden cursor-pointer">
                <!-- Imagen de fondo -->
                <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('public/code.jpeg')"></div>
                <!-- Overlay oscuro -->
                <div class="absolute inset-0 bg-black/70"></div>

                <!-- Contenido -->
                <div class="relative z-10 text-center">
                    <!-- Título -->
                    <h3 class="text-2xl font-bold text-white mb-4">
                        CV
                    </h3>

                    <!-- Descripción -->
                    <p class="text-gray-400 max-w-2xl mx-auto">
                        Revisa mi currículum y todas las tecnologías con las que he trabajado.
                    </p>
                </div>
            </a>

            <!-- GitHub -->
            <a href="https://github.com/sebastianmoralesaroca" target="_blank" class="block relative mt-6 border-2 border-cyan-400 rounded-2xl p-8 hover:bg-gray-900/30 transition-all duration-300 overflow-hidden cursor-pointer">
                <!-- Imagen de fondo -->
                <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('public/github.jpeg')"></div>
                <!-- Overlay oscuro -->
                <div class="absolute inset-0 bg-black/70"></div>

                <!-- Contenido -->
                <div class="relative z-10 text-center">
                    <!-- Título -->
                    <h3 class="text-2xl font-bold text-white mb-4">
                        GitHub
                    </h3>

                    <!-- Descripción -->
                    <p class="text-gray-400 max-w-2xl mx-auto">
                        Explora el código fuente de mis proyectos. Código limpio y mejores prácticas.
                    </p>
                </div>
            </a>

        </div>
    `;

    return section;
}
