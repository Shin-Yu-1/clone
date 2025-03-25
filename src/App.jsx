import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { router } from '@/router';
import DefaultTheme from '@/styles/defaultTheme';
import GlobalStyle from '@/styles/globalStyle';

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
