import { Container } from './styles';
import Swiper from '@components/Swiper'
import PhotoCard from '@components/PhotoCard';

function Home() {
  return (
    <Container>
      <Swiper />
      <div>Home</div>
      <PhotoCard />
    </Container>
  )
}

export default Home;
