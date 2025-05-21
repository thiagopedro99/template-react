import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { theme } from "@styles/theme";
import GlobalStyles from '@styles/globalStyles';
import Router from '@routes/index';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
};

export default App;