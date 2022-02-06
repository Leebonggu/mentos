import { BrowserRouter } from 'react-router-dom';
import RootRoutes from '@/Routes';
import Header from '@components/Header';
import Layout from '@components/Layout';
import Footer from '@components/Footer';
import { useMobileMode } from '@/hooks/useMobileWidth';
import MobileFooter from '@components/Footer/MobileFooter'
import axios from 'axios';

function App() {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
  const isDev = process.env.NODE_ENV === 'development';
  const isMobile = useMobileMode();
  
  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <RootRoutes />
      </Layout>
      {isMobile ? <MobileFooter /> : <Footer />}
    </BrowserRouter>
  );
}

export default App;
