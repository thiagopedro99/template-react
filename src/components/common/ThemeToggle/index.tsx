import { useAppStore } from '@stores/App/appStore';
import { Moon, Sun } from 'lucide-react';
import { ToggleButton, Icon } from './styles';
import Tooltip from '../Tooltip';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useAppStore();

  return (
    <Tooltip 
      text={`Mudar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
      position="bottom"
    >
      <ToggleButton 
        onClick={toggleTheme}
        aria-label="Alternar tema"
      >
        <Icon $isLight={theme === 'light'}>
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </Icon>
      </ToggleButton>
    </Tooltip>
  );
};

export default ThemeToggle;