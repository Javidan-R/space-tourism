import router from './router/router';
import { RouterProvider } from 'react-router-dom';
import './App.scss';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import useGlobalStyles from 'assets/styles/style';
import { ConfigProvider } from 'antd';
import { themeConfig } from './core/configs/theme.config';
import { useStore } from './store/store.config';
import LoaderComponent from 'core/shared/loader/loader.component';

const queryClient = new QueryClient();

function App() {
  const loader = useStore('loader');

  useGlobalStyles();
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={themeConfig}>
        <div className='App'>
          <RouterProvider router={router} />
          {loader ? <LoaderComponent /> : null}
        </div>
      </ConfigProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default App;
