// src/styles/themes/dark.ts
export const darkTheme = {
    colors: {
        primary: '#90caf9',
        primaryDark: '#42a5f5',
        primaryLight: '#e3f2fd',

        secondary: '#f48fb1',
        secondaryDark: '#f06292',
        secondaryLight: '#fce4ec',

        background: '#121212',
        surface: '#1e1e1e',

        text: {
            primary: '#ffffff',
            secondary: 'rgba(255, 255, 255, 0.7)',
            disabled: 'rgba(255, 255, 255, 0.5)',
            inverse: 'rgba(0, 0, 0, 0.87)',
        },

        border: '#424242',
        borderLight: '#2c2c2c',

        error: '#f44336',
        success: '#66bb6a',
        warning: '#ffa726',
        info: '#29b6f6',

        overlay: 'rgba(0, 0, 0, 0.7)',
    },

    fonts: {
        primary: '"Roboto", "Helvetica", "Arial", sans-serif',
        sizes: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
        },
        weights: {
            light: 300,
            regular: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
        },
    },

    spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
    },

    borderRadius: {
        none: '0',
        sm: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        full: '9999px',
    },

    shadows: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.4)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.6)',
        none: 'none',
    },

    transitions: {
        fast: '150ms ease-in-out',
        normal: '250ms ease-in-out',
        slow: '350ms ease-in-out',
    },

    breakpoints: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
    },

    zIndex: {
        dropdown: 1000,
        sticky: 1020,
        fixed: 1030,
        backdrop: 1040,
        modal: 1050,
        popover: 1060,
        tooltip: 1070,
    },
};