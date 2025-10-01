export const theme = {
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
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem',// 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
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
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
  },
  
  borderRadius: {
    none: '0',
    sm: '0.25rem',   // 4px
    md: '0.375rem',  // 6px
    lg: '0.5rem',    // 8px
    xl: '0.75rem',   // 12px
    '2xl': '1rem',   // 16px
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
} as const;

export type Theme = typeof theme;

