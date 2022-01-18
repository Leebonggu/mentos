import { BrowserRouter } from 'react-router-dom';
import RootRouter from '@/Routes'
import Header from '@components/Header';
import Layout from '@components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <RootRouter />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
