import { RouterProvider } from 'react-router-dom';

import { router } from '@/router/index';
import { ThemeProviderWrapper } from '@/store/ThemeContext.js';
import GlobalStyle from '@/styles/globalStyle.js';

function App() {
  return (
    <ThemeProviderWrapper>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProviderWrapper>
  );
}

export default App;
