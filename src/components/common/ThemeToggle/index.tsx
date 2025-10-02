// src/components/common/ThemeToggle/index.tsx
import { useAppStore } from '@stores/App/appStore';
import { ToggleButton, Icon } from './styles';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useAppStore();

  return (
    <ToggleButton 
      onClick={toggleTheme}
      aria-label="Alternar tema"
      title={`Mudar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
    >
      <Icon $isLight={theme === 'light'}>
        {theme === 'light' ? (
          // Ícone de lua (modo escuro)
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          // Ícone de sol (modo claro)
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
          </svg>
        )}
      </Icon>
    </ToggleButton>
  );
};

export default ThemeToggle;