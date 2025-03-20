import { createBrowserRouter } from 'react-router-dom';

import MainPage from '@/pages/main/Main';

import ErrorPage from '@/pages/error/Error';

import { ROUTE_PATH } from '@/constant/routes';

export const router = createBrowserRouter([
  {
    path: ROUTE_PATH.MAIN,
    element: <MainPage />,
    errorElement: <ErrorPage />,
  }
]);