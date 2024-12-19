import typography from '@tailwindcss/typography';

export default {
    darkMode: 'class',
    content: [
        './.vitepress/**/*.{js,ts,vue}',
        './src/**/*.{js,ts,vue}',
        './pages/**/*.md',
    ],
    theme: {
        container: {
            center: true,
            screens: {
                sm: '100%',
                md: '100%',
                lg: '1024px',
                xl: '1152px',
                '2xl': '1152px',
                '3xl': '1152px',
                '4xl': '1152px',
                '5xl': '1152px',
                '6xl': '1152px',
                '7xl': '1152px',
            },
        },
        extend: {
            colors: {
                'tt': '#ea6e63',
                'tt-light': '#ec7c73',
                'tt-lighter': '#ef928a',
                'tt-dark': '#e86054',
                'tt-darker': '#e65346',
                'tt-link': '#ea6d62',
                'code-bg': {
                    DEFAULT: '#f6f6f7',
                    dark: '#161618',
                },
                'vp-bg': {
                    DEFAULT: '#e2e2e3',
                    dark: '#131c2f',
                },
            }
        },
    },
    plugins: [
        typography,
    ],
};
