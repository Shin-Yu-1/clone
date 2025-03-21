import { createBrowserRouter } from 'react-router-dom';

import { ROUTE_PATH } from '@/constant/routes';
import ErrorPage from '@/pages/error/Error';
import MainPage from '@/pages/main/Main';

export const router = createBrowserRouter([
  {
    path: ROUTE_PATH.MAIN,
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
]);
