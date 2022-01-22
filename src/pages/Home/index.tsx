import { Container } from './styles';
import Swiper from '@components/Swiper'
import PhotoCard from '@components/PhotoCard';
import CommunityCard from '@components/CommunityCard';
import Icon from '@components/atom/Icon';

function Home() {
  return (
    <Container>
      <Swiper />
      <div>Home</div>
      <PhotoCard />
      <CommunityCard />
    </Container>
  )
}

export default Home;
