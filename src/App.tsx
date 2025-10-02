// src/App.tsx
import { ThemeProvider } from "styled-components";
import { themes } from "@styles/themes";
import GlobalStyles from "@styles/globalStyles";
import Router from "@routes/index";
import { ToastProvider } from "@components/toast";
import { useAppStore } from "@stores/App/appStore";

const App = () => {
  const theme = useAppStore((state) => state.theme);
  const currentTheme = themes[theme];

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <ToastProvider>
        <Router />
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;