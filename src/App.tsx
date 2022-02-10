import { BrowserRouter } from 'react-router-dom';
import RootRoutes from '@/Routes';
import Header from '@components/Header';
import Layout from '@components/Layout';
import Footer from '@components/Footer';
import { useMobileMode } from '@/hooks/useMobileWidth';
import MobileFooter from '@components/Footer/MobileFooter'

function App() {
  const isMobile = useMobileMode();

  return (
    <main>
      <BrowserRouter>
        <Header />
          <Layout>
            <RootRoutes />
          </Layout>
        {isMobile ? <MobileFooter /> : <Footer />}
      </BrowserRouter>
    </main>
  );
}

export default App;
