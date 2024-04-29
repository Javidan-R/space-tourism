import { createBrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import PublicComponent from 'core/layouts/public/public.component';
import HomeComponent from 'pages/home/home.component';
import NotFound from 'pages/not-found/notfound.component';
import DestionationComponent from 'pages/destionation/destionation.component';
import CrewComponent from 'pages/products/crew.componet';
import TechnologyComponent from 'pages/technology/technology.component';


const router = createBrowserRouter(
  [
    {
      element: (
          <PublicComponent />
      ),
      children: [
        {
          path: Routes.home,
          element: <HomeComponent />,
        },
        {
          path: Routes.destination,
          element: <DestionationComponent />,
        },
        {
          path: Routes.crew,
          element: <CrewComponent />,
        },
        {
          path: Routes.technology,
          element: <TechnologyComponent />,
        },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
  { basename: '/' }
);

export default router;
