import { RouterProvider } from 'react-router-dom';

import { router } from '@/router/index';
import GlobalStyle from '@/styles/globalStyle.js';

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
