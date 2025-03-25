import { createBrowserRouter } from 'react-router-dom';

import Layout from '@/components/Layout.jsx';
import { ROUTE_PATH } from '@/constant/routes';
import DetailPage from '@/pages/detail/Detail.jsx';
import ErrorPage from '@/pages/error/Error';
import MainPage from '@/pages/main/Main';
import SearchPage from '@/pages/search/Search.jsx';

export const router = createBrowserRouter([
  {
    path: ROUTE_PATH.MAIN,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: ':movieId',
        element: <DetailPage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
