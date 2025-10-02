// src/styles/themes/light.ts
export const lightTheme = {
    colors: {
        primary: '#6B7280',
        primaryDark: '#4B5563',
        primaryLight: '#9CA3AF',

        secondary: '#374151',
        secondaryDark: '#1F2937',
        secondaryLight: '#6B7280',

        background: '#F9FAFB',
        surface: '#FFFFFF',

        text: {
            primary: '#111827',
            secondary: '#6B7280',
            disabled: '#9CA3AF',
            inverse: '#FFFFFF',
        },

        border: '#E5E7EB',
        borderLight: '#F3F4F6',

        error: '#EF4444',
        success: '#10B981',
        warning: '#F59E0B',
        info: '#3B82F6',

        overlay: 'rgba(0, 0, 0, 0.5)',
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
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
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