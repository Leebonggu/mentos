import { BrowserRouter } from 'react-router-dom';
import RootRoutes from './Routes';
import Header from '@components/Header';
import Layout from '@components/Layout';

function App() {
  const isDev = process.env.NODE_ENV === 'development';
  
  return (
    <BrowserRouter basename={isDev ? '/' : process.env.PUBLIC_URL}>
      <Header />
      <Layout>
        <RootRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
