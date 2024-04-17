import { createBrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import PublicComponent from 'core/layouts/public/public.component';
import HomeComponent from 'pages/home/home.component';
import NotFound from 'pages/not-found/notfound.component';
import ContactComponent from 'pages/contact/contact.component';
import AboutComponent from 'pages/about/about.component';
import PartnersComponent from 'pages/partners/partners.component';
import ProductsComponent from 'pages/products/products.componet';
import ProductDetailedComponent from 'pages/product-detailed/product-detailed.component';


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
          path: Routes.products,
          element: <ProductsComponent />,
        },
        {
          path:`${ Routes.productDetailed}/:productId`,
          element: <ProductDetailedComponent />,
        },
        {
          path: Routes.partners,
          element: <PartnersComponent />,
        },
        {
          path: Routes.about,
          element: <AboutComponent />,
        },
        {
          path: Routes.contact,
          element: <ContactComponent />,
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
