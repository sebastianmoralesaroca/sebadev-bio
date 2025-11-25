// Configuración de Tailwind CSS
tailwind.config = {
    theme: {
        extend: {
            // Colores personalizados
            colors: {
                primary: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                },
                accent: {
                    50: '#ecfeff',
                    100: '#cffafe',
                    200: '#a5f3fc',
                    300: '#67e8f9',
                    400: '#22d3ee',
                    500: '#06b6d4',
                    600: '#0891b2',
                    700: '#0e7490',
                    800: '#155e75',
                    900: '#164e63',
                },
                dark: {
                    DEFAULT: '#000000',
                    50: '#1a1a1a',
                    100: '#0d0d0d',
                    200: '#171717',
                    300: '#262626',
                    400: '#404040',
                    500: '#525252',
                    600: '#737373',
                    700: '#a3a3a3',
                    800: '#d4d4d4',
                    900: '#f5f5f5',
                }
            },

            // Fuentes personalizadas
            fontFamily: {
                sans: ['Ubuntu', 'system-ui', '-apple-system', 'sans-serif'],
                display: ['Ubuntu', 'system-ui', 'sans-serif'],
                mono: ['Ubuntu Mono', 'monospace'],
            },

            // Tamaños de fuente
            fontSize: {
                'hero': ['4rem', { lineHeight: '1', fontWeight: '900' }],
                'display': ['3rem', { lineHeight: '1.1', fontWeight: '800' }],
            },

            // Animaciones personalizadas
            animation: {
                'fade-in': 'fadeIn 0.6s ease-in',
                'slide-up': 'slideUp 0.5s ease-out',
                'bounce-slow': 'bounce 2s infinite',
            },

            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            },

            // Sombras personalizadas
            boxShadow: {
                'glow': '0 0 20px rgba(0, 217, 255, 0.5)',
                'glow-lg': '0 0 30px rgba(0, 217, 255, 0.8)',
                'card': '0 20px 40px rgba(0, 217, 255, 0.3)',
            }
        }
    }
}
