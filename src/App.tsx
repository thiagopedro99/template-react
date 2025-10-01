import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";
import GlobalStyles from "@styles/globalStyles";
import Router from "@routes/index";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
};

export default App;