// portada.js - Sección de portada con título, descripción y botones

export function createPortada() {
    const portada = document.createElement('section');
    portada.className = 'w-full flex flex-col items-center justify-center';
    portada.style.minHeight = '350px';
    portada.style.position = 'relative';
    portada.style.marginTop = '460px';
    portada.style.transform = 'translateY(-500px)';
    portada.style.zIndex = '10';

    portada.innerHTML = `
        <!-- Contenido principal -->
        <div class="flex flex-col items-center justify-center  text-center w-full max-w-2xl" style="background: linear-gradient(to bottom, transparent 0%, #000000 40%, #000000 70%); margin-top: inherit;">

            <!-- Título -->
            <h1 class="text-6xl font-black text-white tracking-tight uppercase mb-4">
                SEBASTIAN
            </h1>

            <!-- Descripción -->
            <p class="text-cyan-400 max-w-lg mb-8 text-base leading-relaxed">
                Ingeniero Software | Desarrollador FullStack<br>
                IA | Data Base SQL NoSQL
            </p>

            <!-- Botones de RRSS -->
            <div class="flex gap-4 items-center justify-center mb-12">
                <a
                    href="https://www.linkedin.com/in/sebastian-cmoralesaroca-110940179/"
                    target="_blank"
                    class="social-icon w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center text-black hover:bg-cyan-300"
                >
                    <i class="fab fa-linkedin-in text-xl"></i>
                </a>

                <a
                    href="https://www.instagram.com/seba.devs/"
                    target="_blank"
                    class="social-icon w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center text-black hover:bg-cyan-300"
                >
                    <i class="fab fa-instagram text-xl"></i>
                </a>

                <a
                    href="https://www.tiktok.com/@sebadevs?_r=1&_d=edg5dgg95b5g1a&sec_uid=MS4wLjABAAAA0f4OBtSvq90Ra1r32Ywk926PApNdOZlPm_w9B195iXPeTxDa_Zu1GEXL0zDgiA7o&share_author_id=7089451988085933062&sharer_language=es&source=h5_m&u_code=e1bd4klf16g8b5&ug_btm=b8727,b0&sec_user_id=MS4wLjABAAAA0f4OBtSvq90Ra1r32Ywk926PApNdOZlPm_w9B195iXPeTxDa_Zu1GEXL0zDgiA7o&utm_source=whatsapp&social_share_type=5&utm_campaign=client_share&utm_medium=ios&tt_from=whatsapp&user_id=7089451988085933062&enable_checksum=1&share_link_id=68D8B8DA-CE4B-400F-B3FB-D0A63F11C3A8&share_app_id=1233"
                    target="_blank"
                    class="social-icon w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center text-black hover:bg-cyan-300"
                >
                    <i class="fab fa-tiktok text-xl"></i>
                </a>
            </div>

            <!-- Flecha scroll down -->
            <div class="animate-bounce">
                <i class="fas fa-chevron-down text-cyan-400 text-2xl"></i>
            </div>

        </div>
    `;

    return portada;
}
