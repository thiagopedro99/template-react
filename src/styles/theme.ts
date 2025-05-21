import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#6B7280', // Cinza médio, elegante como cor principal
        },
        secondary: {
            main: '#374151', // Cinza escuro (quase grafite), para contraste
        },
        background: {
            default: '#F9FAFB' // Um tom de branco acinzentado, bem neutro
        }
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '5rem',
            fontWeight: 700,
            textTransform: 'uppercase',
        },
        h2: {
            fontSize: '2.5rem',
            fontWeight: 700,
        },
        h6: {
            fontSize: '1.2rem',
            fontWeight: 500,
        },
        body1: {
            fontSize: '1.1rem',
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 4,
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    letterSpacing: 1,
                }
            }
        }
    }
});